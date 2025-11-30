const testimonials = [
  {
    name: "John Doe",
    role: "Desarrollador Junior Fullstack ",
    image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    description: "Hola, soy desarrollador de software y he adquirido mucha experiencia en este bootcamp, lo recomiendo."
  },
  {
    name: "Marcos Rodriguez",
    role: "Desarrollador Junior Frontend",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    description: "Hola, soy desarrollador frontend y adquirí mucha experiencia valiosa en este bootcamp."
  },
  {
    name: "Carlos Mendez",
    role: "Desarrollador Junior Backend",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMevJFZGY1xvPjPoTIoeQtYtBEr9W9ciCdSeYnh0fj9w_D8I6BWgCEYYlSccFJOucreuw&usqp=CAU",
    description: "Hola, soy desarrollador backend y este bootcamp me ayudó a mejorar mis habilidades de programación significativamente."
  }
]

export default function Testimonials() {
  return (
    <section id='testimonials' className='py-16 sm:py-20 px-10 sm:px-6 lg:px-8 '>
      <div className='max-w-7xl mx-auto'>
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* left side */}
          <div className='lg:w-1/2 w-full text-center lg:text-left'>
            <h2 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
              Lo que dicen los desarrolladores sobre nosotros
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">Todo lo que necesitas para construir, frontend, backend, implementar, todo lo que puedas imaginar.
            </p>
          </div>
          
          {/* right side */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, index)=>(
                <div key={index} className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl">
                  <div className="flex items-start space-x-3 sm:space-x-4 ">
                    <div className="shrink-0">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">"</div>
                    </div>

                    <div className="grow">
                      <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{testimonial.description}</p>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <img src={testimonial.image} alt={testimonial.image} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                        <div>
                          <h4 className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                          <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
