const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const celebration = document.getElementById("celebration");
const confirmNo = document.getElementById("confirmNo");
const goBack = document.getElementById("goBack");
const sureNo = document.getElementById("sureNo");
const card = document.querySelector(".card");

yesBtn.onclick = () => {
  card.style.display = "none";
  celebration.classList.remove("hidden");
};

noBtn.onclick = () => {
  card.style.display = "none";
  confirmNo.classList.remove("hidden");
};

goBack.onclick = () => {
  confirmNo.style.display = "none";
  celebration.classList.remove("hidden");
};

sureNo.onclick = () => {
  confirmNo.style.display = "none";
  celebration.classList.remove("hidden");
};
