import Image from "next/image";
import Link from "next/link";

const RandomProductsPage = ({ product }) => {
  const { image, productName, category, price, status, averageRating, _id } =
    product;

  return (
    <div className="shadow-2xl rounded-lg">
      <article className="flex flex-col ">
        <Image
          src={image}
          width={500}
          height={500}
          alt="image"
          className="object-cover w-full h-52 d"
        />

        <div className="flex flex-col flex-1 p-6">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-xs tracki uppercase hover:underline "
          >
            {category}
          </a>
          <h3 className="flex-1 py-2 text-lg font-semibold leadi">
            {productName}
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-800 items-center ">
            <span className="font-bold">${price}</span>
            <span>{status}</span>
            <span>
              <Link
                href={`/products/${_id}`}
                className="btn btn-sm btn-primary btn-outline"
              >
                Details
              </Link>
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default RandomProductsPage;
