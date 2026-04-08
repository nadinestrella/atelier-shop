'use client';

import { MessageCircle, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Message = {
  text: string;
  from: 'user' | 'bot';
  options?: string[];
};

export default function Chatbot() {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Hi! How can we help you? 🙂',
      from: 'bot',
      options: ['Shipping', 'Returns', 'Sizes'],
    },
  ]);
  const [input, setInput] = useState<string>('');
  const [isChatbotOpen, setIsChatbotOpen] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const hasOpened = localStorage.getItem('chatbot-opened');

    if (!hasOpened) {
      setTimeout(() => {
        setIsChatbotOpen(true);
        localStorage.setItem('chatbot-opened', 'true');
      }, 1500);
    }
  }, []);

  const getBotResponse = (message: string) => {
    const msg = message.toLowerCase();

    if (msg.includes('shipping')) {
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

  //Options buttons
  const handleOptionClick = (option: string) => {
    const normalized = option.toLowerCase();
    const userMessage: Message = { text: option, from: 'user' };
    let botResponse: Message;

    if (normalized.includes('shipping')) {
      botResponse = {
        text: '📦 Shipping takes between 24 and 48 hours.',
        from: 'bot',
      };
    } else if (normalized.includes('returns')) {
      botResponse = {
        text: '🔄 You can return your order within 30 days.',
        from: 'bot',
      };
    } else if (normalized.includes('sizes')) {
      botResponse = {
        text: '👕 We recommend you check our size guide.',
        from: 'bot',
      };
    } else {
      botResponse = {
        text: 'I am not sure about that 🤔, but I can help you with shipping, returns, or sizes.',
        from: 'bot',
      };
    }
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]);

      setIsTyping(false);
    }, 1500);
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
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 flex ${
                  msg.from === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div className="flex flex-col w-full">
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[70%] text-sm ${
                      msg.from === 'user'
                        ? ' bg-black text-white ml-auto'
                        : 'bg-gray-200 text-black mr-auto'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Options buttons */}
                  {msg.options && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {msg.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(option)}
                          className="text-xs bg-gray-200 border border-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400 hover:text-white"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* isTyping */}
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
