import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { UserInput } from './dtos/create-user.input';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserEntity])
  async getAllUsers() {
    return this.userService.getAll();
  }

  @Mutation(() => UserEntity)
  createUser(@Args('userInput') userInput: UserInput): Promise<UserEntity> {
    return this.userService.createUser(userInput);
  }
}
