import Link from 'next/link';
import styles from '../styles/item.module.css';
import Image from "next/image";
import { useEffect } from 'react'
import { createClient } from '@vercel/kv';
let kv = createClient({
  url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
  token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN
});
import { Set, GetID } from '../components/func';
let id = GetID();
let itemfl= await kv.get(id + "ITEM");

var lettertexts=[
  "\n10/25(水)\n\n今日で1週間の帰省の5日目。\n家に残ってる猫のことが心配になってきたわ…\nあと、となりの304号室の村田さんって覚えてる？ \nほら、あなたが小さい頃、たまに面倒をみててくれた人。 \nどうやら再来月あたりに引っ越しちゃうそうで、一度挨拶しておかない？",
  "\n10/20(金)\n\nおかげさまで、おととい猫が帰ってきました。\n私は昨日から1週間の帰省をしているので、それまでに帰って来てくれて良かったわ。\n帰ってきたのは嬉しかったのですが、太って体重が2倍になっていてびっくりです。猫は野生化すると太るものなのでしょうか。\nあと、となりの304号室の村田さんって覚えてる？ \n ほら、あなたが小さい頃、たまに面倒をみててくれた人。 \nどうやら再来月あたりに引っ越しちゃうそうで、一度挨拶しておかない？",
  "\n11/1(水)\n\nよう、我こそは社会正義の執行人、井戸端与太郎だぜ！\n俺は今、君のお父さんについて調べているところだ。\n明日、君んちに取材でお邪魔させてもらうよ〜\n待っててくれ！",
  "\n11/1(水)\n\nあらっ、初翔くん、おはよぉ〜\n明後日からつくこま高校の文化祭ですってね。\n準備で疲れて体調を崩したりしてないかしら。心配だわ…\nおすすめの出し物があったら教えてほしいわ。\n文化祭でお会いしましょ〜",
  "\n10/26(木)\n\nこれは不幸の手紙です。\n受け取った人は、これと同じ文面の手紙を3日以内にあなたの友人5人に送らなければなりません。\nこれを守らなかった場合、あなたはこの世から蒸発してしまうかもしれませんよ。",
  "\n10/28(土)【実寸大模試のお知らせ】\n\nあなたの今の実力が実寸大でわかる！\n第３回実寸大全国模試は11/5(日)！\nお申し込みは11/2(木)まで！"
]
var memotext=["A母 : 夫が著名な作家であり、金銭的に余裕があるのに、自身や家族にほとんどお金を入れないことに不満を持ち続けており、当時夫との関係も悪化していた。","X : 大学卒業後、職に就くことが出来ず、酒癖もあり、極度にお金に困っていたところ、Yに今回の事件を起こすよう耳打ちされ、長年のA父に対する劣等感なども重なり、実行。殺害後、自らがA父として生き、印税を手に入れることに成功した。","Y : Y妻には伝えていないが、大学生時代からハマっていたFXで大損をしてしまい、相当な借金を抱えていた、Xの双子が著名でお金持ちな小説家であることに目をつけ、今回の犯行を企てた。"]
var syukitext=[
  `初翔へ


　この手紙を読む頃の君はきっと、たくましさと優しさを兼ね備えた、素敵な大人になってくれていることでしょう。もしかすると私よりも背丈が高くなって、私が君を見上げなければならなくなっているかもしれませんね。

　さて、大人になってくれた初翔なら、今からする話を聞いても、冷静に自分なりの答えへたどり着いてくれると信じて、この手紙を記します。

　私はずっと、君に重大な隠し事をしてきました。実は、君が悩まされてきた「痺れ」や「こり」は、とある大病の予兆なのです。「先天的脳機能後退症候群」…手短に言えば、脳が不均等に成長し、主に体の運動をつかさどる部位が圧迫・損傷され、身体麻痺に繋がる難病です。日本での症例は少なく、2010年の時点で治療に関するノウハウは殆どない、まさに不治の病なのです。このまま放っておけば、君が40歳になるまでに、体の大半が運動機能停止へ陥ってしまうことでしょう。

　しかし、例え現代日本での治療が難しくとも、私は決して諦めません。アメリカでは既に治療法が確立されつつあるという噂もあるくらいですから、もう何年か待てば「先天的脳機能後退症候群」は治せる病気になることでしょう。だから、私は病気の治療を未来の医療へ、未来の初翔へ託そうと思います。

　お金のことは気にしなくて大丈夫。同封した通帳の口座に、君が生まれてきてから貯め続けたお金が入っています（暗証番号は、私にとって最も大事な8桁の数字です。君なら分かると思う）。十分な額を用意した自信はあるので、治療のためにぜひ役立ててください。

　近頃のXについての噂…何やら不穏なことを計画している様子は私も知っていますが、双子の片割れとして、Xのことは最後まで信用してやろうと思っています。もし私のこの判断のせいで、君が辛い思いをすることになってしまったら、その時は本当に申し訳ない。でも君なら、私のこの親バカならぬ「兄弟バカ」も理解してくれるんじゃないか、仮に私がいなくなっても、自分で考えて強く生きていってくれるのではないか、そう甘えたくなってしまったのです。

　初翔へ。生まれてきてくれてありがとう。どうか、君の人生が素晴らしいものでありますように。


星野秀吾より`

]
var diarycontent=[
"家の蛇口からお湯が出なくなった。どうやらガスを止められたらしい。シャワーはまだ我慢できるけど、料理で水しか使えないのはしんどいな…。",
"今日は久しぶりに「あの人」のお家へお邪魔した。目の前に自然が豊かな公園があってすごく居心地がいい。やっぱり話を聞いて貰える人がいるのはいいね。僕のことを考えて色々な提案をしてくれたのも、本当にありがたかった。けど、今はもう少し自分の力で頑張ってみようかな。目の前の通りから部活帰りらしい中学生の声が聞こえる。本当はもっと長居したかったけど、家族が帰ってきちゃうからって帰された。仕方なし。",
"遂に！母さんの旅行が14日目を迎えた。あと二週間耐えれば、母さんがハワイだかグアムだかサイパンだかから帰ってくる。そしたらガスの料金も納められるだろうし、地獄から解放される、はず。",
"今日も父さんは部屋から出てこない。思えば、二人で最後に会話したのは何年前だろう。長いこと顔も見ていない。食事を出したらちゃんと空になるから、生きてはいるんだろうけど。今日は、空になった食器の傍らに、ティッシュへ書かれたメモが残されていた。「米　冷たくて固い」",
"集金の来客があった。電気料金が半年くらい払われていないらしい。事情を話したら帰ってもらえたけど、憐れむような目で見られるのが一番辛い。母さんが食費として置いていった3000円がもう無くなりそう。10日くらいなら、何も食べなくても凌げるのだろうか…真弥華さんのところへ行ったら、最低限の寝食は担保されるだろう。要検討。",
"もういやだ。",
"これ以上は我慢できない。前からの計画を実行する。本当は文化祭に参加したかったけど…まずは安全な環境で衣食住を満たしたい。",


]
var ismailunlocked=[true, true,true,true];
function pass(){
   if(document.getElementById("password").value == "20061014"){
      document.location.href = "./Final";
   }
}
async function open2(){
  var x=document.getElementById(styles.Modal2);
  x.style.display='block';
}
async  function close2(){
  var x=document.getElementById(styles.Modal2);
  x.style.display='None';
}
async  function open3(){
  var x=document.getElementById(styles.Modal3);
  x.style.display='block';
}
async  function close3(){
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






let discri=[
    ["レコーダー","recoder",'/recoder.png',"Aの所持品と思われる黒色のレコーダー。幾つかデータが入ってるようだ。"],
    ["日記","diary",'/diary.png',"Aの名前がついている日記。これを読めばAの所在地がわかるかもしれない。"],
    ["アルバム","album",'/album.png',"沢山の写真が入ってるいるアルバム。どれも古い写真ばかりで、Aの行方を示していそうなものは無い。"],
    ["手紙","letter",'/letter.png',"Aに宛てられたと思われる何枚かの手紙。どれも古いものばかりだ。"],
    ["証言メモ","memo",'/memo.png',"Y妻から得られた証言を紙に起こしたもの。これを使えば事件を明るみにすることができるかもしれない。"],
    ["αの手紙","handwriting",'/handwriting.png',"10年以上前に書かれた古い手紙。これを読めばすべての真相がわかるかもしれない。"],
    ["銀行の通帳とカード","bankbook,card",'/bank.png',"見れない銀行口座。海外のものらしい。"],
    ["地図","map",'/map.png',"どこか知らない町の地図だ。市役所が番地？？にあるようだ。"],
    ["ヒューズ","fuse",'/fuse.png',"どこかに置くことができるかもしれない。"],
    ["ドット絵","DotPic",'/DotPic2.png',"TKの文字が表わされた5x5のドット絵。"],
    ["キーコード","keycodes",'/KEYCODES.png',"シュレッダーにかけられていて、元の内容が分からない。"],
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
async  function display(num){
     console.log(itemfl);
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
  Set("NOW","M79");
  document.location.href = "/Information";
  
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
let imgs=["hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png","hatena.png"]
function load(){
  for(let i=0;i<11;i++){
    if (itemfl[i]){
      console.log(123);
        imgs[i]=discri[i][2]
        document.getElementById("img" + String(i)).src = imgs[i];
       
    }
}
document.getElementById("btnn").style.display = "none";
}
export default function Home() {
 


  console.log(itemfl);

   
    return (
      <>
        <div className={styles.container}><div className={styles.buttons}>
        <button id = "btnn" onClick ={load} className = {styles.sta}>タップでアイテムを読み込む </button>
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
                        <img id = "img8" src={imgs[8]} width={110} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(9)}>
                        <img id = "img9" src={imgs[9]} width={110} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(10)}>
                        <img id = "img10" src={imgs[10]} width={110} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(7)}>
                        <img id = "img7" src={imgs[7]} width={110} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(0)}>
                        <img  id = "img0" src={imgs[0]} width={140} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(1)}>
                        <img  id = "img1" src={imgs[1]} width={120} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(2)}>
                        <img  id = "img2" src={imgs[2]} width={100} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(3)}>
                        <img id = "img3" src={imgs[3]} width={120} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(4)}>
                        <img  id = "img4" src={imgs[4]} width={120} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(5)}>
                        <img  id = "img5" src={imgs[5]} width={130} className={styles.itemm}/>
                    </div>
                    <div className={styles.item} onClick={()=>display(6)}>
                        <img  id = "img6" src={imgs[6]} width={120} className={styles.itemm}/>
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
          <div className={styles.batsu2} onClick={()=>closemodals()}>×</div><br/>
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
                <p>From: 猫田真弥華　埼玉県米草町??3号室</p>
                <p>To: 星野初翔　埼玉県米草町A2</p>
              </div>
              <div className={styles.lettercontent}>
                {lettertexts[0]}
              </div>
            </div>

            <div className={styles.modalmailcont} id={styles.mailcont2}>
              <div className={styles.letterfromto}>
                <p>From:(差出人及び住所不明)</p>
                <p>To: 星野初翔　埼玉県米草町A2</p>
              </div>
              <div className={styles.lettercontent}>
                {lettertexts[4]}
              </div>
            </div>
            
            <div className={styles.modalmailcont} id={styles.mailcont3}>
              <div className={styles.letterfromto}>
                <p>From: 実寸大予備学校　群馬県伊勢崎市B7</p>
                <p>To: 星野初翔　埼玉県米草町A2</p>
              </div>
              <div className={styles.lettercontent}>
                {lettertexts[5]}
              </div>
            </div>

            <div className={styles.modalmailcont} id={styles.mailcont4}>
              <div className={styles.letterfromto}>
                <p>From: 猫田真弥華　山梨県笛吹市E3</p>
                <p>To: 星野初翔　埼玉県米草町A2</p>
              </div>
              <div className={styles.lettercontent}>
                {lettertexts[1]}
              </div>
            </div>
            
            <div className={styles.modalmailcont} id={styles.mailcont5}>
              <div className={styles.letterfromto}>
                <p>From: 犬飼良美　埼玉県深谷市城G5</p>
                <p>To: 星野初翔　埼玉県米草町A2</p>
              </div>
              <div className={styles.lettercontent}>
                {lettertexts[3]}
              </div>
            </div>
            
            <div className={styles.modalmailcont} id={styles.mailcont6}>
              <div className={styles.letterfromto}>
                <p>From: 『修春』記者 井戸端与太郎　東京都千代田区F6</p>
                <p>To: 星野初翔　埼玉県米草町A2</p>
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
          <img src ="/album1.png"/>
          <img src ="/album2.png"/>
          </div>
          <div className={styles.batsu21} onClick={()=>closemodals()}>×</div><br/>
          <div className={styles.modaldiary2}>
          <img src ="/album3.png"/>
          <img src ="/album4.jpg"/>
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

          </div>
        </div>
      </div>
      <div id={styles.Modal7} className={styles.modal}>
      <div className={styles.batsu21} onClick={()=>closemodals()}>×</div><br/>
        <div className={styles.modalcontent6}>
        </div>
      </div>
      <div id={styles.Modal8} className={styles.modal}>
        <div className={styles.modalcontent7}>
          <div className={styles.batsu} onClick={()=>closemodals()}>×</div>
          <input id = "password" className = {styles.password}  type="text"/>
          <button id = "passsub"className = {styles.passsub}onClick = {pass}>決定</button>
        </div>
      </div>
      </>
    );
  }
  
  