import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity
} from 'typeorm';
import { User } from './User';

@Entity()
export class Suggestion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  object: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.reports)
  user: User;
}
