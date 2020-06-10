
        var tulostettava;
        var laskinKentta;
        var laskettu = false;
        
        
     
        function laskinFunktio(e) {    

            tulostettava = document.getElementById(e.id).value;
            laskinKentta = document.getElementById("kentta").textContent;
            

            if (laskinKentta.includes("0") && laskinKentta.length == 1) { 
                document.getElementById("kentta").innerHTML = tulostettava;
            } 
            else if (laskettu === true) {
                  tyhjenna();
                  document.getElementById("kentta").innerHTML = tulostettava;
                  laskettu = false;
            }
            else {
                document.getElementById("kentta").innerHTML += tulostettava;
            }
         }

         function laskinOperaattori(e) {    
            
            tulostettava = document.getElementById(e.id).value;
            laskinKentta = document.getElementById("kentta").textContent;
            syoteKentta = document.getElementById("kenttaSyote").textContent;


            if (syoteKentta.includes("0") && syoteKentta.length == 1) { 
                document.getElementById("kenttaSyote").innerHTML = laskinKentta + tulostettava;
                document.getElementById("kentta").innerHTML = "0";
                } 
            else if (laskettu === true) {
                  document.getElementById("kenttaSyote").innerHTML = laskinKentta + tulostettava;
                  document.getElementById("kentta").innerHTML = "0";
                  laskettu = false;
                }          
            else {
                document.getElementById("kenttaSyote").innerHTML += laskinKentta + tulostettava;
                document.getElementById("kentta").innerHTML = "0";
                }
                document.getElementById("buttonpiste").disabled = false;
            }

         function pistemerkki() {

            if (laskettu === true) {
               tyhjenna();
               laskettu = false;
               
               document.getElementById("kentta").innerHTML += ".";
               document.getElementById("buttonpiste").disabled = true;
            }
            else {
               document.getElementById("kentta").innerHTML += ".";
               document.getElementById("buttonpiste").disabled = true;
            }   

         }
         function tyhjenna() {
            document.getElementById("kenttaSyote").innerHTML = "0"; // Tyhjentää kaikki syoteRuudut
            document.getElementById("kentta").innerHTML = "0";
            document.getElementById("buttonpiste").disabled = false;
         }
         function tyhjennaSyote() {
            document.getElementById("kentta").innerHTML = "0";
            document.getElementById("buttonpiste").disabled = false; 
         }

         function laskeYhteen() {

            
            laskinKentta = document.getElementById("kentta").textContent;
            syoteKentta = document.getElementById("kenttaSyote").textContent;

            if (laskettu === true) {
               tyhjenna();
               laskettu = false;
            }
            else if(laskinKentta.includes("0") && laskinKentta.lenght == 1) {

               document.getElementById("kenttaSyote").innerHTML = laskinKentta;
               document.getElementById("kentta").innerHTML = eval(document.getElementById("kenttaSyote").textContent);
               laskettu = true;
            }
            else{

            document.getElementById("kenttaSyote").innerHTML += laskinKentta;
            document.getElementById("kentta").innerHTML = eval(document.getElementById("kenttaSyote").textContent);
            laskettu = true;
            }
         }
