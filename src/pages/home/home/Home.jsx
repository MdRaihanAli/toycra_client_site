import React from 'react'
import Carosel from './Carosel'
import ShopFormality from './ShopFormality'
import Galery from './Galery'
import Categoris from './Categoris'

function Home() {
  return (
    <div>
        <Carosel></Carosel>
        <ShopFormality></ShopFormality>
        <Galery></Galery>
        <Categoris></Categoris>
    </div>
  )
}

export default Home