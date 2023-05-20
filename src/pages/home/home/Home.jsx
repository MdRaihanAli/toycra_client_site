import React from 'react'
import Carosel from './Carosel'
import ShopFormality from './ShopFormality'
import Galery from './Galery'
import Categoris from './Categoris'
import ExtraSection from './ExtraSection'

function Home() {
  return (
    <div className='bg_color'>
        <Carosel></Carosel>
        <ShopFormality></ShopFormality>
        <Galery></Galery>
        <Categoris></Categoris>
        <ExtraSection></ExtraSection>
        
    </div>
  )
}

export default Home