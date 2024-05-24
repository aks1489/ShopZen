import { ChangeEvent, SyntheticEvent } from "react"

export type ITableView = "grid" | "list"

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
    cardSize : 'big' | 'small' ;
} 