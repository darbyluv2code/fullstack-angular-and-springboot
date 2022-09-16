export class OrderHistory {

    constructor(public id: string,
                public orderTrackingNumber: string,
                public totalPrice: number,
                public totalQuantity: number,
                public dateCreated: Date) {

                }
}
