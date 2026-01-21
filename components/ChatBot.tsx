'use client';
import { useState, useRef, useEffect } from 'react';
import { PiChatTeardropText } from "react-icons/pi";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hey there! I'm here to help you explore Vansh's portfolio. Feel free to ask about his projects, skills, experience, or anything else you'd like to know!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      setMessages((prev) => [
        ...prev,
        {
          text: data.response,
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble responding right now. Please try again later.",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-4 md:right-6 w-14 h-14 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-all z-50 flex items-center justify-center ${
          isOpen ? 'scale-90' : 'scale-100 hover:scale-110'
        }`}
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="w-6 h-6 flex items-center justify-center">
            <PiChatTeardropText size={24} />
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 md:bottom-24 right-4 md:right-6 left-4 md:left-auto md:w-[360px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Chat Header */}
          <div className="bg-gray-900 text-white px-3 md:px-4 py-3 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-xs md:text-sm">AI Assistant</h3>
              <p className="text-[10px] md:text-xs text-gray-300">Ask me anything about Vansh</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 max-h-[50vh] md:max-h-[400px] min-h-[250px] md:min-h-[300px]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 ${
                    message.isUser
                      ? 'bg-gray-900 text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none'
                      : 'bg-white text-gray-900 border border-gray-200 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-900 border border-gray-200 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none px-4 py-2.5">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 md:p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2 items-end">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                placeholder={isLoading ? "Thinking..." : "Type your message..."}
                disabled={isLoading}
                className="flex-1 px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-xs md:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] md:text-xs text-gray-400 mt-2 text-center">Press Enter to send</p>
          </div>
        </div>
      )}
    </>
  );
}

