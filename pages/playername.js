import Link from 'next/link';
import styles from '../styles/player.module.css';
import Image from "next/image";
import { useEffect } from 'react'


export default function Home() {
    useEffect(() =>{
        var text=document.getElementById("text");
        console.log(text)
        text.addEventListener('keydown', test_event);
        function test_event(e){
            if (e.keyCode === 13) {
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
  
  