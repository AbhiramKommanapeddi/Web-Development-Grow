'use client';

import { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  whatBringsYou?: string;
  preferredTime?: string;
  agreeContact?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    whatBringsYou: '',
    preferredTime: '',
    agreeContact: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9]?[\-\.\s]?\(?[0-9]{3}\)?[\-\.\s]?[0-9]{3}[\-\.\s]?[0-9]{4}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // What brings you validation
    if (!formData.whatBringsYou.trim()) {
      newErrors.whatBringsYou = 'Please share what brings you to therapy';
    } else if (formData.whatBringsYou.trim().length < 10) {
      newErrors.whatBringsYou = 'Please provide more details (at least 10 characters)';
    }

    // Preferred time validation
    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred contact time is required';
    }

    // Agreement validation
    if (!formData.agreeContact) {
      newErrors.agreeContact = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        whatBringsYou: '',
        preferredTime: '',
        agreeContact: false
      });
      setErrors({});
    } catch {
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to begin your journey toward healing and growth? Contact me to schedule 
            a consultation or ask any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <PhoneIcon className="w-6 h-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">(323) 555-0192</p>
                    <p className="text-sm text-gray-500">Call or text for immediate response</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <EnvelopeIcon className="w-6 h-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">serena@blakepsychology.com</p>
                    <p className="text-sm text-gray-500">I respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPinIcon className="w-6 h-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Location</h4>
                    <p className="text-gray-600">
                      1287 Maplewood Drive<br />
                      Los Angeles, CA 90026
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <ClockIcon className="w-6 h-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p><strong>In-person:</strong> Tue & Thu, 10 AM–6 PM</p>
                      <p><strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM–5 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-semibold text-red-900 mb-2">Crisis Support</h4>
              <p className="text-red-700 text-sm mb-3">
                If you&apos;re experiencing a mental health emergency, please contact:
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-red-800 font-medium">911 - Emergency Services</p>
                <p className="text-red-800 font-medium">988 - Suicide & Crisis Lifeline</p>
                <p className="text-red-800 font-medium">(555) 123-HELP - Local Crisis Line</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Thank you for your message! I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(323) 555-0192"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="whatBringsYou" className="block text-sm font-medium text-gray-700 mb-2">
                    What brings you here? *
                  </label>
                  <textarea
                    id="whatBringsYou"
                    name="whatBringsYou"
                    required
                    rows={4}
                    value={formData.whatBringsYou}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-vertical ${
                      errors.whatBringsYou ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Please share what brings you to therapy..."
                  />
                  {errors.whatBringsYou && (
                    <p className="mt-1 text-sm text-red-600">{errors.whatBringsYou}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred time to reach you *
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                      errors.preferredTime ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Weekday mornings, After 5 PM, etc."
                  />
                  {errors.preferredTime && (
                    <p className="mt-1 text-sm text-red-600">{errors.preferredTime}</p>
                  )}
                </div>

                <div>
                  <div className="flex items-start">
                    <input
                      id="agreeContact"
                      name="agreeContact"
                      type="checkbox"
                      required
                      checked={formData.agreeContact}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <label htmlFor="agreeContact" className="ml-3 text-sm text-gray-700">
                      I agree to be contacted by Dr. Serena Blake regarding my inquiry. *
                    </label>
                  </div>
                  {errors.agreeContact && (
                    <p className="mt-1 text-sm text-red-600">{errors.agreeContact}</p>
                  )}
                </div>

                <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Privacy Notice:</strong> Your information is confidential and secure. 
                    This form is for general inquiries only. Please do not include sensitive 
                    personal information or details about mental health concerns in the message field.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.agreeContact}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
