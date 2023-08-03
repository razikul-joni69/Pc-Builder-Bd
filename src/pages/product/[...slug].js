import Reviews from "@/components/Reviews/Reviews";
import Title from "@/components/Title/Title";
import { Rating } from "@smastrom/react-rating";

const ProductDetails = ({ data: product }) => {
    return (
        <section class="text-gray-700 body-font overflow-hidden bg-white pt-10">
            <div class="max-w-6xl px-4 mx-auto">
                <div class="flex flex-wrap mb-24 -mx-4">
                    <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                        <div class="sticky top-0 overflow-hidden ">
                            <div class="relative mb-6 lg:mb-10 lg:h-[30rem]">
                                <a class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                                        </path>
                                    </svg>
                                </a>
                                <img class="object-fill w-full lg:h-full" src={product?.img} alt="" />
                                <a class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div class="flex-wrap hidden -mx-2 md:flex">
                                <div class="w-1/2 p-2 sm:w-1/4">
                                    <a class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300" href="#">
                                        <img class="object-contain w-full lg:h-28" src={product?.img} alt="" />
                                    </a>
                                </div>
                                <div class="w-1/2 p-2 sm:w-1/4">
                                    <a class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300" href="#">
                                        <img class="object-contain w-full lg:h-28" src={product?.img} alt="" />
                                    </a>
                                </div>
                                <div class="w-1/2 p-2 sm:w-1/4">
                                    <a class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300" href="#">
                                        <img class="object-contain w-full lg:h-28" src={product?.img} alt="" />
                                    </a>
                                </div>
                                <div class="w-1/2 p-2 sm:w-1/4">
                                    <a class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300" href="#">
                                        <img class="object-contain w-full lg:h-28" src={product?.img} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2">
                        <div class="lg:pl-20">
                            <div class="mb-6 ">
                                <p class="badge badge-info text-white text-xl">{product?.category?.toUpperCase()}</p><br />
                                <p class="badge badge-success text-white text-xl">{product?.status}</p>

                                <h2 class="max-w-xl my-2 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                    {product?.name}
                                </h2>
                                <div class="flex flex-wrap items-center mb-2 space-x-4">
                                    <Rating
                                        style={{ maxWidth: 130 }}
                                        value={product?.rating}
                                        readOnly
                                    />
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
                                        {product?.total_ratings}
                                    </span>
                                </div>
                                <p class="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                    <span>${product?.price}</span>
                                    <span class="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">${parseFloat(product?.price) + 25}</span>
                                </p>
                            </div>
                            <div class="mb-6">
                                <h2 class="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">System Specs :</h2>
                                <p>{product?.features?.Brand}</p>
                                <p>{product?.features?.Model}</p>
                                <p>{product?.features?.Specification}</p>
                                <p>{product?.features?.Port}</p>
                                <p>{product?.features?.Voltage}</p>
                                <p>{product?.features?.Voltage}</p>
                                <p>{product?.features?.Cache}</p>
                                <p>{product?.features?.TDP}</p>
                                <p>{product?.features?.form_factor}</p>
                                <p>{product?.features?.memory_slots}</p>
                                <p>{product?.features?.max_memory}</p>
                                <p>{product?.features?.Networking}</p>
                                <p>{product?.features?.Capacity}</p>
                                <p>{product?.features?.Speed}</p>
                                <p>{product?.features?.Type}</p>
                                <p>{product?.features?.Voltage}</p>
                                <p>{product?.features?.ECC}</p>
                                <p>{product?.features?.Wattage}</p>
                                <p>{product?.features?.Efficiency}</p>
                                <p>{product?.features?.Modular}</p>
                                <p>{product?.features?.Connectors}</p>
                                <p>{product?.features?.Fan}</p>
                                <p>{product?.features?.Capacity}</p>
                                <p>{product?.features?.Interface}</p>
                                <p>{product?.features?.Endurance}</p>
                                <p>{product?.features?.Encryption}</p>
                                <p>{product?.features?.Size}</p>
                                <p>{product?.features?.Resolution}</p>
                                <p>{product?.features?.panel_type}</p>
                                <p>{product?.features?.refresh_rate}</p>
                                <p>{product?.features?.response_time}</p>
                                <p>{product?.features?.Brightness}</p>
                                <p>{product?.features?.Port}</p>
                                <p>{product?.features?.Port}</p>
                                <p>{product?.features?.Port}</p>
                                <p>{product?.features?.Port}</p>
                                <p>{product?.features?.Port}</p>
                                <p>{product?.features?.Port}</p>
                                <p>{product?.features?.Port}</p>
                                <p>{product?.features?.Port}</p>
                                
                            </div>
                            <div>
                                <h2 class="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">Product Description :</h2>
                                <p>{product?.description}</p>
                            </div>
                            <div class="mb-6 border-t"></div>
                            <div class="flex flex-wrap items-center mb-6">
                                <div class="mb-4 mr-4 lg:mb-0">
                                    <div class="w-28">
                                        <div class="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                            <button class="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                                <span class="m-auto text-2xl font-thin">-</span>
                                            </button>
                                            <input type="number" class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black" placeholder="1" />
                                            <button class="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                                                <span class="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-4 lg:mb-0">
                                    <button class="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi bi-heart" viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <a href="#" class="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl">
                                    Add to cart
                                </a>
                            </div>
                            <div class="flex gap-4 mb-6">
                                <a href="#" class="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl">
                                    Buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Title title="Reviews" subTitle="See what our customers say" />
            <Reviews reviews={product?.reviews} />
        </section>
    );
};
export default ProductDetails;




export const getStaticPaths = async () => {


    return {
        paths: [],
        fallback: false
    }
}
export const getStaticProps = async ({ params }) => {
    const productId = params?.slug[2]
    const productCategoriy = params?.slug[0]

    const res = await fetch('http://localhost:3000/api/products')
    const data = await res.json()
    const categorizedProduct = data?.data[productCategoriy]

    const product = categorizedProduct.filter(product => product._id === productId)

    return {
        props: {
            data: product[0]
        }
    }
}
