import BottomBar from './nav_ele/BottomBar'
import SideBar from './nav_ele/NavSideBar'

export default function NavBar() {
    return (
        <nav className="navbar sticky-top shadow navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid flex-xxl-row flex-xl-row flex-lg-row flex-md-row-reverse flex-row-reverse">
                <button type="button" className="btn btn-primary position-relative d-lg-none">
                        <i className="bi bi-bag-dash"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            1
                            <span className="visually-hidden">Items</span>
                        </span>
                    </button>
                <SideBar />
                <a className="navbar-brand" href="#">ShopZen</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" role="button" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                            </ul>
                        </li>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </ul>
                    <button type="button" className="btn btn-primary position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-bag-dash"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            1
                            <span className="visually-hidden">Items</span>
                        </span>
                    </button>
                </div>
                <BottomBar />
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}