import Link from "next/link";

const Herosection = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">PC Builder BD
                            <br className="hidden lg:inline-block" />A renowned name in Bangladesh.
                        </h1>
                        <p className="mb-8 leading-relaxed dark:text-gray-300">Welcome to our premier PC Builder Shop, where your custom computing dreams come to life. Our shop is a haven for tech enthusiasts, offering a wide range of top-tier components, cutting-edge processors, high-performance graphics cards, and sleek cases. With our expert guidance and unmatched selection, you can create the ultimate personalized PC tailored to your exact specifications.</p>
                        <div className="flex justify-center">
                            <Link href="/pc-builder">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Build Pc At Your Own</button>
                            </Link>
                            <a href="#components"><button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">See All Components</button></a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img height={500} className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80" />
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Herosection;