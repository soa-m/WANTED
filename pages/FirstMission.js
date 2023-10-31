import { useRef, useState, useEffect } from "react"
import React from "react";
import styles from '../styles/First.module.css';
import { SearchData} from '../components/MainProgram';
import Link from 'next/link';
import jsQR from "jsqr";
import { createClient } from '@vercel/kv';
let kv = createClient({
  url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
  token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN
});

var clickednum = 0;
function plus() {
  clickednum += 1;
}

import { Set, GetID } from '../components/func';
let id = GetID();

function open1() {
  var x = document.getElementById("modal1");
  x.style.display = 'block';
}
function close1() {
  var x = document.getElementById("modal1");
  x.style.display = 'none';
}
function close() {
  var x = document.getElementById("mystery");
  x.style.display = 'none'
}
function open(num) {

  var x = document.getElementById("mystery");
  var y = document.getElementById("mysteryimg");


  y.src = "/" + num + ".png";
  clickednum += 1;
  x.style.display = 'block';
}

var ITEMUNLCOKED = [false, false, false];
/* */

/*var CLEAREDFUZE = false;
var CLEAREDDIGITALKEY = false;
var CLEAREDTORNPAPER = false;
Set("CLEAREDFUZE", CLEAREDFUZE);
Set("CLEAREDDIGITALKEY", CLEAREDDIGITALKEY);
Set("CLEAREDTORNPAPER", CLEAREDTORNPAPER);
Set("ITEMUNLCOKED",ITEMUNCLOKED);
*/

var Item = ["紙切れ","ヒューズ","ドット絵"];

var FirstMissionNazo = {
  "しんぶんし": 0,
  "トマト": 1,
  "オレンジ": 2,


}

export default function Home() {



  //サーチボタンが押されたらテキストボックスの値に対応する返しを行う。該当する返しがない場合は "検索した内容"に関連する内容はみつかりませんでしたと表示。 
  // textは検索ボックス内の内容
  //SearchedWordは検索ボタンが押されたときの検索ボックス内の内容
  //ReturnWord1は表示する返しの言葉を格納




  function OnSearch() {


    open1();


    var SearchedWord = document.getElementById("SearchBox").value;
    console.log(SearchedWord);
    var SearchData_keys = Object.keys(FirstMissionNazo);
    var ReturnWord = SearchData_keys.find(function (value) {
      return value == SearchedWord;
    })

    if (ReturnWord == undefined) document.getElementById("searchresult").innerHTML = "アイテムが見つかりませんでした";
    else document.getElementById("searchresult").innerHTML =  Item[FirstMissionNazo[SearchedWord]] + "が見つかりました" ;
    ITEMUNLCOKED[FirstMissionNazo[SearchedWord]] = true;
    Set("ITEMUNLCOKED",ITEMUNLCOKED);

  };

  function a() {
    clickednum++;
    const video = document.createElement('video');
    const canvasElement = document.getElementById('canvas');
    const canvas = canvasElement.getContext('2d');
    const loading = document.getElementById('loading');
    let isReadQR = false;

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
        video.srcObject = stream;
        video.setAttribute('playsinline', true);
        video.play();
        requestAnimationFrame(tick);

      });

    function tick() {
      loading.textContent = '⌛ ロード中...';
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        loading.hidden = true;
        canvasElement.hidden = false;
        canvasElement.height = video.videoHeight;
        canvasElement.width = video.videoWidth;
        canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
        var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
        var code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert',
        });
        if (code && !isReadQR) {
          if (code.data > 0 && code.data <= 45) {
            open(code.data);
          }
          isReadQR = false;
        }
      }
      if (clickednum % 2 == 1) {
        requestAnimationFrame(tick);
        document.getElementById("camerabutton").innerHTML = "カメラを停止する";
      } else {
        canvasElement.hidden = true;
        document.getElementById("camerabutton").innerHTML = "カメラを起動する";
        return;
      }
    }

  }

  return (


    <div className={styles.FirstMission}>
      <div className={styles.container}>
        <div className={styles.buttons}>

          <div className={styles.empty}></div>

          <div className={styles.btnbox}>
            <Link href="/TornPaper" onClick={plus} className={styles.btn}>
              <div class={styles.btnname}>　キーコード　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>

          <div className={styles.btnbox} >
            <Link href="/fuse" onClick={plus} className={styles.btn}>
              <div class={styles.btnname}>　回路　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/DigitalKey" onClick={plus} className={styles.btn}>
              <div class={styles.btnname}>　電子キー　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>

        </div>



      </div>
      <div id="loading">📱 ブラウザのカメラの使用を許可してください。</div>
      <button id="camerabutton" onClick={a} className={styles.Camerabtn}>カメラを起動する</button>
      <canvas id="canvas" className={styles.canvas} hidden></canvas>



      <div className={styles.wrap}>
        <div className={styles.search}>
          <input id="SearchBox" type="text" className={styles.searchTerm} placeholder="What are you looking for?" />
          <button onClick={OnSearch} type="submit" className={styles.searchButton}>🔍
          </button>
        </div>
      </div>




      <div id="mystery" className={styles.mystery}>
        <span id="closeModal" className={styles.closeModal} onClick={close}>&times;</span>
        <img id="mysteryimg" />
      </div>

      <div id="modal1" className={styles.modal1}>
        <span id="closeModal" className={styles.closeModal} onClick={close1}>&times;</span>
        <img id="itempic" />
        <p id="searchresult" className={styles.Model_text}>Some text in the Modal..</p>
      </div>












    </div>





  );

}