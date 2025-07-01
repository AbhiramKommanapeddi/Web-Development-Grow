import { 
  HeartIcon, 
  UserGroupIcon, 
  AcademicCapIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const services = [
  {
    icon: HeartIcon,
    image: "/images/anxiety-therapy.svg",
    title: "Anxiety & Stress Management",
    description: "Learn effective coping strategies to manage anxiety, reduce stress, and regain control of your daily life. We'll work together to identify triggers and develop practical tools for lasting change.",
    duration: "50 minutes",
    price: "$200",
    features: ["Individual Sessions", "Coping Strategies", "Relaxation Techniques", "Mindfulness Training"]
  },
  {
    icon: UserGroupIcon,
    image: "/images/relationship-therapy.svg",
    title: "Relationship Counseling",
    description: "Strengthen your relationships through improved communication, conflict resolution, and deeper emotional connection. Whether couples or family therapy, we focus on building healthier dynamics.",
    duration: "75 minutes", 
    price: "$240",
    features: ["Couples Therapy", "Communication Skills", "Conflict Resolution", "Emotional Intimacy"]
  },
  {
    icon: AcademicCapIcon,
    image: "/images/trauma-therapy.svg",
    title: "Trauma Recovery",
    description: "Heal from past traumatic experiences with evidence-based approaches including EMDR and trauma-informed care. Create a safe space to process difficult memories and build resilience.",
    duration: "60 minutes",
    price: "$200",
    features: ["EMDR Therapy", "Trauma Processing", "Resilience Building", "Safe Environment"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Therapy Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mental health services designed to support your journey 
            toward healing, growth, and well-being.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Service Image */}
              <div className="h-48 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Service Content */}
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                  <div className="text-lg font-semibold text-emerald-600">
                    {service.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Office Hours & Contact Info */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-700">In-Person Sessions</span>
                <span className="text-gray-600">Tue & Thu, 10 AM–6 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-700">Virtual Sessions (Zoom)</span>
                <span className="text-gray-600">Mon, Wed & Fri, 1 PM–5 PM</span>
              </div>
              <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
                <p className="text-emerald-800 text-sm">
                  <strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Session Fees</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-700">Individual Session</span>
                <span className="text-lg font-semibold text-emerald-600">$200</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-700">Couples Session</span>
                <span className="text-lg font-semibold text-emerald-600">$240</span>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Insurance:</strong> Superbill provided for self-submission. 
                  Contact us to discuss payment options.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-emerald-50 mb-6 max-w-2xl mx-auto">
              Take the first step toward positive change. Schedule a consultation 
              to discuss which service is right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Schedule Consultation
              </a>
              <a 
                href="tel:+1234567890"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Insurance Notice */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h4 className="font-semibold text-blue-900 mb-2">Insurance & Payment</h4>
            <p className="text-blue-700 text-sm">
              We accept most major insurance plans including Blue Cross Blue Shield, Aetna, 
              Cigna, and UnitedHealth. Self-pay options and sliding scale fees are available. 
              Contact us to verify your coverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
