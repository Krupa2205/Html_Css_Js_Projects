const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");
let videoElement; // declare a global variable to store the video element

const handleInput = () => {
    // console.log("Input is clicked");
    // you have make it click
    videoInput.click();
}
const acceptInputHandler = (obj) => {
  // Remove any existing video elements
  while (videoPlayer.firstChild) {
    videoPlayer.removeChild(videoPlayer.firstChild);
  }
    // to get file selected
    const selectedVideo = obj.target.files[0];
    //  src -> base64 
    const link = URL.createObjectURL(selectedVideo);
    // console.log(link);

    videoElement = document.createElement("video");
    videoElement.src = link;
    // now it is done
    videoElement.setAttribute("class", "video");
    videoPlayer.appendChild(videoElement);
    videoElement.controls = true;
    videoElement.play();
    videoElement.volume = 0.3;
    // how to inc/dec the volume of a video in js 
    // how to inc/dec speed of a video in js 
    videoElement.addEventListener("loadedmetadata",function(){
        // your time will there
    })
}

videoBtn.addEventListener("click", handleInput);
// when file is selected
videoInput.addEventListener("change", acceptInputHandler);

/*******************volume and speed*******************/
// select the element
const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");


//  The line `const toast = document.querySelector(".toast");` is selecting an HTML element with   theclass name "toast" from the document. This element is typically used to display temporary messages or notifications to the user. 

const toast = document.querySelector(".toast");

const speedUpHandler = () => {
    if (videoElement == null) {
        return;
    }
    // i want that playback speed should be at max 300%
    if (videoElement.playbackRate > 3) {
        return;
    }
    // video -> speed increase
    const increaseSpeed = videoElement.playbackRate + 0.5;
    videoElement.playbackRate = increaseSpeed;
    // console.log("increase speed", increaseSpeed)  //console.....
    showToast(increaseSpeed + "X");

    // which property you will use to increase it's speed 
    // * how much you want to increase
}
const speedDownhandler = () => {
    //  This condition is used in the event handlers for volume and speed controls to ensure that these controls are only applied to the video element if it exists. 
    if (videoElement == null) {
        return;
    }
    if (videoElement.playbackRate > 0) {
        // video -> speed decrease
        const decreasedSpeed = videoElement.playbackRate - 0.5;
        videoElement.playbackRate = decreasedSpeed;
        // console.log("decreased speed", decreasedSpeed)  //console.....
        showToast(decreasedSpeed + "X");
    }
}

const volumeUpHandler = () => {
    if (videoElement == null) {
        return;
    }
    // property to play with volume 
    if (videoElement.volume >= 0.99) {
        return;
    }
    const increasedVolume = videoElement.volume + 0.1
    videoElement.volume = increasedVolume;
    // console.log("increseas volume", increasedVolume);   //console.....
    const percentage = (increasedVolume * 100) + "%";
    showToast(percentage)
}

const volumeDownHandler = () => {
    if (videoElement == null) {
        return;
    }
    // property to play with volume 
    if (videoElement.volume <= 0.1) {
        videoElement.volume = 0;
        return
    }
    const decreaseVolume = videoElement.volume - 0.1;
    videoElement.volume = decreaseVolume
    // console.log("volume down", decreaseVolume);   //console.....
    const percentage = (decreaseVolume * 100) + "%";
    showToast(percentage)
}


function showToast(message) {
    // toast show
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none"
    }, 1000);
}


// identify on which event your logic should trigger
speedUp.addEventListener("click", speedUpHandler);
speedDown.addEventListener("click", speedDownhandler)
volumeUp.addEventListener("click", volumeUpHandler);
volumeDown.addEventListener("click", volumeDownHandler);

      
      /***********controls******************/
      // ---------------------------------------------
      
      const handlePlay =()=>{
        if (videoElement) {
            videoElement.play();
        }
        }
        const playElem = document.querySelector("#play");
        playElem.addEventListener("click",handlePlay)
        /***********controls******************/
        // ---------------------------------------------
        
        const handlePause =()=>{
          if (videoElement) {
            videoElement.pause();
          }
          }
          const pauseElem = document.querySelector("#pause");
          pauseElem.addEventListener("click",handlePause)
          /***********controls******************/
          // ---------------------------------------------
          
          const handleMute =()=>{
            if (videoElement) {
              videoElement.muted = !videoElement.muted;
            }
            }
            const muteElem = document


            // Add an event listener to the document object to capture keyboard events:
            document.addEventListener('keydown', handleKeyboardEvent);

            function handleKeyboardEvent(event) {
                // Check which key was pressed
                switch (event.key) {
                  case 'ArrowUp':
                    // Increase volume
                    volumeUpHandler();
                    break;
                  case 'ArrowDown':
                    // Decrease volume
                    volumeDownHandler();
                    break;
                  case '+':
                    // Increase playback speed
                    speedUpHandler();
                    break;
                  case '-':
                    // Decrease playback speed
                    speedDownhandler();
                    break;
                    case ' ':
                        // Toggle play/pause
                        if (videoElement.paused) {
                          handlePlay();
                        } else {
                          handlePause();
                        }
                        break;
                    break;
                  case '':
                    // Toggle mute
                    handleMute();
                    break;
                  default:
                    // Do nothing for other keys
                    break;
                }
              }
