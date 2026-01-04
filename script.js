// Quantos numeros serão sorteados
const numbers = document.getElementById('numbers')
// Ranges dos numeros
const minRange = document.getElementById('minimo')
const maxRange = document.getElementById('maximo')
// Se os valores devem ser únicos
const uniqueValues = document.getElementById('unique')
// Formulário
const form = document.querySelector('form')
const contentForm = document.getElementById('content-form')
const resultsSection = document.getElementById('results')

const againBtn = resultsSection.querySelector('button')

let vezesSorteadas = 0
// Evento de submit do formulário
form.addEventListener('submit', function (e) {
  e.preventDefault()

  // Pega os valores dos inputs
  const totalNumbers = parseInt(numbers.value)
  const min = parseInt(minRange.value)
  const max = parseInt(maxRange.value)

  // Array para armazenar os números sorteados
  const drawnNumbers = []

  while (drawnNumbers.length < totalNumbers) {
    // Gera um número aleatório dentro do intervalo
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    // Verifica se o número deve ser único
    if (uniqueValues.checked) {
      if (!drawnNumbers.includes(randomNum)) {
        drawnNumbers.push(randomNum)
      }
    } else {
      drawnNumbers.push(randomNum)
    }
  }
  updateResults(drawnNumbers)
  contentForm.classList.add('hidden')
  resultsSection.classList.remove('hidden')
})

// Evento do botão "Sortear Novamente"
againBtn.addEventListener('click', function () {
  resultsSection.classList.add('hidden')
  contentForm.classList.remove('hidden')
})

function updateResults(drawnNumbers) {
  // Atualiza a seção de resultados com os números sorteados
  const contentNumber = resultsSection.querySelector('.content-number')
  const resultsTitle = resultsSection.querySelector('.title p')

  // Limpa os números anteriores
  contentNumber.innerHTML = ''

  // Adiciona cada número sorteado
  drawnNumbers.forEach((number) => {
    const resultNumberElement = document.createElement('span')
    resultNumberElement.className = 'result-number'
    resultNumberElement.textContent = number
    contentNumber.appendChild(resultNumberElement)
  })

  // Atualiza o título com a quantidade de números sorteados
  vezesSorteadas += 1
  resultsTitle.textContent = `${vezesSorteadas}º RESULTADO`
}
