import { Cards } from "../ele/Products.Cards";

export default function OrderdProducts () {
    return (
        <div className="container mt-3">
            <h2 className="fw-semibold text_color_gold"><i className="bi bi-box-seam-fill"></i> Ordered Products:</h2>
            <hr />
            <Cards cardSize='order' />
        </div>
    )
}