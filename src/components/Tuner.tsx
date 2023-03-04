import React from 'react';
import '../assets/styles/Tuner.css';

const Tuner: React.FC = () => {
  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(function(stream) {
        let drawVisual, count = 0;
        const audioCtx = new(window.AudioContext || window.webkitAudioContext)();
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 1024;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyser);

        const canvas = document.getElementById("oscilloscope");
        const canvasCtx = canvas.getContext("2d");
        let pitch = 0;

        const WIDTH = canvas.width;
        const HEIGHT = canvas.height;

        canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

        function draw() {
          drawVisual = requestAnimationFrame(draw);
          
          analyser.getByteTimeDomainData(dataArray);
          
          canvasCtx.fillStyle = "yellow";
          canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
          
          canvasCtx.lineWidth = 2;
          canvasCtx.strokeStyle = "rgb(10, 10, 10)";
          
          canvasCtx.beginPath();
          
          const sliceWidth = (WIDTH * 1.0) / bufferLength;
          let x = 0;
          
          let max = 0, j = 0;
          for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = (v * HEIGHT) / 2;
          
            if (i === 0) {
              canvasCtx.moveTo(x, y);
            } else {
              canvasCtx.lineTo(x, y);
            }
          
            x += sliceWidth;
            
            if (max < dataArray[i]) {
              max = dataArray[i];
              j = i;
            }
          }
          
          if (count % 60 === 0) {
            pitch = Math.round((j * 44100) / analyser.fftSize);
          }
          
          canvasCtx.lineTo(canvas.width, canvas.height / 2);
          canvasCtx.stroke();
          
          canvasCtx.fillStyle = "brown";
          canvasCtx.font = "32px monospace";
          canvasCtx.textAlign = "left";
          canvasCtx.textBaseline = "middle";
          
          canvasCtx.fillText(pitch + 'Hz', canvas.width / 8, canvas.height / 6);
          
          count++;
        };
          
        draw();

      })
      .catch(function(error) {
        console.log(error);
      });
  
  return (
    <>
      <canvas id="oscilloscope" style={{
        width: "360px",
        height: "300px",
        margin: "0 auto"
      }} />
      <p id="p"></p>
    </>
  );
};

export default Tuner;