import "../styles/Question.scss";
import classNames from 'classnames';
import QuestionName from './QuestionName';


export default function Question (props) {
  const questionClass = classNames('question'); 

  // putting string replace here for now, will need to discuss this?
  const insertName = (question, name) => {
    return question.replace('$name', name);
  }

  const formattedQuestion = insertName(props.children, props.name); 

  return (
    <div className={questionClass}>
      <img src={`${props.avatar}`} alt="player avatar"/>
      <p>
      {formattedQuestion}
      </p>
    </div>

  ); 
};