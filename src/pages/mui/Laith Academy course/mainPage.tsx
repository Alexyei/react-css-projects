import {FC} from "react";
import {Container, Grid} from "@mui/material";
import TourCard from "./components/TourCard";

const LAMainPage: FC = () => {
    return (
        <Container>
            <Grid container spacing={5}>
                <TourCard/>
                <TourCard/>
                <TourCard/>
                <TourCard/>
            </Grid>
        </Container>
    )
}

export default LAMainPage