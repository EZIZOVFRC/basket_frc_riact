import AdminRoot from "./Layout/admin/AdminRoot";
import Home from "./pages/site/Home/Home"
import Basket from "./pages/site/Basket/Basket";
import Contact from "./pages/site/Contact/Contact";
import SiteRoot from "./pages/site/SiteRoot";
import Detail from "./pages/site/Detail/Detail";
const ROUTES = [
  {
    path: "/",
    element:<SiteRoot/>,
    children: [
    {
        path:"",
        element:<Home/>,
    },
    {
        path:"basket",
        element:<Basket/>,
    },{
        path:"/detail/:dataId",
        element:<Detail/>
    }
    ,{
        path:"/contact",
        element:<Contact/>
    },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
  },
];

export default ROUTES;
