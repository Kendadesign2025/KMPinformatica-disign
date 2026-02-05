import React from 'react';
import { Monitor, PenTool, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. HERO SECTION - Impacto Visual Moderno */}
      <header className="relative bg-slate-900 text-white pt-32 pb-20 px-6 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 fade-in-up">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-sm font-medium tracking-wide">
              🚀 KMP Informática e Design
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              Soluções completas em <span className="text-blue-500">Informática</span> e <span className="text-cyan-400">Design</span>.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Da manutenção de computadores à criação do seu material publicitário. 
              Somos o parceiro tecnológico que impulsiona o seu negócio.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contato" className="btn-primary flex items-center gap-2 bg-blue-600 hover:bg-blue-700 border-none">
                Solicitar Orçamento
                <ArrowRight size={18} />
              </a>
              <a href="https://wa.me/seunumero" target="_blank" className="btn-outline border-slate-500 text-slate-300 hover:bg-slate-800 hover:border-slate-800">
                Falar no WhatsApp
              </a>
            </div>
          </div>
          
          {/* Hero Image / Illustration Placeholder */}
          <div className="hidden md:flex justify-center relative fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="relative w-full aspect-square max-w-md bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-2xl border border-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
              {/* Aqui entraria uma imagem 3D ou ilustração de alta qualidade */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <Monitor size={40} className="text-white" />
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-sm font-mono text-cyan-300">System.status = "Optimized";</p>
                  <p className="text-sm font-mono text-blue-300">Design.quality = "Premium";</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SERVICES SECTION - Divisão Clara */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold text-slate-900">Nossos Serviços</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Unimos a precisão técnica da informática com a criatividade do design gráfico para oferecer tudo o que você precisa em um só lugar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bloco Informática */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                  <Monitor size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Informática Técnica</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Manutenção de PCs e Servidores",
                  "Redes e Infraestrutura",
                  "Instalação de Softwares",
                  "Recuperação de Dados",
                  "Gestão de E-mails",
                  "Consultoria Especializada"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <CheckCircle size={18} className="text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bloco Design */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-100 rounded-xl text-cyan-600">
                  <PenTool size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Design e Impressão</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Impressão Grandes Formatos",
                  "Identidade Visual e Logos",
                  "Cartões e Flyers",
                  "Personalização de Brindes",
                  "Convites e Eventos",
                  "Monografias e Capas"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <CheckCircle size={18} className="text-cyan-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US - Credibilidade */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Atendimento Local",
              desc: "Estamos na Rua da Cela, prontos para atender você pessoalmente.",
              icon: <MapPin className="text-blue-500" />
            },
            {
              title: "Agilidade na Entrega",
              desc: "Prazos respeitados rigorosamente para não parar seu negócio.",
              icon: <CheckCircle className="text-green-500" />
            },
            {
              title: "Suporte Integrado",
              desc: "Resolvemos seu problema de TI e imprimimos seu material no mesmo lugar.",
              icon: <Phone className="text-cyan-500" />
            }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="mb-4 p-3 bg-white w-fit rounded-xl shadow-sm">{feature.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LOCATION & CTA - Finalização */}
      <section id="contato" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Pronto para modernizar seu negócio?</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Visite-nos ou entre em contato agora mesmo. 
            Soluções em TI e Design ao seu alcance.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 pt-8">
            <div className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm text-left">
              <div className="p-3 bg-blue-600 rounded-full">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Endereço</p>
                <p className="font-medium">Rua da Cela, Próx. Escola FA Ginguba</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm text-left hover:bg-white/10 transition-colors cursor-pointer">
              <div className="p-3 bg-green-600 rounded-full">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">WhatsApp</p>
                <p className="font-medium">Falar com Atendente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="py-8 bg-slate-950 text-slate-500 text-center text-sm border-t border-slate-900">
        <p>© {new Date().getFullYear()} KMP Informática e Design. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;
