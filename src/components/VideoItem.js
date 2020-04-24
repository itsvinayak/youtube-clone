import React from 'react';
import './style/videoitem.css';

const VideoItem = ({ video,onVideoSelect }) => {
  return(


      <div onClick={() => onVideoSelect(video) } className=" video-item item">
       <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} className="ui image" />
        <div className="content video-content">
          <a href="{video.snippet.title}"  className="header"> {video.snippet.title}</a>
          <div className="description">{video.snippet.description}</div>
        </div>
      </div>

  );
}

export default VideoItem;
