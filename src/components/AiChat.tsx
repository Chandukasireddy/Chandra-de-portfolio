import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbX } from "react-icons/tb";
import { useLanguage } from "../context/language-context";
import { useTheme } from "../context/theme-context";
import me from "../assets/img/me.webp";
import aiIcon from "../assets/icons/ai-icon.png";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  isStreaming?: boolean;
}

interface PredefinedQA {
  id: string;
  question: { en: string; de: string };
  answer: { en: string; de: string };
}

const PREDEFINED_QA: PredefinedQA[] = [
  {
    id: "bosch",
    question: {
      en: "What did you do at Robert Bosch?",
      de: "Was haben Sie bei Robert Bosch gemacht?"
    },
    answer: {
      en: "At Robert Bosch, I worked as a Generative AI Werkstudent and Intern. I developed a PLM Windchill GenAI Testing assistant using RAG and vector-space retrieval workflows. I also defined multi-stage LLM evaluation metrics (covering retrieval relevance, response quality, hallucination rate, latency, and cost) and evaluated fine-tuning vs. RAG strategies to guide production scaling.",
      de: "Bei Robert Bosch war ich als Generative AI Werkstudent und Praktikant tätig. Ich habe einen PLM Windchill GenAI Test-Assistenten mit RAG- und Vektorraumsuch-Workflows entwickelt. Zudem habe ich mehrstufige LLM-Evaluierungsmetriken (für Abrufrelevanz, Antwortqualität, Halluzinationsrate, Latenz und Kosten) definiert und Vergleiche zwischen Fine-Tuning und RAG durchgeführt."
    }
  },
  {
    id: "skills",
    question: {
      en: "What is your core technical stack?",
      de: "Was ist Ihr technischer Stack?"
    },
    answer: {
      en: "My technical stack is divided into:\n• AI & Machine Learning: Generative AI, LLMs (LangChain, Agno), Agentic RAG, Graph RAG, Fine-Tuning, Semantic Search, NLP, Computer Vision, Embeddings.\n• Cloud: AWS, Google Cloud (Google Cloud Digital Leader certified), Azure SQL, Firebase, DevOps.\n• Data Science: SQL, Power BI, Statistical Analysis, Feature Engineering.\n• Software: Python, JavaScript, Node.js, Git, Docker, CI/CD, C++, Conda.",
      de: "Mein technischer Stack gliedert sich in:\n• KI & Maschinelles Lernen: Generative AI, LLMs (LangChain, Agno), Agentic RAG, Graph RAG, Fine-Tuning, NLP, Computer Vision, Embeddings.\n• Cloud-Technologien: AWS, Google Cloud (Google Cloud Digital Leader zertifiziert), Azure SQL, Firebase, DevOps.\n• Data Science: SQL, Power BI, statistische Analysen.\n• Software: Python, JavaScript, Node.js, Git, Docker, CI/CD, C++, Conda."
    }
  },
  {
    id: "education",
    question: {
      en: "Tell me about your education.",
      de: "Erzählen Sie mir von Ihrer Ausbildung."
    },
    answer: {
      en: "I am currently pursuing my Master's in Artificial Intelligence at Brandenburg University of Technology (Cottbus, Germany). Previously, I graduated with a Bachelor's degree in Computer Science and Engineering (specializing in AI & Machine Learning) from Guru Nanak Institutions Technical Campus (Hyderabad, India).",
      de: "Ich absolviere derzeit meinen Master in Künstlicher Intelligenz an der Brandenburgischen Technischen Universität (Cottbus, Deutschland). Zuvor habe ich meinen Bachelor in Informatik (CSE) mit Schwerpunkt KI & Maschinelles Lernen am Guru Nanak Institutions Technical Campus (Hyderabad, Indien) abgeschlossen."
    }
  },
  {
    id: "publications",
    question: {
      en: "What are your publications?",
      de: "Welche Publikationen haben Sie?"
    },
    answer: {
      en: "I have published two research papers:\n1. 'Digital Emotions using Sentiment Analysis for Predictive Insights on Customer Recommendations' (IEEE INDISCON 2024)\n2. 'Statistical Deep Learning Enhancements for Automated Cell Counting using CNNs and Ensemble Methods' (IJSDR)\nAdditionally, I won the EUNICE Challenge and acted as an Ambassador for E-CELL IIT Bombay.",
      de: "Ich habe zwei Forschungsarbeiten veröffentlicht:\n1. 'Digital Emotions using Sentiment Analysis for Predictive Insights on Customer Recommendations' (IEEE INDISCON 2024)\n2. 'Statistical Deep Learning Enhancements for Automated Cell Counting using CNNs and Ensemble Methods' (IJSDR)\nZudem bin ich EUNICE Challenge Gewinner und Campus-Botschafter für das E-CELL IIT Bombay."
    }
  }
];

