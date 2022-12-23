import {FC} from "react";
import classes from "./MainPage.module.scss"
import {publicRoutes} from "../../router/routes";
import {Link} from "react-router-dom";

export const Links:FC = ()=>{
    return (
        <ul className={classes.list}>
            <h1>Страницы:</h1>
            {publicRoutes.filter((el)=>el.linkName).map((el)=><li className={classes.link} key={el.path}><Link  to={el.path}>{el.linkName}</Link></li>)}
        </ul>
    )
}
const MainPage:FC = ()=>{
    return (
        <>
            <div className={classes.container}>

                <Links/>
            </div>
        </>
    )
}

export default MainPage;