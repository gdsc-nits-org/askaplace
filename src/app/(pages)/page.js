/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import styles from "./homePage.module.scss"
import Image from "next/image"
import cards from "../../../public/data/cards.json"

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
    <div className={styles.title}><h1 >Make Your <span className={styles.titleDestination}>Destination</span></h1></div>
    <div><button className={styles.btn}>Views All <span><Image className={styles.image} width={10} height={10} src="/images/Vector.png" alt="image"/></span></button></div>
    </div>
    <div className={styles.devGrid}>
        {cards.map((card)=>{
          return(
            <div className={styles.card}>
            <img src={card.image} alt="image" />
                <div className={styles.cardContent}>
                  <h3 className={styles.placeName}>{card.placeName}</h3>
                  <p className={styles.description1}>{card.description1}</p>
                  <p className={styles.description2}>{card.description2}</p>
                  <div className={styles.cardInfo}>
                  <p className={styles.location}>{card.location}</p>
                  <p className={styles.rating}>{card.rating}</p>
                  </div>
                  <div className={styles.cardDetail}>
                  <p className={styles.time}>{card.time}</p>
                  <p className={styles.price}>{card.price}</p>
                  </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Home