import Score from "./Score";

function Student(props) {
  return(
    <div>
      {props.students.map(student =>
        <div class="card" width="10rem">
          <p class="card-title">Name: {student.name}</p>
          <p class="card-text">Bio: {student.bio}</p>
          <p><Score scores={student.scores}/></p>
        </div>
      )}
    </div>
  )
}

export default Student