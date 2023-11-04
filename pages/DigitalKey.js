import { useRef, useState, useEffect } from "react"
import React from "react";
import styles from '../styles/DigitalKey.module.css';
import { SearchData } from '../components/MainProgram';
import Link from 'next/link';
import { createClient } from '@vercel/kv';
import {Set2} from '../components/func'
let kv = createClient({
    url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
    token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN
});

import { Set, GetID } from '../components/func';
let id = GetID();
/*
fuzecleared = await kv.get(id + "CLEAREDIGITALKEY");
console.log(fuzecleared);
*/




export default function Home() {

    var DigitalKeybool = [
        [false, true, true, true, true],
        [true, false, true, false, true],
        [true, false, false, true, true],
        [false, false, false, true, false],
        [false, false, true, false, true],
    ]
    var DigitalKeybool1 = [
        [false, true, true, true, true],
        [true, false, true, false, true],
        [true, false, false, true, true],
        [false, false, false, true, false],
        [false, false, true, false, true],
    ]
    var DigitalKeyAns = [
        [true, true, true, false, false],
        [false, true, false, false, false],
        [false, true, true, false, true],
        [false, false, true, true, false],
        [false, false, true, false, true],
    ]
    
    var started = false;
    var trynum = 0;
    var digitalcleared = false;
    async function start() {

        var ITEMUNLCOKED=await kv.get(id+"ITEMUNLCOKED");
        console.log(ITEMUNLCOKED);
        if (!ITEMUNLCOKED[2]){
            return;
        }
        else{
            var x=document.getElementById(styles.displayans);
            x.style.display="block"
        }
        if (digitalcleared) return;
        trynum = 3;
        document.getElementById("NUM").innerHTML = "残りの操作回数は : " + String(trynum);
        
        started = true;
        document.getElementById("startbtn").innerHTML = "Retry";
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                if (DigitalKeybool1[i][j]) {
                    var d = "btn";
                    d += String(i);
                    d += String(j);
                    DigitalKeybool[i][j] = true;
                    document.getElementById(d).style.backgroundColor = "yellow";
                }
                else {
                    var d = "btn";
                    d += String(i);
                    d += String(j);
                    DigitalKeybool[i][j] = false;
                    document.getElementById(d).style.backgroundColor = "black";
                }


            }
        }
    }

    async function Ontap(place) {
        if (digitalcleared || started == false) return;
        trynum--;

        document.getElementById("NUM").innerHTML = "リセットまでの回数 : " + String(trynum);

        var x, y;
        var s = place.target.id;
        y = s[4];
        x = s[3];

        if (DigitalKeybool[x][y] == false) {
            place.target.style.backgroundColor = "yellow";
            DigitalKeybool[x][y] = true;
        }
        else {
            place.target.style.backgroundColor = "black";
            DigitalKeybool[x][y] = false;
        }
        var nx, ny;
        if (y > 0) {
            var d = "btn";
            nx = x;
            ny = y;
            ny--;
            d += String(nx);
            d += String(ny);

            if (DigitalKeybool[nx][ny] == false) {
                document.getElementById(d).style.backgroundColor = "yellow";
                DigitalKeybool[nx][ny] = true;
            }
            else {
                document.getElementById(d).style.backgroundColor = "black";
                DigitalKeybool[nx][ny] = false;
            }


        }
        if (y < 4) {
            var d = "btn";
            nx = x;
            ny = y;
            ny++;
            d += String(nx);
            d += String(ny);

            if (DigitalKeybool[nx][ny] == false) {
                document.getElementById(d).style.backgroundColor = "yellow";
                DigitalKeybool[nx][ny] = true;
            }
            else {
                document.getElementById(d).style.backgroundColor = "black";
                DigitalKeybool[nx][ny] = false;
            }



        }
        if (x > 0) {
            var d = "btn";
            nx = x;
            ny = y;
            nx--;
            d += String(nx);
            d += String(ny);

            if (DigitalKeybool[nx][ny] == false) {
                document.getElementById(d).style.backgroundColor = "yellow";
                DigitalKeybool[nx][ny] = true;
            }
            else {
                document.getElementById(d).style.backgroundColor = "black";
                DigitalKeybool[nx][ny] = false;
            }




        }
        if (x < 4) {
            var d = "btn";
            nx = x;
            ny = y;
            nx++;
            d += String(nx);
            d += String(ny);
            if (DigitalKeybool[nx][ny] == false) {
                document.getElementById(d).style.backgroundColor = "yellow";
                DigitalKeybool[nx][ny] = true;
            }
            else {
                document.getElementById(d).style.backgroundColor = "black";
                DigitalKeybool[nx][ny] = false;
            }



        }
        var did = true;
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                if (DigitalKeybool[i][j] != DigitalKeyAns[i][j]) {
                    did = false;
                }
            }
        }
        console.log(DigitalKeybool);
        console.log(did);
        if (did) {
            var firstsolved=await kv.get(id+"firstsolved");
            firstsolved[2]=true;
            Set("firstsolved",firstsolved)
            var x = document.getElementById("succes");
            document.getElementById("succes").innerHTML = "UNLOCKED";
            digitalcleared = true;
            document.getElementById("succes").style.color = "green";
            document.getElementById("startbtn").innerHTML = "解読済み";
            x.animate(
                [
                    { opacity: 1 },
                    { opacity: 0 }
                ],
                {
                    duration: 100,
                    iterations: 3,

                    direction: 'alternate'
                }
            );
            /*Set("CLEAREDDIGITAL",digitalcleared)*/
        }
        if (started == false || trynum == 0 || digitalcleared) {
            if (started == false) return;
            var x = document.getElementById("succes");
            x.animate(
                [
                    { opacity: 1 },
                    { opacity: 0 }
                ],
                {
                    duration: 100,
                    iterations: 3,

                    direction: 'alternate'
                }
            );

            if (trynum == 0 && digitalcleared == false) {
                start();
            }
            return;

        }



    }

    return (


        <div className={styles.container}>
            <div className={styles.Kparentsbtn0}>
                <button onClick={Ontap} id="btn00" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn01" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn02" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn03" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn04" className={styles.Kchildbtn}> </button>
            </div>
            <div className={styles.Kparentsbtn1}>
                <button onClick={Ontap} id="btn10" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn11" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn12" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn13" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn14" className={styles.Kchildbtn}> </button>
            </div>
            <div className={styles.Kparentsbtn2}>
                <button onClick={Ontap} id="btn20" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn21" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn22" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn23" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn24" className={styles.Kchildbtn}> </button>
            </div>
            <div className={styles.Kparentsbtn3}>
                <button onClick={Ontap} id="btn30" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn31" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn32" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn33" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn34" className={styles.Kchildbtn}> </button>
            </div>
            <div className={styles.Kparentsbtn4}>
                <button onClick={Ontap} id="btn40" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn41" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn42" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn43" className={styles.Kchildbtn}> </button>
                <button onClick={Ontap} id="btn44" className={styles.Kchildbtn}> </button>
            </div>
            <div>
                <button onClick={start} id="startbtn" className={styles.Camerabtn}>暗号解読を始める</button>
                <p id="succes" className={styles.LOCKED}>LOCK</p>
                <p id="NUM" className={styles.NUM}>リセットまでの回数 : </p>


            </div>
            <div className={styles.displaytex}>これに合わせろ！
            </div>
            <div id={styles.displayans}>

            </div>
            <div className={styles.buttons}>

                <div className={styles.empty}></div>

                <div className={styles.btnbox}>
                    <Link href="/FirstMission" className={styles.btn}>
                        <div class={styles.btnname}>　戻る　</div>
                        <div class={styles.btncolor}></div>
                    </Link>
                </div>
            </div>
        </div>





    );


}