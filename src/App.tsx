import React from 'react';
import './App.css';
import Header from "./Header";
import Technologies from "./Technologies";
import Footer from "./Footer";


// type AppPropsType = {
//   title: Array<string>,
//   name: Array<string>,
// }


function App(props: any) {
  return (
    props.state.map((el: any) => (
      <div>
        <Header titleName={el.title} name={el.name}/>
        <Footer titleName={el.title} name={el.name}/>
        <Technologies titleName={el.title} name={el.name}/>
      </div>
    )))
}

export default App;