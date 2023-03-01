/*SAQUE LAS VARIABLES DE LAS FUNCIONES*/
/**CLASE DE DRY (DONT REPEAT YOURSELF) */
/*FUNCION INICIAR */
const seleccionarAtaque=document.getElementById('seleccionar-ataque')
const btnmascotajug = document.getElementById('btn-mascota')

const botonreinicio=document.getElementById('reiniciar')
const btnreiniciar=document.getElementById('btn-reiniciar') 

/*FUNCION SLC */
const mostrarataque=document.getElementById('seleccionar-ataque')
const seleccionarMascota=document.getElementById('seleccionar-mascota')
/* const inh = document.getElementById('hipodogue')
const inc = document.getElementById('capipepo')
const inr = document.getElementById('ratigueya') */
const nomjug=document.getElementById('nom-jug')

/*FUNCION SLC ENEMIGIO*/
const nomen=document.getElementById('nom-enem')

/*FUNCION crear mensaje */
const sectionmsj=document.getElementById('resultado')
const ataqueDelJugador=document.getElementById('ataque-jugador')
const ataqueDelEnemigo=document.getElementById('ataque-enemigo')

/*FUNCION REINICIO */
const mostrarReinicio=document.getElementById('reiniciar')

/**FUNCION ENDGAME */
/* let sectionmsj=document.getElementById('resultado') COMO SE REPITE LA PUEDO ELIMINAR*/
/* let btnfuego=document.getElementById('btn-fuego')
let btnagua=document.getElementById('btn-agua')
let btntierra=document.getElementById('btn-tierra') */


/**FUNCION COMBATE */
const spanvidajug=document.getElementById('vida-jug')
const spanvidaene=document.getElementById('vida-ene')



/**Clase de arrays */
let mokepones=[]

/*VARIABLES GLOBALES */
let ataquejugador=[]
let ataqueenemigo=[]
let vidajugador=3
let vidaenemigo=3


/**varibale para iterar */
let opcionMokepones
let miniatura
let inh
let inc
let inr

/**Ataques dinamicos */
let mascotajugador
const contenedorAtaques=document.getElementById('contenedorAtaques')
let ataquesMokepon

const contenedorTarjetas=document.getElementById('contenedor-tarjetas')

const spanimagen=document.getElementById('imagen-miniatura')

let btnagua
let btntierra
let btnfuego
let botones=[]
let attackjugador=[]
let ataquesMokeponEnemigo 
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador=0
let victoriasEnemigo=0
let intervalo
let mimokepon

let mapabackground =new Image()
mapabackground.src='./img/mapa.png'

/**CLASE DE CANVAS */
const sectionMap=document.getElementById('ver-map')
const mapa=document.getElementById('mapa')
let lienzo=mapa.getContext("2d")



class Mokepon{
     /* Todas las clases se comienzan con mayuscula el nombre de la clase */
     constructor(nombre, foto, vida, fotoMapa, x=400, y=400){
          /**Atributos que tendran los personajes */
          this.nombre=nombre
          this.foto=foto
          this.vida=vida
          this.ataques=[]
          this.x=x
          this.y=y
          this.ancho=40
          this.alto=40
          this.mapaFoto=new Image()
          this.mapaFoto.src=fotoMapa
          this.velocidadx=0
          this.velocidady=0
     }
     pintarMokepon(){
          lienzo.drawImage(
               this.mapaFoto,
              this.x,
              this.y,
              this.ancho,
              this.alto
              )
     }
}
let hipodogue=new Mokepon('Hipodogue','./img/hipodogue.png',5,'./img/hipodoguehead.png')

let capipepo=new Mokepon('Capipepo','./img/capipepo.png',5,'./img/capipepohead.png')

let ratigueya=new Mokepon('Ratigueya','./img/ratigueya.png',5,'./img/ratigueyahead.png')

let hipodogueEnemigo=new Mokepon('Hipodogue','./img/hipodogue.png',5,'./img/hipodoguehead.png',530,120)

