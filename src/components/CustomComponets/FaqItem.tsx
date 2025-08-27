import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
interface FaqItemProps {
  question: string;
  answer: string;
}
export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className='p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition'>
      <button
        onClick={() => setOpen(!open)}
        className='w-full flex justify-between items-center text-left'
      >
        <span className='text-lg font-semibold text-gray-800'>{question}</span>
        {open ? (
          <ChevronUp className='text-gray-600' />
        ) : (
          <ChevronDown className='text-gray-600' />
        )}
      </button>
      {open && <p className='mt-2 text-gray-600 transition-all'>{answer}</p>}
    </div>
  );
}
