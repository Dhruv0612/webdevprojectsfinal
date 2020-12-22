import React,{Component} from 'react';

class StylingDemo1 extends Component{

    render() {
        
        const mystyle={
            color:'white',
            backgroundColor:'DodgerBlue',
            padding:'10 px',
            fontFamily:'Arial'
        };
        
        return (
            <div>
                <h1 style={{color:'red'}}>Namaskara India</h1>
                

                <h2 style={{backGround:'lightblue'}}>Welcome to bengaluru</h2>   
                <p style={mystyle}>all is well</p>
            </div>
        );
    }
}

export default StylingDemo1;

