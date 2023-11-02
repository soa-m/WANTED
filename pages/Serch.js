import { useRef, useState, useEffect } from "react"
import React from "react";
import styles from '../styles/Search.module.css';
import { SearchData, FirstItems } from '../components/MainProgram';
import Link from 'next/link';
import jsQR from "jsqr";





function open() {
  var x = document.getElementById("modal");
  x.style.display = "block";
  x.animate([{ opacity: '0' }, { opacity: '1' }], 700);
  document.getElementById("closeModal").style.display = "block";

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

}
function close1() {
  var x = document.getElementById("modal1");
  x.style.display = 'None';
}

function onbell(){
  document.location.href = "/Information";
}

export default function Home() {


  //サーチボタンが押されたらテキストボックスの値に対応する返しを行う。該当する返しがない場合は "検索した内容"に関連する内容はみつかりませんでしたと表示。 
  // textは検索ボックス内の内容
  //SearchedWordは検索ボタンが押されたときの検索ボックス内の内容
  //ReturnWord1は表示する返しの言葉を格納

  function OnSearch() {
    var x = document.getElementById("Town").value;

    var y = document.getElementById("Address").value;

    var z = document.getElementById("roomnum").value;

    if ((x == "米草" || x == "べいくさ") && (y == "B4") && z == "304") {
      open();
    }
    else {
      open1();
    }
  }



  return (


    <div>

      <div className={styles.container}>
        <div className={styles.buttons}>

          <div className={styles.empty}></div>
          <div className={styles.btnbox}>
            <Link href="/Serch" className={styles.btn}>
              <div className={styles.btnname}>　移動　</div>
              <div className={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/Relations" className={styles.btn} id={styles.connection}>
            </Link>
          </div>
 
          <div className={styles.btnbox}>
            <Link href="/item" className={styles.selectedbtn} id={styles.item}>
            </Link>
          </div>
          
       
        </div>


        <div className={styles.wrap}>
          <div className={styles.search}>
            <input   autocomplete="off" id="Town" type="text" className={styles.searchTerm} placeholder="町名を入力" />
            <p className={styles.ser}>町</p>

          </div>
        </div>
        <div className={styles.wrap1}>
          <div className={styles.search}>
            <input   autocomplete="off" id="Address" type="text" className={styles.searchTerm} placeholder="番地を入力" />

          </div>
        </div>
        <div className={styles.wrap2}>
          <div className={styles.search}>
            <input    autocomplete="off" id="roomnum" type="text" className={styles.searchTerm} placeholder="号室を入力(任意)" />
            <p className={styles.ser}>号室</p>
          </div>
        </div>
        <button id="camerabutton" onClick={OnSearch} className={styles.Camerabtn}>移動する</button>
      </div>
      <div id="modal" className={styles.modal}>

        <p id="ItemGet" className={styles.Model_text}>猫田家の前についた</p>
        <button id ="bell" className= {styles.bell} onClick = {onbell}>呼び鈴を押す</button>
      </div>
      <div >
        <div id="modal1" className={styles.modal1}>


          <span id="closeModal" className={styles.closeModal} onClick={close1}>&times;</span>

          <p id="ItemGet1" className={styles.Model_text1}>Aはここにはいない</p>
        </div>``



      </div>








    </div>





  );

}