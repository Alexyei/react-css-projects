import FlexboxGuidePage from "../pages/flexbox guide/FlexboxGuidePage";

export const publicRoutes= [
    {path: '/',element:(<FlexboxGuidePage/>),linkName:'flexbox guide'},
    {path: '*',element:(<div>404 NOT FOUND</div>)}
]
