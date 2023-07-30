/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import RootLayout from "@/components/layout/RootLayout";

const ProductDetailPage = ({ productData }) => {
  const {
    image,
    averageRating,
    description,
    individualRating,
    keyFeatures,
    price,
    productName,
    status,
  } = productData?.data;
  console.log(productData?.data);
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex justify-center items-center my-10">
        <div className="hero-content flex-col lg:flex-row-reverse bg-white rounded-lg shadow-lg p-8 max-w-3xl">
          <img
            src={image}
            alt="Product"
            className="w-1/2   lg:h-auto rounded-lg shadow-2xl mx-auto lg:mx-0 lg:ml-8"
          />
          <div className="mt-8 lg:mt-0">
            <h1 className="text-4xl lg:text-3xl font-bold text-center lg:text-left mb-4">
              {productName}
            </h1>

            <p className="font-bold my-4">Model: {keyFeatures.model}</p>
            <p className="text-gray font-bold text-sm mb-2">Price: $ {price}</p>

            <p className="text-md text-gray-700 my-4">{description}</p>

            <p className="font-bold text-sm text-primary-focus mb-4">
              {status}
            </p>

            <p className="text-secondary-focus mb-4">
              {keyFeatures.specification}
            </p>

            <div className="grid grid-cols-2 gap-2 mb-6 text-center lg:text-left items-center text-sm">
              <p>Average Rating: {averageRating}</p>
              <p>Individual Rating: {individualRating}</p>
              <p>Brand: {keyFeatures.brand}</p>
              <p>Color: {keyFeatures.color}</p>
              <p>Port: {keyFeatures.port}</p>
              <p>Warranty: {keyFeatures.warranty}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5555/api/v1/products/all-products/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      productData: data,
    },
  };
};