let capipepoEnemigo=new Mokepon('Capipepo','./img/capipepo.png',5,'./img/capipepohead.png',400,30)

let ratigueyaEnemigo=new Mokepon('Ratigueya','./img/ratigueya.png',5,'./img/ratigueyahead.png',700,200)

/**ARRAYS */
/* mokepones.push(hipodogue,capipepo,ratigueya) /**SIRVE PARA GUARDAR EN UNA VARIABLE TODOS LOS OBJTOS QUE SON DE INTERES */

hipodogue.ataques.push(
     {nombre:'AGUA!', id:'btn-agua'},
     {nombre:'AGUA!', id:'btn-agua'},
     {nombre:'AGUA!', id:'btn-agua'},
     {nombre:'FUEGO!', id:'btn-fuego'},
     {nombre:'TIERRA!', id:'btn-tierra'}
)
hipodogueEnemigo.ataques.push(
     {nombre:'AGUA!', id:'btn-agua'},
     {nombre:'AGUA!', id:'btn-agua'},
     {nombre:'AGUA!', id:'btn-agua'},
     {nombre:'FUEGO!', id:'btn-fuego'},
     {nombre:'TIERRA!', id:'btn-tierra'}
)
capipepo.ataques.push(
     {nombre:'TIERRA!', id:'btn-tierra'},
     {nombre:'TIERRA!', id:'btn-tierra'},
     {nombre:'TIERRA!', id:'btn-tierra'},
     {nombre:'AGUA!', id:'btn-agua'},
     {nombre:'FUEGO!', id:'btn-fuego'}
)
capipepoEnemigo.ataques.push(
     {nombre:'TIERRA!', id:'btn-tierra'},
     {nombre:'TIERRA!', id:'btn-tierra'},
     {nombre:'TIERRA!', id:'btn-tierra'},
     {nombre:'AGUA!', id:'btn-agua'},
     {nombre:'FUEGO!', id:'btn-fuego'}
)
ratigueya.ataques.push(
     {nombre:'FUEGO!', id:'btn-fuego'},
     {nombre:'FUEGO!', id:'btn-fuego'},
     {nombre:'FUEGO!', id:'btn-fuego'},
     {nombre:'AGUA!', id:'btn-agua'},
     {nombre:'TIERRA!', id:'btn-tierra'}
)
ratigueyaEnemigo.ataques.push(
     {nombre:'FUEGO!', id:'btn-fuego'},
     {nombre:'FUEGO!', id:'btn-fuego'},
     {nombre:'FUEGO!', id:'btn-fuego'},
     {nombre:'AGUA!', id:'btn-agua'},
     {nombre:'TIERRA!', id:'btn-tierra'}
)

/**Clase de iteradores */

mokepones.push(hipodogue,capipepo,ratigueya)

function iniciar(){
     
     seleccionarAtaque.style.display='none'
     sectionMap.style.display='none'

/**Metodo para recorrer nuestros arreglos ForEach que significa por cada uno */
     
      mokepones.forEach((Mokepon)=>{
          opcionMokepones=`
          <input type="radio" id=${Mokepon.nombre} name="mascota">
          <label class="tarjetas" for=${Mokepon.nombre}><p>${Mokepon.nombre}</p><img src=${Mokepon.foto} alt=${Mokepon.nombre}></label>
          `
          contenedorTarjetas.innerHTML+=opcionMokepones

          inh = document.getElementById('Hipodogue')
          inc = document.getElementById('Capipepo')
          inr = document.getElementById('Ratigueya')
     })

     btnmascotajug.addEventListener('click', slc)
     
/*      btnfuego.addEventListener('click',ataquefuego)

     
     btnagua.addEventListener('click',ataqueagua)

     
     btntierra.addEventListener('click',ataquetierra) */
  
     botonreinicio.style.display='none'

    
     btnreiniciar.addEventListener('click',reinicio)

     unirseAlJuego()
}

