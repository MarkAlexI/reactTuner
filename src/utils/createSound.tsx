export const createSound = (frequency: number, duration: number): void => {
  const audioCtx = new AudioContext();
  const oscillator = audioCtx.createOscillator();
  oscillator.frequency.value = frequency;
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  oscillator.stop(duration);
};