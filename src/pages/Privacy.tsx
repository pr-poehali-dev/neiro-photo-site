import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          ← Вернуться на главную
        </Button>

        <h1 className="text-4xl font-bold mb-8">Политика конфиденциальности</h1>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки
              и защиты персональных данных пользователей сайта фотографов
              Александры и Марии.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. Собираемая информация
            </h2>
            <p>Мы можем собирать следующую информацию:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Имя и контактная информация (телефон, email)</li>
              <li>Данные о предпочтениях в услугах фотосъемки</li>
              <li>Информация о заказанных услугах</li>
              <li>Фотографии, предоставленные для обработки</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Использование информации
            </h2>
            <p>Собранная информация используется для:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Предоставления и улучшения наших услуг</li>
              <li>Коммуникации с клиентами</li>
              <li>Обработки заказов и платежей</li>
              <li>Отправки информации об услугах (с вашего согласия)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Защита данных</h2>
            <p>
              Мы принимаем соответствующие меры безопасности для защиты ваших
              персональных данных от несанкционированного доступа, изменения,
              раскрытия или уничтожения.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. Передача данных третьим лицам
            </h2>
            <p>
              Мы не передаем ваши персональные данные третьим лицам, за
              исключением случаев, когда это необходимо для предоставления услуг
              (например, платежные системы) или требуется законом.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Файлы cookie</h2>
            <p>
              Наш сайт может использовать файлы cookie для улучшения
              пользовательского опыта. Вы можете настроить свой браузер для
              отказа от cookie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Ваши права</h2>
            <p>Вы имеете право:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Запросить доступ к своим персональным данным</li>
              <li>Запросить исправление неточных данных</li>
              <li>Запросить удаление ваших данных</li>
              <li>Отозвать согласие на обработку данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              8. Изменения в политике
            </h2>
            <p>
              Мы оставляем за собой право вносить изменения в настоящую Политику
              конфиденциальности. Актуальная версия всегда доступна на данной
              странице.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Контакты</h2>
            <p>
              Если у вас есть вопросы относительно настоящей Политики
              конфиденциальности, свяжитесь с нами через контакты на главной
              странице сайта.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Дата последнего обновления: 23 ноября 2025 года
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
