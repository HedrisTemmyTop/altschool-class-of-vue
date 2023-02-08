export default function useGamePickerComposable(colorsArray, outputMessage) {
  const picker = (selectedColor) => {
    // Get a random number between zero to the length of the array;
    const generateRandomNumber = Math.floor(Math.random() * colorsArray.length);
    // Check if the random number equals the selected color
    if (colorsArray[generateRandomNumber] !== selectedColor) {
      outputMessage.value = `You loose...[answer: ${colorsArray[generateRandomNumber]}]`;
      return;
    }

    outputMessage.value = `You win... [answer: ${colorsArray[generateRandomNumber]}]`;
  };

  return picker;
}
