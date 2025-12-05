import { Check, Sparkles, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Pricing = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const plans = [
    {
      name: 'Web Start',
      icon: Sparkles,
      price: '$390.000',
      
      description: 'Para quienes necesitan una página profesional, rápida y económica para comenzar.',
      features: [
        'Diseño web moderno',
        '1–4 secciones',
        'Totalmente responsive',
        'Formulario de contacto funcional',
        'Integración con redes sociales',
        'Publicación en Vercel',
        'Optimización básica de velocidad',
        'Imágenes optimizadas (nivel básico)',
        'Animaciones simples y elegantes'
      ],
      popular: false,
    },
    {
      name: 'Web Pro',
      icon: Zap,
      price: '$890.000',
      
      description: 'Diseño más premium, visual y con animaciones avanzadas. Ideal para negocios activos.',
      features: [
        'Todo lo del Plan Start',
        'Hasta 7 secciones',
        'Diseño visual más profesional y pulido',
        'Animaciones interactivas personalizadas (scroll, fade, zoom, reveal)',
        'Imágenes optimizadas en alta calidad',
        'Botones animados y microinteracciones',
        'Optimización avanzada de rendimiento',
        '1 mes de soporte y ajustes menores',
        'Efectos visuales premium (parallax, movimientos suaves, etc.)'
      ],
      popular: true,
    },
    {
      name: 'Web Full+',
      icon: Crown,
      price: '$1.190.000',
      
      description: 'El plan más completo: diseño ilimitado, branding incluido y mantenimiento continuo.',
      features: [
        'Páginas ilimitadas (las que la empresa necesite)',
        'Branding premium: Diseño de logo  (tipográfico + símbolo), Paleta de colores profesional, Manual de marca',
        'Todo lo del Plan Pro',
        'Animaciones premium tipo agencia (GSAP, scroll avanzado, efectos 3D si aplica)',
        'Imágenes totalmente optimizadas (webp, compresión profesional)',
        'Cambios anuales de diseño(hasta 2) incluidos',
        'Mantenimiento técnico anual',
        'Corrección de errores',
        'Copias de seguridad del código',
        'Soporte prioritario',
      ],
      popular: false,
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="precios" className="py-20 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Planes y Precios
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
            Elige el plan que mejor se adapte a las necesidades de tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-2xl p-8 border-2 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${
                plan.popular
                  ? 'border-primary shadow-2xl shadow-primary/20 scale-105 hover:scale-110 hover:shadow-primary/30'
                  : 'border-border hover:border-primary/50 hover:shadow-xl hover:scale-105'
              } ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{
                transitionDelay: `${300 + index * 150}ms`
              }}
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                plan.popular 
                  ? 'from-primary/10 to-primary/5' 
                  : 'from-primary/5 to-transparent'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg group-hover:scale-110 transition-transform duration-300 animate-bounce-subtle">
                  Más Popular
                </div>
              )}

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-lg">
                    <plan.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 group-hover:scale-105 inline-block">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">{plan.price}</span>
                    
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start group/item hover:translate-x-2 transition-transform duration-300"
                      style={{
                        animation: `fade-in-left 0.4s ease-out ${(index * 0.15) + (idx * 0.05)}s backwards`
                      }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300 group-hover/item:bg-primary/20">
                        <Check className="w-3 h-3 text-primary group-hover/item:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  variant={plan.popular ? 'default' : 'outline'}
                  className={`w-full group-hover:scale-105 transition-all duration-300 ${
                    plan.popular 
                      ? 'shadow-lg hover:shadow-xl hover:shadow-primary/30' 
                      : 'border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary'
                  }`}
                  onClick={() => scrollToSection('contacto')}
                >
                  Comenzar Ahora
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            ¿Necesitas algo personalizado?{' '}
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-primary hover:underline font-semibold"
            >
              Contáctanos para un plan a medida
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
