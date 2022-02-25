var img=[];
img["100"]="cien.png"; // aca siempre lo q va dentro del corchete va entre comillas por mas q sea numero
img["50"]="50.png";
img["10"]="10.png";
class billete {             //GENERO CLASE BILLETE
  constructor(v,cant) {
    this.imagen=new Image();
    this.valor=v;
    this.cantidad=cant;
    this.imagen.src=img[this.valor];
  }
}

var caja=[3];  //es el vector que poseee los distintos billetes, como son 3 billetes diferentes, entonces el vector es de 3
var entregado=[3]; //es el vector que muestra, entrega los billetes que da el cajero, como son 3, el vector es de 3
var sold=0;

caja[0]=new billete(100,1000);  //aca cargo los datos del contructor.
caja[1]=new billete(50,1000);
caja[2]=new billete(10,1000);

//sold=(caja[0].valor*caja[0].cantidad)+(caja[1].valor*caja[1].cantidad)+(caja[2].valor*caja[2].cantidad);
//saldoInicial();
var dinero;  //esta variable es la q tendra lo q tiene la caja de extraccion (texto)
var resultado=0; //esta variable es la q contiene la cantidad de billete por valor de billete despues de realizar el algoritmo.
var billepapel=0; //esta variable contiene la cantidad de billetes
///////////////////////////////////////////////////
var cash= document.getElementById("resultado");
var b=document.getElementById('btn');
b.addEventListener("click",entregarDinero);      // aca me traigo los elementos q necesito del html y ademas llamo al evento
var sacar=document.getElementById('limpiar');
sacar.addEventListener("click",limpiarPagina);
var saldo=document.getElementById('saldo');
///////////////////////////////////////////////////

saldoInicial();    ////////// LLAMO A LA FUNCION PARA QUE ME DE EL SALDO DE LO Q TIENE EL CAJERO
saldo.innerHTML="EL SALDO DEL CAJERO ES: "+sold;

function entregarDinero() {             ////////// FUNCION CON EL ALGORITMO DE ENTREGA DE DINERO
  var texto=document.getElementById('dinero');
  dinero=parseInt(texto.value);
  for(var i=0;i<3;i++){
    if(dinero>0){
      resultado=parseInt(dinero/caja[i].valor);
      if(resultado>caja[i].cantidad){
        billepapel=caja[i].cantidad;
        caja[i].cantidad=caja[i].cantidad-billepapel;
      }
      else {
        billepapel=resultado;
        caja[i].cantidad=caja[i].cantidad-billepapel;
      }
      sold-=billepapel*caja[i].valor;
      entregado[i]=new billete(caja[i].valor,billepapel);
      dinero=dinero-(caja[i].valor*billepapel);
    }
  }
  if(dinero!=0){
    cash.innerHTML= "EN ESTE MOMENTO NO PODEMOS ENTREGAR ESTA SUMA DE DINERO";
  }
  else{
    for(var entre of entregado){   ////////////////////////////////// ACA REALICE UN FOR ESPECIAL, LA PALABRA "entre" la elegi yo,
      if(entre.cantidad>0){        ///////////////////////////////// CONTINUO LO DE ARRIBA. "entregado" ES LA ARRAY entregado[i],
        saldo.innerHTML="EL SALDO DEL CAJERO ES: $"+sold; /////////  EL "entre." HACE REFERENCIA AL VECTOR "entregado[]" OSEA SI
        cash.innerHTML+=entre.cantidad+" BILLETES DE $ "+entre.valor+"<br/>"; // ES LA SEGUNDA VUELTA DEL FOR EL "entre."
        cash.appendChild(entre.imagen);  /////////////////////////////////////  SERA EL "entregado [1]"
        cash.innerHTML+="</br>--------------------------"+"<br/>";
      } /////////  EL FOR ESTE Q TIENE "of" EN EL MEDIO RECORRE LA ARRAY COMPLETA ENTONCES SI LA ARRAY ES DE 3 `[3]` ENTONCES EL FOR
    }  ///////////////////////////////////// VA ARECCORRER 3 VUELTAS.
  }
}

function limpiarPagina()//funcion para vaciar o limpiar la pagina con el boton limpiar
{
cash.innerHTML = "";
entregado.length = 0;
}

function saldoInicial(){   //FUNCION PARA SACAR EL SALDO INICIAL DEL CAJERO.
  for(var i=0;i<3;i++){
    sold+=(caja[i].valor*caja[i].cantidad);
  }
}
