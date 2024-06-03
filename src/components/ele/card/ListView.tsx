import './product.list.view.css'

export default function ListView () {
    return (
        <div className="card px-0 col-12">
            <div className="row w-100">
                <div className="col-4 col-md-3 col-xl-2">
                    <img src="https://i.imgur.com/QkIa5tT.jpeg" className='img-fluid' alt="" />
                </div>
                <div className="col-8 col-md-9 col-xl-10 ps-0 p-auto d-flex flex-column justify-content-around justify-content-sm-around">
                    <div className="d-flex flex-column product_data">
                        <p className='p-0 m-0 lh-sm product_text mb-md-1'>Classic White Tee - Timeless Style and Comfort"</p>
                        <p className='product_description p-0 m-0 d-none mh-md-50 overflow-auto d-sm-block'>Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic. Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift, this t-shirt is a versatile addition to any collection.</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <h2 className="fw-bolder m-0"><i className="bi bi-currency-dollar"></i>300</h2>
                        <div className="price_text_discount text-decoration-line-through fw-normal text-secondary ">$2000</div>
                        <div className="price_text text-success fw-medium">18 % off</div>
                    </div>
                    <div className="product_button d-flex flex-row gap-2 mb-1 justify-content-evenly justify-content-sm-start px-2">
                        <button type="button" className="btn btn-success product_button">{"Buy Now"} <i className="bi bi-bag product_button"></i></button>
                        <button type="button" className="btn btn-warning product_button">{"Add to Cart"} <i className="bi bi-cart-plus product_button"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}