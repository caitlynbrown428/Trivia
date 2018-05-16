import React from "react"
import ReactDOM from "react-dom"
import { Button, Container } from "semantic-ui-react"
import he from "he"

import "./index.css"

class App extends React.Component {
  state = {
    question: "Question goes here",
    answer: "Correct answer goes here",
    wrongAnswers: []
  }

  getAQuestion = () => {
    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
      .then(response => response.json())
      .then(question => {
        this.setState({
          question: he.decode(question.results[0].question),
          wrongAnswers: question.results[0].incorrect_answers,
          answer: he.decode(question.results[0].correct_answer)
        })
      })
  }

  render() {
    return (
      <Container className="App">
<<<<<<< HEAD
        <p>{this.state.question}</p>
        <Button fluid>
=======
        <p className="Question">{this.state.question}</p>
        <Button>
>>>>>>> ef7efd7ba5826847d7abb5ad1d8e73a49fdc05b7
          <p>{this.state.answer}</p>
        </Button>
        {this.state.wrongAnswers.map((wrongAnswer, i) => (
          <Button fluid key={i}>
            {wrongAnswer}
          </Button>
        ))}

        <Button fluid onClick={this.getAQuestion}>
          Get a Question
        </Button>
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
