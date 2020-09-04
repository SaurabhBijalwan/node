import React,{Fragment,Component} from 'react';
import './Header.css';

class Header extends Component{

    constructor(props){
        super()
        
        this.state={
            title:'React First App',
            keyword:'User Text Here'
        }
    }

    inputChange = (event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:"User Text Here"})
        this.props.userText(event.target.value)
    }
    

    render(){
        return(
            <header>
                <div className="logo">{this.state.title}</div>
                <center>
                    <input type="text" onChange={this.inputChange}/>
                    <div style={{color:'white'}}>{this.state.keyword}</div>
                </center>
                <hr/>
            </header>
        )
    }
}

export default Header;