import { useState } from "react";

type ServiceType = {
  name: string;
  description: string;
};

const services: ServiceType[] = [
  {
    name: "GST Registration",
    description:
      "GST Registration is mandatory for businesses crossing turnover limits. We handle complete documentation and filing."
  },
  {
    name: "LLP Registration",
    description:
      "LLP Registration allows you to start a limited liability partnership with minimum 2 partners."
  },
  {
    name: "Private Limited Company Registration",
    description:
      "Private Limited Company offers limited liability and is ideal for startups and growing businesses."
  },
  {
    name: "Income Tax Filing",
    description:
      "We provide accurate and timely income tax return filing for individuals and businesses."
  },
  {
    name: "Trademark Registration",
    description:
      "Trademark Registration protects your brand name and logo legally across India."
  },
  {
    name: "Payroll Services",
    description:
      "Complete payroll management including salary processing, compliance, and tax deductions."
  }
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"name" | "chat">("name");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [matchedService, setMatchedService] = useState<ServiceType | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const whatsappNumber = "8303026772"; // 🔴 CHANGE

  const findService = (input: string) => {
    const lower = input.toLowerCase();
    return services.find((service) =>
      service.name.toLowerCase().includes(lower)
    );
  };

  const handleSend = () => {
    if (!message.trim()) return;

    const service = findService(message);
    setMessage("");

    if (service) {
      setMatchedService(null);
      setIsTyping(true);

      // Simulate bot typing delay
      setTimeout(() => {
        setIsTyping(false);
        setMatchedService(service);
      }, 1200);
    } else {
      setMatchedService(null);
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        alert("Service not found. Please type full name like GST Registration or LLP Registration.");
      }, 1000);
    }
  };

  const openWhatsApp = () => {
    if (!matchedService) return;

    const text = `Hi, my name is ${name}. I want to know more about ${matchedService.name}.`;
    const encoded = encodeURIComponent(text);

    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-5  bg-primary text-white px-4 py-3 rounded-full shadow-lg z-50 hover:scale-110 transition"
      >
        💬
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white shadow-2xl rounded-2xl flex flex-col z-50">

          <div className="bg-primary text-white p-4 rounded-t-2xl text-sm font-semibold">
            RD Associates Support
          </div>

          <div className="p-4 text-sm space-y-4">

            {step === "name" && (
              <>
                <p className="fade-in">Hi 👋 Welcome!</p>
                <p>Please enter your name:</p>

                <div className="flex gap-2">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                  />
                  <button
                    onClick={() => name.trim() && setStep("chat")}
                    className="bg-primary text-white px-3 rounded"
                  >
                    →
                  </button>
                </div>
              </>
            )}

            {step === "chat" && (
              <>
                <p>Hi <strong>{name}</strong> 👋</p>
                <p>Type the service you're looking for:</p>

                <div className="flex gap-2">
                  <input
                    placeholder="e.g. GST Registration"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                  />
                  <button
                    onClick={handleSend}
                    className="bg-primary text-white px-3 rounded"
                  >
                    Send
                  </button>
                </div>

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="typing-indicator mt-3">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}

                {/* Service Reply */}
                {matchedService && !isTyping && (
                  <div className="mt-4 p-3 bg-gray-100 rounded-lg fade-in">
                    <p className="font-semibold">{matchedService.name}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      {matchedService.description}
                    </p>

                    <button
                      onClick={openWhatsApp}
                      className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:opacity-90 transition"
                    >
                      Chat on WhatsApp
                    </button>
                  </div>
                )}
              </>
            )}

          </div>

          <div className="text-center text-xs bg-gray-50 py-2 rounded-b-2xl text-gray-500">
            Instant WhatsApp Assistance 🚀
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;