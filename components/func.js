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
    await kv.set(id+vari,content);
}

/*
let id=GetID();
await kv.get(id+vari)
*/
