import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Diognal from "../../../public/images/diognal.jpg"

export default function page() {
  return (
    <div className={styles.productsPage}>

      
        <div className={styles.grid2}>
          <div className={styles.imgBox}>
            <Image src={Diognal} alt='Product1' />
          </div>
          <div></div>
          <div className={styles.descBox}>
            <h2>Gorkha Combat Earbuds</h2>
            <h4>Rs 2499</h4>
            <ul className={styles.features}>
              <li>Active Noise Cancelling (ANC) and Transparency mode</li>
              <li>IPv5 - waterproof</li>
              <li>Up to 6 hours of listening time3; 24 hours with charging case4</li>
              <li>Auto Play/Pause connection via Apple H1 chip</li>
            </ul>
            <div className={styles.colors}>
              <p>Colors</p>
              <ul>
                <li className='royalBlue'></li>
                <li className='royalGreen'></li>
                <li className='black'></li>
              </ul>
            </div>
            <div className={styles.buttons}>
              <Link href="./gorkhabuds-air"><button className="button1">VIEW DETAILS</button> </Link>
            </div>
          </div>
        </div>

        <div className={styles.grid2}>
          <div className={styles.imgBox}>
            <Image src={Diognal} alt='Product1' />
          </div>
          <div></div>
          <div className={styles.descBox}>
            <h2>Gorkha Combat Earbuds</h2>
            <h4>Rs 2499</h4>
            <ul className={styles.features}>
              <li>Active Noise Cancelling (ANC) and Transparency mode</li>
              <li>IPv5 - waterproof</li>
              <li>Up to 6 hours of listening time3; 24 hours with charging case4</li>
              <li>Auto Play/Pause connection via Apple H1 chip</li>
            </ul>
            <div className={styles.colors}>
              <p>Colors</p>
              <ul>
                <li className='royalBlue'></li>
                <li className='royalGreen'></li>
                <li className='black'></li>
              </ul>
            </div>
            <div className={styles.buttons}>
               <Link href="./gorkhabuds-air"><button className="button1">VIEW DETAILS</button> </Link>
            </div>
          </div>
        </div>

        <div className={styles.grid2}>
          <div className={styles.imgBox}>
            <Image src={Diognal} alt='Product1' />
          </div>
          <div></div>
          <div className={styles.descBox}>
            <h2>Gorkha Combat Earbuds</h2>
            <h4>Rs 2499</h4>
            <ul className={styles.features}>
              <li>Active Noise Cancelling (ANC) and Transparency mode</li>
              <li>IPv5 - waterproof</li>
              <li>Up to 6 hours of listening time3; 24 hours with charging case4</li>
              <li>Auto Play/Pause connection via Apple H1 chip</li>
            </ul>
            <div className={styles.colors}>
              <p>Colors</p>
              <ul>
                <li className='royalBlue'></li>
                <li className='royalGreen'></li>
                <li className='black'></li>
              </ul>
            </div>
            <div className={styles.buttons}>
              <Link href="./gorkhabuds-air"><button className="button1">VIEW DETAILS</button> </Link>
            </div>
          </div>
        </div>


    </div>
  )
}
