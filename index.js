
const userSetups = {
  userData: {},
  theme: window.document.body.classList
};

function registerForm(event) {

  event.preventDefault()

  const formData = new FormData(event.target)
  const values = [ ...formData.values()]
  userSetups.userData = {
    name: values[0],
    email: values[1],
    cep: values[2],
    consent: values[3]
  }
  localStorage.setItem("registeredConfigs", JSON.stringify(userSetups))

}

function checkSavedData(){
  const savedData = localStorage.getItem("registeredConfigs")
  if(savedData){
    window.location.href = 'barbecuemeter.html'
  }
}
function formatCEP(input) {
  let cep = input.value.replace(/\D/g, '');
  
  cep = cep.substring(0, 5) + "-" + cep.substring(5);

  input.value = cep;
}

function checkInput(input){
  if(input.validity.valid){
      checkValidForm();
      input.style.backgroundColor = 'green'
  }else{
    input.style.backgroundColor = '#f35';
  }
}

function checkValidForm(){
  const form = document.getElementById('register-Form');
  const btnSend = document.getElementById('btn-send');
  
  console.log('checkValidity: ', form.checkValidity());

  if(  form.checkValidity()      ){
      btnSend.disabled = false;
     
  }else{
      btnSend.disabled = true;
     
  }
}

const toggleBtn = document.getElementById('checkbox')

toggleBtn.addEventListener('click',() =>{
  toggleMode()
})
function toggleMode() {
  document.body.classList.toggle('light')
}
checkSavedData()