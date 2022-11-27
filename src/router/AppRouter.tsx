import {FC} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routes";

export const AppRouter:FC = ()=>{
    return (
        <Routes>
            {publicRoutes.map((el)=>
                el.nestedRoutes ?
                    <Route key={el.path} path={el.path} element={el.element}>
                        {el.nestedRoutes.map((nel)=><Route key={nel.path} path={nel.path} element={nel.element}/>)}
                    </Route>
                :<Route key={el.path} path={el.path} element={el.element}/>
            )}
        </Routes>
    )
}

export const Links:FC = ()=>{
    return (
        <>
            {publicRoutes.filter((el)=>el.linkName!=undefined).map((el)=><Link key={el.path} to={el.path}>{el.linkName}</Link>)}
        </>
    )
}
