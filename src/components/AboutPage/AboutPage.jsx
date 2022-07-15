import React from "react";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
        
        <h1>Technologies Used</h1>
        <ul>
          <li> React</li>
          <li> Redux</li>
          <li> Sagas</li>
          <li> Google Books API</li>
          <li> Material UI</li>
        </ul>

        <h1>Challenge</h1>
        <ul>
          <li> using google books API search function</li>
        </ul>

        <h1>Future Goal</h1>

        <ul>
          <li>
            Have multiple features to allow users to have a wishlist and a
            reading list with friends
          </li>
        </ul>

        <h1>Thank You</h1>
        <ul>
          <li> Edan Schwartz </li>
          <li> Gaiman Cohort </li>
          <li> Prime Academy</li>
          <li> Friends and Family</li>
        </ul>
      </div>
    
  );
}

export default AboutPage;
