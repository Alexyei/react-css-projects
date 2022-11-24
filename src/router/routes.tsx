import FlexboxGuidePage from "../pages/flexbox guide/FlexboxGuidePage";
import GridGuidePage from "../pages/grid guide/GridGuidePage";
import GridSubgrid from "../pages/grid subgrid/GridSubgrid";
import LAMainPage from "../pages/mui/Laith Academy course/mainPage";

export const publicRoutes= [
    {path: '/flex',element:(<FlexboxGuidePage/>),linkName:'flexbox guide'},
    {path: '/',element:(<GridGuidePage/>),linkName:'grid guide'},
    {path: '/subgrid', element: (<GridSubgrid/>), linkName: 'grid subgrid'},

    //mui
    {path: '/LA/main',element: (<LAMainPage/>),linkName: 'LA main'},

    {path: '*',element:(<div>404 NOT FOUND</div>)}
]
