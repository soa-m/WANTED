import { useRef, useState, useEffect } from "react"
import React from "react";
import styles from '../styles/fuse.module.css';
import { SearchData } from '../components/MainProgram';
import Link from 'next/link';
import { createClient } from '@vercel/kv';
let kv = createClient({
  url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
  token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN
});

import { Set, GetID } from '../components/func';
let id = GetID();

var dx = [0, -1, 0, 1];
var dy = [1, 0, -1, 0];


var firstsolved=await kv.get(id+"firstsolved");
var PlayerID=await kv.get(id+"PlayerID");

/*
fuzecleared = await kv.get(id + "CLEAREDFUZE");
console.log(fuzecleared);
*/
export default function Home() {

  var Keytype = [
    [1, 3, 3, 3, 3],
    [1, 2, 3, 2, 2],
    [2, 1, 1, 2, 2],
    [2, 3, 3, 2, 2],
    [1, 1, 2, 3, 1],
  ]
  var KeyRotate = [
    [2, 2, 3, 1, 1],
    [1, 1, 3, 1, 1],
    [1, 2, 3, 1, 1],
    [1, 2, 0, 1, 1],
    [3, 0, 2, 2, 0],


  ]
  var KeyPath = [
    [true, true, false, true],
    [false, true, false, true],
    [true, false, false, true],
    [false, false, false, false],
  ]
  var KeyOpen = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],


  ]
  async function Ontap(e) {
    var firstsolved=await kv.get(id+"firstsolved");
    if (firstsolved[1]) {
      document.getElementById("cleared").textContent = "UNLOCKED";
      return;
    }
    var d = e.target.id;
    var Kairo = document.getElementById(d);
    KeyRotate[d[3]][d[4]] += 1;
    KeyRotate[d[3]][d[4]] %= 4;
    const degree = 90 * KeyRotate[d[3]][d[4]] * -1;
    Kairo.style.transform = "rotate(" + degree + "deg)";
    var que = [];
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        KeyOpen[i][j] = false;
      }
    }
    if (KeyPath[Keytype[4][0] - 1][(-1 * KeyRotate[4][0] + 6) % 4]) {
      que.push([4, 0]);
      KeyOpen[4][0] = true;
    }
    while (que.length != 0) {
      var x = que[0][0];
      var y = que[0][1];
      que.shift();
      for (var i = 0; i < 4; i++) {
        var nx = x + dx[i];
        var ny = y + dy[i];
        if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
          if (KeyOpen[nx][ny] == false) {

            if (KeyPath[Keytype[x][y] - 1][(-1 * KeyRotate[x][y] + 4 + i) % 4] && KeyPath[Keytype[nx][ny] - 1][(-1 * KeyRotate[nx][ny] + i + 6) % 4]) {
              KeyOpen[nx][ny] = true;
              que.push([nx, ny]);
            }


          }
        }
      }

    }
    console.log(KeyOpen);
    console.log(KeyRotate);

    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        var d = "btn";
        d += String(i);
        d += String(j);
        var Kairo = document.getElementById(d);

        if (KeyOpen[i][j] == false) Kairo.src = '/KAIRO0.png';
        if (KeyOpen[i][j]) {
          if (Keytype[i][j] == 1) Kairo.src = '/KAIRO1.png';
          if (Keytype[i][j] == 2) Kairo.src = '/KAIRO2.png';
          if (Keytype[i][j] == 3) Kairo.src = '/KAIRO3.png';
        }
      }
    }
    if (KeyPath[Keytype[0][4] - 1][(-1 * KeyRotate[0][4] + 4) % 4] && KeyOpen[0][4]) {
      var firstsolved=await kv.get(id+"firstsolved");
      firstsolved[1]=true;
      Set("firstsolved",firstsolved)
      console.log(firstsolved);

      /*Set("CLEAREDFUZE",fuzecleared);*/
      document.getElementById("cleared").textContent = "UNLOCKED";

      document.getElementById("cleared").style.color = "green";
    }
  }
  async function start() {
    var ITEMUNLCOKED=await kv.get(id+"ITEMUNLCOKED");
    console.log(ITEMUNLCOKED);
    if (!ITEMUNLCOKED[1]){
      return;
    }
    document.getElementById("background").style.backgroundImage = "url(/fuseon.png)";
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        var d = "btn";
        d += String(i);
        d += String(j);
        var Kairo = document.getElementById(d);

        if (Keytype[i][j] == 1) Kairo.src = '/KAIRO1.png';
        if (Keytype[i][j] == 2) Kairo.src = '/KAIRO2.png';
        if (Keytype[i][j] == 3) Kairo.src = '/KAIRO3.png';
        if (Keytype[i][j] == 4) Kairo.src = '/KAIRO0.png';

        Kairo.style.backgroundSize = "cover";
        for (var k = 0; k < KeyRotate[i][j]; k++) {
          const degree = 90 * KeyRotate[i][j] * -1;
          Kairo.style.transform = "rotate(" + degree + "deg)";
        }
      }
    }

    var que = [];
    if (KeyPath[Keytype[4][0] - 1][(-1 * KeyRotate[4][0] + 2 + 4) % 4]) {
      que.push([4, 0]);
      KeyOpen[4][0] = true;
    }
    while (que.length != 0) {
      var x = que[0][0];
      var y = que[0][1];
      console.log([x, y]);

      que.shift();
      for (var i = 0; i < 4; i++) {
        var nx = x + dx[i];
        var ny = y + dy[i];
        if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
          if (KeyOpen[nx][ny] == false) {

            if (KeyPath[Keytype[x][y] - 1][(-1 * KeyRotate[x][y] + i + 4) % 4] && KeyPath[Keytype[nx][ny] - 1][(-1 * KeyRotate[nx][ny] + i + 2 + 4) % 4]) {
              KeyOpen[nx][ny] = true;
              que.push([nx, ny]);
            }


          }
        }
      }

    }
    console.log(KeyOpen);
    console.log(KeyRotate);
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        var d = "btn";
        d += String(i);
        d += String(j);
        var Kairo = document.getElementById(d);

        if (KeyOpen[i][j] == false) Kairo.src = '/KAIRO0.png';






      }
    }

  }




  return (


    <div className={styles.container} id = "background">
      <div className={styles.Kparentsbtn0}>
        <img onClick={Ontap} id="btn00" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn01" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn02" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn03" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn04" src="KAIRO0.png" className={styles.Kchildimg} />
      </div>
      <div className={styles.Kparentsbtn1}>
        <img onClick={Ontap} id="btn10" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn11" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn12" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn13" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn14" src="KAIRO0.png" className={styles.Kchildimg} />
      </div>
      <div className={styles.Kparentsbtn2}>
        <img onClick={Ontap} id="btn20" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn21" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn22" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn23" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn24" src="KAIRO0.png" className={styles.Kchildimg} />
      </div>
      <div className={styles.Kparentsbtn3}>
        <img onClick={Ontap} id="btn30" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn31" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn32" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn33" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn34" src="KAIRO0.png" className={styles.Kchildimg} />
      </div>
      <div className={styles.Kparentsbtn4}>
        <img onClick={Ontap} id="btn40" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn41" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn42" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn43" src="KAIRO0.png" className={styles.Kchildimg} />
        <img onClick={Ontap} id="btn44" src="KAIRO0.png" className={styles.Kchildimg} />
      </div>
     
      <button onClick={start} type="ansbtn" className={styles.Camerabtn}>ヒューズを置く</button>
      <p id="cleared" className = {styles.LOCKED}>LOCKED</p>
      <div className={styles.buttons}>

          <div className={styles.empty}></div>

          <div className={styles.btnbox}>
            <Link href="/FirstMission"  className={styles.btn}>
              <div class={styles.btnname}>　戻る　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>
        </div>
        
    </div>




  );


}