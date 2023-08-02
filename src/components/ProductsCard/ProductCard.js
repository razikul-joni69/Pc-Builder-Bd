/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
// import { BsBookHalf } from "react-icons/bs";
// import { FaPeopleGroup } from "react-icons/fa6";
// import { MdOutlineEventSeat } from "react-icons/md";
// import Swal from "sweetalert2";

const ProductCard = ({ featuredProducts }) => {


    return (
        <div className="my-10">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center">
                {featuredProducts.map((product) => (
                    <div
                        key={product?._id}
                        className={`w-full max-w-sm ${product.available_seats > 0
                            ? "bg-white"
                            : "bg-[#cc0000]"
                            } border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5`}
                    >
                        <div className="btn w-full btn-info">
                            See All {product?.category}
                        </div>
                        <hr className="my-4" />
                        <div className="relative">
                            <a className="relative" href="#">
                                <img
                                    className="rounded-lg w-full h-60"
                                    src={product?.img}
                                    alt="product image"
                                />
                            </a>
                        </div>
                        <hr className="my-4" />
                        <div className="space-y-2">

                            <div className="flex items-center gap-1 text-[15px] dark: text-white">
                                Category: <span className="badge dark:text-white badge-primary">{product?.category}</span>
                            </div>
                            <div className="flex items-center gap-1 text-[15px] dark: text-white">
                                Availability: <span className="badge dark:text-white badge-primary">{product?.status}</span>
                            </div>
                            <div className="flex items-center gap-1 text-[15px] dark: text-white">
                                Average Rating: <span className="badge dark:text-white badge-primary">{product?.average_rating}</span>
                            </div>
                            <div
                                className={` text-xl font-semibold tracking-tight dark:text-white`}
                            >
                                <h4>{product?.name}</h4>
                                <h4>${product?.price}</h4>
                            </div>
                            <div className="dark:text-gray-200">
                                {product?.description?.slice(0, 100)}
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
                                    See Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
