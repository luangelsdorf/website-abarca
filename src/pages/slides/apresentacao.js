import React from 'react'
import Slides from 'src/components/presentation/Slides'

export default function Presentation() {
  return (
    <Slides>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTEeKV7zBpO2obYCKafc3Rcdx0pUyNMb3tB0l_pKHClKRNWHYGS5sx6wHvolsAIZ-NEkhbLMx7hKEMK/embed?start=false&loop=false&delayms=60000"
        frameborder="0"
        width="3166"
        height="1810"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      />
    </Slides>
  )
}