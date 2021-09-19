import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div>

      {/* Header */}
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header/>

    {/* Main */}
      <main className='max-w-screen-2xl mx-auto'>
        <Banner/>
        <ProductFeed products={products}/>


      </main>

    </div>
  );
}

// Fetching data
export async function getStaticProps(context) {
  const products = await fetch(`https://fakestoreapi.com/products`)
  .then((res) => res.json());

 
  return {
    props: {
      products,
    }
    
  }
 

}
