import { createClient } from '@vercel/kv';
import { parseCookies, setCookie, destroyCookie } from 'nookies'

let kv = createClient({
    url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
    token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN
});
//内部処理

// 謎データ。連想データで実装。キーは謎の種類、値は解決済みかのBoolean
//謎が解決される度に新たな謎が追加されたのかのチェッカー。
//変数Solovedに解決された謎を入れ、戻り値はなし。
//次の謎がアンロックさらた場合は更にその謎から派生する謎のチェックを行う。


import { Set, GetID } from './func';
let id = GetID();


export function UnlockChecker(Soloved) {

    for (nxMystery in fgraph[Soloved]) {
        Unlocked = true;
        for (UnlockNeeded in bgraph[nxMystery]) {
            if (mysteryBool[UnlockNeeded] == false) Unlocked = false;
        }
        if (Unlocked) {
            mysteryBool[nxMystery] = true;
            UnlockCheker(nxMystery);
        }
    }

};


//var mysteryBool= await kv.get(id+"mysteryBool");

//謎データの有向グラフ。謎からその謎の解決後アンロック謎への有向グラフと逆の有向グラフの二種類。

//var fgraph= await kv.get("fgraph");
//var bgraph= await kv.get("bgraph");



//アンロックされた会話文のキューリスト
//一つのキューに、[会話文の識別ID、[会話してくる人、会話文の内容]] の二次元配列を入れ込む)。
//情報の右上に、キューリストに入っている会話文の量を表示する。
//会話文は最後までみられた場合、キューリストからpopする。

/*
export var messageque = [
    [0, //識別番号
  
   ['捜査員','こんにちは'],
   ['プレイヤー','おはようございます'],   //会話文を追加していく
  
],

];

export var messageData = [
[0, //識別番号
  
   ['捜査員','こんにちは'],
   ['プレイヤー','おはようございます'],   //会話文を追加していく
],
[1, //識別番号
  
   ['捜査員','こんにちは2'],
   ['プレイヤー','おはようございます2'],   //会話文を追加していく
],

];
*/

//メッセージ開放に必要な謎一覧
/*
export var messageUnlock = [
    [true,0],
    [false,1],
    [false,2]
]
*/
//メッセージが追加済みかのデータ
//識別番号だけつければいいか。

//var IsmessageUnlocked= await kv.get(id+"IsmessageUnlocked");


/*
export function messageUnlockChecker() {
    for (i = 0; i< length(messageUnlock); i++){
        var check = true; //一つでもアンロックされていなかったらfalseにする。 
        for(j = 0; j<length(messageUnlock[i]); j++){
                if(mysteryBool[messageUnlockp[i][j]] == false) check = false;
        }
        if(IsmessageUnlocked[i] == false){
            messageque.push(messageData[i]);
            IsmessageUnlocked[i] = true;
            kv.Set("IsmessageUnlocked",IsmessageUnlocked);
        }
    }
}
*/


//検索ワード
export var SearchData = {
    "第一の返し": "窓を見る",
    "第二の返し": "237124",
    "第三の返し": "Xの正体",
}

