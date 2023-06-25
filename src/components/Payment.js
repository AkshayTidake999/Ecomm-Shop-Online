import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
export default function Payment() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <input name='aaaa' type="radio" /> <span className='upi'>UPI</span>
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        <span>PhonePay , AmazonPay , GPay Accepted...</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className='upi-items-list'>
                            <p className='chooseopt'>Choose an Option</p>

                            <div className='phonepay'>
                                <input className='radio-upi' name='a' type='radio' />
                                <span>   Phone Pay</span><br />
                                <Button variant="contained" color="success">Continue</Button>
                            </div>
                            <div>
                                <input className='radio-upi' name='a' type='radio' />
                                <span>   Amazon Pay</span><br />
                                <Button variant="contained" color="success">Continue</Button>
                            </div>
                            <div>{ }</div>


                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <input name='aaaa' type="radio" />
                        <span > Walletss</span>
                        <div className='phonepay'>
                            <input className='radio-upi' name='a' type='radio' />
                            <span>  Paytm Wallets</span><br />
                            <Button variant="contained" color="success">Continue</Button>
                        </div>
                        <div>
                            <input className='radio-upi' name='a' type='radio' />
                            <span>  Phonepay Wallets</span><br />
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="Enter Number"
                            />
                            <Button variant="contained" color="success">Continue</Button>
                        </div>
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        You are currently not an owner
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <input name='aaaa' type="radio" />
                        <span > Netbanking</span>
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Filtering has been entirely disabled for whole web server
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <input name='aaaa' type="radio" />
                        <span >Cash ON Delivery</span>

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}