import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    
    // @Get()    // GET   /users or /users?role=value
    // findAll() {
    //     return [];
    // }

    @Get()    // GET   /users or /users?role=value
    findAll(@Query('role') role?:'admin' | 'intern' | 'engineer') {  
        return [];
    }
    // @Get('interns')    // GET   /users/interns
    // findAllInterns() {
    //     return [];
    // }

    @Get(':id')
    findOne(@Param('id') id: number) { // GET /users/:id
        return { id };
    }

    @Post()
    create(@Body() user: {}) {
        return user;
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate }
    }
    @Delete(':id') // DELETE /users/:id
    delete(@Param('id') id: string) {
        return { id }
    }

}
