import React from 'react'
import Header from './Header.jsx'
import ListBox from './ListBox.jsx'
import GetShowTimes from './GetShowTimes.jsx'


class ImdbMain extends React.Component{


  constructor(props){
    super(props);
    this.state= {
      data: [{ id: 1, movie: "Star Wars"},{ id: 2, movie: "Star Trek"}]
    }
  }

  render(){
    return(
        <div className = "imdb-main" >
        <Header />
        <ListBox data = {this.state.data}/>
        <GetShowTimes />
        </div>
      )
  }
}


export default ImdbMain

