import { useEffect, useState } from 'react';
import { IListView, INumber } from '../../Interface'
import './product.list.view.css'

export default function ListView (props : IListView) {
    const [discountAmount, setDiscountAmount] = useState<INumber>(0);
    const [price , setPrice] = useState<INumber>(props.cartData.price);

    useEffect(() => {
        setDiscountAmount((props.cartData.price * props.cartData.discountPercentage) / 100);
        setPrice(props.cartData.price + discountAmount);
    })
    console.log(props)
    return (
        <div className="card px-0 col-12">
            <div className="row w-100">
                <div className="col-4 col-md-3 col-xl-2">
                    <img src={props.cartData.thumbnail} className='img-fluid' alt="" />
                </div>
                <div className="col-8 col-md-9 col-xl-10 ps-0 p-auto d-flex flex-column justify-content-around justify-content-sm-around">
                    <div className="d-flex flex-column product_data">
                        <p className='p-0 m-0 lh-sm product_text mb-md-1'>{props.cartData.title}</p>
                        <p className='product_description p-0 m-0 d-none mh-md-50 overflow-auto d-sm-block'>{props.cartData.description}</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <h2 className="fw-bolder m-0"><i className="bi bi-currency-dollar"></i>{props.cartData.price}</h2>
                        <div className="price_text_discount text-decoration-line-through fw-normal text-secondary text-decoration-line-through"><i className="bi bi-currency-dollar"></i>{price.toFixed(2)}</div>
                        <div className="price_text text-success fw-medium">{props.cartData.discountPercentage} % off</div>
                    </div>
                    { props.data === 'show' && 
                        <div className="product_button d-flex flex-row gap-2 mb-1 justify-content-evenly justify-content-sm-start px-2">
                            <button type="button" className="btn btn-success product_button">{"Buy Now"} <i className="bi bi-bag product_button"></i></button>
                            <button type="button" className="btn btn-warning product_button">{"Add to Cart"} <i className="bi bi-cart-plus product_button"></i></button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}