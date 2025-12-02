import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ServicesAndAboutSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const ServicesAndAboutSection = ({
  scrollToSection,
}: ServicesAndAboutSectionProps) => {
  return (
    <>
      <section id="about" className="py-12 sm:py-20 px-3 sm:px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent text-2xl">
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
                    Живое общение с фотографом
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon
                    name="Check"
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-sm sm:text-base">
                    Профессиональная студия
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon
                    name="X"
                    className="text-red-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-sm sm:text-base">
                    Нужно приехать в Новосибирск
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon
                    name="X"
                    className="text-red-500 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-sm sm:text-base">Более высокая цена</p>
                </div>
              </div>
            </div>
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
                    <span>Мини (30 минут, 10 фото в ретуши)</span>
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
                  <div className="space-y-2">
                    </div>
                    <p className="font-bold text-xs text-purple-800 flex items-center gap-1 mt-3">
                      <Icon name="AlertCircle" size={14} />
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
    </>
  );
};

export default ServicesAndAboutSection;