function unirseAlJuego(){
     fetch("http://localhost:8080/unirse")
     .then(function(res){
          console.log(res)
          if(res.ok){
               res.text()
                    .then(function(respuesta){
                         console.log(respuesta)
                    })
          }
     })
}

function slc(){
     //Para mostrar en pantalla lo ataques luego de seleccionar
   
    /* mostrarataque.style.display='flex'  */

    //PARA ESCONDER EN PANTALLA LA ELECCION DE MASCOTA
    
 

   if(inh.checked){
        nomjug.innerHTML=inh.id
        mascotajugador=inh.id

        /*         miniatura=`
        <p>Vidas</p>
        <p>${hipodogue.nombre}</p>
        <p id="vida-jug"></p> 
        <img src=${hipodogue.foto} alt=${hipodogue.nombre} id="miniaturas">
        `
        spanimagen.innerHTML=miniatura */

   }else if(inc.checked){
        nomjug.innerHTML=inc.id
        mascotajugador=inc.id

   }else if(inr.checked){
        nomjug.innerHTML=inr.id
        mascotajugador=inr.id
   }else{
        alert('Por favor, seleccciona una mascota')
        return
   }
   seleccionarMascota.style.display='none'
   extraerAtaques(mascotajugador)
   sectionMap.style.display='flex'
    
   iniciarmapa()
}

function extraerAtaques(mascotajugador){
     let ataques

          for (let i = 0; i < mokepones.length; i++) {
               if(mascotajugador===mokepones[i].nombre){
                         ataques=mokepones[i].ataques
               }
          }
          mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
     ataques.forEach((ataque)=>{
          ataquesMokepon=`
          <button id=${ataque.id} class="boton-de-ataque btnAtaque">${ataque.nombre}</button> 
          `
          contenedorAtaques.innerHTML+=ataquesMokepon
     })

     btnagua=document.getElementById('btn-agua')
     btntierra=document.getElementById('btn-tierra')
     btnfuego=document.getElementById('btn-fuego')

     botones=document.querySelectorAll('.btnAtaque')

  /*    btnfuego.addEventListener('click',ataquefuego)  
     btnagua.addEventListener('click',ataqueagua)  
     btntierra.addEventListener('click',ataquetierra) */

}

function secuenciaAtaques(){
     botones.forEach((boton)=>{

          boton.addEventListener('click',(e)=>{

               if(e.target.textContent==='AGUA!'){
                    attackjugador.push('AGUA!')
                    console.log(attackjugador)
                    boton.style.background='#112f58'
                    boton.style.color='#5D6D7E'
                    boton.style.cursor='default'
                    boton.disabled=true

               }else if(e.target.textContent==='FUEGO!'){
                    attackjugador.push('FUEGO!')
                    console.log(attackjugador)
                    boton.style.background='#112f58'
                    boton.disabled=true
                    boton.style.color='#5D6D7E'
                    boton.style.cursor='default'

               }else{
                    attackjugador.push('TIERRA!')
                    console.log(attackjugador)
                    boton.style.background='#112f58'
                    boton.disabled=true
                    boton.style.color='#5D6D7E'
                    boton.style.cursor='default'
               }
               ataqueAleatorioEnemigo()
          })
     })
     
}

function slcenemigo(enemigo){

     nomen.innerHTML=enemigo.nombre
     ataquesMokeponEnemigo=enemigo.ataques
     secuenciaAtaques()
     
/*      if(masaleatorio==1){
          nomen.innerHTML='Hipodogue'
     }else if(masaleatorio==2){
          nomen.innerHTML='Capipepo'
     }else{
          nomen.innerHTML='Ratigueya'
     } */
}

/* function ataquefuego(){
     ataquejugador='FUEGO!'
     ataqueAleatorioEnemigo()
}

function ataqueagua(){
     ataquejugador='AGUA!'
     ataqueAleatorioEnemigo()
}

function ataquetierra(){
     ataquejugador='TIERRA!'
     ataqueAleatorioEnemigo()
} */

