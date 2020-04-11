// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let errorStatus = true

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function(){
  function setErrorModal(errorMessage = ''){
    let errorModal = document.getElementById('modal');
    let errorModalMessage = document.getElementById('modal-message');
    if(errorStatus){
      errorModal.className = ''
      errorModalMessage = errorMessage;
      setTimeout(setErrorModal, 5000)
    } else {
      errorModal.className = 'hidden';
    }
    errorStatus = !errorStatus
  }
  
  setErrorModal('Im here for 5 4 3 2 1')
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
