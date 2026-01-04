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
const messageContainer = document.getElementById('message-container')

const submitButton = form.querySelector('button[type="submit"]')
const againBtn = resultsSection.querySelector('button')

let vezesSorteadas = 0

// Função para exibir mensagens
function showMessage(text, type) {
  messageContainer.textContent = text
  messageContainer.className = `message-container show ${type}`

  // Remove a mensagem após 5 segundos
  setTimeout(() => {
    messageContainer.classList.remove('show')
  }, 5000)
}

// Função para validar os inputs
function validateInputs(totalNumbers, min, max) {
  // Verifica se algum campo está vazio
  if (!numbers.value || !minRange.value || !maxRange.value) {
    showMessage('Por favor, preencha todos os campos!', 'error')
    return false
  }

  // Verifica se os valores são números válidos
  if (isNaN(totalNumbers) || isNaN(min) || isNaN(max)) {
    showMessage('Por favor, insira números válidos!', 'error')
    return false
  }

  // Verifica se o valor máximo é maior que o mínimo
  if (max <= min) {
    showMessage('O valor máximo deve ser maior que o valor mínimo!', 'error')
    return false
  }

  // Verifica se a quantidade de números é válida
  if (totalNumbers <= 0) {
    showMessage('A quantidade de números deve ser maior que 0!', 'error')
    return false
  }

  // Se não repetir números, verifica se há números suficientes no intervalo
  if (uniqueValues.checked) {
    const intervalo = max - min + 1
    if (totalNumbers > intervalo) {
      showMessage(
        `Não há números suficientes! Você pediu ${totalNumbers} números únicos, mas o intervalo de ${min} a ${max} contém apenas ${intervalo} números.`,
        'error'
      )
      return false
    }
  }

  return true
}

// Evento de submit do formulário
form.addEventListener('submit', function (e) {
  e.preventDefault()

  // Pega os valores dos inputs
  const totalNumbers = parseInt(numbers.value)
  const min = parseInt(minRange.value)
  const max = parseInt(maxRange.value)

  // Valida os inputs
  if (!validateInputs(totalNumbers, min, max)) {
    return
  }

  // Desabilita o botão durante a animação
  submitButton.disabled = true
  submitButton.style.cursor = 'not-allowed'
  submitButton.style.opacity = '0.6'

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

  // Reabilita o botão após a animação (3 segundos é o maior delay das animações)
  setTimeout(() => {
    submitButton.disabled = false
    submitButton.style.cursor = 'pointer'
    submitButton.style.opacity = '1'
  }, 3000)
})

// Evento do botão "Sortear Novamente"
againBtn.addEventListener('click', function () {
  resultsSection.classList.add('hidden')
  contentForm.classList.remove('hidden')
  messageContainer.classList.remove('show')
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

  // Exibe mensagem de sucesso
  setTimeout(() => {
    showMessage(
      `Sorteio realizado com sucesso! ${drawnNumbers.length} número(s) gerado(s).`,
      'success'
    )
  }, 3100)
}
