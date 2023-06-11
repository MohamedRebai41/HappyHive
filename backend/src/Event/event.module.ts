import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/Entities/Event';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { EventUserService } from './eventUser.service';
import { User } from 'src/Entities/User';
import { UserEvent } from 'src/Entities/UserEvent';

@Module({
  imports: [TypeOrmModule.forFeature([Event, User, UserEvent])],
  controllers: [EventController],
  providers: [EventService, EventUserService]
})
export class EventModule {}
