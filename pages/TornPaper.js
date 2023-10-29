import { useRef,useState,useEffect } from "react"
import React from "react";
import styles from '../styles/Home.module.css';
import {SearchData} from '../components/MainProgram';
import Link from 'next/link';
import Draggable from 'react-draggable';


  export default function Home() {
    
    function answer(){
        var ans = document.getElementById("inputbox").value;
        if(ans == "714283"){
            document.getElementById("cleared").innerHTML = "UNLOCKED";
        }
    }

    function start(){
 
        document.getElementById('btn0').src = "/KEYCODE1.png";
        document.getElementById('btn1').src = "/KEYCODE2.png";
        document.getElementById('btn2').src = "/KEYCODE3.png";
        document.getElementById('btn3').src = "/KEYCODE4.png";
        document.getElementById('btn4').src = "/KEYCODE5.png";
        document.getElementById('btn5').src = "/KEYCODE6.png";
        document.getElementById('btn6').src = "/KEYCODE7.png";

        document.getElementById('btn0').style.postion = "absolute";
        document.getElementById('btn1').style.postion = "absolute";
        document.getElementById('btn2').style.postion = "absolute";
        document.getElementById('btn3').style.postion = "absolute";
        document.getElementById('btn4').style.postion = "absolute";
        document.getElementById('btn5').style.postion = "absolute";
        document.getElementById('btn6').style.postion = "absolute";
        
        document.getElementById('btn0').style.left = "70%";
        document.getElementById('btn1').style.left = "90%";
        document.getElementById('btn2').style.left = "80%";
        document.getElementById('btn3').style.left = "30%";
        document.getElementById('btn4').style.left = "50%";
        document.getElementById('btn5').style.left = "40%";
        document.getElementById('btn6').style.left = "60%";

        document.getElementById('btn0').style.top = "200px";
        document.getElementById('btn1').style.top = "200px";
        document.getElementById('btn2').style.top = "200px";
        document.getElementById('btn3').style.top = "200px";
        document.getElementById('btn4').style.top = "200px";
        document.getElementById('btn5').style.top = "200px";
        document.getElementById('btn6').style.top = "200px";
    }
    

      return (
          
          
        <div>
            
            <div>
<Draggable>
  <div  >
  <img className={styles.KEYCODE} id = "btn0" src = ""  /> 
  </div>
</Draggable>
<Draggable>
  <div >
  <img  className={styles.KEYCODE} id = "btn1" src = ""  /> 
  </div>
</Draggable>
<Draggable>
  <div >
  <img  className={styles.KEYCODE} id = "btn2" src = ""  /> 
  </div>
</Draggable>
<Draggable
 >
  <div >
  <img  className={styles.KEYCODE} id = "btn3" src = ""  /> 
  </div>
</Draggable>
<Draggable
>
  <div >
  <img  className={styles.KEYCODE} id = "btn4" src = ""  /> 
  </div>
</Draggable>
<Draggable
>
  <div >
  <img  className={styles.KEYCODE} id = "btn5" src = ""  /> 
  </div>
</Draggable>
<Draggable
>
  <div >
  <img  className={styles.KEYCODE} id = "btn6" src = ""  /> 
  </div>
</Draggable>


            </div>
            <div>
                <button id = "start" onClick  = {start}>アイテム１を置く</button>
            </div>
            <div>
                <input id = "inputbox" type = "text"></input>
                <button id = "ansbtn" onClick = {answer}>ENTER</button>
                <p id = "cleared">locked</p>
            </div>
                                    
        </div>

      
          
          
        
      );
      
     
    }