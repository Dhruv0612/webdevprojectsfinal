import React,{Component} from 'react';

class StylingDemo extends Component{

    render() {
        return (
            <div>
                {/*to style an element with inline attribute, value must be javascript object. */}
                <h1 style={{color:'red'}}>Namaskara India</h1>
                {/*note: in jsx, javascript expressions are written inside curly braces,
                and since javasscript also uses curly braces,the styling in the example above is written inside two sets of curly braces {{}}*/}

                <h2 style={{backgroundColor:'lightblue'}}>Welcome to bengaluru</h2>    {/*properties with two names like background color- must be written in camel case */}
            </div>
        );
    }
}

export default StylingDemo;

