export const Header = () => {
  return (
    <header class="container absolute top-[68px] left-1/2 -translate-x-1/2 z-10">
      <nav class="xl:px-32">
        <ul class="flex items-center justify-between text-2xl font-light text-blue">
          <li>
            <a href="#about">Обо мне</a>
          </li>
          <li>
            <a href="#work">Работы</a>
          </li>
          <li>
            <a href="#master-classes">Мастер классы</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
