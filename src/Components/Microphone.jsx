import React, { useRef, useState } from "react";
import MicIcon from "@mui/icons-material/Mic";
import TranslateIcon from '@mui/icons-material/Translate';
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
      setProducts(data.items);
    } catch (error) {
      
      console.error("Error sending audio to server:", error);
    }
  }
  return (
    <div style={{ width: "80vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
);
}









