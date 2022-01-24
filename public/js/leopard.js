console.log("game control personnage");//code de test

//Touches dont va se servir l'utilisateur
const RIGHT_KEY = 39;
const LEFT_KEY = 37;
const S_KEY = 83;

//-------------TOUCHE FLECHE DROITE APPUYEE---------------------------------------------
document.onkeydown = function(e) { 
    if (e.keyCode == LEFT_KEY) {//si la flêche gauche est pressée
    move.style.left = (move.offsetLeft + -50) + 'px';//aller à gauche
    let gauche = document.getElementsByClassName("perso");//personnage
    // gauche[0].src="../img/walk_vers_gauche.gif";
    var path = window.location.pathname;//récupère le nom de la page
    var page = path.split("/").pop();
    console.log(page); //affiche le nom de la page dans la console
    function rightKeyAnimationKeydown(){
        if(page === "page1"||page==="page2"|| page==="page3" ){//si c'est la page 1 ou 2 ou 3
            gauche[0].src="../img/walk_vers_gauche.gif";//joue animation de marche vers la gauche
        }else{
            gauche[0].src="../img/avion.png";//sinon (si c'est la page 4) l'image de l'avion sera jouée
        }   
    }
    rightKeyAnimationKeydown();
    }
          
  //-----------TOUCHE FLECHE GAUCHE  APPUYEE---------------------------------------------
     else if (e.keyCode == RIGHT_KEY) {//si la fleche droites est pressée
        move.style.left = (move.offsetLeft + 10) + 'px';//si la fleche droites est pressée
        let droit = document.getElementsByClassName("perso");//récupère la classe 'perso'
        // droit[0].src="../img/walk.gif"; 
        var path = window.location.pathname;//récupère le nom de la page
        var page = path.split("/").pop();
        console.log(page);
    function leftKeyAnimationKeydown(){
        if(page == "page1"||page=="page2"||page==="page3"){//si c'est la page 1 ou 2 ou 3
            droit[0].src="../img/walk.gif";//joue animation de marche vers la droite
        }else{
            droit[0].src="../img/avion-inverse.png";}//sinon (si c'est la page 4) l'image de l'avion sera jouée
    }
    leftKeyAnimationKeydown()
    
    }  //jouer marche

   //-------------------TOUCHE S-------------------------------- 
    else if(e.keyCode == S_KEY){ //si la touche S est préssée 
        let jump = document.getElementsByClassName("perso");//récupère la classe 'perso'
        // jump[0].src = "../img/saute.gif";}//changer l'animation par saute
        var path = window.location.pathname;//récupère le nom de la page
        var page = path.split("/").pop();
        console.log(page); 
        function sKeyAnimationKeydown(){
            if(page === "page1"||page ==="page2"||page =="page3"){
                jump[0].src = "../img/saute.gif";
            }else{
                jump[0].src = "../img/avion-inverse.png";
            }
        }
        sKeyAnimationKeydown()//appel de la fonction
        
    // Collision----------------- personnage et objet transparent---------------------------------
    //si la console affiche "collision" passer à la scène suivante    
    function isCollide(a, b) {
        var a = document.querySelector('.perso').getBoundingClientRect();
        var b = document.querySelector('.premierplan').getBoundingClientRect();
        // console.log(a);
        // console.log(b);
        if(
            ((a.y + a.height) < (b.y)) ||
            (a.y > (b.y + b.height)) ||
            ((a.x + a.width) < b.x) ||
            (a.x > (b.x + b.width))=== false && (e.keyCode == RIGHT_KEY)//code pour détecter les collisions
        ){
            console.log("pas de collision");//affiche pas de collision dans la console
        }
        else{
            console.log(" collision");//affiche collision dans la console
        };  
    }
    isCollide()}
};//fin de la fonction e.keycode appuyé

//-------------------------------touches du clavier relachées-------------------------------------------------------
    document.onkeyup = function(e){//fonction quand la touche est relachée jouer l'animation 'ne_bouge_pas.gif"
        if(e.keyCode == LEFT_KEY){
            let stable = document.getElementsByClassName("perso");//récupère la classe perso
            // stable[0].src = "../img/ne_bouge_pas_.gif";//personnage immobile 
            var path = window.location.pathname;//récupère le nom de la page
            var page = path.split("/").pop();
            console.log(page);
            function idleKeyUpLeftKey(){
                if(page === "page1"||page==="page2"||page=="page3"){
                    stable[0].src = "../img/ne_bouge_pas_.gif";//personnage immobile 
                }else{
                    stable[0].src = "../img/avion-inverse.png";//personnage immobile 
                }
            }
            idleKeyUpLeftKey()
        }

        if(e.keyCode == RIGHT_KEY){
            let stable = document.getElementsByClassName("perso");//récupère la classe perso
            // stable[0].src = "../img/ne_bouge_pas_.gif";//personnage immobile
            var path = window.location.pathname;//récupère le nom de la page
            var page = path.split("/").pop();
            console.log(page);
            function idleKeyUpRight(){
                if(page === "page1"||page==="page2"||page=="page3"){
                    stable[0].src = "../img/ne_bouge_pas_.gif";//personnage immobile               
            }
            else{
                stable[0].src = "../img/avion-inverse.png";//personnage immobile 
            }
        }            
        idleKeyUpRight()
        }
            //-----------------------------collisions relachement----------------------------------------
            function isCollide(a, b) {
                var a = document.querySelector('.perso').getBoundingClientRect();
                var b = document.querySelector('.premierplan').getBoundingClientRect();
                // console.log(a);
                // console.log(b);
                if(
                    ((a.y + a.height) < (b.y)) ||
                    (a.y > (b.y + b.height)) ||
                    ((a.x + a.width) < b.x) ||
                    (a.x > (b.x + b.width)) === true && (e.keyCode == RIGHT_KEY)//code pour détecter les collisions
                ){
                    console.log(" no collision");
                }
               
                else{
                    console.log("collision"); //s'il est écrit pas "no collision"

                    var path = window.location.pathname;//récupère le nom de la page
                    var page = path.split("/").pop();
                    console.log(page)

                    //si la page est égale à page1 passer à la page2
                    //si la page est égale à page2 passer à la page3
                    //si la page est égale à page3 passer à la page4
                    function changementDePage(){
                        if(page === "page1"){window.location.href = "page2";}//passe à la page/scene suivante
                           else if(page === "page2"){window.location.href = "page3";}//passe à la page/scene suivante
                           else if(page === "page3"){window.location.href = "page4";}//passe à la page/scene suivante
                           else if(page === "page4"){window.location.href = "page6";}//passe à la page/scene suivante
                           console.log(page);

                    }
                    changementDePage();//appel de la fonction
                }
            }
            isCollide();//appel de la fonction     
    }//fin de la fonction e.keycode relachee


  
//-------------------------------------------------------------------------------------










          




        

          

    





  







