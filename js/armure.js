function calcul(){
    var fer=0                                                       //On met les variables à 0
    var diamant=0
    var netherite=0

    if (document.getElementById("iron_helmet").checked) {           //si la case "iron_helmet" est cochee
        fer=fer+5;                                                  // alors on ajoute 5 a la variable fer 
      }
    if (document.getElementById("iron_chestplate").checked) {       // si la case "iron_chestplate" est cochee
        fer=fer+8;                                                  // alors on ajoute 8 a la variable fer 
      }
    if (document.getElementById("iron_leggings").checked) {         // si la case "iron_leggings" est cochee
        fer=fer+7;                                                  // alors on ajoute 7 a la variable fer 
      }
    if (document.getElementById("iron_boots").checked) {            // si la case "iron_boots" est cochee
        fer=fer+4;                                                  // alors on ajoute 4 a la variable fer 
      }
   
    document.getElementById("fer").value = fer;                     // on donne la valeur fer a la page Html

  if (document.getElementById("diamond_helmet").checked) {          // si la case "diamond_helmet" est cochee
        diamant=diamant+5;                                          // alors on ajoute 5 a la variable diamant 
      }
    if (document.getElementById("diamond_chestplate").checked) {    // si la case "diamond_helmet" est cochee
        diamant=diamant+8;                                          // alors on ajoute 8 a la variable diamant 
      }
    if (document.getElementById("diamond_leggings").checked) {      // si la case "diamond_helmet" est cochee
        diamant=diamant+7;                                          // alors on ajoute 7 a la variable diamant 
      }
    if (document.getElementById("diamond_boots").checked) {         // si la case "diamond_helmet" est cochee
        diamant=diamant+4;                                          // alors on ajoute 4 a la variable diamant 
      }
   
    document.getElementById("diamant").value = diamant;             // on donne la valeur de la variable diamant a la page Html

    if (document.getElementById("netherite_helmet").checked) {      // si la case "netherite_helmet" est cochee
        diamant=diamant+5;                                          // alors on ajoute 5 a la variable diamant 
        netherite=netherite+1                                       // alors on ajoute 1 a la variable netherite  
        }
    if (document.getElementById("netherite_chestplate").checked) {  // si la case "netherite_chestplate" est cochee
        diamant=diamant+8;                                          // alors on ajoute 8 a la variable diamant 
        netherite=netherite+1                                       // alors on ajoute 1 a la variable netherite  
      }
    if (document.getElementById("netherite_leggings").checked) {    // si la case "netherite_leggings" est cochee
        diamant=diamant+7;                                          // alors on ajoute 7 a la variable diamant 
        netherite=netherite+1                                       // alors on ajoute 1 a la variable netherite  
      }
    if (document.getElementById("netherite_boots").checked) {       // si la case "netherite_boots" est cochee
        diamant=diamant+4;                                          // alors on ajoute 4 a la variable diamant 
        netherite=netherite+1                                       // alors on ajoute 1 a la variable netherite 
      }
   
    document.getElementById("diamant").value = diamant;             // on donne la valeur de la variable diamant a la page Html
    document.getElementById("netherite").value  = netherite         // on donne la valeur de la variable netherite a la page Html



}