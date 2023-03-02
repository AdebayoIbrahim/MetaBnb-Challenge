import React from "react";
import { StyledNav, Ul, Li, Button } from "./NavBarStyle";
import { Link } from "react-router-dom";
import "./nav.css";
import logo_src from "../../images/logo";
export default function Nav() {
  return (
    <StyledNav>
      <Link to="/" className="logo">
        <img src={logo_src.first} alt="meta_logo" />
      </Link>

      <Ul>
        <Li state="active">
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/services">Place To Stay</Link>
        </Li>
        <Li>
          <Link to="/contact">NFTs</Link>
        </Li>
        <Li>
          <Link to="/contact">Community</Link>
        </Li>
      </Ul>
      <Button>Connect Wallet</Button>
    </StyledNav>
  );
}
