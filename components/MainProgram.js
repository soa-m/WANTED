//内部処理

// 謎データ。連想データで実装。キーは謎の種類、値は解決済みかのBoolean
//謎が解決される度に新たな謎が追加されたのかのチェッカー。
//変数Solovedに解決された謎を入れ、戻り値はなし。
//次の謎がアンロックさらた場合は更にその謎から派生する謎のチェックを行う。


export  function UnlockChecker(Soloved){
    
    for(nxMystery in fgraph[Soloved]){
        Unlocked = true;
        for(UnlockNeeded in bgraph[nxMystery]){
            if(mysteryBool[UnlockNeeded] == false) Unlocked = false;
        }
        if(Unlocked) {
            mysteryBool[nxMystery] = true;
            UnlockCheker(nxMystery);
        }
    }
    
};



export var mysteryBool = {
    "第一の謎" : true,
    "第二の謎" : true,
    "第三の謎" : true,
    }

//謎データの有向グラフ。謎からその謎の解決後アンロック謎への有向グラフと逆の有向グラフの二種類。

export var fgraph = {
    第一の謎  : ["第三の謎"],
    第二の謎  : ["第三の謎"],
}

export var bgraph = {
    第三の謎 :["第一の謎", "第二の謎"],
}


//アンロックされた会話文のキューリスト
//一つのキューに、[会話文の識別ID、[会話してくる人、会話文の内容]] の二次元配列を入れ込む)。
//情報の右上に、キューリストに入っている会話文の量を表示する。
//会話文は最後までみられた場合、キューリストからpopする。

export var messageque = [];

export var messageData = [
[0, //識別番号
  
   ['捜査員','こんにちは'],
   ['プレイヤー','おはようございます'],   //会話文を追加していく
  
],

]
//メッセージ開放に必要な謎一覧

export var messageUnlock = [
    ["第一の謎","第二の謎"],
]

//メッセージが追加済みかのデータ
export var IsmessageUnlocked = [false,false,false];

//メッセージが解放されたかを決定する関数。開放されていた場合、messagequeに追加する
export function messageUnlockChecker() {
    for (i = 0; i< length(messageUnlock); i++){
        var check = true; //一つでもアンロックされていなかったらfalseにする。 
        for(j = 0; j<length(messageUnlock[i]); j++){
                if(mysteryBool[messageUnlockp[i][j]] == false) check = false;
        }
        if(IsmessageUnlocked[i] == false){
            messageque.push(messageData[i]);
            IsmessageUnlocked[i] = true;
        }
    }
}


//検索ワード
export  var SearchData = {
    "第一の返し" : "窓を見る",
    "第二の返し" : "237124",
    "第三の返し" : "Xの正体",
    }


