'use client'; // I wish we could load at least the player body on the server
import MuxVideo from "@mux/mux-video-react";

const Video = ({ name, videoId, autoplay=false, preloadAuto=false, cover=false }) => {



  return (
    <>
      <MuxVideo
        // ref={videoRef} // In my application I play the video when it is in view

        streamtype="on-demand"
        playbackId={videoId}
        preload={preloadAuto? "auto": "metadata"}

        muted
        loop
        
        thumbnail-time={0} // I wish that the thumbnail rendered on the server
        // placeholder={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}
        // poster={`https://image.mux.com/${videoId}/thumbnail.jpg?time=0`}
        
        // Different from MuxPlayer, autoplay => autoPlay
        autoPlay={autoplay}
        
        
        metadata={{
          video_id: "video-id-1111",
          video_title: {name},
          viewer_user_id: "user-id-007",
        }}
        className={`w-full h-full ${(cover? " object-cover object-center": "")}`}
        // className={`h-[600px] w-[600px] ${(cover? " object-cover": "")}`} 
      />
    </>
  );
}

export default Video;