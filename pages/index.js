import '../components/MainProgram';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react'
import { createClient } from '@vercel/kv';
import {NextResponse} from 'next/server';
import {Init} from '../components/start'
import { Suspense } from 'react'

export default function Home() {
  
  return (
    <>
    <div className={styles.container}>
        <button type="button" onClick={() => Init()} className={styles.Initbtn}>
          <Image 
            src='/start.png'
            fill
          />
        </button>
    </div>
    </>
  );
}

