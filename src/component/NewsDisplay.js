import React from 'react';

const NewsDisplay = (props) => {
    console.log("Inside display",props)

    const renderList = props.newsdata.map((data,index) => {
        return(
            <div key={index}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })


    return(
        <React.Fragment>
           {renderList}
        </React.Fragment>
    )
}

export default NewsDisplay