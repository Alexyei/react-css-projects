import FlexboxGuidePage from "../pages/flexbox guide/FlexboxGuidePage";
import GridGuidePage from "../pages/grid guide/GridGuidePage";
import GridSubgrid from "../pages/grid subgrid/GridSubgrid";

export const publicRoutes= [
    {path: '/flex',element:(<FlexboxGuidePage/>),linkName:'flexbox guide'},
    {path: '/',element:(<GridGuidePage/>),linkName:'grid guide'},
    {path: '/subgrid', element: (<GridSubgrid/>), linkName: 'grid subgrid'},

    {path: '*',element:(<div>404 NOT FOUND</div>)}
]
