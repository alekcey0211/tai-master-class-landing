import { icons } from "./icons.tsx";

export const Footer = () => {
  return (
    <footer id="contacts" class="bg-gray-6 pt-16 pb-52">
      <div class="container grid !xl:px-32">
        <h2 class="text-blue text-2xl font-light underline mb-8">Контакты</h2>
        <span class="text-xl font-light">
          Запись на мастер класс по телефону
        </span>
        <a href="tel:+74959121736" class="text-2xl font-light mb-8 text-blue">
          +7 (495) 912-17-36
        </a>
        <span class="text-xl font-light">По вопросам сотрудничества</span>
        <span class="text-2xl font-light mb-12 text-blue">
          <a href="tel:+79296599574">+7 (929) 659-95-74</a> Кравцова Таисия
          Валерьевна
        </span>
        <div class="flex gap-3 text-blue">
          <a
            href={`https://wa.me/+79296599574?text=""`}
            aria-label="Ссылка на приложение whatsapp"
          >
            <icons.Whatsapp class="w-10 h-10" />
          </a>
          <a
            href="https://t.me/+79296599574"
            aria-label="Ссылка на приложение telegram"
          >
            <icons.Telegram class="w-10 h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
};
