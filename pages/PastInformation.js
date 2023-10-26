import Link from 'next/link';
import styles from '../styles/Home.module.css';
// ES6 import

 

export default function Home() {




    return (
      <>
      <div className={styles.container}>
        <div className={styles.buttons}>

          <div className={styles.empty}></div>
          
          <div className={styles.btnbox}>
            <Link href="/Information" className={styles.btn}>
              <div class={styles.btnname}>　情報　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>

          <div className={styles.btnbox}>
            <Link href="/Serch" className={styles.btn}>
              <div class={styles.btnname}>　検索　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/Relations" className={styles.btn}>
              <div class={styles.btnname}>　関係図　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/Missions" className={styles.btn}>
              <div class={styles.btnname}>　ミッション　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/PastInformation" className={styles.selectedbtn}>
              <div class={styles.btnname}>　過去の情報　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>
        </div>
        <div id="loading">📱 ブラウザのカメラの使用を許可してください。</div>
          <button onClick={a}></button>
          <canvas id="canvas" hidden></canvas>
        <p id="qr-msg"></p>
       
         
              
      </div>
      </>
      
    );
  }