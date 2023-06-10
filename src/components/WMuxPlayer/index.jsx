'use client'; // I wish we could load at least the player body on the server
import MuxPlayer from "@mux/mux-player-react";
// import MuxPlayer from '@mux/mux-player-react/lazy';

const Video = ({ name, videoId, autoplay=false, preloadAuto=false, cover=false }) => {

  return (
    <>
      <MuxPlayer
        // ref={videoRef} // In my application I play the video when it is in view
        debug={false}

        streamType="on-demand"
        playbackId={videoId}
        preload={preloadAuto? "auto": "metadata"}

        muted
        loop
        nohotkeys
        
        thumbnail-time={0} // I wish that the thumbnail rendered on the server
        // placeholder={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}
        // poster={`https://image.mux.com/${videoId}/thumbnail.jpg?time=0`}
        
        autoplay={autoplay}
        
        metadata={{
          video_id: "video-id-1111",
          video_title: {name},
          viewer_user_id: "user-id-007",
        }}
        className="w-full h-full"
        // className="h-[600px] w-[600px]"

        // Never show controls
        style={cover? {
          "--controls": "none",
          "--media-object-fit": "cover",
          "--media-object-position": "center",
        } : {"--controls": "none"}
        }
      />
    </>
  );
}

export default Video;