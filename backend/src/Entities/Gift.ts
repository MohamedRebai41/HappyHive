import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Gift {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  message: string;

  @ManyToOne(() => User)
  gifter: User;

  @ManyToOne(() => User, (user) => user.receivedGifts)
  giftee: User;
}
