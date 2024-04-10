function updateValue(local, operation){
  let peopleNumber = parseInt(document.querySelector(local).textContent.trim())
  if(operation === 'remove' && peopleNumber > 0){
    peopleNumber--
    document.querySelector(local).textContent = peopleNumber
  }else if (operation === 'add'){
    peopleNumber++
    document.querySelector(local).textContent = peopleNumber
  }
}
const btnCalc = document.getElementById('btn-calc')
function wrapAndDeliver(){
  calculateBuyingList()
  localStorage.setItem("checkoutBarbecueList", JSON.stringify(calculateBuyingList()))
  window.location.href = 'checkout.html'
}

function calculateBuyingList(){
  const barbecueGuests = {
    men: parseInt(document.querySelector('.number-man').textContent.trim()),
    women: parseInt(document.querySelector('.number-woman').textContent.trim()),
    children: parseInt(document.querySelector('.number-children').textContent.trim()),
    alcoholDrikers: parseInt(document.querySelector('.number-children').textContent.trim()),
   }
   const totalGuests = barbecueGuests.men + barbecueGuests.women + barbecueGuests.children
   const drinkTotal = Math.ceil((totalGuests)/5)
  
    plural = drinkTotal>1?'garrafas':'garrafa'
  
  
   const barbecueBuyingList = {
    
    meat: `${((barbecueGuests.men * 0.4) + (barbecueGuests.women * 0.32) + (barbecueGuests.children * 0.2)).toFixed(2)} kg`,
  
    garlicBread: `${(2 * (barbecueGuests.men+barbecueGuests.women))+ (1*barbecueGuests.children)} unidades`,
  
    softDrink: `${drinkTotal} ${plural} de 2L`,
  
    water: `${drinkTotal} ${plural} de 1L`,
  
    beer: `${(barbecueGuests.alcoholDrikers)*3} garrafas de 600ml`,
    coal: `${totalGuests * 1} kg`,
    salt: `${totalGuests * 0.04} kg`,
    ice: `${totalGuests / 10} kg`
  
  
   }

   const barbecueData = {
    barbecueGuests: barbecueGuests,
    barbecueBuyingList: barbecueBuyingList,
   }

   
   return barbecueData
}
const toggleBtn = document.getElementById('checkbox')
toggleBtn.addEventListener('click',() =>{
  toggleMode()
  
})
function toggleMode() {
  document.body.classList.toggle('light')
}


