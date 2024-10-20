async function getRates() {
    const res = await fetch(`https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`)

    const data = await res.json();
    console.log(data.rates)
}
getRates();