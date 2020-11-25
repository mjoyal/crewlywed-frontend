import "../styles/HomePage.scss";
import Button from './Button';


export default function HomePage () {
  return (
    <main className="homePage">
    <img src="images/logo-detailed.png" alt="logo"/>
    <p>Test your knowledge and fool your friends.<br></br> A simple, catchy two-liner.</p>
    <Button confirm>join game</Button>
    <Button confirm>host game</Button>
    </main>
  );
};