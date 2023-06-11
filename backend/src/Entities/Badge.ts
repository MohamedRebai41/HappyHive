import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  BaseEntity
} from 'typeorm';
import { User } from './User';

@Entity()
export class Badge extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @ManyToMany(() => User, (user) => user.badges)
  @JoinTable()
  users: User[];
}
