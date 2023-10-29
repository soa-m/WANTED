import styles from '../styles/openlocker.module.css';
import { useEffect } from 'react'
function open2() {
  var x = document.getElementById(styles.Modal2);
  x.style.display = 'block';
}
function close2() {
  var x = document.getElementById(styles.Modal2);
  x.style.display = 'None';
}
function open3() {
  var x = document.getElementById(styles.Modal3);
  x.style.display = 'block';
}
function close3() {
  var x = document.getElementById(styles.Modal3);
  x.style.display = 'None';
}

function input2() {
  var x = document.getElementById("input1");
  var s = x.value;
  if (s == "うらぎり") {
    console.log("ok")
    var ma = document.getElementById(styles.mail2_locked);
    ma.style.display = "none";
    var unlock = document.getElementById(styles.mail2);
    unlock.style.display = "block";
  }
  else {
    x.value = "";
  }
}
export default function Home() {
  useEffect(() => {
    const modal2 = document.getElementById(styles.Modal2);
    const modal3 = document.getElementById(styles.Modal3);
    window.addEventListener('click', outsideClose);
    function outsideClose(e) {
      if (e.target == modal2) {
        modal2.style.display = 'none';
      }
      if (e.target == modal3) {
        modal3.style.display = 'none';
      }
    }
  })
  let mail2fl = false;
  let mail3fl = false;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.letter}></div>
        <div className={styles.buttons}>
        </div>
        <div className={styles.main}>
          <div className={styles.baggage}>
            <div className={styles.mail} id={styles.mail1}>
              あ
            </div>
            <div className={styles.mail} id={styles.mail2}>
              あ
            </div>
            <div className={styles.mail} id={styles.mail2_locked} onClick={open2}>
              あ
            </div>
            <div className={styles.mail} id={styles.mail3}>
              あ
            </div>
            <div className={styles.mail} id={styles.mail3_locked}>
              あ
            </div>
          </div>
        </div>
      </div>
      <div id={styles.Modal2} className={styles.modal}>
        <div className={styles.modalcontent}>
          <div className={styles.modalheader}>
            <span className={styles.modalClose} onClick={close2}>×</span>
          </div>
          <div className={styles.modalbody}>
            <div className={styles.modaltitle}>
              <p>メッセージ1を解読し、鍵となるひらがなを入力せよ。</p>
            </div>
            <div className={styles.modalinput}>
              <input type="text" id="input1" placeholder="メッセージ2の鍵" ></input>
              <input type="submit" value="送信" id="submit1" className={styles.submit} onClick={input2}></input>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}