import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserInput } from './dtos/create-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async getAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async createUser(userInput: UserInput): Promise<UserEntity> {
    const newUser = this.userRepository.create(userInput);

    return this.userRepository.save(newUser);
  }

  async deleteUser(uuid: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { uuid } });
    if (!user) throw new NotFoundException();

    await this.userRepository.delete({ uuid });
    return user;
  }
}
