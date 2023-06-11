import { UserRoleEnum } from 'src/types';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Item } from './Item';
import { Gift } from './Gift';
import { UserEvent } from './UserEvent';
import { Report } from './Report';
import { Suggestion } from './Suggestion';
import { Badge } from './Badge';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
    default: null
  })
  email: string;

  @Column()
  post: string;

  @Column({
    type: 'enum',
    enum: UserRoleEnum,
    default: UserRoleEnum.PLAYER
  })
  roles: UserRoleEnum[];

  @Column()
  password: string;

  @Column({
    default: ''
  })
  image: string;

  @Column({
    default: 0
  })
  score: number;

  @Column({
    default: 0
  })
  coins: number;

  @ManyToMany(() => Item, { cascade: true })
  @JoinTable()
  purchases: Item[];

  @OneToMany(() => Gift, (gift) => gift.giftee)
  receivedGifts: Gift[];

  @OneToMany(() => UserEvent, (userEvent) => userEvent.user)
  events: UserEvent[];
  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];
  @OneToMany(() => Suggestion, (suggestion) => suggestion.user)
  suggestions: Suggestion[];
  @ManyToMany(() => Badge, (badge) => badge.users)
  @JoinTable()
  badges: Badge[];
}
