import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface QuizDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const questions = [
  {
    id: 1,
    question: "Что для вас важнее в фотографии?",
    options: [
      { value: "classic", label: "Точная передача реалистичных моментов", photographer: "maria" },
      { value: "ai", label: "Яркие эффекты и необычные образы", photographer: "alexandra" },
      { value: "both", label: "Пока не решил(-а)", photographer: "both" },
    ],
  },
  {
    id: 2,
    question: "Какой способ съёмки вам больше нравится?",
    options: [
      { value: "camera", label: "С помощью фотоаппарата и профессионального фотографа", photographer: "maria" },
      { value: "ai", label: "Использование технологий искусственного интеллекта и цифровых эффектов", photographer: "alexandra" },
      { value: "experiment", label: "Готов экспериментировать с любыми вариантами", photographer: "both" },
    ],
  },
  {
    id: 3,
    question: "Как вы относитесь к времени обработки фотографий?",
    options: [
      { value: "fast", label: "Хочу получить фото быстро, в течение одного-двух дней", photographer: "alexandra" },
      { value: "wait", label: "Могу подождать дольше ради качественной и творческой обработки", photographer: "maria" },
      { value: "noMatter", label: "Время не имеет значения", photographer: "both" },
    ],
  },
  {
    id: 4,
    question: "Насколько для вас важен личный контакт с фотографом?",
    options: [
      { value: "important", label: "Очень важен, хочу обсудить все детали лично", photographer: "maria" },
      { value: "online", label: "Можно ограничиться онлайн общением", photographer: "alexandra" },
      { value: "notImportant", label: "Не принципиально", photographer: "both" },
    ],
  },
  {
    id: 5,
    question: "Какой результат для вас предпочтительнее?",
    options: [
      { value: "natural", label: "Естественные снимки без сильной обработки", photographer: "maria" },
      { value: "creative", label: "Креативные изображения с использованием AI и других технологий", photographer: "alexandra" },
      { value: "different", label: "Готов попробовать разные стили", photographer: "both" },
    ],
  },
];

export const QuizDialog = ({ open, onOpenChange }: QuizDialogProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedValue, setSelectedValue] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedValue) {
      setAnswers({ ...answers, [currentQuestion]: selectedValue });
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedValue("");
      } else {
        setShowResult(true);
      }
    }
  };

  const calculateResult = () => {
    const photographerScores: Record<string, number> = { maria: 0, alexandra: 0 };
    
    Object.values(answers).forEach((answer) => {
      const question = questions.find(q => 
        q.options.some(opt => opt.value === answer)
      );
      const option = question?.options.find(opt => opt.value === answer);
      
      if (option?.photographer === "maria") {
        photographerScores.maria += 1;
      } else if (option?.photographer === "alexandra") {
        photographerScores.alexandra += 1;
      }
    });

    return photographerScores.maria > photographerScores.alexandra ? "maria" : "alexandra";
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedValue("");
    setShowResult(false);
  };

  const result = showResult ? calculateResult() : null;

  return (
    <Dialog open={open} onOpenChange={(open) => {
      onOpenChange(open);
      if (!open) {
        handleReset();
      }
    }}>
      <DialogContent className="sm:max-w-lg">
        {!showResult ? (
          <>
            <DialogHeader>
              <DialogTitle>Вопрос {currentQuestion + 1} из {questions.length}</DialogTitle>
              <DialogDescription>
                {questions[currentQuestion].question}
              </DialogDescription>
            </DialogHeader>
            <RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="cursor-pointer flex-1">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
            <div className="flex gap-3 mt-4">
              {currentQuestion > 0 && (
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                >
                  Назад
                </Button>
              )}
              <Button 
                className="flex-1" 
                onClick={handleNext}
                disabled={!selectedValue}
              >
                {currentQuestion < questions.length - 1 ? "Далее" : "Узнать результат"}
              </Button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Ваш результат</DialogTitle>
            </DialogHeader>
            <div className="text-center py-6">
              {result === "maria" ? (
                <div className="space-y-4">
                  <div className="text-6xl">📸</div>
                  <h3 className="text-2xl font-bold">Классическая фотография с Марией</h3>
                  <p className="text-gray-600">
                    Судя по вашим ответам, вам больше подойдёт традиционная съёмка с живым общением и естественными кадрами.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://t.me/+79139083148" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full">
                        <Icon name="Send" className="mr-2" size={16} />
                        Telegram
                      </Button>
                    </a>
                    <a href="https://wa.me/79231234567" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full">
                        <Icon name="MessageCircle" className="mr-2" size={16} />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-6xl">✨</div>
                  <h3 className="text-2xl font-bold">AI-фотография с Александрой</h3>
                  <p className="text-gray-600">
                    Судя по вашим ответам, вам больше подойдёт нейрофотография с креативными эффектами и быстрым результатом.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://t.me/aleksa25t" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full">
                        <Icon name="Send" className="mr-2" size={16} />
                        Telegram
                      </Button>
                    </a>
                    <a href="https://wa.me/79998887766" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full">
                        <Icon name="MessageCircle" className="mr-2" size={16} />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              )}
              <Button variant="outline" onClick={handleReset} className="mt-4">
                Пройти тест заново
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuizDialog;