import { Component } from "react";
import { NavLink } from "react-router-dom";

class AddBookPage extends Component {
  constructor() {
    super();

    this.state = {
      bookTitle: "",
      bookAuthor: "",
      bookPublisher: "",
      bookYear: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddBookSubmit = () => {
    fetch("http://localhost:8080/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: this.state.bookTitle,
        author: this.state.bookAuthor,
        publisher: this.state.bookPublisher,
        year: this.state.bookYear,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          // take the user to view all books
          this.props.history.push("/");
        }
      });
  };

  render() {
    return (
      <div>
        <h1>Add Book Page</h1>
        <NavLink to="/">Home</NavLink>
        <input
          type="text"
          name="bookTitle"
          onChange={this.handleOnChange}
          placeholder="Enter Title"
        />
        <input
          type="text"
          name="bookAuthor"
          onChange={this.handleOnChange}
          placeholder="Enter Author"
        />
        <input
          type="text"
          name="bookPublisher"
          onChange={this.handleOnChange}
          placeholder="Enter Publisher"
        />
        <input
          type="text"
          name="bookYear"
          onChange={this.handleOnChange}
          placeholder="Enter Year"
        />
        <button onClick={this.handleAddBookSubmit}>Submit</button>
      </div>
    );
  }
}

export default AddBookPage;
