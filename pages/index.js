import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className={styles.heading}>Hello Next.js!</h1>
      <ul>
        <li>
          <Link href="/about">
            about
          </Link>
        </li>
      </ul>
    </div>
  );
}
