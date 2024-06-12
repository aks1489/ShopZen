import { Cards } from "../ele/Products.Cards";


export default function SavedProducts () {
    return (
        <div className="container mt-3">
            <h2 className="fw-semibold saved_products_text"><i className="bi bi-box2-heart-fill"></i> Saved Products:</h2>
            <hr />
            <Cards cardSize='product' />
        </div>
    )
}