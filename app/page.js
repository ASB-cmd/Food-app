import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        <p>
          <Link href='/meals'>Meals</Link>
        </p>
        <p>
          <Link href='/meals/share'>Share Meal</Link>
        </p>
        <p>
          <Link href='/meals/community'>Community</Link>
        </p>
      </h1>
    </main>
  );
}
