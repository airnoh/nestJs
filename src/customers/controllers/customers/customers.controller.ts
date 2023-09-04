import { Body, Controller, Get, HttpException, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomers.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    
    constructor(private customersService: CustomersService) { }
        @Get(':id')
        getCustomers(@Param('id', ParseIntPipe) id: number){
            const customers= this.customersService.findCustomersById(id);
            if(customers) return customers;
            else throw new HttpException('Customer not found', 404);
        }
        @Get()
        getAllCustomers(){
            return this.customersService.getCustomers();
        }
        @Post('create')
        @UsePipes(ValidationPipe)
        createCustomer(@Body() CreateCustomerDto: CreateCustomerDto){
            this.customersService.createCustomer(CreateCustomerDto);
        }
    }

