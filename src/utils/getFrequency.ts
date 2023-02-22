export const getFrequency = (note: string): number => {
  const notes: string[] = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  const octave: string = note.length === 3 ? note[2] : note[1];

  let keyNumber: string = notes.indexOf(note.slice(0, -1));

  if (keyNumber < 3) {
    keyNumber = keyNumber + 12 + ((octave - 1) * 12) + 1;
  } else {
    keyNumber = keyNumber + ((octave - 1) * 12) + 1;
  }

  return 440 * Math.pow(2, (keyNumber - 49)/12);
};