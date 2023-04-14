

export default function Score(props) {
  // date and score
  return (
    <div className="score">
      <div>
      <p>Date: {props.date}</p>
      <p>Score: {props.score}</p>
      </div>
    </div>
  )
}