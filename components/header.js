import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <ul>
      <li>
        <Link href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about">
          About
        </Link>
      </li>
    </ul>
  );
}