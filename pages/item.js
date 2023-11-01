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



function openmail1(){
  var x1=document.getElementById(styles.mailcont1);
  var x2=document.getElementById(styles.mailcont2);
  var x3=document.getElementById(styles.mailcont3);
  var x4=document.getElementById(styles.mailcont4);
  var y1=document.getElementById(styles.nomailcont1);
  var y2=document.getElementById(styles.nomailcont2);
  var y3=document.getElementById(styles.nomailcont3);
  var y4=document.getElementById(styles.nomailcont4);
  x2.style.display='none';
  x3.style.display='none';
  x4.style.display='none';
  y2.style.display='none';
  y3.style.display='none';
  y4.style.display='none';
  if (ismailunlocked[0]){
    x1.style.display='block';
    y1.style.display='none';
  }
  else{
    y1.style.display='block';
    x1.style.display='none';
  }
}

function openmail2(){
  var x1=document.getElementById(styles.mailcont1);
  var x2=document.getElementById(styles.mailcont2);
  var x3=document.getElementById(styles.mailcont3);
  var x4=document.getElementById(styles.mailcont4);
  var y1=document.getElementById(styles.nomailcont1);
  var y2=document.getElementById(styles.nomailcont2);
  var y3=document.getElementById(styles.nomailcont3);
  var y4=document.getElementById(styles.nomailcont4);
  x1.style.display='none';
  x3.style.display='none';
  x4.style.display='none';
  y1.style.display='none';
  y3.style.display='none';
  y4.style.display='none';
  if (ismailunlocked[1]){
    x2.style.display='block';
    y2.style.display='none';
  }
  else{
    y2.style.display='block';
    x2.style.display='none';
  }
}
function openmail3(){
  var x1=document.getElementById(styles.mailcont1);
  var x2=document.getElementById(styles.mailcont2);
  var x3=document.getElementById(styles.mailcont3);
  var x4=document.getElementById(styles.mailcont4);
  var y1=document.getElementById(styles.nomailcont1);
  var y2=document.getElementById(styles.nomailcont2);
  var y3=document.getElementById(styles.nomailcont3);
  var y4=document.getElementById(styles.nomailcont4);
  x1.style.display='none';
  x2.style.display='none';
  x4.style.display='none';
  y1.style.display='none';
  y2.style.display='none';
  y4.style.display='none';
  if (ismailunlocked[2]){
    x3.style.display='block';
    y3.style.display='none';
  }
  else{
    y3.style.display='block';
    x3.style.display='none';
  }
}
function openmail4(){
  var x1=document.getElementById(styles.mailcont1);
  var x2=document.getElementById(styles.mailcont2);
  var x3=document.getElementById(styles.mailcont3);
  var x4=document.getElementById(styles.mailcont4);
  var y1=document.getElementById(styles.nomailcont1);
  var y2=document.getElementById(styles.nomailcont2);
  var y3=document.getElementById(styles.nomailcont3);
  var y4=document.getElementById(styles.nomailcont4);
  x1.style.display='none';
  x2.style.display='none';
  x3.style.display='none';
  y1.style.display='none';
  y2.style.display='none';
  y3.style.display='none';
  if (ismailunlocked[3]){
    x4.style.display='block';
    y4.style.display='none';
  }
  else{
    y4.style.display='block';
    x4.style.display='none';
  }
}


let itemfl=[false,false,false,false,false,false,false,false];
itemfl=[true,true,true,true,true,true,true,true];
let discri=[
    ["レコーダー","recoder",'/recoder.png',"これはレコーダーです"],
    ["日記","diary",'/diary.png',"これは日記です"],
    ["アルバム","album",'/album.png',"これはアルバムです"],
    ["手紙","letter",'/letter.png',"これは手紙です"],
    ["証言メモ","memo",'/memo.png',"これは証言メモです"],
    ["αの手記","handwriting",'/handwriting.png',"これはαの手記です"],
    ["銀行の通帳とカード","bankbook,card",'/bank.png',"これは銀行の通帳とカードです"],
    ["レコーダー","recoder",'/recoder.png',"これはレコーダーです"]
]
let discri2=[
    ["？？？","？？？",'hatena.png',""],
    ["？？？","？？？",'hatena.png',""],
    ["？？？","？？？",'hatena.png',""],
    ["？？？","？？？",'hatena.png',""],
    ["？？？","？？？",'hatena.png',""],
    ["？？？","？？？",'hatena.png',""],
    ["？？？","？？？",'hatena.png',""],
    ["？？？","？？？",'hatena.png',""]
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
    if (num==3){
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
    let imgs=["hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png"]
    for(let i=0;i<8;i++){
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
                        <img src={imgs[0]} width={200} className={styles.itemm}/>
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
                        <img src={imgs[4]} width={150} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(5)}>
                        <img src={imgs[5]} width={100} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(6)}>
                        <img src={imgs[6]} width={150} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(7)}>
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
          openmail1();
        }}>開く</button>
                </div>
            </div>
        </div>


        <div id={styles.Modal2} className={styles.modal}>
        <div className={styles.modalcontent}>
          <div className={styles.modalbody}>
            <div className={styles.modalmails}>

              <div className={styles.mailicon} id={styles.mailicon1} onClick={openmail1}>
              </div>

              <div className={styles.mailicon} id={styles.mailicon2} onClick={openmail2}>
              </div>

              <div className={styles.mailicon} id={styles.mailicon3} onClick={openmail3}>
              </div>

              <div className={styles.mailicon} id={styles.mailicon4} onClick={openmail4}>
              </div>

            </div>
            <div className={styles.modalmailcont} id={styles.mailcont1}>
              <p>手紙の内容なのだ</p>
            </div>

            <div className={styles.modalmailcont} id={styles.nomailcont1}>
              <p>手紙の内容じゃないのだ1</p>
            </div>
            

            <div className={styles.modalmailcont} id={styles.mailcont2}>
              <p>手紙の内容なのだ2</p>
            </div>
            
            <div className={styles.modalmailcont} id={styles.nomailcont2}>
              <p>手紙が見れないのだ2 TT</p>
            </div>
            
            <div className={styles.modalmailcont} id={styles.mailcont3}>
              <p>手紙の内容なのだ3</p>
            </div>
            
            <div className={styles.modalmailcont} id={styles.nomailcont3}>
              <p>手紙が見れないのだ3 TT</p>
            </div>

            <div className={styles.modalmailcont} id={styles.mailcont4}>
              <p>手紙の内容なのだ4</p>
            </div>
            
            <div className={styles.modalmailcont} id={styles.nomailcont4}>
              <p>手紙が見れないのだ4 TT</p>
            </div>

          </div>


        </div>
      </div>
      </>
    );
  }
  
  