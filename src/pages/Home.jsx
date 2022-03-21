// Cmps
import { Hero } from '../components/home/Hero';
import { ProductDescription } from '../components/home/ProductDescription';
import { SuccessStories } from '../components/home/SuccessStories';
import { Ready } from '../components/home/Ready';

export function Home() {

    return (
        <main>
            <Hero />
            <ProductDescription />
            <SuccessStories />
            <Ready />
        </main>
    )
}