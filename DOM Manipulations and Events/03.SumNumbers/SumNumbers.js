function calc() {
    const first= document.getElementById('num1').value;
    const second = document.getElementById('num2').value;
    const result = document.getElementById('sum');
    result.value = Number(first)+Number(second);
}
