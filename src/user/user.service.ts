import { Injectable } from '@nestjs/common';
import { User } from "./Objects/User";
import { NewUserInput } from './Objects/newUser.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class UserService {
    private users: User[];
    constructor() {
        this.users = [];
    }

    async findOneById(id:string) : Promise<User> {

        const user = this.users.find((u) => u.id === id)

        return user;
    }

    async addNewUser(user: NewUserInput): Promise<User> {
        const newUser: User = {
          firstname: user.firstName,
          lastname: user.lastName,
          age: user.age,
          createdDate: new Date(),
          id: randomUUID(),
        };
        this.users.push(newUser);
      
        return newUser;
      }
}