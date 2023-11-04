import Link from 'next/link';
import styles from '../styles/info.module.css';
import { useState } from "react";
//import {SearchData,messageque} from '../components/MainProgram';
import { createClient } from '@vercel/kv';

let kv = createClient({
  url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
  token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN
});

import { Set, GetID } from '../components/func';
let id = GetID();
var selectbool = [false, false, false];
let itemfl = await kv.get(id + "ITEM");
// 表示するテキストをmessagetextで表示
/*
var nowmessage = await kv.get(id + "nowmessage");
var messagenum = await kv.get(id + "messagenum");
var IsmessageUnlocked = await kv.get(id + "IsmessageUnlocked");
var messageData = await kv.get("messageData");
var displayfl = true;
*/
console.log(itemfl);
var nowmessage = await kv.get(id + "NOW");

var realmessage = nowmessage;
var displayfl = true;
var messageData = {
  "M-1": {
    "name": "",
    "text": "タップで次に進む",
    "next": "M1",
    "back": "0"//玄関
  },
  "M0": {
    "name": "",
    "text": "（呼び鈴の音）",
    "next": "M77",
    "back": "0"//玄関
  },
  "M1": {
    "name": "真弥華",
    "text": "はい…？どちら様でしょうか？？あ、初翔について…。はい…、ではお迎えに向かいますので、その場でお待ちください。",
    "next": "M2",
    "back": "0"
  },
  "M2": {
    "name": "井戸端",
    "text": "ナニナニ、取材許可が下りたんですか？　ずっとここに張り込んでいるこのワタクシよりも先にアポを取るとは、中々の敏腕っぷりじゃないですか",
    "next": "M3",
    "back": "0"
  },
  "M3": {
    "name": "",
    "text": "（玄関の扉が開く）",
    "next": "M4",
    "back": "1"//玄関開く
  },
  "M4": {
    "name": "真弥華",
    "text": "どうも、こんにち…そちらの方は？",
    "next": "M5",
    "back": "1"
  },
  "M5": {
    "name": "井戸端",
    "text": "おっと、名乗り遅れました。私は『週間修春』のゴシップ担当。地の果てまでも赴いて、どんななスクープも見逃さない、第一線記者の井戸端与太郎と申します",
    "next": "M6",
    "back": "1"
  },
  "M6": {
    "name": "真弥華",
    "text": "あー、聞いたことあります。強引な割り込み取材で常にモメてる人ですよね…確かいくつか酷い仇名があったような…",
    "next": "M7",
    "back": "1"
  },
  "M7": {
    "name": "井戸端",
    "text": "ドブネズミ、脂汗、パパラッチ、エトセトラ＆エトセトラ。私の仕事にとって、悪口は一種の勲章です。何と呼んでもらっても構いませんので、ひとまず顔だけ覚えて頂ければ",
    "next": "M8",
    "back": "1"
  },
  "M8": {
    "name": "真弥華",
    "text": "じゃあ、ドブネズミさんは、どうしてこちらに？",
    "next": "M9",
    "back": "1"
  },
  "M9": {
    "name": "井戸端",
    "text": "私の目的はただ一つ、星野世貴に関する《真実》を知ることです。一世の人気作家・星野世貴を一夜にして廃人へと変えてしまった《市蔵失踪事件》、発生から七年が経過した現在も、その大部分は謎に包まれています",
    "next": "M10",
    "back": "1"
  },
  "M10": {
    "name": "真弥華",
    "text": "…",
    "next": "M11",
    "back": "1"
  },
  "M11": {
    "name": "井戸端",
    "text": "そして私の《記者勘》によれば、あなたが知っているであろう、この事件の真相にこそ、世貴氏の謎を解く鍵が隠されているハズ。ということで、こうして取材を申し込みに来たわけです",
    "next": "M12",
    "back": "1"
  },
  "M12": {
    "name": "真弥華",
    "text": "…",
    "next": "M13",
    "back": "1"
  },
  "M13": {
    "name": "井戸端",
    "text": "いかがでしょう？",
    "next": "M14",
    "back": "1"
  },
  "M14": {
    "name": "真弥華",
    "text": "分かりました…その申し込み、受けましょう。いずれどこかで話さなければならない内容なんですから。そちらの方も、一緒についてきてください。初翔にも深く関係する話なので",
    "next": "M15",
    "back": "1"
  },
  "M15": {
    "name": "",
    "text": "(居間に移動する)",
    "next": "M16",
    "back": "2"
  },
  "M16": {
    "name": "真弥華",
    "text": "…それでは聞いていただけますでしょうか、、、",
    "next": "M17",
    "back": "2"
  },
  "M17": {
    "name": "井戸端",
    "text": "はい！いつでもどうぞ。",
    "next": "M18",
    "back": "2"
  },
  "M18": {
    "name": "真弥華",
    "text": "…お二人は、10年前以上前に起きたX失踪事件について知っていますよね。…実はXは失踪なんてしていないんです、、、い、今も生きています",
    "next": "S0",
    "back": "2"
  },
  "M19": {
    "name": "真弥華",
    "text": "その代わり、秀吾さんが…いや、やっぱり何でもありません…",
    "next": "M20",
    "back": "2"
  },
  "M20": {
    "name": "",
    "text": "反応がいまいちですが、続けますか？",
    "next": "S3",
    "back": "2",
  },
  "M21": {
    "name": "真弥華",
    "text": "初翔くんの一家が暮らす、あの家です",
    "next": "M22",
    "back": "2",
  },
  "M22": {
    "name": "井戸端",
    "text": "え、どういうことですか？地下にでも住み込んでいるんですか。",
    "next": "M23",
    "back": "2",
  },
  "M23": {
    "name": "真弥華",
    "text": "そ、それが。…10年前のあの日Xと秀吾さんは《入れ替わった》んです",
    "next": "M24",
    "back": "2",
  },
  "M24": {
    "name": "井戸端",
    "text": "入れ替わったって、え？",
    "next": "M1001",/* */
    "back": "2",
  },
  "M1001": {
    "name": "真弥華",
    "text": "い、今の世貴さんは実はXなんです。",
    "next": "M1002",/* */
    "back": "2",
  },
  "M1002": {
    "name": "井戸端",
    "text": "は？、え？",
    "next": "M28",/* */
    "back": "2",
  },
  "M25": {
    "name": "真弥華",
    "text": "...",
    "next": "M26",/* */
    "back": "2",
  },
  "M26": {
    "name": "井戸端",
    "text": "うーむ。一旦仕切り直しましょう！",
    "next": "M18",/* */
    "back": "2",
  },
  "M27": {
    "name": "真弥華",
    "text": "...",
    "next": "M18",/* */
    "back": "2",
  },
  "M28": {
    "name": "真弥華",
    "text": "それで、秀吾さんのことなんですが…",
    "next": "M29",/* */
    "back": "2",
  },
  "M29": {
    "name": "井戸端",
    "text": "え、えどこにいるんですか？",
    "next": "M30",/* */
    "back": "2",
  },
  "M30": {
    "name": "真弥華",
    "text": "秀吾さんはあの時…",
    "next": "S1",/* */
    "back": "2",
  },
  "M31": {
    "name": "真弥華",
    "text": "…",
    "next": "M32",/* */
    "back": "2",
  },
  "M32": {
    "name": "井戸端",
    "text": "うわっ、気まずい空気！　ちょと、真剣にやってくださいよぉ",
    "next": "M30",
    "back": "2",
  },
  "M333": {
    "name": "真弥華",
    "text": "あ、いや…まぁ間違ってはないんですが…",
    "next": "M33",
    "back": "2",
  },
  "M33": {
    "name": "井戸端",
    "text": "まだ言えていないことがある、と。まだ不十分な気もしますが、次に行きますか？",
    "next": "S4",/* */
    "back": "2",
  },
  "M34": {
    "name": "真弥華",
    "text": "亡くなった…も、もっと言えば、その。《殺された》のです。",
    "next": "M35",
    "back": "2",
  },
  "M35": {
    "name": "井戸端",
    "text": "殺された！？　だ、誰に！？　じゃあの山で死体が見つかったのって誰かが埋めたからなんですｋ？",
    "next": "M36",
    "back": "2",
  },
  "M36": {
    "name": "真弥華",
    "text": "は、はい。。。",
    "next": "S2",
    "back": "2",
  },
  "M37": {
    "name": "真弥華",
    "text": "いや、関係者は彼一人ではなくて…",
    "next": "M36",/***/
    "back": "2",
  },
  "M38": {
    "name": "真弥華",
    "text": "...",
    "next": "M39",
    "back": "2",
  },
  "M39": {
    "name": "井戸端",
    "text": "答えにくいようですね。質問を変えましょう",
    "next": "M36",
    "back": "2",
  },
  "M40": {
    "name": "真弥華",
    "text": "…彼女も、計画には関わっていましたが…",
    "next": "M36",
    "back": "2",
  },

  "M41": {
    "name": "真弥華",
    "text": "そんなわけないじゃないですか！あの事件は、夫が、忠文がXにけしかけて、それで、初翔くんのお母さんが、あの、",
    "next": "M42",
    "back": "2",
  },
  "M42": {
    "name": "井戸端",
    "text": "一旦落ち着いて。ふむふむ…情報は集まってきましたが、まだ欠けている部分があるようですねぇ。もう一度質問をやり直して、有効な証言を掴みましょう",
    "next": "M18",
    "back": "2",
  },
  "M43": {
    "name": "井戸端",
    "text": "一旦落ち着いて。証言はしっかりと記録できていますから、手元を見ながら整理しましょう",
    "next": "M44",
    "back": "2",
  },
  "M44": {
    "name": "真弥華",
    "text": "ご、ごめんなさい…取り乱しました。順を追って説明します…。初翔君のお父さんにはXという双子の兄がいるんです…。",
    "next": "M45",
    "back": "2",
  },
  "M45": {
    "name": "真弥華",
    "text": "二人は容姿こそ瓜二つ、一見すると見分けがつかないくらいそっくりですが、それぞれの歩んできた人生には大きな差がありました…。",
    "next": "M46",
    "back": "2",
  },
  "M46": {
    "name": "真弥華",
    "text": "秀吾さんは幼いころから優秀だった一方、元来要領の悪いXは《出来のいい片割れ》と比較され続けながら毎日を過ごしていたそうです。どれだけ惨めだったか、想像もできません",
    "next": "M47",
    "back": "2",
  },
  "M47": {
    "name": "真弥華",
    "text": "二人の差は、秀吾さんの小説家デビューでいよいよ決定的になりました。この頃からXは以前にもまして自暴自棄になり、大学を留年、中退することとなります…",
    "next": "M48",
    "back": "2",
  },
  "M48": {
    "name": "真弥華",
    "text": "Xは、就職もせず、希望も目標も持たず、青年期を悪友との交流に溶かしていきました。私の夫、忠文もこの時期につるんでいた仲間の一人です",
    "next": "M49",
    "back": "2",
  },
  "M49": {
    "name": "真弥華",
    "text": "夫は人の懐に入り込むのが上手いんです。きっと、Xに同情するような言葉を並べ、寄り添うそぶりを見せて、《友人》になったのでしょう",
    "next": "M50",
    "back": "2",
  },
  "M50": {
    "name": "真弥華",
    "text": "でも、夫の目的は、初めから秀吾さんとその資産の方にありました。あの人はいつもそうです。人のことを利用することばかり考えて、自分に反抗的な相手には躊躇なく手を上げて、際限なく傷つけてきて、それで、それから、",
    "next": "M51",
    "back": "2",
  },
  "M51": {
    "name": "井戸端",
    "text": "パニクっちゃってるなぁ…インタビュー、中断しましょうか？",
    "next": "M52",
    "back": "2",
  },
  "M52": {
    "name": "真弥華",
    "text": "いえ、続けます。話させてください",
    "next": "M53",
    "back": "2",
  },
  "M53": {
    "name": "真弥華",
    "text": "当時の夫は、FXのスイスフラン取引で莫大な借金を作ったばかりでした。何としてでもお金を得る必要があったのです。忠文さんは、売れっ子な割に超が付くほどの倹約家で知られていましたから、相当貯えがあると見て狙いを定めたのでしょう",
    "next": "M54",
    "back": "2",
  },
  "M54": {
    "name": "真弥華",
    "text": "夫は、復讐心を煽ってXを味方につけ、倹約家の夫にうんざりしていた秀吾さんの妻…徹子さんとも協力関係を築きました",
    "next": "M55",
    "back": "2",
  },
  "M55": {
    "name": "真弥華",
    "text": "立てた作戦はいたって単純でした。三人で協力して秀吾さんを殺害し、遺体を隠す。そのあとは、Xが秀吾さんになりすまして生活し、《Xは失踪した》ことにして帳尻を合わせる。秀吾さん名義の財産は三人で山分け…ざっとこんな感じです",
    "next": "M56",
    "back": "2",
  },
  "M56": {
    "name": "真弥華",
    "text": "そして彼らの企みはおおよそ成功し、今に至るわけです。秀吾さんの財産は、想定よりは大分少なかったそうですが、それでも中々の額だったそうです。夫もなんとか借金を返済しましたし、徹子さんは贅沢三昧でやりたい放題らしいですね。Xだけは何やら意気消沈して、事件前より一層引き籠るようになったとのことですが",
    "next": "M57",
    "back": "2",
  },
  "M57": {
    "name": "真弥華",
    "text": "こんな大事な内容をずっと黙っていてすみません。本当はもっと早く、誰かに話すべきだったんでしょうが、密告が夫にバレたときのことを思うとあまりに恐ろしくて…それに、私としても家に借金があるのは困るので、正直好都合ではあったんです。見て見ぬふりをしたこと、今では後悔しています…",
    "next": "M58",
    "back": "2",
  },
  "M58": {
    "name": "井戸端",
    "text": "なるほど…ゴシップ性良好…。家族の悲哀の物語として語り始めて、後半は夫婦の行き違い全般に話題を転換…結びは…SDGsでいいか…。あ、いえ、独り言ですのでお気になさらず。いやぁ、それにしても実に衝撃的なお話でしたね。今日はありがとうございました",
    "next": "M59",
    "back": "2",
  },
  "M59": {
    "name": "真弥華",
    "text": "…今日の内容は記事にして頂いて構いません。どんな裁きが下されようとも、受け入れるつもりです",
    "next": "M60",
    "back": "2",
  },
  "M60": {
    "name": "井戸端",
    "text": "…りょーかいです。では証言を持って警察へ行きましょう",
    "next": "S5",
    "back": "2",
  },



  "S0": {
    "bunki": [
      ["な、なんだってぇ！？", "M19"],
      ["…Xはどこにいるんですか？", "M21"],
      ["盛り上がって参りました！！", "M25"],
      ["エヴィデンスとかあるんですか？笑", "M25"],
    ]
  },
  "S1": {
    "bunki": [
      ["秀吾はいい奴だったよ…", "M31"],
      ["ま、まさか死んだ？", "M333"],
      ["…", "M34"],
      ["焦らすねぇ！", "M31"],
    ]
  },
  "S2": {
    "bunki": [
      ["X...？", "M37"],
      ["Xの友人だった忠文...？", "M38"],
      ["初翔くんのお母さん...？", "M40"],
      ["まさか、真弥華さんが…？", "M41"],
    ]
  },
  "S3": {
    "bunki": [
      ["続ける", "M28"], ["やり直す", "M18"]
    ]
  },
  "S4": {
    "bunki": [
      ["続ける", "M36"], ["やり直す", "M30"]
    ]
  },
  "S5": {
    "bunki": [
      ["分かりました。すぐいきましょう", "M61"],
      ["いやです", "M64"],
      ["ちょっと待って", "M65"],
      ["...", "M61"],
    ]
  },
  "S6": {
    "bunki": [
      ["真弥華さんの猫、戻ってきてよかったですね", "M66"],
      ["えーっと、真弥華さんは本当に、本当に事件と関わりないんですよね？", "M67"],
      ["真弥華さんの猫相変わらずかわいいですね", "M66"],
      ["それで初翔くんは今こちらにいるんですよね？", "M69"],
    ]
  },
  "M61": {
    "name": "警察官",
    "text": "井戸端さんじゃないですか。またガセネタを持ってきたんですか。",
    "next": "M62",
    "back": "3"
  },
  "M62": {
    "name": "井戸端",
    "text": "今回のは違いますよ！ほら10年前のXさんの失踪事件、わかるでしょ？　あれ本当は殺人だったんですよ！　実の双子が、、",
    "next": "M63",
    "back": "3"//もとのつかおう
  },
  "M63": {
    "name": "警察官",
    "text": "はいはい。この前は、なんでしたっけ。杉並区の連続強盗殺人事件の犯人が5歳の子どもだ！　だったかな。こちらも色々と忙しんです。今日はお引き取り願います",
    "next": "S5",
    "back": "3"//もとのつかおう
  },
  "M64": {
    "name": "井戸端",
    "text": "は？何いってやがる殺人事件だぞ！！今すぐにだ！",
    "next": "M61",
    "back": "3"//もとのつかおう
  },
  "M65": {
    "name": "井戸端",
    "text": "どうした。何か大事なことを思い出したのか？",
    "next": "S6",
    "back": "3"//もとのつかおう
  },
  "M66": {
    "name": "井戸端",
    "text": "おいお前！ふざけてるのか！？殺人事件だぞ！とっとと警察にいくんだ！",
    "next": "S6",
    "back": "3"//もとのつかおう
  },
  "M67": {
    "name": "真弥華",
    "text": "だから、何度もいってるじゃないですか！私は本当に何も関わっていないんです。まさか主人があんな人だっただなんて！",
    "next": "M68",
    "back": "3"//もとのつかおう
  },
  "M68": {
    "name": "ナレーター",
    "text": "場が混乱してしまった",
    "next": "S6",
    "back": "3"//もとのつかおう
  },
  "M69": {
    "name": "真弥華",
    "text": "そ、れのことなんですが…",
    "next": "M70",
    "back": "3"//もとのつかおう
  },
  "M70": {
    "name": "真弥華",
    "text": "昨日、このことを彼に話してしまって…",
    "next": "M71",
    "back": "3"//もとのつかおう
  },
  "M71": {
    "name": "井戸端",
    "text": "えっ",
    "next": "M72",
    "back": "3"//もとのつかおう
  },
  "M72": {
    "name": "真弥華",
    "text": "まさか、い、居場所がわからないんですか？",
    "next": "M73",
    "back": "3"//もとのつかおう
  },
  "M73": {
    "name": "プレイヤー",
    "text": "そ、それでこちらに今日お尋ねしたんですが、、",
    "next": "M74",
    "back": "3"//もとのつかおう
  },
  "M74": {
    "name": "真弥華",
    "text": "あぁぁ、私はなんてことを！実はその後、泣きながらこの家を飛び出していってしまって、",
    "next": "M75",
    "back": "3"//もとのつかおう
  },
  "M75": {
    "name": "プレイヤー",
    "text": "な、何か手がかりとかはないんですか？",
    "next": "M76",
    "back": "3"//もとのつかおう
  },
  "M76": {
    "name": "真弥華",
    "text": "なにも、、、。あ、でもこんなものが落ちてて、多分初翔のものだと思うんですが。",
    "next": "M77",
    "back": "3"//もとのつかおう
  },
  "M77": {
    "name": "",
    "text": "レコーダーのデータを手に入れた",
    "next": "M78",
    "back": "3"//もとのつかおう
  },
  "M79": {
    "name": "",
    "text": "Xの家に行けば、なにかわかるかもしれない。",
    "next": "M80",
    "back": "3"//もとのつかおう
  },
  "M80": {
    "name": "",
    "text": "Xの家に行けば、なにかわかるかもしれない。",
    "next": "M81",
    "back": "3"//もとのつかおう
  },
  "M81": {
    "name": "",
    "text": "",
    "next": "182",
    "back": "3"//もとのつかおう
  },
  "M89": {
    "name": "",
    "text": "",
    "next": "M90",
    "back": "3"//もとのつかおう
  },
  "M90": {
    "name": " ",
    "text": "通報により、A父を殺害したA母、X、Yの三人はそれぞれ、殺人罪、遺体遺棄罪の容疑で逮捕された。",
    "next": "M191",
    "back": "3"//もとのつかおう
  },
  "M191": {
    "name": "",
    "text": "著名な小説家が10年以上なりすまされていた、という奇怪な事件は日本中に話題を呼び、事件発覚から一か月が経った今でも、その話題がメディアに取り沙汰されない日はなかった。    ",
    "next": "M192",
    "back": "3"//もとのつかおう
  },
  "M192": {
    "name": " ",
    "text": "都内の弁護士事務所にて",
    "next": "M91",
    "back": "3"//もとのつかおう
  },
  "M91": {
    "name": "弁護士",
    "text": "初翔君、僕は今君にかけるべき言葉が分からない。だからこそ、ただ君にはこれを受け取ってほしい。",
    "next": "M92",
    "back": "3"//もとのつかおう
  },
  "M92": {
    "name": "弁護士",
    "text": "君のお父さんの遺留品だよ。中身は開けていないから安心してくれ。本当に申し訳ないが、僕が今君にできることは、これを渡すことしかできない。",
    "next": "M92",
    "back": "3"//もとのつかおう
  },
  "M101": {
    "name": "世貴の友人",
    "text": "あいつとは中学からの付き合いなんだけどな、ほんとにいい奴だったよ。温厚で、何度相談に乗ってもらったかわからない。だけど、あいつの双子の兄が失踪してしまってからは別人のようになってしまった。小説は書かなくなったし酒癖も悪くなったっていうじゃないか。連絡をとろうとしても返ってこないんだ。やっぱり兄の存在は大きかったのだと思うね。",
    "next": "M101",
    "back": "3"//もとのつかおう
  }
};


