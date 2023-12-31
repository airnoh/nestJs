import { Injectable } from '@nestjs/common';
import { SerializedUser } from 'src/users/types';

@Injectable()
export class UsersService {
    private users: SerializedUser[] = [
        {
            username: 'admin',
            password: 'password'
        },
        {
            username: 'airnoh',
            password: 'airnoh'
        },
        {
            username: 'anson',
            password: 'anson'
        },
        {
            username: 'derek',
            password: 'derek'
        },
        {
            username: 'samantha',
            password: 'samantha'
        }
    ];

    getUsers(){
        return this.users.map(user => new SerializedUser(user))
    }

    getUserByUsername(username: string){
        return this.users.find((user) => user.username === username)
    }
}