function ataqueAleatorioEnemigo(){
     let attack=aleatorio(0,ataquesMokeponEnemigo.length -1)

     if(attack==0 || attack==1){
          ataqueenemigo.push('FUEGO!')
     }else if(attack==3||attack==4){
          ataqueenemigo.push('AGUA!')
     }else{
          ataqueenemigo.push('TIERRA!')
     }
     console.log(ataqueenemigo)
     iniciarbatalla()
}


function iniciarbatalla(){
     if(attackjugador.length===5){
          combate()
     }
}

function combate(){
     
     for (let index = 0; index < attackjugador.length; index++) {
     
               if(attackjugador[index]===ataqueenemigo[index]){
                    indexOponentes(index,index)
                    crearMensaje("HAY UN EMPATE EN ESTA RONDA")   
               }else if(attackjugador[index]=='FUEGO!'&&ataqueenemigo[index]=='TIERRA!'){
                    indexOponentes(index,index)
                    crearMensaje("HAS GANADOOO LA RONDA!!")
                    victoriasJugador++
                    spanvidajug.innerHTML=victoriasJugador
               }else if(attackjugador[index]=='TIERRA!'&&ataqueenemigo[index]=='AGUA!'){
                    indexOponentes(index,index)
                    crearMensaje("HAS GANADOOO LA RONDA!!")
                    victoriasJugador++
                    spanvidajug.innerHTML=victoriasJugador
               }else if(attackjugador[index]=='AGUA!'&&ataqueenemigo[index]=='FUEGO!'){
                    indexOponentes(index,index)
                    crearMensaje("HAS GANADOOO LA RONDA!!")
                    victoriasJugador++
                    spanvidajug.innerHTML=victoriasJugador
               }else{
                    indexOponentes(index,index)
                    crearMensaje("HAS PERDIDO! LA RONDA :( ")
                    victoriasEnemigo++
                    spanvidaene.innerHTML=victoriasEnemigo
               }
     }

     checkvidas()

     /* if(ataqueenemigo==ataquejugador){
         crearMensaje("HAY UN EMPATE EN ESTA RONDA")
      } else if(ataquejugador=='FUEGO!'&&ataqueenemigo=='TIERRA!'){
          crearMensaje("HAS GANADOOO LA RONDA!!")
          vidaenemigo--
          spanvidaene.innerHTML=vidaenemigo
      }else if(ataquejugador=='TIERRA!'&&ataqueenemigo=='AGUA!'){
          crearMensaje("HAS GANADOOO LA RONDA!!")
          vidaenemigo--
          spanvidaene.innerHTML=vidaenemigo
      }else if(ataquejugador=='AGUA!'&&ataqueenemigo=='FUEGO!'){
          crearMensaje("HAS GANADOOO LA RONDA!!")
          vidaenemigo--
          spanvidaene.innerHTML=vidaenemigo
      }else{
          crearMensaje("HAS PERDIDO! LA RONDA :( ")
          vidajugador--
          spanvidajug.innerHTML=vidajugador
      } */
}

function indexOponentes(jugador,enemigo){

     indexAtaqueJugador=attackjugador[jugador]
     indexAtaqueEnemigo=ataqueenemigo[enemigo]
}


function crearMensaje(resbatalla){
     /*      let sectionmsj=document.getElementById('mensaje') */
          
          let notificacion=document.createElement('p')
          let newAtaqueJugador=document.createElement('p')
          let newAtaqueEnemigo=document.createElement('p')
     
          sectionmsj.innerHTML=resbatalla
     
          newAtaqueJugador.innerHTML=indexAtaqueJugador
          newAtaqueEnemigo.innerHTML=indexAtaqueEnemigo
     
          
          /* let parrafo=document.createElement('p')
          parrafo.innerHTML='Has atacado con '+ataquejugador+'.La mascota del enemigo atacó con '+ataqueenemigo+'-->'+resbatalla
      */
          ataqueDelJugador.appendChild(newAtaqueJugador)
          ataqueDelEnemigo.appendChild(newAtaqueEnemigo)
     }


