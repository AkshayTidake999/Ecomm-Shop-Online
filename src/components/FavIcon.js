import * as React from "react";
import Box from "@mui/material/Box";

import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function FavIcon() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <abbr className="favroiteicon" title="Add To Favorite">
      <Box
        className="colorFav" abbr="added"
        onClick={handleClick}
        style={{ color: active ? "red" : "#8d7a7a" }}
      >
        <FavoriteIcon />
      </Box>
    </abbr>
  );
}
