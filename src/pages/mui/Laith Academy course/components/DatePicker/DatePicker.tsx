import * as React from "react";
import TextField from "@mui/material/TextField";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from "@mui/material/Box";
import {useEffect} from "react";
import AdapterDayjs from "@mui/lab/AdapterDayjs";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DateRange, StaticDateRangePicker} from "@mui/x-date-pickers-pro";

export default function StaticDateRangePickerDemo() {
    const [value, setValue] = React.useState<DateRange<null>>([null, null]);

    useEffect(()=>{
        console.log(value)
    },[value])

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDateRangePicker
                displayStaticWrapperAs="desktop"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>
    );
}