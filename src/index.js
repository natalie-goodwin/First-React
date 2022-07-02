import React from 'react';
import ReactDOM from 'react-dom';

let element = React.createElement('h1', {}, 'This is React!');
ReactDOM.render(element, document.getElementById('app'));
/*we will take the app we created in html and render it 
with React.createElement inside the element; createElement
takes 3 arguments: element tag(what will be created), 
props object, and the content (children of element) that will
be rendered and created as an element on the DOM*/