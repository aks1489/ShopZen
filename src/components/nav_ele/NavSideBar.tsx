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
            </div>
        </div>
    )
}