function checkvidas(){
     
     if(victoriasJugador===victoriasEnemigo){
          endgame("HAY UN EMPATE EN LA PARTIDA!🤡")
          mostrarReinicio.style.display='block'
     }else if(victoriasJugador>victoriasEnemigo){
     endgame("HAS GANADOOOOO LA PARTIDA!🙊")
     mostrarReinicio.style.display='block'
     }else if(victoriasJugador<victoriasEnemigo){
          endgame("HAS PERDIDO LA PARTIDA!☠️")
          mostrarReinicio.style.display='block'
     }
}

function endgame(resultadofinal){
     /*   let parrafo=document.createElement('p') */
       sectionmsj.innerHTML=resultadofinal
  
      /*  sectionmsj.appendChild(parrafo) */
       
/*        btnfuego.disabled=true
  
      
       btnagua.disabled=true
  
       
       btntierra.disabled=true*/
  }

function reinicio(){
     location.reload() //Recargar la pagina
}

function aleatorio(min,max){
     return Math.floor(Math.random()*(max-min+1)+min)
}
function pintarCanvas(){

     mimokepon.x=mimokepon.x+mimokepon.velocidadx
     mimokepon.y=mimokepon.y+mimokepon.velocidady
     lienzo.clearRect(0,0,mapa.width, mapa.height)
     lienzo.drawImage(
          mapabackground,
          0,
          0,
          mapa.width,
          mapa.height
     )

     mimokepon.pintarMokepon()
     hipodogueEnemigo.pintarMokepon()
     capipepoEnemigo.pintarMokepon()
     ratigueyaEnemigo.pintarMokepon()
     if(mimokepon.velocidadx!==0||mimokepon.velocidady!=0){
          revisarChoque(hipodogueEnemigo)
          revisarChoque(capipepoEnemigo)
          revisarChoque(ratigueyaEnemigo)
     }
}

function moverDerecha(){
     mimokepon.velocidadx=5

}
function moverIzquierda(){
     mimokepon.velocidadx=-5
     
}
function moverAbajo(){
     mimokepon.velocidady=5
     
}
function moverArriba(){
     mimokepon.velocidady=-5
     
}
function detenerMovimiento(){
     mimokepon.velocidadx=0
     mimokepon.velocidady=0
}
function pressBtn(event){
     switch (event.key) {
          case 'ArrowUp':
               moverArriba()
               break;
          case 'ArrowDown':
               moverAbajo()
               break;
          case 'ArrowLeft':
               moverIzquierda()
               break;
          case 'ArrowRight':
               moverDerecha()
               break;         
          default:
               break;
     }
}
function iniciarmapa(){
     mapa.width=800
     mapa.height=450
     mimokepon=obtenerMascota(mascotajugador)

     intervalo=setInterval(pintarCanvas,50)
    window.addEventListener('keydown',pressBtn)
    window.addEventListener('keyup',detenerMovimiento)
}
function obtenerMascota(){
     for (let i = 0; i < mokepones.length; i++) {
          if(mascotajugador===mokepones[i].nombre){
                    return mokepones[i]
          }
     }
}
function revisarChoque(enemigo){

     const arribaEnemigo=enemigo.y
     const abajoEnemigo=enemigo.y+enemigo.alto
     const derechaEnemigo=enemigo.x+enemigo.ancho
     const izquierdaEnemigo=enemigo.x

     const arribaMascota=mimokepon.y
     const abajoMascota=mimokepon.y+mimokepon.alto
     const derechaMascota=mimokepon.x+mimokepon.ancho
     const izquierdaMascota=mimokepon.x

     if(
          abajoMascota<arribaEnemigo||
          arribaMascota>abajoEnemigo||
          derechaMascota<izquierdaEnemigo||
          izquierdaMascota>derechaEnemigo
     ){
          return;
     }
     detenerMovimiento()
     clearInterval(intervalo)
     mostrarataque.style.display='flex' 
     sectionMap.style.display='none'
     slcenemigo(enemigo)
}
window.addEventListener('load', iniciar) //Inicia despues de que carga todo el HTML
