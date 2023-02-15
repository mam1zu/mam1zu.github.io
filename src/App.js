import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "styled-components";
import { Home } from "./Home";
import { Product } from "./Product";
import { Contact } from "./Contact";

/** @jsxImportSource @emotion/react */

const Header = css`
  border-bottom: 1px solid grey;
  margin-top: 12px;
  padding: 0;
`

const Logo = css`
  font-size: 45px;
  color: silver;
  font-weight: bold;
  font-family: Candara;
  margin: 12px 48px;
`

const ulMenu = css`
  list-style-type: none;
  display: flex;
  background-color: darkturquoise;
  margin: 0;
  padding: 0px 48px;
`

const LiTab = styled.li`
  cursor: pointer;
  padding: 12px 12px;
  color: white;
  background-color: ${props => props.focus ? "darkcyan" : "none"};
`

const TabSelect = tab => {
    switch(tab) {
        case "home":
            return <Home/>
        case "product":
            return <Product/>
        case "contact":
            return <Contact/>
    }
}


const Footer = css`
  padding: 30px;
  color: white;
  background-color: darkturquoise;
  text-align: center;
`

function App() {
    const [tab, setTab] = useState("home");
    return (
        <div>
            <div css={Header}>
                <h4 css={Logo}>RESERVOIR</h4>
                <ul css={ulMenu}>
                    <LiTab focus={tab === "home"} onClick={() => setTab("home")}>ホーム</LiTab>
                    <LiTab focus={tab === "product"} onClick={() => setTab("product")}>制作物</LiTab>
                    <LiTab focus={tab === "contact"} onClick={() => setTab("contact")}>連絡先</LiTab>
                </ul>
            </div>
            {TabSelect(tab)}
            <div css={Footer}>
                ©2022-2023 Mamizu
            </div>
        </div>
    );
}

export default App;
