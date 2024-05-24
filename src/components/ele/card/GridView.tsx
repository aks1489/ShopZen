import { useEffect, useState } from 'react'
import './product.grid.view.css'
import { ICardProp } from '../../Interface'
export default function GridView (props : ICardProp) {

    const [cardProp, setCardProp] = useState({ width: '18rem' })

    useEffect(() =>{
        if(props.cardSize === 'big') {
            setCardProp(() => ({
                width : '18rem'
            }))
        } else if(props.cardSize === 'small') {
            setCardProp(() => ({
                width : '9rem'
            }))
        }
    })
    return (
        <div className="card p-0 col-12 col-sm-6 col-md-4 col-lg-3" style={cardProp}>
            <img src="https://i.imgur.com/QkIa5tT.jpeg" className="card-img-top" alt="..." />
            <div className="card-body px-2 py-2">
                <p className="card-title card_text">Classic White Tee - Timeless Style and Comfort</p>
                <div className="d-flex flex-row justify-content-between">
                    <button type="button" className="btn btn-success product_button">Buy Now <i className="bi bi-bag product_button"></i></button>
                    <button type="button" className="btn btn-warning product_button">Add to Cart <i className="bi bi-cart-plus product_button"></i></button>
                </div>
            </div>
        </div>
    ) 
}