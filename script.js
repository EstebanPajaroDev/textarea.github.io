const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");
const maxChars = 250;

textarea.addEventListener("input", () => {
  const currentLength = textarea.value.length;
  charCount.textContent = currentLength;

  if (currentLength === maxChars) {
    textarea.classList.add("red-border");
    charCount.classList.add("red-text");
  } else {
    textarea.classList.remove("red-border");
    charCount.classList.remove("red-text");
  }
});
