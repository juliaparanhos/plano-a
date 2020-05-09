import React from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css' 

class Rating extends React.Component{
    render(){
        return(
            <div>
                <Rater total={5} rating={1}/>
            </div>
        )
    }
}

export default Rating;