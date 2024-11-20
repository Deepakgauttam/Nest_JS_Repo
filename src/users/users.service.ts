import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Deep",
            "email": "deep@gmail.com",
            "role": "intern"
        },
        {
            "id": 2,
            "name": "Rahul",
            "email": "rahul@gmail.com",
            "role": "admin"
        },
        {
            "id": 3,
            "name": "Raj",
            "email": "raj@gmail.com",
            "role": "engineer"
        },
        {
            "id": 4,
            "name": "Rohan",
            "email": "rohan@gmail.com",
            "role": "intern"
        },
        {
            "id": 5,
            "name": "Jack",
            "email": "jack@gmail.com",
            "role": "admin"
        }
    ]
    findAll(role?: 'admin' | 'intern' | 'engineer') {
        if (role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users;
    }
    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        return user;
    }
    create(user: { name: string, email: string, role: 'admin' | 'intern' | 'engineer' }) {
        const userByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser);
        return newUser;
    }
    update(id: number, updatedUser: { name?: string, email?: string, role?: 'admin' | 'intern' | 'engineer' }) {
        const user = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser };
            }
            return user;
        });
        return this.findOne(id);
    }

    delete(id: number) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }

}
