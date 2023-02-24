import React from 'react';
import '../assets/styles/Tuner.css';

const Tuner: React.FC = () => {
  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(function(stream) {
        const audioCtx = new(window.AudioContext || window.webkitAudioContext)();
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyser);

        const canvas = document.getElementById("oscilloscope");
        const canvasCtx = canvas.getContext("2d");

        const WIDTH = canvas.width;
        const HEIGHT = canvas.height;

        canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

        function draw() {
          const drawVisual = requestAnimationFrame(draw);

          analyser.getByteFrequencyData(dataArray);
          
          canvasCtx.fillStyle = "rgb(255, 255, 255)";
          canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
          
          const barWidth = (WIDTH / bufferLength) * 2.5;
          let barHeight;
          let x = 0;
          
          let max = 0, j = 0;

          for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i] / 2;

            canvasCtx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
            canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight);

            x += barWidth + 1;
            
            if (max < dataArray[i]) {
              max = dataArray[i];
              j = i;
            }
          }
          console.log(Math.round((j + 1) * 44100 / analyser.fftSize));
        }

        draw();

      })
      .catch(function(error) {
        console.log(error);
      });
  
  return (
    <>
      <canvas id="oscilloscope" />
    </>
  );
};

export default Tuner;