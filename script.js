/*

01. Pedir ao usuário para fornecer o primeiro item.
02. O usuário fornece o item.
03. O item é armazenado.

04. Pedir ao usuário para fornecer o segundo item.
05. O usuário fornece o item.
06. O item é armazenado.

07. Pedir ao usuário para fornecer o terceiro item.
08. O usuário fornece o item.
09. O item é armazenado.

.
.
.

30. Pedir ao usuário para fornecer o décimo item.
31. O usuário fornece o item.
32. O item é armazenado.

*/

let productList = []

for (let items = 0; items < 10; items++) {
  let product = prompt('Forneça o item ' + (items + 1))
  productList[items] = product
}

alert(productList)

// for (let items = 1 ; items <= 10; items++) {
//   let product = prompt('Forneça o item ' + items)
//   productList[items - 1] = product
// } outra forma de resolver o mesmo problema
