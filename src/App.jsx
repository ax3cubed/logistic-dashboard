import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
    <div className=''>
      <figure class="bg-amber-50 rounded-xl p-8 dark:bg-yellow-950">
        <img class="w-24 h-24 rounded-full mx-auto hover:animate-pulse" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="" width="384" height="512"/>
          <div class="pt-6 space-y-4 text-white">
            <blockquote>
              <p class="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div>
                Sarah Dayan
              </div>
              <div>
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
      </figure>
    </div>
  )
}

export default App
