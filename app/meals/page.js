import { Suspense } from 'react';

import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css'
import Link from 'next/link';
import { getMeals } from '@/lib/meals';

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

export default function PaginaMeals() {
    return (
        <>
            <header className={classes.header}>
                <h1> Comidas deliciosas creadas {' '}
                    <span className={classes.highlight}> 
                        para ti.
                    </span>
                </h1>
                <p> Elige tu receta favorita y cocinala por ti mismo, es facil y sencillo</p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>
                    Comparte tu receta favorita
                    </Link>
                </p>
            </header>
            
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Buscando comidas..</p>}>
                    <Meals/>
                </Suspense>
                
            </main>
        </>
    );
}