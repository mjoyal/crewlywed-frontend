import "../styles/HomePage.scss";

import ButtonContainer from './ButtonContainer';
import LogoHeader from './LogoHeader';
import {Link} from "react-router-dom";



export default function HomePage () {
  return (
    <main className="homePage">
      <LogoHeader big/>
      <p style={{fontSize: "1.5rem"}}>the newlywed game for you & your crew!</p>
      <ButtonContainer>
        <Link className="button button-link" to="/new">host game</Link>
        <Link className="button button-link" to="/join">join game</Link>
      </ButtonContainer>
    </main>
  );
};