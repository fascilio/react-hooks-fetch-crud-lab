// import React from "react";

// function QuestionItem({ props, question }) {
//   const { id, prompt, answers, correctIndex } = question;

//   const options = answers.map((answer, index) => (
//     <option key={index} value={index}>
//       {answer}
//     </option>
//   ));

//   function handleChange (event) {
//     const value = event.target.value;
//     const id = this.props.question.id;
//     fetch(`/questions/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ correctIndex: value })
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to update question');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Question updated successfully:', data);
//       })
//       .catch(error => {
//         console.error('Error updating question:', error);
//       });
//   }
  

//   return (
//     <li>
//       <h4>Question {id}</h4>
//       <h5>Prompt: {prompt}</h5>
//       <label>
//         Correct Answer:
//         <select defaultValue={correctIndex}>{options}</select>
//       </label>
//       <button className="delete-button" onClick={() => props.deleteQuestion(props.question.id)}>Delete Question</button>
//     </li>
//   );
// }

// export default QuestionItem;


import React from "react";

function QuestionItem({ deleteQuestion, question }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleChange(event) {
    const value = event.target.value;
    fetch(`/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex: value }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update question");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Question updated successfully:", data);
      })
      .catch((error) => {
        console.error("Error updating question:", error);
      });
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>
          {options}
        </select>
      </label>
      <button
        className="delete-button"
        onClick={() => deleteQuestion(question.id)}
      >
        Delete Question
      </button>
    </li>
  );
}

export default QuestionItem;

