import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { CartContext } from "../Context/CartContext";

const Component = styled(Box)`
  width: 340px;
  height: 420px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled(Box)`
  width: 260px;
  height: 250px;
  display: flex;
  justify-content: center;
`;
const ViewMore = styled(Box)`
  width: 120px;
  height: 35px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 1.5px solid black;
  }
`;
const AddCart = styled(Box)`
  width: 120px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid black;
  text-align: center;
  cursor: pointer;
`;

const Item = ({ cur }) => {
  const [isClicked, setIsClicked] = useState(false); // State to track if the button is clicked
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  // Function to handle add to cart click
  const handleAddToCart = () => {
    cart.addoneProduct(cur._id,cur.price);
    setIsClicked(true); // Set state to true when button is clicked

    // After 1 second, reset the state to false to revert the color change
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <Component>
      <Image>
        <img src={cur.image} alt="photo" style={{ width: "150px" }} />
      </Image>
      <Typography style={{ fontSize: "24px", color: "purple", fontFamily: "Poppins!important", marginTop: "20px" }}>{cur.title.slice(0, 24)}</Typography>
      <Typography style={{ fontSize: "16px", color: "black", fontFamily: "Poppins!important", marginLeft: "15px" }}>{cur.description.slice(0, 70)}...</Typography>
      <Box style={{ display: "flex", gap: "25px", marginTop: "20px", marginBottom: "10px" }}>
        <Link to={`/description?item=${cur._id}`} style={{ textDecoration: "none" }}><ViewMore>View More</ViewMore></Link>
        {/* Apply dynamic styling to AddCart button based on isClicked state */}
        <AddCart onClick={handleAddToCart} style={{ backgroundColor: isClicked ? "green" : "", color: isClicked ? "white" : "" }}>Add to Cart</AddCart>
      </Box>
    </Component>
  );
};

export default Item;
