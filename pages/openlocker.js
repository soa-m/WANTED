import styles from '../styles/openlocker.module.css';
import { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';

var ismailunlocked = [true, false, false, false];

function open() {
  var x = document.getElementById("modal1");
  x.style.display = "block";
  x.animate([{ opacity: '0' }, { opacity: '1' }], 700);
  document.getElementById("letter").style.display = "none";
}
  
  function close() {
  var x = document.getElementById("modal1");
  x.style.display = 'None';
}
function open1() {
  var x = document.getElementById("modal2");
  x.style.display = "block";
  x.animate([{ opacity: '0' }, { opacity: '1' }], 700);
  document.getElementById("recoder").style.display = "none";
}
function close1() {
  var x = document.getElementById("modal2");
  x.style.display = 'None';
}

function open2() {
  var x = document.getElementById("modal3");
  x.style.display = "block";
  x.animate([{ opacity: '0' }, { opacity: '1' }], 700);
  document.getElementById("map").style.display = "none";
}
function close2() {
  var x = document.getElementById("modal3");
  x.style.display = 'None';
}
export default function Home() {


  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttons}>

        </div>

        <div className={styles.main}>
          <div >
            <img id = "letter" className = {styles.letter} src="/letter.png"  onClick={open} />;

          </div>
          <div >
            <img id = "recoder" className = {styles.recoder} src="/recoder.png" onClick={open1} />
          </div>
          <div >
            <img id = "map"  src="/map.png" className = {styles.map}onClick={open2} />
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

          <p id="ItemGet1" className={styles.Model_text1}>レコーダーを見つけた</p>
        </div>
        <div id="modal3" className={styles.modal1}>

          <img id="ItemImag1" className={styles.ItemImage1} src="/map.png" />
          <span id="closeModa1" className={styles.closeModal} onClick={close2}>&times;</span>

          <p id="ItemGet1" className={styles.Model_text1}>　  地図を見つけた</p>
        </div>
      </div>

    </>
  );
}
