import {FC} from "react";
import classes from "./Card.module.css"
const Card:FC<{image:string,title:string,subtitle:string,description:string}> = ({image,title,subtitle,description})=>{
    return (
        <>
            <div className={classes.card}>
                <div className={classes.image} style={{backgroundImage: `url(${image})`}}/>
                <div className={classes.info}>
                    <h2>{title}</h2>
                    <h4>{subtitle}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default Card;