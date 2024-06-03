import { useState } from "react";
import GridView from "./card/GridView";
import ListView from "./card/ListView";
import { ICardProp, ITableView } from "../Interface";
import './productcard.css'

// import ListView from './card/ListView'
export function Cards(props: ICardProp) {
    const [tableView, setTableView] = useState<ITableView>("grid")

    const renderView = () => {
        {   
            if(tableView === "grid" || props.cardSize === 'small') {
                return <GridView cardSize={props.cardSize}/>
            } else {
                return <ListView />
            }
        }
    }

    return (
        <div className="container mt-2 d-flex flex-column mb-lg-0 product_container px-0">
            <div className={props.cardSize !== 'small' ? 'product_view d-flex flex-row justify-content-end' : 'd-none'}>
                <div className="btn-group">
                    <a className={`btn btn-outline-secondary border-2 ${tableView === "list" ? "active" : '' }`} onClick={() => setTableView("list")} aria-current="page"><i className="bi bi-list-ul"></i></a>
                    <a className={`btn btn-outline-secondary border-2 ${tableView === "grid" ? "active" : '' }`} onClick={() => setTableView("grid")}><i className="bi bi-grid-3x3"></i></a>
                </div>
            </div>
            <div className="conainer d-flex flex-column mb-2">
                {
                    props.cardSize !== 'small' ?
                        <div className="row p-2 justify-content-center gap-2">
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