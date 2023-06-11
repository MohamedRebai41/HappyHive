import { ItemTypeEnum } from 'src/types';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { User } from './User';

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column({ type: 'enum', enum: ItemTypeEnum, default: ItemTypeEnum.BUYABLE })
  type: ItemTypeEnum;
  @ManyToMany(() => User, (user) => user.purchases)
  players: User[];
}
