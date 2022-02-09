import { Header } from './cmps/Header';
import { Hero } from './cmps/Hero';
import { ProductDescription } from './cmps/ProductDescription';
import { SuccessStories } from './cmps/SuccessStories';
import { Ready } from './cmps/Ready';
import { Footer } from './cmps/Footer';

export function Home() {

    return (
        <main className="home">
            <Header />
            <Hero />
            <ProductDescription />
            <SuccessStories />
            <Ready />
            <Footer />
        </main>
    )
}