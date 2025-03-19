/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import styles from "./homePage.module.scss"
import Image from "next/image"
import cards from "../../../../public/data/cards.json"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faClock, faIndianRupeeSign, faMapMarkerAlt, faStar,  } from "@fortawesome/free-solid-svg-icons"
import StarRating from "../rating"
import {faHeart} from "@fortawesome/free-regular-svg-icons"
import { Carousel } from "~/components/Carousel/Carousel"



const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
    <div className={styles.title}><h1 >Make Your <span className={styles.titleDestination}>Destination</span></h1></div>
    <div><button className={styles.btn}>Views All <span><Image className={styles.image} width={10} height={10} src="/images/Vector.png" alt="image"/></span></button></div>
    </div>
    <div className={styles.devGrid} >
        {cards.map((card)=>{
          return(
            <div className={styles.card} key={String(card.id)} >
            <img src={card.image} alt="image" />
            {/* {like} */}
            <div className={styles.like}><FontAwesomeIcon icon={faHeart} width={25} height={25} color="green"/></div>
            {/* {rating box} */}
            <div className={styles.ratingBox}><FontAwesomeIcon icon={faStar} width={23} color="gold"/> {card.rating} <span className={styles.reviews}>({card.reviews} reviews)</span></div>
                <div className={styles.cardContent}>
                  <h3 className={styles.placeName}>{card.placeName}</h3>
                  <p className={styles.description1}>{card.description1}</p>
                  <p className={styles.description2}>{card.description2}</p>
                  <div className={styles.cardInfo}>
                  <p className={styles.location}><FontAwesomeIcon icon={faMapMarkerAlt} width={25} color="#00a845" />{card.location}</p>
                  <div className={styles.rating}><StarRating totalStars={5}/></div>
                  </div>
                  <div className={styles.cardDetail}>
                  <p className={styles.time}><FontAwesomeIcon icon={faClock}  width={35} color='#00a845'/>{card.time}</p>
                  <p className={styles.price}><FontAwesomeIcon icon={faIndianRupeeSign}  width={20} color='#00a845'/>{card.price}</p>
                  </div>
                </div>
            </div>
          );
        })}
      </div>
      <Carousel/>
    </div>
  )
}



export default Home ;