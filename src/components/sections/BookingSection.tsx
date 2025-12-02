import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface BookingSectionProps {
  formData: { name: string; phone: string; comment: string };
  setFormData: (data: { name: string; phone: string; comment: string }) => void;
  selectedPhotographer: string;
  setSelectedPhotographer: (photographer: string) => void;
  selectedPackage: string;
  setSelectedPackage: (pkg: string) => void;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  isSubmitting: boolean;
  handleSubmitBooking: (e: React.FormEvent) => void;
  setGiftDialogOpen: (open: boolean) => void;
}

const BookingSection = ({
  formData,
  setFormData,
  selectedPhotographer,
  setSelectedPhotographer,
  selectedPackage,
  setSelectedPackage,
  date,
  setDate,
  selectedTime,
  setSelectedTime,
  isSubmitting,
  handleSubmitBooking,
  setGiftDialogOpen,
}: BookingSectionProps) => {
  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  return (
    <>
      <section
        id="booking"
        className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent text-2xl">
            Записаться на съемку
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
                            Портрет поколения (оплата за каждого человека)
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
                            Мини (30 минут, 10 фото в ретуши)
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
                       
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {selectedPhotographer === "maria" && (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">
                        Желаемая дата съемки
                      </label>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold">
                        Время съемки
                      </label>
                      <Select
                        value={selectedTime}
                        onValueChange={setSelectedTime}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-semibold">
                    Комментарий (опционально)
                  </label>
                  <Textarea
                    placeholder="Расскажите о ваших пожеланиях"
                    value={formData.comment}
                    onChange={(e) =>
                      setFormData({ ...formData, comment: e.target.value })
                    }
                    rows={4}
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

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => setGiftDialogOpen(true)}
              className="gap-2"
            >
              <Icon name="Gift" size={18} />
              Подарочный сертификат
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-muted/50 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <p className="font-semibold text-xs">
              Два взгляда на фотографию — выберите свой стиль
            </p>

            <div className="space-y-4">
              <Link
                to="/privacy"
                className="text-xs text-muted-foreground hover:text-primary transition-colors block"
              >
                Политика конфиденциальности
              </Link>
              <div className="text-xs text-muted-foreground">
                © 2025 Aleksandra & Maria Photography
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BookingSection;