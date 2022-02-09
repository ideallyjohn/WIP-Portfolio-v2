document.addEventListener('DOMContentLoaded', () => {



  let cards = document.querySelectorAll('.card')

  for (let i = 0; i < cards.length; i++){

    
    
    
    cards[i].addEventListener('mouseenter', function faku(){

      let col = Array.from(this.parentNode.children).indexOf(this); 

      if(col === 0){
        this.parentNode.style.gridTemplateColumns = '2fr 1fr 1fr';

      } else if (col === 1) {
        this.parentNode.style.gridTemplateColumns = '1fr 2fr 1fr';

      } else {
        this.parentNode.style.gridTemplateColumns = '1fr 1fr 2fr';
      }

    });
  }



  



})