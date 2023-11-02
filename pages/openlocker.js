import styles from '../styles/openlocker.module.css';
import { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';

var isitemunlocked = [false, false, false,false,false];

function move(){
  var ok = true;
  for(var i=0; i<5; i++){
    if(isitemunlocked[i] == false) ok = false;
    
  }
  if(ok){
    document.location.href = "/item"
  }

}


function open() {
  var x = document.getElementById("modal1");
  x.style.display = "block";
  x.animate([{ opacity: '0' }, { opacity: '1' }], 700);
  document.getElementById("letter").style.display = "none";
  isitemunlocked[0] = true;
  
} 
  
  function close() {
  var x = document.getElementById("modal1");
  x.style.display = 'None';
  move();
}
function open1() {
  var x = document.getElementById("modal2");
  x.style.display = "block";
  x.animate([{ opacity: '0' }, { opacity: '1' }], 700);
  document.getElementById("recoder").style.display = "none";
  isitemunlocked[1] = true;
  
}
function close1() {
  var x = document.getElementById("modal2");
  x.style.display = 'None';
  move();
}

function open2() {
  var x = document.getElementById("modal3");
  x.style.display = "block";
  x.animate([{ opacity: '0' }, { opacity: '1' }], 700);
  document.getElementById("map").style.display = "none";
  isitemunlocked[2] = true;
}
function close2() {
  var x = document.getElementById("modal3");
  x.style.display = 'None';
  move();
}
function open3() {
  var x = document.getElementById("modal4");
  x.style.display = "block";
  x.animate([{ opacity: '0' }, { opacity: '1' }], 700);
  document.getElementById("album").style.display = "none";
  isitemunlocked[3] = true;
}
function close3() {
  var x = document.getElementById("modal4");
  x.style.display = 'None';
  move();
}
function open4() {
  var x = document.getElementById("modal5");
  x.style.display = "block";
  x.animate([{ opacity: '0' }, { opacity: '1' }], 700);
  document.getElementById("diary").style.display = "none";
  isitemunlocked[4] = true;
}
function close4() {
  var x = document.getElementById("modal5");
  x.style.display = 'None';
  move();
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
          <div >
            <img id = "album"  src="/album.png" className = {styles.album}onClick={open3} />
          </div>
          <div >
            <img id = "diary"  src="/diary.png" className = {styles.diary}onClick={open4} />
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
        
        
        <div id="modal4" className={styles.modal1}>

          <img id="ItemImag1" className={styles.ItemImage1} src="/album.png" />
          <span id="closeModa1" className={styles.closeModal} onClick={close3}>&times;</span>

          <p id="ItemGet1" className={styles.Model_text1}>　アルバムを見つけた</p>
        </div>
        
        
        
        <div id="modal5" className={styles.modal1}>

          <img id="ItemImag1" className={styles.ItemImage1} src="/diary.png" />
          <span id="closeModa1" className={styles.closeModal} onClick={close4}>&times;</span>

          <p id="ItemGet1" className={styles.Model_text1}>　  日記を見つけた</p>
        </div>
      </div>

    </>
  );
}
