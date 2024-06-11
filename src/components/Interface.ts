import { ChangeEvent, SyntheticEvent } from "react"

export interface ITableTools {
    tableView: 'list' | 'grid',
    tableOrder: 'ascending' | 'descending'
}

export type INumber = number

export type IEventNumber = ChangeEvent<HTMLInputElement>

export type IBoolean = boolean

export interface IPinCode {
    value : string,
    delivery : "yes" | "no" | "notSet" ,
    status : boolean,
    btn_status : boolean
}

export type IEvent = SyntheticEvent

export interface ICardProp {
    cardSize : 'default' | 'card' | 'list' | 'product' | 'order';
}

export interface IListView {
    cartData: {
            id: number;
            title: string;
            description: string;
            category: string;
            price: number;
            discountPercentage: number;
            rating: number;
            stock: number;
            tags: string[];
            brand: string;
            sku: string;
            weight: number;
            dimensions: {
            width: number;
            height: number;
            depth: number;
            };
            warrantyInformation: string;
            shippingInformation: string;
            availabilityStatus: string;
            reviews: {
            rating: number;
            comment: string;
            date: string;
            reviewerName: string;
            reviewerEmail: string;
            }[];
            returnPolicy: string;
            minimumOrderQuantity: number;
            meta: {
            createdAt: string;
            updatedAt: string;
            barcode: string;
            qrCode: string;
            };
            images: string[];
            thumbnail: string;
        },
    data : 'show' | 'hide' | 'cart' | 'order';
}