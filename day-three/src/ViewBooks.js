import { Component } from "react";

class ViewBooks extends Component {
  constructor() {
    super();

    this.state = {
      allBooks: [],
    };
  }

  render() {
    return <h1>All Books</h1>;
  }
}

export default ViewBooks;
