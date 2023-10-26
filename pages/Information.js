import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState } from "react";
import {SearchData,messageque,messageData} from '../components/MainProgram';


var nowmessage = 0;


// 表示するテキストをmessagetextで表示

export function nextmessage() {
  // document.getElementById("messagename");
  // document.getElementById("messagetext");
  if(Object.keys(messageque).length == 0){
    document.getElementById("messagename").textContent=""
    document.getElementById("messagetext").textContent="会話がありません"
  }
  else{
    nowmessage++;
    if(nowmessage == (Object.keys(messageque[0]).length)){
      nowmessage = 0;
      messageque.shift();
    }
    else{
      console.log(nowmessage);
      document.getElementById("messagename").textContent=messageque[0][nowmessage][0];
      document.getElementById("messagetext").textContent=messageque[0][nowmessage][1];
    }
  }
}
  
export default function Home() {
    return (
      <>
      <div className={styles.container}>
        <div className={styles.buttons}>

          <div className={styles.empty}></div>
          
          <div className={styles.btnbox}>
            <Link href="/Information" className={styles.selectedbtn}>
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
            <Link href="/Relations" className={styles.btn}>
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

        <div className={styles.main} onClick = {nextmessage}>
            <div className={styles.infoemp0}></div>
            <div className={styles.infoemp01}></div>
            <div className={styles.infoemp02}><div className={styles.infoemp022} id="messagename"></div></div>
            <div className={styles.infoemp03}></div>
            <div className={styles.infoemp1}></div>

            <div className={styles.messagebox}>
            <div className={styles.messagebox2}>
              <p className = {styles.messagetext} id="messagetext">新しい会話を見る</p>
            </div>
            </div>

            <div className={styles.infoemp12}></div>
            <div className={styles.infoemp2}></div>

          </div>
         
              
      </div>
      </>
    );
  }