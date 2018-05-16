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
    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
      .then(response => response.json())
      .then(question => {
        this.setState({
          question: he.decode(question.results[0].question)
        })
      })
  }

  render() {
    return (
      <Container className="App">
        <Segment>{this.state.question}<Segemnt>
        <Button fluid onClick={this.getAQuestion}>
          Get a Trivia Question
        </Button>
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
