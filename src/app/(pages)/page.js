
import styles from "./homePage.module.scss"
import Image from "next/image"

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
    <div className={styles.title}><h1 >Make Your <span className={styles.titleDestination}>Destination</span></h1></div>
    <div><button className={styles.btn}>Views All <span><Image className={styles.image} width={10} height={10} src="/Vector.png" alt="image"/></span></button></div>
    </div>
    </div>
  )
}

export default Home