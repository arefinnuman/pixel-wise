import RootLayout from "@/components/layout/RootLayout";
import RandomProductsPage from "@/components/ui/RandomProductsPage";

const CategoriesPage = ({ categorizedData }) => {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 my-10">
      {categorizedData?.data?.map((product) => (
        <RandomProductsPage key={product._id} product={product} />
      ))}
    </div>
  );
};

export default CategoriesPage;

CategoriesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5555/api/v1/products/");
  const data = await res.json();

  const products = data?.data;

  const paths = Array.isArray(products)
    ? products.map((product) => ({
        params: { category: product.category },
      }))
    : [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5555/api/v1/products/${params.category}`
  );
  const data = await res.json();

  return {
    props: {
      categorizedData: data,
    },
  };
};
