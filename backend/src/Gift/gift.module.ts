import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GiftController } from './gift.controller';
import { GiftService } from './gift.service';
import { UserService } from 'src/User/user.service';
import { User } from 'src/Entities/User';
import { Gift } from 'src/Entities/Gift';

@Module({
  imports: [TypeOrmModule.forFeature([Gift, User])],
  controllers: [GiftController],
  providers: [GiftService, UserService]
})
export class GiftModule {}
