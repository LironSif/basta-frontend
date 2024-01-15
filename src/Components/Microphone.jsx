import React, { useState } from "react";
import MicIcon from "@mui/icons-material/Mic";
import TranslateIcon from '@mui/icons-material/Translate';

export default function Microphone({ setProducts }) {
  const [clicked, setClicked] = useState(false);
  const [isTranslate, setIsTranslate] = useState(false);
  let isRecording = false;
  let mediaRecorder;
  let audioChunks = [];

  async function startRecording() {
    isRecording = true;
    audioChunks = [];
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };
      mediaRecorder.onstop = sendAudioToServer;
      mediaRecorder.start();
    } catch (error) {
      console.error("Error accessing your microphone", error);
      alert(
        "Could not access your microphone. Please check your device settings."
      );
      isRecording = false;
    }
  }
  function stopRecording() {
    isRecording = false;
    mediaRecorder.stop();
  }
  async function sendAudioToServer() {
    const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
    const formData = new FormData();
    formData.append("audio", audioBlob);
    // Get translate value from the checkbox
    const translate = isTranslate// document.getElementById("translateCheckbox").checked;
    formData.append("translate", translate);
    try {
      const response = await fetch(
        "https://basta-2zr3.onrender.com/api/v1/audio",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log("Server response:", data);
      setProducts(data.items);
    } catch (error) {
      console.error("Error sending audio to server:", error);
    }
  }
  return (
    <div
      style={{
        width: "80vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px solid white",
          borderRadius: "50%",
          padding: "5vw",
        }}
      >
        <MicIcon
          style={{
            backgroundColor: clicked ? "red" :"green",
            border: "1px solid white",
            borderRadius: "50%",
            padding: "10vw",
          }}
          fontSize="large"
          id="recordButton"
          onClick={() => {
            setClicked(isRecording);
            isRecording ? stopRecording() : startRecording();
          }}
        >
          {clicked ? "Stop" : "Record"}
        </MicIcon>
      </div>
      <div style={{padding:"1vw",margin:"15px", border:"1px solid white" , backgroundColor: !isTranslate ? "white" : "black"}}>
      <TranslateIcon onClick={() => setIsTranslate(t => !t)} style={{color: isTranslate ? "white" : "black"}}/>
      
      </div>
    </div>
  );
}
