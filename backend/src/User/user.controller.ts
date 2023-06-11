import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.userService.getUser(id);
  }

  @Get('leaderboard')
  getLeaderboard() {
    return this.userService.getLeaderboard();
  }

  @Put(':id/score')
  updateScore(@Param('id') id: number, @Body('score') score: number) {
    return this.userService.updateScore(id, score);
  }

  @Put(':id/coins')
  updateCoins(@Param('id') id: number, @Body('coins') coins: number) {
    return this.userService.updateCoins(id, coins);
  }
}
