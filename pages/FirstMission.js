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
import { Set, GetID } from '../components/func';
let id = GetID();
let itemfl= await kv.get(id + "ITEM");
console.log(itemfl);

var clickednum = 0;
function plus() {
  clickednum += 1;
}

function close3() {
  var x = document.getElementById("mystery");
  x.style.display = 'none'
  document.getElementById("closeModal1").style.display = 'none';
}
function open3(num) {
  if(num == 42) num =44;
  if(num == 41) num =45;
  else if(num == 41) num = 45; 
  var x = document.getElementById("mystery");
  var y = document.getElementById("mysteryimg");
  document.getElementById("closeModal1").style.display = 'block';
  y.src = "/" + num + ".png";
  clickednum += 1;
  x.style.display = 'block';
}
//PlayerIDで解くべき問題と結びつける。



var PlayerID=await kv.get(id+"PlayerID");
PlayerID = PlayerID - 1;
/* */

/*var CLEAREDFUZE = false;
var CLEAREDDIGITALKEY = false;
var CLEAREDTORNPAPER = false;
Set("CLEAREDFUZE", CLEAREDFUZE);
Set("CLEAREDDIGITALKEY", CLEAREDDIGITALKEY);
Set("CLEAREDTORNPAPER", CLEAREDTORNPAPER);
Set("ITEMUNLCOKED",ITEMUNCLOKED);
*/

//var Item = ["紙切れ", "ヒューズ", "ドット絵"];

var FirstMissionNazo = {
  "アメリカ": 1, "あめりか": 1,
  "水やり": 2, "みずやり": 2,
  "浮き輪": 3, "うきわ": 3,
  "葡萄": 1, "ぶどう": 1,
  "卵": 2, "たまご": 2,
  "笑顔": 1, "えがお": 1,
  "かいし": 1,
  "夜空": 3, "よぞら": 3,
  "まこと": 2,
  "新聞紙": 1, "しんぶんし": 1,
  "ドア": 3,
  "東京都庁": 2, "とうきょうとちょう": 2,
  "甘口": 1,
  "家康": 3, "いえやす": 3,
  "正解": 1, "せいかい": 1,
  "オムライス": 2, "おむらいす": 2,
  "仏": 1,
  "ほとけ": 1,
  "大きな木": 3, "おおきなき": 3,
  "かいし": 2,
  "イエス": 3, "Yes": 3, "YES": 3, "yes": 3,
  "冬": 2, "ふゆ": 2,
  "代々木": 1,
  "275": 3,
  "ウクライナ": 2, "うくらいな": 2,
  "TKFES": 1,
  "キト": 3,
  "月日": 2,
  "寝坊": 1, "ねぼう": 1,
  "シャドウ": 3, "しゃどう": 3,
  "勉強": 1,
  "駆け引き": 2, "かけひき": 2,
  "景色": 3, "けしき": 3,
  "天才": 2, "てんさい": 2,
  "雷": 1, "かみなり": 1,
  "spin": 3,
  "真実": 2, "しんじつ": 2, "シンジツ": 2,
  "平等": 1,

  "国王": 2,

  "睡眠": 3, "すいみん": 3,

  "磁石": 2, "じしゃく": 2,
  "深海": 3, "しんかい": 3,
  "言葉": 3, "コトバ": 3, "ことば": 3,


}
var FirstMissionNazoID = {
  "アメリカ": 1, "あめりか": 1,
  "水やり": 2, "みずやり": 2,
  "浮き輪": 3, "うきわ": 3,
  "葡萄": 4, "ぶどう": 4,
  "卵": 5, "たまご": 5,
  "笑顔": 6, "えがお": 6,
  "かいし": 7,
  "夜空": 8, "よぞら": 8,
  "まこと": 9,
  "新聞紙": 10, "しんぶんし": 10,
  "ドア": 11,
  "東京都庁": 12, "とうきょうとちょう": 12,
  "甘口": 13,
  "家康": 14, "いえやす": 14,
  "正解": 15, "せいかい": 15,
  "オムライス": 16, "おむらいす": 16,
  "仏": 17, "ほとけ": 17,
  "大きな木": 18, "おおきなき": 18,
  "かいし": 19,
  "イエス": 20, "Yes": 20, "YES": 20, "yes": 20,
  "冬": 21, "ふゆ": 21,
  "代々木": 22,
  "275": 23,
  "ウクライナ": 24, "うくらいな": 24,
  "TKFES": 25,
  "キト": 26,
  "月日": 27,
  "寝坊": 28, "ねぼう": 28,
  "シャドウ": 29, "しゃどう": 29,
  "勉強": 30,
  "駆け引き": 31, "かけひき": 31,
  "景色": 32, "けしき": 32,
  "天才": 33, "てんさい": 33,
  "雷": 34, "かみなり": 34,
  "spin": 35,
  "真実": 36, "しんじつ": 36, "シンジツ": 36,
  "平等": 37,
  "国王": 39,
  "睡眠": 45, "すいみん": 45,
  "磁石": 43,
  "深海": 42, "しんかい": 42,
  "言葉": 41, "コトバ": 41, "ことば": 41,
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
  [37,39,41],
  [6, 36, 45],
  [34, 43, 44],
  [15, 19, 20]
]

