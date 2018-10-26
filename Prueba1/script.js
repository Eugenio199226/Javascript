//PRIMER sCRIPT
/*var n1=3;
var n2=5;
var n3=9;
var sagas_jojo=["Phantom Blood","Battle Tendency","Stardust Crusaders","Diamond is Unbrekable","Vento Aureo","Stone Ocean","Steel Ball Run","Jojolion"];
var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var mascotitas=[];
let i=0;
/*for(let i=0;i<sagas_jojo.length;i++){
        console.log(sagas_jojo[i]);
}
for(i=0;i<1000;i++)
{
    mascotitas[i]="mascotita_"+(i+1);
    console.log("Tu mascota ",i+1,"ha sido añadida");
}
    console.log(mascotitas);
for(i=0;i<1000;i++)
{
    if(i==0)
    {
        console.log("La mascota "+mascotitas[i]+" no tiene hermanos")
    }else
    {
        console.log("La mascota "+mascotitas[i]+" es hermano de la mascota "+ mascotitas[i-1])
    }
}
i=0;
while(i<1000)
{
    if(i==0)
    {
        console.log("La mascota "+mascotitas[i]+" no tiene hermanos")
    }else
    {
        console.log("La mascota "+mascotitas[i]+" es hermano de la mascota "+ mascotitas[i-1])
    }
    i++;
}
/*

if(n1>n2 &&  n1>n3)
{

    console.log(n1);
}else if(n2>n3)
{
    console.log(n2);
}else{console.log(n3);}


if(bar>dio &&  bar>budo)
{   
    if(dio>budo)
    {
        console.log(bar,dio,budo);
    }
    else{
        console.log(bar,budo,dio);
    }
}else if(dio>budo)
{
    if(bar>budo)
    {
        console.log(dio,bar,budo);
    }
    else{
        console.log(dio,budo,bar);
    }
}else{
        console.log(budo,dio,bar);
    }

*/
function generarNombre(Nombre,Apellido)
{
    return Nombre+" "+Apellido;
}
u1_name="Eugenio";
u1_usuario="Del Rey Millán";

u2_name="Dio";
u2_usuario="Brando";

u3_name="Aitor";
u3_usuario="Tilla";

function operarNumeros(num1,num2,op)
{
    if(op=="+")
    {
        return num1+num2;
    }
    else if(op=="-")
    {
        if(num1>=num2)
                {
                    return num1-num2;
                }else
                {
                    return num2-num1;
                }
        
    }
    else if(op=="*")
    {
        if(num1==0)
        {
            num1=1
        }
        else if(num2==0)
        {
            num2=1
        }
        return num1*num2;
    }
    else if(op=="/")
    {
        if(num1==0)
        {
            num1=1
        }
        else if(num2==0)
        {
            num2=1
        }
            return num1/num2;
    }
}
console.log(operarNumeros(4,8,"-"));
console.log(operarNumeros(4,8,"+"));
console.log(operarNumeros(4,8,"*"));
console.log(operarNumeros(4,8,"/"));
console.log(operarNumeros(4,0,"/"));

console.log("Y ahora con un FOR:");

var operandos=["+","-","*","/"];

for(i=0;i<4;i++)
{
    console.log(operarNumeros(4,8,operandos[i]));
}

const operarnumeros2=function(Numbs,op)
{
   let resultado=0;
        for(let i=0;i<Numbs.length;i++)
        {
            resultado=operarNumeros(resultado,Numbs[i],op);

            /*if(op=="+")
            {
                resultado= resultado+Numbs[k];
            }
            else if(op=="-")
            {       
                if(Numbs[k]>=resultado)
                {
                    resultado= Numbs[k]-resultado;
                }else
                {
                    resultado= resultado-Numbs[k];   
                }
                                
            }
            else if(op=="*")
            {
                if(resultado==0 && k==0)
                {
                    resultado=1;
                }

                resultado= resultado*Numbs[k];
            }
            else if(op=="/")
            {
                if(resultado==0 && k==0)
                {
                    resultado=1;
                }
                if(Numbs[k]==0)
                {
                    resultado= resultado/1;
                }else
                {
                    resultado= resultado/Numbs[k];
                }
                
                
            }*/
        }
            return resultado;
    }

    var Numeros=[1,2,3,4,5,6,7,8,9,10,100,18,99,3,55,1,1,33,5,200,33,88,1994,35];

