import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState } from "react";
import {SearchData,messageque,messageData} from '../components/MainProgram';


var messagetext;
// 表示するテキストをmessagetextで表示


  
var nowmessage = 0;
export default function Home() {

  if(Object.keys(messageque).length != 0)var [messagetext, setText] = useState((messageque[0][nowmessage+1][0] + ":  " + messageque[0][nowmessage+1][1]));

  function nextmessage() {
    if(Object.keys(messageque).length == 0){
      return;
    }
    nowmessage++;
    if(nowmessage == (Object.keys(messageque[0]).length)-1){
      nowmessage = 0;
      messageque.pop();
    }
  if(Object.keys(messageque).length == 0){
    setText("現在進行中の会話はありません");
  }
  else setText(messageque[0][nowmessage+1][0] + ":  " + messageque[0][nowmessage+1][1])
}
  


    return (
      <>
      <div className={styles.container}>
        <div className={styles.buttons}>

          <div className={styles.empty}></div>
          
          <div className={styles.btnbox}>
            <Link href="/Information" className={styles.selectedbtn}>
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
            <Link href="/PastInformation" className={styles.btn}>
              <div class={styles.btnname}>　過去の情報　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>
        </div>

        <div className={styles.main} onClick = {nextmessage}>
            <div className={styles.infoemp0}></div>
            <div className={styles.infoemp1}></div>

            <div className={styles.messagebox}>
              <p className = {styles.messagetext}>{messagetext}</p>
            </div>

            <div className={styles.infoemp1}></div>
            <div className={styles.infoemp2}></div>

          </div>
         
              
      </div>
      </>
    );
  }