import React from 'react'
import Carosel from './Carosel'
import ShopFormality from './ShopFormality'
import Galery from './Galery'
import Categoris from './Categoris'
import ExtraSection from './ExtraSection'
import Footer from '../../sheare/Footer'

function Home() {
  const handelTitle=()=>{
    document.title = 'Home Page--Toycra'
}
handelTitle()
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