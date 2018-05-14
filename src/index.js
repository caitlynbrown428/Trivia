import React from "react"
import ReactDOM from "react-dom"
import { Button, Container } from "semantic-ui-react"
import he from "he"

import "./index.css"

class App extends React.Component {
  state = {
    question: "Question goes here"
  }

  getAQuestion = () => {
    fetch("https://opentdb.com/api.php?amount=1")
      .then(response => response.json())
      .then(question => {
        console.log(question.results[0].question)
        console.log(he.decode(question.results[0].question))

        this.setState({
          question: he.decode(question.results[0].question)
        })
      })
  }

  render() {
    return (
      <Container className="App">
        <p>{this.state.question}</p>
        <Button onClick={this.getAQuestion}>Get a Trivia Question</Button>
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
