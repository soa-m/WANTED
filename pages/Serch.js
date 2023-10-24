import { useState } from "react";
import styles from '../styles/Home.module.css';
import {SearchData} from '../components/MainProgram';
export default function Home() {


    //サーチボタンが押されたらテキストボックスの値に対応する返しを行う。該当する返しがない場合は "検索した内容"に関連する内容はみつかりませんでしたと表示。 
    // textは検索ボックス内の内容
    //SearchedWordは検索ボタンが押されたときの検索ボックス内の内容
    //ReturnWord1は表示する返しの言葉を格納
    var [text, setText] = useState("");
    var [ReturnWord1,setReturnWord1] = useState("");
    function OnSearch(){
        var ReturnWord; //返する言葉 
        var SearchData_keys = Object.keys(SearchData)
        var check1 = false;
        SearchData_keys.find(function(value){
            if(value == text){
                ReturnWord = SearchData[text];
                check1 = true;
                
            
            }
        }
        )
        
         if(check1 == false) ReturnWord = text + "に関する内容は見つかりませんでした";
         setReturnWord1(ReturnWord);
         

    };


    return (
      <div>
        
        <a href="/Information" className={styles.btnInformation}>　情報　</a>
        <a href="/Serch" className={styles.btnSearch}>　検索　</a>
        <a href="/Relations" className={styles.btnRelations}>　関係図　</a>
        <a href="/Missions" className={styles.btnMissions}>ミッション</a>
        <a href="/PastInformation" className={styles.btnPastInformation}>過去の情報</a>
  
            <div >

                <input  className={styles.search_bar} id="SearchBox" value = {text}  onChange={(event) => setText(event.target.value)} type="text" placeholder="キーワードを入力"></input>
                

                
               
                <input className = {styles.search_submit} type="button" value="検索" onClick={OnSearch} /><br />
                <br />
                <br />
                <br />
                <p>{ReturnWord1}</p>
                
            </div>
        
   
        
      
      </div>
    
        
        
      
    );
  }