export function Video() {
    return (
      <video className="rounded-lg shadow-lg" loop width='800' autoPlay muted controls preload="none">
        <source src="/WEEk.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
          
        />
        Your browser does not support the video tag.
      </video>
    )
  }