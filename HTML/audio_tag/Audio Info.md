

Audio requires open and close tag
        <audio></audio>
Audio requires src file
        <audio src='./file location'></audio>

-options

CONTROLS - generate controls (play, pause, stop, seek)
        <audio controls src='./file location'></audio>

LOOP - repeat audio Continiously
        <audio loop src='./file location'></audio>
    can be combined
        <audio controls loop src='./file location'></audio>

AUTOPLAY - will play automatically on page load
        <audio controls loop src='./file location'></audio>
    can be combined
        <audio controls loop autoplay src='./file location'></audio>

MUTED - will run but no sound
        <audio muted src='./file location'></audio>
    can be combined
        <audio controls loop autoplay muted src='./file location'></audio>



    EVENTS

canplay -   The browser can play the media, but not enough data has been loaded to play the media up to its end 
            without having to stop for further buffering of content.
        
            audio.addEventListener('canplay', (event) => console.log('Media can start, but not sure it will play through.');
            
canplaythrough - The browser estimates it can play the media up to its end without stopping for content buffering.
complete 	The rendering of an OfflineAudioContext is terminated.
durationchange 	The duration attribute has been updated.
emptied 	The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the HTMLMediaElement.load method is called to reload it.
ended 	Playback has stopped because the end of the media was reached.
loadeddata 	The first frame of the media has finished loading.
loadedmetadata 	The metadata has been loaded.

pause 	Playback has been paused.
        audio.addEventListener('ended', (event) => console.log('Video stopped either because it was over or no further data is available.');

play 	Playback has begun.
        audio.addEventListener('play', (event) => console.log('Either the play() method was called or the autoplay attribute was toggled');

playing 	Playback is ready to start after having been paused or delayed due to lack of data.

ratechange - The playback rate has changed.
             video.addEventListener('ratechange', (event) => console.log('The playback rate changed.')

seeked 	A seek operation completed.
seeking 	A seek operation began.
stalled 	The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.
suspend 	Media data loading has been suspended.
timeupdate 	The time indicated by the currentTime attribute has been updated.
volumechange 	The volume has changed.
waiting 	Playback has stopped because of a temporary lack of data