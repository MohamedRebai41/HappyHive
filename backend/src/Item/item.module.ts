import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/Entities/Item';
import { User } from 'src/Entities/User';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { UserService } from 'src/User/user.service';
import { UserModule } from 'src/User/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Item, User]), UserModule],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
