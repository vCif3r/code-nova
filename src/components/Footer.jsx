
export default function Footer() {
    return (
        <footer className="bg-transparent">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center sm:justify-start space-x-1 group cursor-pointer">
                        <div>
                            <img
                                src="/logo-web.png"
                                alt="logo"
                                className="w-6 h-6 sm:w-8 sm:h-8"
                                width={6}
                                height={6}
                            />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-white">Code</span>
                            <span className="text-blue-400">Nova</span>
                        </span>
                    </div>
                    <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-body">
                        <li>
                            <a href="#features" className="hover:underline me-4 md:me-6">Features</a>
                        </li>
                        <li>
                            <a href="#bootcamp" className="hover:underline me-4 md:me-6">Bootcamps</a>
                        </li>
                        <li>
                            <a href="#pricing" className="hover:underline me-4 md:me-6">Precios</a>
                        </li>
                        <li>
                            <a href="#testimonials" className="hover:underline">Testimoniales</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-slate-900 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-center">© 2025 <a href="/" className="hover:underline">Codenova</a>. All Rights Reserved.</span>
            </div>
        </footer>



    )
}
