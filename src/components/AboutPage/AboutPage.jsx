import React from "react";
import Card from '@mui/material/Card';
import './AboutPage.css';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
    <Card sx={{ maxWidth: 345 }}>
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    Technologies Used
        </Typography>
      <Typography variant="body2" color="black">

      <ul>
        <li> React</li>
        <li> Redux</li>
        <li> Sagas</li>
        <li> Google Books API</li>
        <li> Material UI</li>
        
      </ul>
      </Typography>
      </CardContent>
      <Typography gutterBottom variant="h5" component="div">
       Challenge
      </Typography>
      <Typography variant="body2" color="black">

      <ul>
        <li> using google books API search function</li>
      </ul>
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        Future Goal
      </Typography>

      <Typography variant="body2" color="black">

      <ul>
        <li>
          Have multiple features to allow users to have a wishlist and a reading
          list with friends
        </li>
      </ul>
      </Typography>
      <Typography gutterBottom variant="h5" component="div">

      Thank You
      </Typography>
      <Typography variant="body2" color="black">

      <ul>
        <li> Edan Schwartz </li>
        <li> Gaiman Cohort </li>
        <li> Prime Academy</li>
        <li> Friends and Family </li>
      </ul>
      </Typography>

      </Card>
    </div>
  );
}

export default AboutPage;
