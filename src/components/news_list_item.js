import React from 'react';
import { css } from 'glamor';

const NewsItem = ({item}) => {

    // let news_item = css({
    //     padding: '20px',
    //     boxSizing: 'border-box',
    //     borderBottom:'2px solid grey',
    //     borderRadius:'20px',
    //     marginTop:'5px',
    //     ':hover':{
    //         color:'white',
    //         background:'blue'
    //     }
    // })

    // let item_grey = css ({
    //     background:'lightgrey'
    // })

    return(
        // <div className={`${news_item} ${item_grey}`}>   //For changing color during hover.....
        <div className="news_item" >
            <h2>{item.title}</h2>
            <div>
                {item.feed}
            </div>
        </div>
    )
}

export default NewsItem;
