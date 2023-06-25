import * as React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

 function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar("Item Added In Cart Successfully!", { variant });
  };

  return (
    <React.Fragment>
      <Button  variant="contained" className="addToCartmain" onClick={handleClickVariant("success")}>Add To Cart</Button>
    </React.Fragment>
  );
}
export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={5}>
      <MyApp />
    </SnackbarProvider>
  );
}   
