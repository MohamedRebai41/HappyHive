import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  getUser(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  getLeaderboard(): Promise<User[]> {
    return this.userRepository.find({
      order: {
        score: 'DESC'
      }
    });
  }

  async updateScore(id: number, score: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    user.score = score;
    return this.userRepository.save(user);
  }

  async updateCoins(id: number, coins: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    user.coins = coins;
    return this.userRepository.save(user);
  }

  async updateUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}
