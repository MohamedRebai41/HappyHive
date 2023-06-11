import { Controller, Post, Body } from '@nestjs/common';
import { GiftService } from './gift.service';

@Controller('gifts')
export class GiftController {
  constructor(private readonly giftService: GiftService) {}

  @Post('giftUser')
  giftUser(
    @Body()
    data: {
      gifterId: number;
      gifteeId: number;
      name: string;
      message: string;
    }
  ) {
    return this.giftService.giftUser(
      data.gifterId,
      data.gifteeId,
      data.name,
      data.message
    );
  }
}
