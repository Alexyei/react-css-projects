import FlexboxGuidePage from "../pages/flexbox guide/FlexboxGuidePage";
import GridGuidePage from "../pages/grid guide/GridGuidePage";

export const publicRoutes= [
    {path: '/flex',element:(<FlexboxGuidePage/>),linkName:'flexbox guide'},
    {path: '/',element:(<GridGuidePage/>),linkName:'grid guide'},

    {path: '*',element:(<div>404 NOT FOUND</div>)}
]
