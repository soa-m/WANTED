import { useRef, useState, useEffect } from "react"
import React from "react";
import styles from '../styles/TornPaper.module.css';
import { SearchData } from '../components/MainProgram';
import Link from 'next/link';
import Draggable from 'react-draggable';
import { createClient } from '@vercel/kv';
let kv = createClient({
  url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
  token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN
});

import { Set, GetID } from '../components/func';
let id = GetID();

var clearedtorn = false;
/*clearedtorn = await kv.get(id + "CLEAREDTORNPAPER"); */

var consts=await kv.get(id+"consts");


var ITEMUNLCOKED=await kv.get(id+"ITEMUNLCOKED");

export default function Home() {

  async function answer() {
    var ans = document.getElementById("inputbox").value;
    console.log(1);
    if (ans == consts["tornpaperans"]) {
      console.log(1);
      var firstsolved=await kv.get(id+"firstsolved");
      firstsolved[0]=true;
      Set("firstsolved",firstsolved)
      document.getElementById("cleared").innerHTML = "UNLOCKED";
      /* Set("CLEAREDTORN",clearedtorn); */
      document.getElementById("cleared").style.color = "green";
    }
  }

  async function start() {
    var ITEMUNLCOKED=await kv.get(id+"ITEMUNLCOKED");
    console.log(ITEMUNLCOKED);
    if (!ITEMUNLCOKED[0]){
      return;
    }
    document.getElementById('btn0').src = "/KEYCODE1.png";
    document.getElementById('btn1').src = "/KEYCODE2.png";
    document.getElementById('btn2').src = "/KEYCODE3.png";
    document.getElementById('btn3').src = "/KEYCODE4.png";
    document.getElementById('btn4').src = "/KEYCODE5.png";
    document.getElementById('btn5').src = "/KEYCODE6.png";
    document.getElementById('btn6').src = "/KEYCODE7.png";

    document.getElementById('btn0').style.postion = "absolute";
    document.getElementById('btn1').style.postion = "absolute";
    document.getElementById('btn2').style.postion = "absolute";
    document.getElementById('btn3').style.postion = "absolute";
    document.getElementById('btn4').style.postion = "absolute";
    document.getElementById('btn5').style.postion = "absolute";
    document.getElementById('btn6').style.postion = "absolute";

    document.getElementById('btn0').style.left = "55%";
    document.getElementById('btn1').style.left = "75%";
    document.getElementById('btn2').style.left = "65%";
    document.getElementById('btn3').style.left = "15%";
    document.getElementById('btn4').style.left = "35%";
    document.getElementById('btn5').style.left = "25%";
    document.getElementById('btn6').style.left = "45%";

    document.getElementById('btn0').style.top = "180px";
    document.getElementById('btn1').style.top = "210px";
    document.getElementById('btn2').style.top = "200px";
    document.getElementById('btn3').style.top = "170px";
    document.getElementById('btn4').style.top = "190px";
    document.getElementById('btn5').style.top = "230px";
    document.getElementById('btn6').style.top = "220px";
  }


  return (


    <div className={styles.container}>

      <div >
        <Draggable>
          <div  >
            <img className={styles.KEYCODE} id="btn0" src="" />
          </div>
        </Draggable>
        <Draggable>
          <div >
            <img className={styles.KEYCODE} id="btn1" src="" />
          </div>
        </Draggable>
        <Draggable>
          <div >
            <img className={styles.KEYCODE} id="btn2" src="" />
          </div>
        </Draggable>
        <Draggable
        >
          <div >
            <img className={styles.KEYCODE} id="btn3" src="" />
          </div>
        </Draggable>
        <Draggable
        >
          <div >
            <img className={styles.KEYCODE} id="btn4" src="" />
          </div>
        </Draggable>
        <Draggable
        >
          <div >
            <img className={styles.KEYCODE} id="btn5" src="" />
          </div>
        </Draggable>
        <Draggable
        >
          <div >
            <img className={styles.KEYCODE} id="btn6" src="" />
          </div>
        </Draggable>


      </div>
      <div>
        <button id="start" onClick={start} className={styles.start}>アイテム１を置く</button>
      </div>
      <div>

        <div className={styles.wrap}>
          <div className={styles.search}>
            <input autoComplete = "off" id="inputbox" type="text" className={styles.searchTerm} placeholder="What are you looking for?" />
            <button onClick={answer} type="ansbtn" className={styles.searchButton}>🔑</button>
            <p id="cleared" className={styles.LOCKED}>　Locked</p>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>

        <div className={styles.empty}></div>

        <div className={styles.btnbox}>
          <Link href="/FirstMission" className={styles.btn}>
            <div class={styles.btnname}>　戻る　</div>
            <div class={styles.btncolor}></div>
          </Link>
        </div>
      </div>

    </div>





  );


}