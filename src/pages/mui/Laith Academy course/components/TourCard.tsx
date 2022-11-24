import {FC, useMemo} from "react";
import {Box, Grid, Paper, Rating, Typography} from "@mui/material";
import classes from "./TourCard.module.scss"
import {AccessTime} from "@mui/icons-material";

const TourCard: FC = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3} sx={{overflow:"hidden"}}>
                <img className={classes.img} src="https://picsum.photos/200/300" alt="random"/>
                <Box paddingX={1}>
                    <Typography variant={"subtitle1"} component={"h2"}>
                        Название карточки
                    </Typography>
                    <Box sx={{display:"flex",alignItems:"center"}} marginTop={3}>
                        <AccessTime sx={{width:12.5}}/>
                        <Typography variant={"body2"} component={"p"} marginLeft={0.5}>
                            5 hours
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                        <Rating name={"read-only"} readOnly precision={0.5} value={4.5} size={"small"}/>
                        <Typography variant={"body2"} component={"p"} marginLeft={0.5}>4.5</Typography>
                        <Typography variant={"body2"} component={"p"} marginLeft={1.5}>(655 reviews)</Typography>
                    </Box>
                    <Box>
                        <Typography variant={"h6"} component={"h3"} marginTop={0}>
                            From C $1
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
}

export default TourCard;