import { useState } from "react";
import GridView from "./card/GridView";
import ListView from "./card/ListView";
import { ICardProp, ITableTools} from "../Interface";
import './productcard.css'
import { cartData } from "./cartData";

// import ListView from './card/ListView'
export function Cards(props: ICardProp) {
    const [tableTools, setTableTools] = useState<ITableTools>({ tableView: 'grid', tableOrder: 'ascending'})

    const renderView = () => {
        {   
            if(props.cardSize === 'card') {
                return <GridView cardSize={props.cardSize}/>
            } else if (props.cardSize === 'list') {
                return (
                    cartData.products.map((prodcts) => {
                        return <ListView key={prodcts.id}  data='cart' cartData={prodcts} />
                    })
                )
            } else if (props.cardSize === 'default' || props.cardSize === 'product') {
                if(tableTools.tableView !== 'list') {
                    return <GridView cardSize={props.cardSize} />
                } else {
                    return (
                        cartData.products.map((prodcts) => {
                            return <ListView key={prodcts.id}  data='show' cartData={prodcts} />
                        })
                    )
                }
            } else if (props.cardSize === 'order') {
                return (
                    cartData.products.map((prodcts) => {
                        return <ListView key={prodcts.id} data='order' cartData={prodcts} />
                    })
                )
            }
        }
    }

    function tableView (view: string) {
        if(view === 'grid') {
            setTableTools((data) =>({
                ...data,
                tableView: 'grid'
            }))
        } else if (view === 'list') {
            setTableTools((data) => ({
                ...data,
                tableView: 'list'
            }))
        } else {
            console.error('error in tableView function')
        }
    }

    function tableOrder (order: string) {
        if(order === 'ascending') {
            setTableTools((data) =>({
                ...data,
                tableOrder: 'ascending'
            }))
        } else if (order === 'descending') {
            setTableTools((data) => ({
                ...data,
                tableOrder: 'descending'
            }))
        } else {
            console.error('error in tableOrder function')
        }
    }



    const tools = () => {
        {
            if(props.cardSize === 'default') {
                return (
                    <div className='product_view d-flex flex-row justify-content-end'>
                        <div className="btn-group">
                            <a className={`btn btn-outline-secondary border-2 ${tableTools.tableView === "list" && "active" }`} onClick={() => tableView('list')} aria-current="page"><i className="bi bi-list-ul"></i></a>
                            <a className={`btn btn-outline-secondary border-2 ${tableTools.tableView === "grid" && "active" }`} onClick={() => tableView('grid')}><i className="bi bi-grid-3x3"></i></a>
                        </div>
                    </div>
                )
            } else if (props.cardSize === 'product') {
                return (
                    <div className='product_view d-flex flex-row justify-content-between'>
                        <div className="btn-group">
                            <a className={`btn btn-outline-secondary border-2 ${tableTools.tableOrder === "ascending" && "active" }`} onClick={() => tableOrder('ascending')} aria-current="page"><i className="bi bi-sort-numeric-down"></i></a>
                            <a className={`btn btn-outline-secondary border-2 ${tableTools.tableOrder === "descending" && "active" }`} onClick={() => tableOrder('descending')}><i className="bi bi-sort-numeric-up-alt"></i></a>
                        </div>
                        <div className="btn-group">
                            <a className={`btn btn-outline-secondary border-2 ${tableTools.tableView === "list" && "active" }`} onClick={() => tableView('list')} aria-current="page"><i className="bi bi-list-ul"></i></a>
                            <a className={`btn btn-outline-secondary border-2 ${tableTools.tableView === "grid" && "active" }`} onClick={() => tableView('grid')}><i className="bi bi-grid-3x3"></i></a>
                        </div>
                    </div>
                )
            }
        }
    }

    return (
        <div className="container mt-2 d-flex flex-column mb-lg-0 product_container px-1">
            {tools()}
            <div className="conainer d-flex flex-column mb-2">
                {
                    props.cardSize !== 'card' ?
                        <div className="row m-0 p-2 justify-content-center gap-2">
                            {renderView()}
                        </div>
                        :
                        <div className="py-2 d-flex gap-2 similar-prodcts-container">
                            {renderView()}
                            {renderView()}
                            {renderView()}
                            {renderView()}
                            {renderView()}
                            {renderView()}
                            {renderView()}
                            {renderView()}
                            {renderView()}
                            {renderView()}
                            {renderView()}
                            {renderView()}
                            {renderView()}
                        </div>
                }
            </div>

        </div>
    )
}