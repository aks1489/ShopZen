import NavBar from "./NavBar";
import AddToCartModal from "./nav_ele/AddToCartModal";
import Landing from "./pages/Landing";
import LoginSignUp from "./pages/LoginSignUp";
import ProductView from "./pages/ProductView";

export default function Main() {
    return(
        <>
            <NavBar />
            {/* <Landing /> */}
            {/* <LoginSignUp /> */}
            <ProductView />
            <AddToCartModal />          {/*  modal for cart  */ }
        </>
    )
}