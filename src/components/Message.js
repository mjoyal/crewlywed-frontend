
export default function Message (props) {
  return (
    <>
    {props.victim && < h2 style={{fontWeight:'normal', textAlign:"center", margin:'1rem 0rem'}}>check out what your crew said about you...</h2>}
    {!props.victim && < h2 style={{fontWeight:'normal', textAlign:"center", margin:'1rem 0rem'}}>choose {props.victimName}'s answer!</h2>}
     </>
  ); 
}