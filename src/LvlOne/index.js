import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 30px;
  padding: 5px;
  margin: 20px 5px;
  color: #92d050;
`;

const BackTo = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: #4fc08d;
  border-radius: 40px;
  padding: 10px 20px;
  margin: 0 10px;
  border: 1px solid transparent;
  transition: all 0.15s ease;
  &:hover {
    border: 1px solid #4fc08d;
    background-color: white;
    color: #4fc08d;
  }
`;

const Main = styled.main`
  width: 70%;
`;

const Questions = styled.section``;

const Question = styled.article`
  font-size: 18px;
  line-height: 30px;
  font-weight: 700;
  padding: 20px;
  position: relative;
  border: 1px solid #eee;
  margin-bottom: 30px;

  &:before {
    content: "Q";
    position: absolute;
    font-size: 24px;
    font-weight: 700;
    color: #92d050;
  }
`;

const TitleQuestion = styled.h2`
  line-height: 34px;
  margin: 15px 5px;
  padding: 5px;
`;

const Answer = styled.p`
  margin: 5px;
  padding: 5px;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
`;

const Groups = styled.ul``;

const Group = styled.li``;

const QuestionContainer = styled.div`
  padding-top: 20px;
  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: lightgray;
    display: block;
  }
`;

const LinkTo = styled.a`
  text-decoration: none;
  display: block;
  padding: 5px;
  margin: 5px;
  width: 40%;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <React.Fragment>
    <Helmet>
      <title>Level I</title>
    </Helmet>
    <Container>
      <Header>
        <Title> Level I </Title>
        <BackTo to="/test"> Назад на главную </BackTo>
      </Header>
      <Main>
        <Questions>
          <Question>
            <QuestionContainer>
              <TitleQuestion>
                Расскажите, чем, на ваш взгляд, отличается хорошая верстка от
                плохой с точки зрения
              </TitleQuestion>
              <Groups>
                <Group>Пользователя;</Group>
                <Group>Менеджера проекта;</Group>
                <Group>Дизайнера;</Group>
                <Group>Верстальщика;</Group>
                <Group>Клиентского программиста;</Group>
                <Group>Серверного программиста;</Group>
              </Groups>
            </QuestionContainer>
            <Answer>
              {" "}
              1. Пользователь может просматривать наше приложение с разных
              браузеров, значит нам необходимо поддерживать кроссбраузерность.
              Худший сценарий - верстка разъезжается в определенном браузере,
              что влияет на удобство/доступность сайта для нашего юзера. Так же,
              пользователь должен интуитивно понимать, где находится, например,
              кнопка, она не должна сливаться с полотном текста, иначе,
              возможно, пользователь начнет играть в Битву экстрасенсов.{" "}
            </Answer>
            <Answer>
              2. С точки зрения менеджера проекта, приложение должно позволять
              грамотно распределять обязаности. Так же, должно быть
              масштабируемым.
            </Answer>
            <Answer>
              3. Обычно, приложение выглядит так, как хочет дизайнер. В
              дальнейшем верстальщик уже может (или не может :С) оспорить
              некоторые моменты.
            </Answer>
            <Answer>
              4. Верстальщик должен получить адекватный макет, желательно не в
              PDF или в том же JPEG. Далее, если появляются определенные
              вопросы, то необходимо, чтобы была хоть какая - то связь с
              дизайнером, хоть через тимлида, хоть напрямую, например, уточнить
              стайлгайд (если он есть). Верстальщик, как и все фронтендеры
              должны оптимизировать максимально приложение, спрайты, минификация
              изображений, оптимизация изображений под определенные разрешения
              (picture), файлов, да и вообще, оптимизация всего. Конечно,
              желательно иметь одно семейство шрифтов и ровную сетку, для
              удобной верстки. Конечно же, необходимо тестировать свою верстку,
              смотреть, не уедет ли определенный блок при переполнении контента
              или иной ситуации. Верстальщик должен развиваться, например,
              понимать хотя бы базово flexbox, grid. Хотя бы немного понимать
              концепцию в семантики и доступности. Если же требуется жесткий
              Pixel Perfect, то можно использовать необходимые расширения из
              Chrome, например, Page Ruler или наложение картинки поверх
              приложения, для сравнения.
            </Answer>
            <Answer>
              5. В первую очередь, программист обязан сделать хоть краткую, но
              все же документацию. Например, с помощью JSDoc. Иметь при себе
              линтер и всякие prettier, что увеличит шансы на читаемый код. И
              опять же, читаемый и понятный (желательно) код. Использовать
              бабель тоже желательно. Понимать, какие библиотеки стоят своего
              внимание и грамотно выбирать инструменты (например, которые
              известны большинству разработчиков в его проф. области). Понимать,
              какие запросы контролировать (привет асинхронности) и какой
              контент необходим для первичного отображения страницы, ведь никто
              не любит ждать пока твоя страница загрузится через те же 30
              секунд. Стараться не завязнуть в легаси. Предлагать более новые
              или комфортные средства для разработки. Если же все же вести связь
              между фронтом и верстальщиком (а это не одно и тоже сейчас?), то
              фронт должен не испытывать серьезные трудности при работе с
              версткой и понимать хотя бы немного в верстке. Ну и пытаться не
              использовать innerHtml.
            </Answer>
            <Answer>
              6. Хороший принцип обмена данными между клиентом и сервером наше
              все. Отказоустойчивость, выбор подходящих БД/СУБД.
            </Answer>
          </Question>
          <Question>
            <QuestionContainer>
              <TitleQuestion>
                {" "}
                Опишите основные особенности верстки крупных многостраничных
                сайтов, дизайн которых может меняться в процессе реализации и
                поддержки. Расскажите о своем опыте верстки подобных сайтов:
                какие методологии, инструменты и технологии вы применяли на
                практике.{" "}
              </TitleQuestion>
            </QuestionContainer>
            <Answer>
              Лучше всего, при разработке приложения, использовать модульную
              структуру. Из этого следует, что желательно исключить
              взаимодействие и влияние одного модуля на внутренности другого
              модуля. С задачей модульности справляются многие инструменты,
              самое популярное - БЭМ методология. Использование препроцессоров
              или иных инструментов, может так же ускорить и облегчить,
              например, смену цвета используя определенные переменные. В работе
              с версткой я использовал БЭМ, SCSS, так же эксперементировал с
              CSS-Modules и Styled Components (+ Styled Map) в React при верстке
              Twitter и Trello (demo разумеется).
            </Answer>
          </Question>
          <Question>
            <QuestionContainer>
              <TitleQuestion>
                Опишите основные особенности верстки сайтов, которые должны
                одинаково хорошо отображаться как на любом современном
                компьютере, так и на смартфонах и планшетах под управлением iOS
                и Android. Расскажите о своем опыте верстки подобных сайтов:
                какие инструменты и технологии вы применяли, как проверяли
                результат на различных устройствах, какие именно устройства
                требовалось поддерживать.
              </TitleQuestion>
            </QuestionContainer>
            <Answer>
              Для удобной и быстрой верстки сайт с минимальными различиями в
              браузерах, используются normalize/reset, autoprefixer,
              медиа-запросы (если же рассужадем про верстку для таблеток или
              смартфонов).
            </Answer>
            <Answer>
              Normalize css - это небольшой CSS-файл, который обеспечивает для
              HTML-элементов лучшую кроссбраузерность в стилях по умолчанию. Это
              современная, готовая к HTML5 альтернатива традиционному reset.css.
            </Answer>
            <Answer>
              Autoprefixer - утилита нового поколения для добавления префиксов к
              экспериментальным свойствам из CSS 3. Она берёт с Can I Use
              последние данные о префиксах и популярности браузеров, читает ваш
              файл стилей, находит свойства и значения, которым действительно
              нужны префиксы и добавляет их.
            </Answer>
            <Answer>
              При прохождении курсов от HTML Academy, я поддерживал популярные
              браузеры (Chrome, Opera, Yandex, Firefox, Safari при наличии
              MacOS) и конечно IE11, Edge. При верстке для таблеток или
              смартфонов, я использовал Chrome DevTools, тестировал верстку на
              различных разрешениях, через Responsive пытался проверять под
              опрделенные мобильные устройства (но вроде для адекватной првоерки
              для мобильных устройств это не всегда подходит ?).
            </Answer>
            <LinkTo href="https://github.com/TchernyavskyDaniil">
              https://github.com/TchernyavskyDaniil
            </LinkTo>
            <LinkTo href="https://github.com/TchernyavskyDaniil/pink">
              https://github.com/TchernyavskyDaniil/pink
            </LinkTo>
            <LinkTo href="https://github.com/TchernyavskyDaniil/sedona">
              https://github.com/TchernyavskyDaniil/sedona
            </LinkTo>
          </Question>
          <Question>
            <QuestionContainer>
              <TitleQuestion>
                Расскажите, какие инструменты помогают вам экономить время в
                процессе написания, проверки и отладки кода.
              </TitleQuestion>
            </QuestionContainer>
            <Answer>
              IDE WebStorm. Линтеры, например, использую сборку airbnb для React
              в связске с Prettier, дабы держать чистый и настроенный код под
              себя с помощью одной клавиши или команды. Средства автоматизации
              сборки, раньше я использовал Gulp, но при работе с React/Vue чаще
              всего начинаю проект через CRA и потом Eject. Что позволяет
              немного разобраться в Webpack. Я не знаю, как происходит с SPA и в
              частности с CRA в реальных проектах (хватает ли всего того
              функционала под коробкой), из-за этого, пытаюсь иногда уделять
              вниманию изучению Webpack с помощью уроков, документации или
              просто сохраняя чужие конфиги на будущее. Для отладки кода или
              верстки я использую DevTools.
            </Answer>
          </Question>
          <Question>
            <QuestionContainer>
              <TitleQuestion>
                Вам нужно понять, почему страница отображается некорректно в
                Safari на iOS и в IE на Windows. Код писали не вы, доступа к
                исходникам у вас нет. Ваши действия? Сталкивались ли вы с
                подобными проблемами на практике?
              </TitleQuestion>
            </QuestionContainer>
            <Answer>
              В первую очередь, необходима ссылка на сайт :) Далее мы используем
              DevTools и выбираем необходимые модели телефна, либо
              crossbrowsertesting. Скажу честно, таких ситуаций у меня не было
              толком, из-за этого я не могу утверждать, что DeVTools отобразит
              так, как есть у нас в iOS. И в конечном итоге отлаживаем наш код в
              DevTools. Ситуация с IE на Windows, будет немного отличаться тем,
              что желательно иметь под рукой нужную ось. И опять же открываем
              тулз, но уже нужного нам IE. При прохождении курсов, я часто
              сталкивался с тем, что верстка на IE 11, Edge улетала, либо иные
              трудности связанные, например, с SVG или тегом Picture.
            </Answer>
          </Question>
          <Question>
            <QuestionContainer>
              <TitleQuestion>
                Дизайнер отдал вам макет, в котором не показано, как должны
                выглядеть интерактивные элементы при наведении мыши. Ваши
                действия?
              </TitleQuestion>
            </QuestionContainer>
            <Answer>
              {" "}
              Связаться с дизайнером, в случае не получения необходимой
              информации, оживить элементы, не отклоняясь от заданого дизайна,
              например, используя opacity или похожие цвета. При этом, уведомить
              тимлида, или того человека, перед которым ты отчитываешься или
              который проверяет твои pull requests.{" "}
            </Answer>
          </Question>
          <Question>
            <QuestionContainer>
              <TitleQuestion>
                Какие ресурсы вы используете для развития в профессиональной
                сфере? Приведите несколько конкретных примеров (сайты, блоги и
                так далее). Какое направление развития вам более близко:
                JS-программирование, HTML/CSS верстка или и то, и другое?
              </TitleQuestion>
            </QuestionContainer>
            <Answer>
              {" "}
              Я использую HTML Academy, а именно интерактивные курсы, но в
              настоящий момент все основное, что я хотел там изучить, уже
              прошел. Codewars когда есть желание или время :). Hexlet, было
              пройдено около 5-8 курсов в профессии фронтенд - разработчика.
              LearnJs (или просто Кантор), если есть необходимость вспомнить что
              - то по JS. Udemy - курсы, которые позволили базово пощупать Vue,
              React, Webpack, Python (для диплома). Codedojo - некоторые уроки,
              для изучения React и эко-системы Redux на базовых уровнях.
              Интенсивы у erodionov (React), Html Academy (Верстка 1, 2 уровень
              и JS 1 уровень (не до конца, нашел работу на тот момент), Learn js
              (Vue). Ну и конечно гугл наше все.{" "}
            </Answer>
            <Answer>
              Я пытаюсь и хочу развиваться в JS - программировании, постигая и
              повторяя основы языка, решая иногда определенные задачи на
              ресурсах, изучая новые технологии, такие как React, Vue, Angular.
              Но верстать тоже нравится (для определенных браузеров) используя
              современные средства разработки, например SCSS, Styled Components.
              Стараюсь найти работу с подходящим стеком технологий на
              сегодняшний день (из-за этого и решаю тестовое для вас).
            </Answer>
          </Question>
          <Question>
            <QuestionContainer>
              <TitleQuestion>
                Расскажите нам о себе и предоставьте несколько ссылок на
                последние работы, выполненные вами.
              </TitleQuestion>
            </QuestionContainer>
            <Answer>Все мои работы, вы можете найти в моем репозитории:</Answer>
            <LinkTo href="https://github.com/TchernyavskyDaniil">
              https://github.com/TchernyavskyDaniil
            </LinkTo>
            <Answer>
              Все работы выполненые мною (либо фактически мною, например
              Back-end часть не мною иногда).
              <LinkTo href="https://github.com/TchernyavskyDaniil/twitter-demo-frontend">
                Twitter Demo
              </LinkTo>
              (API, React, Styled Components, Helmet, React Router 4 и другое)
              <LinkTo href="https://github.com/TchernyavskyDaniil/trello-demo">
                Trello Demo
              </LinkTo>
              (Fake API json - server, React, Styled Components, React Router 4
              и замашки на Redux)
              <LinkTo href="https://github.com/TchernyavskyDaniil/user-list">
                Simple To-Do
              </LinkTo>
              (Fake API json - server, Vue, SCSS, Vue Router и другое)
              <LinkTo href="https://github.com/TchernyavskyDaniil/aviasales-demo-frontend">
                Aviasales Demo
              </LinkTo>
              (React, Styled Components, Helmet, React Router 4)
            </Answer>
            <Answer>Либо, просмотрите мою вакансию на hh</Answer>
            <LinkTo href="https://krasnodar.hh.ru/resume/588599cbff051897b10039ed1f455553465a53">
              Резюме
            </LinkTo>
          </Question>
        </Questions>
      </Main>
    </Container>
  </React.Fragment>
);
