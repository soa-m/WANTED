import { useState } from "react";
import styles from '../styles/Home.module.css';


export default function Home() {
    const SearchData = {
        "第一の返し" : "窓を見る",
        "第二の返し" : "237124",
        "第三の返し" : "Xの正体",
        };
    var [text, setText] = useState("");
    const [SearchedWord, setAddText] = useState("");
    //サーチボタンが押されたらテキストボックスの値に対応する返しを行う。該当する返しがない場合は "検索した内容"に関連する内容はみつかりませんでしたと表示。 
    var [ReturnWord1,setReturnWord] = useState("");
    function OnSearch(){
        var ReturnWord = "";
        setAddText(text);
        var SearchData_keys = Object.keys(SearchData)
        SearchData_keys.find(function(value){
            if(value == SearchedWord){
                ReturnWord = SearchData[SearchedWord];
            }
        })
        
         if(ReturnWord == "") ReturnWord = "検索結果はみつかりませんでした";
        setReturnWord(ReturnWord);
         
       
 

    
    
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