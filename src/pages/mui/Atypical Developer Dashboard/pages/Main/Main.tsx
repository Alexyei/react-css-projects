import {FC} from "react";
import {Grid} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";

const ADMain:FC = ()=>{
    return (
        <Grid container>
            <Navbar />
            <Outlet />
        </Grid>
    )
}

export default ADMain;