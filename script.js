// Dark Mode
const iconLightMode = document.querySelector('#lightMode');
iconLightMode.addEventListener('click', function() {
  document.body.classList.toggle('lightMode');
  if (iconLightMode.classList.contains("fa-sun-o")) {
    iconLightMode.classList.remove("fa-sun-o");
    iconLightMode.classList.add("fa-moon-o");
  } else {
    iconLightMode.classList.remove("fa-moon-o");
    iconLightMode.classList.add("fa-sun-o");
  }
})

// Criar o abrir e fechar os componentes clicaveis de carnes nobres e exóticas
// Carnes Nobres
const menuNoble = document.querySelector('#navigationNoble');
menuNoble.addEventListener('click', function() {
  const ul = menuNoble.children[1];
  ul.classList.toggle('hide');
})
// Carnes Exóticas
const menuExotic = document.querySelector('#navigationExotic');
menuExotic.addEventListener('click', function() {
  const ul = menuExotic.children[1];
  ul.classList.toggle('hide');
  // if(!(ul.classList.contains('hide'))) {
  //   menuExotic.children[2].classList.add("hideButton");
  //   console.log(menuExotic.children[2])
  // }
})

// radio button
const radioExotic = document.querySelector("#radioExotic");
const radioTraditional = document.querySelector("#radioTraditional");
const radioBoth = document.querySelector("#both");

const createDiv = document.createElement("div");
radioExotic.addEventListener("click", function() {
  // radioExotic.appendChild(createDiv);
  
  // Limpar os outros antes de selecionar 
  radioTraditional.children[0].classList.remove("radioSelect");
  radioBoth.children[0].classList.remove("radioSelect");
  
  radioExotic.children[0].classList.toggle("radioSelect");
})


radioTraditional.addEventListener("click", function() {
  // radioTraditional.appendChild(createDiv);
  // Limpar os outros antes de selecionar 
  radioExotic.children[0].classList.remove("radioSelect");
  radioBoth.children[0].classList.remove("radioSelect");
  
  radioTraditional.children[0].classList.toggle("radioSelect");
})


radioBoth.addEventListener("click", function() {
  // radioBoth.appendChild(createDiv);
  // Limpar os outros antes de selecionar 
  radioExotic.children[0].classList.remove("radioSelect");
  radioTraditional.children[0].classList.remove("radioSelect");
  
  radioBoth.children[0].classList.toggle("radioSelect");
})

//Select Dropdown
const selectDropdown = document.querySelector("#initialText");
const dropdown = document.querySelector(".dropdown");

selectDropdown.addEventListener("click", function() {
  dropdown.classList.toggle("hide");
  const arrowSelected = document.querySelector("#arrowSelected");
  arrowSelected.style.transform = "rotate(180deg)";
});

const itemSelectedBovine = document.querySelector("#itemBovine");
itemSelectedBovine.addEventListener("click", function() {
  const text = itemSelectedBovine.textContent;
  selectDropdown.textContent = text;
  dropdown.classList.add("hide");
})

const itemSelectedPork = document.querySelector("#itemPork");
itemSelectedPork.addEventListener("click", function() {
  const text = itemSelectedPork.textContent;
  selectDropdown.textContent = text;
  dropdown.classList.add("hide");
})

const itemSelectedBirds = document.querySelector("#itemBirds");
itemSelectedBirds.addEventListener("click", function() {
  const text = itemSelectedBirds.textContent;
  selectDropdown.textContent = text;
  dropdown.classList.add("hide");
})

const itemSelectedSeafood = document.querySelector("#itemSeafood");
itemSelectedSeafood.addEventListener("click", function() {
  const text = itemSelectedSeafood.textContent;
  selectDropdown.textContent = text;
  dropdown.classList.add("hide");
})

const itemSelectedOthers = document.querySelector("#itemOthers");
itemSelectedOthers.addEventListener("click", function() {
  const text = itemSelectedOthers.textContent;
  selectDropdown.textContent = text;
  dropdown.classList.add("hide");
})

// Checkbox
const checkboxAll = document.querySelector("#checkboxAll");
const checkAll = checkboxAll.children[0];

const checkboxEmail = document.querySelector("#checkboxEmail");
const checkEmail = checkboxEmail.children[0];

const checkboxSms = document.querySelector("#checkboxSms");
const checkSms = checkboxSms.children[0];

checkboxAll.addEventListener("click", function() {
  checkAll.classList.toggle("hide");
  if (!(checkAll.classList.contains("hide"))) {
    checkEmail.classList.remove("hide");
    checkSms.classList.remove("hide");
  }
  else if (checkAll.classList.contains("hide")) {
    checkEmail.classList.add("hide");
    checkSms.classList.add("hide");
  }
});

checkboxEmail.addEventListener("click", function() {
  checkEmail.classList.toggle("hide");
  if (checkSms.classList.contains("hide") || checkEmail.classList.contains("hide")) {
    checkAll.classList.add("hide");
  } else if (!(checkSms.classList.contains("hide"))) {
    checkAll.classList.remove("hide");
  } else {
    checkAll.classList.add("hide");
  }
})

checkboxSms.addEventListener("click", function() {
  checkSms.classList.toggle("hide");
  if (checkSms.classList.contains("hide") || checkEmail.classList.contains("hide")) {
    checkAll.classList.add("hide");
  } else if (!(checkEmail.classList.contains("hide"))) {
    checkAll.classList.remove("hide");
  } else {
    checkAll.classList.add("hide");
  }
})


  
buttonSubmit.addEventListener("click", function(event) {
  // Validações do Formulário
  const buttonSubmit = document.querySelector("#buttonSubmit");
  const inputName = document.querySelector("#inputName");
  const inputEmail = document.querySelector("#email");
  // Tratamento do número de telefone antes de entrar em validações
  const inputTelephone = document.querySelector("#telephone");
  const telephoneTratado = inputTelephone.value.replace("(", "").replace(")", "").replace("-", "").replace(" ", "");

  const message = document.querySelector("#message");

  
  event.preventDefault();
  if (!(inputName.value !== "" && inputName.value.includes(" "))) {
    alert("O nome está em branco ou não contém pelo menos dois nomes");
  } else if (!(inputEmail.value.includes("@") && inputEmail.value.includes("."))) {
    alert("O email precisa conter um @");
  } else if (telephoneTratado.length !== 11) {
    console.log(telephoneTratado.length);
    alert("O número de telefone é inválido");
  } else if (!(radioExotic.children[0].classList.contains("radioSelect") || radioTraditional.children[0].classList.contains("radioSelect") || radioBoth.children[0].classList.contains("radioSelect"))) {
    alert("Selecione uma das opções referente a sua preferência de carne")
  } else if (selectDropdown.textContent.includes("Selecione")) {
    alert("Selecione uma opção de carne")
  } else if(message.value.length <= 5){
    alert("A messagem precisa ter no minimo 5 caracteres")
  } else {
    alert("Formulário enviado com sucesso");
  }
})






/* Códigos defasados */

// function darkMode(){
//    document.body.classList.toggle('lightMode');
// }