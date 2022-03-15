function Score(props) {
  return(
    <>
      {props.scores.map(score =>
        <div>
          <p>Date: {score.date} Score: {score.score}</p>
        </div>
      )}
    </>
  )
}

export default Score