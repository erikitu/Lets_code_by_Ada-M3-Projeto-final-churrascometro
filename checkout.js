const barbecueData = JSON.parse(localStorage.getItem('checkoutBarbecueList'))
const itemsToBuy = barbecueData.barbecueBuyingList
const barbecueGuests = barbecueData.barbecueGuests
const btnNewBarbecue = document.getElementById('btnNewBarbecue')
document.getElementById('barbecueGuests').textContent = `${barbecueGuests.men+barbecueGuests.women+barbecueGuests.children} convidados`

document.getElementById('men').textContent = `${barbecueGuests.men} homens`
document.getElementById('women').textContent = `${barbecueGuests.women} mulheres`
document.getElementById('children').textContent = `${barbecueGuests.children} crianças`

function populateTable() {
  const checkoutTable = document.getElementById('checkoutTable')
  checkoutTable.innerHTML = `
  <tr>
    <td>Carne</td>
    <td>${itemsToBuy.meat}</td>
  </tr>
  <tr>
    <td>Pão de Alho</td>
    <td>${itemsToBuy.garlicBread}</td>
  </tr>
  <tr>
    <td>Refrigerante</td>
    <td>${itemsToBuy.softDrink}</td>
  </tr>
  <tr>
    <td>Água</td>
    <td>${itemsToBuy.water}</td>
  </tr>
  <tr>
    <td>Cerveja</td>
    <td>${itemsToBuy.beer}</td>
  </tr>
  <tr>
    <td>Carvão</td>
    <td>${itemsToBuy.coal}</td>
  </tr>
  <tr>
    <td>Sal</td>
    <td>${itemsToBuy.salt}</td>
  </tr>
  <tr>
    <td>Gelo</td>
    <td>${itemsToBuy.ice}</td>
  </tr>
  `
}


btnNewBarbecue.addEventListener('click',() =>{
  window.location.href = 'barbecuemeter.html'
})
const toggleBtn = document.getElementById('checkbox')
toggleBtn.addEventListener('click',() =>{
  toggleMode()
  console.log('cheguei')
})
function toggleMode() {
  document.body.classList.toggle('light')
}
populateTable()

