import Image from 'next/image'
import styles from './page.module.css'
import Section2 from '@/components/Section2'
import Steps from '@/components/Steps'
import ProductCard from '@/components/ProductCard'
import Anc from '../../public/images/anc.svg'
import Waterproof from '../../public/images/waterproof.png'
import TopView from '../../public/images/top view.jpg'
import Squares from '@/components/Squares'
import Features from '@/components/Features'



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.leftHero}>
        <div className={styles.descBox}>
          <h1>Best wireless earbuds in Nepal</h1>
          <p>Welcome to GorkhaBuds, where we provide the best earbuds in Nepal. Our earbuds are designed to provide you with the ultimate audio experience, whether you are on the go or relaxing at home. They are perfect for use during workouts, travel, or any other activity where you need high-quality sound.</p>
          <button className={styles.button1}>View Products</button>
        </div>
        <div className={styles.imgBox}>
          <Image
            src="https://s.alicdn.com/@sc04/kf/Hd97edf4a42e44697a990384a03453bd92.jpg_960x960.jpg"
            alt='gorkha buds'
            width={200}
            height={200}
          />  
        </div>
      </div>

    <ProductCard />

    <div className={styles.rightHero}>
        <div className={styles.imgBox}>
          <Image
            // src="https://ae01.alicdn.com/kf/Ha52427a86b4a4ee693c9c90f5248d9aad.jpg"
            src={TopView}
            alt='gorkha buds'
            width={200}
            height={200}
          />  
        </div>
        <div className={styles.descBox}>
          <h2>Packaging photo goes here</h2>
          <p>Welcome to GorkhaBuds, where we provide the best earbuds in Nepal. Our earbuds are designed to provide you with the ultimate audio experience, whether you are on the go or relaxing at home. Our earbuds are also incredibly durable, so you can trust that they will last for years to come.</p>
          <button className={styles.button1}>View Products</button>
        </div>
      </div>
    
      <Section2 />


      <Squares />
    

     

    <div className="ancBox">

    <h2>Active Noise Cancellation</h2>
    <h4>on every earbuds</h4>

    <Image
      priority
      src={Anc}
      alt="GorkhaBuds - Active Noise Cancellation"
      />
    </div>
         
    <Features />
    
    <Steps />

    </main>
  )
}
