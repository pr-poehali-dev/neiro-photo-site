import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioImages = [
    {
      url: 'https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/d4bee983-4720-43ee-bcb8-8fad54d8cfc9.jpg',
      category: 'wedding',
      photographer: 'maria'
    },
    {
      url: 'https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/ae83c122-3d9f-4040-85f8-cbdcff5516e7.jpg',
      category: 'neuro',
      photographer: 'alexandra'
    },
    {
      url: 'https://cdn.poehali.dev/projects/fd4a0664-6167-4055-91b3-61ca5fd95ac8/files/647c12fe-b2d4-4576-938b-8568acf1de25.jpg',
      category: 'portrait',
      photographer: 'maria'
    }
  ];

  const services = [
    {
      photographer: 'alexandra',
      name: 'Нейрофотография',
      description: 'Уникальная авторская техника съёмки с элементами нейрографики',
      price: 'от 15 000 ₽',
      icon: 'Sparkles'
    },
    {
      photographer: 'alexandra',
      name: 'Арт-портрет',
      description: 'Художественная съёмка с креативной обработкой',
      price: 'от 12 000 ₽',
      icon: 'Palette'
    },
    {
      photographer: 'maria',
      name: 'Свадебная съёмка',
      description: 'Полный день съёмки свадебного торжества',
      price: 'от 50 000 ₽',
      icon: 'Heart'
    },
    {
      photographer: 'maria',
      name: 'Семейная фотосессия',
      description: 'Естественные эмоции и моменты вашей семьи',
      price: 'от 8 000 ₽',
      icon: 'Users'
    }
  ];

  const testimonials = [
    {
      name: 'Елена Смирнова',
      text: 'Александра создала невероятные нейрофото! Это настоящее искусство, которое передаёт глубину эмоций.',
      rating: 5
    },
    {
      name: 'Дмитрий и Ольга',
      text: 'Мария сняла нашу свадьбу просто волшебно. Каждый кадр — это история, которую хочется пересматривать снова.',
      rating: 5
    },
    {
      name: 'Анна Петрова',
      text: 'Семейная фотосессия с Марией прошла очень комфортно. Дети вели себя естественно, а результат превзошёл ожидания!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Alexandra & Maria
</h1>
          <div className="hidden md:flex gap-6">
            {['home', 'portfolio', 'about', 'services', 'reviews', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm font-medium hover:text-primary transition-colors capitalize"
              >
                {section === 'home' ? 'Главная' :
                 section === 'portfolio' ? 'Портфолио' :
                 section === 'about' ? 'О нас' :
                 section === 'services' ? 'Услуги и цены' :
                 section === 'reviews' ? 'Отзывы' :
                 'Контакты'}
              </button>
            ))}
          </div>
          <Button variant="default" size="sm" onClick={() => scrollToSection('contact')}>
            Связаться
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-sm px-4 py-2">Профессиональная фотография</Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Создаём искусство
из ваших моментов</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Александра — нейрофотограф с уникальным видением.
Мария — мастер классической фотографии для важных событий.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => scrollToSection('portfolio')} className="group">
                Посмотреть работы
                <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
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
                <p className="font-semibold mb-3 text-[#7f68ac]">AI-фотограф (онлайн из любой точки)</p>
                <p className="text-muted-foreground">Превращаю исходные портреты в уникальные арт-объекты с помощью искусственного интеллекта.</p>
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
                <p className="text-secondary font-semibold mb-3">Классический фотограф (г.Новосибирск)</p>
                <p className="text-muted-foreground">Специализируюсь на Lifestyle стиле. Ловлю искренние эмоции и важные моменты.</p>
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
                <div key={idx} className="group relative overflow-hidden rounded-lg aspect-square animate-fade-in">
                  <img
                    src={img.url}
                    alt={`Portfolio ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-semibold capitalize">{img.category}</span>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="alexandra" className="grid md:grid-cols-3 gap-6">
              {portfolioImages.filter(img => img.photographer === 'alexandra').map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg aspect-square animate-fade-in">
                  <img
                    src={img.url}
                    alt={`Alexandra portfolio ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </TabsContent>

            <TabsContent value="maria" className="grid md:grid-cols-3 gap-6">
              {portfolioImages.filter(img => img.photographer === 'maria').map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg aspect-square animate-fade-in">
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4">О фотографах</h2>
        <p className="text-muted-foreground text-lg">Наши истории и подход к работе</p>
      </div>

      <div className="card-container">
        <!-- Карточка Александры -->
        <div className="card">
          <div className="flex items-start gap-6">
            <div className="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" width="32" height="32"><path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Александра</h3>
              <p className="font-semibold mb-4">Нейрофотограф</p>
              <p className="text-muted-foreground leading-relaxed">
                Более 7 лет в фотографии. Создала авторскую технику нейрофотографии, соединив классическую портретную съемку с элементами нейрографики. Каждая работа — это уникальный арт-объект, отражающий внутренний мир человека. Работаю в студии и на выезде. Провожу мастер-классы по креативной фотографии.
              </p>
            </div>
          </div>
        </div>

        <!-- Карточка Марии -->
        <div className="card">
          <div className="flex items-start gap-6">
            <div className="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" width="32" height="32"><path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 12v6H6V6h6v6z"/></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Мария</h3>
              <p className="font-semibold mb-4">Классический фотограф</p>
              <p className="text-muted-foreground leading-relaxed">
                В профессии 10 лет. Специализируюсь на свадебной и семейной фотографии. Мой стиль — естественность и искренность. Не ставлю жесткие позы, а создаю комфортную атмосферу, где люди чувствуют себя свободно. Сняла более 150 свадеб и сотни семейных фотосессий. Каждый проект для меня — это история любви.
              </p>
            </div>
          </div>
        </div>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги и цены</h2>
            <p className="text-muted-foreground text-lg">Выберите подходящий формат съёмки</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${service.photographer === 'alexandra' ? 'bg-primary/10' : 'bg-secondary/10'} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={service.icon as any} className={service.photographer === 'alexandra' ? 'text-primary' : 'text-secondary'} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{service.name}</h3>
                    <Badge variant="outline" className="mb-3">
                      {service.photographer === 'alexandra' ? 'Александра' : 'Мария'}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <Button variant="outline" size="sm" onClick={() => scrollToSection('contact')}>
                    Заказать
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы</h2>
            <p className="text-muted-foreground text-lg">Что говорят наши клиенты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-semibold">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">Свяжитесь с нами для обсуждения съёмки</p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input placeholder="Иван Иванов" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email или телефон</label>
                <Input placeholder="example@mail.ru или +7 900 000 00 00" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Выберите фотографа</label>
                <select className="w-full border border-input rounded-md px-3 py-2 bg-background">
                  <option>Александра (нейрофотография)</option>
                  <option>Мария (классическая фотография)</option>
                  <option>Нужна консультация</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea placeholder="Расскажите о вашей идее съёмки..." rows={5} />
              </div>
              <Button className="w-full" size="lg">
                Отправить заявку
                <Icon name="Send" className="ml-2" size={18} />
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Icon name="Mail" size={20} />
                <span>info@alexandramaria.photo</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Icon name="Phone" size={20} />
                <span>+7 (900) 000-00-00</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Icon name="MapPin" size={20} />
                <span>Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
          </Card>
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