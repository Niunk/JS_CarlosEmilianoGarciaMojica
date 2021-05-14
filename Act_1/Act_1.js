class Pokemon {
  constructor(nombre, naturaleza, tipo, vida, ataque, defensa, velocidad, nivel){
    this.nombre = nombre;
    this.naturaleza = naturaleza;
    this.tipo = tipo;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
    this.nivel = nivel;
  }
  subirNivel(){
    if(this.nivel < 100)
    {
      console.log('Su pokémon ha subido de nivel');
      this.nivel++;
      console.log('El nivel del pokemon es: ' + this.nivel);
      switch(this.naturaleza)
      {
        case 'Audaz':
          this.ataque += 4;
          console.log("Aumentó 4 puntos en ataque");
          break;
        case 'Osada':
          this.defensa += 4;
          console.log("Aumentó 4 puntos en defensa");
          break;
        case 'Cauta':
          this.vida += 4;
          console.log("Aumentó 4 puntos en vida");
          break;
        case 'Alegre':
          this.velocidad += 4;
          console.log("Aumentó 4 puntos en velocidad");
          break;
      }
    }
    else{
      console.log("El pokemon " + this.nombre + " ha llegado a su nivel máximo(100)");
    }
  }
  sumEst(){
    console.log("Vida: " + this.vida);
    console.log("Ataque: " + this.ataque);
    console.log("Defensa: " + this.defensa);
    console.log("Velocidad: " + this.velocidad);
    console.log("Suma: " + (this.vida + this.ataque + this.defensa + this.velocidad));
  }
  promEst(){
    console.log("Promedio: " + ((this.vida + this.ataque + this.defensa + this.velocidad)/4) );
  }
  presentarse(){
    console.log("Hola me llamo " + this.nombre + " soy tipo " + this.tipo + " y estoy al nivel " + this.nivel);
  }
}
let pk1 = new Pokemon('Bulbasur','Cauta','Planta',70,80,100,50,20);
let pk2 = new Pokemon('Chikorita','Audaz','Planta',100,50,30,140,98);
let pk3 = new Pokemon('Wobbuffet','Alegre','Psíquico',30,20,50,40,50);
let pk4 = new Pokemon('Dragonite','Osada','Dragon',200,180,140,200,70);
let pk5 = new Pokemon('Zapdos','Osada','Eléctrico',300,300,400,350,99);
