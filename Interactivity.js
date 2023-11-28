const greetingElement = document.getElementById("greeting");
  const currentTime = new Date().getHours();

  if (currentTime < 12) {
    greetingElement.textContent = "Good morning!";
  } else if (currentTime < 18) {
    greetingElement.textContent = "Good afternoon!";
  } else {
    greetingElement.textContent = "Good evening!";
  }

