import { category } from "../pages/data"
import './navSide.css'

export default function NavSideBar() {
    return (
        <div className="offcanvas offcanvas-start navbar-toggler" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel"><img src="/shopzen.png" className='nav_logo' alt="shopzen" /></h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <p className="p-0 m-0">Navigation</p>
                <div className="d-flex gap-2 my-2">
                    <button type="button" className="btn btn-outline-secondary">Home</button>
                    <button type="button" className="btn btn-outline-secondary">Profile</button>
                </div>
                <form className="d-flex my-2" role="search">
                    <input className="form-control me-2" type="search" placeholder="Write to search...." aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
                </form>
                <hr className="p-0 my-2"/>
                <p className="p-0 m-0">Categories</p>
                {/* <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle mt-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select Category</button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        {
                            category.map( cat => {
                                return (
                                    <li><a className="dropdown-item" href="#">{cat}</a></li> 
                                )
                            })
                        }
                    </ul>
                </div> */}

                <div className="category_panel mt-2">
                    {category.map((cat,index) =>{
                        return (
                            <ul key={index} className="category_ul">
                                <li ><a className="category_item" href="#">{cat}</a></li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}