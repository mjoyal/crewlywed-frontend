import "../styles/HomePage.scss";
import Button from './Button';

import {Link} from "react-router-dom";


export default function HomePage () {
  return (
    <main className="homePage">
    <img src="images/logo-detailed.png" alt="logo"/>
    <p>Test your knowledge and fool your friends.<br></br> A simple, catchy two-liner.</p>
    <Link className="button button-link" to="/join">join game</Link>
    <Link className="button button-link" to="/new">host game</Link>
    </main>
  );
};