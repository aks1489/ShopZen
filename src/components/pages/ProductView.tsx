import './productview.css'
import { data } from './data'
import { useEffect, useState } from 'react'
import { INumber } from '../Interface'

export default function ProductView () {
    const [proImg, setProImg] = useState(data.thumbnail)
    const [reviewBadge, setReviewBadge] = useState('')

    const [discountAmount, setDiscountAmount] = useState<INumber>(0);
    const [price , setPrice] = useState<INumber>(data.price);

    function handleClick (img : string) {
        setProImg(img)
    }
    console.log(data)

    useEffect(() => {
        if(data.rating >= 3.50){
            setReviewBadge('text-bg-success')
        } else if (data.rating >= 2.00) {
            setReviewBadge('text-bg-warning')
        } else {
            setReviewBadge('text-bg-danger')
        }
    }, [])

    
    useEffect(() => {
        setDiscountAmount((data.price * data.discountPercentage) / 100);
        setPrice(data.price + discountAmount);
        console.log(price)
    })

    // Bootstrap Tooltip Enabler
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        // @ts-ignore
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    //
    
    const soldOut = <h2 className='fw-bolder'>Sold Out</h2>
    const priceSec = <div className="d-flex align-items-center gap-3">
        <h2 className="fw-bolder m-0"><i className="bi bi-currency-dollar"></i>{data.price}</h2>
        <div className="price_text_discount text-decoration-line-through fw-normal text-secondary ">${price.toFixed(2)}</div>
        <div className="price_text text-success fw-medium">{data.discountPercentage}% off</div>
    </div>
    return(
        <div className="container mt-3 shadow rounded ">
            <div className="row">
                <div className="col-md-6 d-flex flex-column gap-3 py-2 ">
                    <div className="col-12 border d-flex justify-content-center p-2">
                        <img src={proImg} className='product_img' alt="" />
                    </div>
                    <div className="col-12 side_img_wrapper align-items-center gap-3">
                        {
                            data.images.map((pro,index) => {
                                return (
                                    <div key={index} className="side_img d-flex justify-content-center p-2 border">
                                        <img src={pro} className='list_img' alt={pro} onClick={() => handleClick(pro)} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column gap-3">
                    <div className="col-12">
                        <h1 className='fs-1 fw-medium'>{data.title}</h1>
                        <p className="fw-light fs-6"><div className={`badge ${reviewBadge} text-wrap rating_text`}>{data.rating} <i className="bi bi-star-fill"></i></div> <a href="" className='link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover rating_text'>Read Reviews</a></p>
                    </div>
                    <div className="col-12">
                        { data.stock >= 1 ? priceSec : soldOut }
                    </div>
                    <div className="col-12 d-flex gap-3 justify-content-between justify-content-md-start">
                        <button type="button" className="btn btn-success fs-5 fw-medium">Buy Now</button>
                        <button type="button" className="btn btn-warning fs-5 fw-medium">Add to Cart</button>
                    </div>
                    <div className="col-12 d-flex">
                        <div className="brand">
                            <p className='m-0 fw-medium'>Brand:</p>
                        </div>
                        <div className="brand_name pill ms-1">
                            <h5 className='m-0'>
                                <span className="badge">{data.brand}</span>
                            </h5>
                        </div>
                    </div>
                    <div className="col-12">
                        
                    </div>
                    <div className="col-12">
                        <ul className="nav nav-pills gap-2" id="myTab" role="tablist">
                            <li className="nav-item custom_pill" role="presentation">
                                <button className="nav-link active" id="product_info" data-bs-toggle="tab" data-bs-target="#product_info-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Description</button>
                            </li>
                            <li className="nav-item custom_pill" role="presentation">
                                <button className="nav-link" id="product_specs" data-bs-toggle="tab" data-bs-target="#product_specs-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Specification</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="product_info-pane" role="tabpanel" aria-labelledby="product_info" tabIndex={0}>{data.description}</div>
                            <div className="tab-pane fade" id="product_specs-pane" role="tabpanel" aria-labelledby="product_specs" tabIndex={0}>Specification will be added soon.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}