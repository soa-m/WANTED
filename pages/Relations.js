import Link from 'next/link';
import styles from '../styles/Rel.module.css';
import Image from "next/image";
import { useEffect } from 'react'

var name=["星野初翔","星野世貴","星野徹子","猫田忠文","X","猫田真弥華"]
var charatext=["11/1に失踪したの男の子。ネグレクト気味の両親のもとで育てられている。また年々体の動きが鈍くなってるように感じているが、病院に行かせてもらえない。",
"1976年9月20日生まれ。星野世貴はペンネームで、本名は星野秀吾。幼少期から文才に恵まれており、小学生の頃から趣味で小説を書き続けていた。大学卒業後、大学生時代に出会った天河徹子と結婚。同時に、趣味で書き続けていた小説の一つが文芸雑誌により絶賛され、小説家としてデビュー。その後、数年でメジャーな小説家となるが、ある事件をきっかけに執筆活動をやめてしまった。",
"1976年9月6日生まれ。大学在籍中にサークルにて星野世貴と知り合う。大学卒業後、星野世貴と結婚、しばらく印刷関係の会社に勤めていたが、星野初翔の出産を機に退職している。",
"1976年9月20日生まれ。 星野世貴の大学時代の友人。大学卒業後、建築関連の会社に就職。取引先で知り合った、羽生真弥華と結婚した。",
"1976年9月20日生まれ。星野世貴の双子の兄弟。10年以上前に失踪しており、未だに行方不明である。幼少期から性格がおとなしく他人との交流も少なかったため、情報提供が少なく、捜査が難航している。",
"1975年6月5日生まれ。家具関連の会社に就職後、取引先で知り合った猫田忠文と結婚した。また、大の猫好きであり猫を飼っている"]
function open1() {
  var x = document.getElementById(styles.Modal1);
  x.style.display = 'block';
}
function open2() {
  var x = document.getElementById(styles.Modal2);
  x.style.display = 'block';
}
function open3() {
  var x = document.getElementById(styles.Modal3);
  x.style.display = 'block';
}
function open4() {
  var x = document.getElementById(styles.Modal4);
  x.style.display = 'block';
}
function open5() {
  var x = document.getElementById(styles.Modal5);
  x.style.display = 'block';
}
function open6() {
  var x = document.getElementById(styles.Modal6);
  x.style.display = 'block';
}
export default function Home() {
  useEffect(() => {
    var modals=[document.getElementById(styles.Modal1),document.getElementById(styles.Modal2),document.getElementById(styles.Modal3),document.getElementById(styles.Modal4),document.getElementById(styles.Modal5),document.getElementById(styles.Modal6)]
    window.addEventListener('click', outsideClose);
    function outsideClose(e) {
      for(let i=0;i<modals.length;i++){
        let modal=modals[i];
        if (e.target==modal){
          modal.style.display = 'none';
        }
      }
    }
  })
  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttons}>

        <div className={styles.empty}></div>
          <div className={styles.btnbox}>
            <Link href="/Serch" className={styles.btn}>
              <div className={styles.btnname}>　移動　</div>
              <div className={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/Relations" className={styles.selectedbtn} id={styles.connection}>
            </Link>
          </div>
 
          <div className={styles.btnbox}>
            <Link href="/item" className={styles.btn} id={styles.item}>
            </Link>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.relpic} id={styles.ytuma} onClick={open6}></div>
          <div className={styles.relpic} id={styles.x} onClick={open5}></div>
          <div className={styles.relpic} id={styles.y} onClick={open4}></div>
          <div className={styles.relpic} id={styles.Ahaha} onClick={open3}></div>
          <div className={styles.relpic} id={styles.Atiti} onClick={open2}></div>
          <div className={styles.relpic} id={styles.Aman} onClick={open1}></div>
        </div>



      </div>
      <div id={styles.Modal1} className={styles.modal}>
        <div className={styles.modalcontent}>
          <div className={styles.modalheader}>
          </div>
          <div className={styles.modalbody}>
            <div id={styles.modalpic1}></div>
            <div className={styles.modalline}></div>
            <div className={styles.modaltext}>
              <div className={styles.modaltextitle}>{name[0]}</div>
              <br/>
              <div className={styles.modaltexts}>{charatext[0]}</div>
            </div>
          </div>

        </div>
      </div>
      <div id={styles.Modal2} className={styles.modal}>
        <div className={styles.modalcontent}>
          <div className={styles.modalheader}>
          </div>
          <div className={styles.modalbody}>
            <div id={styles.modalpic2}></div>
            <div className={styles.modalline}></div>
            <div className={styles.modaltext}>
              <div className={styles.modaltextitle}>{name[1]}</div>
              <br/>
              <div className={styles.modaltexts}>{charatext[1]}</div>
            </div>
          </div>

        </div>
      </div>
      <div id={styles.Modal3} className={styles.modal}>
        <div className={styles.modalcontent}>
          <div className={styles.modalheader}>
          </div>
          <div className={styles.modalbody}>
            <div id={styles.modalpic3}></div>
            <div className={styles.modalline}></div>
            <div className={styles.modaltext}>
              <div className={styles.modaltextitle}>{name[2]}</div>
              <br/>
              <div className={styles.modaltexts}>{charatext[2]}</div>
            </div>
          </div>

        </div>
      </div>
      <div id={styles.Modal4} className={styles.modal}>
        <div className={styles.modalcontent}>
          <div className={styles.modalheader}>
          </div>
          <div className={styles.modalbody}>
            <div id={styles.modalpic4}></div>
            <div className={styles.modalline}></div>
            <div className={styles.modaltext}>
              <div className={styles.modaltextitle}>{name[3]}</div>
              <br/>
              <div className={styles.modaltexts}>{charatext[3]}</div>
            </div>
          </div>

        </div>
      </div>
      <div id={styles.Modal5} className={styles.modal}>
        <div className={styles.modalcontent}>
          <div className={styles.modalheader}>
          </div>
          <div className={styles.modalbody}>
            <div id={styles.modalpic5}></div>
            <div className={styles.modalline}></div>
            <div className={styles.modaltext}>
              <div className={styles.modaltextitle}>{name[4]}</div>
              <br/>
              <div className={styles.modaltexts}>{charatext[4]}</div>
            </div>
          </div>

        </div>
      </div>
      <div id={styles.Modal6} className={styles.modal}>
        <div className={styles.modalcontent}>
          <div className={styles.modalheader}>
          </div>
          <div className={styles.modalbody}>
            <div id={styles.modalpic6}></div>
            <div className={styles.modalline}></div>
            <div className={styles.modaltext}>
              <div className={styles.modaltextitle}>{name[5]}</div>
              <br/>
              <div className={styles.modaltexts}>{charatext[5]}</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
