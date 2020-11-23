import "../styles/Question.scss";
import classNames from 'classnames';


export default function QuestionName (props) {
  const questionClass = classNames('question-name'); 
  return (
  <div>
    <p>{props.name}</p>
    <footer></footer>
  </div>
  ); 
};