//Funcion anonima//
(function ()
{

    //Dentro de ella invoca otra funcion que no es anonima pero está declarada en una variable const
    for(i=0;i<4;i++)
    {
        console.log("el valor de:",operandos[i],"es: ",operarnumeros2(Numeros,operandos[i]));
    }
}());

//RECURSIVIDAD\\
function potencia(param,loop)
{
  if(loop>0)
  {

      return potencia(param*param,loop-1);
  }else
  {
      return param;
  }
}
console.log("el resultado de la potencia es",potencia(2,3));
//_________________________________________________________---------------------------------------//

//OBjetos

let jasonVorgees= {
    nombre: 'Jason',
    apellido: 'Vorgees',
    email: 'cristallake@asesino.com',
    edad: 'desconocida',
    hobbits:'matar excursionistas',
    matar:function()
    {
        return "!!!!!Esperabas una respuesta de "+this.nombre+" pero era yo DIO¡¡¡¡";
    }
};

let fred= {
    nombre: 'Freddy',
    apellido: 'Krueger',
    email: 'CalleElm@asesino.com',
    edad: 'desconocida',
    hobbits:'matar adolescentes en sus sueños'
};

///Estudiantes///
let estudiante1=
{
    nombre:"Eugenio",
    apellido:"Del Rey Millán",
    edad:26,
    show:function(){
        return"Nombre del estudiante "+estudiante1.nombre+" Apellidos: "+estudiante1.apellido+" Edad: "+estudiante1.edad;
    }
};

let estudiante2=
{
    nombre:"Ana",
    apellido:"Carmona",
    edad:25,
    show:function(){
        return"Nombre del estudiante "+estudiante2.nombre+" Apellidos: "+estudiante2.apellido+" Edad: "+estudiante2.edad;
    }
};
let estudiante3=
{
    nombre:"Rodolfo",
    apellido:"Chiquilicuatre",
    edad:40,
    show:function(){
        return"Nombre del estudiante "+estudiante3.nombre+" Apellidos: "+estudiante3.apellido+" Edad: "+estudiante3.edad;
    }
};
let estudiantes=[estudiante1,estudiante2,estudiante3];
//en matriz

    estudiantes.forEach(function(estudiante) {
        console.log(estudiante.show());
    });


//En clase
clase=[
    {
        nombre:"Eugenio",
        apellido:"Del Rey Millán",
        edad:26,
        show:function(){
            return"Nombre del estudiante "+estudiante1.nombre+" Apellidos: "+estudiante1.apellido+" Edad: "+estudiante1.edad;
        }
    },
    {
        nombre:"Ana",
        apellido:"Carmona",
        edad:25,
        show:function(){
            return"Nombre del estudiante "+estudiante2.nombre+" Apellidos: "+estudiante2.apellido+" Edad: "+estudiante2.edad;
        }
    },
    {
        nombre:"Rodolfo",
        apellido:"Chiquilicuatre",
        edad:40,
        show:function(){
            return"Nombre del estudiante "+estudiante3.nombre+" Apellidos: "+estudiante3.apellido+" Edad: "+estudiante3.edad;
        }
    }
];

clase.forEach(function(estudiante) {
    console.log(estudiante.show());
});

for(i=0;i<clase.length;i++)
{
    console.log(clase[i].show());
}

let Persona = function(nombre,apellido,edad)
{
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.show=function(){
        return"Nombre del estudiante "+this.nombre+" Apellidos: "+this.apellido+" Edad: "+this.edad;
    }
}
console.log(Persona);
let espinete=new Persona("1","3",23);
console.log(espinete.show());

let Personas=
[
    new Persona("Benito","Camela",21),
    new Persona("Rosa","Melano",25),
    new Persona("Debora","Hombres",34)
];

/*Personas.forEach(function(persona)
{
    console.log(persona.show());
});*/

for(i=0;i<Personas.length;i++)
{
    console.log(Personas[i].show());
}

class Personal
{
    constructor(id,trabajador,cargo,años)
    {
        this.id=id;
        this.trabajador=trabajador;
        this.cargo=cargo;
        this.años=años;
    }

    showInfo()
    {
        
        return this.id+this.trabajador+this.cargo+this.años;
    }
}
let Trabajadores=[
    new Personal(23123213,'Ricardo',32),
    new Personal(245,'wqeqwe',22),
    new Personal(345,'344324',101)
];

for(i=0;i<Trabajadores.length;i++)
{
    console.log(Trabajadores[i].showInfo());
}

//DOOM
