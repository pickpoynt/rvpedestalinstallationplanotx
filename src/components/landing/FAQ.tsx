import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is an interlock kit legal in Cobb County?",
    answer: "Yes, generator interlock kits are fully code-compliant (NEC Article 702) and accepted by Cobb County inspectors as a safe way to connect portable generators."
  },
  {
    question: "Does it work with any generator?",
    answer: "It works with any portable generator that has a 30-amp or 50-amp output rating (L14-30 or 14-50 outlet). We install the matching inlet box on your house."
  },
  {
    question: "Can I run my AC unit?",
    answer: "Usually, yes! A minimal 7500-watt generator can often run a central AC unit if you manage other loads. We can install a 'Soft Start' to help smaller generators start AC units."
  },
  {
    question: "Do I have to move my breaker panel?",
    answer: "No. The kit installs directly onto your existing panel cover. It’s a mechanical slide that forces you to turn off the Main breaker before turning on the Generator breaker."
  },
  {
    question: "How long does installation take?",
    answer: "A standard installation in Marietta takes about 3-4 hours. We test everything with you before we leave to ensure you're comfortable using it."
  },
  {
    question: "Why is this better than a transfer switch?",
    answer: "A manual transfer switch only lets you power 6-10 specific circuits. An interlock energizes your ENTIRE panel, giving you the flexibility to turn on any breaker you need."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Generator Interlock FAQ – Marietta, GA
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Common questions about connecting portable power safely.
            We make backup power simple and affordable for Marietta homeowners.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-steel/20 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-navy font-semibold hover:text-copper hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-steel leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-steel mb-4">Still have questions?</p>
          <a
            href="tel:+18777921410"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call us at (877) 792-1410
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
