import React from 'react'

const VideoComponent = () => {
  return (
    <div>
      <video width="320" height="240" controls>
            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default VideoComponent