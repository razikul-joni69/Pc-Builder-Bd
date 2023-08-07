import ProductCard from "@/components/Products/ProductCard";
import Title from "@/components/Title/Title";
import { useRouter } from "next/router";

const CatagorigedProduct = ({ data }) => {
    const router = useRouter();
    const component = router?.query?.slug;
    return (
        <div>
            <div className="pt-5">
                <Title title={`All ${component?.toUpperCase()}`} subTitle={`All of available ${component}`} />
            </div>
            <ProductCard products={data} />
        </div>
    );
};
export default CatagorigedProduct;

export const getStaticPaths = async (ctx) => {
    const res = await fetch(`${process.env.BASE_URL}/api/products`)
    const data = await res.json();
    const categories = Object.keys(data.data);

    const paths = categories.map((category) => ({
        params: { slug: category },
    }))

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async ({ params }) => {
    // INFO: for local build
    // if (typeof window === "undefined") {
    //     return {
    //         props: {
    //             data: []
    //         }
    //     }
    // }

    const getCategory = params?.slug;
    const res = await fetch(`${process.env.BASE_URL}/api/products`)
    const data = await res.json();

    const categorizedProducts = data?.data[getCategory]

    return {
        props: {
            data: categorizedProducts
        }
    }
}
