import Link from 'next/link';
import styles from '../styles/firstpage.module.css';
import Image from "next/image";
import { useEffect } from 'react'
import { createClient } from '@vercel/kv';
let kv = createClient({
    url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
    token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN
  });
  import { Set, GetID } from '../components/func';
  let id = GetID();
  let itemfl=[false,false,false,false,false,false,false,false,false,false,false,false];
  let nowmessage = "M0";
  Set("NOW", "\"M0\"");
  Set("ITEM",itemfl);
  itemfl = await kv.get(id + "ITEM");
  console.log(itemfl);
  
export default function Home() {
    useEffect(() =>{
        var vi=document.getElementById("video");
        var vi2=document.getElementById("video2");
        window.addEventListener('click',function(){
            if (!vi.paused){
                return;
            }
            else{
                vi2.load();
                document.getElementById('video2').addEventListener('loadeddata', function() {
                    vi.style.display="none";
                    vi2.play();
                    vi2.addEventListener('ended', function() {
                        document.location.href = "/FirstMission";
                    });
                });
                
            }
        });
    })
    return (
      <>
        <div className={styles.container}>
        <video className={styles.video} id="video" src="/op1.mp4" autoPlay muted></video>
        <video className={styles.video} id="video2" src="/op2.mp4" muted></video>
        </div>
      </>
    );
  }
  
  