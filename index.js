var prompt = require('prompt-sync')();

let paracetamolQTY = 0;
let paracetamolPrice = 0;
let aspirinaQTY = 0;
let aspirinaPrice = 0;
let dipironaQTY = 0;
let dipironaPrice = 0;
let ibuprofenoQTY = 0;
let ibuprofenoPrice = 0;
let totalPrice = 0;

function showAnalgesic() {
  while (true) {
    console.log('1. Paracetamol');
    console.log('2. Aspirina');
    console.log('3. Dipirona');
    console.log('4. Ibuprofeno');
    console.log('5. Sair');
    var option = parseInt(prompt('Escolha um medicamento: '));
    switch (option) {
      case 1:
        paracetamolQTY = paracetamolQTY + parseInt(prompt('Quantos comprimidos de Paracetamol você deseja comprar?'));
        totalPrice = totalPrice + (paracetamolQTY * paracetamolPrice);
        option = prompt(`Você deseja adicionar ${paracetamolQTY} comprimidos de Paracetamol ao carrinho?(S/n)`).toLowerCase();
        if (option == 's') {
          console.log(`Você adicionou ${paracetamolQTY} comprimidos de Paracetamol ao carrinho.`);
        }
        break;
      case 2:
        aspirinaQTY = aspirinaQTY + parseInt(prompt('Quantos comprimidos de Aspirina você deseja comprar?'));
        totalPrice = totalPrice + (aspirinaQTY * aspirinaPrice);
        option = prompt(`Você deseja adicionar ${aspirinaQTY} comprimidos de Aspirina ao carrinho?(S/n)`).toLowerCase();
        if (option == 's') {
          console.log(`Você adicionou ${aspirinaQTY} comprimidos de Aspirina ao carrinho.`);
        }
        break;
      case 3:
        dipironaQTY = dipironaQTY + parseInt(prompt('Quantos comprimidos de Dipirona você deseja comprar?'));
        totalPrice = totalPrice + (dipironaQTY * dipironaPrice);
        option = prompt(`Você deseja adicionar ${dipironaQTY} comprimidos de Dipirona ao carrinho?(S/n)`).toLowerCase();
        if (option == 's') {
          console.log(`Você adicionou ${dipironaQTY} comprimidos de Dipirona ao carrinho.`);
        }
        break;
      case 4:
        ibuprofenoQTY = ibuprofenoQTY + parseInt(prompt('Quantos comprimidos de Ibuprofeno você deseja comprar?'));
        totalPrice = totalPrice + (ibuprofenoQTY * ibuprofenoPrice);
        option = prompt(`Você deseja adicionar ${ibuprofenoQTY} comprimidos de Ibuprofeno ao carrinho?(S/n)`).toLowerCase();
        if (option == 's') {
          console.log(`Você adicionou ${ibuprofenoQTY} comprimidos de Ibuprofeno ao carrinho.`);
        }
        break;
      case 5:
        console.log('Voltando ao menu principal...');
        return false;
        break;
      default:
        return false;
        break;
    }
    
  }
}