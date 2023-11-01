import Link from 'next/link';
import styles from '../styles/item.module.css';
import Image from "next/image";
import { useEffect } from 'react'

var diarycontent=[
  "家の蛇口からお湯が出なくなった。どうやらガスを止められたらしい。シャワーはまだ我慢できるけど、料理で水しか使えないのはしんどいな…。まだ寒い季節じゃなかっただけマシ、ってことにしておこう。",
  "今日は久しぶりに「あの人」のお家へお邪魔した。やっぱり話を聞いて貰える人がいるのはいいね。気分転換になったかな。僕のことを考えて色々な提案をしてくれたのも、本当にありがたかった。けど、今はもう少し自分の力で頑張ってみようかな。本当はもっと長居したかったけど、家族が帰ってきちゃうからって帰された。仕方なし。",
  "久しぶりに家のポストを見た。役所から届いたであろう、赤い封筒がギッシリ。中身は見ていないけれど、未払いだの滞納だのが沢山あって大変らしい。母さん、自分は贅沢三昧遊び歩いているのに、家のことはいつまでもだらしないんだな。やっぱり、僕が何とかしないとダメみたい。辛い。",
  "遂に！母さんの旅行が14日目を迎えた。あと二週間耐えれば、母さんがハワイだかグアムだかサイパンだかから帰ってくる。家に帰ってきたら、流石にガスの料金も納めに行くでしょ。そしたら地獄から解放される。先が見えた、気がする。",
  "今日も父さんは部屋から出てこない。思えば、二人で最後に会話したのって何年前だろう。ここ２年くらいは顔も合わせていない気がする。部屋の前に置いた夕食がなくなっていたから、まだ生きてはいるはず。深夜にもう一度部屋の前を通ったら、空になった食器の傍らに、ティッシュへ書かれたメモが残されていた。「米　冷たくて固い」",
  "集金の来客があった。電気料金が半年くらい払われていないらしい。催促されたから、事情を話して帰ってもらった。怒られはしなかったけど、憐れむような目で見られるのが一番辛い。母さんが食費として置いていった3000円がもう無くなりそう。10日くらいなら、何も食べなくても凌げるのだろうか…真弥華さんのところへ行ったら、最低限の寝食は担保されるだろう。要検討。",
  "もういやだ。",
  "これ以上は我慢できない。前からの計画を実行する。本当は文化祭に参加したかったけど…まずは安全な環境で衣食住を満たしたい。"
]
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
    if (!itemfl[num]){
      letterbtn.style.display="none";
    }
    else{
      console.log(num);
      if (num==1){
        letterbtn.onclick=()=>{diary()};
        console.log(num);
        letterbtn.style.display="block";
      }
      else if (num==3){
        letterbtn.onclick=()=>{open2();openmails(1);}
        letterbtn.style.display="block";
      }
      else{
        letterbtn.onClick=()=>{};
        letterbtn.style.display="none";
      }
    }
    
}
function letter(){
    console.log(11);
}
function diary(){
  open3();
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
                <div className={styles.letterbtn} id="letterbtn" onClick={()=>{}}>
                    <button className={styles.letternobtn}>開く</button>
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
      <div id={styles.Modal3} className={styles.modal}>
        <div className={styles.modalcontent2}>
<p>【10月25日】<br/>{diarycontent[0]}</p>
<p>【10月26日】<br/>{diarycontent[1]}</p>
<p>【10月27日】<br/>{diarycontent[2]}</p>
<p>【10月28日】<br/>{diarycontent[3]}</p>
<p>【10月29日】<br/>{diarycontent[4]}</p>
<p>【10月30日】<br/>{diarycontent[5]}</p>
<p>【10月31日】<br/>{diarycontent[6]}</p>
<p>【11月1日】 <br/>{diarycontent[7]}</p>
        </div>
      </div>
      </>
    );
  }
  
  
