import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
// import Counter from "./Counter";
// import SwitchView from "./SwitchView";

class App extends Component {
  constructor() {
    super();
    // bind function allows to set the context for the function that is binding.
    //this.handleIncrement = this.handleIncrement.bind(this)

    this.state = {
      allBooks: [],
    };
  }

  async componentDidMount() {
    fetch("http://localhost:8080/api/books")
      .then((response) => response.json())
      .then((books) => {
        this.setState({
          allBooks: books,
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Main books={this.state.allBooks} />
        <Footer />
      </div>
    );
  }
}

export default App;
