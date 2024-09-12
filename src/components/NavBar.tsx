import BottomBar from './nav_ele/BottomBar'
import SideBar from './nav_ele/NavSideBar'
import './navbar.css'
import { category } from './pages/data'

export default function NavBar() {
    console.log(category)
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
                <a className="navbar-brand" href="#"><img src="/shopzen.png" className='nav_logo' alt="shopzen" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" role="button" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-start">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu">
                                {
                                    category.map((cat) => {
                                        return (
                                            <li key={cat}><a className="dropdown-item" href="#">{cat}</a></li>
                                        )
                                    })
                                }
                                {/* <li><a className="dropdown-item" href="#">Action</a></li> */}
                            </ul>
                        </li>
                        <div className='d-flex w-100 justify-content-center'>
                            <form className="d-flex container-fluid search" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </ul>
                    <div className="d-flex">
                        <button type="button" className="btn btn-outline-success position-relative">
                            <i className="bi bi-person-badge"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                1
                                <span className="visually-hidden">Items</span>
                            </span>
                        </button>
                        <div className="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                            <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-secondary"></div>
                            <hr className="d-lg-none my-2 text-white-50" />
                        </div>
                        <button type="button" className="btn btn-primary position-relative" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <i className="bi bi-bag-dash"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                4
                                <span className="visually-hidden">Items</span>
                            </span>
                        </button>
                    </div>
                </div>
                <BottomBar />
            </div>
        </nav>
    )
}