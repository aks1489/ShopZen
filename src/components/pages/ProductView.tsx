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
        <div className="price_text_discount text-decoration-line-through fw-normal text-secondary ">${price}</div>
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
                <div className="col-md-6 d-flex flex-column">
                    <div className="col-12">
                        <h1 className='fs-1 fw-medium'>{data.title}</h1>
                        <p className="fw-light fs-6"><div className={`badge ${reviewBadge} text-wrap rating_text`}>{data.rating} <i className="bi bi-star-fill"></i></div> <a href="" className='link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover rating_text'>Read Reviews</a></p>
                    </div>
                    <div className="col-12">
                        { data.stock >= 1 ? priceSec : soldOut }
                    </div>
                </div>
            </div>
        </div>
    )
}