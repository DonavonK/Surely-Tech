import React, { useState } from 'react';
import styles from '../styles/styles.module.css';

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}> {/* Apply the CSS class */}
      <button
        className={`flex justify-between items-center w-full px-4 py-3 text-left focus:outline-none ${styles.accordionButton}`}
        onClick={toggleAccordion}
      >
        <span className="font-medium">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform transform ${isOpen ? 'rotate-180' : ''} ${styles.arrowIcon}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className={`p-4 ${styles.answer}`}> {/* Apply the CSS class */}
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
