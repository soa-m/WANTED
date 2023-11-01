import Link from 'next/link';
import styles from '../styles/item.module.css';
import Image from "next/image";
import { useEffect } from 'react'

var ismailunlocked=[true, true,true,true];

function open2(){
  var x=document.getElementById(styles.Modal2);
  x.style.display='block';
}
function close2(){
  var x=document.getElementById(styles.Modal2);
  x.style.display='None';
}
function open3(){
  var x=document.getElementById(styles.Modal3);
  x.style.display='block';
}
function close3(){
  var x=document.getElementById(styles.Modal3);
  x.style.display='None';
}

function openmails(eve){
  var X=[];
  X=[document.getElementById(styles.mailcont1),document.getElementById(styles.mailcont2),document.getElementById(styles.mailcont3),document.getElementById(styles.mailcont4),document.getElementById(styles.mailcont5),document.getElementById(styles.mailcont6),document.getElementById(styles.mailcont7),document.getElementById(styles.mailcont8)]
  console.log(X);
  for(let i=0;i<8;i++){
    X[i].style.display="none"
  }
  X[eve].style.display='block';
}



let itemfl=[false,false,false,false,false,false,false,false,false,false,false,false];
itemfl=[true,true,true,true,true,true,true,true,true,true,true,true];
let discri=[
    ["レコーダー","recoder",'/recoder.png',"Aの所持品と思われる黒色のレコーダー。幾つかデータが入ってるようだ。"],
    ["日記","diary",'/diary.png',"Aの名前がついている日記。これを読めばAの所在地がわかるかもしれない。"],
    ["アルバム","album",'/album.png',"沢山の写真が入ってるいるアルバム。どれも古い写真ばかりで、Aの行方を示していそうなものは無い。"],
    ["手紙","letter",'/letter.png',"Aに宛てられたと思われる何枚かの手紙。どれも古いものばかりだ。"],
    ["証言メモ","memo",'/memo.png',"Y妻から得られた証言を紙に起こしたもの。これを使えば事件を明るみにすることができるかもしれない。"],
    ["αの手記","handwriting",'/handwriting.png',"10年以上前に書かれた古い手記。これを読めばA父について何かわかるかもしれない。"],
    ["銀行の通帳とカード","bankbook,card",'/bank.png',"見れない銀行口座。海外のものらしい。"],
    ["地図","map",'/map.png',"これは地図です"],
    ["地図","map",'/map.png',"これは地図です"],
    ["地図","map",'/map.png',"これは地図です"],
    ["地図","map",'/map.png',"これは地図です"],
    ["地図","map",'/map.png',"これは地図です"],
]
let discri2=[
  ["","",'hatena.png',""],
  ["","",'hatena.png',""],
  ["","",'hatena.png',""],
  ["","",'hatena.png',""],
  ["","",'hatena.png',""],
  ["","",'hatena.png',""],
  ["","",'hatena.png',""],
  ["","",'hatena.png',""],
  ["","",'hatena.png',""],
  ["","",'hatena.png',""],
  ["","",'hatena.png',""],
  ["","",'hatena.png',""],
]
function display(num){
    var name=document.getElementById("name");
    var nameeng=document.getElementById("nameeng");
    var pic=document.getElementById(styles.pic);
    var text=document.getElementById("text");
    if (itemfl[num]){
        name.textContent=discri[num][0];
        nameeng.textContent=discri[num][1];
        pic.src=discri[num][2];
        text.textContent=discri[num][3];
        pic.style.display="block"
    }
    else{
        name.textContent=discri2[num][0];
        nameeng.textContent=discri2[num][1];
        pic.src=discri2[num][2];
        text.textContent=discri2[num][3];
        pic.style.display="block"
    }
    var letterbtn=document.getElementById("letterbtn");
    if (num==3 && itemfl[num]){
        letterbtn.style.display="block";
    }
    else{
        letterbtn.style.display="none";
    }
    
}
function letter(){
    console.log(1);
}
export default function Home() {
    let imgs=["hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png"]
    for(let i=0;i<12;i++){
        if (itemfl[i]){
            imgs[i]=discri[i][2]
        }
    }
    useEffect(() => {
        const modal2= document.getElementById(styles.Modal2);
        const modal3 = document.getElementById(styles.Modal3);
        window.addEventListener('click', outsideClose);
        function outsideClose(e) {
          if (e.target == modal2) {
            modal2.style.display = 'none';
          }
          if (e.target == modal3) {
            modal3.style.display = 'none';
          }
        }
    })
    return (
      <>
        <div className={styles.container}><div className={styles.buttons}>

          <div className={styles.empty}></div>

          <div className={styles.btnbox}>
            <Link href="/Information" className={styles.btn} id={styles.story}>
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
            <Link href="/item" className={styles.selectedbtn} id={styles.item}>
            </Link>
          </div>
        </div>
            <div className={styles.items}>
                <div className={styles.itemtab}>
                    <div className={styles.item} onClick={()=>display(0)}>
                        <img src={imgs[0]} width={140} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(1)}>
                        <img src={imgs[1]} width={120} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(2)}>
                        <img src={imgs[2]} width={100} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(3)}>
                        <img src={imgs[3]} width={120} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(4)}>
                        <img src={imgs[4]} width={120} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(5)}>
                        <img src={imgs[5]} width={130} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(6)}>
                        <img src={imgs[6]} width={120} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(7)}>
                        <img src={imgs[7]} width={110} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(8)}>
                        <img src={imgs[8]} width={110} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(9)}>
                        <img src={imgs[9]} width={110} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(10)}>
                        <img src={imgs[10]} width={110} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(11)}>
                        <img src={imgs[11]} width={110} className={styles.itemm}/>
                    </div>
                </div>

            </div>
            <div className={styles.discription}>
                <div className={styles.name} id="name"></div>
                <div className={styles.nameeng} id="nameeng"></div>
                <div className={styles.pic}>
                    <Image src="" width={300} height={300} id={styles.pic}></Image>
                </div>
                <div className={styles.text} id="text"></div>
                <div className={styles.letterbtn} id="letterbtn">
                    <button className={styles.letternobtn} onClick={() => {
          open2();
          openmails(1);
        }}>開く</button>
                </div>
            </div>
        </div>


        <div id={styles.Modal2} className={styles.modal}>
        <div className={styles.modalcontent}>
          <div className={styles.modalbody}>
            <div className={styles.modalmails}>

            <div className={styles.mailicon} id={styles.mailicon1} onClick={()=>openmails(0)}></div>
            <div className={styles.mailicon} id={styles.mailicon2} onClick={()=>openmails(1)}></div>
            <div className={styles.mailicon} id={styles.mailicon3} onClick={()=>openmails(2)}></div>
            <div className={styles.mailicon} id={styles.mailicon4} onClick={()=>openmails(3)}></div>
            <div className={styles.mailicon} id={styles.mailicon5} onClick={()=>openmails(4)}></div>
            <div className={styles.mailicon} id={styles.mailicon6} onClick={()=>openmails(5)}></div>
            <div className={styles.mailicon} id={styles.mailicon7} onClick={()=>openmails(6)}></div>
            <div className={styles.mailicon} id={styles.mailicon8} onClick={()=>openmails(7)}></div>
            </div>

            <div className={styles.modalmailcont} id={styles.mailcont1}>
              <p>手紙の内容なのだ</p>
            </div>

            <div className={styles.modalmailcont} id={styles.mailcont2}>
              <p>手紙の内容なのだ2</p>
            </div>
            
            <div className={styles.modalmailcont} id={styles.mailcont3}>
              <p>手紙の内容なのだ3</p>
            </div>

            <div className={styles.modalmailcont} id={styles.mailcont4}>
              <p>手紙の内容なのだ4</p>
            </div>
            
            <div className={styles.modalmailcont} id={styles.mailcont5}>
              <p>手紙の内容なのだ5</p>
            </div>
            
            <div className={styles.modalmailcont} id={styles.mailcont6}>
              <p>手紙の内容なのだ6</p>
            </div>
            
            <div className={styles.modalmailcont} id={styles.mailcont7}>
              <p>手紙の内容なのだ7</p>
            </div>
            
            <div className={styles.modalmailcont} id={styles.mailcont8}>
              <p>手紙の内容なのだ8</p>
            </div>
            
          </div>


        </div>
      </div>
      </>
    );
  }
  
  