import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  handleContactClick: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const HeroSection = ({
  scrollToSection,
  handleContactClick,
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeroSectionProps) => {
  return (
    <>
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
                  className="text-base font-medium hover:text-primary transition-colors text-left"
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
            <h2 className="sm:text-3xl md:text-5xl mb-4 sm:mb-6 leading-tight font-bold text-2xl">
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
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Sparkles" size={20} />
                  <CardTitle className="text-base sm:text-lg">
                    Александра
                  </CardTitle>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Нейрофотограф
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm mb-3 sm:mb-4">
                  Создаю магические AI-фотографии онлайн. Профессиональные
                  результаты без студии и поездок.
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleContactClick}
                    className="flex-1 text-xs sm:text-sm"
                  >
                    Связаться
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
              <div className="h-32 sm:h-40 md:h-96 bg-gradient-to-br from-secondary/20 to-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/6fc1c76f-36d6-4b16-aff1-b66fbccd18fc.JPG"
                  alt="Мария"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Camera" size={20} />
                  <CardTitle className="text-base sm:text-lg">Мария</CardTitle>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Классический фотограф
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm mb-3 sm:mb-4">
                  Профессиональная фотосъемка в Новосибирске. Работаю в студии
                  и на выездах.
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleContactClick}
                    className="flex-1 text-xs sm:text-sm"
                  >
                    Связаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
