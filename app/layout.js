import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Beginner Houseplant Helper',
  description: 'Your guide to happy and healthy houseplants.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <Link href="/" className="navbar-brand">
            Houseplant Helper
          </Link>
          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/plant-library">Plant Library</Link>
            <Link href="/my-plants">My Plants Dashboard</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
