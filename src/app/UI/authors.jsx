import React from "react";
import { Link } from "react-router-dom";

const AuthorsUi = ({ authors }) => {
  return (
    <main className="container">
      <h3>Authors({authors.length})</h3>
      <ul>
        {authors.map((author, index) => {
          return (
            <li key={index}>
              <Link to={`/users/${author.id}`}>{author.name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default AuthorsUi;