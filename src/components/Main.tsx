import NavBar from "./NavBar";
import AddToCartModal from "./nav_ele/AddToCartModal";
import Landing from "./pages/Landing";
import LoginSignUp from "./pages/LoginSignUp";
import OrderdProducts from "./pages/OrderdProducts";
import ProductView from "./pages/ProductView";
import Products from "./pages/Products";
import SavedProducts from "./pages/SavedProducts";

export default function Main() {
    return(
        <>
            <NavBar />
            {/* <Landing /> */}
            {/* <LoginSignUp /> */}
            <ProductView />
            {/* <Products /> */}
            {/* <SavedProducts /> */}
            {/* <OrderdProducts /> */}
            <AddToCartModal />          {/*  modal for cart  */ }
        </>
    )
}