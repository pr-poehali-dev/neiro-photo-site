import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import SubscriptionDialog from "@/components/SubscriptionDialog";
import QuizDialog from "@/components/QuizDialog";
import ContactDialog from "@/components/ContactDialog";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("home");
  const [subscriptionDialogOpen, setSubscriptionDialogOpen] = useState(false);
  const [dialogDismissedAt, setDialogDismissedAt] = useState<number | null>(
    null,
  );
  const [quizDialogOpen, setQuizDialogOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [contactPhotographer, setContactPhotographer] = useState<
    "alexandra" | "maria"
  >("alexandra");
  const [showPhotographerChoice, setShowPhotographerChoice] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedPhotographer, setSelectedPhotographer] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercentage >= 90 && !subscriptionDialogOpen) {
        const now = Date.now();
        if (!dialogDismissedAt || now - dialogDismissedAt >= 5 * 60 * 1000) {
          setSubscriptionDialogOpen(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [subscriptionDialogOpen, dialogDismissedAt]);

  const handleDialogClose = (open: boolean) => {
    setSubscriptionDialogOpen(open);
    if (!open) {
      setDialogDismissedAt(Date.now());
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    setShowPhotographerChoice(true);
  };

  const handlePhotographerSelect = (photographer: "alexandra" | "maria") => {
    setContactPhotographer(photographer);
    setShowPhotographerChoice(false);
    setContactDialogOpen(true);
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPhotographer) {
      toast({
        title: "Ошибка",
        description: "Выберите фотографа",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const bookingData = {
        name: formData.name,
        phone: formData.phone,
        email: "",
        photographer: selectedPhotographer,
        date: date ? date.toLocaleDateString("ru-RU") : "",
        time: selectedTime,
        comment: formData.comment,
      };

      const response = await fetch(
        "https://functions.poehali.dev/e1899f9b-a689-473a-9d57-eb5209f75583",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        },
      );

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время",
        });

        setFormData({ name: "", phone: "", comment: "" });
        setSelectedPhotographer("");
        setDate(undefined);
        setSelectedTime("");
      } else {
        toast({
          title: "Ошибка",
          description: result.error || "Не удалось отправить заявку",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке заявки",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const portfolioImages = [
    {
      url: "https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/d4bee983-4720-43ee-bcb8-8fad54d8cfc9.jpg",
      category: "wedding",
      photographer: "maria",
    },
    {
      url: "https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/ae83c122-3d9f-4040-85f8-cbdcff5516e7.jpg",
      category: "neuro",
      photographer: "alexandra",
    },
    {
      url: "https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/647c12fe-b2d4-4576-938b-8568acf1de25.jpg",
      category: "portrait",
      photographer: "maria",
    },
  ];

  const testimonials = [
    {
      name: "Елена Смирнова",
      text: "Александра создала невероятные нейрофото! Это настоящее искусство, которое передаёт глубину эмоций.",
      rating: 5,
      image:
        "https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/11bd7973-62f6-4eb6-a6f8-d388eb3afa8a.jpg",
    },
    {
      name: "Дмитрий и Ольга",
      text: "Мария сняла нашу свадьбу просто волшебно. Каждый кадр — это история, которую хочется пересматривать снова.",
      rating: 5,
      image:
        "https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/69bf3ec7-5125-44fe-accb-af20b5684723.jpg",
    },
    {
      name: "Анна Петрова",
      text: "Семейная фотосессия с Марией прошла очень комфортно. Дети вели себя естественно, а результат превзошёл ожидания!",
      rating: 5,
      image:
        "https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/70a84839-0333-4f0d-92d9-939ae755a963.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SubscriptionDialog
        open={subscriptionDialogOpen}
        onOpenChange={handleDialogClose}
      />
      <QuizDialog open={quizDialogOpen} onOpenChange={setQuizDialogOpen} />
      <ContactDialog
        open={contactDialogOpen}
        onOpenChange={setContactDialogOpen}
        photographer={contactPhotographer}
      />

      <Dialog
        open={showPhotographerChoice}
        onOpenChange={setShowPhotographerChoice}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">
              С кем хотите связаться?
            </DialogTitle>
            <DialogDescription className="text-center">
              Выберите фотографа
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <Button
              onClick={() => handlePhotographerSelect("alexandra")}
              className="h-auto p-6 flex-col items-start gap-2"
              variant="outline"
            >
              <div className="flex items-center gap-2">
                <Icon name="Sparkles" size={24} />
                <span className="text-xl font-bold">Александра</span>
              </div>
              <span className="text-sm text-muted-foreground">
                AI-фотография (онлайн)
              </span>
            </Button>
            <Button
              onClick={() => handlePhotographerSelect("maria")}
              className="h-auto p-6 flex-col items-start gap-2"
              variant="outline"
            >
              <div className="flex items-center gap-2">
                <Icon name="Camera" size={24} />
                <span className="text-xl font-bold">Мария</span>
              </div>
              <span className="text-sm text-muted-foreground">
                Классическая съемка (Новосибирск)
              </span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-3 py-3 flex justify-between items-center">
          <div>
            <h1 className="sm:text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold text-xs">
              Aleksandra & Maria
            </h1>
            <p className="sm:text-sm mt-1 px-0.5 text-xs">
              Профессиональная фотография
            </p>
          </div>
          <div className="hidden md:flex gap-6">
            {["home", "portfolio", "about", "services", "reviews"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium hover:text-primary transition-colors capitalize"
                >
                  {section === "home"
                    ? "Главная"
                    : section === "portfolio"
                      ? "Портфолио"
                      : section === "services"
                        ? "Прайс"
                        : "Отзывы"}
                </button>
              ),
            )}
          </div>
          <Button
            variant="default"
            size="sm"
            onClick={handleContactClick}
            className="text-xs sm:text-sm px-3 sm:px-4"
          >
            Связаться
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-3 sm:px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="sm:text-3xl md:text-5xl mb-4 sm:mb-6 leading-tight font-bold text-xl">
              Искусство фотосъемки: от классики до нейросетей
            </h2>
            <h3 className="sm:text-lg md:text-2xl mb-4 sm:mb-6 leading-tight font-bold text-xs">
              Выберите свой путь к совершенным снимкам: нейрофотография с
              AI-эффектами или классическая фотосессия
            </h3>
            <div className="flex gap-2 sm:gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="group text-sm sm:text-base"
              >
                Посмотреть работы
                <Icon
                  name="ArrowRight"
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={16}
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="text-sm sm:text-base"
              >
                Прайс
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-20 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
              <div className="h-64 sm:h-80 md:h-96 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/fe75699e-c452-4a3d-afb5-7477e525d402.JPG"
                  alt="Александра"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="sm:text-2xl font-bold mb-2 text-base">
                  Александра
                </h3>
                <p className="font-semibold mb-2 sm:mb-3 text-[#7f68ac] text-sm sm:text-base">
                  AI-фотограф (онлайн из любой точки)
                </p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Превращаю исходные портреты в уникальные арт-объекты с помощью
                  искусственного интеллекта.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in [animation-delay:150ms]">
              <div className="h-64 sm:h-80 md:h-96 bg-gradient-to-br from-secondary/20 to-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/7cd5fbec-41bf-456d-98de-1c14f91b5e42.jpg"
                  alt="Мария"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="sm:text-2xl font-bold mb-2 text-base">Мария</h3>
                <p className="text-secondary font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  Классический фотограф (г.Новосибирск)
                </p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Специализируюсь на Lifestyle стиле. Ловлю искренние эмоции и
                  важные моменты.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="py-12 sm:py-20 px-3 sm:px-4 bg-muted/30"
      >
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 text-2xl">
              Портфолио
            </h2>
            <p className="text-muted-foreground text-sm sm:text-lg">
              Наши работы
            </p>
          </div>

          <Tabs defaultValue="alexandra" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8 sm:mb-6">
              <TabsTrigger value="alexandra" className="text-xs sm:text-sm">
                Александра (AI-фото)
              </TabsTrigger>
              <TabsTrigger value="maria" className="text-xs sm:text-sm">
                Мария (Классика)
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="alexandra"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
            >
              {portfolioImages
                .filter((img) => img.photographer === "alexandra")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-lg aspect-square"
                  >
                    <img
                      src={img.url}
                      alt={`Работа ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
            </TabsContent>

            <TabsContent
              value="maria"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
            >
              {portfolioImages
                .filter((img) => img.photographer === "maria")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-lg aspect-square"
                  >
                    <img
                      src={img.url}
                      alt={`Работа ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-20 px-3 sm:px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent text-xl">
              Сравнение форматов съемки
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Выберите то, что вам ближе: быстрые и креативные AI-снимки или
              классическую съемку с живым общением
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Icon
                  name="Sparkles"
                  size={24}
                  className="text-primary sm:w-7 sm:h-7"
                />
                <h3 className="sm:text-2xl font-bold text-base">
                  AI-фотография
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2">
                  <Icon
                    name="Check"
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-sm sm:text-base">
                    Быстрый результат за 1-2 дня
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon
                    name="Check"
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-sm sm:text-base">
                    Уникальные, креативные AI-эффекты
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon
                    name="Check"
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-sm sm:text-base">Доступная цена</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon
                    name="X"
                    className="text-red-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-sm sm:text-base">
                    Требуется исходное фото хорошего качества
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon
                    name="X"
                    className="text-red-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-sm sm:text-base">
                    Сходство с оригиналом фото до 85-95%
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Icon
                  name="Camera"
                  size={24}
                  className="text-secondary sm:w-7 sm:h-7"
                />
                <h3 className="sm:text-2xl font-bold text-base">
                  Классическая съемка
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2">
                  <Icon
                    name="Check"
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-sm sm:text-base">
                    100% естественные фотографии
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon
                    name="Check"
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-sm sm:text-base">
                    Реалистичный результат без искажений
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon
                    name="Check"
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-sm sm:text-base">
                    Живая атмосфера и уникальность кадров
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon
                    name="X"
                    className="text-red-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-sm sm:text-base">
                    Только для жителей Новосибирска
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon
                    name="X"
                    className="text-red-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-sm sm:text-base">
                    Длительная обработка (5-7 дней)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-4 sm:pt-6 border-t max-w-4xl mx-auto mt-6 sm:mt-8">
            <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
              Не уверены? Пройдите короткий тест!
            </p>
            <Button
              onClick={() => setQuizDialogOpen(true)}
              className="text-sm sm:text-base"
            >
              Помочь выбрать
            </Button>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-12 sm:py-20 px-3 sm:px-6 bg-gradient-to-br from-purple-50 to-white"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent text-2xl">
              Наши цены
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg px-2">
              Выберите подходящий пакет для ваших потребностей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-white p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <Icon
                    name="Sparkles"
                    size={24}
                    className="text-primary sm:w-8 sm:h-8"
                  />
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl">
                    AI-фотография
                  </CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base">
                  Нейрофотография с Александрой
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 pt-4 sm:pt-6 p-4 sm:p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Пробный пакет (3 фото, 1 образ)</span>
                    <span className="font-bold text-sm">1 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Стандарт (10 фото, 2-3 образа)</span>
                    <span className="font-bold text-sm">2 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Премиум (20 фото, 5 образов)</span>
                    <span className="font-bold text-sm">3 500 ₽</span>
                  </div>
                </div>
                <div className="pt-4 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>Готовность 1 день</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Palette" size={16} className="text-primary" />
                    <span>Любые образы и стили</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="online" size={16} className="text-primary" />
                    <span>Работа онлайн</span>
                  </div>
                </div>
                <Button
                  className="w-full"
                  onClick={() => scrollToSection("booking")}
                >
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Camera" size={32} className="text-secondary" />
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl">
                    Классическая съёмка
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  Профессиональная фотосессия с Марией
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Мини (30 минут, 7 обработанных фото)</span>
                    <span className="font-bold text-sm">2 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Стандарт (1 час, 15 обработанных фото)</span>
                    <span className="font-bold text-sm">4 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Премиум (2 часа, 30 обработанных фото)</span>
                    <span className="font-bold text-sm">7 500 ₽</span>
                  </div>
                </div>
                <div className="pt-4 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={16} className="text-secondary" />
                    <span>Готовность 5-7 дней</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="MapPin" size={16} className="text-secondary" />
                    <span>Съёмка в Новосибирске</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Camera" size={16} className="text-secondary" />
                    <span>Все исходные фото в день съемки</span>
                  </div>
                </div>
                <Button
                  className="w-full"
                  variant="secondary"
                  onClick={() => scrollToSection("booking")}
                >
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="payment" className="py-10 px-6 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent text-2xl">
            Оплата
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Оплачивайте услуги удобным для вас способом
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Icon name="CreditCard" className="text-primary" />
                  Способы оплаты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-base">
                  <Icon name="Building" className="text-primary" />
                  <div>
                    <div className="font-semibold">Банковский перевод</div>
                    <div className="text-xs text-gray-600">По реквизитам</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-base">
                  <Icon name="Wallet" className="text-primary" />
                  <div>
                    <div className="font-semibold">Наличные</div>
                    <div className="text-xs text-gray-600">
                      При реальной фотосъемке
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Icon name="Shield" className="text-green-500" />
                  Гарантии
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon
                    name="Undo2"
                    className="text-green-500 mt-1"
                    size={20}
                  />
                  <div>
                    <div className="font-semibold mb-1">Возврат средств</div>
                    <div className="text-xs text-gray-600">
                      Возможность вернуть предоплату в течение 14 дней
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <Icon name="Info" size={16} className="inline mr-1" />
                    Для оплаты свяжитесь с фотографом удобным способом.
                    Реквизиты на оплату будут высланы после согласования деталей
                    съёмки.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-purple-50 to-white border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="text-center text-base">
                Условия оплаты классической фотосъёмки
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <p className="font-bold text-base">
                Предоплата{" "}
                <span className="font-bold text-lg text-primary">30%</span>
              </p>
              <p className="text-sm text-gray-600">
                При отмене съёмки менее чем за 24 часа предоплата не
                возвращается
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="md:text-5xl font-bold mb-4 text-2xl">
              Часто задаваемые вопросы
            </h2>
            <p className="text-muted-foreground text-lg">
              Ответы на популярные вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Icon name="Sparkles" className="text-primary" />
                  AI-фотография
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="ai-1">
                    <AccordionTrigger className="text-left">
                      Как работает AI-фотография?
                    </AccordionTrigger>
                    <AccordionContent>
                      Вы отправляете нам свои исходные фотографии, а мы с
                      помощью нейросетей создаем уникальные художественные
                      образы, сохраняя ваши черты лица.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="ai-2">
                    <AccordionTrigger className="text-left">
                      Какие фото нужны для AI-обработки?
                    </AccordionTrigger>
                    <AccordionContent>
                      Нужны качественные фото в хорошем освещении, где четко
                      видно лицо. Подойдут селфи или портреты, сделанные на
                      современный смартфон.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="ai-3">
                    <AccordionTrigger className="text-left">
                      Сколько времени занимает обработка?
                    </AccordionTrigger>
                    <AccordionContent>
                      Обычно 1-2 дня. В некоторых случаях можем сделать за
                      несколько часов.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="ai-4">
                    <AccordionTrigger className="text-left">
                      Можно ли выбрать стиль обработки?
                    </AccordionTrigger>
                    <AccordionContent>
                      Да! Вы можете выбрать любой стиль: от классического
                      портрета до фэнтези или аниме. Мы обсудим это перед
                      началом работы.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Icon name="Camera" className="text-secondary" />
                  Классическая фотосъемка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="real-1">
                    <AccordionTrigger className="text-left">
                      Где проходит фотосъемка?
                    </AccordionTrigger>
                    <AccordionContent>
                      Съемка проходит в Новосибирске. Мы можем выбрать локацию
                      вместе: студия, парк, городские улицы или ваше место.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="real-2">
                    <AccordionTrigger className="text-left">
                      Сколько времени длится съемка?
                    </AccordionTrigger>
                    <AccordionContent>
                      В зависимости от пакета: от 1 до 4 часов. Этого достаточно
                      для создания качественных фотографий в разных образах и
                      локациях.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="real-3">
                    <AccordionTrigger className="text-left">
                      Когда я получу готовые фото?
                    </AccordionTrigger>
                    <AccordionContent>
                      Все исходные фото вы получаете в день съемки. Обработанные
                      фотографии будут готовы через 5-7 дней.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="real-4">
                    <AccordionTrigger className="text-left">
                      Нужно ли готовиться к съемке?
                    </AccordionTrigger>
                    <AccordionContent>
                      Подготовьте несколько образов одежды, продумайте макияж.
                      Мы обсудим детали заранее и дадим рекомендации по
                      подготовке.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="reviews" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="md:text-5xl font-bold mb-4 text-2xl">Отзывы</h2>
            <p className="text-muted-foreground text-lg">
              Что говорят наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="text-yellow-500 fill-yellow-500"
                        size={16}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section data-pp-id="src/pages/Index.tsx:1040:6" data-pp-name="section" data-component-path="src/pages/Index.tsx" data-component-line="1040" data-component-file="Index.tsx" data-component-name="section" data-component-content="%7B%22className%22%3A%22py-20%20px-6%20bg-gradient-to-br%20from-purple-50%20to-white%22%7D" id="booking" class="py-20 px-6 bg-gradient-to-br from-purple-50 to-white"><div data-pp-id="src/pages/Index.tsx:1044:8" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="1044" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22container%20mx-auto%20max-w-4xl%22%7D" class="container mx-auto max-w-4xl"><h2 data-pp-id="src/pages/Index.tsx:1045:10" data-pp-name="h2" data-component-path="src/pages/Index.tsx" data-component-line="1045" data-component-file="Index.tsx" data-component-name="h2" data-component-content="%7B%22text%22%3A%22%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D1%83%22%2C%22className%22%3A%22md%3Atext-5xl%20font-bold%20text-center%20mb-4%20bg-gradient-to-r%20from-purple-600%20to-black%20bg-clip-text%20text-transparent%20text-2xl%22%7D" class="md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent text-2xl">Записаться на съёмку</h2><p data-pp-id="src/pages/Index.tsx:1048:10" data-pp-name="p" data-component-path="src/pages/Index.tsx" data-component-line="1048" data-component-file="Index.tsx" data-component-name="p" data-component-content="%7B%22text%22%3A%22%D0%97%D0%B0%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%20%D1%84%D0%BE%D1%80%D0%BC%D1%83%2C%20%D0%B8%20%D0%BC%D1%8B%20%D1%81%D0%B2%D1%8F%D0%B6%D0%B5%D0%BC%D1%81%D1%8F%20%D1%81%20%D0%B2%D0%B0%D0%BC%D0%B8%20%D0%B2%20%D0%B1%D0%BB%D0%B8%D0%B6%D0%B0%D0%B9%D1%88%D0%B5%D0%B5%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%22%2C%22className%22%3A%22text-center%20text-gray-600%20mb-12%22%7D" class="text-center text-gray-600 mb-12">Заполните форму, и мы свяжемся с вами в ближайшее время</p><div data-pp-id="src/pages/Index.tsx:1052:10" data-pp-name="Card" data-component-path="src/pages/Index.tsx" data-component-line="1052" data-component-file="Index.tsx" data-component-name="Card" data-component-content="%7B%22className%22%3A%22border-2%20border-purple-200%22%7D" class="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-purple-200"><div data-pp-id="src/pages/Index.tsx:1053:12" data-pp-name="CardContent" data-component-path="src/pages/Index.tsx" data-component-line="1053" data-component-file="Index.tsx" data-component-name="CardContent" data-component-content="%7B%22className%22%3A%22p-6%22%7D" class="p-6"><form data-pp-id="src/pages/Index.tsx:1054:14" data-pp-name="form" data-component-path="src/pages/Index.tsx" data-component-line="1054" data-component-file="Index.tsx" data-component-name="form" data-component-content="%7B%22className%22%3A%22space-y-4%22%7D" class="space-y-4"><div data-pp-id="src/pages/Index.tsx:1055:16" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="1055" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22space-y-2%22%7D" class="space-y-2"><label data-pp-id="src/pages/Index.tsx:1056:18" data-pp-name="label" data-component-path="src/pages/Index.tsx" data-component-line="1056" data-component-file="Index.tsx" data-component-name="label" data-component-content="%7B%22text%22%3A%22%D0%92%D0%B0%D1%88%D0%B5%20%D0%B8%D0%BC%D1%8F%22%2C%22className%22%3A%22text-sm%20font-semibold%22%7D" class="text-sm font-semibold">Ваше имя</label><input data-pp-id="src/pages/Index.tsx:1057:18" data-pp-name="Input" data-component-path="src/pages/Index.tsx" data-component-line="1057" data-component-file="Index.tsx" data-component-name="Input" data-component-content="%7B%22placeholder%22%3A%22%D0%92%D0%B2%D0%B5%D0%B4%D0%B8%D1%82%D0%B5%20%D0%B2%D0%B0%D1%88%D0%B5%20%D0%B8%D0%BC%D1%8F%22%7D" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="Введите ваше имя" required="" value=""></div><div data-pp-id="src/pages/Index.tsx:1067:16" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="1067" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22space-y-2%22%7D" class="space-y-2"><label data-pp-id="src/pages/Index.tsx:1068:18" data-pp-name="label" data-component-path="src/pages/Index.tsx" data-component-line="1068" data-component-file="Index.tsx" data-component-name="label" data-component-content="%7B%22text%22%3A%22%D0%A2%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%22%2C%22className%22%3A%22text-sm%20font-semibold%22%7D" class="text-sm font-semibold">Телефон</label><input data-pp-id="src/pages/Index.tsx:1069:18" data-pp-name="Input" data-component-path="src/pages/Index.tsx" data-component-line="1069" data-component-file="Index.tsx" data-component-name="Input" data-component-content="%7B%22placeholder%22%3A%22%2B7%20(___)%20___-__-__%22%7D" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="+7 (___) ___-__-__" required="" value=""></div><div data-pp-id="src/pages/Index.tsx:1079:16" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="1079" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22space-y-2%22%7D" class="space-y-2"><label data-pp-id="src/pages/Index.tsx:1080:18" data-pp-name="label" data-component-path="src/pages/Index.tsx" data-component-line="1080" data-component-file="Index.tsx" data-component-name="label" data-component-content="%7B%22text%22%3A%22%D0%92%D1%8B%D0%B1%D0%B5%D1%80%D0%B8%D1%82%D0%B5%20%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B0%22%2C%22className%22%3A%22text-sm%20font-semibold%22%7D" class="text-sm font-semibold">Выберите фотографа</label><div data-pp-id="src/pages/Index.tsx:1083:18" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="1083" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22grid%20grid-cols-2%20gap-4%22%7D" class="grid grid-cols-2 gap-4"><button data-pp-id="src/pages/Index.tsx:1084:20" data-pp-name="Button" data-component-path="src/pages/Index.tsx" data-component-line="1084" data-component-file="Index.tsx" data-component-name="Button" data-component-content="%7B%22className%22%3A%22h-auto%20p-4%20flex-col%20items-start%20gap-2%22%7D" class="inline-flex justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-auto p-4 flex-col items-start gap-2" type="button"><div data-pp-id="src/pages/Index.tsx:1097:22" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="1097" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D" class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles" data-pp-id="src/pages/Index.tsx:1098:24" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="1098" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%7D"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg><span data-pp-id="src/pages/Index.tsx:1099:24" data-pp-name="span" data-component-path="src/pages/Index.tsx" data-component-line="1099" data-component-file="Index.tsx" data-component-name="span" data-component-content="%7B%22text%22%3A%22%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0%22%2C%22className%22%3A%22font-bold%20text-%5B11px%5D%22%7D" class="font-bold text-[11px]">Александра</span></div><span data-pp-id="src/pages/Index.tsx:1103:22" data-pp-name="span" data-component-path="src/pages/Index.tsx" data-component-line="1103" data-component-file="Index.tsx" data-component-name="span" data-component-content="%7B%22text%22%3A%22%D0%9D%D0%B5%D0%B9%D1%80%D0%BE%D1%84%D0%BE%D1%82%D0%BE%22%2C%22className%22%3A%22text-%5B9px%5D%22%7D" class="text-[9px]">Нейрофото</span></button><button data-pp-id="src/pages/Index.tsx:1105:20" data-pp-name="Button" data-component-path="src/pages/Index.tsx" data-component-line="1105" data-component-file="Index.tsx" data-component-name="Button" data-component-content="%7B%22className%22%3A%22h-auto%20p-4%20flex-col%20items-start%20gap-2%22%7D" class="inline-flex justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-auto p-4 flex-col items-start gap-2" type="button"><div data-pp-id="src/pages/Index.tsx:1118:22" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="1118" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D" class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera" data-pp-id="src/pages/Index.tsx:1119:24" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="1119" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%7D"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg><span data-pp-id="src/pages/Index.tsx:1120:24" data-pp-name="span" data-component-path="src/pages/Index.tsx" data-component-line="1120" data-component-file="Index.tsx" data-component-name="span" data-component-content="%7B%22text%22%3A%22%D0%9C%D0%B0%D1%80%D0%B8%D1%8F%22%2C%22className%22%3A%22font-bold%20text-%5B11px%5D%22%7D" class="font-bold text-[11px]">Мария</span></div><span data-pp-id="src/pages/Index.tsx:1122:22" data-pp-name="span" data-component-path="src/pages/Index.tsx" data-component-line="1122" data-component-file="Index.tsx" data-component-name="span" data-component-content="%7B%22text%22%3A%22%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0%22%2C%22className%22%3A%22text-%5B9px%5D%22%7D" class="text-[9px]">Классика</span></button></div></div><div data-pp-id="src/pages/Index.tsx:1198:16" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="1198" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22space-y-2%22%7D" class="space-y-2"><label data-pp-id="src/pages/Index.tsx:1199:18" data-pp-name="label" data-component-path="src/pages/Index.tsx" data-component-line="1199" data-component-file="Index.tsx" data-component-name="label" data-component-content="%7B%22text%22%3A%22%D0%9A%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%B9%22%2C%22className%22%3A%22text-sm%20font-semibold%22%7D" class="text-sm font-semibold">Комментарий</label><textarea data-pp-id="src/pages/Index.tsx:1200:18" data-pp-name="Textarea" data-component-path="src/pages/Index.tsx" data-component-line="1200" data-component-file="Index.tsx" data-component-name="Textarea" data-component-content="%7B%22placeholder%22%3A%22%D0%A0%D0%B0%D1%81%D1%81%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%20%D0%BE%20%D0%B2%D0%B0%D1%88%D0%B8%D1%85%20%D0%BF%D0%BE%D0%B6%D0%B5%D0%BB%D0%B0%D0%BD%D0%B8%D1%8F%D1%85%20%D0%BA%20%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B5...%22%7D" class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Расскажите о ваших пожеланиях к съёмке..." rows="4"></textarea></div><button data-pp-id="src/pages/Index.tsx:1210:16" data-pp-name="Button" data-component-path="src/pages/Index.tsx" data-component-line="1210" data-component-file="Index.tsx" data-component-name="Button" data-component-content="%7B%22className%22%3A%22w-full%22%7D" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full" type="submit">Отправить заявку</button></form></div></div></div></section>
      <footer className="py-8 px-4 bg-muted/50 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <p className="font-semibold text-xs">
              Два взгляда на фотографию — выберите свой стиль
            </p>
            <Link
              to="/privacy"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <div className="text-xs text-muted-foreground pt-4 border-t">
              © 2025 Aleksandra & Maria Photography
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;