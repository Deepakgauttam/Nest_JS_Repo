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
        return this.usersService.findAll(role);
    }
    // @Get('interns')    // GET   /users/interns
    // findAllInterns() {
    //     return [];
    // }

    @Get(':id')
    findOne(@Param('id') id: String) { // GET /users/:id
        return this.usersService.findOne(+id);
    }

    @Post()
    create(@Body() user: { name: string, email: string, role: 'admin' | 'intern' | 'engineer' }) {
        return this.usersService.create(user);
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: { name?: string, email?: string, role?: 'admin' | 'intern' | 'engineer' }) {
        return this.usersService.update(+id, userUpdate);
    }
    @Delete(':id') // DELETE /users/:id
    delete(@Param('id') id: string) {
        return this.usersService.delete(+id);
    }

}
