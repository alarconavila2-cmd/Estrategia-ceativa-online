
import React, { useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { CheckCircleIcon } from './components/icons/CheckCircleIcon';
import { XCircleIcon } from './components/icons/XCircleIcon';
import { WhatsAppIcon } from './components/icons/WhatsAppIcon';
import { QuoteIcon } from './components/icons/QuoteIcon';

const WHATSAPP_NUMBER = '5212211987498';
const WHATSAPP_MESSAGE = "Hola, vi su página y me gustaría solicitar mi diagnóstico digital gratuito.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;


const App: React.FC = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const DoubtCard: React.FC<{ title: string; text: string }> = ({ title, text }) => (
    <div className="relative h-full bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-8 border-brand-blue">
      <QuoteIcon className="absolute top-4 right-4 h-12 w-12 text-slate-100" />
      <h3 className="font-bold text-xl text-brand-blue mb-3">{title}</h3>
      <p className="text-slate-600 relative z-10">{text}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-700 antialiased">
      
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/80 backdrop-blur-lg shadow-md' : 'py-6'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className={`text-brand-blue transition-all duration-300 ${isScrolled ? 'h-9 w-9' : 'h-10 w-10'}`} />
            <span className="font-bold text-2xl text-brand-blue tracking-tight hidden sm:inline">Estrategia Creativa Online</span>
          </div>
           <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-md hover:bg-orange-600 transition-all transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>Contactar</span>
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Hero Section */}
        <section className="relative text-center py-20 md:py-32 my-8 overflow-hidden bg-white rounded-3xl shadow-sm">
           <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -z-0"></div>
           <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -z-0"></div>
           <div 
             className="absolute inset-0 opacity-50" 
             style={{
               backgroundImage: 'radial-gradient(#064257 1px, transparent 1px)',
               backgroundSize: '2rem 2rem'
             }}
           ></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-black text-brand-blue mb-4 leading-tight tracking-tighter">
              ¿Tu negocio está online, pero no <span className="text-brand-orange">vende</span>?
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-10">
              Deja de gastar tiempo y dinero en "likes" que no pagan facturas. Es hora de transformar tu presencia digital en un motor de crecimiento real y medible.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-orange text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Solicita tu Diagnóstico Gratuito
            </a>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue tracking-tight">¿Te suena familiar?</h2>
            <p className="text-lg text-slate-600 mt-3">Si has invertido en marketing antes, es probable que te hayas enfrentado a esto:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-red-400 overflow-hidden">
              <XCircleIcon className="absolute -right-4 -bottom-4 h-32 w-32 text-red-500/10" />
              <div className="relative z-10">
                <div className="bg-red-100 h-14 w-14 rounded-full flex items-center justify-center mb-4">
                  <XCircleIcon className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-2">Métricas de Vanidad</h3>
                <p className="text-slate-600">Reportes llenos de "likes" y "alcance", pero tu cuenta de banco no lo nota. Pura distracción.</p>
              </div>
            </div>
            <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-red-400 overflow-hidden">
               <XCircleIcon className="absolute -right-4 -bottom-4 h-32 w-32 text-red-500/10" />
               <div className="relative z-10">
                <div className="bg-red-100 h-14 w-14 rounded-full flex items-center justify-center mb-4">
                  <XCircleIcon className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-2">Estrategias Genéricas</h3>
                <p className="text-slate-600">El mismo plan "copia y pega" que le dan a todos. Tu negocio es único, tu estrategia también debe serlo.</p>
              </div>
            </div>
            <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-red-400 overflow-hidden">
              <XCircleIcon className="absolute -right-4 -bottom-4 h-32 w-32 text-red-500/10" />
              <div className="relative z-10">
                <div className="bg-red-100 h-14 w-14 rounded-full flex items-center justify-center mb-4">
                  <XCircleIcon className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-2">Falta de Resultados</h3>
                <p className="text-slate-600">Pasan los meses, el dinero se va, y sigues en el mismo lugar. La frustración es real.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Solution Section */}
        <section className="relative py-20 md:py-28 bg-brand-blue text-white rounded-3xl overflow-hidden">
          <div 
             className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)',
               backgroundSize: '3rem 3rem'
             }}
           ></div>
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue via-brand-blue to-black/20"></div>
           <div className="relative z-10">
              <div className="text-center mb-16 px-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">No vendemos marketing. Construimos <span className="text-orange-400">sistemas de ventas</span>.</h2>
                <p className="text-lg text-slate-300 mt-4 max-w-3xl mx-auto">Somos el socio estratégico que tu PyME necesita para dejar de improvisar y empezar a dominar.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                <div className="text-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all group">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 group-hover:bg-green-400/80 transition-all duration-300 group-hover:scale-110">
                    <CheckCircleIcon className="h-10 w-10 text-green-300 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="font-bold text-xl text-white mb-2">Estrategias a Medida</h3>
                  <p className="text-slate-300">Analizamos tu negocio, tu mercado y tus clientes para crear un plan de acción que SÍ funciona para TI.</p>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all group">
                   <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 group-hover:bg-green-400/80 transition-all duration-300 group-hover:scale-110">
                    <CheckCircleIcon className="h-10 w-10 text-green-300 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="font-bold text-xl text-white mb-2">Enfoque en ROI</h3>
                  <p className="text-slate-300">Nuestra única métrica de éxito es tu retorno de inversión. Cada peso que inviertes debe volver multiplicado.</p>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all group">
                   <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 group-hover:bg-green-400/80 transition-all duration-300 group-hover:scale-110">
                    <CheckCircleIcon className="h-10 w-10 text-green-300 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="font-bold text-xl text-white mb-2">Transparencia Total</h3>
                  <p className="text-slate-300">Entenderás exactamente qué hacemos, por qué lo hacemos y qué resultados estamos obteniendo. Sin jerga, sin rodeos.</p>
                </div>
              </div>
           </div>
        </section>

        {/* Overcoming Doubts Section */}
        <section className="py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue tracking-tight">¿Aún tienes dudas? Es normal.</h2>
            <p className="text-lg text-slate-600 mt-3 max-w-2xl mx-auto">Probablemente piensas esto, y aquí está nuestra respuesta honesta:</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <DoubtCard
              title="“Ya he probado agencias y no funcionó.”"
              text="Lo entendemos. Por eso no somos 'otra agencia'. Somos consultores enfocados en resultados de negocio. No hablamos de 'engagement', hablamos de ventas. La diferencia es radical."
            />
            <DoubtCard
              title="“No tengo tiempo para gestionar esto.”"
              text="¡Perfecto! Nuestro trabajo es liberarte. Nos encargamos de la estrategia y ejecución para que tú te dediques a lo que mejor sabes hacer: dirigir tu empresa."
            />
            <DoubtCard
              title="“¿Será una inversión muy grande?”"
              text="La pregunta correcta es: ¿cuánto te cuesta NO tener una estrategia que funcione? Ofrecemos soluciones adaptadas que se enfocan en un ROI inteligente. El verdadero costo es la inacción."
            />
            <DoubtCard
              title="“Mi negocio es muy específico, no creo que entiendan.”"
              text="Esa es nuestra fortaleza. No aplicamos fórmulas. Nos sumergimos en tu sector para entenderlo a fondo. La personalización es la clave del éxito, y es lo que hacemos."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 text-center">
          <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto border border-slate-200 bg-gradient-to-br from-white to-slate-50 overflow-hidden">
             <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl -z-0"></div>
             <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-brand-blue mb-4 tracking-tighter">El momento de crecer es <span className="text-brand-orange">AHORA</span>.</h2>
                <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Cada día que pasa sin una estrategia clara, es una oportunidad de venta perdida. Da el primer paso hacia la transformación digital de tu negocio. Sin compromiso, sin riesgo.</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-brand-orange text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105"
                  >
                    <WhatsAppIcon className="h-6 w-6" />
                    Quiero Mi Diagnóstico Digital ¡Gratis!
                  </a>
                  <p className="text-sm text-slate-500 mt-4">Inicia una conversación directa con un estratega.</p>
             </div>
          </div>
        </section>
      </main>
      
      {/* Sticky CTA for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-3 border-t border-slate-200 shadow-lg z-10">
         <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-green-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Chatea con un Estratega
          </a>
      </div>

      {/* Footer */}
      <footer className="bg-white text-center py-10 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Logo className="h-10 w-10 text-brand-blue mx-auto mb-2" />
          <p className="text-slate-600 font-bold text-lg">Estrategia Creativa Online</p>
          <p className="text-slate-500 mt-2">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
