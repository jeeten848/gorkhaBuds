import Image from 'next/image'
import React from 'react'
import Waterproof from '../../public/images/waterproof.png'


export default function Section2() {
  return (
    <div className="container">
    <div className="section2">
      <div className='div1'>
      <h2>Range of products hello hi buy now</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo sequi assumenda, tempore omnis voluptate eum incidunt nam, mollitia similique totam quos sunt quae beatae deleniti tempora dolorum molestias! Ea, obcaecati.
        </p>
      </div>
      <div>
      <Image
          src={Waterproof}
          alt='gorkha buds'
          width={500}
          // height={500}
        />
      </div>
      <div className='div3'>
      <h2>Range of products hello hi buy now</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo sequi assumenda, tempore omnis voluptate eum incidunt nam, mollitia similique totam quos sunt quae beatae deleniti tempora dolorum molestias! Ea, obcaecati.
        </p> 
      </div>
    </div>
  </div>
  )
}
