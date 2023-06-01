import React from 'react'
import Waterproof from '../../../public/images/waterproof.png'
import Image from 'next/image'
import styles from './styles.module.css'

export default function page() {
  return (
    <div className={styles.detailsPage}>

      <div className={styles.topDetails}>

        <div className={styles.topImages}>
          <div className={styles.smallImageBox}>
            <Image src={Waterproof} alt="gorkha earbuds" className={styles.activeImg} />
            <Image src={Waterproof} alt="gorkha earbuds" />
            <Image src={Waterproof} alt="gorkha earbuds" />
            <Image src={Waterproof} alt="gorkha earbuds" />
            <Image src={Waterproof} alt="gorkha earbuds" />
          </div>
          <div className={styles.mainImageBox}>
            <Image src={Waterproof} alt="gorkha earbuds" />
          </div>
        </div>

        <div className={styles.descBox}>
          <span className={styles.label}>New</span>
          <h1>Gorkha Air Earbuds </h1>
          <h5>Perfect fit, perfect sound</h5>
          <h3>Rs 2499</h3>
          <h4>Color: <i>Royal blue</i></h4>
          <div className={styles.colors}>
            <div className="royalBlue"></div>
            <div className="black"></div>
            <div className="white"></div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.buyNow}> Buy Now</button>
            <button className={styles.cart}> Add to Cart </button>
          </div>
          <div className={styles.features}>
            <div>
              <div className={styles.icon}>
                <Image src={Waterproof} alt="gorkha earbuds" />
              </div>
              <div className={styles.more}>
                <h3>More interesting lines</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, at.</p>
              </div>
            </div>
            <div>
              <div className={styles.icon}>
                <Image src={Waterproof} alt="gorkha earbuds" />
              </div>
              <div className={styles.more}>
                <h3>More interesting lines</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, at.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.midDetails}>
        <div>hello hell ohello world</div>
        <div>hello hell ohello world</div>
        <div>hello hell ohello world</div>
        <div>hello hell ohello world</div>
        <div>hello hell ohello world</div>
        <div>hello hell ohello world</div>
      </div>

    </div>
  )
}
