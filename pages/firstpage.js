import Link from 'next/link';
import styles from '../styles/firstpage.module.css';
import Image from "next/image";
import { useEffect } from 'react'

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
  
  