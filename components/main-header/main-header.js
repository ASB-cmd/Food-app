"use client";
import Link from "next/link";
import logoImg from '@/assets/logo.png';
import classes from'./main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";
// import classes from './main-header-background.module.css';

export default function MainHeader() {
  const path = usePathname()
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            src={logoImg.src}
            alt="a plate full of food"
            width={100}
            height={100}
            priority
          />
          NextLevelFood
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
             <NavLink href="/meals">
                Explore Meals
              </NavLink>  
            </li>

            <li>
              <NavLink href="/community">
                Join the Community
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}