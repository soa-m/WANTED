import { useState } from "react";
import styles from '../styles/Home.module.css';
import {SearchData} from '../components/MainProgram';
export default function Home() {


    //サーチボタンが押されたらテキストボックスの値に対応する返しを行う。該当する返しがない場合は "検索した内容"に関連する内容はみつかりませんでしたと表示。 
    // setTextは検索ボックス内の内容
    //SearchedWordは検索ボタンが押されたときの検索ボックス内の内容
    //ReturnWord1は表示する返しの言葉を格納
    var [text, setText] = useState("");
    const [SearchedWord, setAddText] = useState("");
    var [ReturnWord1,setReturnWord1] = useState("");
    function OnSearch(){
        var ReturnWord = ""; //返する言葉 
        setAddText(text);
        var SearchData_keys = Object.keys(SearchData)
        SearchData_keys.find(function(value){
            if(value == SearchedWord){
                ReturnWord = SearchData[SearchedWord];
            }
        })
        setReturnWord1(ReturnWord);
         if(ReturnWord == "") ReturnWord = "検索結果はみつかりませんでした";
        
         

    };


    return (
      <div>
        
        <a href="/Information" className={styles.btnInformation}>　情報　</a>
        <a href="/Serch" className={styles.btnSearch}>　検索　</a>
        <a href="/Relations" className={styles.btnRelations}>　関係図　</a>
        <a href="/Missions" className={styles.btnMissions}>ミッション</a>
        <a href="/PastInformation" className={styles.btnPastInformation}>過去の情報</a>
       
            <div className={styles.search_bar}>

                <input id="SearchBox" value = {text}  onChange={(event) => setText(event.target.value)} type="text" placeholder="キーワードを入力"></input>
                <p>{ReturnWord1}</p>

                {/* ↓pタグを追加 */}
               
                <input type="button" value="検索" onClick={OnSearch} /><br />
                <p id = "Output"></p>
            </div>
   
        
      
      </div>
    
        
        
      
    );
  }