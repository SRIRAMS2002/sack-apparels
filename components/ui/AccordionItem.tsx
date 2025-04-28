"use client";
import React, { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const Accordion = ({ title, content, isOpen, onClick }: AccordionProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center p-4 focus:outline-none"
        onClick={onClick}
      >
        <span className="text-sm lg:text-base text-amber-950 text-left font-semibold">{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-700">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordionData = [
    {
      title: "What sizes are available for your t-shirts?",
      content:
        "We offer a full range of unisex sizes from XS to 3XL. Each product page includes a detailed size chart to help you find the perfect fit.",
    },
    {
      title: "Do your prints fade after washing?",
      content:
        "Not at all. We use high-quality, eco-friendly inks and heat-press techniques to ensure long-lasting and vibrant prints — even after many washes.",
    },
    {
      title: "Are your t-shirts eco-friendly?",
      content:
        "Yes — we prioritize sustainability. Our t-shirts are made from 100% organic cotton, and we use water-based, non-toxic inks.",
    },
    {
        title: "  Do you offer bulk or wholesale discounts?",
        content:
          "Definitely. For bulk orders (10 or more items), we offer special pricing. Contact our support team for a custom quote.",
      },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto  py-10 px-4 sm:px-6 lg:px-8 place-content-center place-items-center h-fit">
      <p className="text-4xl sm:text-5xl lg:text-5xl font-[900] w-full text-center uppercase text-amber-950 mb-4">
        Why Choose Us
      </p>
 

      <div className="max-w-3xl mx-auto py-5 mt-3 lg:mt-6">
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionSection;