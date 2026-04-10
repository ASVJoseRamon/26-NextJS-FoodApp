import Link from "next/link";

export default function Home() {
  return (
    <main >
      <h1 style={{ color: 'white', textAlign: 'center'}}>
        Time to get started!
      </h1>
      <div style={{ color: 'white', textAlign: 'center' }}>
        <p><Link href="/community">/community</Link></p>
        <p><Link href="/meals">/meals</Link></p>
        <p><Link href="/meals/share">/meals/share</Link></p>
        <p><Link href="/meals/Platillo1">/meals/platillo</Link></p>
      </div>
      
      
      
      
      
    </main>
  );
}
