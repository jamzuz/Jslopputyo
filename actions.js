// pahoittelen turhasta työstä ja hifistelystä.
console.log("Hello!")
let input = "" // tyhjä muuttuja johon talletetaan inputti käyttäjältä
// v--- muuttujia joilla saadaan rajattua tiettyjen funktioiden käyttö vain yhteen kertaan
let onkojo = false;
let jessenakyy = false;
let listanakyy = false;
let vaihto = true
// kuunnellaan klikkauksia nappulasta ja talletaan inputti muuttujaan
document.getElementById("button").addEventListener("click", function(){
    console.log("Button has been clicked")
    input = document.getElementById("inputfield").value;
    // console.log(input) testausta
    main(input); // lähetetään input main funtioon
});

// tein ylimääräisen reload nappulan jota käytin testauksessa
document.getElementById("reload").addEventListener("click",function(){
onclick = () => window.location.reload();
});
// kuunnellaan enterin napin painalluksia ja talletaan input muuttujaan
document.addEventListener("keyup", function(event) {
  if (event.code === 'Enter')   {
    
      console.log("Enter has been pressed")
      input = document.getElementById("inputfield").value;
      // console.log(input) testausta
      main(input); // lähetetään input main funtioon
 
  }
});
// main
function main(){
let functions = ["google","listaa","jesse","10","soita","tee popup","vaihda","funktio","uusiks"] // functiot lista jossa on kaikki muuttujat

    //google
    if (input.toLowerCase() == "google"){
        //console.log("User typed google OR Google");  testausta

        let google = document.createElement("div") 
        google.innerHTML += "<div> Siirrytäänkö googleen?</div>"
        google.style.color = "blue"
        google.onclick = () => window.open("http://www.google.com")
        document.getElementById("right").appendChild(google);
        google.style.cursor = "pointer"
    };
    //listaa
    if (input.toLowerCase() == "listaa" && listanakyy == false){
      for (let i = 0; i < functions.length; i++) { // perus if lauseke jolla käydään funktio lista läpi ja tulostetaan ne sitä mukaa
        //console.log(functions[i]) testausta
        if (listanakyy == true) {
          
        }
        listanakyy = true;
        let listaadiv = document.createElement("div")
        listaadiv.innerHTML += "<div>" + functions[i] + "</div>"
        listaadiv.onclick = () => document.getElementById("inputfield").value = functions[i]
        document.getElementById("left").appendChild(listaadiv);
        listaadiv.style.cursor = "pointer"
        listaadiv.style.marginTop = "5px"

      }
    };
    //jesse. Näytetään kuva omalla nimellä ja omalla naamalla
    if (input.toLowerCase() == "jesse" && jessenakyy == false){
      jessenakyy = true;
      let jesse = document.createElement("img");
      jesse.src = "assets/jesse.jpg"
      jesse.style.width = "320px";
      jesse.style.height = "300px";
      document.getElementById("right").appendChild(jesse);
    };

    //1-999
    if (input == parseInt(input) && parseInt(input) <1000){ // käsitellään käyttäjä syöte numerona ja tarkistetaan että se on alle 1000
      // console.log("NUMERO TULI") testausta
      for (let i = 0; i < input; i++) { // mennään 0 eteenpäin käyttäjän syötteeseen asti
        let generoi = document.createElement("div");
        generoi.innerHTML += "<div>" + i + " Generoitua tekstiä </div> <br>"
        generoi.style.marginBottom ="-20px" // tyylitellään tavarat lähemmäksi toisiaan.
        document.getElementById("right").appendChild(generoi);
        
      }
    };
    //soita
    if (input.toLowerCase() == "soita"){
      new Audio("assets/Cat_Purr.mp3").play(); 
    };
    //tee popup, tästä tuli vähän omannäkönen nyt..
    if (input.toLowerCase() == "tee popup"){ 

      let popup = document.createElement("div");
      popup.id = "ilmestynyt"
      popup.innerHTML += "<div>Tässä "+ "<b>pyydetty</b>" + " popup</div>";
      popup.innerHTML += "<button id=ilmestynyt>X</button>"; 
      popup.style.backgroundColor = "white";
      popup.style.padding = "20px";
      popup.style.border = "solid";
      popup.style.borderWidth ="1px";
      
      document.getElementById("right").appendChild(popup);

      //popup.onclick = () => popup.remove(); <-- mielestäni tämä tekee enemmän järkeä mutta alempi on tehtävän annon mukainen(kai)
      popup.onclick = () => document.getElementById("ilmestynyt").remove();
    };
    //vaihda bodya edes takaisin
    if (input.toLowerCase() == "vaihda" && vaihto == true ){
     // console.log(vaihto) testaysta
      document.body.style.backgroundColor = "red"; // simppeli
      vaihto = false
    }
    else
    {
      document.body.style.backgroundColor = "lightgray";
      vaihto = true
    };
       
      

    //functio inside functio yo
    if (input.toLowerCase() == "funktio" && onkojo == false ){

      onkojo = true; // annetaan mahdollisuus luoda vain yksi näitä
      
      let funktio = document.createElement("div");
      console.log("funktio toimii!")
      funktio.innerHTML += "<input id=suoritakentta type=text>";
      funktio.innerHTML += "<button id=suorita>Suorita</button>";
      funktio.style.padding = "20px"
      document.getElementById("right").appendChild(funktio) 

      document.getElementById("suorita").addEventListener("click",function(){
        
        let inputdeep = document.getElementById("suoritakentta").value;
        if (inputdeep == "") {
           console.log("anna komento") 
        }
        if (inputdeep == "reload" || inputdeep == "Reload") {
          window.location.reload();
        }
        if (inputdeep != "" && "reload"){ 
          console.log("Kirjoitit: " + inputdeep)
        }
      })
    };
    //komento ei tunnistetta
    if (functions.includes(input.toLowerCase()) || isNaN(input) == false && input < 1000){ 
      // katsotaan onko käyttäjän input functio listassa
    }
    else{ // jos ei ole niin tulostetaan että komentoa ei tunnistettu
      console.log("Komentoa ei tunnistettu")
      let huono = document.createElement("div");
      huono.innerHTML += "<div> Komentoa ei tunnistettu </div>"
      document.getElementById("right").appendChild(huono)
    }
    //uusiks
    if ( input.toLowerCase() == "uusiks" ){
      window.location.reload()
    }

}

