let firstName = 'Enrique'
let lastName = 'Castillo'
let country = 'Mexco'
let city = 'Playa el Carmen'
let age = 1
let isMarried = false
let year = 2024

//usar typeof para saber que tipo de dato son
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

console.log(typeof '10' === 10) //false, el primero es string y el segundo es un int
console.log(parseInt('9.8') === 10) //true, parseInt convierte el texto en un dato numerico

console.log('booleanos que proporcionan valor verdadero')
console.log( 'a' === 'a')
console.log(20 === 20)
console.log(15 > 10)

console.log('booleanos que proporcionan valor falso')

console.log( age == year)
console.log(firstName == lastName)
console.log(10 < 30)




// 4 > 3 true
// 4 >= 3 true
// 4 < 3 flase
// 4 <= 3 false
// 4 == 4 true
// 4 === 4 true
// 4 != 4 false
// 4 !== 4 false
// 4 != '4' true
// 4 == '4’ true 
// 4 === '4’ false

console.log('usar consolo.log para comprobar si es true o false')
console.log(4 > 3 )
console.log(4 >= 3 )
console.log(4 < 3 )
console.log(4 <= 3 )
console.log(4 == 4 )
console.log(4 === 4 )
console.log(4 != 4 )
console.log(4 !== 4 )
console.log(4 != '4' )
console.log(4 == '4')
console.log(4 === '4')


//crear DATE y responder lo siguiente


console.log('What is the year today?')
const fecha = new Date; //creamos DATE
console.log(fecha.getFullYear()) //regresa el año actual

console.log('What is the month today as a number?')
console.log(fecha.getMonth()+1) //regresa el mes en numero


console.log('What is the date today?')
console.log(fecha.getDate()) //regresa el numero de dia del mes 

console.log('What day is today as a number?')
console.log(fecha.getDay()) //regresa el numero de dia de la semana

console.log('What are the hours now?')
console.log(fecha.getHours()) //regresa la hora

console.log('What are the minutes now?')
console.log(fecha.getMinutes()) //regresa el minuto actual

console.log('What areFind out the numbers of seconds elapsed from January 1, 1970, to now')

const miliseg = Math.floor(fecha.getTime()/1000);
console.log(miliseg) //get.time arroja milisegundos que han pasado desde 1970, usamos el divisior 1000 para convertirlo en segundos y el math.floor para redondearlo



//prompt que piden altura y base del triangulo
let base = prompt('Ingrese la base del triangulo')
let altura = prompt('Ingrese la altura del triangulo')

//formula de area del triangulo
let area = (base * altura)/2

console.log('El area es '+ area)


//prompt que pide la medida de los lados del triangulo
let a = prompt('Ingrese el valor del lado a')
let b = prompt('Ingrese el valor del lado b')
let c = prompt('Ingrese el valor del lado c')

//formula de perimetro de un triangulo
let perimetro = parseFloat(a) + parseFloat(b) + parseFloat(c)
console.log('El perimetro es ' + perimetro)



//Enrique Castillo Rodriguez TI31
