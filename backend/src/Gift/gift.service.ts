import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gift } from 'src/Entities/Gift';
import { UserService } from 'src/User/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class GiftService {
  constructor(
    @InjectRepository(Gift)
    private readonly giftRepository: Repository<Gift>,
    private readonly userService: UserService
  ) {}

  async giftUser(
    gifterId: number,
    gifteeId: number,
    name: string,
    message: string
  ): Promise<Gift> {
    const gifter = await this.userService.getUser(gifterId);
    const giftee = await this.userService.getUser(gifteeId);

    await this.userService.updateScore(gifteeId, giftee.score + 100);
    await this.userService.updateCoins(gifteeId, giftee.coins + 10);

    const gift = new Gift();
    gift.name = name;
    gift.message = message;
    gift.gifter = gifter;
    gift.giftee = giftee;

    return this.giftRepository.save(gift);
  }
}
