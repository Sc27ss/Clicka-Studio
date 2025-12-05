import { useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Portfolio = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Cardinals Consulting',
      url: 'https://cardinals-consulting.vercel.app/',
      description: 'Sitio corporativo profesional con diseño moderno, secciones organizadas y enfoque empresarial. Ideal para mostrar tu nivel más alto.',
      tags: ['Corporativo', 'Profesional', 'Consultoría'],
      image: 'https://i.imgur.com/MlvePa2.png',
    },
    {
      title: 'Sapore di Casa — Restaurante Italiano',
      url: 'https://sapore-di-casa3.vercel.app/',
      description: 'Página elegante y moderna, con menú interactivo, estilo gastronómico premium y experiencia visual excelente.',
      tags: ['Restaurante', 'Interactivo', 'Elegante'],
      image: 'https://i.imgur.com/u7JeN53.png',
    },
    {
      title: 'Finca Vista Verde — Casa en Arriendo',
      url: 'https://casa-santaelena.netlify.app/',
      description: 'Sitio inmobiliario informativo y visual, ideal para mostrar propiedades, características y galería de fotos.',
      tags: ['Inmobiliaria', 'Arriendo', 'Galería'],
      image: 'https://i.imgur.com/15o4hAl.png',
    },
    {
      title: 'PetCare Plus — Veterinaria',
      url: 'https://pet-care-plus-opal.vercel.app/',
      description: 'Página cálida y profesional para servicios veterinarios, con secciones claras y enfoque en confianza.',
      tags: ['Veterinaria', 'Servicios', 'Confiable'],
      image: 'https://i.imgur.com/3o2U3bp.png',
    },
    {
      title: 'Bella Rosa — Floristería',
      url: 'https://bella-rosa.vercel.app/',
      description: 'Diseño visual, elegante y minimalista, perfecto para mostrar productos florales y ventas online.',
      tags: ['Floristería', 'Visual', 'Minimalista'],
      image: 'https://i.imgur.com/DbbZ3T1.png',
    },
    {
      title: 'Nevada Heladería — Versión A',
      url: 'https://sc27ss.github.io/NevadaH/',
      description: 'Diseño colorido y atractivo para heladería artesanal, con enfoque en productos y experiencia visual.',
      tags: ['Heladería', 'Landing', 'Ilustrativa'],
      image: 'https://i.imgur.com/6uzp0TD.png',
    },
    {
      title: 'Veggie Life — Restaurante Vegetariano',
      url: 'https://veggie-life-five.vercel.app/',
      description: 'Sitio fresco y juvenil para restaurante vegetariano, ideal para mostrar menú y filosofía eco-friendly.',
      tags: ['Vegetariano', 'Moderno', 'Natural'],
      image: 'https://i.imgur.com/gnLaGJe.png',
    },
    {
      title: 'Lumine Academy — Tutorías Escolares',
      url: 'https://lumine-academy1.vercel.app/',
      description: 'Página educativa clara con secciones para servicios, procesos de aprendizaje y contacto.',
      tags: ['Educación', 'Servicios', 'Informativo'],
      image: 'https://i.imgur.com/I1euJdX.png',
    },
    {
      title: 'Nevada Heladería — Versión B',
      url: 'https://heladeria-delta.vercel.app/',
      description: 'Versión alternativa con enfoque en catálogo y navegación limpia, ideal para mostrar variedad de productos.',
      tags: ['Heladería', 'Catálogo', 'Moderna'],
      image: 'https://i.imgur.com/xbX9Ubm.png',
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="portafolio" className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Nuestro Portafolio
          </h2>
          <div
            className={`w-20 h-1 bg-primary rounded-full mx-auto mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Proyectos reales que demuestran nuestra experiencia y dedicación
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 hover:border-primary/50 relative ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{
                transitionDelay: `${300 + index * 150}ms`
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                  <Button
                    variant="default"
                    size="lg"
                    className="shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110"
                    onClick={() => window.open(project.url, '_blank')}
                    disabled={project.url === '#'}
                  >
                    Ver Proyecto
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </Button>
                </div>

                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {project.tags[0]}
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div className="p-6 relative">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 group-hover:translate-x-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-default border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1 group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1 group-hover:scale-125 transition-transform duration-300 [transition-delay:50ms] group-hover:rotate-12" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1 group-hover:scale-125 transition-transform duration-300 [transition-delay:100ms] group-hover:rotate-12" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1 group-hover:scale-125 transition-transform duration-300 [transition-delay:150ms] group-hover:rotate-12" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-2 group-hover:scale-125 transition-transform duration-300 [transition-delay:200ms] group-hover:rotate-12" />
                  <span>Cliente Satisfecho</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            size="lg"
            className="group transition-all duration-300 hover:scale-105"
          >
            {showAll ? 'Ver Menos' : 'Ver Catálogo Completo'}
            <ExternalLink className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;