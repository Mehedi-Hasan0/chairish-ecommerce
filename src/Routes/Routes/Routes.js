import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Cart from "../../Pages/Shop/Cart/Cart";
import ProductsDetails from "../../Pages/Shop/Products/ProductsDetails/ProductsDetails";
import Shop from "../../Pages/Shop/Shop";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />,
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/shop/:id',
                element: <ProductsDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/shop/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    }
])

export default router;