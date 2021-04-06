

// stampare a schermo il contenuto di una variabile dentro un h1
// BONUS: utilizzare un data come nome del file immagine in un tag img
function newVue (){
  new Vue({
    el: '#container',
    data: {
      testo: 'Hello Tiba',
      immagine: 'img/tiba.jpg'
    }
  })
};


$(newVue);
