const bootcamps = [
    {
        title: "Fundamentos del desarrollo web",
        description: "¡Aprende los fundamentos del desarrollo web desde cero! Este curso cubre HTML, CSS y JavaScript, ayudándote a comprender cómo se crean y funcionan los sitios web. Perfecto para principiantes que buscan iniciarse en la programación.",
        image: "/src/assets/web-dev-ty.jpg"
    },
    {
        title: "Desarrollo web Front-End",
        description: "Aprende a crear sitios web impactantes e interactivos con HTML, CSS y JavaScript. Este curso cubre frameworks front-end modernos como React para ayudarte a crear aplicaciones web intuitivas.",
        image: "/src/assets/frontend-development-tools.png"
    },
    {
        title: "Desarrollo Back-End",
        description: "Domina la programación back-end con bases de datos Node.js, Express y SQL. Aprende a crear API robustas, implementar la autenticación de usuarios y crear aplicaciones web escalables que puedan gestionar tareas complejas.",
        image: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/8177834/cover_image/optimized/Leverage%20LLMs%20for%20Coding-Blog-0cdfd3ae36e086935574c2ab341387ce.png"
    }
]

const Bootcamp = () => {
    return (
        <section id='bootcamp' className='py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-12 sm:mb-16 lg:mb-20 '>
                    <span className='bg-linear-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent'>¿Qué aprenderás?</span>
                    <h2 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
                        <span className='bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent'>Nuestros Bootcamps</span>
                    </h2>
                    <p className="mx-auto sm:w-1/2 text-gray-400">Explora nuestros bootcamps intensivos de programación, diseñados para equiparte con las habilidades más demandadas. Elige el programa adecuado, aprende de expertos e impulsa tu carrera tecnológica.</p>
                </div>
                <div className="space-y-16 sm:space-y-10 lg:space-y-12">
                    {bootcamps.map((bootcamp, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-stretch sm:gap-6 w-full relative">
                            <img
                                src={bootcamp.image}
                                alt={bootcamp.title}
                                className="w-[400px] min-h-[300px] object-cover rounded-2xl lg:mb-0 sm:relative absolute" 
                            />
                            <div                        
                                className={`sm:bg-slate-900/20 bg-slate-950/70 border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-lg transition-all duration-300 backdrop-blur-sm hover:bg-slate-900/30 min-h-[300px]`}
                            >
                                <h3 className='text-gray-300 text-3xl sm:text-4xl font-semibold mb-4 text-center lg:text-left'>{bootcamp.title}</h3>
                                <p className='text-gray-300 sm:text-gray-500 text-sm sm:text-lg text-center lg:text-left'>{bootcamp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Bootcamp