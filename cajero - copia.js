class billete {
  constructor(v,cant) {
    this.valor=v;
    this.cantidad=cant;
  }
}

/*function entregarDinero() {
  for(var i of caja){
    console.log(i);
  }
}*/

var caja=[];
var entregado=[]

caja.push(new billete(50,3) );
caja.push(new billete(20,2) );
caja.push(new billete(10,2) );


var dinero=100;
var resultado=0;
var billepapel=0;

var b=document.getElementById('btn');
b.addEventListener("click",entregarDinero);


function entregarDinero() {
  for(var i of caja){
    if(dinero>0){
      resultado=parseInt(dinero/i.valor);
      if(resultado>i.cantidad){
        billepapel=i.cantidad;
      }
      else {
        billepapel=resultado;
      }
      entregado.push(new billete(i.valor,billepapel));
      dinero=dinero-(i.valor*billepapel);
    }
  }
  console.log(entregado);
}
