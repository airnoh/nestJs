import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomers.dto';

@Injectable()
export class CustomersService {
    private customers = [
        {
            id: 1,
            email: 'danny@gmail.com',
            name: 'Danny Danny'
        },
        {
            id: 2,
            email: 'airnoh@gmail.com',
            name: 'Airnoh Sky'
        },
        {
            id: 3,
            email: 'anson@gmail.com',
            name: 'John Smith'
        }
    ];
    findCustomersById(id: number) {
        return this.customers.find(u => u.id === id);
    }

    createCustomer(customerDto: CreateCustomerDto) {
        this.customers.push(customerDto);
    }

    getCustomers(){
        return this.customers
    }
}
