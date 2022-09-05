import { Product } from './product';

export class CartItem {

    constructor(public id?: string,
                public name?: string,
                public imageUrl?: string,
                public unitPrice?: number,
                public quantity: number = 1) {

    }

}
