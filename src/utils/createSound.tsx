export const createSound = (frequency: number, duration: number, type: string): void => {
  const audioCtx = new AudioContext();
  const oscillator = audioCtx.createOscillator();
  oscillator.frequency.value = frequency;
  //oscillator.type = 'sine', 'square', 'sawtooth', 'triangle';
  oscillator.type = type;
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  oscillator.stop(duration);
};