function calculator(){
    const balance = document.querySelector('#balance').value;
    const interest_rate = document.querySelector('#interest_rate').value;
    const months = document.querySelector('#months').value;
    const interest = (balance * (interest_rate * 0.01)) / months;
    let payment = ((balance / months) + interest).toFixed(2);
    document.querySelector('#payment').innerHTML = `Monthly Payment = $${payment}` 
}