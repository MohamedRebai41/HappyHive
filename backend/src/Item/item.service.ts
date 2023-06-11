import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/Entities/Item';
import { UserService } from 'src/User/user.service';
import { ItemTypeEnum } from 'src/types';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
    private readonly userService: UserService
  ) {}

  addItem(data: {
    name: string;
    description: string;
    price: number;
    image: string;
    type: ItemTypeEnum;
  }): Promise<Item> {
    const item = new Item();
    item.name = data.name;
    item.description = data.description;
    item.price = data.price;
    item.image = data.image;
    item.type = data.type;
    return this.itemRepository.save(item);
  }

  getItems(): Promise<Item[]> {
    return this.itemRepository.find({ order: { price: 'ASC' } });
  }

  async deleteItem(id: number): Promise<void> {
    await this.itemRepository.delete(id);
  }

  async purchaseItem(itemId: number, userId: number): Promise<void> {
    const item = await this.itemRepository.findOneBy({ id: itemId });
    const user = await this.userService.getUser(userId);

    if (item && user) {
      user.purchases.push(item);
      user.coins -= item.price;
      await this.userService.updateUser(user);
    }
  }
}
