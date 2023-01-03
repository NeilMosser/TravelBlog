import Image from 'next/image';
import styles from '../styles/sidebar.module.css';
import profile from '../public/images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'



const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        Hello There!
        <Image
      className={styles.image}
      src={profile}
      alt="Picture of the author"
      width={200}
      height={200}
    />
      </div>
      <div className={styles.socials}>
        Socials
        <div className='icon-bar'>
          <FontAwesomeIcon icon={faInstagram}/>
         <FontAwesomeIcon icon={faFacebook}/>
         <FontAwesomeIcon icon={faYoutube}/>
        </div>
      </div>
      <div className={styles.been}>
        Where I've been
      </div>
    </div>
  );
}

export default SideBar;