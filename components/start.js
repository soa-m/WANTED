import { createClient } from '@vercel/kv';
import { parseCookies, setCookie, destroyCookie } from 'nookies'

let kv = createClient({
    url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
    token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN
});

import {Set,GetID} from './func';

function getUniqueStr(myStrong){
    var strong = 1000;
    if (myStrong) strong = myStrong;
    return new Date().getTime().toString(16)  + Math.floor(strong*Math.random()).toString(16)
}

export async function Init() {
    var uuid = getUniqueStr()
    document.cookie="id="+uuid;
    //uuidをこのページ,ゲームのidとする cookieに保存

    let mysteryBool = {
        "第一の謎" : true,
        "第二の謎" : true,
        "第三の謎" : true,
    }

    let IsmessageUnlocked = [false,false,false];
    
    let status={
        "mysteryBool" :mysteryBool,
        "IsmessageUnlocked"  :IsmessageUnlocked,
    }
    Set("status",status);
    //埋め込みなので最終的に消す
    /*
    let SearchData = {
        "第一の返し" : "窓を見る",
        "第二の返し" : "237124",
        "第三の返し" : "Xの正体",
    }
    var fgraph = {
        第一の謎  : ["第三の謎"],
        第二の謎  : ["第三の謎"],
    }
    var bgraph = {
        第三の謎 :["第一の謎", "第二の謎"],
    }
    await kv.set("SearchData",SearchData);
    await kv.set("fgraph",fgraph);
    await kv.set("bgraph",bgraph);
    */
    
    document.location.href = "/Information";
}