import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import React, { memo } from "react";

const ProductCard = memo(({ product, getProduct }) => {
  const { category, price, images, title,description } = product;

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", borderRadius:"12px",width: "300px",boxShadow:"1px 0px 12px grey", padding:"0px" }}>
        <Paper
          className=""
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "250px",
            color:"black",
            fontSize:"24px",
            paddingLeft:"4px"
          }}
          title={title}
        >
          {title}
        </Paper>
        <span  style={{color:"grey",fontSize:"24px",paddingLeft:"4px"}}>{"Rs."}{price}</span>
        <Box sx={{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",}}>
          {description}
        </Box>
        {
          <img
            src={images}
            alt={category?.name}
            width={"100%"}
            height={"300px"}
            style={{ backgroundImage: "inherit", objectFit: "cover" }}
          />
        }
        <div style={{marginBlock:"10px", display:"flex", flexDirection:"column",gap:"0.5rem"}}>
          <button onClick={() => getProduct(product, "a")}>Add to Cart</button>
          <button onClick={() => getProduct(product, "d")}>Delete</button>
        </div>
      </div>
    </>
  );
});

export default ProductCard;
