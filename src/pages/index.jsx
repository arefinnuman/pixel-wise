import RootLayout from "@/components/layout/RootLayout";
import HomeHero from "@/components/ui/HomeHero";
import RandomProductsPage from "@/components/ui/RandomProductsPage";

export default function HomePage({ randomProducts }) {
  return (
    <>
      <HomeHero />
      <h1 className="text-4xl font-extrabold text-center my-6">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {randomProducts?.data?.map((product) => (
          <RandomProductsPage key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pixel-wise-server-side.vercel.app/api/v1/products/random"
  );
  const data = await res.json();

  return {
    props: {
      randomProducts: data,
    },
  };
};

