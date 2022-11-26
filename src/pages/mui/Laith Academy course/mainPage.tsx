import {FC} from "react";
import {Container, Grid, Typography} from "@mui/material";
import TourCard from "./components/TourCard/TourCard";
import SearchAppBar from "./components/SearchAppBar/SearchAppBar";
import data from '../../../data.json'

export type TourType = { id: number; name: string; duration: number; rating: number; numberOfReviews: number; price: number; image: string; }
const LAMainPage: FC = () => {
    return (
        <>
            <SearchAppBar/>
        <Container sx={{marginTop: 5}}>
            {data.map(city=>
              <>  <Typography variant={"h4"} component={"h2"} marginTop={5} marginBottom={3}>{city.name}</Typography>
              <Grid container spacing={5}>{city.tours.map((tour, index)=><TourCard tour={tour} key={index}/>)}  </Grid>
              </>
            )}
            {/*<Grid container spacing={5}>*/}

                {/*<TourCard/>*/}
                {/*<TourCard/>*/}
                {/*<TourCard/>*/}
                {/*<TourCard/>*/}
            {/*</Grid>*/}
        </Container>
        </>
    )
}

export default LAMainPage