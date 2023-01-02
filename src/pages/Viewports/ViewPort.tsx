import {FC} from "react";
import classes from "./viewport.module.css"
const ViewPort:FC = ()=>{
    return (
        <>
            <div className={classes.container}>
                <div className={classes.box}></div>
                <div className={classes.box}></div>
                <div className={classes.box}></div>
                <div className={classes.box}></div>
            </div>
            <div className={classes.containerCompare}>
                <div className={classes.boxCompare}></div>
                <div className={classes.boxCompare}></div>
                <div className={classes.boxCompare}></div>
                <div className={classes.boxCompare}></div>
            </div>
        </>
    )
}

export default ViewPort;