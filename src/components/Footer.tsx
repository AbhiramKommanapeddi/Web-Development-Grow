import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Dr. Serena Blake</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Licensed Clinical Psychologist providing compassionate, evidence-based 
              therapy to help you navigate life&apos;s challenges and discover your inner strength.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">(323) 555-0192</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">serena@blakepsychology.com</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">1287 Maplewood Drive<br />Los Angeles, CA 90026</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  About Dr. Blake
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Therapy Services
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Anxiety & Stress Management</li>
              <li className="text-gray-300">Relationship Counseling</li>
              <li className="text-gray-300">Trauma Recovery</li>
              <li className="text-gray-300">Individual Therapy</li>
              <li className="text-gray-300">Couples Therapy</li>
              <li className="text-gray-300">Virtual Sessions</li>
            </ul>
          </div>
        </div>

        {/* Office Hours */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-gray-300">In-Person Sessions</p>
                  <p className="text-gray-300">Virtual Sessions</p>
                </div>
                <div className="space-y-1">
                  <p className="text-emerald-400">Tue & Thu, 10 AM–6 PM</p>
                  <p className="text-emerald-400">Mon, Wed & Fri, 1 PM–5 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Session Fees & Payment</h4>
              <div className="grid grid-cols-1 gap-2 text-sm text-gray-300">
                <p>Individual Session: $200</p>
                <p>Couples Session: $240</p>
                <p>Superbill provided for insurance</p>
                <p>Self-pay options available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-3 text-red-300">Crisis Resources</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-red-300">Emergency Services</p>
                <p className="text-red-200">Call 911</p>
              </div>
              <div>
                <p className="font-medium text-red-300">Suicide & Crisis Lifeline</p>
                <p className="text-red-200">Call or Text 988</p>
              </div>
              <div>
                <p className="font-medium text-red-300">Crisis Text Line</p>
                <p className="text-red-200">Text HOME to 741741</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>© {currentYear} Dr. Serena Blake, Licensed Clinical Psychologist. All rights reserved.</p>
            <p className="mt-1">California License #PSY12345 | HIPAA Compliant Practice</p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Terms of Service
            </a>
            <a href="/accessibility" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
