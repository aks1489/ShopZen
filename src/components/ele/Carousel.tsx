import './carousel.css'
export default function Carousel () {
    return (
        <div className="container-fluid px-0">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000" >
                        <img src="https://engcode.github.io/Tornado/docs/images/img2.jpg" className="d-block w-100 carousel_img" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://engcode.github.io/Tornado/docs/images/img.jpg" className="d-block w-100 carousel_img" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://engcode.github.io/Tornado/docs/images/img3.jpg" className="d-block w-100 carousel_img" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}