let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let passwordName = document.getElementById("passwordName"); // tambahkan ini
let saveButton = document.getElementById("saveButton");

const generatePassword = (len) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`";

  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
};

const getPassword = () => {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
};

const savePassword = () => {
  const passwordValue = password.value;
  const passwordNameValue = passwordName.value; // tambahkan ini
  document.title = passwordValue;
  saveButton.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent(`Password: ${passwordValue}`)
  );
  saveButton.setAttribute("download", `${passwordNameValue}.txt`); // ubah nama file menjadi nilai dari input field
};
