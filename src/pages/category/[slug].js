import ProductCard from "@/components/Products/ProductCard";
import Title from "@/components/Title/Title";
import { useRouter } from "next/router";

const CatagorigedProduct = ({ data }) => {
    return (
        <div>
            <Title title="Catagoriged Product" />
            <ProductCard products={data} />
        </div>
    );
};
export default CatagorigedProduct;

export const getStaticPaths = async ({ params }) => {
    const res = await fetch('http://localhost:3000/api/products')
    const data = await res.json();
    const categories = Object.keys(data.data)

    // const paths = categories.map((post) => ({
    //     params: { id: post.id },
    // }))

    return {
        paths: [],
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const getCategory = params?.slug;
    const res = await fetch('http://localhost:3000/api/products')
    const data = await res.json();

    const categorizedProducts = data?.data[getCategory]

    return {
        props: {
            data: categorizedProducts
        }
    }
}
