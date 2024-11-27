import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../Objects/User';
import { UserService } from '../user.service';
import { NotFoundException } from '@nestjs/common';
import { NewUserInput } from '../Objects/newUser.dto';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  async getUserById(@Args('id', { type: () => String }) id: string) {
    const user = await this.userService.findOneById(id);

    if (!user) {
        throw new NotFoundException;
    }

    return user;
  }

  @Mutation((returns) => User)
  async addNewUser(@Args('newUserDTO') newUserDTO: NewUserInput) : Promise<User>{
    const user = this.userService.addNewUser(newUserDTO);
    return user;
  }
}