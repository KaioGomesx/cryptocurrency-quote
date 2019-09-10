const getApiResponse = (criptomoeda) => {
  fetch(`https://www.mercadobitcoin.net/api/${criptomoeda}/ticker/`)
  .then(res => res.json())
  .then(json => {
    const { high, low, last } = json.ticker

    const options = {style: 'currency', currency: 'BRL'}
    const numberFormat = new Intl.NumberFormat('pt-BR', options)

    const result = `<h4> ÚLTIMO PREÇO: ${numberFormat.format(last)}</h4><br>
    <h4> MAIOR PREÇO: ${numberFormat.format(high)}</h4><br>
    <h4> MENOR PREÇO: ${numberFormat.format(low)}</h4><br>`
    
    document.getElementsByClassName("lead")[0].innerHTML = result;
  });
}

function getSelectValue() {
  const criptomoeda = document.getElementById("mySelect").value;
  getApiResponse(criptomoeda)
 }