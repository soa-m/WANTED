import '../components/MainProgram';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react'
import { createClient } from '@vercel/kv';
import { NextResponse } from 'next/server';
import { Init } from '../components/start'
import { Suspense } from 'react'
var playernum;
let kv = createClient({
  url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
  token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN
});
import { Set, GetID } from '../components/func';
let id = GetID();

export default  function Home() {


  async function start(){

    
      var items = [false,false,false];
      var sol = [false,false,false];
      Set("ITEMUNLCOKED",items);
      Set("SOLVED",sol);
      var playerid = document.getElementById("playernum").value;
      if(!(playerid >=1 && playerid <=14)) return;
      else {
        /*Set("PLAYERID",playerid);*/
        Init(playerid);
      }
    }
  return (
    
    <>
      
      <div className={styles.container}>
        <input id = "playernum" />
        <button onClick = {start}>起動する</button>
      </div>
    </>
  );
}

