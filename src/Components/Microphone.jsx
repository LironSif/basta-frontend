import { CircularProgress, Typography, Container, Box } from '@mui/material';
import React, { useEffect, useRef, useState } from "react";
import MicIcon from "@mui/icons-material/Mic";
import TranslateIcon from '@mui/icons-material/Translate';
import axios from 'axios';
export default function Microphone({ setProducts }) {
  const [isRecording, setIsRecording] = useState(false);
  const [isTranslate, setIsTranslate] = useState(false);
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);
  async function startRecording() {
    if (isRecording) {
      stopRecording();
      return;
    }
    setIsRecording(true);
    audioChunks.current = [];
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = event => {
        audioChunks.current.push(event.data);
      };
      mediaRecorder.current.onstop = sendAudioToServer;
      mediaRecorder.current.start();
    } catch (error) {
      console.error("Error accessing your microphone", error);
      alert("Could not access your microphone. Please check your device settings.");
      setIsRecording(false);
    }
  }
  function stopRecording() {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      setIsRecording(false);
    }
  }
  async function sendAudioToServer() {
    setLoading(true)
    const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
    const formData = new FormData();
    formData.append("audio", audioBlob);
    formData.append("translate", isTranslate);
    try {
      const response = await fetch("https://basta-2zr3.onrender.com/api/v1/audio", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log('data: ', data);
      setProducts(data.items);
      data.items.map(product => fetchingBastaItem(product , data['basta name']))
      setLoading(false)
    } catch (error) {

      console.error("Error sending audio to server:", error);
    }
  }
  const fetchingBastaItem = async (item, bastaName)=> {
    const newData = {name:item.item,  owner: bastaName , description:`description: ${bastaName}`,  price:parseInt(item.price) 
  }
  console.log('newData: ', newData);
    try {
      const response = await axios.post('https://basta-2zr3.onrender.com/api/v1/items', newData)
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  }
  const [loading, setLoading] = useState(true);
  // Assume fetchData is a function that fetches data from the server
  const fetchData = async () => {
    try {
      // Simulate a delay to show the loading spinner
      // In your actual code, replace this with your data fetching logic
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Handle errors and set loading to false
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ width: "80vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
    {loading ? (
      
        // Display loading spinner while waiting for data
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      ) : (
      <div>
      <div style={{ border: "1px solid white", borderRadius: "50%", padding: "5vw" }}>
        <MicIcon
          style={{ backgroundColor: isRecording ? "red" : "green", border: "1px solid white", borderRadius: "50%", padding: "10vw" }}
          fontSize="large"
          id="recordButton"
          onClick={startRecording}
        >
          {isRecording ? "Stop" : "Record"}
        </MicIcon>
      </div>
      <div style={{ padding: "1vw", margin: "15px", border: "1px solid white", backgroundColor: !isTranslate ? "white" : "black" }}>
        <TranslateIcon onClick={() => setIsTranslate(t =>!t)} style={{ color: isTranslate ? "white" : "black" }} />
</div>

</div>
)}
</div>
);
}









