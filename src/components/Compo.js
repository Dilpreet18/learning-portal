import React from 'react'
import { Link } from 'react-router-dom'

const Compo = () => {
  return (
    <div>
        <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

</p><br/>
<h2>Another defination for component: </h2><br/>
<p> React divides itself into components for simplicity and all components combine themselves to create a successful UI. These components are reusable in nature</p> <br/>

<h2>Components are of 2 Types: Functional and class component</h2>
<p>A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.</p>
 <h2> Example of class component: </h2>
 <img src='{../public/Images/3.png}'></img>
<h2>Functional Components :</h2> <br/>
<p>A functional component is basically a JavaScript/ES6 function that returns a React element (JSX).</p>
<p>This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element.</p>
<h2>Example of Functional component:</h2>
  <img src= "../2.png"></img>
  
 <br/>
<p>
    <b>*Note for functional components: * </b>
   1. is a JavaScript/ES6 function <br/>
   2.must return a React element (JSX) // jsx is javascript syntax extension <br/>
   3.always starts with a capital letter (naming convention) <br/>
   4.takes props as a parameter if necessary
</p> <br/>
    </div>

  )
}

export default Compo