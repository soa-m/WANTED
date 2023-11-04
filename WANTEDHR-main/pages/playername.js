import Link from 'next/link';
import styles from '../styles/player.module.css';
import Image from "next/image";
import { useEffect } from 'react'
import {Set2,GetID,Set} from '../components/func';
import { createClient } from '@vercel/kv';

let kv = createClient({
    url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
    token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN
});
var id=GetID();
var PlayerID=await kv.get(id+"PlayerID");
console.log(PlayerID);
export default function Home() {
    useEffect(() =>{
        var text=document.getElementById("text");
        console.log(text)
        text.addEventListener('keydown', test_event);
        function test_event(e){
            console.log(text.value)
            if (e.keyCode === 13) {
                Set("playername",text.value);
                console.log(text.value);
                console.log(text.value);
                console.log(text.value);
                document.location.href = "/firstpage";
            }  
        }
    })
    return (
      <>
        <div className={styles.container}>
            <div className={styles.text}>プレイヤー名を入力</div>
            <div className={styles.nametext}>
                <input type="text" className={styles.inputtext} placeholder="お名前" id="text"></input>
            </div>
        </div>
      </>
    );
  }
  
  