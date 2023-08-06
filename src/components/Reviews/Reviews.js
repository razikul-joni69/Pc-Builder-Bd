import { Rating } from "@smastrom/react-rating";

const Reviews = ({ reviews }) => {
    return (
        <section class="flex items-center pb-10 font-poppins ">
            <div class="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div class="p-6 mb-6 bg-gray-50 dark:bg-gray-900">
                        <h2 class="mb-6 text-xl font-semibold text-left font-gray-600 dark:text-gray-400">
                            Ratings & Reviews</h2>
                        <div class="flex justify-start ">
                            <div
                                class="flex items-center mb-2 space-x-2 text-3xl leading-none text-gray-600 dark:text-gray-400 ">
                                <div class="items-center font-bold ">4.0/5</div>
                                <div class="items-center">
                                    <ul class="flex items-center ">
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    class="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    class="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    class="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    class="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    class="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-half"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div class="mb-6 text-xs dark:text-gray-400">16 customer reviews</div>
                        <div class="pb-1 mb-6">
                            <div class="flex items-center mb-3">
                                <div class="flex mr-2 text-xs text-black dark:text-gray-400">
                                    <span class="mr-1">4</span> <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" fill="currentColor"
                                        class="w-3 h-3 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="w-full h-3 mr-2 bg-gray-200 md:w-80 dark:bg-gray-700">
                                    <div class="h-3 bg-blue-500 dark:bg-blue-400" style={{ width: "75%" }}></div>
                                </div>
                                <div class="flex justify-end text-xs font-medium dark:text-gray-400">91% </div>
                            </div>
                            <div class="flex items-center mb-3">
                                <div class="flex mr-2 text-xs text-black dark:text-gray-400">
                                    <span class="mr-1">3</span> <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" fill="currentColor"
                                        class="w-3 h-3 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="w-full h-3 mr-2 bg-gray-200 md:w-80 dark:bg-gray-700">
                                    <div class="h-3 bg-blue-500 dark:bg-blue-400" style={{ width: "45%" }}></div>
                                </div>
                                <div class="flex justify-end text-xs font-medium dark:text-gray-400">45% </div>
                            </div>
                            <div class="flex items-center mb-3">
                                <div class="flex mr-2 text-xs text-black dark:text-gray-400">
                                    <span class="mr-1">2</span> <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" fill="currentColor"
                                        class="w-3 h-3 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="w-full h-3 mr-2 bg-gray-200 md:w-80 dark:bg-gray-700">
                                    <div class="h-3 bg-blue-500 dark:bg-blue-400" style={{ width: "25%" }}></div>
                                </div>
                                <div class="flex justify-end text-xs font-medium dark:text-gray-400">25% </div>
                            </div>
                            <div class="flex items-center ">
                                <div class="flex mr-2 text-xs text-black dark:text-gray-400">
                                    <span class="mr-1">1</span> <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" fill="currentColor"
                                        class="w-3 h-3 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="w-full h-3 mr-2 bg-gray-200 md:w-80 dark:bg-gray-700">
                                    <div class="h-3 bg-blue-500 dark:bg-blue-400" style={{ width: "14%" }}></div>
                                </div>
                                <div class="flex justify-end text-xs font-medium dark:text-gray-400">14% </div>
                            </div>
                        </div>
                        <div class="items-center ">
                            <a href="#" class="px-4 py-2 text-xs text-gray-100 bg-blue-500 hover:bg-blue-600 ">
                                View all reviews</a>
                        </div>
                    </div>
                    <div class="p-6 mb-6 bg-white dark:bg-gray-900">
                        <h2 class="mb-6 text-xl font-semibold text-left font-gray-600 dark:text-gray-400">
                            Leave a comment</h2>
                        <form action="" class="">
                            <div class="mb-6 ">
                                <input type="text" placeholder="your email" required=""
                                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                            </div>
                            <div class="mb-6 ">
                                <textarea type="message" placeholder="write a comment" required=""
                                    class="block w-full px-4 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "></textarea>
                            </div>
                            <div class="">
                                <button
                                    class="px-4 py-2 text-xs font-medium text-gray-100 bg-blue-500 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
                                    Submit comment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {
                    reviews?.map(review => {
                        return (
                            <div key={review?.username} class="p-4 bg-white shadow-2xl rounded-xl mb-5">
                                <div class="flex flex-wrap items-center space-x-2">
                                    <div class="flex  flex-shrink-0 cursor-pointer">
                                        <img src="https://i.postimg.cc/JzmrHQmk/pexels-pixabay-220453.jpg" alt=""
                                            class="object-fill w-16 h-16 rounded-full" />
                                    </div>
                                    <div class="flex items-center justify-center space-x-2 ">
                                        <div class="block">
                                            <div class="w-auto px-2 pb-2 ">
                                                <div class="font-medium">
                                                    <a href="#" class="text-lg font-semibold dark:text-gray-400 hover:underline">
                                                        <small>{review?.username}</small>
                                                    </a>
                                                </div>
                                                <div class="text-sm text-gray-500 dark:text-gray-400">
                                                    {review?.comment}
                                                </div>
                                            </div>
                                            <div>
                                                <Rating
                                                    style={{ maxWidth: 130 }}
                                                    value={review?.rationg}
                                                    readOnly
                                                />
                                            </div>
                                            <div class="flex items-center justify-start w-full text-xs pt-2">
                                                <div
                                                    class="flex items-center justify-center px-2 space-x-1 font-semibold text-gray-700 dark:text-gray-400">
                                                    <a href="#" class="hover:underline">
                                                        <span>Like</span>
                                                    </a>
                                                    <span class="self-center">.</span>
                                                    <a href="#" class="hover:underline">
                                                        <span>Reply</span>
                                                    </a>
                                                    <span class="self-center">.</span>
                                                    <a href="#" class="hover:underline">
                                                        <span>{Math.floor(Math.random() * 40 + 20)}m ago</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    })
                }

            </div>
        </section>
    );
};
export default Reviews;