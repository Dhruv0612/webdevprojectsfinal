import React,{Component} from 'react';

class GreetUser extends Component{
    constructor(){
        super();
        this.state={userName:''};
    }

    dogreetings = (event) => {
        this.setState({userName: event.target.value});
    };

    render() {
        let result='';
        if(this.state.userName){
            result=<h1>Hello {this.state.userName}</h1>;
        }
        else{
            result='';
        }
        
        return (
            <div>
                {result}
                <form>
                    <h1>Greetings {this.state.userName}</h1>
                    <p>Enter your name</p>
                    <input type='text' onChange={this.dogreetings}/>               
                </form>
                <div>Greetings {this.state.userName}</div>
                <h1>Greetings {this.state.userName}</h1>
                <h2>Greetings {this.state.userName}</h2>
                <p>Greetings {this.state.userName}</p>
            </div>
        );
    }

}

export default GreetUser;

