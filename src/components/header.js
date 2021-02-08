import React, { Component } from 'react';
import '../css/styles.css';

class Header extends Component{

    state={
        //Setting Title by using state..
        // title:"My First App",
        keyword:""
    }

    inputChangehandler = (event) => {
        // console.log(event.target.value)
        //console.log("Hey")
        this.setState({
            keyword:event.target.value
        })
    }

    render(){
        // console.log(this.state.keyword)
        return(
            <header>
                <div className="logo">Logo</div>
                <input type="text" onChange={this.inputChangehandler}/>
                <button 
                    onClick={()=>console.log("I was clicked")}
                >Click Here</button>
                
                {/*    Setting Title by using the state....
                 <div className="logo">{this.state.title}</div>
                <div>{this.state.keyword}</div> */}
            </header>
        )
    }
}
 
export default Header;
