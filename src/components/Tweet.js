import React from 'react'
const Tweet = props => {
  let reTweetColor
  let favoritedColor
  if (props.tweet.retweeted) {
    reTweetColor = 'green'
  } else {
    reTweetColor = 'grey'
  }
  if (props.tweet.favorited){
    favoritedColor = 'red'
  } else {
    favoritedColor = 'grey'
  }
let tweetBody
let imgLink
  if (props.tweet.entities.media){
    let urlLoc = props.tweet.text.search(props.tweet.entities.media[0].display_url)
    tweetBody = props.tweet.text.slice(0, urlLoc)
    imgLink = props.tweet.entities.media[0].media_url

  } else {
    tweetBody = props.tweet.text
  }

  let date = new Date(parseInt(props.tweet.timestamp_ms))



  return(
  <div className="small-12 columns tweetBox">
    <div className="small-2 columns">
      <img className="thumbnail" src={props.tweet.user.profile_image_url} />
    </div>
    <div className="small-10 columns">
      <div className="row">
        <span className="bold">{props.tweet.user.name}&nbsp;&nbsp;</span>
        <span className="grey">@{props.tweet.user.screen_name}&nbsp;&nbsp;</span>
        <span className="grey">{date.toDateString()}</span>
      </div>
      <div className="row">
        <div className="small-12 columns">
          {tweetBody}
          <div className="small-12 columns">
            <img src={imgLink} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="small-3 columns">
          <a onClick={()=> {alert('Reply')}} href="#0" className="grey"><i className="fa fa-reply" aria-hidden="true"></i></a>
        </div>
        <div className="small-3 columns">
          <a onClick={()=> {alert('Retweet')}} href="#0" className={reTweetColor}><i className="fa fa-retweet" aria-hidden="true"></i> {props.tweet.retweet_count}</a>
        </div>
        <div className="small-3 columns">
          <a onClick={()=> {alert('Liked')}}href="#0" className={favoritedColor}><i className="fa fa-heart" aria-hidden="true"></i> {props.tweet.favorite_count}</a>
        </div>
        <div className="small-3 columns">
          <a onClick={()=> {alert('Favorite')}} href="#0" className="grey"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Tweet;
