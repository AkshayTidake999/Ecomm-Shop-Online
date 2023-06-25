import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/action'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useState } from "react";
import PlaceOrderConfirm from "./PlaceOrderConfirm";
import { Button } from "@mui/material";
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


export default function Cart() {
  const [count, setCount] = useState(1)
  const dispatch = useDispatch();

  const increment = (id) => {
    setCount(count + 1)
  }

  const decrement = (id) => {
    setCount(count - 1)
  }
  const random = Math.floor(Math.random() * 10)
  // console.log("asasdadas"+random)
  const d = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const date = d.getDate() + " " + monthNames[d.getMonth()];


  const result = useSelector((state) => state.cartData)

  const withoutDiscount = result.length && result.map(item => Math.trunc(item.price * 30)).reduce((prev, next) => prev + next)
  const withDiscount = result.length && result.map(item => Math.trunc((item.price * 30) - 321)).reduce((prev, next) => prev + next)
  console.warn("Ammount new  ", withoutDiscount)
  console.warn("Ammount new  ", withDiscount)
  const discount = result.length
  console.warn("Length Item : ", discount)
  return (
    <div>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 2000,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        {
          result.map((item) =>
            <div>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="complex" src={item.image} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        {item.category}
                        <span className="assured">{item.price * 30 > 600 ? <span className="assured"><img src="https://static.vecteezy.com/system/resources/previews/019/998/624/original/100-guaranteed-quality-product-stamp-gold-logo-design-icon-isnpiration-vector.jpg" style={{ height: "40px" }} alt="Assured Product" /> </span> : <span></span>}</span>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">

                        <span style={{ textDecoration: "line-through" }}> ₹ {item.price * 30}      </span>
                        <span className="finalOfferPrice final">₹ {Math.trunc(item.price * 30) - 321}</span>
                        <span className="percentage">{Math.floor(Math.random() * 30) + 2}%  Off </span>
                        <span className="offerText">    {Math.floor(Math.random() * 5)}   offer Applied </span>
                        <span><img style={{ height: "13px" }} src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/support/technical-support.svg" /></span>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ cursor: 'pointer' }} variant="body2">
                        <button onClick={() => decrement(item.id)} className="count-btn">-</button>
                        <span className="cart-count-countpage"> {count} </span>
                        <button onClick={increment} className="count-btn" > + </button>
                        <span data={item} className="saveforlater">SAVE FOR LATER</span>
                        {/*  >Remove</button><br/><br/> */}
                        <span onClick={() => dispatch(removeFromCart(item.id))} className="removeitem">REMOVE ITEM</span>

                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" component="div">
                      <span className="dateshow">Delivery by {date} |   </span>
                      {item.price * 30 > 500 ? <span><span style={{ color: "green" }}  >Free </span>
                        <span className="freeDelivery">₹40</span> </span> : <span>Delivery ₹40</span>}

                    </Typography>
                  </Grid>
                </Grid>

              </Grid>

              <hr />


            </div>

          )

        }
        {result.length > 0 ? <PlaceOrder /> : null}
        {/*   */}

      </Paper>


      <div className="maindivcartfinal">
        <span className="priceDetails-head">PRICE DETAILS</span>
        <hr />
        <div>
          <span className="prceDetailsLeft-item">Price ({discount} item)</span>
          <span className="prceDetailsRight-item">₹ {withoutDiscount} </span>
        </div>
        <div>
          <span className="prceDetailsLeft-item">Discount</span>
          <span className="prceDetailsRight-item">- {321 * discount}</span>
        </div>
        <div>
          <span className="prceDetailsLeft-item">Delivery Charges</span>
          <span className="prceDetailsRight-item">Free</span>
        </div>
        <hr />
        <div>
          <span className="prceDetailsLeft-item">Total Ammount</span>
          <span className="prceDetailsRight-item">₹ {withDiscount}</span>

        </div>
        <hr />
        <div className="saveMsg">You will save ₹ {withoutDiscount - withDiscount} on this order</div>
        <hr />

      </div>
      <SaveLater />
    </div>

  );
}

export function PlaceOrder() {
  return (
    <>
      <div className="savelaterBox" style={{ width: "783px" }}>
        <div className="saveBox">
          <span  >
            {<PlaceOrderConfirm />}
          </span>
        </div>
        <div></div>
      </div>
    </>
  )
}
export function SaveLater(props) {
  console.warn(props.data)
  return (
    <>
      <div className="saveBoxRight" >
        <div className="saveMainHead">
          <h2 className="savelaterhead">SAVE FOR LATER</h2>
          <hr />
          <div className="itemSaveLater">
            <span>{props.data}</span>
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}