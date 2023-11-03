import { createClient } from '@vercel/kv';
import { parseCookies, setCookie, destroyCookie } from 'nookies'

let kv = createClient({
    url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
    token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN
});

export function GetID(){
    let cookie=parseCookies()["id"];
    return cookie;
}
export async function Set(vari,content){
    let id=GetID();
    console.log(id+vari);
    await kv.set(id+vari,content);
}
export async function Set2(status){
    Set("status",status);
}


/*
let id=GetID();
await kv.get(id+vari)
*/
