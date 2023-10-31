import Link from 'next/link';
import styles from '../styles/info.module.css';
import { useState } from "react";
//import {SearchData,messageque} from '../components/MainProgram';
import { createClient } from '@vercel/kv';

let kv = createClient({
  url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
  token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN
});

import { Set, GetID } from '../components/func';
let id = GetID();


// 表示するテキストをmessagetextで表示
var nowmessage = await kv.get(id + "nowmessage");
var messagenum = await kv.get(id + "messagenum");
var IsmessageUnlocked = await kv.get(id + "IsmessageUnlocked");
var messageData = await kv.get("messageData");
var displayfl = true;

export async function nextmessage() {
  // document.getElementById("messagename");
  // document.getElementById("messagetext");
  let fl = true;
  if (displayfl) {
    displayfl = false;
  }
  else {
    return;
  }
  /*
  var nowmessage= await kv.get(id+"nowmessage");
  var messagenum= await kv.get(id+"massagenum");
  var IsmessageUnlocked= await kv.get(id+"IsmessageUnlocked");
  var messageData=await kv.get("messageData");
  */
  if ((messageData[messagenum].length) - 1 == nowmessage) {
    if (messagenum == IsmessageUnlocked) {
      document.getElementById("messagename").textContent = ""
      document.getElementById("messagetext").textContent = "会話がありません"
      fl = false;
      displayfl = true;
    }
    else {
      messagenum += 1;
      nowmessage = 1;
      Set("messagenum", messagenum);
      Set("nowmessage", 0);
    }
  }
  else {
    nowmessage += 1;
  }
  if (fl) {
    document.getElementById("messagename").textContent = messageData[messagenum][nowmessage][0];
    var thistext = messageData[messagenum][nowmessage][1];
    var s = "";
    
    for (let i = 0; i < thistext.length; i++) {
      s += thistext[i];
      await new Promise(resolve => setTimeout(resolve, 50))
      document.getElementById("messagetext").textContent = s;
    }
    displayfl = true;
  }
}

export default function Home() {
  return (
    <>
      <div className={styles.infocontainer}>
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

        <div className={styles.infomain} onClick={nextmessage}>
          <div className={styles.infoemp0}></div>
          <div className={styles.infoemp01}></div>
          <div className={styles.infoemp02}>
            <div className={styles.messagename} id="messagename"></div>
            <div className={styles.infoemp022}>
            </div>
          </div>
          <div className={styles.infoemp03}></div>
          <div className={styles.infoemp1}></div>

          <div className={styles.messagebox}>
            <div className={styles.messagetext} id="messagetext">新しい会話を見る</div>
            <div className={styles.messagebox2}>
            </div>
          </div>

          <div className={styles.infoemp12}></div>
          <div className={styles.infoemp2}></div>

        </div>


      </div>
    </>
  );
}