const AiChat: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentLang = language.toLowerCase() as "en" | "de";

  // Initial welcome message based on language selection
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        sender: "ai",
        text:
          language === "DE"
            ? "Hallo! Ich bin Chandus KI-Assistent. Fragen Sie mich gerne alles über seinen beruflichen Werdegang, seine Fähigkeiten oder seine Projekte!"
            : "Hi there! I'm Chandu's AI Assistant. Feel free to ask me anything about his professional experience, technical skills, or education!"
      }
    ]);
  }, [language]);

  // Auto-scroll messages container to bottom on update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Simulates AI streaming text output (word-by-word)
  const streamText = (messageId: string, fullText: string) => {
    const words = fullText.split(" ");
    let currentText = "";
    let wordIndex = 0;

    const interval = setInterval(() => {
      if (wordIndex < words.length) {
        currentText += (wordIndex === 0 ? "" : " ") + words[wordIndex];
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId ? { ...msg, text: currentText } : msg
          )
        );
        wordIndex++;
      } else {
        clearInterval(interval);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId ? { ...msg, isStreaming: false } : msg
          )
        );
      }
    }, 60);
  };

  const handleQuestionSelect = (qa: PredefinedQA) => {
    if (isTyping) return;

    const userText = qa.question[currentLang];
    const aiText = qa.answer[currentLang];

    // 1. Add user message
    const userMsgId = Math.random().toString();
    setMessages((prev) => [...prev, { id: userMsgId, sender: "user", text: userText }]);
    setIsTyping(true);

    // 2. Simulate small delay (thinking) and start streaming AI response
    setTimeout(() => {
      setIsTyping(false);
      const aiMsgId = Math.random().toString();
      setMessages((prev) => [
        ...prev,
        { id: aiMsgId, sender: "ai", text: "", isStreaming: true }
      ]);
      streamText(aiMsgId, aiText);
    }, 800);
  };

  return (
    <div className="fixed right-5 bottom-32 lg:right-10 lg:bottom-10 z-[9999] flex flex-col items-end">
      {/* Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className={`w-[85vw] sm:w-[380px] h-[520px] rounded-3xl border flex flex-col shadow-2xl mb-6 overflow-hidden backdrop-blur-md ${
              theme === "dark"
                ? "bg-[#1a2238]/95 border-white/10 text-white shadow-black/40"
                : "bg-white/95 border-black/10 text-black shadow-black/10"
            }`}
          >
            {/* Header */}
            <div className={`p-6 flex items-center justify-between border-b ${
              theme === "dark" ? "border-white/5 bg-[#121829]" : "border-black/5 bg-gray-50"
            }`}>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-orange">
                  <img src={me} alt="Chandu AI" className="w-full h-full object-cover object-top" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#121829] rounded-full animate-pulse" />
                </div>
                <div className="text-left">
                  <h3 className="text-[1.5rem] font-black leading-tight">Chandu Assistant</h3>
                  <span className={`text-[1.1rem] ${
                    theme === "dark" ? "text-white/50" : "text-black/50"
                  }`}>AI Bot • Online</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-full transition-colors ${
                  theme === "dark" ? "hover:bg-white/5 text-white/70" : "hover:bg-black/5 text-black/70"
                }`}
              >
                <TbX size={20} />
              </button>
            </div>

            {/* Chat Messages List */}
            <div className={`flex-1 overflow-y-auto p-6 flex flex-col gap-6 scrollbar-none ${
              theme === "dark" ? "bg-[#0c1220]/20" : "bg-gray-50/20"
            }`}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col max-w-[80%] ${
                    msg.sender === "user" ? "self-end items-end" : "self-start items-start"
                  }`}
                >
                  <div
                    className={`p-4 rounded-2xl text-[1.35rem] leading-relaxed whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-orange to-yellow-600 text-white rounded-tr-sm"
                        : theme === "dark"
                        ? "bg-white/5 text-white/90 rounded-tl-sm border border-white/5"
                        : "bg-black/5 text-black/90 rounded-tl-sm border border-black/5"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing Dot Indicator */}
              {isTyping && (
                <div className="self-start flex gap-2 p-4 rounded-2xl bg-white/5 border border-white/5 rounded-tl-sm max-w-[60%]">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-orange animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-orange animate-bounce" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer Container - Predefined Questions List */}
            <div className={`p-4 border-t flex flex-col gap-3 ${
              theme === "dark" ? "border-white/5 bg-[#121829]/60" : "border-black/5 bg-gray-50/60"
            }`}>
              <span className={`text-[1.1rem] font-bold text-left tracking-wider uppercase ${
                theme === "dark" ? "text-white/40" : "text-black/40"
              }`}>
                {language === "DE" ? "Fragen vorschlagen:" : "Suggested Questions:"}
              </span>
              <div className="flex flex-col gap-2 max-h-[140px] overflow-y-auto scrollbar-none pr-1">
                {PREDEFINED_QA.map((qa) => (
                  <button
                    key={qa.id}
                    disabled={isTyping}
                    onClick={() => handleQuestionSelect(qa)}
                    className={`text-left p-3 rounded-xl border text-[1.25rem] font-semibold transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-orange hover:text-white"
                        : "bg-white border-black/10 text-black/80 hover:bg-gray-100 hover:border-orange hover:text-black"
                    } ${isTyping ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {qa.question[currentLang]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 sm:p-5 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 flex items-center justify-center bg-gradient-to-tr from-white to-gray-50 border-[3px] border-[#ff6a3d]"
        aria-label="Ask Him AI Assistant"
      >
        {/* Pulsing ring around floating button */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange to-yellow-500 opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
        <span className="relative z-10 flex items-center justify-center">
          <img
            src={aiIcon}
            alt="Ask Him AI"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain animate-[wiggle_3s_ease-in-out_infinite]"
          />
        </span>
      </button>
    </div>
  );
};

export default AiChat;
