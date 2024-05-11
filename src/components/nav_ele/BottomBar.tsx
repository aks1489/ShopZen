import './bottombar.css'

export default function BottomBar () {
    return(
        <nav className="navbar fixed-bottom bg-body-tertiary flex d-lg-none py-2 px-3">
            <div className="container-fluid p-0">
                <ul className='navbar-nav d-flex flex-row w-100 justify-content-around'>
                    <li className='nav-item pe-auto'>
                        <a className='nav-link active p-0 bottom_nav_link'><i className="bi bi-house"></i></a>
                    </li>
                    <div className="border border-2"></div>
                    <li className='nav-item pe-auto'>
                        <a className='nav-link p-0 bottom_nav_link'><i className="bi bi-bookmark-check"></i></a>
                    </li>
                    <div className="border border-2"></div>
                    <li className='nav-item pe-auto'>
                        <a className='nav-link p-0 bottom_nav_link'><i className="bi bi-boxes"></i></a>
                    </li>
                    <div className="border border-2"></div>
                    <li className='nav-item pe-auto'>
                        <a className='nav-link p-0 bottom_nav_link'><i className="bi bi-person-circle"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}