import Link from "next/link";

export default function MealsPage() {
  return (
    <div>
      <h1>Meals Page</h1>
      <Link href="/meals/meal-1">Meal1</Link>
      <Link href="/meals/meal-2">Meal2</Link>
    </div>
  );
}