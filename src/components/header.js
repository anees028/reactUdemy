import React from 'react';
import '../css/styles.css';

const Header = (props) =>{
    // console.log(this.state.keyword)
    return(
        <header>
            <div className="logo">Logo</div>
            <input 
                type="text"
                onChange={props.keyword} />
            <button 
                onClick={()=>console.log("I was clicked")}
            >Click Here</button>
            
            {/*    Setting Title by using the state....
                <div className="logo">{this.state.title}</div>
            <div>{this.state.keyword}</div> */}
        </header>
    )
}
 
export default Header;
