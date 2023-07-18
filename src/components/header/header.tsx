import Link from "next/link";
import "./header.css";
import data from "../../data/nav.json";
import { text } from "stream/consumers";

export default function Header() {
  return (
    <header className="header-container">
      <div className="left-section">
        <h1>
          <Link href="/">Blake Madigan</Link>
        </h1>
      </div>
      <div className="right-section">
        <nav className="header-nav">
          <ul>
            {data.map((item) => (
              <li key={item.text}>
                <Link href={item.url}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
