import { Component } from "react";
import "./Main.css";

class Main extends Component {
  render() {
    const bookItems = this.props.books.slice(0, 10).map((book, index) => {
      return (
        <ul>
          <li key={index}>Title: {book.title}</li>
          <li key={index}>Author: {book.author}</li>
          <li key={index}>Publisher: {book.publisher}</li>
          <li key={index}>Year: {book.year}</li>
        </ul>
      );
    });

    return (
      <div className="main">
        <h1>Main</h1>
        <div>{bookItems}</div>
      </div>
    );
  }
}

export default Main;
