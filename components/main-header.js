import Link from "next/link";

import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"

export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
            <img src={logoImg.src} alt="Comida"/>
            NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li> <Link href="/meals">Buscar Platillos</Link></li>
                    <li> <Link href="/community">Comunidad</Link></li>
                </ul>
            </nav>
        </header>
    );
}