/*
*
<div class="parent">
  <div class ="child">
    <h1>Im H1 TAG<h1>
   </div>
</div>
*
*/
import React from "react";
import ReactDOM from "react-dom/client";
// const head = React.createElement(
//     'div',
//     { id: "parent" },
//     [React.createElement('div',{ id: "child" },
//         [React.createElement('h1', {}, 'Im H1 tag'), React.createElement('h2', {}, 'Im H2 tag')]),
//     React.createElement('div',{ id: "child2" },
//         [React.createElement('h1', {}, 'Im H1 tag'), React.createElement('h2', {}, 'Im H2 tag')])]
// );

//React Functional component
const HeadComponent1 = () => (
   <div class="subheading">
     <h1>Welcome</h1>
   </div>
 );
 const elementsJsx = (
   <div class='element'>
       <h1>JSX Element one</h1>
    </div>
);
 const elementJsx = (
     <div class='element'>
       // Three ways of calling React Functional component inside jsx element function
         <HeadComponent1/>
         <HeadComponent1></HeadComponent1>
         {HeadComponent1()}
      // Calling jsx element function inside jsx element function
         {elementsJsx}
         <h1>JSX Element two</h1>
      </div>
 );


const intValue = 5000;
// React Functional component inside calling jsx element function and calling Functional component
const HeadComponent2 = () => {
  return <div class="heading">

           // React Functional component inside calling the jsx element function   
            {elementJsx}
            {intValue}
            {1000 + 1233}

            // Three ways of calling React Functional component inside the Functional component
            {HeadComponent1()}
            <HeadComponent1></HeadComponent1>
            <HeadComponent1/>
            
             <h1>Namaste react component</h1>
         </div>
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadComponent2/>);
