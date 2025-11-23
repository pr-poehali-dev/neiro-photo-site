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
  <section
    data-pp-id="src/pages/Index.tsx:458:6"
    data-pp-name="section"
    data-component-path="src/pages/Index.tsx"
    data-component-line="458"
    data-component-file="Index.tsx"
    data-component-name="section"
    data-component-content="%7B%22className%22%3A%22py-20%20px-4%22%7D"
    id="quiz"
    class="py-20 px-4"
  >
    <div
      data-pp-id="src/pages/Index.tsx:459:8"
      data-pp-name="div"
      data-component-path="src/pages/Index.tsx"
      data-component-line="459"
      data-component-file="Index.tsx"
      data-component-name="div"
      data-component-content="%7B%22className%22%3A%22container%20mx-auto%20max-w-2xl%22%7D"
      class="container mx-auto max-w-2xl"
    >
      <h2
        data-pp-id="src/pages/Index.tsx:460:10"
        data-pp-name="h2"
        data-component-path="src/pages/Index.tsx"
        data-component-line="460"
        data-component-file="Index.tsx"
        data-component-name="h2"
        data-component-content="%7B%22text%22%3A%22%D0%9A%D0%B0%D0%BA%D0%B0%D1%8F%20%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B0%20%D0%B2%D0%B0%D0%BC%20%D0%BF%D0%BE%D0%B4%D0%BE%D0%B9%D0%B4%D1%91%D1%82%3F%22%2C%22className%22%3A%22text-4xl%20font-heading%20font-bold%20text-center%20mb-12%22%7D"
        class="text-4xl font-heading font-bold text-center mb-12"
      >
        Какая съёмка вам подойдёт?
      </h2>
      <div
        data-pp-id="src/pages/Index.tsx:463:10"
        data-pp-name="Card"
        data-component-path="src/pages/Index.tsx"
        data-component-line="463"
        data-component-file="Index.tsx"
        data-component-name="Card"
        data-component-content="%7B%7D"
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
      >
        <div
          data-pp-id="src/pages/Index.tsx:464:12"
          data-pp-name="CardHeader"
          data-component-path="src/pages/Index.tsx"
          data-component-line="464"
          data-component-file="Index.tsx"
          data-component-name="CardHeader"
          data-component-content="%7B%7D"
          class="flex flex-col space-y-1.5 p-6"
        >
          <h3
            data-pp-id="src/pages/Index.tsx:465:14"
            data-pp-name="CardTitle"
            data-component-path="src/pages/Index.tsx"
            data-component-line="465"
            data-component-file="Index.tsx"
            data-component-name="CardTitle"
            data-component-content="%7B%22text%22%3A%22%D0%A2%D0%B5%D1%81%D1%82-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%BD%D0%B8%D0%BA%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D"
            class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-circle-help text-primary"
              data-pp-id="src/pages/Index.tsx:466:16"
              data-pp-name="Icon"
              data-component-path="src/pages/Index.tsx"
              data-component-line="466"
              data-component-file="Index.tsx"
              data-component-name="Icon"
              data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
            Тест-помощник
          </h3>
          <p
            data-pp-id="src/pages/Index.tsx:469:14"
            data-pp-name="CardDescription"
            data-component-path="src/pages/Index.tsx"
            data-component-line="469"
            data-component-file="Index.tsx"
            data-component-name="CardDescription"
            data-component-content="%7B%22text%22%3A%22%D0%9E%D1%82%D0%B2%D0%B5%D1%82%D1%8C%D1%82%D0%B5%20%D0%BD%D0%B0%20%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D0%BE%D0%B2%2C%20%D0%B8%20%D0%BC%D1%8B%20%D0%BF%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BC%20%D0%BE%D0%BF%D1%82%D0%B8%D0%BC%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%22%7D"
            class="text-sm text-muted-foreground"
          >
            Ответьте на несколько вопросов, и мы подскажем оптимальный вариант
          </p>
        </div>
        <div
          data-pp-id="src/pages/Index.tsx:473:12"
          data-pp-name="CardContent"
          data-component-path="src/pages/Index.tsx"
          data-component-line="473"
          data-component-file="Index.tsx"
          data-component-name="CardContent"
          data-component-content="%7B%22className%22%3A%22space-y-6%22%7D"
          class="p-6 pt-0 space-y-6"
        >
          <div
            data-pp-id="src/pages/Index.tsx:476:18"
            data-pp-name="div"
            data-component-path="src/pages/Index.tsx"
            data-component-line="476"
            data-component-file="Index.tsx"
            data-component-name="div"
            data-component-content="%7B%22className%22%3A%22space-y-4%22%7D"
            class="space-y-4"
          >
            <div
              data-pp-id="src/pages/Index.tsx:477:20"
              data-pp-name="div"
              data-component-path="src/pages/Index.tsx"
              data-component-line="477"
              data-component-file="Index.tsx"
              data-component-name="div"
              data-component-content="%7B%22className%22%3A%22flex%20justify-between%20text-sm%20text-muted-foreground%22%7D"
              class="flex justify-between text-sm text-muted-foreground"
            >
              <span
                data-pp-id="src/pages/Index.tsx:478:22"
                data-pp-name="span"
                data-component-path="src/pages/Index.tsx"
                data-component-line="478"
                data-component-file="Index.tsx"
                data-component-name="span"
                data-component-content="%7B%22text%22%3A%22%D0%92%D0%BE%D0%BF%D1%80%D0%BE%D1%81%20%D0%B8%D0%B7%22%7D"
              >
                Вопрос 1 из 3
              </span>
              <span
                data-pp-id="src/pages/Index.tsx:479:22"
                data-pp-name="span"
                data-component-path="src/pages/Index.tsx"
                data-component-line="479"
                data-component-file="Index.tsx"
                data-component-name="span"
                data-component-content="%7B%22text%22%3A%22%25%22%7D"
              >
                0%
              </span>
            </div>
            <div
              aria-valuemax="100"
              aria-valuemin="0"
              role="progressbar"
              data-state="indeterminate"
              data-max="100"
              data-pp-id="src/components/ui/progress.tsx:10:2"
              data-pp-name="ProgressPrimitive.Root"
              data-component-path="src/components/ui/progress.tsx"
              data-component-line="10"
              data-component-file="progress.tsx"
              data-component-name="ProgressPrimitive.Root"
              data-component-content="%7B%7D"
              class="relative w-full overflow-hidden rounded-full bg-secondary h-2"
            >
              <div
                data-state="indeterminate"
                data-max="100"
                data-pp-id="src/components/ui/progress.tsx:18:4"
                data-pp-name="ProgressPrimitive.Indicator"
                data-component-path="src/components/ui/progress.tsx"
                data-component-line="18"
                data-component-file="progress.tsx"
                data-component-name="ProgressPrimitive.Indicator"
                data-component-content="%7B%22className%22%3A%22h-full%20w-full%20flex-1%20bg-primary%20transition-all%22%7D"
                class="h-full w-full flex-1 bg-primary transition-all"
                style="transform: translateX(-100%);"
              ></div>
            </div>
          </div>
          <div
            data-pp-id="src/pages/Index.tsx:484:18"
            data-pp-name="div"
            data-component-path="src/pages/Index.tsx"
            data-component-line="484"
            data-component-file="Index.tsx"
            data-component-name="div"
            data-component-content="%7B%22className%22%3A%22space-y-4%20pt-4%22%7D"
            class="space-y-4 pt-4"
          >
            <h3
              data-pp-id="src/pages/Index.tsx:485:20"
              data-pp-name="h3"
              data-component-path="src/pages/Index.tsx"
              data-component-line="485"
              data-component-file="Index.tsx"
              data-component-name="h3"
              data-component-content="%7B%22className%22%3A%22text-xl%20font-semibold%22%7D"
              class="text-xl font-semibold"
            >
              Какой стиль фотографий вам ближе?
            </h3>
            <div
              data-pp-id="src/pages/Index.tsx:486:20"
              data-pp-name="div"
              data-component-path="src/pages/Index.tsx"
              data-component-line="486"
              data-component-file="Index.tsx"
              data-component-name="div"
              data-component-content="%7B%22className%22%3A%22space-y-2%22%7D"
              class="space-y-2"
            >
              <button
                data-pp-id="src/pages/Index.tsx:488:24"
                data-pp-name="Button"
                data-component-path="src/pages/Index.tsx"
                data-component-line="488"
                data-component-file="Index.tsx"
                data-component-name="Button"
                data-component-content="%7B%22className%22%3A%22w-full%20justify-start%20h-auto%20py-4%20px-6%20text-left%20hover%3Aborder-primary%22%7D"
                class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground w-full justify-start h-auto py-4 px-6 text-left hover:border-primary"
              >
                Классические, естественные
              </button>
              <button
                data-pp-id="src/pages/Index.tsx:488:24"
                data-pp-name="Button"
                data-component-path="src/pages/Index.tsx"
                data-component-line="488"
                data-component-file="Index.tsx"
                data-component-name="Button"
                data-component-content="%7B%22className%22%3A%22w-full%20justify-start%20h-auto%20py-4%20px-6%20text-left%20hover%3Aborder-primary%22%7D"
                class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground w-full justify-start h-auto py-4 px-6 text-left hover:border-primary"
              >
                Креативные, с эффектами
              </button>
              <button
                data-pp-id="src/pages/Index.tsx:488:24"
                data-pp-name="Button"
                data-component-path="src/pages/Index.tsx"
                data-component-line="488"
                data-component-file="Index.tsx"
                data-component-name="Button"
                data-component-content="%7B%22className%22%3A%22w-full%20justify-start%20h-auto%20py-4%20px-6%20text-left%20hover%3Aborder-primary%22%7D"
                class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground w-full justify-start h-auto py-4 px-6 text-left hover:border-primary"
              >
                Не знаю, хочу узнать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
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
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Alexandra & Maria
            </h1>
            <p className="text-sm mt-1" style={{ fontSize: "0.875rem" }}>
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
            <h2 className="md:text-2xl mb-6 leading-tight font-bold text-2xl">
              Искусство фотосъёмки: от классики до нейросетей
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

      <section
        data-pp-id="src/pages/Index.tsx:369:6"
        data-pp-name="section"
        data-component-path="src/pages/Index.tsx"
        data-component-line="369"
        data-component-file="Index.tsx"
        data-component-name="section"
        data-component-content="%7B%22className%22%3A%22py-20%20px-4%20bg-muted%2F30%22%7D"
        id="pricing"
        class="py-20 px-4 bg-muted/30"
      >
        <div
          data-pp-id="src/pages/Index.tsx:370:8"
          data-pp-name="div"
          data-component-path="src/pages/Index.tsx"
          data-component-line="370"
          data-component-file="Index.tsx"
          data-component-name="div"
          data-component-content="%7B%22className%22%3A%22container%20mx-auto%22%7D"
          class="container mx-auto"
        >
          <h2
            data-pp-id="src/pages/Index.tsx:371:10"
            data-pp-name="h2"
            data-component-path="src/pages/Index.tsx"
            data-component-line="371"
            data-component-file="Index.tsx"
            data-component-name="h2"
            data-component-content="%7B%22text%22%3A%22%D0%9F%D1%80%D0%B0%D0%B9%D1%81%22%2C%22className%22%3A%22text-4xl%20font-heading%20font-bold%20text-center%20mb-12%22%7D"
            class="text-4xl font-heading font-bold text-center mb-12"
          >
            Прайс
          </h2>
          <div
            data-pp-id="src/pages/Index.tsx:372:10"
            data-pp-name="div"
            data-component-path="src/pages/Index.tsx"
            data-component-line="372"
            data-component-file="Index.tsx"
            data-component-name="div"
            data-component-content="%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-8%20max-w-5xl%20mx-auto%22%7D"
            class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            <div
              data-pp-id="src/pages/Index.tsx:373:12"
              data-pp-name="Card"
              data-component-path="src/pages/Index.tsx"
              data-component-line="373"
              data-component-file="Index.tsx"
              data-component-name="Card"
              data-component-content="%7B%22className%22%3A%22border-primary%2F50%22%7D"
              class="rounded-lg border bg-card text-card-foreground shadow-sm border-primary/50"
            >
              <div
                data-pp-id="src/pages/Index.tsx:374:14"
                data-pp-name="CardHeader"
                data-component-path="src/pages/Index.tsx"
                data-component-line="374"
                data-component-file="Index.tsx"
                data-component-name="CardHeader"
                data-component-content="%7B%7D"
                class="flex flex-col space-y-1.5 p-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-sparkles text-primary mb-4"
                  data-pp-id="src/pages/Index.tsx:375:16"
                  data-pp-name="Icon"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="375"
                  data-component-file="Index.tsx"
                  data-component-name="Icon"
                  data-component-content="%7B%22className%22%3A%22text-primary%20mb-4%22%7D"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
                <h3
                  data-pp-id="src/pages/Index.tsx:376:16"
                  data-pp-name="CardTitle"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="376"
                  data-component-file="Index.tsx"
                  data-component-name="CardTitle"
                  data-component-content="%7B%22text%22%3A%22AI-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F%22%2C%22className%22%3A%22text-3xl%20font-heading%22%7D"
                  class="font-semibold tracking-tight text-3xl font-heading"
                >
                  AI-фотография
                </h3>
                <p
                  data-pp-id="src/pages/Index.tsx:377:16"
                  data-pp-name="CardDescription"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="377"
                  data-component-file="Index.tsx"
                  data-component-name="CardDescription"
                  data-component-content="%7B%22text%22%3A%22%D1%81%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B9%22%7D"
                  class="text-sm text-muted-foreground"
                >
                  с Александрой
                </p>
              </div>
              <div
                data-pp-id="src/pages/Index.tsx:379:14"
                data-pp-name="CardContent"
                data-component-path="src/pages/Index.tsx"
                data-component-line="379"
                data-component-file="Index.tsx"
                data-component-name="CardContent"
                data-component-content="%7B%22className%22%3A%22space-y-6%22%7D"
                class="p-6 pt-0 space-y-6"
              >
                <div
                  data-pp-id="src/pages/Index.tsx:380:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="380"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22space-y-4%22%7D"
                  class="space-y-4"
                >
                  <div
                    data-pp-id="src/pages/Index.tsx:381:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="381"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22flex%20justify-between%20items-center%22%7D"
                    class="flex justify-between items-center"
                  >
                    <span
                      data-pp-id="src/pages/Index.tsx:382:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="382"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%D0%91%D0%B0%D0%B7%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%BF%D0%B0%D0%BA%D0%B5%D1%82%20(10%20%D1%84%D0%BE%D1%82%D0%BE)%22%7D"
                    >
                      Базовый пакет (10 фото)
                    </span>
                    <span
                      data-pp-id="src/pages/Index.tsx:383:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="383"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%222%20500%20%E2%82%BD%22%2C%22className%22%3A%22font-bold%20text-xl%22%7D"
                      class="font-bold text-xl"
                    >
                      2 500 ₽
                    </span>
                  </div>
                  <div
                    data-pp-id="src/pages/Index.tsx:385:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="385"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22flex%20justify-between%20items-center%22%7D"
                    class="flex justify-between items-center"
                  >
                    <span
                      data-pp-id="src/pages/Index.tsx:386:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="386"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%D0%A1%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%20(25%20%D1%84%D0%BE%D1%82%D0%BE)%22%7D"
                    >
                      Стандарт (25 фото)
                    </span>
                    <span
                      data-pp-id="src/pages/Index.tsx:387:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="387"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%225%20000%20%E2%82%BD%22%2C%22className%22%3A%22font-bold%20text-xl%22%7D"
                      class="font-bold text-xl"
                    >
                      5 000 ₽
                    </span>
                  </div>
                  <div
                    data-pp-id="src/pages/Index.tsx:389:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="389"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22flex%20justify-between%20items-center%22%7D"
                    class="flex justify-between items-center"
                  >
                    <span
                      data-pp-id="src/pages/Index.tsx:390:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="390"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%D0%9F%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC%20(50%20%D1%84%D0%BE%D1%82%D0%BE)%22%7D"
                    >
                      Премиум (50 фото)
                    </span>
                    <span
                      data-pp-id="src/pages/Index.tsx:391:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="391"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%228%20000%20%E2%82%BD%22%2C%22className%22%3A%22font-bold%20text-xl%22%7D"
                      class="font-bold text-xl"
                    >
                      8 000 ₽
                    </span>
                  </div>
                </div>
                <div
                  data-pp-id="src/pages/Index.tsx:394:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="394"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22pt-4%20border-t%20space-y-2%22%7D"
                  class="pt-4 border-t space-y-2"
                >
                  <div
                    data-pp-id="src/pages/Index.tsx:395:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="395"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-sm%22%7D"
                    class="flex items-center gap-2 text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-clock text-primary"
                      data-pp-id="src/pages/Index.tsx:396:20"
                      data-pp-name="Icon"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="396"
                      data-component-file="Index.tsx"
                      data-component-name="Icon"
                      data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span
                      data-pp-id="src/pages/Index.tsx:397:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="397"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%D0%93%D0%BE%D1%82%D0%BE%D0%B2%D0%BE%20%D0%B7%D0%B0%201%20%D0%B4%D0%B5%D0%BD%D1%8C%22%7D"
                    >
                      Готово за 1 день
                    </span>
                  </div>
                  <div
                    data-pp-id="src/pages/Index.tsx:399:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="399"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-sm%22%7D"
                    class="flex items-center gap-2 text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-palette text-primary"
                      data-pp-id="src/pages/Index.tsx:400:20"
                      data-pp-name="Icon"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="400"
                      data-component-file="Index.tsx"
                      data-component-name="Icon"
                      data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                    >
                      <circle
                        cx="13.5"
                        cy="6.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                      <circle
                        cx="17.5"
                        cy="10.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                      <circle
                        cx="8.5"
                        cy="7.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                      <circle
                        cx="6.5"
                        cy="12.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                    </svg>
                    <span
                      data-pp-id="src/pages/Index.tsx:401:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="401"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%D0%9B%D1%8E%D0%B1%D1%8B%D0%B5%20%D1%81%D1%82%D0%B8%D0%BB%D0%B8%20%D0%B8%20%D1%8D%D1%84%D1%84%D0%B5%D0%BA%D1%82%D1%8B%22%7D"
                    >
                      Любые стили и эффекты
                    </span>
                  </div>
                  <div
                    data-pp-id="src/pages/Index.tsx:403:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="403"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-sm%22%7D"
                    class="flex items-center gap-2 text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-monitor text-primary"
                      data-pp-id="src/pages/Index.tsx:404:20"
                      data-pp-name="Icon"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="404"
                      data-component-file="Index.tsx"
                      data-component-name="Icon"
                      data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                    >
                      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                      <line x1="8" x2="16" y1="21" y2="21"></line>
                      <line x1="12" x2="12" y1="17" y2="21"></line>
                    </svg>
                    <span
                      data-pp-id="src/pages/Index.tsx:405:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="405"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD%22%7D"
                    >
                      Работа онлайн
                    </span>
                  </div>
                </div>
                <button
                  data-pp-id="src/pages/Index.tsx:408:16"
                  data-pp-name="Button"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="408"
                  data-component-file="Index.tsx"
                  data-component-name="Button"
                  data-component-content="%7B%22text%22%3A%22%D0%92%D1%8B%D0%B1%D1%80%D0%B0%D1%82%D1%8C%20%D0%BF%D0%B0%D0%BA%D0%B5%D1%82%22%2C%22className%22%3A%22w-full%22%7D"
                  class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
                >
                  Выбрать пакет
                </button>
              </div>
            </div>
            <div
              data-pp-id="src/pages/Index.tsx:414:12"
              data-pp-name="Card"
              data-component-path="src/pages/Index.tsx"
              data-component-line="414"
              data-component-file="Index.tsx"
              data-component-name="Card"
              data-component-content="%7B%22className%22%3A%22border-secondary%2F50%22%7D"
              class="rounded-lg border bg-card text-card-foreground shadow-sm border-secondary/50"
            >
              <div
                data-pp-id="src/pages/Index.tsx:415:14"
                data-pp-name="CardHeader"
                data-component-path="src/pages/Index.tsx"
                data-component-line="415"
                data-component-file="Index.tsx"
                data-component-name="CardHeader"
                data-component-content="%7B%7D"
                class="flex flex-col space-y-1.5 p-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-camera text-secondary mb-4"
                  data-pp-id="src/pages/Index.tsx:416:16"
                  data-pp-name="Icon"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="416"
                  data-component-file="Index.tsx"
                  data-component-name="Icon"
                  data-component-content="%7B%22className%22%3A%22text-secondary%20mb-4%22%7D"
                >
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                  <circle cx="12" cy="13" r="3"></circle>
                </svg>
                <h3
                  data-pp-id="src/pages/Index.tsx:417:16"
                  data-pp-name="CardTitle"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="417"
                  data-component-file="Index.tsx"
                  data-component-name="CardTitle"
                  data-component-content="%7B%22text%22%3A%22%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B0%22%2C%22className%22%3A%22text-3xl%20font-heading%22%7D"
                  class="font-semibold tracking-tight text-3xl font-heading"
                >
                  Классическая съёмка
                </h3>
                <p
                  data-pp-id="src/pages/Index.tsx:418:16"
                  data-pp-name="CardDescription"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="418"
                  data-component-file="Index.tsx"
                  data-component-name="CardDescription"
                  data-component-content="%7B%22text%22%3A%22%D1%81%20%D0%9C%D0%B0%D1%80%D0%B8%D0%B5%D0%B9%22%7D"
                  class="text-sm text-muted-foreground"
                >
                  с Марией
                </p>
              </div>
              <div
                data-pp-id="src/pages/Index.tsx:420:14"
                data-pp-name="CardContent"
                data-component-path="src/pages/Index.tsx"
                data-component-line="420"
                data-component-file="Index.tsx"
                data-component-name="CardContent"
                data-component-content="%7B%22className%22%3A%22space-y-6%22%7D"
                class="p-6 pt-0 space-y-6"
              >
                <div
                  data-pp-id="src/pages/Index.tsx:421:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="421"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22space-y-4%22%7D"
                  class="space-y-4"
                >
                  <div
                    data-pp-id="src/pages/Index.tsx:422:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="422"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22flex%20justify-between%20items-center%22%7D"
                    class="flex justify-between items-center"
                  >
                    <span
                      data-pp-id="src/pages/Index.tsx:423:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="423"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%D0%9C%D0%B8%D0%BD%D0%B8-%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B0%20(1%20%D1%87%D0%B0%D1%81%2C%2020%20%D1%84%D0%BE%D1%82%D0%BE)%22%7D"
                    >
                      Мини-съёмка (1 час, 20 фото)
                    </span>
                    <span
                      data-pp-id="src/pages/Index.tsx:424:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="424"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%225%20000%20%E2%82%BD%22%2C%22className%22%3A%22font-bold%20text-xl%22%7D"
                      class="font-bold text-xl"
                    >
                      5 000 ₽
                    </span>
                  </div>
                  <div
                    data-pp-id="src/pages/Index.tsx:426:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="426"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22flex%20justify-between%20items-center%22%7D"
                    class="flex justify-between items-center"
                  >
                    <span
                      data-pp-id="src/pages/Index.tsx:427:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="427"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%D0%A1%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%20(2%20%D1%87%D0%B0%D1%81%D0%B0%2C%2050%20%D1%84%D0%BE%D1%82%D0%BE)%22%7D"
                    >
                      Стандарт (2 часа, 50 фото)
                    </span>
                    <span
                      data-pp-id="src/pages/Index.tsx:428:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="428"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%2210%20000%20%E2%82%BD%22%2C%22className%22%3A%22font-bold%20text-xl%22%7D"
                      class="font-bold text-xl"
                    >
                      10 000 ₽
                    </span>
                  </div>
                  <div
                    data-pp-id="src/pages/Index.tsx:430:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="430"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22flex%20justify-between%20items-center%22%7D"
                    class="flex justify-between items-center"
                  >
                    <span
                      data-pp-id="src/pages/Index.tsx:431:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="431"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%D0%9F%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC%20(4%20%D1%87%D0%B0%D1%81%D0%B0%2C%20100%20%D1%84%D0%BE%D1%82%D0%BE)%22%7D"
                    >
                      Премиум (4 часа, 100 фото)
                    </span>
                    <span
                      data-pp-id="src/pages/Index.tsx:432:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="432"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%2218%20000%20%E2%82%BD%22%2C%22className%22%3A%22font-bold%20text-xl%22%7D"
                      class="font-bold text-xl"
                    >
                      18 000 ₽
                    </span>
                  </div>
                </div>
                <div
                  data-pp-id="src/pages/Index.tsx:435:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="435"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22pt-4%20border-t%20space-y-2%22%7D"
                  class="pt-4 border-t space-y-2"
                >
                  <div
                    data-pp-id="src/pages/Index.tsx:436:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="436"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-sm%22%7D"
                    class="flex items-center gap-2 text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-clock text-secondary"
                      data-pp-id="src/pages/Index.tsx:437:20"
                      data-pp-name="Icon"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="437"
                      data-component-file="Index.tsx"
                      data-component-name="Icon"
                      data-component-content="%7B%22className%22%3A%22text-secondary%22%7D"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span
                      data-pp-id="src/pages/Index.tsx:438:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="438"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%D0%9E%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%207-14%20%D0%B4%D0%BD%D0%B5%D0%B9%22%7D"
                    >
                      Обработка 7-14 дней
                    </span>
                  </div>
                  <div
                    data-pp-id="src/pages/Index.tsx:440:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="440"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-sm%22%7D"
                    class="flex items-center gap-2 text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-map-pin text-secondary"
                      data-pp-id="src/pages/Index.tsx:441:20"
                      data-pp-name="Icon"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="441"
                      data-component-file="Index.tsx"
                      data-component-name="Icon"
                      data-component-content="%7B%22className%22%3A%22text-secondary%22%7D"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span
                      data-pp-id="src/pages/Index.tsx:442:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="442"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%D0%A1%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%B8%D0%BB%D0%B8%20%D0%B2%D1%8B%D0%B5%D0%B7%D0%B4%22%7D"
                    >
                      Студия или выезд
                    </span>
                  </div>
                  <div
                    data-pp-id="src/pages/Index.tsx:444:18"
                    data-pp-name="div"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="444"
                    data-component-file="Index.tsx"
                    data-component-name="div"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-sm%22%7D"
                    class="flex items-center gap-2 text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-smile text-secondary"
                      data-pp-id="src/pages/Index.tsx:445:20"
                      data-pp-name="Icon"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="445"
                      data-component-file="Index.tsx"
                      data-component-name="Icon"
                      data-component-content="%7B%22className%22%3A%22text-secondary%22%7D"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" x2="9.01" y1="9" y2="9"></line>
                      <line x1="15" x2="15.01" y1="9" y2="9"></line>
                    </svg>
                    <span
                      data-pp-id="src/pages/Index.tsx:446:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="446"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%D0%96%D0%B8%D0%B2%D1%8B%D0%B5%20%D1%8D%D0%BC%D0%BE%D1%86%D0%B8%D0%B8%22%7D"
                    >
                      Живые эмоции
                    </span>
                  </div>
                </div>
                <button
                  data-pp-id="src/pages/Index.tsx:449:16"
                  data-pp-name="Button"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="449"
                  data-component-file="Index.tsx"
                  data-component-name="Button"
                  data-component-content="%7B%22text%22%3A%22%D0%92%D1%8B%D0%B1%D1%80%D0%B0%D1%82%D1%8C%20%D0%BF%D0%B0%D0%BA%D0%B5%D1%82%22%2C%22className%22%3A%22w-full%22%7D"
                  class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8 w-full"
                >
                  Выбрать пакет
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы</h2>
            <p className="text-muted-foreground text-lg">
              Что говорят наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        data-pp-id="src/pages/Index.tsx:384:6"
        data-pp-name="section"
        data-component-path="src/pages/Index.tsx"
        data-component-line="384"
        data-component-file="Index.tsx"
        data-component-name="section"
        data-component-content="%7B%22className%22%3A%22py-20%20px-4%20bg-muted%2F30%22%7D"
        id="contacts"
        class="py-20 px-4 bg-muted/30"
      >
        <div
          data-pp-id="src/pages/Index.tsx:385:8"
          data-pp-name="div"
          data-component-path="src/pages/Index.tsx"
          data-component-line="385"
          data-component-file="Index.tsx"
          data-component-name="div"
          data-component-content="%7B%22className%22%3A%22container%20mx-auto%20max-w-4xl%22%7D"
          class="container mx-auto max-w-4xl"
        >
          <h2
            data-pp-id="src/pages/Index.tsx:386:10"
            data-pp-name="h2"
            data-component-path="src/pages/Index.tsx"
            data-component-line="386"
            data-component-file="Index.tsx"
            data-component-name="h2"
            data-component-content="%7B%22text%22%3A%22%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-center%20mb-12%22%7D"
            class="text-4xl font-bold text-center mb-12"
          >
            Контакты
          </h2>
          <div
            data-pp-id="src/pages/Index.tsx:387:10"
            data-pp-name="div"
            data-component-path="src/pages/Index.tsx"
            data-component-line="387"
            data-component-file="Index.tsx"
            data-component-name="div"
            data-component-content="%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-8%22%7D"
            class="grid md:grid-cols-2 gap-8"
          >
            <div
              data-pp-id="src/pages/Index.tsx:388:12"
              data-pp-name="Card"
              data-component-path="src/pages/Index.tsx"
              data-component-line="388"
              data-component-file="Index.tsx"
              data-component-name="Card"
              data-component-content="%7B%7D"
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div
                data-pp-id="src/pages/Index.tsx:389:14"
                data-pp-name="CardHeader"
                data-component-path="src/pages/Index.tsx"
                data-component-line="389"
                data-component-file="Index.tsx"
                data-component-name="CardHeader"
                data-component-content="%7B%7D"
                class="flex flex-col space-y-1.5 p-6"
              >
                <h3
                  data-pp-id="src/pages/Index.tsx:390:16"
                  data-pp-name="CardTitle"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="390"
                  data-component-file="Index.tsx"
                  data-component-name="CardTitle"
                  data-component-content="%7B%22text%22%3A%22%D0%9C%D0%B0%D1%80%D0%B8%D1%8F%22%2C%22className%22%3A%22text-xl%22%7D"
                  class="font-semibold tracking-tight text-xl"
                >
                  Александра
                </h3>
                <p
                  data-pp-id="src/pages/Index.tsx:391:16"
                  data-pp-name="CardDescription"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="391"
                  data-component-file="Index.tsx"
                  data-component-name="CardDescription"
                  data-component-content="%7B%22text%22%3A%22%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9%20%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%22%7D"
                  class="text-sm text-muted-foreground"
                >
                  AI фотограф
                </p>
              </div>
              <div
                data-pp-id="src/pages/Index.tsx:393:14"
                data-pp-name="CardContent"
                data-component-path="src/pages/Index.tsx"
                data-component-line="393"
                data-component-file="Index.tsx"
                data-component-name="CardContent"
                data-component-content="%7B%22className%22%3A%22space-y-4%22%7D"
                class="p-6 pt-0 space-y-4"
              >
                <div
                  data-pp-id="src/pages/Index.tsx:394:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="394"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D"
                  class="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-phone text-primary"
                    data-pp-id="src/pages/Index.tsx:395:18"
                    data-pp-name="Icon"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="395"
                    data-component-file="Index.tsx"
                    data-component-name="Icon"
                    data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span
                    data-pp-id="src/pages/Index.tsx:396:18"
                    data-pp-name="span"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="396"
                    data-component-file="Index.tsx"
                    data-component-name="span"
                    data-component-content="%7B%22text%22%3A%22%2B7%20(923)%20123-45-67%22%7D"
                  >
                    +7 (923) 123-45-67
                  </span>
                </div>
                <div
                  data-pp-id="src/pages/Index.tsx:398:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="398"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D"
                  class="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-mail text-primary"
                    data-pp-id="src/pages/Index.tsx:399:18"
                    data-pp-name="Icon"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="399"
                    data-component-file="Index.tsx"
                    data-component-name="Icon"
                    data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span
                    data-pp-id="src/pages/Index.tsx:400:18"
                    data-pp-name="span"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="400"
                    data-component-file="Index.tsx"
                    data-component-name="span"
                    data-component-content="%7B%22text%22%3A%22maria.photo%40mail.ru%22%7D"
                  >
                    alex.ai.photo@gmail.com
                  </span>
                </div>
                <div
                  data-pp-id="src/pages/Index.tsx:402:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="402"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D"
                  class="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-instagram text-primary"
                    data-pp-id="src/pages/Index.tsx:403:18"
                    data-pp-name="Icon"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="403"
                    data-component-file="Index.tsx"
                    data-component-name="Icon"
                    data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span
                    data-pp-id="src/pages/Index.tsx:404:18"
                    data-pp-name="span"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="404"
                    data-component-file="Index.tsx"
                    data-component-name="span"
                    data-component-content="%7B%22text%22%3A%22%40maria_photo_nsk%22%7D"
                  >
                    @alex_ai_art
                  </span>
                </div>
                <div
                  data-pp-id="src/pages/Index.tsx:406:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="406"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D"
                  class="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-map-pin text-primary"
                    data-pp-id="src/pages/Index.tsx:407:18"
                    data-pp-name="Icon"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="407"
                    data-component-file="Index.tsx"
                    data-component-name="Icon"
                    data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span
                    data-pp-id="src/pages/Index.tsx:408:18"
                    data-pp-name="span"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="408"
                    data-component-file="Index.tsx"
                    data-component-name="span"
                    data-component-content="%7B%22text%22%3A%22%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%22%7D"
                  >
                    Онлайн
                  </span>
                </div>
              </div>
            </div>
            <div
              data-pp-id="src/pages/Index.tsx:412:12"
              data-pp-name="Card"
              data-component-path="src/pages/Index.tsx"
              data-component-line="412"
              data-component-file="Index.tsx"
              data-component-name="Card"
              data-component-content="%7B%7D"
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div
                data-pp-id="src/pages/Index.tsx:413:14"
                data-pp-name="CardHeader"
                data-component-path="src/pages/Index.tsx"
                data-component-line="413"
                data-component-file="Index.tsx"
                data-component-name="CardHeader"
                data-component-content="%7B%7D"
                class="flex flex-col space-y-1.5 p-6"
              >
                <h3
                  data-pp-id="src/pages/Index.tsx:414:16"
                  data-pp-name="CardTitle"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="414"
                  data-component-file="Index.tsx"
                  data-component-name="CardTitle"
                  data-component-content="%7B%22text%22%3A%22%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0%22%2C%22className%22%3A%22text-xl%22%7D"
                  class="font-semibold tracking-tight text-xl"
                >
                  Мария
                </h3>
                <p
                  data-pp-id="src/pages/Index.tsx:415:16"
                  data-pp-name="CardDescription"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="415"
                  data-component-file="Index.tsx"
                  data-component-name="CardDescription"
                  data-component-content="%7B%22text%22%3A%22%D0%9D%D0%B5%D0%B9%D1%80%D0%BE%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%22%7D"
                  class="text-sm text-muted-foreground"
                >
                  Классический фотограф
                </p>
              </div>
              <div
                data-pp-id="src/pages/Index.tsx:417:14"
                data-pp-name="CardContent"
                data-component-path="src/pages/Index.tsx"
                data-component-line="417"
                data-component-file="Index.tsx"
                data-component-name="CardContent"
                data-component-content="%7B%22className%22%3A%22space-y-4%22%7D"
                class="p-6 pt-0 space-y-4"
              >
                <div
                  data-pp-id="src/pages/Index.tsx:418:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="418"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D"
                  class="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-phone text-primary"
                    data-pp-id="src/pages/Index.tsx:419:18"
                    data-pp-name="Icon"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="419"
                    data-component-file="Index.tsx"
                    data-component-name="Icon"
                    data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span
                    data-pp-id="src/pages/Index.tsx:420:18"
                    data-pp-name="span"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="420"
                    data-component-file="Index.tsx"
                    data-component-name="span"
                    data-component-content="%7B%22text%22%3A%22%2B7%20(913)%20987-65-43%22%7D"
                  >
                    +7 (913) 987-65-43
                  </span>
                </div>
                <div
                  data-pp-id="src/pages/Index.tsx:422:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="422"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D"
                  class="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-mail text-primary"
                    data-pp-id="src/pages/Index.tsx:423:18"
                    data-pp-name="Icon"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="423"
                    data-component-file="Index.tsx"
                    data-component-name="Icon"
                    data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span
                    data-pp-id="src/pages/Index.tsx:424:18"
                    data-pp-name="span"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="424"
                    data-component-file="Index.tsx"
                    data-component-name="span"
                    data-component-content="%7B%22text%22%3A%22alex.ai.photo%40gmail.com%22%7D"
                  >
                    maria.photo@mail.ru
                  </span>
                </div>
                <div
                  data-pp-id="src/pages/Index.tsx:426:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="426"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D"
                  class="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-instagram text-primary"
                    data-pp-id="src/pages/Index.tsx:427:18"
                    data-pp-name="Icon"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="427"
                    data-component-file="Index.tsx"
                    data-component-name="Icon"
                    data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span
                    data-pp-id="src/pages/Index.tsx:428:18"
                    data-pp-name="span"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="428"
                    data-component-file="Index.tsx"
                    data-component-name="span"
                    data-component-content="%7B%22text%22%3A%22%40alex_ai_art%22%7D"
                  >
                    @maria_photo_nsk
                  </span>
                </div>
                <div
                  data-pp-id="src/pages/Index.tsx:430:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="430"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D"
                  class="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-map-pin text-primary"
                    data-pp-id="src/pages/Index.tsx:431:18"
                    data-pp-name="Icon"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="431"
                    data-component-file="Index.tsx"
                    data-component-name="Icon"
                    data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span
                    data-pp-id="src/pages/Index.tsx:432:18"
                    data-pp-name="span"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="432"
                    data-component-file="Index.tsx"
                    data-component-name="span"
                    data-component-content="%7B%22text%22%3A%22%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%22%7D"
                  >
                    Новосибирск
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-pp-id="src/pages/Index.tsx:437:10"
            data-pp-name="div"
            data-component-path="src/pages/Index.tsx"
            data-component-line="437"
            data-component-file="Index.tsx"
            data-component-name="div"
            data-component-content="%7B%22className%22%3A%22text-center%20mt-12%22%7D"
            class="text-center mt-12"
          >
            <button
              data-pp-id="src/pages/Index.tsx:438:12"
              data-pp-name="Button"
              data-component-path="src/pages/Index.tsx"
              data-component-line="438"
              data-component-file="Index.tsx"
              data-component-name="Button"
              data-component-content="%7B%22text%22%3A%22%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%81%D1%8A%D0%B5%D0%BC%D0%BA%D1%83%22%2C%22className%22%3A%22bg-primary%20hover%3Abg-primary%2F90%22%7D"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-11 rounded-md px-8 bg-primary hover:bg-primary/90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-message-circle mr-2"
                data-pp-id="src/pages/Index.tsx:439:14"
                data-pp-name="Icon"
                data-component-path="src/pages/Index.tsx"
                data-component-line="439"
                data-component-file="Index.tsx"
                data-component-name="Icon"
                data-component-content="%7B%22className%22%3A%22mr-2%22%7D"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
              </svg>
              Записаться на съемку
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Alexandra & Maria Photography. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
