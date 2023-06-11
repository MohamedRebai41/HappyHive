import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './Entities/User';
import { Item } from './Entities/Item';
import { Gift } from './Entities/Gift';
import { Suggestion } from './Entities/Suggestion';
import { UserEvent } from './Entities/UserEvent';
import { Badge } from './Entities/Badge';
import { Report } from './Entities/Report';
import { Event } from './Entities/Event';

import { EventModule } from './Event/event.module';
import { UserModule } from './User/user.module';
import { ItemModule } from './Item/item.module';
import { GiftModule } from './Gift/gift.module';
import { QueryRunnerProviderAlreadyReleasedError } from 'typeorm';
import { UserService } from './User/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'happy-hive',
      entities: [User, Item, Gift, Report, Suggestion, Event, UserEvent, Badge],
      synchronize: true
    }),
    EventModule,
    UserModule,
    ItemModule,
    GiftModule
  ]
})
export class AppModule {}
