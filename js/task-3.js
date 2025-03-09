const userName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

userName.addEventListener ("input", () => {
    const trimmedValue = userName.value.trim();
    nameOutput.textContent = trimmedValue || "Anonymous";
});