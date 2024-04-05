
const express = require('express')
const cors = require('cors')

const App = express()

App.use(cors())
App.use(express.json())
let notes = [
  {
    "id":1,
    "content":"esto es contenido 1 reloaded",
    "date":"dia 1",
    "important": true
  },
  {
    "id":2,
    "content":"esto es contenido 2",
    "date":"dia 2",
    "important": false
  },
  {
    "id":3,
    "content":"esto es contenido 3",
    "date":"dia 3",
    "important": false
  }
]

//const app = http.createServer((requesT, response) => {
//  response.writeHead(200, { 'Content-Type': 'application/json' })
//  response.end(JSON.stringify(notes))
//})

App.get('/',(request,response) => {
  response.send('<h1>Hello world </h1>')
})

App.get('/api/notes',(request,response) => {
  response.json(notes)
})

App.get('/api/notes:id',(request,response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)

  if(note){
    response.json(note)
  }
  else {
    response.status(404).end()
  }
})

App.post('/api/notes',(request,response) =>{
  const note = request.body

  
  const ids = notes.map(note => note.id)
  const maxId = Math.max(...ids)

  const newNote = {
    id: maxId + 1,
    content: note.content,
    date: new Date().toISOString(),
    important: typeof note.important !== 'undefined' ? note.important : false,
  }

  notes = [...notes,newNote]
  response.json(newNote)
})

App.delete('/api/notes:id',(request,response) => {
  const id = Number(request.params.id)
  const notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})


const PORT = 3001
App.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

