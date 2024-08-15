import Home from '../pages/Home/Home.jsx'
import Page1 from '../pages/Page1/Page1.jsx'
import Page2 from '../pages/Page2/Page2.jsx'

const pageLinks = [
    {name: "Home", path: "", route: "/", element: <Home />},
    {name: "Page1", path: "page1", route: "/page1", element: <Page1 />},
    {name: "Page2", path: "page2", route: "/page2", element: <Page2 />},
]

export default pageLinks
