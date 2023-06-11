import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from 'src/Entities/Event';
import { EventUserService } from './eventUser.service';

@Controller('events')
export class EventController {
  constructor(
    private readonly eventService: EventService,
    private readonly eventUserService: EventUserService
  ) {}

  @Get()
  async getEvents(): Promise<Event[]> {
    return this.eventService.getEvents();
  }

  @Get(':id')
  async getEvent(@Param('id') id: number): Promise<Event> {
    return this.eventService.getEvent(id);
  }

  @Post()
  async createEvent(@Body() eventData: Partial<Event>): Promise<Event> {
    return this.eventService.createEvent(eventData);
  }

  @Post('checkin')
  async checkin(
    @Param('userId') userId: number,
    @Param('eventId') eventId: number
  ): Promise<void> {
    await this.eventUserService.checkin(userId, eventId);
  }
}
