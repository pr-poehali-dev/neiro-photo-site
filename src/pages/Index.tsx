import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import SubscriptionDialog from "@/components/SubscriptionDialog";
import QuizDialog from "@/components/QuizDialog";
import ContactDialog from "@/components/ContactDialog";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import HeroSection from "@/components/sections/HeroSection";
import ServicesAndAboutSection from "@/components/sections/ServicesAndAboutSection";
import PortfolioReviewsFaqSection from "@/components/sections/PortfolioReviewsFaqSection";
import BookingSection from "@/components/sections/BookingSection";

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("home");
  const [subscriptionDialogOpen, setSubscriptionDialogOpen] = useState(false);
  const [dialogDismissedAt, setDialogDismissedAt] = useState<number | null>(null);
  const [quizDialogOpen, setQuizDialogOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [contactPhotographer, setContactPhotographer] = useState<"alexandra" | "maria">("alexandra");
  const [showPhotographerChoice, setShowPhotographerChoice] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedPhotographer, setSelectedPhotographer] = useState<string>("");
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [giftDialogOpen, setGiftDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bookingSection = document.getElementById("booking");
      if (!bookingSection) return;

      const bookingRect = bookingSection.getBoundingClientRect();
      const isBookingVisible = bookingRect.top < window.innerHeight && bookingRect.bottom > 0;

      if (isBookingVisible && subscriptionDialogOpen) {
        setSubscriptionDialogOpen(false);
        return;
      }

      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 90 && !subscriptionDialogOpen && !isBookingVisible) {
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
            title: "Проблема с отправкой уведомления",
            description: result.fallback,
            variant: "destructive",
          });
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
      image: "https://cdn.poehali.dev/files/9ca36f4f-446f-4fc8-8b4d-5ced09b844f0.jpg",
    },
    {
      image: "https://cdn.poehali.dev/files/7690bb43-98b3-4074-bea2-f338ceaa833e.jpg",
    },
    {
      image: "https://cdn.poehali.dev/files/fc2f2b36-2ba3-49bd-9b87-2edbeaeaaab4.jpg",
    },
    {
      image: "https://cdn.poehali.dev/files/f532e6b0-4230-4f9a-a4a5-5a78a878a67a.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SubscriptionDialog open={subscriptionDialogOpen} onOpenChange={handleDialogClose} />
      <QuizDialog open={quizDialogOpen} onOpenChange={setQuizDialogOpen} />
      <ContactDialog
        open={contactDialogOpen}
        onOpenChange={setContactDialogOpen}
        photographer={contactPhotographer}
      />

      <Dialog open={showPhotographerChoice} onOpenChange={setShowPhotographerChoice}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-left">С кем хотите связаться?</DialogTitle>
            <DialogDescription className="text-center">Выберите фотографа</DialogDescription>
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
              <span className="text-sm text-muted-foreground">AI-фотография (онлайн)</span>
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
              <span className="text-sm text-muted-foreground">Классическая съемка (Новосибирск)</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <button
        onClick={() => setGiftDialogOpen(true)}
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40 animate-bounce"
        aria-label="Получить подарок"
      >
        <Icon name="Gift" size={24} />
      </button>

      <Dialog open={giftDialogOpen} onOpenChange={setGiftDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-center">Дарим 500₽ ! 🎁</DialogTitle>
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
              <svg className="text-blue-600" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.48 14.94h-1.39c-.58 0-.76-.47-1.79-1.5-.91-.87-1.31-1-1.53-1-.32 0-.41.09-.41.52v1.37c0 .37-.11.58-1.07.58-1.59 0-3.35-.96-4.59-2.75-1.87-2.59-2.38-4.54-2.38-4.93 0-.22.09-.43.52-.43h1.39c.39 0 .54.18.69.59.76 2.19 2.03 4.11 2.56 4.11.2 0 .29-.09.29-.59v-2.28c-.07-1.13-.65-1.22-.65-1.62 0-.18.15-.36.39-.36h2.18c.33 0 .45.17.45.55v3.08c0 .33.15.45.24.45.2 0 .36-.12.72-.48 1.1-1.24 1.89-3.15 1.89-3.15.11-.22.28-.43.7-.43h1.39c.47 0 .57.24.47.55-.17.78-1.85 3.28-1.85 3.28-.17.27-.23.39 0 .7.17.23.72.71 1.09 1.14.67.77 1.18 1.41 1.32 1.86.13.44-.1.67-.54.67z" />
              </svg>
              <div className="flex-1">
                <div className="font-semibold">Группа ВКонтакте Марии</div>
                <div className="text-sm text-gray-600">Подписаться на группу</div>
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
                <div className="text-sm text-gray-600">Подписаться на канал</div>
              </div>
              <Icon name="ExternalLink" size={16} />
            </a>
          </div>
          <p className="text-xs text-center text-gray-500 mt-4">
            После подписки напишите фотографу и получите скидку
          </p>
        </DialogContent>
      </Dialog>

      <HeroSection
        scrollToSection={scrollToSection}
        handleContactClick={handleContactClick}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <ServicesAndAboutSection scrollToSection={scrollToSection} />

      <PortfolioReviewsFaqSection portfolioImages={portfolioImages} testimonials={testimonials} />

      <BookingSection
        formData={formData}
        setFormData={setFormData}
        selectedPhotographer={selectedPhotographer}
        setSelectedPhotographer={setSelectedPhotographer}
        selectedPackage={selectedPackage}
        setSelectedPackage={setSelectedPackage}
        date={date}
        setDate={setDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        isSubmitting={isSubmitting}
        handleSubmitBooking={handleSubmitBooking}
        setGiftDialogOpen={setGiftDialogOpen}
      />
    </div>
  );
};

export default Index;
