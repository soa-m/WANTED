import { useRef, useState, useEffect } from "react"
import React from "react";
import styles from '../styles/Home.module.css';
import { SearchData, FirstItems } from '../components/MainProgram';
import Link from 'next/link';
import jsQR from "jsqr";
export default function Home() {


  //サーチボタンが押されたらテキストボックスの値に対応する返しを行う。該当する返しがない場合は "検索した内容"に関連する内容はみつかりませんでしたと表示。 
  // textは検索ボックス内の内容
  //SearchedWordは検索ボタンが押されたときの検索ボックス内の内容
  //ReturnWord1は表示する返しの言葉を格納

  function OnSearch() {
    var SearchedWord = document.getElementById("SearchBox").value;
    console.log(SearchedWord);
    var SearchData_keys = Object.keys(SearchData);
    var ReturnWord = SearchData_keys.find(function (value) {
      return value == SearchedWord;
    })

    if (ReturnWord == undefined) ReturnWord = SearchedWord + "に関する内容は見つかりませんでした";
    else ReturnWord = FirstSearchData[SearchedWord];
    document.getElementById("SearchResult").innerHTML = ReturnWord;
    console.log(ReturnWord);

  };
  var clickednum = 0;
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
          document.getElementById('qr-msg').textContent = `QRコード：${code.data}`;
          isReadQR = false;
        }
      }
      if (clickednum % 2 == 1) {
        requestAnimationFrame(tick);
        document.getElementById("camerabutton").innerHTML = "カメラを停止する";
      } else {
        canvasElement.hidden = true;
        document.getElementById("camerabutton").innerHTML = "カメラを起動する";
      }
    }

  }
  return (


    <div>

      <div className={styles.container}>
        <div className={styles.buttons}>

          <div className={styles.empty}></div>

          <div className={styles.btnbox}>
            <Link href="/Information" className={styles.btn}>
              <div class={styles.btnname}>　情報　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>

          <div className={styles.btnbox}>
            <Link href="/Serch" className={styles.selectedbtn}>
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
        <div id="loading">📱 ブラウザのカメラの使用を許可してください。</div>
        <button id="camerabutton" onClick={a} className={styles.Camerabtn}>カメラを起動する</button>
        <canvas id="canvas" className={styles.canvas} hidden></canvas>
        <p id="qr-msg" className={styles.qrmsg}></p>



      </div>
      <div >

        <input className={styles.search_bar} id="SearchBox" type="text" placeholder="キーワードを入力"></input>

        <p id="SearchResult" className={styles.SearchReturn} >tinntinn</p>


        <input className={styles.search_submit} type="button" value="検索" onClick={OnSearch} /><br />




      </div>








    </div>





  );

}