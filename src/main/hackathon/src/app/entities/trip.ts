import { Driver } from 'selenium-webdriver/firefox';

import { DeliveryPlace } from './delivery-place';

export class Trip {
    public code: string;
    public status: number;
    public places: Array<DeliveryPlace>;
    public driver: Driver;
}
