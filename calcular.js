// DECLARACIÓN CUADRADO
function perimetroCuadrado (lado) {
  return lado * 4;
}

/* DECLARACIÓN ARÉA CUADRADO*/

function areaCuadrado (lado) {
  return lado * lado;
}

// TRIANGULO
function perimetroTriangulo (lado1, lado2, base) {
  return lado1 + lado2 + base;
}

/* AREA TRIANGULO*/

function areaTriangulo (base, altura) {
  return (base * altura) / 2;
}

//CIRCULO
function diametroCirculo (radio) {
  return radio * 2;
}

const pi = Math.PI;

function perimetroCirculo (radio) {
  const diametro = diametroCirculo(radio);
  return  diametro * pi;
}

/* AREA CIRCULO*/
function areaCirculo (radio) {
  return ((radio * radio) * pi);
}

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  resultado1.innerHTML = perimetro;
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  resultado1.innerHTML = area;
}
function calcularPerimetroTriangulo () {
  const input1 = document.getElementById("inputTriangulo1");
  const value1 = parseInt(input1.value);
  const input2 = document.getElementById("inputTriangulo2");
  const value2 = parseInt(input2.value);
  const input3 = document.getElementById("inputTriangulo3");
  const value3 = parseInt(input3.value);

  const perimetro = perimetroTriangulo(value1, value2, value3);
  resultado2.innerHTML = perimetro;
}
function calcularAreaTriangulo() {
  const input3 = document.getElementById("inputTriangulo3");
  const value3 = parseInt(input3.value);
  const input4 = document.getElementById("inputTriangulo4");
  const value4 = parseInt(input4.value);
  const area = areaTriangulo(value3, value4);
  resultado2.innerHTML = area;
}
function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  resultado3.innerHTML = perimetro;
}
function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  resultado3.innerHTML = area;
}

// PORCENTAJES Y DESCUENTOS
function calcularPrecioconDescuento (precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento
}

function onClickButtonPrecioConDescuento() {
  const inputPrice = document.getElementById("inputPrice");
  const pricevalue = parseInt(inputPrice.value);

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = parseInt(inputDiscount.value);

  const precioConDescuento = calcularPrecioconDescuento(pricevalue, discountValue);

  resultadoP.innerHTML = precioConDescuento;
}

// SUMATORIA

 function clickEnBotonSumatoria () {
  let n1= parseInt(document.getElementById("indice").value);
  let n2= parseInt(document.getElementById("limite").value);

  let r = 0;
  let a = n1;

  while (a<= n2) {
      r = r + a;
      a = a + 1;
  }
    resultadoS.innerHTML = r;
  }

