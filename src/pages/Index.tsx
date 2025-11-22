import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
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
      name: "Нейрофотография",
      description:
        "Уникальная авторская техника съёмки с элементами нейрографики",
      price: "от 15 000 ₽",
      icon: "Sparkles",
    },
    {
      photographer: "alexandra",
      name: "Арт-портрет",
      description: "Художественная съёмка с креативной обработкой",
      price: "от 12 000 ₽",
      icon: "Palette",
    },
    {
      photographer: "maria",
      name: "Свадебная съёмка",
      description: "Полный день съёмки свадебного торжества",
      price: "от 50 000 ₽",
      icon: "Heart",
    },
    {
      photographer: "maria",
      name: "Семейная фотосессия",
      description: "Естественные эмоции и моменты вашей семьи",
      price: "от 8 000 ₽",
      icon: "Users",
    },
  ];

  const testimonials = [
    {
      name: "Елена Смирнова",
      text: "Александра создала невероятные нейрофото! Это настоящее искусство, которое передаёт глубину эмоций.",
      rating: 5,
    },
    {
      name: "Дмитрий и Ольга",
      text: "Мария сняла нашу свадьбу просто волшебно. Каждый кадр — это история, которую хочется пересматривать снова.",
      rating: 5,
    },
    {
      name: "Анна Петрова",
      text: "Семейная фотосессия с Марией прошла очень комфортно. Дети вели себя естественно, а результат превзошёл ожидания!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Alexandra & Maria
          </h1>
          <div className="hidden md:flex gap-6">
            {[
              "home",
              "portfolio",
              "about",
              "services",
              "reviews",
              "contact",
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
                    : section === "about"
                      ? "О нас"
                      : section === "services"
                        ? "Услуги и цены"
                        : section === "reviews"
                          ? "Отзывы"
                          : "Контакты"}
              </button>
            ))}
          </div>
          <Button
            variant="default"
            size="sm"
            onClick={() => scrollToSection("contact")}
          >
            Связаться
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-sm px-4 py-2">
              Профессиональная фотография
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Создаём искусство из ваших моментов
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Александра — нейрофотограф с уникальным видением. Мария — мастер
              классической фотографии для важных событий.
            </p>
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
                Услуги и цены
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/ae83c122-3d9f-4040-85f8-cbdcff5516e7.jpg"
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
              <div className="h-64 bg-gradient-to-br from-secondary/20 to-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/647c12fe-b2d4-4576-938b-8568acf1de25.jpg"
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
            <p className="text-muted-foreground text-lg">Наши лучшие работы</p>
          </div>

          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="all">Все работы</TabsTrigger>
              <TabsTrigger value="alexandra">Александра</TabsTrigger>
              <TabsTrigger value="maria">Мария</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid md:grid-cols-3 gap-6">
              {portfolioImages.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-lg aspect-square animate-fade-in"
                >
                  <img
                    src={img.url}
                    alt={`Portfolio ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-semibold capitalize">
                      {img.category}
                    </span>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent
              value="alexandra"
              className="grid md:grid-cols-3 gap-6"
            >
              {portfolioImages
                .filter((img) => img.photographer === "alexandra")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-lg aspect-square animate-fade-in"
                  >
                    <img
                      src={img.url}
                      alt={`Alexandra portfolio ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="maria" className="grid md:grid-cols-3 gap-6">
              {portfolioImages
                .filter((img) => img.photographer === "maria")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-lg aspect-square animate-fade-in"
                  >
                    <img
                      src={img.url}
                      alt={`Maria portfolio ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              О фотографах
            </h2>
            <p className="text-muted-foreground text-lg">
              Наши истории и подход к работе
            </p>
          </div>

          <div className="space-y-12">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Александра</h3>
                  <p className="text-primary font-semibold mb-4">
                    Нейрофотограф
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Более 7 лет в фотографии. Создала авторскую технику
                    нейрофотографии, соединив классическую портретную съёмку с
                    элементами нейрографики. Каждая работа — это уникальный
                    арт-объект, отражающий внутренний мир человека. Работаю в
                    студии и на выезде. Провожу мастер-классы по креативной
                    фотографии.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Camera" className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Мария</h3>
                  <p className="text-secondary font-semibold mb-4">
                    Классический фотограф
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    В профессии 10 лет. Специализируюсь на свадебной и семейной
                    фотографии. Мой стиль — естественность и искренность. Не
                    ставлю жёсткие позы, а создаю комфортную атмосферу, где люди
                    чувствуют себя свободно. Сняла более 150 свадеб и сотни
                    семейных фотосессий. Каждый проект для меня — это история
                    любви.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section
        data-pp-id="src/pages/Index.tsx:122:6"
        data-pp-name="section"
        data-component-path="src/pages/Index.tsx"
        data-component-line="122"
        data-component-file="Index.tsx"
        data-component-name="section"
        data-component-content="%7B%22className%22%3A%22py-20%20px-4%20bg-muted%2F30%22%7D"
        id="comparison"
        class="py-20 px-4 bg-muted/30"
      >
        <div
          data-pp-id="src/pages/Index.tsx:123:8"
          data-pp-name="div"
          data-component-path="src/pages/Index.tsx"
          data-component-line="123"
          data-component-file="Index.tsx"
          data-component-name="div"
          data-component-content="%7B%22className%22%3A%22container%20mx-auto%22%7D"
          class="container mx-auto"
        >
          <h2
            data-pp-id="src/pages/Index.tsx:124:10"
            data-pp-name="h2"
            data-component-path="src/pages/Index.tsx"
            data-component-line="124"
            data-component-file="Index.tsx"
            data-component-name="h2"
            data-component-content="%7B%22text%22%3A%22%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5%20%D1%81%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%22%2C%22className%22%3A%22text-4xl%20font-heading%20font-bold%20text-center%20mb-12%22%7D"
            class="text-4xl font-heading font-bold text-center mb-12"
          >
            Интерактивное сравнение
          </h2>
          <div
            data-pp-id="src/pages/Index.tsx:127:10"
            data-pp-name="Card"
            data-component-path="src/pages/Index.tsx"
            data-component-line="127"
            data-component-file="Index.tsx"
            data-component-name="Card"
            data-component-content="%7B%22className%22%3A%22max-w-4xl%20mx-auto%22%7D"
            class="rounded-lg border bg-card text-card-foreground shadow-sm max-w-4xl mx-auto"
          >
            <div
              data-pp-id="src/pages/Index.tsx:128:12"
              data-pp-name="CardContent"
              data-component-path="src/pages/Index.tsx"
              data-component-line="128"
              data-component-file="Index.tsx"
              data-component-name="CardContent"
              data-component-content="%7B%22className%22%3A%22p-8%22%7D"
              class="p-8"
            >
              <div
                data-pp-id="src/pages/Index.tsx:129:14"
                data-pp-name="div"
                data-component-path="src/pages/Index.tsx"
                data-component-line="129"
                data-component-file="Index.tsx"
                data-component-name="div"
                data-component-content="%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-8%20mb-8%22%7D"
                class="grid md:grid-cols-2 gap-8 mb-8"
              >
                <div
                  data-pp-id="src/pages/Index.tsx:130:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="130"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22space-y-4%22%7D"
                  class="space-y-4"
                >
                  <div
                    data-pp-id="src/pages/Index.tsx:131:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="131"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%20mb-4%22%7D"
                    class="flex items-center gap-3 mb-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-sparkles text-primary"
                      data-pp-id="src/pages/Index.tsx:132:20"
                      data-pp-name="Icon"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="132"
                      data-component-file="Index.tsx"
                      data-component-name="Icon"
                      data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                    >
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                      <path d="M20 3v4"></path>
                      <path d="M22 5h-4"></path>
                      <path d="M4 17v2"></path>
                      <path d="M5 18H3"></path>
                    </svg>
                    <h3
                      data-pp-id="src/pages/Index.tsx:133:20"
                      data-pp-name="h3"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="133"
                      data-component-file="Index.tsx"
                      data-component-name="h3"
                      data-component-content="%7B%22text%22%3A%22AI-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F%22%2C%22className%22%3A%22text-2xl%20font-heading%20font-bold%22%7D"
                      class="text-2xl font-heading font-bold"
                    >
                      AI-фотография
                    </h3>
                  </div>
                  <div
                    data-pp-id="src/pages/Index.tsx:135:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="135"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22space-y-3%22%7D"
                    class="space-y-3"
                  >
                    <div
                      data-pp-id="src/pages/Index.tsx:136:20"
                      data-pp-name="div"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="136"
                      data-component-file="Index.tsx"
                      data-component-name="div"
                      data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D"
                      class="flex items-start gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-check text-green-500 mt-1"
                        data-pp-id="src/pages/Index.tsx:137:22"
                        data-pp-name="Icon"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="137"
                        data-component-file="Index.tsx"
                        data-component-name="Icon"
                        data-component-content="%7B%22className%22%3A%22text-green-500%20mt-1%22%7D"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <p
                        data-pp-id="src/pages/Index.tsx:138:22"
                        data-pp-name="p"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="138"
                        data-component-file="Index.tsx"
                        data-component-name="p"
                        data-component-content="%7B%22text%22%3A%22%D0%93%D0%BE%D1%82%D0%BE%D0%B2%D0%BE%20%D0%B7%D0%B0%20%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE%20%D1%87%D0%B0%D1%81%D0%BE%D0%B2%22%7D"
                      >
                        Готово за несколько часов
                      </p>
                    </div>
                    <div
                      data-pp-id="src/pages/Index.tsx:140:20"
                      data-pp-name="div"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="140"
                      data-component-file="Index.tsx"
                      data-component-name="div"
                      data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D"
                      class="flex items-start gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-check text-green-500 mt-1"
                        data-pp-id="src/pages/Index.tsx:141:22"
                        data-pp-name="Icon"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="141"
                        data-component-file="Index.tsx"
                        data-component-name="Icon"
                        data-component-content="%7B%22className%22%3A%22text-green-500%20mt-1%22%7D"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <p
                        data-pp-id="src/pages/Index.tsx:142:22"
                        data-pp-name="p"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="142"
                        data-component-file="Index.tsx"
                        data-component-name="p"
                        data-component-content="%7B%22text%22%3A%22%D0%9D%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%D1%8B%20%D1%81%D1%82%D0%B8%D0%BB%D0%B5%D0%B9%22%7D"
                      >
                        Неограниченные варианты стилей
                      </p>
                    </div>
                    <div
                      data-pp-id="src/pages/Index.tsx:144:20"
                      data-pp-name="div"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="144"
                      data-component-file="Index.tsx"
                      data-component-name="div"
                      data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D"
                      class="flex items-start gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-check text-green-500 mt-1"
                        data-pp-id="src/pages/Index.tsx:145:22"
                        data-pp-name="Icon"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="145"
                        data-component-file="Index.tsx"
                        data-component-name="Icon"
                        data-component-content="%7B%22className%22%3A%22text-green-500%20mt-1%22%7D"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <p
                        data-pp-id="src/pages/Index.tsx:146:22"
                        data-pp-name="p"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="146"
                        data-component-file="Index.tsx"
                        data-component-name="p"
                        data-component-content="%7B%22text%22%3A%22%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD%2C%20%D0%B1%D0%B5%D0%B7%20%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%22%7D"
                      >
                        Работа онлайн, без встреч
                      </p>
                    </div>
                    <div
                      data-pp-id="src/pages/Index.tsx:148:20"
                      data-pp-name="div"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="148"
                      data-component-file="Index.tsx"
                      data-component-name="div"
                      data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D"
                      class="flex items-start gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-x text-red-500 mt-1"
                        data-pp-id="src/pages/Index.tsx:149:22"
                        data-pp-name="Icon"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="149"
                        data-component-file="Index.tsx"
                        data-component-name="Icon"
                        data-component-content="%7B%22className%22%3A%22text-red-500%20mt-1%22%7D"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      <p
                        data-pp-id="src/pages/Index.tsx:150:22"
                        data-pp-name="p"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="150"
                        data-component-file="Index.tsx"
                        data-component-name="p"
                        data-component-content="%7B%22text%22%3A%22%D0%9C%D0%B5%D0%BD%D1%8C%D1%88%D0%B5%20%D0%B5%D1%81%D1%82%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8%22%7D"
                      >
                        Меньше естественности
                      </p>
                    </div>
                    <div
                      data-pp-id="src/pages/Index.tsx:152:20"
                      data-pp-name="div"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="152"
                      data-component-file="Index.tsx"
                      data-component-name="div"
                      data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D"
                      class="flex items-start gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-x text-red-500 mt-1"
                        data-pp-id="src/pages/Index.tsx:153:22"
                        data-pp-name="Icon"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="153"
                        data-component-file="Index.tsx"
                        data-component-name="Icon"
                        data-component-content="%7B%22className%22%3A%22text-red-500%20mt-1%22%7D"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      <p
                        data-pp-id="src/pages/Index.tsx:154:22"
                        data-pp-name="p"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="154"
                        data-component-file="Index.tsx"
                        data-component-name="p"
                        data-component-content="%7B%22text%22%3A%22%D0%9D%D0%B5%D1%82%20%D0%B6%D0%B8%D0%B2%D0%BE%D0%B3%D0%BE%20%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8F%22%7D"
                      >
                        Нет живого общения
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-pp-id="src/pages/Index.tsx:159:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="159"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22space-y-4%22%7D"
                  class="space-y-4"
                >
                  <div
                    data-pp-id="src/pages/Index.tsx:160:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="160"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%20mb-4%22%7D"
                    class="flex items-center gap-3 mb-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-camera text-secondary"
                      data-pp-id="src/pages/Index.tsx:161:20"
                      data-pp-name="Icon"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="161"
                      data-component-file="Index.tsx"
                      data-component-name="Icon"
                      data-component-content="%7B%22className%22%3A%22text-secondary%22%7D"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                      <circle cx="12" cy="13" r="3"></circle>
                    </svg>
                    <h3
                      data-pp-id="src/pages/Index.tsx:162:20"
                      data-pp-name="h3"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="162"
                      data-component-file="Index.tsx"
                      data-component-name="h3"
                      data-component-content="%7B%22text%22%3A%22%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B0%22%2C%22className%22%3A%22text-2xl%20font-heading%20font-bold%22%7D"
                      class="text-2xl font-heading font-bold"
                    >
                      Классическая съёмка
                    </h3>
                  </div>
                  <div
                    data-pp-id="src/pages/Index.tsx:164:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="164"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22space-y-3%22%7D"
                    class="space-y-3"
                  >
                    <div
                      data-pp-id="src/pages/Index.tsx:165:20"
                      data-pp-name="div"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="165"
                      data-component-file="Index.tsx"
                      data-component-name="div"
                      data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D"
                      class="flex items-start gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-check text-green-500 mt-1"
                        data-pp-id="src/pages/Index.tsx:166:22"
                        data-pp-name="Icon"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="166"
                        data-component-file="Index.tsx"
                        data-component-name="Icon"
                        data-component-content="%7B%22className%22%3A%22text-green-500%20mt-1%22%7D"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <p
                        data-pp-id="src/pages/Index.tsx:167:22"
                        data-pp-name="p"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="167"
                        data-component-file="Index.tsx"
                        data-component-name="p"
                        data-component-content="%7B%22text%22%3A%22100%25%20%D0%B5%D1%81%D1%82%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%8D%D0%BC%D0%BE%D1%86%D0%B8%D0%B8%22%7D"
                      >
                        100% естественные эмоции
                      </p>
                    </div>
                    <div
                      data-pp-id="src/pages/Index.tsx:169:20"
                      data-pp-name="div"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="169"
                      data-component-file="Index.tsx"
                      data-component-name="div"
                      data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D"
                      class="flex items-start gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-check text-green-500 mt-1"
                        data-pp-id="src/pages/Index.tsx:170:22"
                        data-pp-name="Icon"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="170"
                        data-component-file="Index.tsx"
                        data-component-name="Icon"
                        data-component-content="%7B%22className%22%3A%22text-green-500%20mt-1%22%7D"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <p
                        data-pp-id="src/pages/Index.tsx:171:22"
                        data-pp-name="p"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="171"
                        data-component-file="Index.tsx"
                        data-component-name="p"
                        data-component-content="%7B%22text%22%3A%22%D0%9B%D0%B8%D1%87%D0%BD%D1%8B%D0%B9%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%20%D1%81%20%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%BE%D0%BC%22%7D"
                      >
                        Личный контакт с фотографом
                      </p>
                    </div>
                    <div
                      data-pp-id="src/pages/Index.tsx:173:20"
                      data-pp-name="div"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="173"
                      data-component-file="Index.tsx"
                      data-component-name="div"
                      data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D"
                      class="flex items-start gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-check text-green-500 mt-1"
                        data-pp-id="src/pages/Index.tsx:174:22"
                        data-pp-name="Icon"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="174"
                        data-component-file="Index.tsx"
                        data-component-name="Icon"
                        data-component-content="%7B%22className%22%3A%22text-green-500%20mt-1%22%7D"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <p
                        data-pp-id="src/pages/Index.tsx:175:22"
                        data-pp-name="p"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="175"
                        data-component-file="Index.tsx"
                        data-component-name="p"
                        data-component-content="%7B%22text%22%3A%22%D0%A3%D0%BD%D0%B8%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%BE%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%22%7D"
                      >
                        Уникальные моменты
                      </p>
                    </div>
                    <div
                      data-pp-id="src/pages/Index.tsx:177:20"
                      data-pp-name="div"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="177"
                      data-component-file="Index.tsx"
                      data-component-name="div"
                      data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D"
                      class="flex items-start gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-x text-red-500 mt-1"
                        data-pp-id="src/pages/Index.tsx:178:22"
                        data-pp-name="Icon"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="178"
                        data-component-file="Index.tsx"
                        data-component-name="Icon"
                        data-component-content="%7B%22className%22%3A%22text-red-500%20mt-1%22%7D"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      <p
                        data-pp-id="src/pages/Index.tsx:179:22"
                        data-pp-name="p"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="179"
                        data-component-file="Index.tsx"
                        data-component-name="p"
                        data-component-content="%7B%22text%22%3A%22%D0%9E%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%201-2%20%D0%BD%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%22%7D"
                      >
                        Обработка 1-2 недели
                      </p>
                    </div>
                    <div
                      data-pp-id="src/pages/Index.tsx:181:20"
                      data-pp-name="div"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="181"
                      data-component-file="Index.tsx"
                      data-component-name="div"
                      data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D"
                      class="flex items-start gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-x text-red-500 mt-1"
                        data-pp-id="src/pages/Index.tsx:182:22"
                        data-pp-name="Icon"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="182"
                        data-component-file="Index.tsx"
                        data-component-name="Icon"
                        data-component-content="%7B%22className%22%3A%22text-red-500%20mt-1%22%7D"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      <p
                        data-pp-id="src/pages/Index.tsx:183:22"
                        data-pp-name="p"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="183"
                        data-component-file="Index.tsx"
                        data-component-name="p"
                        data-component-content="%7B%22text%22%3A%22%D0%9D%D1%83%D0%B6%D0%BD%D0%B0%20%D0%BB%D0%B8%D1%87%D0%BD%D0%B0%D1%8F%20%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%B0%22%7D"
                      >
                        Нужна личная встреча
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-pp-id="src/pages/Index.tsx:189:14"
                data-pp-name="div"
                data-component-path="src/pages/Index.tsx"
                data-component-line="189"
                data-component-file="Index.tsx"
                data-component-name="div"
                data-component-content="%7B%22className%22%3A%22text-center%20pt-6%20border-t%22%7D"
                class="text-center pt-6 border-t"
              >
                <p
                  data-pp-id="src/pages/Index.tsx:190:16"
                  data-pp-name="p"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="190"
                  data-component-file="Index.tsx"
                  data-component-name="p"
                  data-component-content="%7B%22text%22%3A%22%D0%9D%D0%B5%20%D1%83%D0%B2%D0%B5%D1%80%D0%B5%D0%BD%D1%8B%3F%20%D0%9F%D1%80%D0%BE%D0%B9%D0%B4%D0%B8%D1%82%D0%B5%20%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%B8%D0%B9%20%D1%82%D0%B5%D1%81%D1%82!%22%2C%22className%22%3A%22text-muted-foreground%20mb-4%22%7D"
                  class="text-muted-foreground mb-4"
                >
                  Не уверены? Пройдите короткий тест!
                </p>
                <button
                  data-pp-id="src/pages/Index.tsx:191:16"
                  data-pp-name="Button"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="191"
                  data-component-file="Index.tsx"
                  data-component-name="Button"
                  data-component-content="%7B%22text%22%3A%22%D0%9F%D0%BE%D0%BC%D0%BE%D1%87%D1%8C%20%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D1%82%D1%8C%22%7D"
                  class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-circle-help mr-2"
                    data-pp-id="src/pages/Index.tsx:192:18"
                    data-pp-name="Icon"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="192"
                    data-component-file="Index.tsx"
                    data-component-name="Icon"
                    data-component-content="%7B%22className%22%3A%22mr-2%22%7D"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                  Помочь выбрать
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

export default Index;