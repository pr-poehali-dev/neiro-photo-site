import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

interface PortfolioImage {
  url: string;
  category: string;
  photographer: string;
}

interface Testimonial {
  image: string;
}

interface PortfolioReviewsFaqSectionProps {
  portfolioImages: PortfolioImage[];
  testimonials: Testimonial[];
}

const PortfolioReviewsFaqSection = ({
  portfolioImages,
  testimonials,
}: PortfolioReviewsFaqSectionProps) => {
  return (
    <>
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
                      className="group relative overflow-hidden rounded-lg aspect-[2/3]"
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
                      className="group relative overflow-hidden rounded-lg aspect-[2/3]"
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
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.48 14.94h-1.39c-.58 0-.76-.47-1.79-1.5-.91-.87-1.31-1-1.53-1-.32 0-.41.09-.41.52v1.37c0 .37-.11.58-1.07.58-1.59 0-3.35-.96-4.59-2.75-1.87-2.59-2.38-4.54-2.38-4.93 0-.22.09-.43.52-.43h1.39c.39 0 .54.18.69.59.76 2.19 2.03 4.11 2.56 4.11.2 0 .29-.09.29-.59v-2.28c-.07-1.13-.65-1.22-.65-1.62 0-.18.15-.36.39-.36h2.18c.33 0 .45.17.45.55v3.08c0 .33.15.45.24.45.2 0 .36-.12.72-.48 1.10-1.24 1.89-3.15 1.89-3.15.11-.22.28-.43.7-.43h1.39c.47 0 .57.24.47.55-.17.78-1.85 3.28-1.85 3.28-.17.27-.23.39 0 .7.17.23.72.71 1.09 1.14.67.77 1.18 1.41 1.32 1.86.13.44-.1.67-.54.67z" />
                  </svg>
                  Больше работ в VK группе Марии
                  <Icon name="ExternalLink" size={14} />
                </a>
              </div>
            </TabsContent>
          </Tabs>
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

          <div className="relative">
            <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
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
                          "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4";
                        overlay.onclick = () => overlay.remove();

                        const closeBtn = document.createElement("button");
                        closeBtn.className =
                          "absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors z-10";
                        closeBtn.innerHTML =
                          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
                        closeBtn.onclick = (e) => {
                          e.stopPropagation();
                          overlay.remove();
                        };

                        const enlargedImg = document.createElement("img");
                        enlargedImg.src = img.src;
                        enlargedImg.className =
                          "max-w-full max-h-full object-contain";

                        overlay.appendChild(closeBtn);
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
            <div className="flex items-center justify-center gap-2 mt-4 md:hidden text-sm text-muted-foreground animate-bounce">
              <Icon name="ChevronLeft" size={16} />
              <span>Листайте для просмотра</span>
              <Icon name="ChevronRight" size={16} />
            </div>
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
                  съемки
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
    </>
  );
};

export default PortfolioReviewsFaqSection;
