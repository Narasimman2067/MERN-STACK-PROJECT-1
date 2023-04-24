import React, { useState } from "react";
import styled from "styled-components";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import "../Css/Header.css";
import {Link, NavLink} from "react-router-dom"



function Header() {
  const [value, setValue] = useState();

  return (
    <Container>
      <AppBar className="header-top">
        <Toolbar>
          <Typography>
            <LibraryBooksOutlinedIcon />
          </Typography>
          {/* here we need dynamic value when we tap the Tab it indicate the color so use useState */}
          <TabControll className="tabcontroll">
           <Tabs 
           className="tab"
           textColor="inherit"
           indicatorColor="secondary" 
           value={value}
           onChange={(e,val)=>setValue(val)}  //val is store the value of the tab declare
           >
            <Tab LinkComponent={NavLink} to="/" label="Home" />
            <Tab LinkComponent={NavLink} to="/about" label="About" />
            <Tab LinkComponent={NavLink} to="/addBook" label="AddBooks" />
            <Tab LinkComponent={NavLink} to="/getBook" label="Books" />
           
           
      
          </Tabs>
          </TabControll>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: sticky;
  width: 100vw;
  height: 100vh;
  background: #0f2345 !important;
 
 
`;


const TabControll = styled.div`





`
// const AppBar = styled.div`
//   position: sticky;
//   height: 70px;
//   background-color:white;
//   width: 100%;
//   color: black;
//   display: flex;
//   align-items: center;
// `;

// const Typography = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 20px;
// `;


