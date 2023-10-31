import { useRef, useState, useEffect } from "react"
import React from "react";
import styles from '../styles/First.module.css';
import { SearchData } from '../components/MainProgram';
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
  document.getElementById("ItemImage").src = "/fuse.png";

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
//PlayerIDで解くべき問題と結びつける。
var PlayerID = 5;
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

var Item = ["紙切れ", "ヒューズ", "ドット絵"];

var FirstMissionNazo = {
  "アメリカ": 1,
  "水やり": 2,
  "浮き輪": 3,
  "葡萄": 1,
  "卵": 2,
  "笑顔": 1,
  "かいし": 1,
  "夜空": 3,
  "まこと": 2,
  "新聞紙": 1,
  "ドア": 3,
  "東京都庁": 2,
  "甘口": 1,
  "家康": 3,
  "正解": 1,
  "オムライス": 2,
  "仏": 1,
  "大きな木": 3,
  "かいし": 2,
  "イエス": 3,
  "お見事": 2,
  "代々木": 1,
  "275": 3,
  "ウクライナ": 2,
  "TKFES": 1,
  "キト": 3,
  "月日": 2,
  "寝坊": 1,
  "シャドウ": 3,
  "勉強": 1,
  "駆け引き": 2,
  "景色": 3,
  "天才": 2,
  "雷": 1,
  "spin": 3,
  "真実": 2,
  "平等": 1,

  "王国": 2,

  "睡眠": 3,

  "磁石": 2,
  "深海": 3,
  "言葉": 3,


}
var FirstMissionNazoID = {
  "アメリカ": 1,
  "水やり": 2,
  "浮き輪": 3,
  "葡萄": 4,
  "卵": 5,
  "笑顔": 6,
  "かいし": 7,
  "夜空": 8,
  "まこと": 9,
  "新聞紙": 10,
  "ドア": 11,
  "東京都庁": 12,
  "甘口": 13,
  "家康": 14,
  "正解": 15,
  "オムライス": 16,
  "仏": 17,
  "大きな木": 18,
  "かいし": 19,
  "イエス": 20,
  "お見事": 21,
  "代々木": 22,
  "275": 23,
  "ウクライナ": 24,
  "TKFES": 25,
  "キト": 26,
  "月日": 27,
  "寝坊": 28,
  "シャドウ": 29,
  "勉強": 30,
  "駆け引き": 31,
  "景色": 32,
  "天才": 33,
  "雷": 34,
  "spin": 35,
  "真実": 36,
  "平等": 37,
  "王国": 39,
  "睡眠": 41,
  "磁石": 43,
  "深海": 44,
  "言葉": 45,
}

var groups = [
  [1, 2, 3],
  [4, 5, 8],
  [7, 9, 11],
  [10, 12, 14],
  [13, 16, 18],
  [17, 21, 23],
  [22, 24, 26],
  [25, 27, 29],
  [30, 31, 32],
  [28, 33, 35],
  [6, 36, 45],
  [34, 43, 44],
  [15, 19, 20]
]
export default function Home() {



  //サーチボタンが押されたらテキストボックスの値に対応する返しを行う。該当する返しがない場合は "検索した内容"に関連する内容はみつかりませんでしたと表示。 
  // textは検索ボックス内の内容
  //SearchedWordは検索ボタンが押されたときの検索ボックス内の内容
  //ReturnWord1は表示する返しの言葉を格納




  function OnSearch() {


    open1();


    var SearchedWord = document.getElementById("SearchBox").value;
    console.log(SearchedWord);
    var SearchData_keys = Object.keys(FirstMissionNazoID);
    var ReturnWord = SearchData_keys.find(function (value) {
      return value == SearchedWord;
    })

    if (ReturnWord == undefined) {
      document.getElementById("topmodal").innerHTML = "";
      document.getElementById("searchresult").innerHTML = "アイテムが見つかりませんでした";
      document.getElementById("ItemImage").src = "/sonzaisinai.png";
      return;
    }
    var IsYourProb = false;
    for (var i = 0; i < 3; i++) {
      if (groups[PlayerID][i] == FirstMissionNazoID[ReturnWord]) IsYourProb = true;
    }
    if (IsYourProb == false) {
      document.getElementById("topmodal").innerHTML = "";
      document.getElementById("searchresult").innerHTML = "アイテムが見つかりませんでした";
      document.getElementById("ItemImage").src = "/sonzaisinai.png";
      return;
    }

    document.getElementById("topmodal").innerHTML = "==アイテム発見==";
    document.getElementById("searchresult").innerHTML = Item[FirstMissionNazo[SearchedWord]] + "が見つかりました";
    if (FirstMissionNazo[SearchedWord] == 1) document.getElementById("ItemImage").src = "/KEYCODES.png";
    if (FirstMissionNazo[SearchedWord] == 2) document.getElementById("ItemImage").src = "/fuse.png";
    if (FirstMissionNazo[SearchedWord] == 3) document.getElementById("ItemImage").src = "/DotPic.png";

    ITEMUNLCOKED[FirstMissionNazo[SearchedWord]] = true;
    Set("ITEMUNLCOKED", ITEMUNLCOKED);

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
          <input id="SearchBox" type="text" className={styles.searchTerm} placeholder="答えを入力" />
          <button onClick={OnSearch} type="submit" className={styles.searchButton}>🔍
          </button>
        </div>
      </div>




      <div id="mystery" className={styles.mystery}>
        <span id="closeModal" className={styles.closeModal} onClick={close}>&times;</span>
        <img id="mysteryimg" />
      </div>

      <div id="modal1" className={styles.modal1}>
        <p id="topmodal" className={styles.Model_text1}>＝＝アイテム発見＝＝</p>
        <img id="ItemImage" className={styles.ItemImage} />
        <span id="closeModal" className={styles.closeModal} onClick={close1}>&times;</span>

        <p id="searchresult" className={styles.Model_text}>Some text in the Modal..</p>
      </div>












    </div>





  );

}