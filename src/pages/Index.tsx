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
                    : section === "services"
                      ? "Прайс"
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
            Сравнение форматов съёмки
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
                        Работа полностью онлайн
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
                        Уникальные, креативные AI-эффекты
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
                        Доступная цена
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
                        Требуется исходное фото хорошего качества
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
                        Сходство с оригиналом фото до 85-95%
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
                        Живые эмоции и естественные снимки
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
                        Реалистичный результат без искажений
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
                        Живая атмосфера и уникальность кадров
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
                        Только для жителей Новосибирска
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
                        Длительная обработка (5-7 дней)
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
                      Пробный пакет (3 фото, 1 образ)
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
                      1 000 ₽
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
                      Стандарт (10 фото, 2-3 образа)
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
                      2 500 ₽
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
                      Премиум (20 фото, 5 образов)
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
                      3 500 ₽
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
                      Готовность 1 день
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
                      Мини-съёмка (30 мин, 7 обработанных фото)
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
                      2 500 ₽
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
                      Стандарт (1 час, 15 обработанных фото)
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
                      4 000 ₽
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
                      Премиум (2 часа, 30 обработанных фото)
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
                      7 500 ₽
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
                      Обработка 5-7 дней
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
                      Все исходные фото в день съемки
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
<section data-pp-id="src/pages/Index.tsx:610:6" data-pp-name="section" data-component-path="src/pages/Index.tsx" data-component-line="610" data-component-file="Index.tsx" data-component-name="section" data-component-content="%7B%22className%22%3A%22py-20%20px-6%20bg-white%2F50%22%7D" id="payment" class="py-20 px-6 bg-white/50"><div data-pp-id="src/pages/Index.tsx:611:8" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="611" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22container%20mx-auto%20max-w-4xl%22%7D" class="container mx-auto max-w-4xl"><h2 data-pp-id="src/pages/Index.tsx:612:10" data-pp-name="h2" data-component-path="src/pages/Index.tsx" data-component-line="612" data-component-file="Index.tsx" data-component-name="h2" data-component-content="%7B%22text%22%3A%22%D0%9E%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B0%22%2C%22className%22%3A%22text-4xl%20md%3Atext-5xl%20font-bold%20text-center%20mb-4%20bg-gradient-to-r%20from-purple-600%20to-black%20bg-clip-text%20text-transparent%22%7D" class="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent">Онлайн оплата</h2><p data-pp-id="src/pages/Index.tsx:615:10" data-pp-name="p" data-component-path="src/pages/Index.tsx" data-component-line="615" data-component-file="Index.tsx" data-component-name="p" data-component-content="%7B%22text%22%3A%22%D0%9E%D0%BF%D0%BB%D0%B0%D1%87%D0%B8%D0%B2%D0%B0%D0%B9%D1%82%D0%B5%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8%20%D1%83%D0%B4%D0%BE%D0%B1%D0%BD%D1%8B%D0%BC%20%D0%B4%D0%BB%D1%8F%20%D0%B2%D0%B0%D1%81%20%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%BE%D0%BC%22%2C%22className%22%3A%22text-center%20text-gray-600%20mb-12%20text-lg%22%7D" class="text-center text-gray-600 mb-12 text-lg">Оплачивайте услуги удобным для вас способом</p><div data-pp-id="src/pages/Index.tsx:619:10" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="619" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-8%20mb-12%22%7D" class="grid md:grid-cols-2 gap-8 mb-12"><div data-pp-id="src/pages/Index.tsx:620:12" data-pp-name="Card" data-component-path="src/pages/Index.tsx" data-component-line="620" data-component-file="Index.tsx" data-component-name="Card" data-component-content="%7B%22className%22%3A%22border-2%20border-purple-200%22%7D" class="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-purple-200"><div data-pp-id="src/pages/Index.tsx:621:14" data-pp-name="CardHeader" data-component-path="src/pages/Index.tsx" data-component-line="621" data-component-file="Index.tsx" data-component-name="CardHeader" data-component-content="%7B%7D" class="flex flex-col space-y-1.5 p-6"><h3 data-pp-id="src/pages/Index.tsx:622:16" data-pp-name="CardTitle" data-component-path="src/pages/Index.tsx" data-component-line="622" data-component-file="Index.tsx" data-component-name="CardTitle" data-component-content="%7B%22text%22%3A%22%D0%A1%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D1%8B%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D1%8B%22%2C%22className%22%3A%22text-2xl%20flex%20items-center%20gap-2%22%7D" class="font-semibold tracking-tight text-2xl flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card text-primary" data-pp-id="src/pages/Index.tsx:623:18" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="623" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22text-primary%22%7D"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>Способы оплаты</h3></div><div data-pp-id="src/pages/Index.tsx:627:14" data-pp-name="CardContent" data-component-path="src/pages/Index.tsx" data-component-line="627" data-component-file="Index.tsx" data-component-name="CardContent" data-component-content="%7B%22className%22%3A%22space-y-4%22%7D" class="p-6 pt-0 space-y-4"><div data-pp-id="src/pages/Index.tsx:628:16" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="628" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%20p-3%20bg-gray-50%20rounded-lg%22%7D" class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card text-primary" data-pp-id="src/pages/Index.tsx:629:18" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="629" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22text-primary%22%7D"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg><div data-pp-id="src/pages/Index.tsx:630:18" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="630" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%7D"><div data-pp-id="src/pages/Index.tsx:631:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="631" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22text%22%3A%22%D0%91%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BA%D0%B0%D1%80%D1%82%D0%B0%22%2C%22className%22%3A%22font-semibold%22%7D" class="font-semibold">Банковская карта</div><div data-pp-id="src/pages/Index.tsx:632:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="632" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22text%22%3A%22Visa%2C%20MasterCard%2C%20%D0%9C%D0%98%D0%A0%22%2C%22className%22%3A%22text-sm%20text-gray-600%22%7D" class="text-sm text-gray-600">Visa, MasterCard, МИР</div></div></div><div data-pp-id="src/pages/Index.tsx:635:16" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="635" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%20p-3%20bg-gray-50%20rounded-lg%22%7D" class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone text-primary" data-pp-id="src/pages/Index.tsx:636:18" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="636" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22text-primary%22%7D"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg><div data-pp-id="src/pages/Index.tsx:637:18" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="637" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%7D"><div data-pp-id="src/pages/Index.tsx:638:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="638" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22text%22%3A%22%D0%A1%D0%91%D0%9F%22%2C%22className%22%3A%22font-semibold%22%7D" class="font-semibold">СБП</div><div data-pp-id="src/pages/Index.tsx:639:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="639" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22text%22%3A%22%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20%D0%B1%D1%8B%D1%81%D1%82%D1%80%D1%8B%D1%85%20%D0%BF%D0%BB%D0%B0%D1%82%D0%B5%D0%B6%D0%B5%D0%B9%22%2C%22className%22%3A%22text-sm%20text-gray-600%22%7D" class="text-sm text-gray-600">Система быстрых платежей</div></div></div><div data-pp-id="src/pages/Index.tsx:642:16" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="642" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%20p-3%20bg-gray-50%20rounded-lg%22%7D" class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet text-primary" data-pp-id="src/pages/Index.tsx:643:18" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="643" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22text-primary%22%7D"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg><div data-pp-id="src/pages/Index.tsx:644:18" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="644" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%7D"><div data-pp-id="src/pages/Index.tsx:645:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="645" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22text%22%3A%22%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%BA%D0%BE%D1%88%D0%B5%D0%BB%D1%8C%D0%BA%D0%B8%22%2C%22className%22%3A%22font-semibold%22%7D" class="font-semibold">Электронные кошельки</div><div data-pp-id="src/pages/Index.tsx:646:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="646" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22text%22%3A%22%D0%AEMoney%2C%20QIWI%22%2C%22className%22%3A%22text-sm%20text-gray-600%22%7D" class="text-sm text-gray-600">ЮMoney, QIWI</div></div></div><div data-pp-id="src/pages/Index.tsx:649:16" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="649" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%20p-3%20bg-gray-50%20rounded-lg%22%7D" class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building text-primary" data-pp-id="src/pages/Index.tsx:650:18" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="650" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22text-primary%22%7D"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg><div data-pp-id="src/pages/Index.tsx:651:18" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="651" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%7D"><div data-pp-id="src/pages/Index.tsx:652:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="652" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22text%22%3A%22%D0%91%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%22%2C%22className%22%3A%22font-semibold%22%7D" class="font-semibold">Банковский перевод</div><div data-pp-id="src/pages/Index.tsx:653:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="653" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22text%22%3A%22%D0%9F%D0%BE%20%D1%80%D0%B5%D0%BA%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D0%B0%D0%BC%22%2C%22className%22%3A%22text-sm%20text-gray-600%22%7D" class="text-sm text-gray-600">По реквизитам</div></div></div></div></div><div data-pp-id="src/pages/Index.tsx:659:12" data-pp-name="Card" data-component-path="src/pages/Index.tsx" data-component-line="659" data-component-file="Index.tsx" data-component-name="Card" data-component-content="%7B%22className%22%3A%22border-2%20border-purple-200%22%7D" class="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-purple-200"><div data-pp-id="src/pages/Index.tsx:660:14" data-pp-name="CardHeader" data-component-path="src/pages/Index.tsx" data-component-line="660" data-component-file="Index.tsx" data-component-name="CardHeader" data-component-content="%7B%7D" class="flex flex-col space-y-1.5 p-6"><h3 data-pp-id="src/pages/Index.tsx:661:16" data-pp-name="CardTitle" data-component-path="src/pages/Index.tsx" data-component-line="661" data-component-file="Index.tsx" data-component-name="CardTitle" data-component-content="%7B%22text%22%3A%22%D0%91%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D1%8C%22%2C%22className%22%3A%22text-2xl%20flex%20items-center%20gap-2%22%7D" class="font-semibold tracking-tight text-2xl flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check text-primary" data-pp-id="src/pages/Index.tsx:662:18" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="662" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22text-primary%22%7D"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>Безопасность</h3></div><div data-pp-id="src/pages/Index.tsx:666:14" data-pp-name="CardContent" data-component-path="src/pages/Index.tsx" data-component-line="666" data-component-file="Index.tsx" data-component-name="CardContent" data-component-content="%7B%22className%22%3A%22space-y-4%22%7D" class="p-6 pt-0 space-y-4"><div data-pp-id="src/pages/Index.tsx:667:16" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="667" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-3%22%7D" class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock text-green-500 mt-1" data-pp-id="src/pages/Index.tsx:668:18" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="668" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22text-green-500%20mt-1%22%7D"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg><div data-pp-id="src/pages/Index.tsx:669:18" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="669" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%7D"><div data-pp-id="src/pages/Index.tsx:670:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="670" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22text%22%3A%22%D0%97%D0%B0%D1%89%D0%B8%D1%89%D1%91%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%BF%D0%BB%D0%B0%D1%82%D0%B5%D0%B6%D0%B8%22%2C%22className%22%3A%22font-semibold%20mb-1%22%7D" class="font-semibold mb-1">Защищённые платежи</div><div data-pp-id="src/pages/Index.tsx:671:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="671" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22text%22%3A%22%D0%92%D1%81%D0%B5%20%D1%82%D1%80%D0%B0%D0%BD%D0%B7%D0%B0%D0%BA%D1%86%D0%B8%D0%B8%20%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B4%D1%8F%D1%82%20%D1%87%D0%B5%D1%80%D0%B5%D0%B7%20%D0%B7%D0%B0%D1%89%D0%B8%D1%89%D1%91%D0%BD%D0%BD%D0%BE%D0%B5%20%D1%81%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20SSL%22%2C%22className%22%3A%22text-sm%20text-gray-600%22%7D" class="text-sm text-gray-600">Все транзакции проходят через защищённое соединение SSL</div></div></div><div data-pp-id="src/pages/Index.tsx:674:16" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="674" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-3%22%7D" class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-check text-green-500 mt-1" data-pp-id="src/pages/Index.tsx:675:18" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="675" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22text-green-500%20mt-1%22%7D"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg><div data-pp-id="src/pages/Index.tsx:676:18" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="676" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%7D"><div data-pp-id="src/pages/Index.tsx:677:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="677" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22text%22%3A%22%D0%94%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%20%D0%B8%20%D1%87%D0%B5%D0%BA%22%2C%22className%22%3A%22font-semibold%20mb-1%22%7D" class="font-semibold mb-1">Договор и чек</div><div data-pp-id="src/pages/Index.tsx:678:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="678" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22text%22%3A%22%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D1%8B%20%D0%B2%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B0%D0%B5%D1%82%D0%B5%20%D0%B4%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%20%D0%B8%20%D1%84%D0%B8%D1%81%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D1%87%D0%B5%D0%BA%22%2C%22className%22%3A%22text-sm%20text-gray-600%22%7D" class="text-sm text-gray-600">После оплаты вы получаете договор и фискальный чек</div></div></div><div data-pp-id="src/pages/Index.tsx:681:16" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="681" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-3%22%7D" class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-undo2 text-green-500 mt-1" data-pp-id="src/pages/Index.tsx:682:18" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="682" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22text-green-500%20mt-1%22%7D"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></svg><div data-pp-id="src/pages/Index.tsx:683:18" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="683" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%7D"><div data-pp-id="src/pages/Index.tsx:684:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="684" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22text%22%3A%22%D0%92%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%82%20%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%22%2C%22className%22%3A%22font-semibold%20mb-1%22%7D" class="font-semibold mb-1">Возврат средств</div><div data-pp-id="src/pages/Index.tsx:685:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="685" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22text%22%3A%22%D0%92%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D1%83%20%D0%B2%20%D1%82%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%2014%20%D0%B4%D0%BD%D0%B5%D0%B9%22%2C%22className%22%3A%22text-sm%20text-gray-600%22%7D" class="text-sm text-gray-600">Возможность вернуть предоплату в течение 14 дней</div></div></div><div data-orientation="horizontal" role="none" data-pp-id="src/pages/Index.tsx:688:16" data-pp-name="Separator" data-component-path="src/pages/Index.tsx" data-component-line="688" data-component-file="Index.tsx" data-component-name="Separator" data-component-content="%7B%22className%22%3A%22my-4%22%7D" class="shrink-0 bg-border h-[1px] w-full my-4"></div><div data-pp-id="src/pages/Index.tsx:689:16" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="689" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22bg-purple-50%20p-4%20rounded-lg%22%7D" class="bg-purple-50 p-4 rounded-lg"><p data-pp-id="src/pages/Index.tsx:690:18" data-pp-name="p" data-component-path="src/pages/Index.tsx" data-component-line="690" data-component-file="Index.tsx" data-component-name="p" data-component-content="%7B%22text%22%3A%22%D0%94%D0%BB%D1%8F%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D1%8B%20%D1%81%D0%B2%D1%8F%D0%B6%D0%B8%D1%82%D0%B5%D1%81%D1%8C%20%D1%81%20%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%BE%D0%BC%20%D1%83%D0%B4%D0%BE%D0%B1%D0%BD%D1%8B%D0%BC%20%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%BE%D0%BC.%20%D0%A1%D1%81%D1%8B%D0%BB%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D1%83%20%D0%B1%D1%83%D0%B4%D0%B5%D1%82%20%D0%B2%D1%8B%D1%81%D0%BB%D0%B0%D0%BD%D0%B0%20%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%20%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B4%D0%B5%D1%82%D0%B0%D0%BB%D0%B5%D0%B9%20%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B8.%22%2C%22className%22%3A%22text-sm%20text-gray-700%22%7D" class="text-sm text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info inline mr-1" data-pp-id="src/pages/Index.tsx:691:20" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="691" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22inline%20mr-1%22%7D"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>Для оплаты свяжитесь с фотографом удобным способом. Ссылка на оплату будет выслана после согласования деталей съёмки.</p></div></div></div></div><div data-pp-id="src/pages/Index.tsx:699:10" data-pp-name="Card" data-component-path="src/pages/Index.tsx" data-component-line="699" data-component-file="Index.tsx" data-component-name="Card" data-component-content="%7B%22className%22%3A%22border-2%20border-purple-200%22%7D" class="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-purple-200"><div data-pp-id="src/pages/Index.tsx:700:12" data-pp-name="CardHeader" data-component-path="src/pages/Index.tsx" data-component-line="700" data-component-file="Index.tsx" data-component-name="CardHeader" data-component-content="%7B%7D" class="flex flex-col space-y-1.5 p-6"><h3 data-pp-id="src/pages/Index.tsx:701:14" data-pp-name="CardTitle" data-component-path="src/pages/Index.tsx" data-component-line="701" data-component-file="Index.tsx" data-component-name="CardTitle" data-component-content="%7B%22text%22%3A%22%D0%A3%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D1%8B%22%2C%22className%22%3A%22text-xl%22%7D" class="font-semibold tracking-tight text-xl">Условия оплаты</h3></div><div data-pp-id="src/pages/Index.tsx:703:12" data-pp-name="CardContent" data-component-path="src/pages/Index.tsx" data-component-line="703" data-component-file="Index.tsx" data-component-name="CardContent" data-component-content="%7B%22className%22%3A%22space-y-3%20text-gray-600%22%7D" class="p-6 pt-0 space-y-3 text-gray-600"><div data-pp-id="src/pages/Index.tsx:704:14" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="704" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D" class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1" data-pp-id="src/pages/Index.tsx:705:16" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="705" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22text-primary%20mt-1%22%7D"><path d="M20 6 9 17l-5-5"></path></svg><span data-pp-id="src/pages/Index.tsx:706:16" data-pp-name="span" data-component-path="src/pages/Index.tsx" data-component-line="706" data-component-file="Index.tsx" data-component-name="span" data-component-content="%7B%22text%22%3A%22%D0%9F%D1%80%D0%B5%D0%B4%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B0%2030%25%20%D0%B4%D0%BB%D1%8F%20%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B4%D0%B0%D1%82%D1%8B%20%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B8%22%7D">Предоплата 30% для бронирования даты съёмки</span></div><div data-pp-id="src/pages/Index.tsx:708:14" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="708" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D" class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1" data-pp-id="src/pages/Index.tsx:709:16" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="709" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22text-primary%20mt-1%22%7D"><path d="M20 6 9 17l-5-5"></path></svg><span data-pp-id="src/pages/Index.tsx:710:16" data-pp-name="span" data-component-path="src/pages/Index.tsx" data-component-line="710" data-component-file="Index.tsx" data-component-name="span" data-component-content="%7B%22text%22%3A%22%D0%9E%D0%BA%D0%BE%D0%BD%D1%87%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D1%80%D0%B0%D1%81%D1%87%D1%91%D1%82%20%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D1%8B%D1%85%20%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B9%22%7D">Окончательный расчёт после получения готовых фотографий</span></div><div data-pp-id="src/pages/Index.tsx:712:14" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="712" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D" class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1" data-pp-id="src/pages/Index.tsx:713:16" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="713" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22text-primary%20mt-1%22%7D"><path d="M20 6 9 17l-5-5"></path></svg><span data-pp-id="src/pages/Index.tsx:714:16" data-pp-name="span" data-component-path="src/pages/Index.tsx" data-component-line="714" data-component-file="Index.tsx" data-component-name="span" data-component-content="%7B%22text%22%3A%22%D0%92%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%B0%20%D1%80%D0%B0%D1%81%D1%81%D1%80%D0%BE%D1%87%D0%BA%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D1%85%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%BE%D0%B2%20(%D1%81%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D1%8B%2C%20%D0%BA%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D1%8B)%22%7D">Возможна рассрочка для крупных заказов (свадьбы, корпоративы)</span></div><div data-pp-id="src/pages/Index.tsx:716:14" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="716" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D" class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1" data-pp-id="src/pages/Index.tsx:717:16" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="717" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22text-primary%20mt-1%22%7D"><path d="M20 6 9 17l-5-5"></path></svg><span data-pp-id="src/pages/Index.tsx:718:16" data-pp-name="span" data-component-path="src/pages/Index.tsx" data-component-line="718" data-component-file="Index.tsx" data-component-name="span" data-component-content="%7B%22text%22%3A%22%D0%9F%D1%80%D0%B8%20%D0%BE%D1%82%D0%BC%D0%B5%D0%BD%D0%B5%20%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B8%20%D0%BC%D0%B5%D0%BD%D0%B5%D0%B5%20%D1%87%D0%B5%D0%BC%20%D0%B7%D0%B0%2048%20%D1%87%D0%B0%D1%81%D0%BE%D0%B2%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B0%20%D0%BD%D0%B5%20%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D1%82%D1%81%D1%8F%22%7D">При отмене съёмки менее чем за 48 часов предоплата не возвращается</span></div></div></div></div></section>
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
<div data-pp-id="src/pages/Index.tsx:543:10" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="543" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22max-w-2xl%20mx-auto%22%7D" class="max-w-2xl mx-auto"><h2 data-pp-id="src/pages/Index.tsx:544:12" data-pp-name="h2" data-component-path="src/pages/Index.tsx" data-component-line="544" data-component-file="Index.tsx" data-component-name="h2" data-component-content="%7B%22text%22%3A%22%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D1%83%22%2C%22className%22%3A%22text-4xl%20font-heading%20font-bold%20text-center%20mb-4%22%7D" class="text-4xl font-heading font-bold text-center mb-4">Записаться на съёмку</h2><p data-pp-id="src/pages/Index.tsx:545:12" data-pp-name="p" data-component-path="src/pages/Index.tsx" data-component-line="545" data-component-file="Index.tsx" data-component-name="p" data-component-content="%7B%22text%22%3A%22%D0%97%D0%B0%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%20%D1%84%D0%BE%D1%80%D0%BC%D1%83%2C%20%D0%B8%20%D0%BC%D1%8B%20%D1%81%D0%B2%D1%8F%D0%B6%D0%B5%D0%BC%D1%81%D1%8F%20%D1%81%20%D0%B2%D0%B0%D0%BC%D0%B8%20%D0%B2%20%D0%B1%D0%BB%D0%B8%D0%B6%D0%B0%D0%B9%D1%88%D0%B5%D0%B5%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%22%2C%22className%22%3A%22text-center%20text-muted-foreground%20mb-8%22%7D" class="text-center text-muted-foreground mb-8">Заполните форму, и мы свяжемся с вами в ближайшее время</p><div data-pp-id="src/pages/Index.tsx:549:12" data-pp-name="Card" data-component-path="src/pages/Index.tsx" data-component-line="549" data-component-file="Index.tsx" data-component-name="Card" data-component-content="%7B%7D" class="rounded-lg border bg-card text-card-foreground shadow-sm"><div data-pp-id="src/pages/Index.tsx:550:14" data-pp-name="CardContent" data-component-path="src/pages/Index.tsx" data-component-line="550" data-component-file="Index.tsx" data-component-name="CardContent" data-component-content="%7B%22className%22%3A%22pt-6%22%7D" class="p-6 pt-6"><form data-pp-id="src/pages/Index.tsx:551:16" data-pp-name="form" data-component-path="src/pages/Index.tsx" data-component-line="551" data-component-file="Index.tsx" data-component-name="form" data-component-content="%7B%22className%22%3A%22space-y-6%22%7D" class="space-y-6"><div data-pp-id="src/pages/Index.tsx:552:18" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="552" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22space-y-2%22%7D" class="space-y-2"><label data-pp-id="src/pages/Index.tsx:553:20" data-pp-name="Label" data-component-path="src/pages/Index.tsx" data-component-line="553" data-component-file="Index.tsx" data-component-name="Label" data-component-content="%7B%22text%22%3A%22%D0%92%D0%B0%D1%88%D0%B5%20%D0%B8%D0%BC%D1%8F%22%7D" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="name">Ваше имя</label><input data-pp-id="src/pages/Index.tsx:554:20" data-pp-name="Input" data-component-path="src/pages/Index.tsx" data-component-line="554" data-component-file="Index.tsx" data-component-name="Input" data-component-content="%7B%22placeholder%22%3A%22%D0%92%D0%B2%D0%B5%D0%B4%D0%B8%D1%82%D0%B5%20%D0%B2%D0%B0%D1%88%D0%B5%20%D0%B8%D0%BC%D1%8F%22%7D" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" id="name" placeholder="Введите ваше имя"></div><div data-pp-id="src/pages/Index.tsx:557:18" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="557" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22space-y-2%22%7D" class="space-y-2"><label data-pp-id="src/pages/Index.tsx:558:20" data-pp-name="Label" data-component-path="src/pages/Index.tsx" data-component-line="558" data-component-file="Index.tsx" data-component-name="Label" data-component-content="%7B%22text%22%3A%22%D0%A2%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%22%7D" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="phone">Телефон</label><input data-pp-id="src/pages/Index.tsx:559:20" data-pp-name="Input" data-component-path="src/pages/Index.tsx" data-component-line="559" data-component-file="Index.tsx" data-component-name="Input" data-component-content="%7B%22placeholder%22%3A%22%2B7%20(___)%20___-__-__%22%7D" type="tel" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" id="phone" placeholder="+7 (___) ___-__-__"></div><div data-pp-id="src/pages/Index.tsx:562:18" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="562" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22space-y-2%22%7D" class="space-y-2"><label data-pp-id="src/pages/Index.tsx:563:20" data-pp-name="Label" data-component-path="src/pages/Index.tsx" data-component-line="563" data-component-file="Index.tsx" data-component-name="Label" data-component-content="%7B%22text%22%3A%22Email%22%7D" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label><input data-pp-id="src/pages/Index.tsx:564:20" data-pp-name="Input" data-component-path="src/pages/Index.tsx" data-component-line="564" data-component-file="Index.tsx" data-component-name="Input" data-component-content="%7B%22placeholder%22%3A%22your%40email.com%22%7D" type="email" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" id="email" placeholder="your@email.com"></div><div data-pp-id="src/pages/Index.tsx:567:18" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="567" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22space-y-2%22%7D" class="space-y-2"><label data-pp-id="src/pages/Index.tsx:568:20" data-pp-name="Label" data-component-path="src/pages/Index.tsx" data-component-line="568" data-component-file="Index.tsx" data-component-name="Label" data-component-content="%7B%22text%22%3A%22%D0%92%D1%8B%D0%B1%D0%B5%D1%80%D0%B8%D1%82%D0%B5%20%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B0%22%7D" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Выберите фотографа</label><div role="radiogroup" aria-required="false" dir="ltr" data-pp-id="src/pages/Index.tsx:569:20" data-pp-name="RadioGroup" data-component-path="src/pages/Index.tsx" data-component-line="569" data-component-file="Index.tsx" data-component-name="RadioGroup" data-component-content="%7B%22className%22%3A%22grid%20grid-cols-2%20gap-4%22%7D" class="grid grid-cols-2 gap-4" tabindex="0" style="outline: none;"><div data-pp-id="src/pages/Index.tsx:574:22" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="574" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%7D" class="border-2 rounded-lg p-4 cursor-pointer transition-all border-muted"><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="ai" data-pp-id="src/pages/Index.tsx:575:24" data-pp-name="RadioGroupItem" data-component-path="src/pages/Index.tsx" data-component-line="575" data-component-file="Index.tsx" data-component-name="RadioGroupItem" data-component-content="%7B%22className%22%3A%22sr-only%22%7D" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only" id="ai" tabindex="-1" data-radix-collection-item=""></button><input type="radio" aria-hidden="true" tabindex="-1" value="ai" style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"><label data-pp-id="src/pages/Index.tsx:576:24" data-pp-name="Label" data-component-path="src/pages/Index.tsx" data-component-line="576" data-component-file="Index.tsx" data-component-name="Label" data-component-content="%7B%22className%22%3A%22cursor-pointer%22%7D" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer" for="ai"><div data-pp-id="src/pages/Index.tsx:577:26" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="577" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22text-center%22%7D" class="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles mx-auto mb-2 text-primary" data-pp-id="src/pages/Index.tsx:578:28" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="578" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22mx-auto%20mb-2%20text-primary%22%7D"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg><p data-pp-id="src/pages/Index.tsx:579:28" data-pp-name="p" data-component-path="src/pages/Index.tsx" data-component-line="579" data-component-file="Index.tsx" data-component-name="p" data-component-content="%7B%22text%22%3A%22%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0%22%2C%22className%22%3A%22font-semibold%22%7D" class="font-semibold">Александра</p><p data-pp-id="src/pages/Index.tsx:580:28" data-pp-name="p" data-component-path="src/pages/Index.tsx" data-component-line="580" data-component-file="Index.tsx" data-component-name="p" data-component-content="%7B%22text%22%3A%22%D0%9D%D0%B5%D0%B9%D1%80%D0%BE%D1%84%D0%BE%D1%82%D0%BE%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%22%7D" class="text-xs text-muted-foreground">Нейрофото</p></div></label></div><div data-pp-id="src/pages/Index.tsx:584:22" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="584" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%7D" class="border-2 rounded-lg p-4 cursor-pointer transition-all border-muted"><button type="button" role="radio" aria-checked="false" data-state="unchecked" value="classic" data-pp-id="src/pages/Index.tsx:585:24" data-pp-name="RadioGroupItem" data-component-path="src/pages/Index.tsx" data-component-line="585" data-component-file="Index.tsx" data-component-name="RadioGroupItem" data-component-content="%7B%22className%22%3A%22sr-only%22%7D" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only" id="classic" tabindex="-1" data-radix-collection-item=""></button><input type="radio" aria-hidden="true" tabindex="-1" value="classic" style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"><label data-pp-id="src/pages/Index.tsx:586:24" data-pp-name="Label" data-component-path="src/pages/Index.tsx" data-component-line="586" data-component-file="Index.tsx" data-component-name="Label" data-component-content="%7B%22className%22%3A%22cursor-pointer%22%7D" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer" for="classic"><div data-pp-id="src/pages/Index.tsx:587:26" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="587" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22text-center%22%7D" class="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera mx-auto mb-2 text-secondary" data-pp-id="src/pages/Index.tsx:588:28" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="588" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22mx-auto%20mb-2%20text-secondary%22%7D"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg><p data-pp-id="src/pages/Index.tsx:589:28" data-pp-name="p" data-component-path="src/pages/Index.tsx" data-component-line="589" data-component-file="Index.tsx" data-component-name="p" data-component-content="%7B%22text%22%3A%22%D0%9C%D0%B0%D1%80%D0%B8%D1%8F%22%2C%22className%22%3A%22font-semibold%22%7D" class="font-semibold">Мария</p><p data-pp-id="src/pages/Index.tsx:590:28" data-pp-name="p" data-component-path="src/pages/Index.tsx" data-component-line="590" data-component-file="Index.tsx" data-component-name="p" data-component-content="%7B%22text%22%3A%22%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%22%7D" class="text-xs text-muted-foreground">Классика</p></div></label></div></div></div><div data-pp-id="src/pages/Index.tsx:597:18" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="597" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-4%22%7D" class="grid md:grid-cols-2 gap-4"><div data-pp-id="src/pages/Index.tsx:598:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="598" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22space-y-2%22%7D" class="space-y-2"><label data-pp-id="src/pages/Index.tsx:599:22" data-pp-name="Label" data-component-path="src/pages/Index.tsx" data-component-line="599" data-component-file="Index.tsx" data-component-name="Label" data-component-content="%7B%22text%22%3A%22%D0%94%D0%B0%D1%82%D0%B0%20%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B8%22%7D" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Дата съёмки</label><button data-pp-id="src/pages/Index.tsx:602:26" data-pp-name="Button" data-component-path="src/pages/Index.tsx" data-component-line="602" data-component-file="Index.tsx" data-component-name="Button" data-component-content="%7B%22className%22%3A%22w-full%20justify-start%20text-left%22%7D" class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start text-left" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r8:" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar mr-2" data-pp-id="src/pages/Index.tsx:603:28" data-pp-name="Icon" data-component-path="src/pages/Index.tsx" data-component-line="603" data-component-file="Index.tsx" data-component-name="Icon" data-component-content="%7B%22className%22%3A%22mr-2%22%7D"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>Выберите дату</button></div><div data-pp-id="src/pages/Index.tsx:619:20" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="619" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22space-y-2%22%7D" class="space-y-2"><label data-pp-id="src/pages/Index.tsx:620:22" data-pp-name="Label" data-component-path="src/pages/Index.tsx" data-component-line="620" data-component-file="Index.tsx" data-component-name="Label" data-component-content="%7B%22text%22%3A%22%D0%92%D1%80%D0%B5%D0%BC%D1%8F%22%7D" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="time">Время</label><select data-pp-id="src/pages/Index.tsx:621:22" data-pp-name="select" data-component-path="src/pages/Index.tsx" data-component-line="621" data-component-file="Index.tsx" data-component-name="select" data-component-content="%7B%22className%22%3A%22w-full%20h-10%20px-3%20rounded-md%20border%20border-input%20bg-background%20text-sm%22%7D" id="time" class="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"><option data-pp-id="src/pages/Index.tsx:627:24" data-pp-name="option" data-component-path="src/pages/Index.tsx" data-component-line="627" data-component-file="Index.tsx" data-component-name="option" data-component-content="%7B%22text%22%3A%22%D0%92%D1%8B%D0%B1%D0%B5%D1%80%D0%B8%D1%82%D0%B5%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%22%7D" value="">Выберите время</option><option data-pp-id="src/pages/Index.tsx:629:26" data-pp-name="option" data-component-path="src/pages/Index.tsx" data-component-line="629" data-component-file="Index.tsx" data-component-name="option" data-component-content="%7B%7D" value="10:00">10:00</option><option data-pp-id="src/pages/Index.tsx:629:26" data-pp-name="option" data-component-path="src/pages/Index.tsx" data-component-line="629" data-component-file="Index.tsx" data-component-name="option" data-component-content="%7B%7D" value="12:00">12:00</option><option data-pp-id="src/pages/Index.tsx:629:26" data-pp-name="option" data-component-path="src/pages/Index.tsx" data-component-line="629" data-component-file="Index.tsx" data-component-name="option" data-component-content="%7B%7D" value="14:00">14:00</option><option data-pp-id="src/pages/Index.tsx:629:26" data-pp-name="option" data-component-path="src/pages/Index.tsx" data-component-line="629" data-component-file="Index.tsx" data-component-name="option" data-component-content="%7B%7D" value="16:00">16:00</option><option data-pp-id="src/pages/Index.tsx:629:26" data-pp-name="option" data-component-path="src/pages/Index.tsx" data-component-line="629" data-component-file="Index.tsx" data-component-name="option" data-component-content="%7B%7D" value="18:00">18:00</option><option data-pp-id="src/pages/Index.tsx:629:26" data-pp-name="option" data-component-path="src/pages/Index.tsx" data-component-line="629" data-component-file="Index.tsx" data-component-name="option" data-component-content="%7B%7D" value="20:00">20:00</option></select></div></div><div data-pp-id="src/pages/Index.tsx:635:18" data-pp-name="div" data-component-path="src/pages/Index.tsx" data-component-line="635" data-component-file="Index.tsx" data-component-name="div" data-component-content="%7B%22className%22%3A%22space-y-2%22%7D" class="space-y-2"><label data-pp-id="src/pages/Index.tsx:636:20" data-pp-name="Label" data-component-path="src/pages/Index.tsx" data-component-line="636" data-component-file="Index.tsx" data-component-name="Label" data-component-content="%7B%22text%22%3A%22%D0%9A%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%B9%22%7D" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="message">Комментарий</label><textarea data-pp-id="src/pages/Index.tsx:637:20" data-pp-name="Textarea" data-component-path="src/pages/Index.tsx" data-component-line="637" data-component-file="Index.tsx" data-component-name="Textarea" data-component-content="%7B%22placeholder%22%3A%22%D0%A0%D0%B0%D1%81%D1%81%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%20%D0%BE%20%D0%B2%D0%B0%D1%88%D0%B8%D1%85%20%D0%BF%D0%BE%D0%B6%D0%B5%D0%BB%D0%B0%D0%BD%D0%B8%D1%8F%D1%85%20%D0%BA%20%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B5...%22%7D" class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="message" placeholder="Расскажите о ваших пожеланиях к съёмке..." rows="4"></textarea></div><button data-pp-id="src/pages/Index.tsx:644:18" data-pp-name="Button" data-component-path="src/pages/Index.tsx" data-component-line="644" data-component-file="Index.tsx" data-component-name="Button" data-component-content="%7B%22text%22%3A%22%D0%9E%D1%82%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D1%83%22%2C%22className%22%3A%22w-full%20bg-gradient-to-r%20from-primary%20to-secondary%20text-white%20font-semibold%20py-6%22%7D" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md px-8 w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-6" type="submit">Отправить заявку</button></form></div></div></div>
      <section
        data-pp-id="src/pages/Index.tsx:725:6"
        data-pp-name="section"
        data-component-path="src/pages/Index.tsx"
        data-component-line="725"
        data-component-file="Index.tsx"
        data-component-name="section"
        data-component-content="%7B%22className%22%3A%22py-20%20px-6%20bg-gradient-to-br%20from-purple-50%20to-white%22%7D"
        id="contacts"
        class="py-20 px-6 bg-gradient-to-br from-purple-50 to-white"
      >
        <div
          data-pp-id="src/pages/Index.tsx:726:8"
          data-pp-name="div"
          data-component-path="src/pages/Index.tsx"
          data-component-line="726"
          data-component-file="Index.tsx"
          data-component-name="div"
          data-component-content="%7B%22className%22%3A%22container%20mx-auto%20max-w-4xl%22%7D"
          class="container mx-auto max-w-4xl"
        >
          <h2
            data-pp-id="src/pages/Index.tsx:727:10"
            data-pp-name="h2"
            data-component-path="src/pages/Index.tsx"
            data-component-line="727"
            data-component-file="Index.tsx"
            data-component-name="h2"
            data-component-content="%7B%22text%22%3A%22%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B%22%2C%22className%22%3A%22text-4xl%20md%3Atext-5xl%20font-bold%20text-center%20mb-12%20bg-gradient-to-r%20from-purple-600%20to-black%20bg-clip-text%20text-transparent%22%7D"
            class="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent"
          >
            Контакты
          </h2>
          <div
            data-pp-id="src/pages/Index.tsx:730:10"
            data-pp-name="div"
            data-component-path="src/pages/Index.tsx"
            data-component-line="730"
            data-component-file="Index.tsx"
            data-component-name="div"
            data-component-content="%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-8%22%7D"
            class="grid md:grid-cols-2 gap-8"
          >
            <div
              data-pp-id="src/pages/Index.tsx:731:12"
              data-pp-name="Card"
              data-component-path="src/pages/Index.tsx"
              data-component-line="731"
              data-component-file="Index.tsx"
              data-component-name="Card"
              data-component-content="%7B%22className%22%3A%22border-2%20border-purple-200%22%7D"
              class="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-purple-200"
            >
              <div
                data-pp-id="src/pages/Index.tsx:732:14"
                data-pp-name="CardHeader"
                data-component-path="src/pages/Index.tsx"
                data-component-line="732"
                data-component-file="Index.tsx"
                data-component-name="CardHeader"
                data-component-content="%7B%7D"
                class="flex flex-col space-y-1.5 p-6"
              >
                <h3
                  data-pp-id="src/pages/Index.tsx:733:16"
                  data-pp-name="CardTitle"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="733"
                  data-component-file="Index.tsx"
                  data-component-name="CardTitle"
                  data-component-content="%7B%22text%22%3A%22%D0%9C%D0%B0%D1%80%D0%B8%D1%8F%22%2C%22className%22%3A%22text-2xl%22%7D"
                  class="font-semibold tracking-tight text-2xl"
                >
                  Мария
                </h3>
                <p
                  data-pp-id="src/pages/Index.tsx:734:16"
                  data-pp-name="CardDescription"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="734"
                  data-component-file="Index.tsx"
                  data-component-name="CardDescription"
                  data-component-content="%7B%22text%22%3A%22%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F%22%7D"
                  class="text-sm text-muted-foreground"
                >
                  Классическая фотография
                </p>
              </div>
              <div
                data-pp-id="src/pages/Index.tsx:736:14"
                data-pp-name="CardContent"
                data-component-path="src/pages/Index.tsx"
                data-component-line="736"
                data-component-file="Index.tsx"
                data-component-name="CardContent"
                data-component-content="%7B%22className%22%3A%22space-y-4%22%7D"
                class="p-6 pt-0 space-y-4"
              >
                <div
                  data-pp-id="src/pages/Index.tsx:737:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="737"
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
                    data-pp-id="src/pages/Index.tsx:738:18"
                    data-pp-name="Icon"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="738"
                    data-component-file="Index.tsx"
                    data-component-name="Icon"
                    data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span
                    data-pp-id="src/pages/Index.tsx:739:18"
                    data-pp-name="span"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="739"
                    data-component-file="Index.tsx"
                    data-component-name="span"
                    data-component-content="%7B%22text%22%3A%22%D0%B3.%20%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%22%7D"
                  >
                    г. Новосибирск
                  </span>
                </div>
                <div
                  data-pp-id="src/pages/Index.tsx:741:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="741"
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
                    data-pp-id="src/pages/Index.tsx:742:18"
                    data-pp-name="Icon"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="742"
                    data-component-file="Index.tsx"
                    data-component-name="Icon"
                    data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a
                    data-pp-id="src/pages/Index.tsx:743:18"
                    data-pp-name="a"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="743"
                    data-component-file="Index.tsx"
                    data-component-name="a"
                    data-component-content="%7B%22text%22%3A%22%2B7%20(923)%20123-45-67%22%2C%22className%22%3A%22hover%3Atext-primary%20transition-colors%22%7D"
                    href="tel:+79231234567"
                    class="hover:text-primary transition-colors"
                  >
                    +7 (923) 123-45-67
                  </a>
                </div>
                <div
                  data-pp-id="src/pages/Index.tsx:745:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="745"
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
                    data-pp-id="src/pages/Index.tsx:746:18"
                    data-pp-name="Icon"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="746"
                    data-component-file="Index.tsx"
                    data-component-name="Icon"
                    data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <a
                    data-pp-id="src/pages/Index.tsx:747:18"
                    data-pp-name="a"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="747"
                    data-component-file="Index.tsx"
                    data-component-name="a"
                    data-component-content="%7B%22text%22%3A%22maria.photo%40example.com%22%2C%22className%22%3A%22hover%3Atext-primary%20transition-colors%22%7D"
                    href="mailto:maria.photo@example.com"
                    class="hover:text-primary transition-colors"
                  >
                    maria.photo@example.com
                  </a>
                </div>
                <div
                  data-orientation="horizontal"
                  role="none"
                  data-pp-id="src/pages/Index.tsx:749:16"
                  data-pp-name="Separator"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="749"
                  data-component-file="Index.tsx"
                  data-component-name="Separator"
                  data-component-content="%7B%7D"
                  class="shrink-0 bg-border h-[1px] w-full"
                ></div>
                <div
                  data-pp-id="src/pages/Index.tsx:750:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="750"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22space-y-2%22%7D"
                  class="space-y-2"
                >
                  <p
                    data-pp-id="src/pages/Index.tsx:751:18"
                    data-pp-name="p"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="751"
                    data-component-file="Index.tsx"
                    data-component-name="p"
                    data-component-content="%7B%22text%22%3A%22%D0%9C%D0%B5%D1%81%D1%81%D0%B5%D0%BD%D0%B4%D0%B6%D0%B5%D1%80%D1%8B%20%D0%B8%20%D1%81%D0%BE%D1%86%D1%81%D0%B5%D1%82%D0%B8%3A%22%2C%22className%22%3A%22text-sm%20font-semibold%20text-gray-600%22%7D"
                    class="text-sm font-semibold text-gray-600"
                  >
                    Мессенджеры и соцсети:
                  </p>
                  <a
                    data-pp-id="src/pages/Index.tsx:752:18"
                    data-pp-name="a"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="752"
                    data-component-file="Index.tsx"
                    data-component-name="a"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%20hover%3Atext-primary%20transition-colors%22%7D"
                    href="https://wa.me/79231234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-3 hover:text-primary transition-colors"
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
                      class="lucide lucide-message-circle text-primary"
                      data-pp-id="src/pages/Index.tsx:753:20"
                      data-pp-name="Icon"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="753"
                      data-component-file="Index.tsx"
                      data-component-name="Icon"
                      data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                    <span
                      data-pp-id="src/pages/Index.tsx:754:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="754"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22WhatsApp%22%7D"
                    >
                      WhatsApp
                    </span>
                  </a>
                  <a
                    data-pp-id="src/pages/Index.tsx:756:18"
                    data-pp-name="a"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="756"
                    data-component-file="Index.tsx"
                    data-component-name="a"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%20hover%3Atext-primary%20transition-colors%22%7D"
                    href="https://t.me/maria_photo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-3 hover:text-primary transition-colors"
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
                      class="lucide lucide-send text-primary"
                      data-pp-id="src/pages/Index.tsx:757:20"
                      data-pp-name="Icon"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="757"
                      data-component-file="Index.tsx"
                      data-component-name="Icon"
                      data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                    >
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                    <span
                      data-pp-id="src/pages/Index.tsx:758:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="758"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22Telegram%3A%20%40maria_photo%22%7D"
                    >
                      Telegram: @maria_photo
                    </span>
                  </a>
                  <a
                    data-pp-id="src/pages/Index.tsx:760:18"
                    data-pp-name="a"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="760"
                    data-component-file="Index.tsx"
                    data-component-name="a"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%20hover%3Atext-primary%20transition-colors%22%7D"
                    href="https://vk.com/maria_photo_nsk"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <svg
                      data-pp-id="src/pages/Index.tsx:761:20"
                      data-pp-name="svg"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="761"
                      data-component-file="Index.tsx"
                      data-component-name="svg"
                      data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                      class="text-primary"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        data-pp-id="src/pages/Index.tsx:762:22"
                        data-pp-name="path"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="762"
                        data-component-file="Index.tsx"
                        data-component-name="path"
                        data-component-content="%7B%7D"
                        d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.48 14.94h-1.39c-.58 0-.76-.47-1.79-1.5-.91-.87-1.31-1-1.53-1-.32 0-.41.09-.41.52v1.37c0 .37-.11.58-1.07.58-1.59 0-3.35-.96-4.59-2.75-1.87-2.59-2.38-4.54-2.38-4.93 0-.22.09-.43.52-.43h1.39c.39 0 .54.18.69.59.76 2.19 2.03 4.11 2.56 4.11.2 0 .29-.09.29-.59v-2.28c-.07-1.13-.65-1.22-.65-1.62 0-.18.15-.36.39-.36h2.18c.33 0 .45.17.45.55v3.08c0 .33.15.45.24.45.2 0 .36-.12.72-.48 1.1-1.24 1.89-3.15 1.89-3.15.11-.22.28-.43.7-.43h1.39c.47 0 .57.24.47.55-.17.78-1.85 3.28-1.85 3.28-.17.27-.23.39 0 .7.17.23.72.71 1.09 1.14.67.77 1.18 1.41 1.32 1.86.13.44-.1.67-.54.67z"
                      ></path>
                    </svg>
                    <span
                      data-pp-id="src/pages/Index.tsx:764:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="764"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%D0%92%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5%22%7D"
                    >
                      ВКонтакте
                    </span>
                  </a>
                  <a
                    data-pp-id="src/pages/Index.tsx:766:18"
                    data-pp-name="a"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="766"
                    data-component-file="Index.tsx"
                    data-component-name="a"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%20hover%3Atext-primary%20transition-colors%22%7D"
                    href="https://instagram.com/maria_photo_nsk"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-3 hover:text-primary transition-colors"
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
                      data-pp-id="src/pages/Index.tsx:767:20"
                      data-pp-name="Icon"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="767"
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
                      data-pp-id="src/pages/Index.tsx:768:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="768"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%40maria_photo_nsk%22%7D"
                    >
                      @maria_photo_nsk
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              data-pp-id="src/pages/Index.tsx:774:12"
              data-pp-name="Card"
              data-component-path="src/pages/Index.tsx"
              data-component-line="774"
              data-component-file="Index.tsx"
              data-component-name="Card"
              data-component-content="%7B%22className%22%3A%22border-2%20border-purple-200%22%7D"
              class="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-purple-200"
            >
              <div
                data-pp-id="src/pages/Index.tsx:775:14"
                data-pp-name="CardHeader"
                data-component-path="src/pages/Index.tsx"
                data-component-line="775"
                data-component-file="Index.tsx"
                data-component-name="CardHeader"
                data-component-content="%7B%7D"
                class="flex flex-col space-y-1.5 p-6"
              >
                <h3
                  data-pp-id="src/pages/Index.tsx:776:16"
                  data-pp-name="CardTitle"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="776"
                  data-component-file="Index.tsx"
                  data-component-name="CardTitle"
                  data-component-content="%7B%22text%22%3A%22%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0%22%2C%22className%22%3A%22text-2xl%22%7D"
                  class="font-semibold tracking-tight text-2xl"
                >
                  Александра
                </h3>
                <p
                  data-pp-id="src/pages/Index.tsx:777:16"
                  data-pp-name="CardDescription"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="777"
                  data-component-file="Index.tsx"
                  data-component-name="CardDescription"
                  data-component-content="%7B%22text%22%3A%22%D0%9D%D0%B5%D0%B9%D1%80%D0%BE%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F%22%7D"
                  class="text-sm text-muted-foreground"
                >
                  Нейрофотография
                </p>
              </div>
              <div
                data-pp-id="src/pages/Index.tsx:779:14"
                data-pp-name="CardContent"
                data-component-path="src/pages/Index.tsx"
                data-component-line="779"
                data-component-file="Index.tsx"
                data-component-name="CardContent"
                data-component-content="%7B%22className%22%3A%22space-y-4%22%7D"
                class="p-6 pt-0 space-y-4"
              >
                <div
                  data-pp-id="src/pages/Index.tsx:780:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="780"
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
                    class="lucide lucide-globe text-primary"
                    data-pp-id="src/pages/Index.tsx:781:18"
                    data-pp-name="Icon"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="781"
                    data-component-file="Index.tsx"
                    data-component-name="Icon"
                    data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                  <span
                    data-pp-id="src/pages/Index.tsx:782:18"
                    data-pp-name="span"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="782"
                    data-component-file="Index.tsx"
                    data-component-name="span"
                    data-component-content="%7B%22text%22%3A%22%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%20%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD%22%7D"
                  >
                    Работаю онлайн
                  </span>
                </div>
                <div
                  data-pp-id="src/pages/Index.tsx:784:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="784"
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
                    data-pp-id="src/pages/Index.tsx:785:18"
                    data-pp-name="Icon"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="785"
                    data-component-file="Index.tsx"
                    data-component-name="Icon"
                    data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a
                    data-pp-id="src/pages/Index.tsx:786:18"
                    data-pp-name="a"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="786"
                    data-component-file="Index.tsx"
                    data-component-name="a"
                    data-component-content="%7B%22text%22%3A%22%2B7%20(999)%20888-77-66%22%2C%22className%22%3A%22hover%3Atext-primary%20transition-colors%22%7D"
                    href="tel:+79998887766"
                    class="hover:text-primary transition-colors"
                  >
                    +7 (999) 888-77-66
                  </a>
                </div>
                <div
                  data-pp-id="src/pages/Index.tsx:788:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="788"
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
                    data-pp-id="src/pages/Index.tsx:789:18"
                    data-pp-name="Icon"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="789"
                    data-component-file="Index.tsx"
                    data-component-name="Icon"
                    data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <a
                    data-pp-id="src/pages/Index.tsx:790:18"
                    data-pp-name="a"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="790"
                    data-component-file="Index.tsx"
                    data-component-name="a"
                    data-component-content="%7B%22text%22%3A%22alexandra.neuro%40example.com%22%2C%22className%22%3A%22hover%3Atext-primary%20transition-colors%22%7D"
                    href="mailto:alexandra.neuro@example.com"
                    class="hover:text-primary transition-colors"
                  >
                    alexandra.neuro@example.com
                  </a>
                </div>
                <div
                  data-orientation="horizontal"
                  role="none"
                  data-pp-id="src/pages/Index.tsx:792:16"
                  data-pp-name="Separator"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="792"
                  data-component-file="Index.tsx"
                  data-component-name="Separator"
                  data-component-content="%7B%7D"
                  class="shrink-0 bg-border h-[1px] w-full"
                ></div>
                <div
                  data-pp-id="src/pages/Index.tsx:793:16"
                  data-pp-name="div"
                  data-component-path="src/pages/Index.tsx"
                  data-component-line="793"
                  data-component-file="Index.tsx"
                  data-component-name="div"
                  data-component-content="%7B%22className%22%3A%22space-y-2%22%7D"
                  class="space-y-2"
                >
                  <p
                    data-pp-id="src/pages/Index.tsx:794:18"
                    data-pp-name="p"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="794"
                    data-component-file="Index.tsx"
                    data-component-name="p"
                    data-component-content="%7B%22text%22%3A%22%D0%9C%D0%B5%D1%81%D1%81%D0%B5%D0%BD%D0%B4%D0%B6%D0%B5%D1%80%D1%8B%20%D0%B8%20%D1%81%D0%BE%D1%86%D1%81%D0%B5%D1%82%D0%B8%3A%22%2C%22className%22%3A%22text-sm%20font-semibold%20text-gray-600%22%7D"
                    class="text-sm font-semibold text-gray-600"
                  >
                    Мессенджеры и соцсети:
                  </p>
                  <a
                    data-pp-id="src/pages/Index.tsx:795:18"
                    data-pp-name="a"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="795"
                    data-component-file="Index.tsx"
                    data-component-name="a"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%20hover%3Atext-primary%20transition-colors%22%7D"
                    href="https://wa.me/79998887766"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-3 hover:text-primary transition-colors"
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
                      class="lucide lucide-message-circle text-primary"
                      data-pp-id="src/pages/Index.tsx:796:20"
                      data-pp-name="Icon"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="796"
                      data-component-file="Index.tsx"
                      data-component-name="Icon"
                      data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                    <span
                      data-pp-id="src/pages/Index.tsx:797:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="797"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22WhatsApp%22%7D"
                    >
                      WhatsApp
                    </span>
                  </a>
                  <a
                    data-pp-id="src/pages/Index.tsx:799:18"
                    data-pp-name="a"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="799"
                    data-component-file="Index.tsx"
                    data-component-name="a"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%20hover%3Atext-primary%20transition-colors%22%7D"
                    href="https://t.me/aleksa25t"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-3 hover:text-primary transition-colors"
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
                      class="lucide lucide-send text-primary"
                      data-pp-id="src/pages/Index.tsx:800:20"
                      data-pp-name="Icon"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="800"
                      data-component-file="Index.tsx"
                      data-component-name="Icon"
                      data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                    >
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                    <span
                      data-pp-id="src/pages/Index.tsx:801:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="801"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22Telegram%3A%20%40alexandra_neuro%22%7D"
                    >
                      Telegram: @alexandra_neuro
                    </span>
                  </a>
                  <a
                    data-pp-id="src/pages/Index.tsx:803:18"
                    data-pp-name="a"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="803"
                    data-component-file="Index.tsx"
                    data-component-name="a"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%20hover%3Atext-primary%20transition-colors%22%7D"
                    href="https://vk.com/alexandra_neuro_art"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <svg
                      data-pp-id="src/pages/Index.tsx:804:20"
                      data-pp-name="svg"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="804"
                      data-component-file="Index.tsx"
                      data-component-name="svg"
                      data-component-content="%7B%22className%22%3A%22text-primary%22%7D"
                      class="text-primary"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        data-pp-id="src/pages/Index.tsx:805:22"
                        data-pp-name="path"
                        data-component-path="src/pages/Index.tsx"
                        data-component-line="805"
                        data-component-file="Index.tsx"
                        data-component-name="path"
                        data-component-content="%7B%7D"
                        d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.48 14.94h-1.39c-.58 0-.76-.47-1.79-1.5-.91-.87-1.31-1-1.53-1-.32 0-.41.09-.41.52v1.37c0 .37-.11.58-1.07.58-1.59 0-3.35-.96-4.59-2.75-1.87-2.59-2.38-4.54-2.38-4.93 0-.22.09-.43.52-.43h1.39c.39 0 .54.18.69.59.76 2.19 2.03 4.11 2.56 4.11.2 0 .29-.09.29-.59v-2.28c-.07-1.13-.65-1.22-.65-1.62 0-.18.15-.36.39-.36h2.18c.33 0 .45.17.45.55v3.08c0 .33.15.45.24.45.2 0 .36-.12.72-.48 1.1-1.24 1.89-3.15 1.89-3.15.11-.22.28-.43.7-.43h1.39c.47 0 .57.24.47.55-.17.78-1.85 3.28-1.85 3.28-.17.27-.23.39 0 .7.17.23.72.71 1.09 1.14.67.77 1.18 1.41 1.32 1.86.13.44-.1.67-.54.67z"
                      ></path>
                    </svg>
                    <span
                      data-pp-id="src/pages/Index.tsx:807:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="807"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%D0%92%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5%22%7D"
                    >
                      ВКонтакте
                    </span>
                  </a>
                  <a
                    data-pp-id="src/pages/Index.tsx:809:18"
                    data-pp-name="a"
                    data-component-path="src/pages/Index.tsx"
                    data-component-line="809"
                    data-component-file="Index.tsx"
                    data-component-name="a"
                    data-component-content="%7B%22className%22%3A%22flex%20items-center%20gap-3%20hover%3Atext-primary%20transition-colors%22%7D"
                    href="https://instagram.com/alexandra_neuro_art"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-3 hover:text-primary transition-colors"
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
                      data-pp-id="src/pages/Index.tsx:810:20"
                      data-pp-name="Icon"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="810"
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
                      data-pp-id="src/pages/Index.tsx:811:20"
                      data-pp-name="span"
                      data-component-path="src/pages/Index.tsx"
                      data-component-line="811"
                      data-component-file="Index.tsx"
                      data-component-name="span"
                      data-component-content="%7B%22text%22%3A%22%40alexandra_neuro_art%22%7D"
                    >
                      @alexandra_neuro_art
                    </span>
                  </a>
                </div>
              </div>
            </div>
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