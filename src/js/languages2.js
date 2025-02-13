import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .init({
    lng: 'en',
    debug: false,
    resources: {
      en: {
        translation: {
          invisText: 'Thank you for your interest in cooperation!',
          modalAbout: 'About me',
          modalBenef: 'Benefits',
          modalProd: 'Projects',
          modalBtn: 'Order the project',
          modalAI: 'AI assistant',
          headerMenu: 'Menu',
          heroTitle: "HELLO. I'M FULLSTACK DEVELOPER LLOYD JEFFERSON",
          aboutText:
            "I work with people all over the world to create impressive and functional websites that reflect each client's unique personality.",
          aboutBigText1:
            'I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.',
          aboutBigText2:
            'Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software.',
          aboutRole: 'Role',
          aboutEdu: 'Education',
          benTitle: ' Benefits of working with me',

          benExpT: 'Expertise',
          benExpP:
            '  As a highly experienced developer, I have deep knowledge of programming and website development.',
          benComT: 'Communication',
          benComP:
            'Understanding your needs and wants is my priority and I am always open to discussions and corrections.',
          benArtT: 'Art',
          benArtP:
            ' Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life.',
          benUrgT: 'Urgent execution',
          benUrgP:
            'I understand how important time is to you. Ready to work quickly and  efficiently, without reducing the quality of work.',

          prodjectTitle:
            'Programming accross borders: ideas, technologies, innovations',
          prodjectBtn: 'See project',

          faqTitle1:
            'What programming languages ​​are most often used in your project?',
          faqTitle2: 'What are the deadlines for the project?',
          faqTitle3: 'What payment methods do you accept?',
          faqTitle4: 'How can I contact you?',
          faqTitle5: 'Do you provide advice or support?',
          faqTitle6:
            ' What does the process of developing a software product look like from idea to implementation?',
          faqPar1:
            ' In the field of we development, there are various technologies and programming languages. Typically, this includes a combination of  frontend (client side) and backend (server side) languages.',
          faqPar2:
            ' The terms of project implementation depend to a large extent on a  number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the  project.',
          faqPar3:
            'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
          faqPar4:
            'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
          faqPar5:
            'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
          faqPar6:
            'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
          review: 'Review',
          workToget: 'Let`s work together',
          workvalidTrue: 'Success!',
          workvalidfalse: 'Invalid email, try again',
          workComent: 'comments',
          workBtn: 'Send',
        },
      },
      ua: {
        translation: {
          invisText: 'Дякуємо за вашу зацікавленість у співпраці!',
          modalAbout: 'Про мене',
          modalBenef: 'Переваги',
          modalProd: 'Проекти',
          modalBtn: 'Замовити проект',
          modalAI: 'ШІ помічник',

          headerMenu: 'Меню',
          heroTitle: 'ПРИВІТ. Я FULLSTACK РОЗРОБНИК ЛЛОЙД ДЖЕФФЕРСОН',
          aboutText:
            'Я працюю з людьми по всьому світу, створюючи вражаючі та функціональні веб-сайти, які відображають унікальну індивідуальність кожного клієнта.',
          aboutBigText1:
            ' Я Ллойд Джефферсон, талановитий програміст з великим досвідом у розробці програмного забезпечення. Я розуміюся на різних мов програмування та технологій, завжди готовий вдосконалювати свої навички. Я завжди слідкую за останніми тенденціями та шукаю нестандартні, креативні рішення проблем. Маю  високий рівень аналітичних здібностей та вмію ефективно вирішувати навіть найскладніші завдання, що зустрічаються на шляху.',

          aboutBigText2:
            ' Вмію працювати як самостійно, так і в команді. Вмію ефективно співпрацювати з колегами, обмінюючись ідеями та знаходячи оптимальні рішення. Професійна зрілість дозволяє спокійно справлятися з викликами і стресовими ситуаціями, зберігаючи при цьому високу якість роботи. Я завжди шукаю можливості для самовдосконалення. Активно вивчаю нові технології та практики, щоб бути в курсі останніх інновацій. Маю глибоке розуміння різних мов програмування, фреймворків та архітектурних концепцій, які дозволяють мені створювати ефективне та масштабоване програмне забезпечення.',
          aboutRole: 'Роль',
          aboutEdu: 'Освіта',
          benTitle: ' Переваги роботи зі мною',

          benExpT: 'Експертиза',
          benExpP:
            '  Як досвідчений розробник, я маю глибокі знання в галузі програмування та розробки веб-сайтів.',
          benComT: 'Комунікація',
          benComP:
            'Розуміння ваших потреб і побажань є моїм пріоритетом, і я завжди відкритий до дискусій і коригувань.',
          benArtT: 'Мистецтво',
          benArtP:
            ' Завдяки своїй творчій натурі, я готовий приймати виклики і допомагати вам втілювати ваші ідеї в життя.',
          benUrgT: 'Термінове виконання',
          benUrgP:
            'Я розумію, наскільки важливий для вас час. Готовий працювати швидко та ефективно, не знижуючи якості роботи.',

          prodjectTitle:
            'Програмування без кордонів: ідеї, технології, інновації',
          prodjectBtn: 'Проект',

          faqTitle1:
            'Які мови програмування найчастіше використовуються у вашому проекті?',
          faqTitle2: 'Які терміни реалізації проекту?',
          faqTitle3: 'Які способи оплати ви приймаєте?',
          faqTitle4: "Як я можу з вами зв'язатися?",
          faqTitle5: 'Ви надаєте консультації чи підтримку?',
          faqTitle6:
            'Як виглядає процес розробки програмного продукту від ідеї до реалізації?',
          faqPar1:
            ' У сфері веб-розробки існують різні технології та мови програмування. Зазвичай це поєднання фронтенду (клієнтської частини) та бекенду (серверної частини).',
          faqPar2:
            ' Терміни реалізації проекту значною мірою залежать від низки факторів, таких як обсяг проекту, його складність та наявність ресурсів. Визначення точних термінів є складним завданням, і зазвичай це відбувається на етапі планування проекту.',
          faqPar3:
            'Оплата за допомогою кредитних і дебетових карток, таких як Visa, MasterCard, спеціалізованих електронних платіжних систем, таких як PayPal, а також платежі в криптовалютах, таких як Bitcoin, Ethereum та інших.',
          faqPar4:
            'У сфері веб-розробки існують різні технології та мови програмування. Зазвичай це поєднання фронтенду (клієнтської частини) та бекенду (серверної частини).',
          faqPar5:
            'Терміни реалізації проекту значною мірою залежать від низки факторів, таких як обсяг проекту, його складність та наявність ресурсів. Визначення точних термінів є складним завданням, і зазвичай це відбувається на етапі планування проекту.',
          faqPar6:
            'Оплата за допомогою кредитних і дебетових карток, таких як Visa, MasterCard, спеціалізованих електронних платіжних систем, таких як PayPal, а також платежі в криптовалютах, таких як Bitcoin, Ethereum та інших.',

          review: 'Відгуки',
          workToget: 'Працюймо разом',
          workvalidTrue: 'Успішно!',
          workvalidfalse: 'Неправильний email, спробуйте ще раз',
          workComent: 'коментар',
          workBtn: 'Надіслати',
        },
      },
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })
  .then(updateText);

function updateText() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    let translatedText = i18next.t(key);

    if (key === 'aboutText') {
      const lang = i18next.language;

      const replacements = {
        en: {
          original: 'functional websites',
          red: 'functional',
          gray: 'websites',
        },
        ua: {
          original: 'функціональні веб-сайти',
          red: 'функціональні',
          gray: 'веб-сайти,',
        },
      };

      const { red, gray } = replacements[lang];

      const regex = new RegExp(`(${red})(\\s*)(${gray})`, 'g');

      translatedText = translatedText.replace(
        regex,
        `<span class="accent-color-red">$1</span>$2<span class="shadow-text">$3</span>`
      );
    }

    el.innerHTML = translatedText;
  });
}

i18next.on('initialized', updateText);

document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();

    const currentLang = i18next.language;

    const nextLang = currentLang === 'en' ? 'ua' : 'en';

    i18next.changeLanguage(nextLang, () => {
      updateText();
      localStorage.setItem('i18nextLng', nextLang);
    });
  });
});
