// import React from "react";

// function QuestionList() {
//   return (
//     <section>
//       <h1>Quiz Questions</h1>
//       <ul>{/* display QuestionItem components here after fetching */}</ul>
//     </section>
//   );
// }

// export default QuestionList;




import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {
  function deleteQuestion(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then(() => setQuestions(questions.filter((q) => q.id !== id)))
      .catch((error) => console.error(error));
  }

  const questionItems = questions.map((question) => (
    <QuestionItem key={question.id} question={question} onDelete={deleteQuestion} />
  ));

  
  

  return (
    <section>
      <h1>Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;

