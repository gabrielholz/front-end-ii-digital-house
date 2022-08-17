
let input1 = document.getElementById("link1")
let input2 = document.getElementById("link2")
let input3 = document.getElementById("link3")


function buscaImg() {
  document.getElementById("galeria").innerHTML = ''

  let fotos = `
       <img src="${input1.value}"/>
       <img src="${input2.value}"/>
       <img src="${input3.value}"/>
     `

  document.getElementById("galeria").innerHTML += fotos;

  input1.value = ""
  input2.value = ""
  input3.value = ""



}

// Gabriel Holz
// Everton Alvez
// Geovane Motta

let linksFotos = [
  "https://httpstatusdogs.com/img/100.jpg",
  "https://httpstatusdogs.com/img/201.jpg",
  "https://httpstatusdogs.com/img/202.jpg",
  "https://httpstatusdogs.com/img/203.jpg",
  "https://httpstatusdogs.com/img/204.jpg",
  "https://httpstatusdogs.com/img/206.jpg",
  "https://httpstatusdogs.com/img/208.jpg",
  "https://httpstatusdogs.com/img/226.jpg",
  "https://httpstatusdogs.com/img/300.jpg",
  "https://httpstatusdogs.com/img/301.jpg",
  "https://httpstatusdogs.com/img/302.jpg",
  "https://httpstatusdogs.com/img/303.jpg",
  "https://httpstatusdogs.com/img/304.jpg",
  "https://httpstatusdogs.com/img/305.jpg",
  "https://httpstatusdogs.com/img/306.jpg",
  "https://httpstatusdogs.com/img/307.jpg",
  "https://httpstatusdogs.com/img/308.jpg",
  "https://httpstatusdogs.com/img/400.jpg",
  "https://httpstatusdogs.com/img/401.jpg",
  "https://httpstatusdogs.com/img/402.jpg",
  "https://httpstatusdogs.com/img/403.jpg",
  "https://httpstatusdogs.com/img/404.jpg",
  "https://httpstatusdogs.com/img/405.jpg",
  "https://httpstatusdogs.com/img/406.jpg",
  "https://httpstatusdogs.com/img/407.jpg",
  "https://httpstatusdogs.com/img/408.jpg",
  "https://httpstatusdogs.com/img/409.jpg",
  "https://httpstatusdogs.com/img/410.jpg",
  "https://httpstatusdogs.com/img/411.jpg",
  "https://httpstatusdogs.com/img/412.jpg",
]

function sortearFotos() {
  min = Math.ceil(1);
  max = Math.floor(linksFotos.length);

 let numeroFoto1Sorteada = Math.floor(Math.random() * (max - min) + min);
 let numeroFoto2Sorteada = Math.floor(Math.random() * (max - min) + min);
 let numeroFoto3Sorteada = Math.floor(Math.random() * (max - min) + min);


  input1.value = linksFotos[numeroFoto1Sorteada]
  input2.value = linksFotos[numeroFoto2Sorteada]
  input3.value = linksFotos[numeroFoto3Sorteada]
}