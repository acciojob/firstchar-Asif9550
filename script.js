function firstChar(text) {
  // Trim leading and trailing spaces and return the first character if present
  const trimmedText = text.trim();
  
  // Return the first character of the trimmed text, or an empty string if it's empty
  return trimmedText ? trimmedText[0] : '';
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
alert(firstChar(text));
