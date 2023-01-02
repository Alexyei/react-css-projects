import {FC} from "react";
import classes from "./ContainerQuery.module.css";
import Card from "./Components/Card";
import movies from "./Data/movies.json"
const ContainerQuery:FC = ()=>{
    return (
        <>
            <div className={classes.page}>
                <div className={classes.layout}>
                    <main className={classes.container}>
                        <Card {...movies[0]}/>
                        <Card {...movies[1]}/>
                        <Card {...movies[2]}/>
                    </main>
                    <article className={classes.container}>
                        <Card {...movies[3]}/>
                        <Card {...movies[4]}/>
                        <Card {...movies[5]}/>
                    </article>
                </div>
            </div>
        </>
    )
}

export default ContainerQuery;