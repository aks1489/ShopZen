export default function NavSideBar() {
    return (
        <div className="offcanvas offcanvas-start navbar-toggler" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="d-flex gap-2">
                    <button type="button" className="btn btn-outline-secondary">Home</button>
                    <button type="button" className="btn btn-outline-secondary">Profile</button>
                </div>
                <div className="dropdown mt-3">
                <p className="p-0 m-0">Categories</p>
                <hr className="p-0 mt-2"/>
                
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}