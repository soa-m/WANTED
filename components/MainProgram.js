//内部処理

// 謎データ。連想データで実装。キーは謎の種類、値は解決済みかのBoolean

var data = {
    "第一の謎" : true,
    "第二の謎" : true,
    "第三の謎" : true,
    };

//謎データの有向グラフ。謎からその謎の解決後アンロック謎への有向グラフと逆の有向グラフの二種類。

var　fgraph = {
    第一の謎  : ["第三の謎"],
    第二の謎  : ["第三の謎"],
};

var bgraph = {
    第三の謎 :["第一の謎", "第二の謎"],
};
 
//謎が解決される度に新たな謎が追加されたのかのチェッカー。
//変数Solovedに解決された謎を入れ、戻り値はなし。
//次の謎がアンロックさらた場合は更にその謎から派生する謎のチェックを行う。
function UnlockChecker(Soloved){
    
    for(nxMystery in fgraph[Soloved]){
        Unlocked = true;
        for(UnlockNeeded in bgraph[nxMystery]){
            if(data[UnlockNeeded] == false) Unlocked = false;
        }
        if(Unlocked) {
            data[nxMystery] = true;
            UnlockCheker(nxMystery);
        }
    }
    
};
