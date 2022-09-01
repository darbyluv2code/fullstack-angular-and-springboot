export class Product {

    constructor(public sku: string,
                public name: string,
                public description: string,
                public unitPrice: number,
                public imageUrl: string,
                public active: boolean,
                public unitsInStock: number,
                public dateCreated: Date,
                public lastUpdated: Date 
        ) {
        
    }
}
