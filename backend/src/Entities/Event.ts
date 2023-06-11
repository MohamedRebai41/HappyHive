import { EventTypeEnum } from 'src/types';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { UserEvent } from './UserEvent';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  image: string;
  @Column({ type: 'enum', enum: EventTypeEnum })
  type: EventTypeEnum;
  @Column()
  date: Date;
  @Column()
  location: string;
  @Column()
  QRcode: string;
  @OneToMany(() => UserEvent, (userEvent) => userEvent.event)
  users: UserEvent[];
}
