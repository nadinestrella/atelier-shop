'use client';

import { MessageCircle, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Message = {
  text: string;
  from: 'user' | 'bot';
};

export default function Chatbot() {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isChatbotOpen, setIsChatbotOpen] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getBotResponse = (message: string) => {
    const msg = message.toLowerCase();

    if (msg.includes('shipment')) {
      return 'Shipping takes between 24 and 48 hours.';
    }

    if (msg.includes('return')) {
      return 'You can return your order within 30 days.';
    }
    if (msg.includes('size')) {
      return 'We recommend you check our size guide.';
    }
    return 'I am not sure about that, but I can help you with shipping, returns, or sizes.';
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage: Message = { text: input, from: 'user' };

    //set userMessage
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    const userInput = input;
    setInput('');

    //set botMessage
    setTimeout(() => {
      const botMessage: Message = {
        text: getBotResponse(userInput),
        from: 'bot',
      };

      setMessages((prev) => [...prev, botMessage]);

      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="fixed bottom-11 right-4 w-80  shadow-2xl z-20">
      <button
        onClick={() => setIsChatbotOpen((prev) => !prev)}
        aria-label="Close chatbot"
        className="bg-black text-white p-2 rounded-full shadow-lg mb-2 fixed right-3 bottom-0.5 "
      >
        {isChatbotOpen ? (
          <X className="size-6" />
        ) : (
          <MessageCircle className="size-6" />
        )}
      </button>

      {isChatbotOpen && (
        <div>
          <div className="bg-black text-white flex flex-col p-2">
            <p className="font-semibold">Atelier bot</p>
            <span className="text-sm">Available</span>
          </div>

          {/* Messages */}

          <div className="flex-1 overflow-y-auto h-96 bg-white p-2.5 flex flex-col gap-2">
            <div className="flex justify-end">
              <p className="px-3 py-2 rounded-lg max-w-[70%] bg-gray-400 text-white text-sm">
                Hi! How can we help you?
              </p>
            </div>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 flex ${
                  msg.from === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg max-w-[70%] text-sm ${
                    msg.from === 'user'
                      ? 'bg-gray-400 text-white'
                      : 'bg-gray-200 text-black'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-lg max-w-[70%] bg-gray-200 text-black text-sm">
                  <span className="animate-pulse">Writing</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            className="p-2 border-t flex gap-2 bg-white"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="flex-1 text-sm border border-gray-200 w-6xl p-0.5"
              placeholder="Write..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-black text-white p-2 tracking-wider text-sm hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:bg-gray-400"
              onClick={handleSend}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
