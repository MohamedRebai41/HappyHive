import { Item } from './../Entities/Item';
import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemTypeEnum } from 'src/types';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  addItem(
    @Body()
    data: {
      name: string;
      description: string;
      price: number;
      image: string;
      type: ItemTypeEnum;
    }
  ) {
    return this.itemService.addItem(data);
  }

  @Get()
  getItems() {
    return this.itemService.getItems();
  }

  @Delete(':id')
  deleteItem(@Param('id') id: number) {
    return this.itemService.deleteItem(id);
  }

  @Post('purchase/:id')
  purchaseItem(@Param('id') id: number, @Body('userId') userId: number) {
    return this.itemService.purchaseItem(id, userId);
  }
}
