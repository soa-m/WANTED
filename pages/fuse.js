import { useRef,useState,useEffect } from "react"
import React from "react";
import styles from '../styles/Home.module.css';
import {SearchData} from '../components/MainProgram';
import Link from 'next/link';
var dx = [0,-1,0,1];
var dy = [1,0,-1,0];
var cleared = false;

  export default function Home() {

    var Keytype = [
      [1,3,3,3,1],
      [1,2,3,2,2],
      [2,4,1,2,2],
      [2,3,3,2,2],
      [1,1,2,3,1],
  ]
  var KeyRotate = [
      [2,2,3,1,1],
      [1,1,3,1,1],
      [1,2,3,1,1],
      [1,2,0,1,1],
      [3,0,2,2,0],


  ]
  var KeyPath = [
    [true,true,false,true],
    [false,true,false,true],
    [true,false,false,true],
    [false,false,false,false],
  ]
  var KeyOpen = [
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false],


]
      function Ontap(e){
        if(cleared) return;
         var d = e.target.id;
         var Kairo = document.getElementById(d);
         KeyRotate[d[3]][d[4]] += 1;
         KeyRotate[d[3]][d[4]] %= 4;
         const degree = 90 * KeyRotate[d[3]][d[4]] * -1; 
         Kairo.style.transform = "rotate(" + degree + "deg)";
         var que = [];
         for(var i = 0 ; i < 5; i++){
          for(var j = 0; j < 5; j++){
            KeyOpen[i][j] = false;
          }
         }
      if(KeyPath[Keytype[4][0]-1][(-1 * KeyRotate[4][0]+6)%4]){
          que.push([4,0]);
          KeyOpen[4][0] = true;
      }
      while(que.length != 0){
        var x = que[0][0];
        var y = que[0][1];
        que.shift();
        for(var i = 0; i < 4; i++){
          var nx = x + dx[i];
          var ny = y + dy[i];
            if(nx >= 0 && nx < 5 && ny >= 0 && ny < 5){
                if(KeyOpen[nx][ny] == false){
                   
                      if(KeyPath[Keytype[x][y]-1][(-1 * KeyRotate[x][y] + 4 + i)%4] && KeyPath[Keytype[nx][ny]-1][(-1 * KeyRotate[nx][ny] + i + 6)%4]){
                          KeyOpen[nx][ny] = true;
                          que.push([nx,ny]);
                      }
                
                          
                    }
            }
        }

      }
      console.log(KeyOpen);
      console.log(KeyRotate);
      
      for(var i = 0 ; i <5; i++){
        for(var j = 0; j <5;  j++){
        var d = "btn";
        d += i;
        d += j;
        var Kairo = document.getElementById(d);
        
        if(KeyOpen[i][j] == false)Kairo.src = '/KAIRO0.png';
        if(KeyOpen[i][j]){
          if(Keytype[i][j] == 1)Kairo.src = '/KAIRO1.png';
          if(Keytype[i][j] == 2)Kairo.src = '/KAIRO2.png';
          if(Keytype[i][j] == 3)Kairo.src = '/KAIRO3.png';
        }
        }
      }
        if(KeyPath[Keytype[0][4]-1][(-1 * KeyRotate[0][4] + 4)%4] && KeyOpen[0][4]){
          cleared = true;
          document.getElementById("succes").innerHTML = "UNLOCKED";
        }
    }
      function start(){
        for(var i = 0 ; i <5; i++){
          for(var j = 0; j <5;  j++){
          var d = "btn";
          d += i;
          d += j;
          var Kairo = document.getElementById(d);
          
          if(Keytype[i][j] == 1)Kairo.setAttribute('src', '/KAIRO1.png');
          if(Keytype[i][j] == 2)Kairo.setAttribute('src', '/KAIRO2.png');
          if(Keytype[i][j] == 3)Kairo.setAttribute('src', '/KAIRO3.png');
          if(Keytype[i][j] == 4)Kairo.setAttribute('src', '/KAIRO0.png');

          Kairo.style.backgroundSize = "cover";
          for(var k = 0; k < KeyRotate[i][j]; k++){
            const degree = 90 * KeyRotate[i][j] * -1; 
            Kairo.style.transform = "rotate(" + degree + "deg)";
            }
          }
      }
  
      var que = [];
      if(KeyPath[Keytype[4][0]-1][(-1 * KeyRotate[4][0]+2 + 4)%4]){
          que.push([4,0]);
          KeyOpen[4][0] = true;
      }
      while(que.length != 0){
        var x = que[0][0];
        var y = que[0][1];
        console.log([x,y]);

        que.shift();
        for(var i = 0; i < 4; i++){
          var nx = x + dx[i];
          var ny = y + dy[i];
            if(nx >= 0 && nx < 5 && ny >= 0 && ny < 5){
                if(KeyOpen[nx][ny] == false){
                   
                      if(KeyPath[Keytype[x][y]-1][(-1 * KeyRotate[x][y] + i + 4)%4] && KeyPath[Keytype[nx][ny]-1][(-1 * KeyRotate[nx][ny] + i + 2 + 4)%4]){
                          KeyOpen[nx][ny] = true;
                          que.push([nx,ny]);
                      }
                
                          
                    }
            }
        }

      }
      console.log(KeyOpen);
      console.log(KeyRotate);
      for(var i = 0 ; i <5; i++){
        for(var j = 0; j <5;  j++){
        var d = "btn";
        d += i;
        d += j;
        var Kairo = document.getElementById(d);
        
        if(KeyOpen[i][j] == false)Kairo.src = '/KAIRO0.png';

        
       
        

          
        }
    }

      }
        
      
  
  
    return (
          
          
      <div>
          <div className = {styles.Kparentsbtn0}>
              <img onClick = {Ontap} id = "btn00" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn01" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn02" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn03" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn04" src = "" className = {styles.Kchildimg} /> 
          </div> 
          <div className = {styles.Kparentsbtn1}> 
              <img onClick = {Ontap} id = "btn10" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn11" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn12" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn13" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn14" src = "" className = {styles.Kchildimg} /> 
          </div> 
          <div className = {styles.Kparentsbtn2}> 
              <img onClick = {Ontap} id = "btn20" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn21" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn22" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn23" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn24" src = "" className = {styles.Kchildimg} /> 
          </div>
          <div className = {styles.Kparentsbtn3}> 
              <img onClick = {Ontap} id = "btn30" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn31" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn32" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn33" src = "" className = {styles.Kchildimg} /> 
              <img onClick = {Ontap} id = "btn34" src = "" className = {styles.Kchildimg} /> 
          </div>
          <div className = {styles.Kparentsbtn4}>
                  <img onClick = {Ontap} id = "btn40" src = "" className = {styles.Kchildimg} /> 
                  <img onClick = {Ontap} id = "btn41" src = "" className = {styles.Kchildimg} /> 
                  <img onClick = {Ontap} id = "btn42" src = "" className = {styles.Kchildimg} /> 
                  <img onClick = {Ontap} id = "btn43" src = "" className = {styles.Kchildimg} /> 
                  <img onClick = {Ontap} id = "btn44" src = "" className = {styles.Kchildimg} /> 
          </div>     
          <div>
          <button id = "startbtn" onClick = {start}>ヒューズを置く</button>    
          <p id = "succes">LOCKED</p>
    

          </div>                           
      </div>

    
        
        
      
    );
      
     
    }