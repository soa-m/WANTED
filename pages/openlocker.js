import styles from '../styles/openlocker.module.css';
import { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';

var ismailunlocked = [true, false, false, false];

function open() {
  var x = document.getElementById("modal1");
  x.style.display = "block";
  x.animate([{ opacity: '0' }, { opacity: '1' }], 700);
}
function close() {
  var x = document.getElementById("modal1");
  x.style.display = 'None';
}
function open1() {
  var x = document.getElementById("modal2");
  x.style.display = "block";
  x.animate([{ opacity: '0' }, { opacity: '1' }], 700);
}
function close1() {
  var x = document.getElementById("modal2");
  x.style.display = 'None';
}

export default function Home() {


  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttons}>

        </div>

        <div className={styles.main}>
          <div className={styles.letter}>
            <Image id = "letter" className = {styles.letter} src="/letter.png" width={150} height={200} onClick={open} />;

          </div>
          <div className={styles.recoder} >
            <Image id = "recoder" src="/recoder.png" width={100} height={200} onClick={open1} />
          </div>
        </div>
        <div id="modal1" className={styles.modal1}>

          <img id="ItemImage" className={styles.ItemImage} src="/letter.png" />
          <span id="closeModal" className={styles.closeModal} onClick={close}>&times;</span>

          <p id="ItemGet" className={styles.Model_text}>手紙を見つけた</p>
        </div>
        <div id="modal2" className={styles.modal1}>

          <img id="ItemImag1" className={styles.ItemImage1} src="/recoder.png" />
          <span id="closeModa1" className={styles.closeModal} onClick={close1}>&times;</span>

          <p id="ItemGet1" className={styles.Model_text1}>rを見つけた</p>
        </div>
      </div>

    </>
  );
}
