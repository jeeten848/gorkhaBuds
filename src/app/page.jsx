import Image from "next/image";
import styles from "./page.module.css";
import Steps from "@/components/Steps";
import ProductCard from "@/components/ProductCard";
import Anc from "../../public/images/anc.svg";
import Leather from "../../public/images/leather.svg";
import TopView from "../../public/images/top view.jpg";
import Squares from "@/components/Squares";
import Features from "@/components/Features";
import Leather1 from "../../public/images/leather.webp";
import ThirdSmall from "../../public/images/thirdSmall.png";
import Long from "../../public/images/long.png";
import MainPhoto2 from "../../public/images/mainPhoto2.png";
import MainPhoto3 from "../../public/images/mainPhoto3.png";




export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.rightHero}>
        <div className={styles.imgBox}>
          <Image
            // src="https://ae01.alicdn.com/kf/Ha52427a86b4a4ee693c9c90f5248d9aad.jpg"
            src={Long}
            alt="gorkha buds"
            priority
          />
        </div>
        <div className={styles.descBox}>
          <div>
          <h1>GorkhaBuds - Best earbuds in Nepal</h1>
          <p>
            Welcome to GorkhaBuds, where we provide the best earbuds in Nepal.
            Our earbuds are designed to provide you with the ultimate audio
            experience, whether you are on the go or relaxing at home. Our
            earbuds are also incredibly durable, so you can trust that they will
            last for years to come.
          </p>
          <button className={styles.button1}>View Products</button>
          </div>
        </div>
      </div>
      
      <ProductCard />


      <div className={styles.leftHero}>
        <div className={styles.descBox}>
          <h2>GorkhaBuds - Best earbuds in Nepal</h2>
          <p>
            Welcome to GorkhaBuds, where we provide the best earbuds in Nepal.
            Our earbuds are designed to provide you with the ultimate audio
            experience, whether you are on the go or relaxing at home. They are
            perfect for use during workouts, travel, or any other activity where
            you need high-quality sound.
          </p>
          <button className={styles.button1}>View Products</button>
        </div>
        <div className={styles.imgBox}>
          <Image
            src={MainPhoto2}
            alt="gorkha buds"
            width={200}
            height={200}
          />
        </div>
      </div>

      

      <Squares />



      <div className="ancBox">
        <h2>Active Noise Cancellation</h2>
        <h4>on every earbuds</h4>
        <Image
          priority
          src={Anc}
          alt="GorkhaBuds - Active Noise Cancellation"
          className="ancImage"
        />
      </div>

      <Features />


      <div className="leatherBox ancBox">
        <h2>Active Noise Cancellation</h2>
        <h4>on every earbuds</h4>

        <Image
          priority
          src={Leather}
          alt="GorkhaBuds - Active Noise Cancellation"
        />
      </div>

      <Steps />
    </main>
  );
}
