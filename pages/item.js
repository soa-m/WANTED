import Link from 'next/link';
import styles from '../styles/item.module.css';
import Image from "next/image";
import { useEffect } from 'react'

let discri=[
    ["レコーダー",'/recoder.png',"これはレコーダーです"],
    ["レコーダー",'/recoder.png',"これはレコーダーです"],
    ["レコーダー",'/recoder.png',"これはレコーダーです"],
    ["レコーダー",'/recoder.png',"これはレコーダーです"],
    ["レコーダー",'/recoder.png',"これはレコーダーです"],
    ["レコーダー",'/recoder.png',"これはレコーダーです"],
    ["レコーダー",'/recoder.png',"これはレコーダーです"],
    ["レコーダー",'/recoder.png',"これはレコーダーです"]
]
function display(num){
    var name=document.getElementById("name");
    var pic=document.getElementById(styles.pic);
    var text=document.getElementById("text");
    name.textContent=discri[num][0];
    pic.src=discri[num][1];
    text.textContent=discri[num][2];
    pic.style.display="block"
}
export default function Home() {
    return (
      <>
        <div className={styles.container}>
            <div className={styles.buttons}></div>
            <div className={styles.items}>
                <div className={styles.itemtab}>
                    <div className={styles.item} onClick={()=>display(0)}>あ</div>
                    <div className={styles.item} onClick={()=>display(1)}>あ</div>
                    <div className={styles.item} onClick={()=>display(2)}>あ</div>
                    <div className={styles.item} onClick={()=>display(3)}>あ</div>
                    <div className={styles.item} onClick={()=>display(4)}>あ</div>
                    <div className={styles.item} onClick={()=>display(5)}>あ</div>
                    <div className={styles.item} onClick={()=>display(6)}>あ</div>
                    <div className={styles.item} onClick={()=>display(7)}>あ</div>
                </div>

            </div>
            <div className={styles.discription}>
                <div className={styles.name} id="name"></div>
                <div className={styles.pic}>
                    <Image src="" width={300} height={300} id={styles.pic}></Image>
                </div>
                <div className={styles.text} id="text"></div>
            </div>
        </div>
      </>
    );
  }
  
  