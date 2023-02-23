class Form {
  constructor() {
    this.titleImg = createImg("assets/title.png", "titulo del juego");
    this.input = createInput("").attribute("placeholder", "Introduce tu nombre");
    this.playButton = createButton("jugar");
    this.greetings = createElement("h2")
  }

  setElementPosition(){
    this.titleImg.position(120,60);
    this.input.position(width/2-110, height/2-80);
    this.playButton.position(width/2-90, height/2-20);
    this.greetings.position(width/2-300, height/2-100);
  }
  handleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide();
      var message =`
      Hola ${this.input.value()}
      </br> Espera a que se una otro jugador...`
      this.greetings.html(message);
    })
  }
display(){
this.setElementPosition();
this.handleMousePressed();
  }
}
