
import Score from "./Score"

export default function Student (props) {
 // name and bio
 // SCORE component
 console.log(props)
 

    return ( 
    <div className="card" >
    <h2>{props.name}</h2>
    <p>{props.bio}</p>
      {
        props.scores.map((prop) =>(
          <Score className="scores" date={prop.date} score={prop.score} />
      )
        )}
    </div>
    )

 
}