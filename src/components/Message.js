
export default function Message (props) {
  return (
    <>
    {props.victim && < h2 style={{fontWeight:'normal', textAlign:"center"}}>check out what your crew said about you...</h2>}
    {!props.victim && < h2 style={{fontWeight:'normal', textAlign:"center"}}>choose {props.name}'s answer!</h2>}
     </>
  ); 
}