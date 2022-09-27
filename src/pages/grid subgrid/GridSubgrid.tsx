import classes from './GridSubgrid.module.scss'
import {FC, ReactNode} from "react";

const Card:FC<{header: string,imgSrc:string, children:ReactNode,className?:string}> = ({imgSrc,header,children,className=classes.card})=>{
    return (
        <div className={className}>
            <h2>{header}</h2>
            {children}
            <img src={imgSrc} alt=""/>
        </div>
    )
}

//SUBGRID заставляет все элементы синхронизировать размеры, без subgrid размеры подгоняются для каждой карточки отдельно
//SUBGRID поддерживается только в firefox
//Для наглядности нужно уменьшить размер браузера до 800 пикселов или меньше
const GridSubgrid:FC = ()=>{
    const imgSrc = [
        "https://images.unsplash.com/photo-1663908778255-bd560e30d55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1664009369177-072a596d69c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1663909162097-f0433ff9ec57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        "https://images.unsplash.com/photo-1647161221900-2cabf3208088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1663475538780-ec28d0521236?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1663352481463-c5f3e70ff315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ]
return (
    <div className={classes.container}>
        <div className={"grid-example"}>
            <h1>Without subgrid D:</h1>
            <div className={classes.card__grid}>
                <Card header={"Lorem ipsum"} imgSrc={imgSrc[0]}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae maxime distinctio
                        quos ullam incidunt.</p>
                </Card>
                <Card header={"Omnis, veritatis odio."} imgSrc={imgSrc[1]}>
                    <p>Enim molestiae recusandae ut dolor sit amet consectetur adipisicing. odit possimus eius
                        inventore. Quasi illo unde neque? Itaque, deleniti adipisci?</p>
                </Card>
                <Card header={"Exercitationem, libero quam!"} imgSrc={imgSrc[2]}>
                    <p>Error maiores culpa eaque. Quam quisquam quae nostrum ipsa dolorum atque aperiam fugit soluta
                        error!</p>
                </Card>
                <Card header={"Quibusdam, recusandae odio."} imgSrc={imgSrc[3]}>
                    <p>Corporis laboriosam, neque est commodi architecto voluptatem, ipsam corrupti ullam similique
                        eligendi hic qui natus?</p>
                </Card>
                <Card header={"Modi, exer citat ionem dicta."} imgSrc={imgSrc[4]}>
                    <p>Laboriosam, aliquam tempore minus dolorem ullam et veniam asperiores, eveniet vitae odit itaque
                        eligendi ducimus?</p>
                </Card>
                <Card header={"Dolore."} imgSrc={imgSrc[5]}>
                    <p>Reprehenderit, labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, aut. harum
                        vitae voluptate alias saepe debitis quo perspiciatis, delectus fugiat modi eveniet.</p>
                </Card>
            </div>
        </div>
        <div className={"subgrid-example"}>
            <h1>With subgrid D:</h1>
            <div className={classes.card__grid__subgrid}>
                <Card header={"Lorem ipsum"} imgSrc={imgSrc[0]} className={classes.card__subgrid}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae maxime distinctio
                        quos ullam incidunt.</p>
                </Card>
                <Card header={"Omnis, veritatis odio."} imgSrc={imgSrc[1]} className={classes.card__subgrid}>
                    <p>Enim molestiae recusandae ut dolor sit amet consectetur adipisicing. odit possimus eius
                        inventore. Quasi illo unde neque? Itaque, deleniti adipisci?</p>
                </Card>
                <Card header={"Exercitationem, libero quam!"} imgSrc={imgSrc[2]} className={classes.card__subgrid}>
                    <p>Error maiores culpa eaque. Quam quisquam quae nostrum ipsa dolorum atque aperiam fugit soluta
                        error!</p>
                </Card>
                <Card header={"Quibusdam, recusandae odio."} imgSrc={imgSrc[3]} className={classes.card__subgrid}>
                    <p>Corporis laboriosam, neque est commodi architecto voluptatem, ipsam corrupti ullam similique
                        eligendi hic qui natus?</p>
                </Card>
                <Card header={"Modi, exer citat ionem dicta."} imgSrc={imgSrc[4]} className={classes.card__subgrid}>
                    <p>Laboriosam, aliquam tempore minus dolorem ullam et veniam asperiores, eveniet vitae odit itaque
                        eligendi ducimus?</p>
                </Card>
                <Card header={"Dolore."} imgSrc={imgSrc[5]} className={classes.card__subgrid}>
                    <p>Reprehenderit, labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, aut. harum
                        vitae voluptate alias saepe debitis quo perspiciatis, delectus fugiat modi eveniet.</p>
                </Card>
            </div>
        </div>
    </div>)
}

export default GridSubgrid;