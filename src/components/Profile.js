import { useState } from "react"
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
const Profile = () => {

    const [currentaddress, setCurrentAddress] = useState("")
    const [parmanentaddress, setParmanentAddress] = useState("")
    const [alternateNumber, stAlternateNumber] = useState("")

    const first = localStorage.getItem("firstName")
    const last = localStorage.getItem("lastName")
    return (
        <>
            {/* <div>
            <h1 className="userprofilemain">Hello {first} {last}</h1> 
            <img alt="" className="dummyimage" src="https://www.nsb.gov.bt/wp-content/uploads/2020/12/nopicture.png"/>
            </div> */}


            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <h1 className="mainHeadUser">Welcome To Shop {first} {last}</h1>
                    </Grid>
                    <Grid item xs={4}>
                        Enter Address<textarea col="20" />
                    </Grid>
                    <Grid item xs={2}>
                        <img alt="" className="dummyimage" src="https://www.nsb.gov.bt/wp-content/uploads/2020/12/nopicture.png" />
                    </Grid>
                    <Grid item xs={8}>
                        <h4 className="infoUser1" > First Name : {" "}
                            {localStorage.getItem("firstName")
                                ? localStorage.getItem("firstName")
                                : "NA"}</h4>
                        <h4 className="infoUser1"  > Last Name : {" "}
                            {localStorage.getItem("lastName")
                                ? localStorage.getItem("lastName")
                                : "NA"
                            }</h4>
                        <h4 className="infoUser1"> EMail :{" "}
                            {localStorage.getItem("email")
                                ? localStorage.getItem("email")
                                : "NA"}</h4>
                        <h4 className="infoUser1">
                            Mobile Number : {" "}
                            {localStorage.getItem("mobile")
                                ? localStorage.getItem("mobile  ")
                                : "NA"
                            }
                        </h4>
                        <h4 className="infoUser1">
                            Alternate Number : {" "}
                            {localStorage.getItem("alternateNumber")
                                ? localStorage.getItem("alternateNumber  ")
                                : <span>
                                    <input onChange={(e) => stAlternateNumber(e.target.value)} style={{ height: "25px", width: "200px" }} placeholder="Alternate Number" />
                                    {/* <button onClick={(e)=>}> Save</button> */}
                                </span>
                            }
                        </h4>
                        <h4 className="infoUser1">
                            Parmanent Address : {" "}
                            {localStorage.getItem("parmanentaddress")
                                ? localStorage.getItem("parmanentaddress  ")
                                : "NA"
                            }
                        </h4>
                        <h4 className="infoUser1">
                            Current Address : {" "}
                            {localStorage.getItem("currentaddress")
                                ? localStorage.getItem("currentaddress  ")
                                : "NA"
                            }
                        </h4>
                        <Button variant="contained" size="medium">
                            Edit Info
                        </Button>
                    </Grid>
                </Grid>
            </Box>




        </>
    )
}
export default Profile

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
}));

const Edit = () => {
    return (
        <>
            <h1>Edit</h1>
        </>
    )
}