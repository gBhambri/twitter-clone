import { Avatar, Button } from "@material-ui/core";
import React, { useState } from 'react'
import './TweetBox.css'
import db from './firebase'

function TweetBox() {
    const [tweet,setTweet]=useState('')
    const [tweetImage,setTweetImage]=useState('')
    const sendTweet=e=>{
        e.preventDefault()
        if(tweet)
        {
            db.collection('posts').add({
                displayName:'Gautam Bhambri',
                username:'gautam98',
                verified:true,
                text:tweet,
                avatar:'data:image/jpeg;base64,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',
                image:tweetImage
            })
        }
        setTweet("");
        setTweetImage("");
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                    <input
                        onChange={(e)=>setTweet(e.target.value)}
                        value={tweet}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                        onChange={(e)=>setTweetImage(e.target.value)}
                        value={tweetImage}
                        className="tweetBox__imageInput"
                        placeholder="Optional: Enter image URL"
                        type="text"
                     />
                <Button  onClick={sendTweet} type='submit' className='tweetBox__button'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
