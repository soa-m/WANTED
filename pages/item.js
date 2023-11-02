import Link from 'next/link';
import styles from '../styles/item.module.css';
import Image from "next/image";
import { useEffect } from 'react'
var lettertexts=[
  "\n10/25(水)\n\n明日は大雨みたいですね。残念です。ところで、\n日曜に家を出て行ったきり、\n私の猫が帰ってきません。\nのら猫になっていないか心配です。\n家族の一員なので、気が気でありません。\nにている猫がいたら、教えてください。\n",
  "\n10/29(日)\n\nおかげさまで、おととい猫が帰ってきました。\n私は昨日から1週間の帰省をしているので、それまでに帰って来てくれて良かったわ。\n帰ってきたのは嬉しかったのですが、太って体重が2倍になっていてびっくりです。猫は野生化すると太るものなのでしょうか。\nあと、木曜の件はよろしく。",
  "\n11/1(水)\n\nよう、我こそは社会正義の執行人、井戸端与太郎だぜ！\n俺は今、君のお父さんについて調べているところだ。\n明日、君んちに取材でお邪魔させてもらうよ〜\n待っててくれ！",
  "\n11/1(水)\n\nあらっ、初翔くん、おはよぉ〜\n明後日からつくこま高校の文化祭ですってね。\n準備で疲れて体調を崩したりしてないかしら。心配だわ…\nおすすめの出し物があったら教えてほしいわ。\n文化祭でお会いしましょ〜",
  "\n10/26(木)\n\nこれは不幸の手紙です。\n受け取った人は、これと同じ文面の手紙を3日以内にあなたの友人5人に送らなければなりません。\nこれを守らなかった場合、あなたはこの世から蒸発してしまうかもしれませんよ。",
  "\n10/28(土)【実寸大模試のお知らせ】\n\nあなたの今の実力が実寸大でわかる！\n第３回実寸大全国模試は11/5(日)！\nお申し込みは11/2(木)まで！"
]
var memotext=["A母 : 夫が著名な作家であり、金銭的に余裕があるのに、自身や家族にほとんどお金を入れないことに不満を持ち続けており、当時夫との関係も悪化していた。","X : 大学卒業後、職に就くことが出来ず、酒癖もあり、極度にお金に困っていたところ、Yに今回の事件を起こすよう耳打ちされ、長年のA父に対する劣等感なども重なり、実行。殺害後、自らがA父として生き、印税を手に入れることに成功した。","Y : Y妻には伝えていないが、大学生時代からハマっていたFXで大損をしてしまい、相当な借金を抱えていた、Xの双子が著名でお金持ちな小説家であることに目をつけ、今回の犯行を企てた。"]
var syukitext=[
  "ここ数日原稿の締め切りに追われる日々であったが、今日にしてとうとう開放された。気づかぬ間に、私の肌に触れる湿気は少なくなり、体が久しく感じていなかった寒気を思い出した。そういえば、明日は(Aの下の名前)を健康診断に連れて行かねば。(Aの下の名前)が歩き出してから数か月が経つが、その足取りの確かさが日々増していく。歩くという目的が、早く向かうという目的に変わりつつある息子の成長を見届けられるこの身は一体どれほど幸福なことなのだろう。しかし、(A妻の下の名前)はなぜあれほどにまで息子に対して無感情なのだろうか。",
  "(Aの下の名前)の指の動きがすこし鈍いと医者に告げられた。ひと月前に出た高熱の後遺症なのではと疑われ、近いうちに二駅となりの大学病院で検査を行うことになってしまった。どうか、大事でなければいいが。(A妻の下の名前)にこのことを告げたが、相変わらず何も気にしていないようだ。どうやら明日から行く、同好会での集団旅行に対する興味しかないようだ。その興味を少しでも息子に与えられないのだろうか。",
  "頭が回らない。鼻から目頭に体液が突き抜けるこの気分が永遠に続きそうだ。そして、我に返った時には書斎が荒らされていた。憎いのは医師ではない。分かっている。だが、あの病状を告げた医師の顔を思い出す度に、反吐が出そうになる。20になる息子の姿が見えないと考えるだけで、その先の感情は出てこなかった。",
  "昨日は一日中、息子を連れて図書館に籠ったが、どこを探しても(架空の病気)についての文献が見当たらない。日本での症例は数件ほどしか確認されてないうえ、治療法が存在しない病気がなぜ、私の息子を選ぶのか。なぜ他をあたってくれないのか。",
  "再び、病院へと赴いた。息子の検査を待つ間、私は眠ってしまった。前回の検査の日から私は一睡もしていなかったことを思いだした。いまだに鼻から抜けないアルコールの匂いに嫌気がさしながら、あさって帰ってくる妻に、このことをいまだに何も伝えていなかったことを思い出した。",

]
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
  for(let i=0;i<6;i++){
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
    ["地図","map",'/map.png',"どこか知らない町の地図だ。市役所が番地？？にあるようだ。"],
    ["ヒューズ","fuse",'/fuse.png',"どこかに置くことができるかもしれない。"],
    ["ドット絵","DotPic",'/DotPic2.png',"TKの文字が表わされた5x5のドット絵。"],
    ["キーコード","keycodes",'/KEYCODES.png',"シュレッダーにかけられていて、元の内容が分からない。"],
    ["地図","map",'/mapmap.png','どこか知らない町の地図だ。交番が番地G1にあるようだ。'],
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
      if (num==0){
        letterbtn.onclick=()=>{open0()};
        console.log(num);
        letterbtn.style.display="block";
      }
      else if (num==1){
        letterbtn.onclick=()=>{diary()};
        console.log(num);
        letterbtn.style.display="block";
      }
      else if (num==2){
        letterbtn.onclick=()=>{album()}
        letterbtn.style.display="block";
      }
      else if (num==3){
        letterbtn.onclick=()=>{open2();openmails(0);}
        letterbtn.style.display="block";
      }
      else if (num==4){
        letterbtn.onclick=()=>{open4()}
        letterbtn.style.display="block";
      }
      else if (num==5){
        letterbtn.onclick=()=>{open5()}
        letterbtn.style.display="block";
      }
      else if (num==6){
        letterbtn.onclick=()=>{open66()}
        letterbtn.style.display="block";
      }
      else if (num==7){
        letterbtn.onclick=()=>{open6()}
        letterbtn.style.display="block";
      }
      else{
        letterbtn.onClick=()=>{};
        letterbtn.style.display="none";
      }
    }
    
}
function open0(){
  //nowmessage="M100"
  //realmessage="M100"
  console.log("111")
  document.location.href="./Information"
}
function letter(){
    console.log(11);
}
function diary(){
  open3();
}
function album(){
  var x=document.getElementById(styles.Modal4);
  x.style.display='block';
}
function open4(){
  var x=document.getElementById(styles.Modal5);
  x.style.display='block';
}

