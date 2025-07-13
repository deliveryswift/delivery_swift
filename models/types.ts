

type Locations = {
    place: string;
    time: Date
}
export interface  OrderType {
    id: number;
        name: string;
        email: string;
        phone: string;
        address: string;
        receivingCountry: string;
        refund: boolean;
        status: string;
        amount: number;
        packageWeight: number;
        sendingCountry: string;
        locations: Locations[];
        trackingNumber: string;
        paymentMethod: string;
        createdAt: Date;
        updatedAt: Date;
       
}
