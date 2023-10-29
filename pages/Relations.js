import Link from 'next/link';
import styles from '../styles/Rel.module.css';
import Image from "next/image";
import { useEffect } from 'react'

function open1() {
  var x = document.getElementById(styles.Modal1);
  x.style.display = 'block';
}
function close1() {
  var x = document.getElementById(styles.Modal1);
  x.style.display = 'None';
}
export default function Home() {
  useEffect(() => {
    const modal = document.getElementById(styles.Modal1);
    window.addEventListener('click', outsideClose);
    function outsideClose(e) {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    }
  })
  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttons}>

          <div className={styles.empty}></div>

          <div className={styles.btnbox}>
            <Link href="/Information" className={styles.btn}>
              <div className={styles.btnname}>　情報　</div>
              <div className={styles.btncolor}></div>
            </Link>
          </div>

          <div className={styles.btnbox}>
            <Link href="/Serch" className={styles.btn}>
              <div className={styles.btnname}>　検索　</div>
              <div className={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/Relations" className={styles.selectedbtn}>
              <div className={styles.btnname}>　関係図　</div>
              <div className={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/Missions" className={styles.btn}>
              <div className={styles.btnname}>　ミッション　</div>
              <div className={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/PastInformation" className={styles.btn}>
              <div className={styles.btnname}>　過去の情報　</div>
              <div className={styles.btncolor}></div>
            </Link>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.relpic} id={styles.relpic1} onClick={open1}>
          </div>
        </div>



      </div>
      <div id={styles.Modal1} className={styles.modal}>
        <div className={styles.modalcontent}>
          <div className={styles.modalheader}>
            <span className={styles.modalClose} onClick={close1}>×</span>
          </div>
          <div className={styles.modalbody}>
            <div className={styles.modalpic}></div>
            <div className={styles.modalline}></div>
            <div className={styles.modaltext}>
              <p>主人公君</p>
              <p>　2006年8月27日生まれ。つくこま高校（土筆学園狛犬高等学校）2年に在籍する。やや長身でやせ型、背丈のわりに手足が長い。塩顔。地学分野（とりわけ鉱石類）への知見が深く、地学部の会計兼主将を務めている。また学年随一の読書家であり、自分で文章を作るのも得意。今年の文化祭でも、文学同好会の会誌へ詩を数篇寄稿していた。</p>
              <p>　性格は温和で、物静か。基本的に一人で過ごすことを好むタイプだが、真面目で面倒見がいいため周囲からの信頼は厚い。素行・生活態度に目立った点はなし。若干の遅刻癖あり。感情をあまり表に出さないため、いつ見ても冷静でいるような印象を受けるが、親しい友人曰く、実際は感情的になりやすい一面もあるとのこと。クラスの中では「怒らせたらやばそうな人」として認識されている。
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}