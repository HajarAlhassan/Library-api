import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy'
class Book extends Component {
    constructor(props){
        super(props)
      
    }
    render() {
        return (
            <div className=" my-4 col-4 ">
              <Flippy 
    flipOnHover={false} 
    flipOnClick={true} 
    flipDirection="horizontal" 
    ref={(r) => this.flippy = r}
div
    style={{ width: '300px', height: '300px' }} 
  >
    <FrontSide className="  shadow box"
      style={{
        backgroundColor: '#41669d',
      }}
    >
      
      <img src={this.props.src} style={{width:"100%",height:"100%",marginBottom:"20px"}}/>
        

    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#41669d'}}>
     < div style={{ backgroundColor: 'white'}}><h4 className="text-center">{this.props.title}</h4>
     <p>{this.props.author}</p>
     <p>{this.props.firstLine}</p></div>
    </BackSide>
  </Flippy>   
            </div>
        );
    }
}

export default Book;