import React,{Component} from 'react';

class SimpleCalc extends Component{
    constructor(){
        super();
        this.state={};
    }

    submitFormHandler=(event) => (
        if(this.state.firstnum==0 || this.state.secondnum==0){
            alert('please enter non zero value');
        }

        let sum = Number(this.state.firstnum) + Number(this.state.secondnum);
        let sub= Number(this.state.firstnum) - Number(this.state.secondnum);
        this.setState({result:'sum :'+sum+'sub :'+sub})
    )

    doCalculation = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if(Number(value)){
            this.setState({[name]:value});
        }
        else{
            alert('please enter numeric value only');
        }
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitFormHandler}>
                    <p>Enter First Number:
                        <input type='text' name='firstnum' onChange={this.doCalculation}/>
                    </p>

                    <p>Enter second number:
                        <input type='text' name='secondnum' onChange={this.doCalculation}/>
                    
                    </p>
                </form>

                <p>You Entered first number as
                <h1>{this.state.firstnum}</h1>
                and second number as
                <h1>{this.state.secondnum}</h1>                
                </p>
                <p>the result is {this.state.result}</p>
            </div>
        );
    }

}

export default SimpleCalc;