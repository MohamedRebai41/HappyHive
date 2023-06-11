import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as qrcode from 'qrcode';

import * as path from 'path';

import { Event } from 'src/Entities/Event';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>
  ) {}

  async getEvents(): Promise<Event[]> {
    return this.eventRepository.find({ order: { date: 'ASC' } });
  }

  async getEvent(id: number): Promise<Event> {
    const event = await this.eventRepository.findOneBy({ id });
    if (!event) {
      throw new BadRequestException('Event not found');
    }
    return event;
  }

  async createEvent(eventData: Partial<Event>): Promise<Event> {
    const event = new Event();
    event.name = eventData.name;
    event.description = eventData.description;
    event.date = eventData.date;
    event.location = eventData.location;

    // Save the event to the database
    await this.eventRepository.save(event);

    // Generate QR code and save it as an image
    const qrCodeData = `Event ID: ${event.id}`;
    const qrCodeImagePath = path.join('public', `${event.id}.png`);
    await qrcode.toFile(qrCodeImagePath, qrCodeData);
    event.QRcode = qrCodeImagePath;

    // Update the event in the database with the QR code image path
    await this.eventRepository.save(event);

    return event;
  }
}
