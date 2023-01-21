/* Resgistrar em memória */
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener(
  "click",
  add
) /* Esse função faz com que quando houver o click no button ela vai adicionar o formulário de dia (isso é um evento ocorrido na página) */
form.addEventListener(
  "change",
  save
) /* Essa função vai fazer com que quando houver uma mudança no código isso fique salvo no navegador (isso é um evento ocorrido na página) */

/* Função para adicionar o dia */
function add() {
  const today = new Date()
    .toLocaleDateString("pt-br")
    .slice(
      0,
      -5
    ) /* Essa é a função para pegar o dia de hoje, o slice é para fazer a seleção da data da forma que eu queira sendo o primeiro número da esquerda para direita e o segundo da direita para esquerda */
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    /* Condicional feita para analizar se o dia já foi adicionado */
    alert("Dia já incluso 🚫")
    return
  }

  alert("Adicionado com sucesso ✅") /* Aqui é o comando para adicionar o dia */
  nlwSetup.addDay(today)
}

/* Função para salvar os dados modificados=(change) */
function save() {
  localStorage.setItem(
    "NLWSetup@habits",
    JSON.stringify(nlwSetup.data)
  ) /* Essa linha de comando está tranformando os dados em string para guardalas */
}

/* Aqui ele vai pegar as informações que estavam no localStorage e transformar em objeto novamente */
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
/* Nessa parte ele está fazendo a execução das funções */
nlwSetup.setData(data)
nlwSetup.load()
