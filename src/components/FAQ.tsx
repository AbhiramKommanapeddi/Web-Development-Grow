'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission to your insurance provider. Many clients find they can receive partial reimbursement for out-of-network therapy services. I also offer flexible payment options to make therapy accessible."
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions are conducted via Zoom on secure, HIPAA-compliant platforms. Virtual sessions are available Monday, Wednesday, and Friday from 1 PM to 5 PM. Online therapy can be just as effective as in-person sessions."
  },
  {
    question: "What is your cancellation policy?",
    answer: "I require 24-hour notice for cancellations or rescheduling. This allows me to offer the time slot to other clients who may need it. Late cancellations or no-shows may be charged the full session fee, though I understand emergencies happen."
  },
  {
    question: "How do I know if therapy is right for me?",
    answer: "Therapy can benefit anyone experiencing stress, anxiety, relationship difficulties, trauma, or simply wanting personal growth. If you're feeling overwhelmed, stuck, or curious about developing better coping strategies, therapy might be helpful. I offer a brief consultation to discuss your needs."
  },
  {
    question: "What should I expect in my first session?",
    answer: "Your first session is an opportunity for us to get to know each other. We'll discuss what brings you to therapy, your goals, and any concerns. I'll explain my approach and answer questions. This helps determine if we're a good fit and creates the foundation for our work together."
  },
  {
    question: "What therapy approaches do you use?",
    answer: "I use an integrative approach, drawing from cognitive-behavioral therapy (CBT), mindfulness-based interventions, and trauma-informed care including EMDR. My approach is tailored to your specific needs and preferences to ensure the best possible outcomes."
  },
  {
    question: "How long does therapy typically last?",
    answer: "The length of therapy varies depending on your goals and needs. Some people benefit from short-term therapy (8-12 sessions), while others prefer longer-term support. We'll regularly check in about your progress and adjust as needed."
  },
  {
    question: "Where is your office located?",
    answer: "My office is located at 1287 Maplewood Drive, Los Angeles, CA 90026. In-person sessions are available Tuesday and Thursday from 10 AM to 6 PM. The office is easily accessible with parking available."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about therapy, my practice, and what to expect.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              I&apos;m here to help. Feel free to reach out with any questions or concerns 
              you might have about therapy or my practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="tel:+1234567890"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors"
              >
                Call for Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
