//import React from 'react'
import video from './video/videofile.mp4';
import React, { useEffect, useRef } from "react";

const Video = () => {
  const videoRef1 = useRef(null);
  const videoRef2=useRef(null);

  useEffect(() => {
    let options = {
      rootMargin: "200px",
      threshold: [1, 0.75]
    };
    let handlePlay1 = (entries, observer) => {
      entries.forEach((entry) => {
  
          if (entry.isIntersecting) {
          videoRef1.current.play();
        } else {
          videoRef1.current.pause();
        }
      });
    };
    let handlePlay2 = (entries, observer) => {
      entries.forEach((entry) => {
  
          if (entry.isIntersecting) {
          videoRef2.current.play();
        } else {
          videoRef2.current.pause();
        }
      });
    };


    let observer1 = new IntersectionObserver(handlePlay1, options);
    let observer2 = new IntersectionObserver(handlePlay2, options);

    observer1.observe(videoRef1.current);
    observer2.observe(videoRef2.current);
  });
  //let height=window.innerHeight;
  //let width=window.innerWidth;

  return (
    <>
     <video ref={videoRef1} src={video} height={window.innerHeight} width={window.innerWidth} loop></video>
     <video ref={videoRef2} src={video} height={window.innerHeight} width={window.innerWidth} loop></video>
    </>
  )
}

export default Video
