import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Your Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyAzf9_Rv8cw2zzm-1jSlzg2tymMYoKQhqY",
    authDomain: "call-button-3bb6a.firebaseapp.com",
    databaseURL: "https://call-button-3bb6a-default-rtdb.firebaseio.com",
    projectId: "call-button-3bb6a",
    storageBucket: "call-button-3bb6a.firebasestorage.app",
    messagingSenderId: "232725714600",
    appId: "1:232725714600:web:cfcea4772f3c42c432d49d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to 'callState' node
const callStateRef = ref(database, 'callState');

// Grab HTML elements
const appContainer = document.getElementById('appContainer');
const statusText = document.getElementById('statusText');
const callBtn = document.getElementById('callBtn');
const clearBtn = document.getElementById('clearBtn');

// Send CALL state (true) to Firebase
function triggerCall() {
  set(callStateRef, true);
}

// Send CLEAR state (false) to Firebase
function clearCall() {
  set(callStateRef, false);
}

// Listen for updates from Firebase
onValue(callStateRef, (snapshot) => {
  const isCalling = snapshot.val();

  if (isCalling === true) {
    appContainer.classList.add('call-active');
    statusText.innerText = '🔴 RED SIGNAL\nSOMEONE IS CALLING';
    callBtn.classList.add('hidden');
    clearBtn.classList.remove('hidden');
  } else {
    appContainer.classList.remove('call-active');
    statusText.innerText = 'SYSTEM READY';
    callBtn.classList.remove('hidden');
    clearBtn.classList.add('hidden');
  }
});

// Event Listeners
callBtn.addEventListener('click', triggerCall);
clearBtn.addEventListener('click', clearCall);
