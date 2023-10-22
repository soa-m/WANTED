import {messageData,messageque} from '../components/MainProgram';
import styles from '../styles/Home.module.css';


export default function Home() {

  
    console.log(messageData[0]);
    return (
   
      <div>
        <a href="/Information" className={styles.btnInformation}>　情報　</a>
        <a href="/Serch" className={styles.btnSearch}>　検索　</a>
        <a href="/Relations" className={styles.btnRelations}>　関係図　</a>
        <a href="/Missions" className={styles.btnMissions}>ミッション</a>
        <a href="/PastInformation" className={styles.btnPastInformation}>過去の情報</a>
      </div>
    );
  }