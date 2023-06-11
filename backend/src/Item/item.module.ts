import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/Entities/Item';
import { User } from 'src/Entities/User';
import { UserService } from 'src/User/user.service';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
  imports: [TypeOrmModule.forFeature([Item, User])],
  controllers: [ItemController],
  providers: [ItemService, UserService]
})
export class ItemModule {}
