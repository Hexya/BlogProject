import React, { Component } from 'react';
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Actu from "./Body/Actu";
import Cards from './Body/Cards';
import "../assets/stylesheets/App.scss";

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
        <Cards key={i} id={i} author={el.author} articleTitle={el.articleTitle} datePub={el.datePub}  cat={el.cat} img={el.img} desc={el.desc} />
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
        <div className="posBody">
          <div className="colCards">
            {cards}
            <div className="lastArt">LASTEST ARTICLE</div>
          </div>
          <div className="colActu">
            <Actu />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
};

export default App;
