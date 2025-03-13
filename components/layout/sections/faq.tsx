import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What makes JetsonRecruit different from other recruiting services?",
    answer: "Unlike services that just give advice, JetsonRecruit takes action. Our AI does the work for you—finding matches, sending messages, and updating coaches when your child improves.<br>Get Your Athlete Recruited Today →</br>",
    value: "item-1",
  },
  {
    question: "How does the AI match my child with college programs?",
    answer: "The AI compares your child's athletic stats, academics, and preferences against what college programs need. It scores them on a 1-100 scale and shows which divisions fit them best.",
    value: "item-2",
  },
  {
    question:
      "How often will my child's profile update?",
    answer:
      "The profile updates automatically when your child's stats change. Each update triggers a new assessment of their college prospects.",
    value: "item-3",
  },
  {
    question: "Does JetsonRecruit work with all college divisions?",
    answer: "Yes. JetsonRecruit works with all divisions: D1-FBS, D1-FCS, D2, D3, NAIA, and NJCAA.",
    value: "item-4",
  },
  {
    question: "How do I get started with JetsonRecruit?",
    answer: "To get started with JetsonRecruit, simply sign up on our website and schedule your comprehensive onboarding call. We'll collect all the necessary information about your child's athletic and academic performance, create their profile, and immediately begin matching them with college programs.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