function open() {
  var x = document.getElementById("modal");
  x.style.display = "block";
  x.animate([{ opacity: '0' }, { opacity: '1' }], 700);
  document.getElementById("closeModal").style.display = "block";
  document.getElementById("miss").style.display = "none";
}
  
  function close() {
  var x = document.getElementById("modal");
  x.style.display = 'None';
}
function open1() {
  var x = document.getElementById("modal1");
  x.style.display = "block";
  x.animate([{ opacity: '0' }, { opacity: '1' }], 700);
  document.getElementById("closeModal").style.display = "block";
  document.getElementById("miss").style.display = "none";
}
function close1() {
  var x = document.getElementById("modal1");
  x.style.display = 'None';
}
function open2() {
  var x = document.getElementById("modal2");
  x.style.display = "block";
  x.animate([{ opacity: '0' }, { opacity: '1' }], 700);
  document.getElementById("closeModal").style.display = "block";
  document.getElementById("miss").style.display = "none";
}
function close2() {
  var x = document.getElementById("modal2");
  x.style.display = 'None';
}

async function isopen(){
  var firstsolved=await kv.get(id+"firstsolved");
  console.log(firstsolved);
  if (firstsolved[0] && firstsolved[1] && firstsolved[2]){
    console.log(1);
    var x=document.getElementById("openloc");
    x.href="/openlocker"
    document.location.href="/openlocker"
  }
}

export default function Home() {



  //サーチボタンが押されたらテキストボックスの値に対応する返しを行う。該当する返しがない場合は "検索した内容"に関連する内容はみつかりませんでしたと表示。 
  // textは検索ボックス内の内容
  //SearchedWordは検索ボタンが押されたときの検索ボックス内の内容
  //ReturnWord1は表示する返しの言葉を格納




  async function OnSearch() {


 

    var SearchedWord = document.getElementById("SearchBox").value;
    var SearchData_keys = Object.keys(FirstMissionNazoID);
    var ReturnWord = SearchData_keys.find(function (value) {
      return value == SearchedWord;
    })

    if (ReturnWord == undefined) {


      document.getElementById("miss").style.display = "block";
      return;
    }
    var IsYourProb = false;
    for (var i = 0; i < 3; i++) {
      if (groups[PlayerID][i] == FirstMissionNazoID[ReturnWord]) IsYourProb = true;
    }
    if (IsYourProb == false) {

      document.getElementById("miss").style.display = "block";

      return;
    }


    
    if (FirstMissionNazo[SearchedWord] == 1){
       open();
       itemfl[9] = true;
       Set("ITEM",itemfl);
       console.log(itemfl);

    }
       if (FirstMissionNazo[SearchedWord] == 2) {
        open1();
        itemfl[7] = true;
        Set("ITEM",itemfl);
        console.log(2);

     }
        if (FirstMissionNazo[SearchedWord] == 3){ 
          open2();
          itemfl[8] = true;
          Set("ITEM",itemfl);
          console.log(3);
        }
    var ITEMUNLCOKED=await kv.get(id+"ITEMUNLCOKED");
    ITEMUNLCOKED[FirstMissionNazo[SearchedWord]-1] = true;
    Set("ITEMUNLCOKED",ITEMUNLCOKED)

  };

  function a() {
    close3()
    clickednum++;
    const video = document.createElement('video');
    const canvasElement = document.getElementById('canvas');
    const canvas = canvasElement.getContext('2d');

    let isReadQR = false;

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
        video.srcObject = stream;
        video.setAttribute('playsinline', true);
        video.play();
        requestAnimationFrame(tick);

      });

    function tick() {

      if (video.readyState === video.HAVE_ENOUGH_DATA) {

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
            var x=code.data;
            if (groups[PlayerID][0]==x || groups[PlayerID][1]==x ||groups[PlayerID][2]==x){
              open3(code.data);
            }
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
              <div class={styles.btnname}>　　回路　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/DigitalKey" onClick={plus} className={styles.btn}>
              <div class={styles.btnname}>　電子キー　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/FirstMission"onClick={() =>{plus();isopen()}} id="openloc" className={styles.btn}>
              <div class={styles.btnname}>　ロッカー</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>

        </div>



     


      <button id="camerabutton" onClick={a} className={styles.Camerabtn}>カメラを起動する</button>
      <canvas id="canvas" className={styles.canvas} hidden></canvas>



      <div className={styles.wrap}>
        <div className={styles.search}>
          <input   autoComplete="off" id="SearchBox" type="text" className={styles.searchTerm} placeholder="答えを入力" />
          <button onClick={OnSearch} type="submit" className={styles.searchButton}>🔍
          </button>
        </div>
      </div>


      <p id = "miss" className  = {styles.miss}>不正解</p>

      <div id="mystery" className={styles.mystery}>
        <span id="closeModal1" className={styles.closeModal1} onClick={close3}>&times;</span>
        <img id="mysteryimg" />
      </div>

      <div id="modal" className={styles.modal}>

        <img id="ItemImage" className={styles.ItemImage1} src="/KEYCODES.png" />
        <span id="closeModal" className={styles.closeModal} onClick={close}>&times;</span>

        <p id="ItemGet" className={styles.Model_text}>複数の紙切れを見つけた</p>
      </div>
      <div id="modal1" className={styles.modal}>

        <img id="ItemImage1" className={styles.ItemImage} src="/fuse.png" />
        <span id="closeModal" className={styles.closeModal} onClick={close1}>&times;</span>

        <p id="ItemGet1" className={styles.Model_text}>ヒューズを見つけた</p>
      </div>
      <div id="modal2" className={styles.modal}>

        <img id="ItemImage2" className={styles.ItemImage} src="/DotPic.png" />
        <span id="closeModal" className={styles.closeModal} onClick={close2}>&times;</span>

        
        <p id="ItemGet2" className={styles.Model_text}>ドット絵を見つけた</p>
      </div>
      </div>
      













    </div>





  );

}
