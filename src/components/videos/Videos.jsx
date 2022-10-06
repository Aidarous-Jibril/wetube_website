import React from 'react'
import { Link } from 'react-router-dom'

import './Videos.css'


const Videos = ({ videos} ) => {
    // console.log(videos)
  return (
    <div className='vidoes-comp'>

        <div className='videos'>
            <section className="video-section">
                {videos?.map((item, ind) => (
                    <div key={ind} className="video-container">
                        <iframe
                            src={`${item.videoId}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                            />{" "}
                        <div className="video-bottom-section">
                            <a href="#">
                                <img className="channel-icon"  src={item?.channelThumbnail && item.channelThumbnail }/>
                            </a>
                            <div className="video-details">
                                <Link to={item?.videoId && `/video/${item.videoId}`} className="video-title">{item.videoName}</Link>
                                <Link to={item?.videoId && `/video/${item.videoId}`} className="video-channel-name">{item.channelName}</Link>
                                <div className="video-metadata">
                                    <span>{item.views} views</span> 
                                </div>
                            </div>
                        </div>
                    </div> 
                ))}       
            </section>
        </div>
        
    </div>
  )
}

export default Videos
