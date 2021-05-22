
let boton = document.getElementById('boton')
let div_input = document.getElementById('div_input')
let div_datos = document.getElementById('div_datos')


boton.addEventListener('click', function() {
  let city = document.getElementById('inputText').value;
  div_input.style.display='none';
  div_datos.style.display='block';
  fetch('http://api.weatherstack.com/current?access_key=87780e795c6656a52e8a4b7afd0648fb&query='+city)
  .then(res => res.json())
  .then(res => {
    let table = document.getElementById('table')
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.classList.add('table-info')
    let td2 = document.createElement('td')
    td2.classList.add('table-info')
    let td3 = document.createElement('td')
    td3.classList.add('table-info')
    let td4 = document.createElement('td')
    td4.classList.add('table-info')
    let txt = document.createTextNode(res.location.name)
    let txt2 = document.createTextNode(res.location.country)
    let txt3 = document.createTextNode(res.location.localtime)
    let txt4 = document.createTextNode(res.current.temperature)
    td.appendChild(txt)
    td2.appendChild(txt2)
    td3.appendChild(txt3)
    td4.appendChild(txt4)
    tr.appendChild(td)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    table.appendChild(tr)
  });
})



