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
/*
var nowmessage = await kv.get(id + "nowmessage");
var messagenum = await kv.get(id + "messagenum");
var IsmessageUnlocked = await kv.get(id + "IsmessageUnlocked");
var messageData = await kv.get("messageData");
var displayfl = true;
*/
var nowmessage="M0";
var realmessage="M0"
var messageData={
  "M0":{
    "name":"kozy",
    "text":"nono",
    "next":"S0"
  },
  "M1":{
    "name":"kozy",
    "text":"nono2",
    "next":"S0"
  },
  "M2":{
    "name":"kozy",
    "text":"nono3",
    "next":"S0"
  },
  "M3":{
    "name":"kozy",
    "text":"nono4",
    "next":"S0"
  },
  "S0":{
    "bunki":[
      ["ああああああああああああああああああああ","M1"],
      ["now","M2"],
      ["pow","M3"]
    ],
    "next":"M0",
  }
  
};
export async function nextmessage() {
  // document.getElementById("messagename");
  // document.getElementById("messagetext");
  var bunki1=document.getElementById(styles.bunki1);
  var bunki2=document.getElementById(styles.bunki2);
  var bunki3=document.getElementById(styles.bunki3);
  let now=messageData[nowmessage]["next"];
  if (nowmessage.charAt(0)=="S"){
    return;
  }
  if (now.charAt(0)=="M"){
    bunki1.style.display="none";
    bunki2.style.display="none";
    bunki3.style.display="none";
    document.getElementById("messagename").textContent = messageData[now]["name"];
    document.getElementById("messagetext").textContent = messageData[now]["text"];
    nowmessage=now;
    realmessage=now;
  }
  else{
    if (messageData[now]["bunki"].length==2){
      bunki1.style.display='block';
      bunki2.style.display='block';
      bunki1.textContent = messageData[now]["bunki"][0][0];
      bunki2.textContent = messageData[now]["bunki"][1][0];
    }
    if (messageData[now]["bunki"].length==3){
      var bunki1=document.getElementById(styles.bunki1);
      bunki1.style.display='block';
      bunki2.style.display='block';
      bunki3.style.display='block';
      bunki1.textContent = messageData[now]["bunki"][0][0];
      bunki2.textContent = messageData[now]["bunki"][1][0];
      bunki3.textContent = messageData[now]["bunki"][2][0];
    }
    nowmessage=now;
  }
  /*
  let fl = true;
  if (displayfl) {
    displayfl = false;
  }
  else {
    return;
  }
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
  */
}
export function Sbunki(select){
  var bunki1=document.getElementById(styles.bunki1);
  var bunki2=document.getElementById(styles.bunki2);
  var bunki3=document.getElementById(styles.bunki3);
  console.log(select);
  console.log(nowmessage)
  realmessage=messageData[nowmessage]["bunki"][select][1];
  nowmessage=messageData[nowmessage]["bunki"][select][1];
  bunki1.style.display="none";
  bunki2.style.display="none";
  bunki3.style.display="none";
  let now=nowmessage;
  document.getElementById("messagename").textContent = messageData[now]["name"];
  document.getElementById("messagetext").textContent = messageData[now]["text"];
  nowmessage=now;
  realmessage=now;
  
}
export default function Home() {
  return (
    <>
      <div className={styles.infocontainer}>
      <div className={styles.bunki} id={styles.bunki1} onClick={() => Sbunki(0)}></div>
      <div className={styles.bunki} id={styles.bunki2} onClick={() => Sbunki(1)}></div>
      <div className={styles.bunki} id={styles.bunki3} onClick={() => Sbunki(2)}></div>
        <div className={styles.buttons}>

          <div className={styles.empty}></div>

          <div className={styles.btnbox}>
            <Link href="/Information" className={styles.selectedbtn} id={styles.story}>
            </Link>
          </div>

          <div className={styles.btnbox}>
            <Link href="/Serch" className={styles.btn}>
              <div className={styles.btnname}>　検索　</div>
              <div className={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/Relations" className={styles.btn} id={styles.connection}>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/Missions" className={styles.btn}>
              <div className={styles.btnname}>　ミッション　</div>
              <div className={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/item" className={styles.btn} id={styles.item}>
            </Link>
          </div>
        </div>
        <div className={styles.infomain}>
          
          <div className={styles.infoemp0}></div>
          <div className={styles.infoemp01}></div>
          <div className={styles.infoemp02}>
            <div className={styles.messagename} id="messagename">{messageData[realmessage]["name"]}</div>
            <div className={styles.infoemp022}>
            </div>
          </div>
          <div className={styles.infoemp03}></div>
          <div className={styles.infoemp1}></div>

          <div className={styles.messagebox} onClick={nextmessage}>
            <div className={styles.messagetext} id="messagetext">{messageData[realmessage]["text"]}</div>
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