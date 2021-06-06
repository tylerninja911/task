import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import App from "./App";

// let link = "google.com";
// function Booklist(){
//   return (
//   <section className = "booklist">
//   <Book 
//   img = {link} 
//   title = "1st book" 
//   author = "1st author">
//   <p>yes yes yes yes yes
//   yes

//   </p>
//   </Book>

//   <Book 
//   img = {link} 
//   title = "2nd book" 
//   author = "2nd author">
//   </Book>
//   </section>
//   );
// }

// function Book(props){
//   const {img, title, author} = props;
//   return (
//     <div>
//       <img src = {img} alt =''></img>
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {props.children}
//     </div>

//   );

// }

// function Person(props){
//   return (
//     <div className = "person">
//       <h1>{props.name}</h1>
//       <p>{props.age}</p>
//     </div>

//   );


// }

// var app = (
//   <div>
//     <Person name="Max" age ="28"/>
//     <Person name="Manu" age ="29"/>
//   </div>

// );

ReactDOM.render(
  // React.createElement('h1',{style:{color:'blue',textTransform:'uppercase'}},'yeah Man'),
  <App/>,
  document.getElementById('root')
);

