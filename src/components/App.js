import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Cards from './Body/Cards';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    }

  }
  componentDidMount(){

    fetch(`${window.location.origin}/api`)
    .then((res) =>{
      return res.json();
    })
    .then((json) =>{
      this.setState({
        data:json
      });
    });
  }

  renderCards(){
    return this.state.data.map((el, i) => {
      return(
       <Cards key={i} id={i} author={el.author} articleTitle={el.articleTitle} datePub={el.datePub} />
      )
    })
  }
  render() {
// console.log(this.state.data);
console.log(this.state.data[0]);
let cards = this.renderCards();
    return (

      <div className="App">
        <Header />
        <Body />
        <div className="posCards">
        {cards}
        </div>
        <Footer />
      </div>
    )
  }
};

export default App;
