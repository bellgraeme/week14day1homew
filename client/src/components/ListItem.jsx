import React from 'react'



const  ListItem = (props)  => {

    return(
        <div className= "list-item">
            <h4 className="movie-name">
            { props.movie }
            </h4>
        </div>
      )

}


export default ListItem