import React from 'react'
import Image from 'next/image'
import J18 from '../../public/images/j18 blue.jpg'

export default function Features() {
  return (
    <div className='featuresBox'>
        <div>
            <div>Premium Quality</div>
            <div>Touch Controls</div>
            <div>IPv4 waterproof</div>
            <div>Bluetooth 5.1 or more</div>
        </div>

        <div>
            <Image src={J18} alt='J1 earbuds' />
        </div>

        <div>
            <div>Bluetooth 5.1 or more</div>
            <div>Active Noise Cancellation</div>
            <div>Easy Fit in Ear</div>
            <div>Powerful Battery Backup</div>
        </div>
    </div>
  )
}
