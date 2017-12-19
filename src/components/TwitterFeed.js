import React from 'react';
import Tweet from './Tweet'
const TwitterFeed = props => {
return (
<div className="feedContainer">
  {props.data.map((tweet, index) => {
    return (<Tweet key={index} tweet={tweet} />)
  })}
</div>
)
}

export default TwitterFeed;
