import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  X, 
  Minimize2, 
  Maximize2,
  Sparkles,
  HelpCircle,
  School,
  CreditCard,
  Users
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm EduBot, your AI education assistant. I can help you with school admissions, education loans, scholarships, and more. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      suggestions: [
        "Find schools near me",
        "Education loan options",
        "Scholarship opportunities",
        "School comparison"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickResponses = {
    "find schools": "I can help you find schools! What location are you looking for? Also, what class/grade and board preference do you have?",
    "education loan": "Great! I can help you with education loans. We offer loans from ₹10,000 to ₹50 lakhs with interest rates starting from 8.5%. What's the loan amount you're looking for?",
    "scholarship": "There are many scholarship opportunities available! Are you looking for merit-based, need-based, or category-specific scholarships? What's your current class/grade?",
    "school comparison": "I can help you compare schools based on fees, facilities, ratings, and location. Which schools would you like to compare?",
    "admission process": "The admission process varies by school. Generally, it involves application submission, document verification, and sometimes an entrance test or interview. Which school are you interested in?",
    "fees structure": "School fees vary widely based on location, board, and facilities. Can you tell me your preferred location and budget range?",
    "cbse schools": "CBSE schools follow the Central Board curriculum. They're great for students who might relocate frequently. What location are you looking for CBSE schools in?",
    "boarding schools": "Boarding schools provide residential facilities along with education. They're excellent for overall personality development. What's your preferred location and budget?",
    "play school": "Play schools are perfect for early childhood development (ages 2-5). They focus on learning through play, social skills, and basic academics. Looking for any specific area?"
  };

  const generateBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    let response = "I understand you're asking about education-related topics. Let me help you with that!";
    let suggestions: string[] = [];

    // Simple keyword matching for demo
    for (const [key, value] of Object.entries(quickResponses)) {
      if (lowerMessage.includes(key)) {
        response = value;
        break;
      }
    }

    // Add contextual suggestions
    if (lowerMessage.includes("school")) {
      suggestions = ["Compare schools", "Check admission dates", "View fee structure", "Find nearby schools"];
    } else if (lowerMessage.includes("loan")) {
      suggestions = ["Calculate EMI", "Check eligibility", "Required documents", "Apply now"];
    } else if (lowerMessage.includes("scholarship")) {
      suggestions = ["Merit scholarships", "Need-based aid", "Government schemes", "Application process"];
    } else {
      suggestions = ["Find schools", "Education loans", "Scholarships", "Admission guidance"];
    }

    return {
      id: Date.now().toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date(),
      suggestions
    };
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 bg-gradient-primary text-primary-foreground shadow-hero hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
        <div className="absolute -top-2 -right-2">
          <div className="w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 transition-all duration-300 shadow-hero ${isMinimized ? 'h-16' : 'h-[600px]'}`}>
        <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-primary text-primary-foreground rounded-t-lg">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Bot className="w-6 h-6" />
              <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-secondary" />
            </div>
            <div>
              <CardTitle className="text-lg">EduBot</CardTitle>
              <p className="text-xs opacity-90">AI Education Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-primary-foreground hover:bg-white/20"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="flex flex-col h-[536px] p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-primary' : 'bg-secondary'}`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-primary-foreground" />
                      ) : (
                        <Bot className="w-4 h-4 text-secondary-foreground" />
                      )}
                    </div>
                    <div className={`rounded-lg p-3 ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Suggestions */}
              {messages.length > 0 && messages[messages.length - 1].suggestions && (
                <div className="flex flex-wrap gap-2">
                  {messages[messages.length - 1].suggestions!.map((suggestion, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </Badge>
                  ))}
                </div>
              )}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <Bot className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="border-t p-3">
              <div className="flex space-x-2 mb-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestionClick("Find schools near me")}
                  className="flex-1 text-xs"
                >
                  <School className="w-3 h-3 mr-1" />
                  Schools
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestionClick("Education loan options")}
                  className="flex-1 text-xs"
                >
                  <CreditCard className="w-3 h-3 mr-1" />
                  Loans
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestionClick("Scholarship opportunities")}
                  className="flex-1 text-xs"
                >
                  <Users className="w-3 h-3 mr-1" />
                  Scholarships
                </Button>
              </div>

              {/* Input Area */}
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask me anything about education..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button onClick={sendMessage} disabled={!inputMessage.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default AIChat;