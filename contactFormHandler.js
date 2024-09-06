// Import required functions from Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase configuration (ensure this is correctly set up)
const firebaseConfig = {
	apiKey: process.env.VITE_FIREBASE_API_KEY,
	authDomain: "matrix-graphix-hub.firebaseapp.com",
	projectId: "matrix-graphix-hub",
	storageBucket: "matrix-graphix-hub.appspot.com",
	messagingSenderId: "356299888880",
	appId: "1:356299888880:web:26f8a409e39f85ebdeca35",
	measurementId: "G-TE0T7PRES3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission
const handleSubmit = async (event) => {
  event.preventDefault(); // Prevent form from submitting the default way
  
  // Use FormData to get all form values
  const formData = new FormData(event.target);
  
  const messageData = {
    name: formData.get("name"),      // 'name' is the name attribute of the input field
    email: formData.get("email"),    // 'email' is the name attribute of the input field
    message: formData.get("message"),// 'message' is the name attribute of the textarea
    timestamp: new Date(),           // Capture the timestamp
  };

  try {
    // Save the form data to the "messages" collection in Firestore
    await addDoc(collection(db, "messages"), messageData);
    alert("Message sent successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// Attach the submit event handler to the form
document.getElementById("contact-form").addEventListener("submit", handleSubmit);
