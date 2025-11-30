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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedPhotographer, setExpandedPhotographer] = useState<
    string | null
  >(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [giftDialogOpen, setGiftDialogOpen] = useState(false);

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

    if (!selectedPackage) {
      toast({
        title: "Ошибка",
        description: "Выберите тариф",
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
        package: selectedPackage,
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
        setSelectedPackage("");
        setDate(undefined);
        setSelectedTime("");
      } else {
        if (result.fallback) {
          toast({
            title: "Заявка принята",
            description: result.fallback,
          });
          setFormData({ name: "", phone: "", comment: "" });
          setSelectedPhotographer("");
          setSelectedPackage("");
          setDate(undefined);
          setSelectedTime("");
        } else {
          toast({
            title: "Ошибка",
            description: result.error || "Не удалось отправить заявку",
            variant: "destructive",
          });
        }
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
      image:
        "https://cdn.poehali.dev/files/ff37d6c9-caea-4559-9577-be6ef2d07b0f.jpg",
    },
    {
      image:
        "https://cdn.poehali.dev/files/7690bb43-98b3-4074-bea2-f338ceaa833e.jpg",
    },
    {
      image:
        "https://cdn.poehali.dev/files/fc2f2b36-2ba3-49bd-9b87-2edbeaeaaab4.jpg",
    },
    {
      image:
        "https://cdn.poehali.dev/files/f532e6b0-4230-4f9a-a4a5-5a78a878a67a.jpg",
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
            <DialogTitle className="text-xl text-left">
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
                <span className="text-lg font-bold">Александра</span>
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
                <span className="text-lg font-bold">Мария</span>
              </div>
              <span className="text-sm text-muted-foreground">
                Классическая съемка (Новосибирск)
              </span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <div id="mobile-menu-sheet" className="hidden">
          <SheetTrigger asChild>
            <button>Trigger</button>
          </SheetTrigger>
        </div>
        <SheetContent side="left" className="w-[280px]">
          <div className="flex flex-col gap-6 mt-8">
            {["home", "portfolio", "about", "services", "reviews", "faq"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setMobileMenuOpen(false);
                  }}
                  className="text-lg font-medium hover:text-primary transition-colors text-left"
                >
                  {section === "home"
                    ? "Главная"
                    : section === "portfolio"
                      ? "Портфолио"
                      : section === "about"
                        ? "О нас"
                        : section === "services"
                          ? "Прайс"
                          : section === "reviews"
                            ? "Отзывы"
                            : "FAQ"}
                </button>
              ),
            )}
          </div>
        </SheetContent>
      </Sheet>

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
            {["home", "portfolio", "about", "services", "reviews", "faq"].map(
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
                      : section === "about"
                        ? "О нас"
                        : section === "services"
                          ? "Прайс"
                          : section === "reviews"
                            ? "Отзывы"
                            : "FAQ"}
                </button>
              ),
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => {
                const sheet = document.getElementById("mobile-menu-sheet");
                if (sheet) {
                  const button = sheet.querySelector("button");
                  if (button instanceof HTMLElement) button.click();
                }
              }}
            >
              <Icon name="Menu" size={24} />
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleContactClick}
              className="text-xs sm:text-sm px-3 sm:px-4"
            >
              Связаться
            </Button>
          </div>
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

          <div
            className="grid 
grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-20 max-w-5xl mx-auto
 md:grid-cols-2"
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
              <div className="h-32 sm:h-40 md:h-96 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
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
                <div className="space-y-2">
                  <button
                    onClick={() =>
                      setExpandedPhotographer(
                        expandedPhotographer === "alexandra"
                          ? null
                          : "alexandra",
                      )
                    }
                    className="text-muted-foreground text-sm sm:text-base text-left w-full flex items-center gap-2"
                  >
                    <Icon
                      name={
                        expandedPhotographer === "alexandra"
                          ? "ChevronUp"
                          : "ChevronDown"
                      }
                      size={16}
                      className="flex-shrink-0"
                    />
                    <span>Подробнее </span>
                  </button>
                  {expandedPhotographer === "alexandra" && (
                    <div className="text-muted-foreground text-xs sm:text-base pt-2 border-t animate-fade-in">
                      <p className="mb-2">
                        Я использую передовые AI-технологии для создания
                        уникальных фотографий, которые выглядят как настоящие
                        произведения искусства.
                      </p>
                      <p>
                        Вы присылаете мне свои фото, описываете желаемый образ,
                        и я создаю для вас потрясающие снимки в любом стиле: от
                        классического портрета до фэнтезийных образов.
                      </p>
                    </div>
                  )}
                </div>
                <Button
                  className="w-full mt-4"
                  onClick={() => {
                    setContactPhotographer("alexandra");
                    scrollToSection("booking");
                  }}
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in [animation-delay:150ms]">
              <div className="h-32 sm:h-40 md:h-96 bg-gradient-to-br from-secondary/20 to-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/7cd5fbec-41bf-456d-98de-1c14f91b5e42.jpg"
                  alt="Мария"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="sm:text-2xl font-bold mb-2 text-base">Мария</h3>
                <p className="text-secondary font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  Классический фотограф (г. Новосибирск)
                </p>
                <div className="space-y-2">
                  <button
                    onClick={() =>
                      setExpandedPhotographer(
                        expandedPhotographer === "maria" ? null : "maria",
                      )
                    }
                    className="text-muted-foreground text-sm sm:text-base text-left w-full flex items-center gap-2"
                  >
                    <Icon
                      name={
                        expandedPhotographer === "maria"
                          ? "ChevronUp"
                          : "ChevronDown"
                      }
                      size={16}
                      className="flex-shrink-0"
                    />
                    <span>Подробнее</span>
                  </button>
                  {expandedPhotographer === "maria" && (
                    <div className="text-muted-foreground text-xs sm:text-base pt-2 border-t animate-fade-in">
                      <p className="mb-2">
                        Моя специализация — это искренние, живые фотографии,
                        передающие истинные эмоции и атмосферу каждого
                        мгновения.
                      </p>
                      <p>
                        Работаю в Новосибирске. Провожу семейные и портретные
                        фотосессии. Создаю комфортную атмосферу, чтобы вы могли
                        расслабиться и почувствовать себя естественно перед
                        камерой.
                      </p>
                    </div>
                  )}
                </div>
                <Button
                  className="w-full mt-4"
                  variant="secondary"
                  onClick={() => {
                    setContactPhotographer("maria");
                    scrollToSection("booking");
                  }}
                >
                  Записаться
                </Button>
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

            <TabsContent value="alexandra">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
              </div>
              <div className="mt-8 text-center">
                <a
                  href="https://t.me/online_photosessiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline text-xs font-medium"
                >
                  <Icon name="Send" size={14} />
                  Больше работ в Telegram канале Александры
                  <Icon name="ExternalLink" size={14} />
                </a>
              </div>
            </TabsContent>

            <TabsContent value="maria">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
              </div>
              <div className="mt-8 text-center">
                <a
                  href="https://vk.com/club_photograph_novosibirsk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary hover:underline text-xs font-medium"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.48 14.94h-1.39c-.58 0-.76-.47-1.79-1.5-.91-.87-1.31-1-1.53-1-.32 0-.41.09-.41.52v1.37c0 .37-.11.58-1.07.58-1.59 0-3.35-.96-4.59-2.75-1.87-2.59-2.38-4.54-2.38-4.93 0-.22.09-.43.52-.43h1.39c.39 0 .54.18.69.59.76 2.19 2.03 4.11 2.56 4.11.2 0 .29-.09.29-.59v-2.28c-.07-1.13-.65-1.22-.65-1.62 0-.18.15-.36.39-.36h2.18c.33 0 .45.17.45.55v3.08c0 .33.15.45.24.45.2 0 .36-.12.72-.48 1.1-1.24 1.89-3.15 1.89-3.15.11-.22.28-.43.7-.43h1.39c.47 0 .57.24.47.55-.17.78-1.85 3.28-1.85 3.28-.17.27-.23.39 0 .7.17.23.72.71 1.09 1.14.67.77 1.18 1.41 1.32 1.86.13.44-.1.67-.54.67z" />
                  </svg>
                  Больше работ в VK группе Марии
                  <Icon name="ExternalLink" size={14} />
                </a>
              </div>
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
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Пробная (3 фото, 1 образ)</span>
                    <span className="font-bold text-sm whitespace-nowrap">
                      1 000 ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Стандарт (10 фото, 2-3 образа)</span>
                    <span className="font-bold text-sm whitespace-nowrap">
                      2 500 ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Премиум (20 фото, 5 образов)</span>
                    <span className="font-bold text-sm whitespace-nowrap">
                      3 500 ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Групповая (1 фото, 2 и более человек)</span>
                    <span className="font-bold text-sm whitespace-nowrap">
                      от 500 ₽
                    </span>
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
                    <Icon name="Monitor" size={16} className="text-primary" />
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
                    Классическая съемка
                  </CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base">
                  Профессиональная фотосессия с Марией
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center gap-2">
                    <span>Мини (30 минут, 7 фото в ретуши)</span>
                    <span className="font-bold text-sm whitespace-nowrap">
                      2 500 ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span>Стандарт (1 час, 15 фото в ретуши)</span>
                    <span className="font-bold text-sm whitespace-nowrap">
                      4 000 ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span>Премиум (2 часа, 30 фото в ретуши)</span>
                    <span className="font-bold text-sm whitespace-nowrap">
                      7 500 ₽
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center gap-2">
                      <span>Короткое видео (до 30сек)</span>
                      <span className="font-bold text-sm whitespace-nowrap">
                        500 ₽
                      </span>
                    </div>
                    <p className="font-bold text-xs text-purple-800 flex items-center gap-2">
                      Студия оплачивается отдельно
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={16} className="text-secondary" />
                    <span>Готовность 5-7 дней</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="MapPin" size={16} className="text-secondary" />
                    <span>Съемка в Новосибирске</span>
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
          <p className="text-center text-gray-600 mb-8 text-base">
            Удобные способы оплаты услуг
          </p>

          <Card className="border-2 border-purple-200 mb-6">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="CreditCard" className="text-primary" />
                    <h3 className="font-semibold text-base">Способы оплаты</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon
                        name="Building"
                        size={16}
                        className="text-primary"
                      />
                      <span>Банковский перевод</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Wallet" size={16} className="text-primary" />
                      <span>Наличные (при классической съемке)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Shield" className="text-green-500" />
                    <h3 className="font-semibold text-base">Условия</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold">Предоплата 30%</span> для
                      классической съемки
                    </p>
                    <p className="text-xs text-gray-600">
                      При отмене менее чем за 24 часа предоплата не возвращается
                    </p>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <Icon name="Info" size={16} className="inline mr-1" />
                  Реквизиты для оплаты будут высланы после согласования деталей
                  съёмки
                </p>
              </div>
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
                      современный смартфон. Желательно показать разные эмоции:
                      улыбку, удивление, задумчивость или радость.
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
                      В зависимости от пакета: от 1 до 2 часов. Этого достаточно
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

          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4 min-w-max md:min-w-0 md:grid md:grid-cols-4">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="flex-none w-[280px] md:w-auto group cursor-pointer"
                  onClick={(e) => {
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                      const overlay = document.createElement("div");
                      overlay.className =
                        "fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-zoom-out";
                      overlay.onclick = () => overlay.remove();
                      const enlargedImg = document.createElement("img");
                      enlargedImg.src = img.src;
                      enlargedImg.className =
                        "max-w-full max-h-full object-contain";
                      overlay.appendChild(enlargedImg);
                      document.body.appendChild(overlay);
                    }
                  }}
                >
                  <Card className="hover:shadow-lg transition-all h-full">
                    <CardContent className="p-4">
                      <img
                        src={testimonial.image}
                        alt={`Отзыв ${idx + 1}`}
                        className="w-full h-[400px] object-contain rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="booking"
        className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent text-2xl">
            Записаться на съёмку
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Заполните форму, и мы свяжемся с вами в ближайшее время
          </p>

          <Card className="border-2 border-purple-200">
            <CardContent className="p-6">
              <form onSubmit={handleSubmitBooking} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Ваше имя</label>
                  <Input
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Телефон</label>
                  <Input
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">
                    Выберите фотографа
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      type="button"
                      variant={
                        selectedPhotographer === "alexandra"
                          ? "default"
                          : "outline"
                      }
                      className="h-auto p-4 flex-col items-start gap-2"
                      onClick={() => {
                        setSelectedPhotographer("alexandra");
                        setSelectedPackage("");
                      }}
                    >
                      <div className="flex items-center gap-1.5">
                        <Icon name="Sparkles" size={14} />
                        <span className="font-bold text-[11px] leading-tight">
                          Александра
                        </span>
                      </div>
                      <span className="text-[9px] leading-tight">
                        Нейрофото
                      </span>
                    </Button>
                    <Button
                      type="button"
                      variant={
                        selectedPhotographer === "maria" ? "default" : "outline"
                      }
                      className="h-auto p-4 flex-col items-start gap-2"
                      onClick={() => {
                        setSelectedPhotographer("maria");
                        setSelectedPackage("");
                      }}
                    >
                      <div className="flex items-center gap-1.5">
                        <Icon name="Camera" size={14} />
                        <span className="font-bold text-[11px] leading-tight">
                          Мария
                        </span>
                      </div>
                      <span className="text-[9px] leading-tight">Классика</span>
                    </Button>
                  </div>
                </div>

                {selectedPhotographer && (
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">
                      Выберите тариф
                    </label>
                    {selectedPhotographer === "alexandra" && (
                      <div className="space-y-2">
                        <Button
                          type="button"
                          variant={
                            selectedPackage === "trial" ? "default" : "outline"
                          }
                          className="w-full justify-between h-auto p-2"
                          onClick={() => setSelectedPackage("trial")}
                        >
                          <span className="text-left text-xs sm:text-sm leading-tight line-clamp-2">
                            Пробная (3 фото, 1 образ)
                          </span>
                          <span className="font-bold text-xs sm:text-sm whitespace-nowrap leading-tight">
                            1 000 ₽
                          </span>
                        </Button>
                        <Button
                          type="button"
                          variant={
                            selectedPackage === "standard"
                              ? "default"
                              : "outline"
                          }
                          className="w-full justify-between h-auto p-2"
                          onClick={() => setSelectedPackage("standard")}
                        >
                          <span className="text-left text-xs sm:text-sm leading-tight line-clamp-2">
                            Стандарт (10 фото, 2-3 образа)
                          </span>
                          <span className="font-bold text-xs sm:text-sm whitespace-nowrap leading-tight">
                            2 500 ₽
                          </span>
                        </Button>
                        <Button
                          type="button"
                          variant={
                            selectedPackage === "premium"
                              ? "default"
                              : "outline"
                          }
                          className="w-full justify-between h-auto p-2"
                          onClick={() => setSelectedPackage("premium")}
                        >
                          <span className="text-left text-xs sm:text-sm leading-tight line-clamp-2">
                            Премиум (20 фото, 5 образов)
                          </span>
                          <span className="font-bold text-xs sm:text-sm whitespace-nowrap leading-tight">
                            3 500 ₽
                          </span>
                        </Button>
                        <Button
                          type="button"
                          variant={
                            selectedPackage === "gruppovaya"
                              ? "default"
                              : "outline"
                          }
                          className="w-full justify-between h-auto p-2"
                          onClick={() => setSelectedPackage("gruppovaya")}
                        >
                          <span className="text-left text-xs sm:text-sm leading-tight line-clamp-2">
                            Групповая (2 и более человек)
                          </span>
                          <span className="font-bold text-xs sm:text-sm whitespace-nowrap leading-tight">
                            от 500 ₽
                          </span>
                        </Button>
                      </div>
                    )}
                    {selectedPhotographer === "maria" && (
                      <div className="space-y-2">
                        <Button
                          type="button"
                          variant={
                            selectedPackage === "mini" ? "default" : "outline"
                          }
                          className="w-full justify-between h-auto p-2"
                          onClick={() => setSelectedPackage("mini")}
                        >
                          <span className="text-left text-xs sm:text-sm leading-tight line-clamp-2">
                            Мини (30 минут, 7 фото в ретуши)
                          </span>
                          <span className="font-bold text-xs sm:text-sm whitespace-nowrap leading-tight">
                            2 500 ₽
                          </span>
                        </Button>
                        <Button
                          type="button"
                          variant={
                            selectedPackage === "standard"
                              ? "default"
                              : "outline"
                          }
                          className="w-full justify-between h-auto p-2"
                          onClick={() => setSelectedPackage("standard")}
                        >
                          <span className="text-left text-xs sm:text-sm leading-tight line-clamp-2">
                            Стандарт (1 час, 15 фото в ретуши)
                          </span>
                          <span className="font-bold text-xs sm:text-sm whitespace-nowrap leading-tight">
                            4 000 ₽
                          </span>
                        </Button>
                        <Button
                          type="button"
                          variant={
                            selectedPackage === "premium"
                              ? "default"
                              : "outline"
                          }
                          className="w-full justify-between h-auto p-2"
                          onClick={() => setSelectedPackage("premium")}
                        >
                          <span className="text-left text-xs sm:text-sm leading-tight line-clamp-2">
                            Премиум (2 часа, 30 фото в ретуши)
                          </span>
                          <span className="font-bold text-xs sm:text-sm whitespace-nowrap leading-tight">
                            7 500 ₽
                          </span>
                        </Button>
                        <Button
                          type="button"
                          variant={
                            selectedPackage === "korotkoe video"
                              ? "default"
                              : "outline"
                          }
                          className="w-full justify-between h-auto p-2"
                          onClick={() => setSelectedPackage("korotkoe video")}
                        >
                          <span className="text-left text-xs sm:text-sm leading-tight line-clamp-2">
                            Короткое видео (до 30сек)
                          </span>
                          <span className="font-bold text-xs sm:text-sm whitespace-nowrap leading-tight">
                            500 ₽
                          </span>
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {selectedPhotographer === "maria" && (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">
                        Дата съемки
                      </label>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Время</label>
                      <Select
                        value={selectedTime}
                        onValueChange={setSelectedTime}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="10:30">10:30</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="11:30">11:30</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="12:30">12:30</SelectItem>
                          <SelectItem value="13:00">13:00</SelectItem>
                          <SelectItem value="13:30">13:30</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="14:30">14:30</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="15:30">15:30</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="16:30">16:30</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                          <SelectItem value="17:30">17:30</SelectItem>
                          <SelectItem value="18:00">18:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Комментарий</label>
                  <Textarea
                    placeholder="Укажите способ связи (ссылку) и расскажите о ваших пожеланиях..."
                    rows={4}
                    value={formData.comment}
                    onChange={(e) =>
                      setFormData({ ...formData, comment: e.target.value })
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <button
        onClick={() => setGiftDialogOpen(true)}
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40 animate-bounce"
        aria-label="Получить подарок"
      >
        <Icon name="Gift" size={28} />
      </button>

      <Dialog open={giftDialogOpen} onOpenChange={setGiftDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-center">
              Дарим 500₽ ! 🎁
            </DialogTitle>
            <DialogDescription className="text-center">
              Подпишитесь на наши соцсети и получите скидку 500₽ на любую услугу
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <a
              href="https://vk.com/club_photograph_novosibirsk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <svg
                className="text-blue-600"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.48 14.94h-1.39c-.58 0-.76-.47-1.79-1.5-.91-.87-1.31-1-1.53-1-.32 0-.41.09-.41.52v1.37c0 .37-.11.58-1.07.58-1.59 0-3.35-.96-4.59-2.75-1.87-2.59-2.38-4.54-2.38-4.93 0-.22.09-.43.52-.43h1.39c.39 0 .54.18.69.59.76 2.19 2.03 4.11 2.56 4.11.2 0 .29-.09.29-.59v-2.28c-.07-1.13-.65-1.22-.65-1.62 0-.18.15-.36.39-.36h2.18c.33 0 .45.17.45.55v3.08c0 .33.15.45.24.45.2 0 .36-.12.72-.48 1.1-1.24 1.89-3.15 1.89-3.15.11-.22.28-.43.7-.43h1.39c.47 0 .57.24.47.55-.17.78-1.85 3.28-1.85 3.28-.17.27-.23.39 0 .7.17.23.72.71 1.09 1.14.67.77 1.18 1.41 1.32 1.86.13.44-.1.67-.54.67z" />
              </svg>
              <div className="flex-1">
                <div className="font-semibold">Группа ВКонтакте Марии</div>
                <div className="text-sm text-gray-600">
                  Подписаться на группу
                </div>
              </div>
              <Icon name="ExternalLink" size={16} />
            </a>

            <a
              href="https://t.me/online_photosessiya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <Icon name="Send" className="text-blue-500" size={24} />
              <div className="flex-1">
                <div className="font-semibold">Телеграм канал Александры</div>
                <div className="text-sm text-gray-600">
                  Подписаться на канал
                </div>
              </div>
              <Icon name="ExternalLink" size={16} />
            </a>
          </div>
          <p className="text-xs text-center text-gray-500 mt-4">
            После подписки напишите фотографу и получите скидку
          </p>
        </DialogContent>
      </Dialog>

      <footer className="py-8 px-4 bg-muted/50 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-6">
              <a
                href="https://t.me/your_alexandra_channel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Icon name="Send" size={20} />
                <span>Telegram канал Александры</span>
              </a>
              <a
                href="https://vk.com/your_maria_group"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Icon name="Share2" size={20} />
                <span>VK группа Марии</span>
              </a>
            </div>
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
