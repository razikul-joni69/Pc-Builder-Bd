import Title from "@/components/Title/Title";
import { Rating } from "@smastrom/react-rating";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';

const PcBuilder = ({ data }) => {
    const router = useRouter();
    const componentsNames = Object.keys(data);
    componentsNames.pop();
    const { processor, motherboard, ram, powerSupply, storageDevice, monitor } = useSelector((state) => state?.pc_components?.components);
    return (
        <div>
            <Title title="Pc Builder" subTitle="Build pc at your own choice and customization." />
            <div>
                <div class="justify-center flex-1 max-w-6xl px-4 pt-6 mx-auto md:px-6">
                    <div class="p-4 bg-white shadow-2xl rounded-xl mb-5">
                        <div class="flex flex-wrap items-center justify-between space-x-2">
                            <div class="flex items-center justify-center space-x-2 ">
                                <div class="flex  flex-shrink-0 cursor-pointer">
                                    <img src="https://img.icons8.com/?size=512&id=catq5R3dHFli&format=png" alt=""
                                        class="object-fill w-16 h-16" />
                                </div>
                                <div class="block">
                                    <div class="w-auto px-2 pb-2 ">
                                        <div class="font-medium">
                                            <div class="text-lg font-semibold dark:text-gray-400 uppercase hover:underline">
                                                Processor
                                                <small className="badge badge-info ml-2">required</small>
                                            </div>
                                        </div>
                                        {
                                            processor !== null && <>
                                                <div class="text-lg font-semibold dark:text-gray-400">
                                                    <small>Processor Name: </small>
                                                    {
                                                        processor?.name
                                                    }
                                                </div>
                                                <div className="flex ">
                                                    <div class="text-lg font-semibold dark:text-gray-400 mr-5">
                                                        <small>Processor Price: </small>$
                                                        {
                                                            processor?.price
                                                        }
                                                    </div>
                                                    {
                                                        processor && <div>
                                                            <Rating
                                                                style={{ maxWidth: 130 }}
                                                                value={processor?.rating}
                                                                readOnly
                                                            />
                                                        </div>
                                                    }
                                                </div></>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <Link href={`/pc-builder/processors`}><button className="btn btn-primary">{processor === null ? "Choose" : "Change"}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="justify-center flex-1 max-w-6xl px-4 mx-auto md:px-6">
                    <div class="p-4 bg-white shadow-2xl rounded-xl mb-5">
                        <div class="flex flex-wrap items-center justify-between space-x-2">
                            <div class="flex items-center justify-center space-x-2 ">
                                <div class="flex  flex-shrink-0 cursor-pointer">
                                    <img src="https://img.icons8.com/?size=512&id=axrp1Sa7gC3w&format=png" alt=""
                                        class="object-fill w-16 h-16" />
                                </div>
                                <div class="block">
                                    <div class="w-auto px-2 pb-2 ">
                                        <div class="font-medium">
                                            <div class="text-lg font-semibold dark:text-gray-400 uppercase hover:underline">
                                                Motherboard
                                                <small className="badge badge-info ml-2">required</small>
                                            </div>
                                        </div>
                                        {
                                            motherboard !== null && <>
                                                <div class="text-lg font-semibold dark:text-gray-400">
                                                    <small>Processor Name: </small>
                                                    {
                                                        motherboard?.name
                                                    }
                                                </div>
                                                <div className="flex ">
                                                    <div class="text-lg font-semibold dark:text-gray-400 mr-5">
                                                        <small>Processor Price: </small>$
                                                        {
                                                            motherboard?.price
                                                        }
                                                    </div>
                                                    {
                                                        motherboard && <div>
                                                            <Rating
                                                                style={{ maxWidth: 130 }}
                                                                value={motherboard?.rating}
                                                                readOnly
                                                            />
                                                        </div>
                                                    }
                                                </div></>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <Link href={`/pc-builder/motherboards`}><button className="btn btn-primary">{motherboard === null ? "Choose" : "Change"}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="justify-center flex-1 max-w-6xl px-4 mx-auto md:px-6">
                    <div class="p-4 bg-white shadow-2xl rounded-xl mb-5">
                        <div class="flex flex-wrap items-center justify-between space-x-2">
                            <div class="flex items-center justify-center space-x-2 ">
                                <div class="flex  flex-shrink-0 cursor-pointer">
                                    <img src="https://img.icons8.com/?size=512&id=q5UbUywCKwNr&format=png" alt=""
                                        class="object-fill w-16 h-16" />
                                </div>
                                <div class="block">
                                    <div class="w-auto px-2 pb-2 ">
                                        <div class="font-medium">
                                            <div class="text-lg font-semibold dark:text-gray-400 uppercase hover:underline">
                                                Ram
                                                <small className="badge badge-info ml-2">required</small>
                                            </div>
                                        </div>
                                        {
                                            ram !== null && <>
                                                <div class="text-lg font-semibold dark:text-gray-400">
                                                    <small>Processor Name: </small>
                                                    {
                                                        ram?.name
                                                    }
                                                </div>
                                                <div className="flex ">
                                                    <div class="text-lg font-semibold dark:text-gray-400 mr-5">
                                                        <small>Ram Price: </small>$
                                                        {
                                                            ram?.price
                                                        }
                                                    </div>
                                                    {
                                                        ram && <div>
                                                            <Rating
                                                                style={{ maxWidth: 130 }}
                                                                value={ram?.rating}
                                                                readOnly
                                                            />
                                                        </div>
                                                    }
                                                </div></>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <Link href={`/pc-builder/rams`}><button className="btn btn-primary">{ram === null ? "Choose" : "Change"}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="justify-center flex-1 max-w-6xl px-4 mx-auto md:px-6">
                    <div class="p-4 bg-white shadow-2xl rounded-xl mb-5">
                        <div class="flex flex-wrap items-center justify-between space-x-2">
                            <div class="flex items-center justify-center space-x-2 ">
                                <div class="flex  flex-shrink-0 cursor-pointer">
                                    <img src="https://img.icons8.com/?size=512&id=uC7fVJH9dwHG&format=png" alt=""
                                        class="object-fill w-16 h-16" />
                                </div>
                                <div class="block">
                                    <div class="w-auto px-2 pb-2 ">
                                        <div class="font-medium">
                                            <div class="text-lg font-semibold dark:text-gray-400 uppercase hover:underline">
                                                Power Supply
                                                <small className="badge badge-info ml-2">required</small>
                                            </div>
                                        </div>
                                        {
                                            powerSupply !== null && <>
                                                <div class="text-lg font-semibold dark:text-gray-400">
                                                    <small>Power Supply Name: </small>
                                                    {
                                                        powerSupply?.name
                                                    }
                                                </div>
                                                <div className="flex ">
                                                    <div class="text-lg font-semibold dark:text-gray-400 mr-5">
                                                        <small>Power Supply Price: </small>$
                                                        {
                                                            powerSupply?.price
                                                        }
                                                    </div>
                                                    {
                                                        powerSupply && <div>
                                                            <Rating
                                                                style={{ maxWidth: 130 }}
                                                                value={powerSupply?.rating}
                                                                readOnly
                                                            />
                                                        </div>
                                                    }
                                                </div></>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <Link href={`/pc-builder/powerSupplies`}><button className="btn btn-primary">{ram === null ? "Choose" : "Change"}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="justify-center flex-1 max-w-6xl px-4 mx-auto md:px-6">
                    <div class="p-4 bg-white shadow-2xl rounded-xl mb-5">
                        <div class="flex flex-wrap items-center justify-between space-x-2">
                            <div class="flex items-center justify-center space-x-2 ">
                                <div class="flex  flex-shrink-0 cursor-pointer">
                                    <img src="https://img.icons8.com/?size=512&id=vaQUFtPEp5nj&format=png" alt=""
                                        class="object-fill w-16 h-16" />
                                </div>
                                <div class="block">
                                    <div class="w-auto px-2 pb-2 ">
                                        <div class="font-medium">
                                            <div class="text-lg font-semibold dark:text-gray-400 uppercase hover:underline">
                                                Storage Devices
                                                <small className="badge badge-info ml-2">required</small>
                                            </div>
                                        </div>
                                        {
                                            storageDevice !== null && <>
                                                <div class="text-lg font-semibold dark:text-gray-400">
                                                    <small>Storage Device Name: </small>
                                                    {
                                                        storageDevice?.name
                                                    }
                                                </div>
                                                <div className="flex ">
                                                    <div class="text-lg font-semibold dark:text-gray-400 mr-5">
                                                        <small>Storage Device Price: </small>$
                                                        {
                                                            storageDevice?.price
                                                        }
                                                    </div>
                                                    {
                                                        storageDevice && <div>
                                                            <Rating
                                                                style={{ maxWidth: 130 }}
                                                                value={storageDevice?.rating}
                                                                readOnly
                                                            />
                                                        </div>
                                                    }
                                                </div></>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <Link href={`/pc-builder/storageDevices`}><button className="btn btn-primary">{storageDevice === null ? "Choose" : "Change"}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="justify-center flex-1 max-w-6xl px-4 mx-auto md:px-6">
                    <div class="p-4 bg-white shadow-2xl rounded-xl mb-5">
                        <div class="flex flex-wrap items-center justify-between space-x-2">
                            <div class="flex items-center justify-center space-x-2 ">
                                <div class="flex  flex-shrink-0 cursor-pointer">
                                    <img src="https://img.icons8.com/?size=512&id=rnDs41vgylGN&format=png" alt=""
                                        class="object-fill w-16 h-16" />
                                </div>
                                <div class="block">
                                    <div class="w-auto px-2 pb-2 ">
                                        <div class="font-medium">
                                            <div class="text-lg font-semibold dark:text-gray-400 uppercase hover:underline">
                                                Monitor
                                                <small className="badge badge-info ml-2">required</small>
                                            </div>
                                        </div>
                                        {
                                            monitor !== null && <>
                                                <div class="text-lg font-semibold dark:text-gray-400">
                                                    <small>Monitor Name: </small>
                                                    {
                                                        monitor?.name
                                                    }
                                                </div>
                                                <div className="flex ">
                                                    <div class="text-lg font-semibold dark:text-gray-400 mr-5">
                                                        <small>Monitor Price: </small>$
                                                        {
                                                            monitor?.price
                                                        }
                                                    </div>
                                                    {
                                                        monitor && <div>
                                                            <Rating
                                                                style={{ maxWidth: 130 }}
                                                                value={monitor?.rating}
                                                                readOnly
                                                            />
                                                        </div>
                                                    }
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <Link href={`/pc-builder/monitors`}><button className="btn btn-primary">{monitor === null ? "Choose" : "Change"}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end md:px-32 pb-5">
                    <button onClick={() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your Build Completed Successfully',
                            showConfirmButton: false,
                            timer: 2000
                        })
                        router.push('/')
                    }} className="btn btn-primary" disabled={processor === null || motherboard === null || ram === null || powerSupply === null || storageDevice === null || monitor === null}>Complete Build</button>
                </div>
            </div>
        </div>
    );
};
export default PcBuilder;


export async function getServerSideProps(ctx) {
    const res = await fetch('http://localhost:3000/api/products')
    const data = await res.json()

    return {
        props: data
    }
}