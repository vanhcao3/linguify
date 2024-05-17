import Image from 'next/image';
import styles from '@/styles/layout/footer.module.css';

function Footer() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['section1']}>
        <div className={styles['logo']}>
          <div className={styles['logo-image']}>
            <Image
              src="/images/dino-logo.png"
              width={50}
              height={50}
              alt="dino"
              // layout="responsive"
              // objectFit="cover"
            />
          </div>
          <div>This is a dino</div>
        </div>
        <div className={styles['subSection1']}>
          <div>Home</div>
          <div>About</div>
          <div>Licenses</div>
        </div>
      </div>
      <hr className={styles['hrTag']} />
      <div className={styles['section2']}>
        <div>
          <div>Copyright © Thế Anh | Designed by Thế Anh - Powered by ???</div>
        </div>
        <div className={styles['media']}>
          <div className={styles['icon']}>
            <Image src="/icons/facebookIcon.svg" width={25} height={25} alt="facebook" />
          </div>
          <div className={styles['icon']}>
            <Image src="/icons/youtubeIcon.svg" width={25} height={25} alt="facebook" />
          </div>
          <div className={styles['icon']}>
            <Image src="/icons/linkedInIcon.svg" width={25} height={25} alt="facebook" />
          </div>
          <div className={styles['icon']}>
            <Image src="/icons/XIcon.svg" width={18} height={18} alt="facebook" />
          </div>
          <div className={styles['icon']}>
            <Image src="/icons/instagramIcon.svg" width={25} height={25} alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
