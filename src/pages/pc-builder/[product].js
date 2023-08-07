import ProductCard from "@/components/Products/ProductCard";
import Title from "@/components/Title/Title";
import { useRouter } from "next/router";

const CatagorigedProduct = ({ data }) => {
    const router = useRouter()
    const component = router?.query?.product
    return (
        <div>
            <Title title={`All ${component}`} subTitle="Select your Needed Processor." />
            <ProductCard products={data[component]} />
        </div>
    );
};
export default CatagorigedProduct;

export const getServerSideProps = async ({ params }) => {
    const res = await fetch(`${process.env.BASE_URL}/api/products`)
    const data = await res.json();

    return {
        props: {
            data: data.data
        }
    }
}
