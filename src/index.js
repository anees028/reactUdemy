import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import JSON from './db.json';

//Components Addition Below
import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component{

  state={
    news:JSON,
    filtered:[],
  }
  
  getKeyword = (event) =>{
    //console.log(event.target.value);
    let keyword = event.target.value;
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keyword) > -1
    })
    this.setState({filtered})

    //console.log(filtered);
  
  }

  render(){
    //console.log(this.state.news)
    let wholenews = this.state.news; 
    let filternews = this.state.filtered
    return (
      <div>
        <Header keyword={this.getKeyword}/>
        <NewsList news={filternews.length === 0 ? wholenews : filternews}>
          <h3>The updated news are here ...</h3>
          <h3>Now filtering the news by keyword ...</h3>
        </NewsList> 
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
