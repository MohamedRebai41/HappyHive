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
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
