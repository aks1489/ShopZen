import NavBar from "./NavBar";
import AddToCartModal from "./nav_ele/AddToCartModal";
import Landing from "./pages/Landing";
import LoginSignUp from "./pages/LoginSignUp";
import ProductView from "./pages/ProductView";
import Products from "./pages/Products";

export default function Main() {
    return(
        <>
            <NavBar />
            {/* <Landing /> */}
            {/* <LoginSignUp /> */}
            {/* <ProductView /> */}
            <Products />
            <AddToCartModal />          {/*  modal for cart  */ }
        </>
    )
}