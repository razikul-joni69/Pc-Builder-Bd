import logo from '@/assets/images/logo.jpg';
import { signOut, useSession } from 'next-auth/react';
import Image from "next/image";
import Link from "next/link";
import Swal from 'sweetalert2';

const Layout = ({ children }) => {
    const { data: session } = useSession();

    const handleWarning = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'info',
            title: 'Feature not implemented yet!',
            text: 'I will do it as soon as possible!',
            timer: 5000
        })
    }

    return (
        <div data-theme="light">
            <div className='backdrop-blur-xl sticky top-0 z-50 border-b-2'>
                <div className="navbar md:container md:mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link href="/">Home</Link></li>
                                <li tabIndex={0} >
                                    <details >
                                        <summary>Components</summary>
                                        <ul className="p-2 w-44">
                                            <li><Link href="/category/processors">CPU / Processor</Link></li>
                                            <li><Link href="/category/motherboards"> Motherboard</Link></li>
                                            <li><Link href="/category/rams"> RAM</Link></li>
                                            <li><Link href="/category/powerSupplies">Power Supply Unit</Link></li>
                                            <li><Link href="/category/storageDevices"> Storage Device</Link></li>
                                            <li><Link href="/category/monitors"> Monitors</Link></li>
                                            <li><Link href="/category/accessories">Accessories</Link></li>
                                        </ul>
                                    </details>
                                </li>
                                <li className="bg-fuchsia-500 rounded-lg text-white hover:bg-fuchsia-600 hover:text-white"><Link href="/pc-builder">PC Builder</Link></li>
                            </ul>
                        </div>
                        <Link href="/" className='flex'>
                            <Image src={logo} width={50} height={50} className="rounded-xl" alt='logo'></Image>
                            <span className="btn btn-ghost normal-case text-xl invisible md:visible">PC Builder BD</span>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href="/">Home</Link></li>
                            <li tabIndex={0} >
                                <details >
                                    <summary>Components</summary>
                                    <ul className="p-2 w-52">
                                        <li><Link href="/category/processors">CPU / Processor</Link></li>
                                        <li><Link href="/category/motherboards"> Motherboard</Link></li>
                                        <li><Link href="/category/rams"> RAM</Link></li>
                                        <li><Link href="/category/powerSupplies">Power Supply Unit</Link></li>
                                        <li><Link href="/category/storageDevices"> Storage Device</Link></li>
                                        <li><Link href="/category/monitors"> Monitors</Link></li>
                                        <li><Link href="/category/accessories">Accessories</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li className="bg-fuchsia-500 rounded-lg text-white hover:bg-fuchsia-600 hover:text-white"><Link href="/pc-builder">PC Builder</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end space-x-2">
                        {
                            session?.user?.email ? <>
                                <button onClick={handleWarning} className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                                <div onClick={handleWarning} className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            <span className="badge badge-sm indicator-item">0</span>
                                        </div>
                                    </label>
                                    {/* <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                    <div className="card-body">
                                        <span className="font-bold text-lg">8 Items</span>
                                        <span className="text-info">Subtotal: $999</span>
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block">View cart</button>
                                        </div>
                                    </div>
                                </div> */}
                                </div>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-circle avatar">
                                        <div className="w-10 rounded-full ring-2">
                                            <img src={session?.user?.image ? session?.user?.image : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>{session?.user?.name}</a></li>
                                        <li onClick={handleWarning}>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><button className='btn-warning' onClick={() => {
                                            signOut()
                                            Swal.fire({
                                                position: 'top-end',
                                                icon: 'success',
                                                title: 'Logout Successfully!',
                                                text: 'You are successfully Logged in out from PCB-BD!',
                                                showConfirmButton: true,
                                                timer: 5000
                                            })
                                        }}>Logout</button></li>
                                    </ul>
                                </div>
                            </>
                                :
                                <div className='space-x-2'>
                                    <Link href="/login"><button className="btn btn-sm btn-success">Login</button></Link>
                                    <Link href="/register"><button className="btn btn-sm btn-info">Register</button></Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
            {
                children
            }
            <footer>
                <div className="footer p-10 bg-base-200 text-base-content">
                    <div>
                        <Image src={logo} width={60} height={60} alt='logo'></Image>
                        <p className="footer-title">PC Builder BD<br />Providing reliable pc service since 2001</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Newsletter</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Successfylly subscribed!',
                                    text: 'You are now subscribed. You will recieve our newsletter!',
                                    timer: 5000
                                })
                                e.target.reset()
                            }} className="relative">
                                <input type="email" placeholder="username@site.com" className="input input-bordered w-full pr-16" required />
                                <button type='submit' className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer items-center py-8 md:py-4 p-4 bg-neutral text-neutral-content">
                    <div className=" grid-flow-col place-self-center md:justify-self-start">
                        <Image src={logo} width={40} height={40} alt='logo'></Image>
                        <p>Copyright © 2023 - razikul.joni69</p>
                    </div>
                    <div className="grid-flow-col gap-4 place-self-center md:justify-self-end">
                        <a href='https://twitter.com/razikul_joni69' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a href='https://youtube.com' target=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a href='https://facebook.com/razikul.joni69' target=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Layout;