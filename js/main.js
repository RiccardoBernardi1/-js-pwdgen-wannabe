// 1. chiedere il nome all' utente e salvarlo in una variabile "nome"
const nome = prompt('Inserisci il tuo nome');
// 2. chiedere il cognome all' utente e salvarlo in una variabile "cognome"
const cognome = prompt('Inserisci il tuo cognome');
// 3. chiedere il colore preferito all' utente e salvarlo in una variabile "colorePreferito"
const colorePreferito = prompt('Inserisci il tuo colore preferito');
// 4. generare una variabile "password" contenente la concatenazione delle variabili precedenti con 76 alla fine
const password = (nome+cognome+colorePreferito+76);
// 5. mostra a schermo la variabile pasword
