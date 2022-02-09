// Cmps
import { Hero } from './cmps/Hero';
import { ProductDescription } from './cmps/ProductDescription';
import { SuccessStories } from './cmps/SuccessStories';
import { Ready } from './cmps/Ready';

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