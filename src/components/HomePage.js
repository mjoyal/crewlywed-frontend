import "../styles/HomePage.scss";
import LogoHeader from './LogoHeader';

import {Link} from "react-router-dom";

export default function HomePage () {
  return (
    <main className="homePage">
    <LogoHeader big/>
    <p>Test your knowledge and fool your friends.<br></br> A simple, catchy two-liner.</p>
    <Link className="button button-link" to="/join">join game</Link>
    <Link className="button button-link" to="/new">host game</Link>
    </main>
  );
};