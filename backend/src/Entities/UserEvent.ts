import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne
} from 'typeorm';
import { User } from './User';
import { Event } from './Event';

@Entity()
export class UserEvent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @Column()
  feedback: string;

  @ManyToOne(() => User, (user) => user.events)
  user: User;

  @ManyToOne(() => Event, (event) => event.users)
  event: Event;
}
