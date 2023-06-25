import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { Link } from 'react-router-dom'
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { toast } from 'react-toastify'
import Alert from '@mui/material/Alert';
export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userEmail = localStorage.getItem("email")
    const userPass = localStorage.getItem("password")
    console.log("Email : ", userEmail)
    console.log("Password : ", userPass)


    const handleClickOpen = () => {
        setOpen(true);
    };




    const loginHandler = (e) => {
        e.preventDefault();
        if (userEmail === email && userPass === password) {
            <Alert severity="error">This is an error alert — check it out!</Alert>
            console.log("HEllllllooooooo    ")
        }


    }


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className="login-main-button" variant="outlined" variant="contained" color="success" onClick={handleClickOpen}>
                LOGIN
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="login-popup-main-head">LOGIN TO SHOP</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                        Get access to your Orders, Wishlist and Recommendations
                    </DialogContentText>

                    <TextField id="outlined-basic" autoFocus
                        margin="dense"
                        id="name" label="Email Address" type="email"
                        fullWidth variant="standard" />

                    <TextField id="outlined-basic" autoFocus
                        margin="dense"
                        id="name" label="Password"
                        type="Password"
                        fullWidth
                        variant="standard"
                    />

                    <DialogContentText id="policy-text">By continuing, you agree to Shop's <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>. </DialogContentText>

                </DialogContent>
                <DialogActions>


                    <Button className="" onClick={handleClose} variant="contained" color="success">
                        LOGIN
                    </Button>
                    <Button onClick={loginHandler} variant="outlined" color="error">
                        CANCEL
                    </Button>


                    <a class="register-new-user" href="http://localhost:3000/register">New to Shop ? Create an account</a>

                </DialogActions>
            </Dialog>
        </div>
    );
}
