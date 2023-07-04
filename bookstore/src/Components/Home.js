import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import  styled from 'styled-components';

function Home() {
  return (
    <Container>
    <div style={{ height: "100vh" }}>
      <Box display="flex" flexDirection={"column"} alignItems={"center"}>
       
       <h3 style={{ color:"white",fontFamily:"algerian",letterSpacing:"2px",marginTop:"5rem",fontSize:"40px" }}>Welcome To Our App</h3>
       
       
        <Button
        LinkComponent={Link}
        to="/get"
        variant="contained"
        color="primary"
        sx={{
            marginTop: "10rem",
            bgcolor: "orangeRed",
            color: "white",
            borderRadius: "1rem",
           
          }}
        >
          <Typography variant="h3" style={{fontFamily:"algerian"}}>View All Books</Typography>
        </Button>
      </Box>
    </div>
    </Container>
  );
}

export default Home;


const Container =styled.div`
background-image:url("https://static01.nyt.com/images/2017/05/11/t-magazine/bookstore-slide-2MCD/bookstore-slide-2MCD-superJumbo.jpg");
background-position:center;
object-fit:cover;
background-repeat:no-repeat;
background-size:cover;
box-shadow: inset 0 0 0 2000px rgba(0,0,0,0.5) ;

`