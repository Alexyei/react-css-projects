import {FC, useMemo} from "react";
import {Box, createTheme, Grid, Paper, Rating, ThemeProvider, Typography} from "@mui/material";
import classes from "./TourCard.module.scss"
import {AccessTime} from "@mui/icons-material";
import {TourType} from "../../mainPage";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        body3: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        body3?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        body3: true;
    }
}

const theme = createTheme({
    typography: {
        "body2": {
            fontSize: 11
        },
        "body3": {
            fontSize: 9
        }
    }
})




const TourCard: FC<{tour:TourType}> = ({tour}) => {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
            <Paper elevation={3} sx={{overflow: "hidden"}}>
                <img className={classes.img} src={tour.image} alt="random"/>
                <Box paddingX={1}>
                    <Typography variant={"subtitle1"} component={"h2"}>
                        {tour.name}
                    </Typography>
                    <Box sx={{display: "flex", alignItems: "center"}} marginTop={3}>
                        <AccessTime sx={{width: 12.5}}/>
                        <Typography variant={"body2"} component={"p"} marginLeft={0.5}>
                            {tour.duration} hours
                        </Typography>
                    </Box>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <Rating name={"read-only"} readOnly precision={0.5} value={tour.rating} size={"small"}/>
                        <Typography variant={"body3"} component={"p"} marginLeft={0.5}>{tour.rating}</Typography>
                        <Typography variant={"body3"} component={"p"} marginLeft={1.5}>({tour.numberOfReviews} reviews)</Typography>
                    </Box>
                    <Box>
                        <Typography variant={"h6"} component={"h3"} marginTop={0}>
                            From C ${tour.price}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
            </ThemeProvider>
        </Grid>
    )
}

export default TourCard;