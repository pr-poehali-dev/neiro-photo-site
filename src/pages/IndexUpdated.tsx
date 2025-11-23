import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import SubscriptionDialog from "@/components/SubscriptionDialog";
import QuizDialog from "@/components/QuizDialog";
import ContactDialog from "@/components/ContactDialog";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [subscriptionDialogOpen, setSubscriptionDialogOpen] = useState(false);
  const [quizDialogOpen, setQuizDialogOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [contactPhotographer, setContactPhotographer] = useState<"alexandra" | "maria">("alexandra");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedPhotographer, setSelectedPhotographer] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage >= 90 && !subscriptionDialogOpen) {
        setSubscriptionDialogOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [subscriptionDialogOpen]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    setContactPhotographer("alexandra");
    setContactDialogOpen(true);
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

  const services = [
    {
      photographer: "alexandra",
      name: "AI-фотография",
      description: "с Александрой",
      price:
        "2 500 ₽ (Базовый пакет, 10 фото), 5 000 ₽ (Стандарт, 25 фото), 8 000 ₽ (Премиум, 50 фото)",
      icon: "Sparkles",
    },
    {
      photographer: "maria",
      name: "Классическая съёмка",
      description: "с Марией",
      price:
        "5 000 ₽ (Мини-съёмка, 1 час, 20 фото), 10 000 ₽ (Стандарт, 2 часа, 50 фото), 18 000 ₽ (Премиум, 4 часа, 100 фото)",
      icon: "Camera",
    },
  ];

  const testimonials = [
    {
      name: "Елена Смирнова",
      text: "Александра создала невероятные нейрофото! Это настоящее искусство, которое передаёт глубину эмоций.",
      rating: 5,
      image: "https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/11bd7973-62f6-4eb6-a6f8-d388eb3afa8a.jpg"
    },
    {
      name: "Дмитрий и Ольга",
      text: "Мария сняла нашу свадьбу просто волшебно. Каждый кадр — это история, которую хочется пересматривать снова.",
      rating: 5,
      image: "https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/69bf3ec7-5125-44fe-accb-af20b5684723.jpg"
    },
    {
      name: "Анна Петрова",
      text: "Семейная фотосессия с Марией прошла очень комфортно. Дети вели себя естественно, а результат превзошёл ожидания!",
      rating: 5,
      image: "https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/70a84839-0333-4f0d-92d9-939ae755a963.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SubscriptionDialog open={subscriptionDialogOpen} onOpenChange={setSubscriptionDialogOpen} />
      <QuizDialog open={quizDialogOpen} onOpenChange={setQuizDialogOpen} />
      <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} photographer={contactPhotographer} />
      
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Aleksandra & Maria
            </h1>
            <p className="text-sm mt-1 px-0.5" style={{ fontSize: "0.875rem" }}>
              Профессиональная фотография
            </p>
          </div>
          <div className="hidden md:flex gap-6">
            {[
              "home",
              "portfolio",
              "about",
              "services",
              "reviews",
            ].map((section) => (
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
            ))}
          </div>
          <Button
            variant="default"
            size="sm"
            onClick={handleContactClick}
          >
            Связаться
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="md:text-5xl mb-6 leading-tight font-bold text-4xl">
              Искусство фотосъёмки: от классики до нейросетей
            </h2>
            <h3 className="md:text-2xl mb-6 leading-tight font-bold text-4xl">
              Выберите свой путь к совершенным снимкам: нейрофотография с
              AI-эффектами или классическая фотосессия
            </h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="group"
              >
                Посмотреть работы
                <Icon
                  name="ArrowRight"
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
              >
                Прайс
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
              <div className="h-[24rem] bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/fe75699e-c452-4a3d-afb5-7477e525d402.JPG"
                  alt="Александра"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Александра</h3>
                <p className="font-semibold mb-3 text-[#7f68ac]">
                  AI-фотограф (онлайн из любой точки)
                </p>
                <p className="text-muted-foreground">
                  Превращаю исходные портреты в уникальные арт-объекты с помощью
                  искусственного интеллекта.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in [animation-delay:150ms]">
              <div className="h-[24rem] bg-gradient-to-br from-secondary/20 to-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/7cd5fbec-41bf-456d-98de-1c14f91b5e42.jpg"
                  alt="Мария"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Мария</h3>
                <p className="text-secondary font-semibold mb-3">
                  Классический фотограф (г.Новосибирск)
                </p>
                <p className="text-muted-foreground">
                  Специализируюсь на Lifestyle стиле. Ловлю искренние эмоции и
                  важные моменты.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground text-lg">Наши работы</p>
          </div>

          <Tabs defaultValue="alexandra" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="alexandra">Александра (AI-фото)</TabsTrigger>
              <TabsTrigger value="maria">Мария (Классика)</TabsTrigger>
            </TabsList>

            <TabsContent
              value="alexandra"
              className="grid md:grid-cols-3 gap-6"
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

            <TabsContent value="maria" className="grid md:grid-cols-3 gap-6">
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

      <section id="about" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent">
              Сравнение форматов съёмки
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Выберите то, что вам ближе: быстрые и креативные AI-снимки или классическую съёмку с живым общением
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Sparkles" size={28} className="text-primary" />
                <h3 className="text-2xl font-bold">AI-фотография</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-500 mt-1" size={20} />
                  <p>Быстрый результат за 1-2 дня</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-500 mt-1" size={20} />
                  <p>Уникальные, креативные AI-эффекты</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-500 mt-1" size={20} />
                  <p>Доступная цена</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="X" className="text-red-500 mt-1" size={20} />
                  <p>Требуется исходное фото хорошего качества</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="X" className="text-red-500 mt-1" size={20} />
                  <p>Сходство с оригиналом фото до 85-95%</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Camera" size={28} className="text-secondary" />
                <h3 className="text-2xl font-bold">Классическая съёмка</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-500 mt-1" size={20} />
                  <p>100% естественные фотографии</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-500 mt-1" size={20} />
                  <p>Живая атмосфера и уникальность кадров</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="X" className="text-red-500 mt-1" size={20} />
                  <p>Только для жителей Новосибирска</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="X" className="text-red-500 mt-1" size={20} />
                  <p>Длительная обработка (5-7 дней)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-6 border-t max-w-4xl mx-auto mt-8">
            <p className="text-muted-foreground mb-4">Не уверены? Пройдите короткий тест!</p>
            <Button onClick={() => setQuizDialogOpen(true)}>
              Помочь выбрать
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent">
              Наши услуги
            </h2>
            <p className="text-gray-600 text-lg">
              Выберите подходящий пакет для ваших потребностей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                  <CardTitle className="text-3xl">AI-фотография</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Нейрофотография с Александрой
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Пробный пакет (3 фото, 1 образ)</span>
                    <span className="font-bold text-xl">1 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Стандарт (10 фото, 2-3 образа)</span>
                    <span className="font-bold text-xl">2 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Премиум (20 фото, 5 образов)</span>
                    <span className="font-bold text-xl">3 500 ₽</span>
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
                    <Icon name="Image" size={16} className="text-primary" />
                    <span>
                      <img 
                        src="https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/7d484231-557f-401e-83b6-ba2117e483c2.jpg"
                        alt="Все исходные фото в день съемки"
                        className="w-6 h-6 inline-block mr-1"
                      />
                      Все исходные AI-обработки
                    </span>
                  </div>
                </div>
                <Button className="w-full" onClick={() => scrollToSection("booking")}>
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Camera" size={32} className="text-secondary" />
                  <CardTitle className="text-3xl">Классическая съёмка</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Профессиональная фотосессия с Марией
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Мини (1 час, 20 фото)</span>
                    <span className="font-bold text-xl">5 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Стандарт (2 часа, 50 фото)</span>
                    <span className="font-bold text-xl">10 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Премиум (4 часа, 100 фото)</span>
                    <span className="font-bold text-xl">18 000 ₽</span>
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
                    <span>
                      <img 
                        src="https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/7d484231-557f-401e-83b6-ba2117e483c2.jpg"
                        alt="Все исходные фото в день съемки"
                        className="w-6 h-6 inline-block mr-1"
                      />
                      Все исходные фото в день съемки
                    </span>
                  </div>
                </div>
                <Button className="w-full" variant="secondary" onClick={() => scrollToSection("booking")}>
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="payment" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent">
            Оплата
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Оплачивайте услуги удобным для вас способом
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="CreditCard" className="text-primary" />
                  Способы оплаты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Icon name="CreditCard" className="text-primary" />
                  <div>
                    <div className="font-semibold">СБП</div>
                    <div className="text-sm text-gray-600">Система быстрых платежей</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Icon name="Building" className="text-primary" />
                  <div>
                    <div className="font-semibold">Банковский перевод</div>
                    <div className="text-sm text-gray-600">По реквизитам</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Shield" className="text-green-500" />
                  Гарантии
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Undo2" className="text-green-500 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Возврат средств</div>
                    <div className="text-sm text-gray-600">
                      Возможность вернуть предоплату в течение 14 дней
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <Icon name="Info" size={16} className="inline mr-1" />
                    Для оплаты свяжитесь с фотографом удобным способом. 
                    Реквизиты на оплату будут высланы после согласования деталей съёмки.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-purple-50 to-white border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="text-center">Условия оплаты</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <p className="text-lg">Предоплата <span className="font-bold text-2xl text-primary">30%</span></p>
              <p className="text-sm text-gray-600">
                При отмене съёмки менее чем за 24 часа предоплата не возвращается
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы</h2>
            <p className="text-muted-foreground text-lg">Что говорят наши клиенты</p>
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

      <section id="booking" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent">
            Записаться на съёмку
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Заполните форму, и мы свяжемся с вами в ближайшее время
          </p>

          <Card className="border-2 border-purple-200">
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Ваше имя</label>
                <Input placeholder="Введите ваше имя" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Телефон</label>
                <Input placeholder="+7 (___) ___-__-__" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Выберите фотографа</label>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant={selectedPhotographer === "alexandra" ? "default" : "outline"}
                    className="h-auto p-4 flex-col items-start gap-2"
                    onClick={() => setSelectedPhotographer("alexandra")}
                  >
                    <div className="flex items-center gap-2">
                      <Icon name="Sparkles" size={20} />
                      <span className="font-bold">Александра</span>
                    </div>
                    <span className="text-xs">Нейрофото</span>
                  </Button>
                  <Button
                    variant={selectedPhotographer === "maria" ? "default" : "outline"}
                    className="h-auto p-4 flex-col items-start gap-2"
                    onClick={() => setSelectedPhotographer("maria")}
                  >
                    <div className="flex items-center gap-2">
                      <Icon name="Camera" size={20} />
                      <span className="font-bold">Мария</span>
                    </div>
                    <span className="text-xs">Классика</span>
                  </Button>
                </div>
              </div>

              {selectedPhotographer === "maria" && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Дата съёмки</label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Время</label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10:00">10:00</SelectItem>
                        <SelectItem value="12:00">12:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                        <SelectItem value="18:00">18:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              <div className="space-y-2">
                <label className="text-sm font-semibold">Комментарий</label>
                <Textarea 
                  placeholder="Расскажите о ваших пожеланиях к съёмке..." 
                  rows={4}
                />
              </div>

              <Button className="w-full" size="lg">
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 bg-muted/50 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <p className="font-semibold">Два взгляда на фотографию — выберите свой стиль</p>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
