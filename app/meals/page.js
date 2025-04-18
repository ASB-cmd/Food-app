import Link from "next/link";
import classes from "./page.module.css";
import Mealsgrid from "@/components/meals/meals.grid";

export default function SharePage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.heighlight}>by you</span>
        </h1>
        <p>Choose your favourite recipes and cooki it yourself</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite receipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Mealsgrid meals ={[]}/>
      </main>
    </>
  );
}
