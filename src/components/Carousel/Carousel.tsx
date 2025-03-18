/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */

import styles from "./Carousel.module.scss";
import slides from "../../../public/data/slides.json"
import Marquee from "react-fast-marquee";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Carousel = () => {
  
  return (
    <div className={styles.sliderContainer}>
      <p className={styles.headline}>Get inspiration for your next trip</p>
      <p className={styles.headline1}>Favorite destinations based on customer reviews</p>
      <Marquee speed={50} direction="left" pauseOnHover gradient={false}>
        <div className={styles.cardWrapper}>
        {slides.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.like}><FontAwesomeIcon icon={faHeart} width={25} height={25} color="green"/></div>
            <img src={card.image} alt={card.title} />
            <div className={styles.cardContent}>
              <div className={styles.cardMeta}>
                <img src={card.reviewerImage} alt="image" />
                <span className={styles.span}>{card.reviewer} • {card.date}</span>
              </div>
              <p className={styles.title}> {card.title}</p>
            </div>
          </div>
        ))}
      </div>
      </Marquee>
      <div className={styles.viewMore}>
        <button>View More →</button>
      </div>
    </div>
  );
};
  