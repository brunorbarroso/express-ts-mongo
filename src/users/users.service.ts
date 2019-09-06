import { Injectable } from '@nestjs/common';
import { User } from '../entities/User';

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor(){
        this.users = [
            {
                userId: 1,
                username: 'john',
                password: '123456'
            },
            {
                userId: 2,
                username: 'chris',
                password: 'secret'
            },
            {
                userId: 3,
                username: 'maria',
                password: 'secr3t'
            }
        ];
    }

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username);
    }
}
