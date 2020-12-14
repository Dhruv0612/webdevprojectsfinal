import React,{Component} from 'react';

class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state={myhero:"my mother"};
        console.log('Constructor called');
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps called');
    }

    changehero = () => {
        this.setState({myhero:'Shri Ram'})
    }

    shouldComponentUpdate(){
        return true;
        //return false;
    }

    //componentDidMount(){
        //console.log('ComponentDidmount called');
        //return {myhero:props.name};
    //}

    componentDidMount(){
        setTimeout(()=>{
            this.setState({myhero:'Jai Hanuman'})
        },1000)
    }

    getSnapshotBeforeUpdate(prevprops, prevstate){
        document.getElementById('div1').innerHTML=
        'Before the update, my hero was '+ prevstate.myhero;
    }

    componentDidUpdate(){
        document.getElementById('div2').innerHTML=
        'The updated myhero is '+this.state.myhero;
    }

    render() {
        return (
            <div>
                My Superhero is {this.state.myhero}.
                <button type='button' onClick={this.changehero}>change hero</button>
            </div>
        );
    }

}

export default MyComponent;

