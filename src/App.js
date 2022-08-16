import React, { Component } from "react"
import "./App.css"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"

class App extends Component {
  render() {
    return (
      <div className="max-w-2xl mx-auto bg-gray-50">
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    )
  }
}

export default App