import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/Entities/Event';
import { User } from 'src/Entities/User';
import { UserEvent } from 'src/Entities/UserEvent';
import { Repository } from 'typeorm';

@Injectable()
export class EventUserService {
  constructor(
    @InjectRepository(UserEvent)
    private readonly userEventRepository: Repository<UserEvent>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>
  ) {}

  async checkin(userId: number, eventId: number): Promise<UserEvent> {
    const user = await this.userRepository.findOneBy({ id: userId });
    const event = await this.eventRepository.findOneBy({ id: eventId });

    if (!user || !event) {
      throw new NotFoundException('User or event not found');
    }

    const userEvent = new UserEvent();
    userEvent.user = user;
    userEvent.event = event;
    user.score += 100;
    user.coins += 10;
    await this.userEventRepository.save(userEvent);

    return userEvent;
  }
}
