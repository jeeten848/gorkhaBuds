'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard() {




    

    return (
    <div className="productCard">

        <div className="grid3">

            
            <div className="pCard" id='firstProduct'>
                <Link href='./gorkhabuds-air'>
                <div className="heading">
                    <h3>GorkhaBuds air</h3>
                    <h4>Rs 2499</h4>
                </div>
                <div className="imgBox">
                    <Image src="https://s.alicdn.com/@sc04/kf/H0bcfcef60379430e8e415a4c259e3132b.jpg_960x960.jpg" alt='GorkhaBuds air earbuds' width={350} height={350} />
                </div>
                <div className="colors">
                    <div className="green"></div>
                    <div className="royalBlue"></div>
                    <div className="black"></div>
                </div>
                </Link>
            </div>
            

            <div className="pCard" id='secondProduct'>
                <Link href='./gorkhabuds-air'>
                <div className="heading">
                    <h3>GorkhaBuds air</h3>
                    <h4>Rs 2499</h4>
                </div>
                <div className="imgBox">
                    <Image src="https://s.alicdn.com/@sc04/kf/H0bcfcef60379430e8e415a4c259e3132b.jpg_960x960.jpg" alt='GorkhaBuds air earbuds' width={350} height={350} />
                </div>
                <div className="colors">
                    <div className="green"></div>
                    <div className="royalBlue"></div>
                    <div className="black"></div>
                </div>
                </Link>
            </div>
            

            <div className="pCard"  id='thirdProduct'>
                <Link href='./gorkhabuds-air'>
                <div className="heading">
                    <h3>GorkhaBuds air</h3>
                    <h4>Rs 2499</h4>
                </div>
                <div className="imgBox">
                    <Image src="https://s.alicdn.com/@sc04/kf/H0bcfcef60379430e8e415a4c259e3132b.jpg_960x960.jpg" alt='GorkhaBuds air earbuds' width={350} height={350} />
                </div>
                <div className="colors">
                    <div className="green"></div>
                    <div className="royalBlue"></div>
                    <div className="black"></div>
                </div>
                </Link>
            </div>
            
        </div>
   </div>
  )
}
