'use client';

import Image from 'next/image';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Find Your Path to
              <span className="text-blue-600 block">Healing & Growth</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Compassionate therapy for anxiety, relationships, and trauma recovery 
              with Dr. Serena Blake, PsyD
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="btn-primary text-lg px-8 py-4"
              >
                Book a Free Consult
              </button>
              <a
                href="tel:+13235550192"
                className="btn-secondary text-lg px-8 py-4"
              >
                Call (323) 555-0192
              </a>
            </div>
            
            {/* Quick Info */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Licensed PsyD
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                8 Years Experience
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Virtual & In-Person
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/dr-serena-blake.svg"
                    alt="Dr. Serena Blake - Clinical Psychologist"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
