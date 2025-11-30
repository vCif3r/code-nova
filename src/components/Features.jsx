import React from 'react'

const features = [
    {
        title: "Opciones de pago flexibles",
        description: "Elige un plan de pago que funcione para ti y comienza a aprender sin preocupaciones financieras."
    },
    {
        title: "Bootcamp de alta calidad",
        description: "Domine las habilidades de codificación más demandadas con capacitación experta y proyectos prácticos para carreras tecnológicas."
    },
    {
        title: "Acceso exclusivo a eventos",
        description: "Obtenga acceso gratuito a talleres, eventos y cursos adicionales para estudiantes y exalumnos."
    }
]

const Features = () => {
  return (
    <section id='features' className='py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative'>
        <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
                <h2 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
                    <span className='bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent'>¿Por qué elegirnos?</span>
                    <br/>
                    <span className='bg-linear-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent'>
                        Beneficios de este bootcamp
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {features.map((feature, index)=>(
                    <div key={index} className='rounded-2xl p-6 sm:p-8 lg:p-10 bg-slate-900/20 border border-white/10 hover:shadow-lg transition-all duration-300 backdrop-blur-sm hover:bg-slate-900/30 '>
                        <h3 className='text-gray-300 text-2xl sm:text-3xl font-semibold mb-4 text-center'>{feature.title}</h3>
                        <p className='text-gray-500 text-sm sm:text-lg text-center'>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features