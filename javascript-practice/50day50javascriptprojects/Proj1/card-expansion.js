const all_card = document.querySelectorAll('.panel');
function expand(card){
    all_card.forEach(panel=>{
        if(panel.classList.contains('profile--expanded')){
            panel.classList.remove('profile--expanded');
            panel.classList.add('profile--unexpanded')
        }
        else if(panel === card){
            card.classList.add('profile--expanded');
            card.classList.remove('profile--unexpanded');
        } 
    }); 
}
