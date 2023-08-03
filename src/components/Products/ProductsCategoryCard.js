import { Rating } from "@smastrom/react-rating";
import Link from "next/link";

const ProductsCategoryCard = ({ featuredCategorys }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center">
                {
                    featuredCategorys?.map((product) => (
                        <Link key={product?._id} href={`/category/${product?.category}`}>
                            <div className="w-full p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Product Category</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{product?.category}</h2>
                                    <p className="leading-relaxed text-base">{product?.description}</p>
                                    <div
                                        className={` text-xl font-semibold tracking-tight dark:text-white`}
                                    >
                                        <h4>Product Name: <span>{product?.name}</span></h4>
                                        <h4> Price: <span>${product?.price}</span></h4>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Rating
                                            style={{ maxWidth: 130 }}
                                            value={4}
                                            readOnly
                                        />
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 -ml-4">
                                            {product?.total_ratings}
                                        </span>
                                        <button
                                            className={`btn btn-sm btn-primary text-white`}
                                        >
                                            {product?.status}
                                        </button>
                                    </div>
                                </div>
                            </div></Link>
                    ))
                }
            </div>
        </section>
    );
};
export default ProductsCategoryCard;