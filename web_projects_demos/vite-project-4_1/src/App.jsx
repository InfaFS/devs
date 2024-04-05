import { useState, useEffect } from 'react'
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red&json=true`
const CANT_ENDPOINT_IMAGE_URL_PREFIX= 'https://cataas.com/cat'
export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')
    console.log(firstThreeWords)
    fetch(`https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        console.log(response)

        const url = `/says/${firstThreeWords}?fontSize=50&fontColor=blue`
        setImageUrl(url)
        console.log(imageUrl)
      })
  }, [fact])

  return (
    <main>
      <h1>Prueba de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CANT_ENDPOINT_IMAGE_URL_PREFIX}${imageUrl}`} alt={`Image extracted with ${fact}`} />}
      </section>
    </main>

  )
}
