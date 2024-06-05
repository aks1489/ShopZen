import './productview.css'
import { data } from './data'
import { useEffect, useState } from 'react'
import { IEvent, IEventNumber, INumber, IPinCode } from '../Interface'
import { Cards } from '../ele/Products.Cards'

export default function ProductView () {
    const [proImg, setProImg] = useState(data.thumbnail)
    const [reviewBadge, setReviewBadge] = useState('')

    const [discountAmount, setDiscountAmount] = useState<INumber>(0);
    const [price , setPrice] = useState<INumber>(data.price);

    const [pinCode, setPinCode] = useState<IPinCode>({
        value : '',
        delivery : 'notSet',
        status : false,
        btn_status : true
    });

    function handleClick (img : string) {
        setProImg(img)
    }

    function handlePinChange(e: IEventNumber) {
        const isValidNumber = /^\d+$/; // simplified regex to match only digits
        const inputValue = e.target.value.trim();
    
        if (inputValue === '' || isValidNumber.test(inputValue)) {
            setPinCode((prvData) => ({
                ...prvData,
                value : e.target.value
            }));
        } else {
            setPinCode((prvData) => ({
                ...prvData,
                delivery : 'notSet',
                status: true
            }))
        }
    }

    function handleDeliveryResult(e : IEvent) {
        e.preventDefault();

        if(pinCode.btn_status === false) {
            setPinCode((prvData) => ({
                ...prvData,
                btn_status: true,
                delivery: 'notSet',
                value: ''
            }))
        } else if(pinCode.value === '123456') {
            setPinCode((prvData) => ({
                ...prvData,
                delivery: 'yes',
                btn_status: false
            }))
        } else if(pinCode.value === '') {
            setPinCode((prvData) => ({
                ...prvData,
                delivery: 'notSet',
                btn_status: true
            }))
        } else {
            setPinCode((prvData) => ({
                ...prvData,
                delivery: 'no',
                btn_status: false
            }))
        }
    }
    
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
    })

    // Bootstrap Tooltip Enabler
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        // @ts-ignore
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    //
    
    const soldOut = <h2 className='fw-bolder'>Sold Out</h2>
    const priceSec = <div className="d-flex align-items-center gap-3">
        <h2 className="fw-bolder m-0"><i className="bi bi-currency-dollar"></i>{data.price}</h2>
        <div className="price_text_discount text-decoration-line-through fw-normal text-secondary "><i className="bi bi-currency-dollar"></i>{price.toFixed(2)}</div>
        <div className="price_text text-success fw-medium">{data.discountPercentage}% off</div>
    </div>

    const deliveryInfo = () => {
        if(pinCode.delivery === 'notSet') {
            return ''
        } else if (pinCode.delivery === 'yes') {
            return <p className='m-0 deliverable_text fw-medium'><i className="bi bi-check2-circle"></i> Deliverable in {pinCode.value}</p>
        } else if (pinCode.delivery === 'no') {
            return <p className='m-0 not_deliverable_text fw-medium'><i className="bi bi-x-circle"></i> Not Deliverable in {pinCode.value}</p>
        } else {
            console.error('Erron in code');
        }
    }

    const defaultPinMessage = () => {
        return (
            <div className="toast-container position-fixed top-0 start-50 translate-middle-x p-3">
                <div id="liveToast" className={`toast show`} role="alert" aria-live="assertive" aria-atomic="true"> {/* toast condition have to be add hare */}
                    <div className="toast-header bg-warning">
                        {/* <img src="..." className="rounded me-2" alt="..." /> */}
                        <strong className="me-auto">Information Alert</strong>
                        {/* <small>11 mins ago</small> */}
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body ">Pin code checking is for demo perpose only. Enter <strong>123456</strong> in pin code checking input field to try pin code checking function</div>
                </div>
            </div>
        )
    }
    return(
        <div className="container mt-3 container_shadow rounded ">
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
                        <div className="fw-light fs-6"><div className={`badge ${reviewBadge} text-wrap rating_text`}>{data.rating} <i className="bi bi-star-fill"></i></div> <a href="" className='link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover rating_text'>Read Reviews</a></div>
                    </div>
                    <div className="col-12">
                        { data.stock >= 1 ? priceSec : soldOut }
                    </div>
                    <div className="col-12">
                        <form className="row">
                            <div className="col-12 col-xl-6 d-flex flex-cloumn gap-2">
                                <div className="col-8">
                                    <input type="text" className="form-control col-8 pin_check" inputMode='numeric' maxLength={6} placeholder="Enter Pin Code" aria-label="Pin Check" aria-describedby="button-addon2" name="check_pin" value={pinCode.value}  onChange={handlePinChange} disabled ={pinCode.status || !pinCode.btn_status}/>
                                </div>
                                <button className="btn btn-outline-secondary col-4 delivery_checking_button fw-semibold" type="submit" id="button-addon2" onClick={handleDeliveryResult}>{!pinCode.btn_status ? <><i className="bi bi-eraser"></i> Clear</> : <><i className="bi bi-geo-alt-fill"></i> Check</> }</button>
                            </div>
                            <div className='col-12 col-xl-6 mt-2 mt-lg-0 d-flex align-items-center'>
                                {deliveryInfo()}
                            </div>
                        </form>
                    </div>
                    {
                        pinCode.status && (
                            <div className="col-12">
                                <div className="alert alert-danger alert-dismissible fade show mb-0" role="alert">
                                    <strong><i className="bi bi-x-circle-fill"></i> Please Enter Valid Pin Code</strong> Close this alert and try again.
                                    <button 
                                        type="button" 
                                        className="btn-close" 
                                        data-bs-dismiss="alert" 
                                        aria-label="Close"
                                            onClick={() => setPinCode((prvData) => ({
                                                ...prvData,
                                                value: '',
                                                status: false
                                            }))}
                                        ></button>
                                </div>
                            </div>
                        )
                    }
                    <div className="col-12 d-flex gap-3 justify-content-between justify-content-md-start">
                        <button type="button" className="btn btn-success buy_card_text fw-medium"><i className="bi bi-truck"></i> BUY NOW</button>
                        <button type="button" className="btn btn-primary buy_card_text fw-medium"><i className="bi bi-bag-plus"></i> ADD TO CART</button>
                    </div>
                    <div className="col-12 d-flex">
                        <div className="titels col-2">
                            <p className='m-0 fw-medium'>Brand:</p>
                        </div>
                        <div className="brand_name pill ms-1 col">
                            <h5 className='m-0'>
                                <span className="badge">{data.brand}</span>
                            </h5>
                        </div>
                    </div>
                    <div className="col-12 d-flex">
                        <div className="titels col-3 col-sm-4 col-md-4 col-lg-3">
                            <p className='m-0 fw-medium'>Highlights:</p>
                        </div>
                        <div className="highlights col">
                            <ul className='row'>
                                <li className='col-6 col-md-4 fw-medium px-0'>Slik Design</li>
                                <li className='col-6 col-md-4 fw-medium px-0'>Thick bezels</li>
                                <li className='col-6 col-md-4 fw-medium px-0'>Fast</li>
                                <li className='col-6 col-md-4 fw-medium px-0'>Good speed</li>
                                <li className='col-6 col-md-4 fw-medium px-0'>Best</li>
                                <li className='col-6 col-md-4 fw-medium px-0'>Fast</li>
                                <li className='col-6 col-md-4 fw-medium px-0'>Good speed</li>
                                <li className='col-6 col-md-4 fw-medium px-0'>Best</li>
                                <li className='col-6 col-md-4 fw-medium px-0'>Better performence</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <ul className="nav nav-pills gap-2 mb-2" id="myTab" role="tablist">
                            <li className="nav-item custom_pill" role="presentation">
                                <button className="nav-link active fs-6" id="product_info" data-bs-toggle="tab" data-bs-target="#product_info-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><i className="bi bi-clipboard-data-fill"></i> Description</button>
                            </li>
                            <li className="nav-item custom_pill" role="presentation">
                                <button className="nav-link fs-6" id="product_specs" data-bs-toggle="tab" data-bs-target="#product_specs-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><i className="bi bi-journals"></i> Specification</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="product_info-pane" role="tabpanel" aria-labelledby="product_info" tabIndex={0}>{data.description}</div>
                            <div className="tab-pane fade" id="product_specs-pane" role="tabpanel" aria-labelledby="product_specs" tabIndex={0}>Specification will be added soon.</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-1'/>
            <Cards cardSize={'card'} />
            {
                pinCode.delivery === 'no' ? defaultPinMessage() : null
            }           
        </div>
    )
}