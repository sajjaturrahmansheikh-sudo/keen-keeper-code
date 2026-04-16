import Link from "next/link";


const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="text-center">
                <h1 className="text-7xl font-extrabold text-gray-800">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
                    Page Not Found
                </h2>
                <p className="text-gray-500 mt-2">
                    Sorry, the page you are looking for does not exist.
                </p>

                <div className="mt-6">
                    <Link href={"/"}>
                        <button className="inline-block cursor-pointer px-6 py-3 bg-[#244D3F] text-white font-medium rounded-xl shadow hover:bg-[#244d3fac] transition duration-300">Go Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;