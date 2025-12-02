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
        className="py-12 sm:py-20 px-3 sm:px-4 bg-gradient-to-br from-slate-50/50 to-indigo-50/30"
      >
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 text-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Портфолио
            </h2>
            <p className="text-muted-foreground text-sm sm:text-lg max-w-md mx-auto leading-relaxed">
              Наши работы, созданные с душой и современными технологиями
            </p>
          </div>

          <Tabs defaultValue="alexandra" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8 sm:mb-12 rounded-2xl p-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-200/50 backdrop-blur-sm shadow-xl">
              <TabsTrigger
                value="alexandra"
                className="text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:text-indigo-700 data-[state=active]:shadow-lg rounded-xl py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                Александра (AI-фото)
              </TabsTrigger>
              <TabsTrigger
                value="maria"
                className="text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-lg rounded-xl py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                Мария (Классика)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="alexandra" className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {portfolioImages
                  .filter((img) => img.photographer === "alexandra")
                  .map((img, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-2xl aspect-vertical shadow-lg hover:shadow-2xl bg-gradient-to-br from-slate-100 to-indigo-50 transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border-4 border-white/50 backdrop-blur-sm"
                    >
                      <img
                        src={img.url}
                        alt={`Работа Александры ${idx + 1}`}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-125 group-hover:contrast-125 group-hover:grayscale-0 group-grayscale group-saturate-50"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-sm flex items-end p-6" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                        <p className="text-white/90 text-sm font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                          AI-магия ✨
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mt-12 text-center">
                <a
                  href="https://t.me/online_photosessiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-indigo-500/20 backdrop-blur-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                  </svg>
                  Больше AI-шедевров в Telegram
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 6L8.09 9.91L4 10l5.05 4.95L10 18l5.95-5.05L20 10l-4.09-.09z" />
                  </svg>
                </a>
              </div>
            </TabsContent>

            <TabsContent value="maria" className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {portfolioImages
                  .filter((img) => img.photographer === "maria")
                  .map((img, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-2xl aspect-vertical shadow-xl hover:shadow-3xl bg-gradient-to-br from-rose-50 to-amber-50/80 transition-all duration-500 hover:-translate-y-3 hover:rotate-[-2deg] ring-2 ring-amber-100/50 hover:ring-amber-200/70 backdrop-blur-sm"
                    >
                      <img
                        src={img.url}
                        alt={`Работа Марии ${idx + 1}`}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-110 group-hover:contrast-125 group-hover:warmth-10 group-sepia group-saturate-150"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-rose-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-md flex items-end p-6" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-6 group-hover:translate-y-0 delay-150">
                        <p className="text-white text-sm font-semibold bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent drop-shadow-lg">
                          Классическая красота 📸
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mt-12 text-center">
                <a
                  href="https://vk.com/club_photograph_novosibirsk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 via-amber-500 to-orange-500 hover:from-rose-600 hover:via-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-sm shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 ring-2 ring-amber-200/50 backdrop-blur-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9.25l-6 6z" />
                  </svg>
                  Классические работы Марии в VK
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 6L8.09 9.91L4 10l5.05 4.95L10 18l5.95-5.05L20 10l-4.09-.09z" />
                  </svg>
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