export async function nextmessage() {
  
  if (displayfl) {
    displayfl = false;
  }
  else {
    return;
  }
  if (nowmessage == "M77") {
    document.location.href = "./item"
    itemfl[0] = true;
    Set("ITEM",itemfl);
    return;
  }
  if (nowmessage == "M101") {
    document.location.href = "./item"
    return;
  }
  if(nowmessage == "M92"){
    itemfl[5] = true;
    itemfl[6] = true;
    Set("ITEM",itemfl);
    document.location.href = "./item";
  }
  if(nowmessage == "M80"){
    document.location.href = "./item"
    return;
  }
  // document.getElementById("messagename");
  // document.getElementById("messagetext");
  var bunki1 = document.getElementById(styles.bunki1);
  var bunki2 = document.getElementById(styles.bunki2);
  var bunki3 = document.getElementById(styles.bunki3);
  var bunki4 = document.getElementById(styles.bunki4);
  let now = messageData[nowmessage]["next"];
  if (nowmessage.charAt(0) == "S") {
    displayfl = true;
    return;
  }
  if (now.charAt(0) == "M") {
    bunki1.style.display = "none";
    bunki2.style.display = "none";
    bunki3.style.display = "none";
    bunki4.style.display = "none";
    if (nowmessage == "M41") {
      if (selectbool[1] && selectbool[0]) {
        next = "M43";
      }
      else {
        next = "M42";
      }
      now = next;
    }
    document.getElementById("messagename").textContent = messageData[now]["name"];
    var thistext = messageData[now]["text"];
    var s = "";
    for (let i = 0; i < thistext.length; i++) {
      s += thistext[i];
      await new Promise(resolve => setTimeout(resolve, 20))
      document.getElementById("messagetext").textContent = s;
    }
    nowmessage = now;
    realmessage = now;
  }
  else {
    if (messageData[now]["bunki"].length == 4) {
      bunki1.style.display = 'block';
      bunki2.style.display = 'block';
      bunki3.style.display = 'block';
      bunki4.style.display = 'block';
      bunki1.textContent = messageData[now]["bunki"][0][0];
      bunki2.textContent = messageData[now]["bunki"][1][0];
      bunki3.textContent = messageData[now]["bunki"][2][0];
      bunki4.textContent = messageData[now]["bunki"][3][0];
    }
    if (messageData[now]["bunki"].length == 2) {
      bunki1.style.display = 'block';
      bunki2.style.display = 'block';
      bunki1.textContent = messageData[now]["bunki"][0][0];
      bunki2.textContent = messageData[now]["bunki"][1][0];
    }
    nowmessage = now;
  }
  displayfl = true;
 
  /*
  let fl = true;
  if (displayfl) {
    displayfl = false;
  }
  else {
    return;
  }
  if ((messageData[messagenum].length) - 1 == nowmessage) {
    if (messagenum == IsmessageUnlocked) {
      document.getElementById("messagename").textContent = ""
      document.getElementById("messagetext").textContent = "会話がありません"
      fl = false;
      displayfl = true;
    }
    else {
      messagenum += 1;
      nowmessage = 1;
      Set("messagenum", messagenum);
      Set("nowmessage", 0);
    }
  }
  else {
    nowmessage += 1;
  }
  if (fl) {
    document.getElementById("messagename").textContent = messageData[messagenum][nowmessage][0];
    var thistext = messageData[messagenum][nowmessage][1];
    var s = "";
    for (let i = 0; i < thistext.length; i++) {
      s += thistext[i];
      await new Promise(resolve => setTimeout(resolve, 50))
      document.getElementById("messagetext").textContent = s;
    }
    displayfl = true;
  }
  */
}
export async function Sbunki(select) {
  if (displayfl) {
    displayfl = false;
  }
  else {
    return;
  }
  var bunki1 = document.getElementById(styles.bunki1);
  var bunki2 = document.getElementById(styles.bunki2);
  var bunki3 = document.getElementById(styles.bunki3);
  var bunki4 = document.getElementById(styles.bunki4);
  console.log(nowmessage, select);
  if (nowmessage == "S0" && select == "1") {
    selectbool[0] = true;
  }
  if (nowmessage == "S1" && select == "2") {
    selectbool[1] = true;
  }
  var next;
  if (nowmessage == "S2" && select == "3") {
    selectbool[2] = true;
    realmessage = messageData[nowmessage]["bunki"][select][1];
    nowmessage = messageData[nowmessage]["bunki"][select][1];
  }
  else {
    realmessage = messageData[nowmessage]["bunki"][select][1];
    nowmessage = messageData[nowmessage]["bunki"][select][1];
  }
  bunki1.style.display = "none";
  bunki2.style.display = "none";
  bunki3.style.display = "none";
  bunki4.style.display = "none";
  let now = nowmessage;
  document.getElementById("messagename").textContent = messageData[now]["name"];
  var thistext = messageData[now]["text"];
  var s = "";
  for (let i = 0; i < thistext.length; i++) {
    s += thistext[i];
    await new Promise(resolve => setTimeout(resolve, 20))
    document.getElementById("messagetext").textContent = s;
  }
  displayfl = true;
  nowmessage = now;
  realmessage = now;
}
export default function Home() {
  
  return (
    <>
      <div className={styles.infocontainer}>
        <div className={styles.bunki} id={styles.bunki1} onClick={() => Sbunki(0)}></div>
        <div className={styles.bunki} id={styles.bunki2} onClick={() => Sbunki(1)}></div>
        <div className={styles.bunki} id={styles.bunki3} onClick={() => Sbunki(2)}></div>
        <div className={styles.bunki} id={styles.bunki4} onClick={() => Sbunki(3)}></div>
        <div className={styles.buttons}>

          <div className={styles.empty}></div>


         
        </div>
        <div className={styles.infomain}>

          <div className={styles.infoemp0}></div>
          <div className={styles.infoemp01}></div>
          <div className={styles.infoemp02}>
            <div className={styles.messagename} id="messagename">{messageData["M-1"]["name"]}</div>
            <div className={styles.infoemp022}>
            </div>
          </div>
          <div className={styles.infoemp03}></div>
          <div className={styles.infoemp1}></div>

          <div className={styles.messagebox} onClick={nextmessage}>
            <div className={styles.messagetext} id="messagetext">{messageData["M-1"]["text"]}</div>
            <div className={styles.messagebox2}>
            </div>
          </div>
          <div className={styles.infoemp12}></div>
          <div className={styles.infoemp2}></div>

        </div>


      </div>
    </>
  );
}