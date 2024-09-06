import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

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