function open5(){
  var x=document.getElementById(styles.Modal6);
  x.style.display='block';
}
function open6(){
  var x=document.getElementById(styles.Modal7);
  x.style.display='block';
}
function open66(){
  var x=document.getElementById(styles.Modal8);
  x.style.display='block';
}

function closemodals(){
  var modals=[document.getElementById(styles.Modal2),document.getElementById(styles.Modal3),document.getElementById(styles.Modal4),document.getElementById(styles.Modal5),document.getElementById(styles.Modal6),document.getElementById(styles.Modal7),document.getElementById(styles.Modal8)]
  for (let i=0;i<modals.length;i++){
    modals[i].style.display="none";
  }
  
}
export default function Home() {
    let imgs=["hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png"]
    for(let i=0;i<12;i++){
        if (itemfl[i]){
            imgs[i]=discri[i][2]
        }
    }
    useEffect(() => {
      var modals=[document.getElementById(styles.Modal2),document.getElementById(styles.Modal3),document.getElementById(styles.Modal4),document.getElementById(styles.Modal5),document.getElementById(styles.Modal6),document.getElementById(styles.Modal7),document.getElementById(styles.Modal8)]
      window.addEventListener('click', outsideClose);
      function outsideClose(e) {
        for(let i=0;i<modals.length;i++){
          let modal=modals[i];
          if (e.target==modal){
            modal.style.display = 'none';
          }
        }
      }
    })
    return (
      <>
        <div className={styles.container}><div className={styles.buttons}>

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
            <div className={styles.items}>
                <div className={styles.itemtab}>
                    <div className={styles.item} onClick={()=>display(8)}>
                        <img src={imgs[8]} width={110} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(9)}>
                        <img src={imgs[9]} width={110} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(10)}>
                        <img src={imgs[10]} width={110} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(7)}>
                        <img src={imgs[7]} width={110} className={styles.itemm}/>
                    </div>
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
                    <button className={styles.letternobtn}>中身を見る</button>
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
            </div>

            <div className={styles.modalmailcont} id={styles.mailcont1}>
              <div className={styles.letterfromto}>
                <p>From: 猫田真弥華　埼玉県深谷市城北4-37</p>
                <p>To: 星野初翔　埼玉県深谷市城東2-35</p>
              </div>
              <div className={styles.lettercontent}>
                {lettertexts[0]}
              </div>
            </div>

            <div className={styles.modalmailcont} id={styles.mailcont2}>
              <div className={styles.letterfromto}>
                <p>From:(差出人及び住所不明)</p>
                <p>To: 星野初翔　埼玉県深谷市城東2-35</p>
              </div>
              <div className={styles.lettercontent}>
                {lettertexts[4]}
              </div>
            </div>
            
            <div className={styles.modalmailcont} id={styles.mailcont3}>
              <div className={styles.letterfromto}>
                <p>From: 実寸大予備学校　群馬県伊勢崎市駿河大4丁目27</p>
                <p>To: 星野初翔　埼玉県深谷市城東2-35</p>
              </div>
              <div className={styles.lettercontent}>
                {lettertexts[5]}
              </div>
            </div>

            <div className={styles.modalmailcont} id={styles.mailcont4}>
              <div className={styles.letterfromto}>
                <p>From: 猫田真弥華　山梨県笛吹市南田374</p>
                <p>To: 星野初翔　埼玉県深谷市城東2-35</p>
              </div>
              <div className={styles.lettercontent}>
                {lettertexts[1]}
              </div>
            </div>
            
            <div className={styles.modalmailcont} id={styles.mailcont5}>
              <div className={styles.letterfromto}>
                <p>From: 犬飼良美　埼玉県深谷市城西5-19-305</p>
                <p>To: 星野初翔　埼玉県深谷市城東2-35</p>
              </div>
              <div className={styles.lettercontent}>
                {lettertexts[3]}
              </div>
            </div>
            
            <div className={styles.modalmailcont} id={styles.mailcont6}>
              <div className={styles.letterfromto}>
                <p>From: 『修春』記者 井戸端与太郎　東京都千代田区江戸町1-47</p>
                <p>To: 星野初翔　埼玉県深谷市城東2-35</p>
              </div>
              <div className={styles.lettercontent}>
                {lettertexts[2]}
              </div>
            </div>
            
          </div>


        </div>
      </div>
      <div id={styles.Modal3} className={styles.modal}>
        <div className={styles.modalcontent2}>
          <div className={styles.modaldiary1}>
            <p>【10月25日】<br/>{diarycontent[0]}</p><br/>
            <p>【10月26日】<br/>{diarycontent[1]}</p><br/>
            <p>【10月27日】<br/>{diarycontent[2]}</p><br/>
            <p>【10月28日】<br/>{diarycontent[3]}</p>
          </div>
          <div className={styles.modaldiary2}>
          <div className={styles.batsu2} onClick={()=>closemodals()}>×</div><br/>
            <p>【10月29日】<br/>{diarycontent[4]}</p><br/>
            <p>【10月30日】<br/>{diarycontent[5]}</p><br/>
            <p>【10月31日】<br/>{diarycontent[6]}</p><br/>
            <p>【11月1日】 <br/>{diarycontent[7]}</p><br/>
          </div>
        </div>
      </div>
      <div id={styles.Modal4} className={styles.modal}>
        <div className={styles.modalcontent2}>
          <div className={styles.modaldiary1}>
            <p>【10月25日】<br/>{diarycontent[0]}</p><br/>
            <p>【10月26日】<br/>{diarycontent[1]}</p><br/>
            <p>【10月27日】<br/>{diarycontent[2]}</p><br/>
            <p>【10月28日】<br/>{diarycontent[3]}</p><br/>
          </div>
          <div className={styles.modaldiary2}>
            <p>【10月29日】<br/>{diarycontent[4]}</p><br/>
            <p>【10月30日】<br/>{diarycontent[5]}</p><br/>
            <p>【10月31日】<br/>{diarycontent[6]}</p><br/>
            <p>【11月1日】 <br/>{diarycontent[7]}</p><br/>
          </div>
        </div>
      </div>
      <div id={styles.Modal5} className={styles.modal}>
        <div className={styles.modalcontent4}>
          <div className={styles.modalcontent4text}>
          <div className={styles.batsu3} onClick={()=>closemodals()}>×</div>
            <p>{memotext[0]}</p>
            <p>{memotext[1]}</p>
            <p>{memotext[2]}</p>
            
          </div>
        </div>
      </div>
      <div id={styles.Modal6} className={styles.modal}>
        <div className={styles.modalcontent5}>
          <div className={styles.batsu4} onClick={()=>closemodals()}>×</div>
          <div className={styles.modalcontent5text}>
            <p>2007.10.21<br/>{syukitext[0]}</p><br/>
            <p>2007.10.22<br/>{syukitext[1]}</p><br/>
            <p>2007.10.24<br/>{syukitext[2]}</p><br/>
            <p>2007.10.26<br/>{syukitext[3]}</p><br/>
            <p>2007.10.27<br/>{syukitext[4]}</p><br/>
          </div>
        </div>
      </div>
      <div id={styles.Modal7} className={styles.modal}>
        <div className={styles.modalcontent6}>
        </div>
      </div>
      <div id={styles.Modal8} className={styles.modal}>
        <div className={styles.modalcontent7}>
          <div className={styles.batsu} onClick={()=>closemodals()}>×</div>
          <input type="text"/>
        </div>
      </div>
      </>
    );
  }
  
  