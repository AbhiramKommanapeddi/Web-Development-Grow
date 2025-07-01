import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-100">
              <Image
                src="/images/dr-serena-blake.svg"
                alt="Dr. Serena Blake in her therapy office"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-200 to-emerald-300 rounded-full opacity-20"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                About Dr. Serena Blake
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                with eight years of experience and over 500 client sessions. She blends evidence-based 
                approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              
              <p>
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake 
                is committed to creating a safe, supportive space for you to thrive. Her approach combines 
                the latest therapeutic techniques with genuine empathy and understanding.
              </p>

              <p>
                Dr. Blake specializes in anxiety and stress management, relationship counseling, and trauma 
                recovery. She believes in empowering her clients with practical tools and insights that 
                create lasting positive change in their lives.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Degree</h4>
                <p className="text-sm text-gray-600">Doctor of Psychology (PsyD)<br />Clinical Psychology</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">License</h4>
                <p className="text-sm text-gray-600">Licensed Clinical Psychologist<br />California State Licensed</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-sm text-gray-600">8+ Years<br />500+ Client Sessions</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-sm text-gray-600">Los Angeles, CA<br />In-person & Virtual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
