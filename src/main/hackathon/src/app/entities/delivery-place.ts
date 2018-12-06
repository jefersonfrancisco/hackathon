import { Customer } from './customer';
import { Item } from './item';

export class DeliveryPlace {

    public id: number;
    public street: string;
    public number: number;
    public cep: string;
    public district: string;
    public city: string;
    public state: string;
    public lat: string;
    public long: string;
    public customer: Customer;
    public itens: Array<Item>;
    public status: number;
    
}

