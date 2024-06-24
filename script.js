//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
const { createApp } = Vue;

createApp({
  data() {
    return {
      frases: 'Hello Vue!',
      imageUrl: 'img/Vue.js_Logo_2.svg.png',
      vue_class: 'img_size'
    }
  }
}).mount('#app')

console.log('Ok');

