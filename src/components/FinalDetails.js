import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Payment from './Payment';


export default function FinalDetails() {

    const firstName = localStorage.getItem("firstName")
    const lastname = localStorage.getItem("lastName")
    const mobile = localStorage.getItem("mobile")
    const email = localStorage.getItem("email")
    const [state, setState] = React.useState('');
    const handleChange = (event) => {
        setState(event.target.value);
    };
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className='headfinallist'>LOGIN </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p className='finalCoustDetails'>Name : {firstName} {lastname}</p>
                        <p className='finalCoustDetails'>Email ID : {email} </p>
                        <p className='finalCoustDetails'>Mobile Number : {mobile} </p>
                        <p className='finalCoustDetails'>Alternate Number : NA</p>
                        <p className='finalCoustDetails'>Current Address : NA</p>
                        <p className='finalCoustDetails'>Parmanent Address : NA</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className='headfinallist'>DELIVERY ADDRESS</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <span ><TextField
                        style={{ width: "700px" }}
                        id="outlined-multiline-flexible"
                        label="Address (Area/Street)"
                        multiline
                        maxRows={4} />
                    </span>
                    <span><TextField
                        id="outlined-multiline-flexible"
                        label="Pincode"
                        multiline
                        className='firstrowitem'
                        type="number"
                        maxRows={4} />
                    </span>

                    <span><TextField
                        id="outlined-multiline-flexible"
                        label="Locality"
                        className='firstrowitem'
                        multiline
                        maxRows={4} />
                    </span>
                    <span><TextField
                        id="outlined-multiline-flexible"
                        label="City/Distict/Town"
                        className='firstrowitem'

                        multiline
                        maxRows={4} />
                    </span>

                    <span>
                        <Box className='firstrowitemdrop'>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">State</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={state}
                                    label="State"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={1}>Assam</MenuItem>
                                    <MenuItem value={2}>West Bengal</MenuItem>
                                    <MenuItem value={3}>Mizoram</MenuItem>
                                    <MenuItem value={4}>Andhra Pradesh</MenuItem>
                                    <MenuItem value={5}>Maharashtra</MenuItem>
                                    <MenuItem value={6}>Himachal Pradesh</MenuItem>
                                    <MenuItem value={7}>Punjab</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </span>
                    <div className='alterlandmark'>
                        <span><TextField
                            id="outlined-multiline-flexible"
                            label="Landmark"
                            multiline
                            className='firstrowitemaaaa'
                            maxRows={4} />
                        </span>
                        <span><TextField
                            id="outlined-multiline-flexible"
                            label="Alternate Number"
                            className='firstrowitemaaaabbb'
                            multiline
                            maxRows={4} />
                        </span>
                    </div>
                </AccordionDetails>
                <p className='addresstype'>Address Type</p>
                <div className='homeoroffice'>
                    <FormControlLabel className='a' name="a" required control={<Checkbox />} label="Home (All Day Delivery)" />
                    <FormControlLabel className='b' name="a" required control={<Checkbox />} label="Work (Delivery Between 10PM to 7PM)" />
                </div>
                <Button className="saveLaterBtn" variant="contained" color="success" >
                    Save Delivery Address
                </Button>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className='headfinallist'>ORDER SUMMARY </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className='headfinallist'>PAYMENT OPTION </Typography>
                </AccordionSummary>
                <AccordionDetails>
            <Payment />                  
                </AccordionDetails>
            </Accordion>
        </div>
    );
}