import React from 'react'
import ListItem from './ListItem.jsx'

class ListBox extends React.Component{


  render(){

      const listNodes = this.props.data.map( (item)  => {
        return (
          <ListItem movie = {item.movie} key = { item.id }>
          </ListItem>
          )
      })

      return (
          <div className = "list-box">
            {listNodes}
          </div>
        )
  }
}

export default ListBox