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
    const response = await fetch(
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
    );
    const data = await response.json();
    this.setState({ allBooks: data });
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
