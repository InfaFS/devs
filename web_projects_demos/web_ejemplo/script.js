const firstName = 'Miguel'
console.log(firstName)
const firstNameMutated = firstName.toUpperCase()
console.log(firstNameMutated)

const lista = []
lista.push('Facu')
lista.push('Juti')
lista.forEach(value => value.toUpperCase)
console.log(lista)

const persona = {
  name: 'Facundo',
  twitter: '@facusilv1',
  age: 20,
  listita: ['hola', 'pepe']
}

const accedoCampo = 'listita'
console.log(persona)
console.log(persona[accedoCampo])

const add = (a, b) => {
  console.log(a)
  console.log(b)
  return a + b
}


const resultado = add(add(2, 2), add(2, 2))
console.log(resultado)
