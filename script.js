function calcular(){
  if(document.getElementById('numero').value.match(/^(\s)+$/) || document.getElementById('numero').value == ""){
    document.getElementById('resultado').innerText = `Número inválido`
  }
  else if(document.getElementById('numero').value == 0){
    document.getElementById('resultado').innerText = `Fatorial de 0 = 1`
  }
  else{
    for (var i = 1; i <= document.getElementById('numero').value; i++) {
      if(i==1){
        var resultado = i
      } else {
        resultado *= i
      }
      document.getElementById('resultado').innerText = `Fatorial de ${i} = ${resultado}`
    }
  }
}
