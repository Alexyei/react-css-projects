import {FC} from "react";
import classes from "./Responsive.module.css"
const Responsive:FC = ()=>{
    return (
        <>
            <div className={classes.box}></div>
            <div className={classes.box2}></div>
            <div className={classes.box3}></div>
            <div className={classes.box4}></div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus culpa cum dignissimos ea earum
            eligendi error exercitationem fuga incidunt, iste, labore nobis nulla quod quos sint sit ullam voluptates.
            <div className={classes.container}>
                <div className={classes.main}>
                    <div className={classes.boxMain}></div>
                </div>
                <div className={classes.sidebar}>
                    <div className={classes.boxSide}></div>
                </div>
            </div>
            <div className={classes.grid}>
                <div className={classes.gridBox}></div>
                <div className={classes.gridBox}></div>
                <div className={classes.gridBox}></div>
                <div className={classes.gridBox}></div>
                <div className={classes.gridBox}></div>
                <div className={classes.gridBox}></div>
                <div className={classes.gridBox}></div>
                <div className={classes.gridBox}></div>
                <div className={classes.gridBox}></div>
                <div className={classes.gridBox}></div>
            </div>

            <div className={classes.gridFit}>
                <div className={classes.gridBox}></div>
                <div className={classes.gridBox}></div>
            </div>
            <div className={classes.gridFill}>
                <div className={classes.gridBox}></div>
                <div className={classes.gridBox}></div>
            </div>
            <div className={classes.clampBox}></div>
        </>
    )
}

export default Responsive;