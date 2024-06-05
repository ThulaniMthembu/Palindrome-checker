document.getElementById("check-btn").addEventListener("click", function () {
  const inputText = document.getElementById("text-input").value;
  const cleanedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters
  const reversedText = cleanedText.split("").reverse().join("");

  if (!inputText) {
      alert("Please input a value");
  } else if (cleanedText === reversedText) {
      document.getElementById("result").textContent = `${inputText} is a palindrome`;
  } else {
      document.getElementById("result").textContent = `${inputText} is not a palindrome`;
  }
});
