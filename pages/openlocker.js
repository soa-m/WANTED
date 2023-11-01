import styles from '../styles/openlocker.module.css';
import {useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link';

var ismailunlocked=[true, false,false,false];

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


async function input2(){
  var x=document.getElementById("input2");
  var s=x.value;
  var y=document.getElementById("judge2");
  if (s=="うらぎり"){
      x.value="";
      ismailunlocked[1]=true;
      y.textContent="やったね";
      await new Promise(resolve => setTimeout(resolve, 1000))
      var z=document.getElementById(styles.lock1);
      z.style.display="none";
      openmail2();
      y.textContent="";
  }
  else{
      x.value="";
      y.textContent="ぶっぶー";
  }
}
async function input3(){
  var x=document.getElementById("input3");
  var s=x.value;
  var y=document.getElementById("judge3");
  if (s=="827"){
      x.value="";
      ismailunlocked[2]=true;
      y.textContent="やったね";
      await new Promise(resolve => setTimeout(resolve, 1000))
      var z=document.getElementById(styles.lock2);
      z.style.display="none";
      openmail3();
      y.textContent="";
  }
  else{
      x.value="";
      y.textContent="ぶっぶー";
  }
}

async function input4(){
  var x=document.getElementById("input4");
  var s=x.value;
  var y=document.getElementById("judge4");
  if (s=="やまないあめ"){
      x.value="";
      ismailunlocked[3]=true;
      y.textContent="やったね";
      await new Promise(resolve => setTimeout(resolve, 1000))
      var z=document.getElementById(styles.lock3);
      z.style.display="none";
      openmail4();
      y.textContent="";
  }
  else{
      x.value="";
      y.textContent="ぶっぶー";
  }
}
export default function Home() {
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
    let mail2fl=false;
    let mail3fl=false;
   
    return (
      <>
      <div className={styles.container}>
        <div className={styles.buttons}>
           
        </div>
        <div className={styles.main}>
            <div className={styles.letter}>
            <Image src="/letter.png" width={250} height={200} onClick={() => {
          open2();
          openmail1();
        }}/>
            </div>
            <div className={styles.recoder}>
            <Image src="/recoder.png" width={100} height={200} />
            </div>
        </div>      
      </div>
      <div id={styles.Modal2} className={styles.modal}>
        <div className={styles.modalcontent}>
          <div className={styles.modalbody}>
            <div className={styles.modalmails}>

              <div className={styles.mailicon} onClick={openmail1}>

              </div>

              <div className={styles.mailicon} onClick={openmail2}>
                <div className={styles.lock} id={styles.lock1}></div>
              </div>

              <div className={styles.mailicon} onClick={openmail3}>
                <div className={styles.lock} id={styles.lock2}></div>
              </div>

              <div className={styles.mailicon} onClick={openmail4}>
                <div className={styles.lock} id={styles.lock3}></div>
              </div>

            </div>
            <div className={styles.modalmailcont} id={styles.mailcont1}>
              <p>手紙の内容なのだ</p>
              <p><Link href={"/novel_1.pdf"} target="_blank">同封された小説を読む^^;</Link></p>
            </div>

            <div className={styles.modalmailcont} id={styles.nomailcont1}>
              <p>手紙の内容じゃないのだ1</p>
            </div>
            

            <div className={styles.modalmailcont} id={styles.mailcont2}>
              <p>手紙の内容なのだ2</p>
              <p><Link href={"/novel_2.pdf"} target="_blank">同封された小説を読む^^;</Link></p>
            </div>
            
            <div className={styles.modalmailcont} id={styles.nomailcont2}>
              <p>手紙が見れないのだ2 TT</p>
              <div className={styles.inputline}>
                <input type="text" placeholder="カギ" id="input2"/>
                <input type="submit" value="送信" onClick={input2}></input>
              </div>
              <div className={styles.judge} id="judge2"></div>
            </div>
            
            <div className={styles.modalmailcont} id={styles.mailcont3}>
              <p>手紙の内容なのだ3</p>
              <p><Link href={"/novel_3.pdf"} target="_blank">同封された小説を読む^^;</Link></p>
            </div>
            
            <div className={styles.modalmailcont} id={styles.nomailcont3}>
              <p>手紙が見れないのだ3 TT</p>
              <div className={styles.inputline}>
                <input type="text" placeholder="カギ" id="input3"/>
                <input type="submit" value="送信" onClick={input3}></input>
              </div>
              <div className={styles.judge} id="judge3"></div>
            </div>

            <div className={styles.modalmailcont} id={styles.mailcont4}>
              <p>手紙の内容なのだ4</p>
              <p><Link href={"/novel_4.pdf"} target="_blank">同封された小説を読む^^;</Link></p>
            </div>
            
            <div className={styles.modalmailcont} id={styles.nomailcont4}>
              <p>手紙が見れないのだ4 TT</p>
              <div className={styles.inputline}>
                <input type="text" placeholder="カギ" id="input4"/>
                <input type="submit" value="送信" onClick={input4}></input>
              </div>
              <div className={styles.judge} id="judge4"></div>
            </div>

          </div>


        </div>
      </div>
      </>
    );
}
