let noClicks = 0;
function handleNo() {
  noClicks++;
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  let scale = 1 + noClicks * 0.4;
  yesBtn.style.transform = `scale(${scale})`;


  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

function celebrate() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.body.style.backgroundColor = "#ffc1e3";
}
