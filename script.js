/* =============================================
   ENGLISH TUTOR KSENIA — script.js (v2)
   ============================================= */

// =============================================
//  TRANSLATIONS
// =============================================
const translations = {
  en: {
    page_title: "English Lessons Online - English Tutor Ksenia",
    page_desc: "Learn English online with Ksenia, a professional tutor. Zoom lessons tailored to your level. Speak fluently, pass exams, and get 50% off your trial lesson!",
    widget_tz: "🌍 Auto-detecting timezone",
    day_mon: "Mon", day_tue: "Tue", day_wed: "Wed", day_thu: "Thu", day_fri: "Fri",
    widget_month: "May 2026",
    nav_about: "About", nav_video: "Video", nav_courses: "Courses",
    nav_results: "Results", nav_reviews: "Reviews", nav_faq: "FAQ", nav_contact: "Contact",
    hero_badge: "🎓 Online English Lessons via Zoom",
    hero_h1_1: "Learning English Online",
    hero_h1_2: "With a Personal Tutor",
    hero_sub: "Lessons tailored to <em>your</em> goals, pace, and schedule.<br />Choose the course that fits you best.",
    hero_offer: "your first trial lesson",
    btn_book: "Book a Lesson", btn_watch: "▶ Watch Video", btn_book_now: "Book Now",
    video_label: "Watch & Learn", video_title: "See How Lessons Work",
    video_sub: "Get a feel for my teaching style before you book your first lesson",
    about_label: "About Ksenia", about_title: "Your English Tutor",
    about_badge: "years experience",
    about_p1: "I am Ksenia, a professional English tutor teaching online via Zoom. I speak English and Russian fluently, and Ukrainian at a beginner level — enough to understand my students.",
    about_p2: "My method is built around <strong>your individual goals</strong>: whether you want to pass an exam, speak fluently in business meetings, or simply enjoy American movies without subtitles.",
    about_li1: "✅ Lessons in English or Russian",
    about_li2: "✅ Flexible schedule — you pick the time",
    about_li3: "✅ 100% unique author's teaching technique",
    about_li4: "✅ Proven results with 700+ students",
    courses_label: "What I Offer", courses_title: "Popular Courses",
    courses_sub: "Every course is tailored to your level and learning objectives",
    course1_title: "First Lesson (Trial)", course1_desc: "A 45-minute trial session to discuss your learning goals, determine your current English level, and create a personalized study plan.", course1_tag: "45 minutes • $10.00",
    course2_title: "Conversation Practice", course2_desc: "Focus exclusively on speaking skills. Improve fluency, learn real-world idioms, expand active vocabulary, and build confidence talking about diverse topics.", course2_tag: "1 hour • $29.00",
    course3_title: "Formal Tutoring", course3_desc: "A comprehensive, structured lesson covering all language aspects: speaking, grammar, listening, reading, and writing, tailored to your professional or personal needs.", course3_tag: "1 hour • $29.00",
    courses_cta: "Book Your First Lesson — 50% Off",
    stat1: "Students have successfully completed the course",
    stat2: "Years of successful teaching",
    stat3: "Adaptive class schedule",
    stat4: "Unique author's teaching technique",
    booking_label: "Get Started", booking_title: "Book Your First Lesson",
    booking_sub: "Your first lesson is <strong>50% off</strong>. Pick a time that works for you.",
    step1_title: "Choose your course", step1_desc: "Tell me your level and goal",
    step2_title: "Pick a date & time", step2_desc: "Any time zone works",
    step3_title: "Join via Zoom", step3_desc: "No downloads needed",
    booking_question: "📞 Have questions? Call or message:",
    booking_policy: "💳 Payment is required at booking to secure your slot. Full refund if cancelled at least 24 hours in advance.",
    booking_policy_box: "💳 Payment secures your lesson. Full refund with 24h+ cancellation notice.",
    booking_cta_title: "Schedule Your Lesson",
    booking_cta_sub: "Click below to pick a time on my calendar",
    booking_btn: "Open Booking Calendar",
    booking_note: "* Secure booking via Cal.com",
    testimonials_label: "Student Reviews", testimonials_title: "Testimonials",
    review1_text: '"Who is on duty today? Напевно це речення ми запам\'ятали з уроків англійської мови назавжди. А от як почати спілкуватися з носіями мови? Як зрозуміти англійсько американські ідіоми яких так багато вживають у кінофільмах? У цьому мені допомогло спілкування онлайн з вчителем мови Ксенією. Я займаюсь в зручний для мене час у доброзичливій атмосфері і дізнаюсь багато нового про американські етикет, культуру та менталітет. Спробуйте і переконаєтесь самі."',
    review2_text: '"Отличный репетитор! Пунктуальная, доброжелательная, умеет доходчиво объяснять материал. Я прошла 10 занятий, увидела значительный прогресс, обязательно продолжу уроки. Спасибо за хорошую работу!!"',
    faq_label: "Questions & Answers",
    faq1_q: "Why is your first lesson paid and not free?", faq1_a: "I value your time. A small nominal fee helps to ensure the student is dedicated to learn.",
    faq2_q: "How often should I take classes with you?", faq2_a: "You can have classes as often as every day or every other day, and as minimum as one (1) time per week. Remember, 99% of the success of learning a language is being consistent and practicing every day. I recommend spending two (2) hours of self-study per each hour working with a teacher.",
    faq3_q: "When will I see my first results?", faq3_a: "Results depend on consistency. Students who practice daily typically notice improvements within 2–4 weeks.",
    faq4_q: "What languages do you speak?", faq4_a: "I speak English and Russian fluently. I also speak Ukrainian at a beginner level — enough to understand my students and make them feel comfortable.",
    faq5_q: "What is your cancelling and rescheduling policy?", faq5_a: "Please give at least 24 hours notice to cancel or reschedule a lesson. A full refund is provided for cancellations made at least 24 hours in advance.",
    faq6_q: "What payment methods do you accept?", faq6_a: "Visa, MasterCard, Discover, American Express, JCB, and PayPal.",
    faq7_q: "What is your money back policy?", faq7_a: "Payment is required at the time of booking to secure your lesson slot. A full refund is provided for cancellations made at least 24 hours before the scheduled lesson. No refund for cancellations with less than 24 hours notice or completed lessons.",
    faq8_q: "What if I am running late?", faq8_a: "The lesson will be started and finished at the scheduled time.",
    footer_desc: "Online English Lessons via Zoom. Teaching in English, Ukrainian, and Russian.",
    footer_links: "Quick Links", footer_book: "Book a Lesson",
    footer_connect: "Connect with Me", footer_message: "Send a Message",
    form_name: "Your name", form_email: "Your email", form_msg: "Your message",
    form_send: "Send Message", form_success: "✅ Message sent! I'll get back to you soon."
  },
  ru: {
    page_title: "Английский язык онлайн - Репетитор Ксения",
    page_desc: "Учите английский онлайн с репетитором Ксенией. Индивидуальные уроки в Zoom на английском или русском. Скидка 50% на пробный урок!",
    widget_tz: "🌍 Определение часового пояса",
    day_mon: "Пн", day_tue: "Вт", day_wed: "Ср", day_thu: "Чт", day_fri: "Пт",
    widget_month: "Май 2026",
    nav_about: "Обо мне", nav_video: "Видео", nav_courses: "Курсы",
    nav_results: "Результаты", nav_reviews: "Отзывы", nav_faq: "FAQ", nav_contact: "Контакты",
    hero_badge: "🎓 Онлайн уроки английского по Zoom",
    hero_h1_1: "Изучение английского онлайн",
    hero_h1_2: "С персональным репетитором",
    hero_sub: "Занятия подстроены под <em>ваши</em> цели, темп и расписание.<br />Выберите подходящий курс.",
    hero_offer: "скидка на первый пробный урок",
    btn_book: "Записаться на урок", btn_watch: "▶ Смотреть видео", btn_book_now: "Записаться",
    video_label: "Смотри и учись", video_title: "Как проходят занятия",
    video_sub: "Познакомьтесь с моим стилем преподавания перед первым уроком",
    about_label: "О Ксении", about_title: "Ваш репетитор по английскому",
    about_badge: "лет опыта",
    about_p1: "Меня зовут Ксения, я профессиональный репетитор по английскому языку. Провожу онлайн-занятия по Zoom. Свободно говорю на английском и русском; украинский понимаю на начальном уровне.",
    about_p2: "Мой метод строится на <strong>ваших индивидуальных целях</strong>: хотите сдать экзамен, свободно говорить на деловых встречах или смотреть американские фильмы в оригинале.",
    about_li1: "✅ Занятия на английском, украинском или русском",
    about_li2: "✅ Гибкое расписание — вы выбираете время",
    about_li3: "✅ 100% авторская методика преподавания",
    about_li4: "✅ Проверенные результаты с 700+ студентами",
    courses_label: "Что я предлагаю", courses_title: "Популярные курсы",
    courses_sub: "Каждый курс адаптирован под ваш уровень и цели",
    course1_title: "Пробный урок", course1_desc: "Пробное 45-минутное занятие для обсуждения ваших целей обучения, определения текущего уровня английского и составления индивидуального плана.", course1_tag: "45 минут • $10.00",
    course2_title: "Разговорная практика", course2_desc: "Фокус исключительно на разговорных навыках. Улучшайте беглость речи, изучайте живые идиомы, расширяйте активный словарный запас и преодолевайте языковой барьер.", course2_tag: "1 час • $29.00",
    course3_title: "Академическое обучение", course3_desc: "Комплексный структурированный урок, охватывающий все аспекты языка: говорение, грамматику, аудирование, чтение и письмо, адаптированный под ваши цели.", course3_tag: "1 час • $29.00",
    courses_cta: "Записаться на первый урок — скидка 50%",
    stat1: "Студентов успешно прошли курс",
    stat2: "Лет успешной работы",
    stat3: "Гибкое расписание занятий",
    stat4: "Авторская методика преподавания",
    booking_label: "Начать", booking_title: "Записаться на первый урок",
    booking_sub: "Первый урок со скидкой <strong>50%</strong>. Выберите удобное время.",
    step1_title: "Выберите курс", step1_desc: "Расскажите о своём уровне и цели",
    step2_title: "Выберите дату и время", step2_desc: "Любой часовой пояс",
    step3_title: "Подключитесь по Zoom", step3_desc: "Установка не требуется",
    booking_question: "📞 Есть вопросы? Звоните или пишите:",
    booking_policy: "💳 Оплата при бронировании подтверждает ваше место. Полный возврат при отмене не менее чем за 24 часа.",
    booking_policy_box: "💳 Оплата подтверждает ваш урок. Полный возврат при отмене за 24ч+.",
    booking_cta_title: "Запланировать урок",
    booking_cta_sub: "Нажмите ниже, чтобы выбрать время в моём календаре",
    booking_btn: "Открыть календарь записи",
    booking_note: "* Надежное бронирование через Cal.com",
    testimonials_label: "Отзывы студентов", testimonials_title: "Отзывы",
    review1_text: '"Who is on duty today? Напевно це речення ми запам\'ятали з уроків англійської мови назавжди. У цьому мені допомогло спілкування онлайн з вчителем мови Ксенією. Спробуйте і переконаєтесь самі."',
    review2_text: '"Отличный репетитор! Пунктуальная, доброжелательная, умеет доходчиво объяснять материал. Я прошла 10 занятий, увидела значительный прогресс, обязательно продолжу уроки. Спасибо за хорошую работу!!"',
    faq_label: "Вопросы и ответы",
    faq1_q: "Почему первый урок платный, а не бесплатный?", faq1_a: "Я ценю ваше время. Небольшая символическая плата гарантирует серьёзный настрой студента.",
    faq2_q: "Как часто нужно заниматься?", faq2_a: "Можно заниматься каждый день или через день, минимум — один раз в неделю. 99% успеха — это регулярность. Рекомендую тратить 2 часа самостоятельной практики на каждый час занятий с преподавателем.",
    faq3_q: "Когда появятся первые результаты?", faq3_a: "При ежедневной практике улучшения заметны уже через 2–4 недели. Главное — регулярность.",
    faq4_q: "На каких языках вы говорите?", faq4_a: "Я свободно говорю на английском и русском языках. Также говорю на украинском на начальном уровне — достаточно, чтобы понимать студентов и создать комфортную атмосферу.",
    faq5_q: "Какова политика отмены и переноса занятий?", faq5_a: "Пожалуйста, предупреждайте об отмене за 24 часа. Полный возврат средств при отмене не менее чем за 24 часа до занятия.",
    faq6_q: "Какие способы оплаты вы принимаете?", faq6_a: "Visa, MasterCard, Discover, American Express, JCB и PayPal.",
    faq7_q: "Какова политика возврата денег?", faq7_a: "Оплата требуется при бронировании для подтверждения вашего урока. Полный возврат возможен при отмене не менее чем за 24 часа до занятия. При отмене менее чем за 24 часа или за проведённые уроки деньги не возвращаются.",
    faq8_q: "Что если я опаздываю?", faq8_a: "Урок начинается и заканчивается по расписанию.",
    footer_desc: "Онлайн уроки английского по Zoom. Преподавание на английском, украинском и русском.",
    footer_links: "Быстрые ссылки", footer_book: "Записаться",
    footer_connect: "Связаться со мной", footer_message: "Написать сообщение",
    form_name: "Ваше имя", form_email: "Ваш email", form_msg: "Ваше сообщение",
    form_send: "Отправить", form_success: "✅ Сообщение отправлено! Скоро отвечу."
  },
  ua: {
    page_title: "Англійська мова онлайн - Репетитор Ксенія",
    page_desc: "Вивчайте англійську онлайн з репетитором Ксенією. Індивідуальні уроки в Zoom англійською, українською чи російською. Знижка 50% на пробне заняття!",
    widget_tz: "🌍 Визначення часового поясу",
    day_mon: "Пн", day_tue: "Вт", day_wed: "Ср", day_thu: "Чт", day_fri: "Пт",
    widget_month: "Травень 2026",
    nav_about: "Про мене", nav_video: "Відео", nav_courses: "Курси",
    nav_results: "Результати", nav_reviews: "Відгуки", nav_faq: "FAQ", nav_contact: "Контакти",
    hero_badge: "🎓 Онлайн уроки англійської по Zoom",
    hero_h1_1: "Вивчення англійської онлайн",
    hero_h1_2: "З персональним репетитором",
    hero_sub: "Заняття підлаштовані під <em>ваші</em> цілі, темп і розклад.<br />Оберіть курс, який підходить саме вам.",
    hero_offer: "знижка на перший пробний урок",
    btn_book: "Записатися на урок", btn_watch: "▶ Дивитися відео", btn_book_now: "Записатись",
    video_label: "Дивись і вчись", video_title: "Як проходять заняття",
    video_sub: "Ознайомтеся з моїм стилем викладання перед першим уроком",
    about_label: "Про Ксенію", about_title: "Ваш репетитор з англійської",
    about_badge: "роки досвіду",
    about_p1: "Мене звати Ксенія, я професійний репетитор з англійської мови. Проводжу онлайн-заняття по Zoom. Вільно розмовляю англійською та російською; українську розумію на початковому рівні.",
    about_p2: "Мій метод побудований на <strong>ваших індивідуальних цілях</strong>: хочете скласти іспит, вільно спілкуватися на ділових зустрічах або дивитися американські фільми в оригіналі.",
    about_li1: "✅ Заняття англійською, українською або російською",
    about_li2: "✅ Гнучкий графік — ви обираєте час",
    about_li3: "✅ 100% авторська методика викладання",
    about_li4: "✅ Перевірені результати з 700+ студентами",
    courses_label: "Що я пропоную", courses_title: "Популярні курси",
    courses_sub: "Кожен курс адаптований під ваш рівень та цілі",
    course1_title: "Пробне заняття", course1_desc: "Пробне 45-хвилинне заняття для обговорення ваших цілей навчання, визначення поточного рівня англійської та складання індивідуального плану.", course1_tag: "45 хвилин • $10.00",
    course2_title: "Розмовна практика", course2_desc: "Фокус виключно на розмовних навичках. Покращуйте швидкість мовлення, вивчайте живі ідіоми, розширюйте словниковий запас та долайте мовний бар'єр.", course2_tag: "1 година • $29.00",
    course3_title: "Академічне навчання", course3_desc: "Комплексний структурований урок, що охоплює всі аспекти мови: говоріння, граматику, аудіювання, читання та письмо, адаптований під ваші цілі.", course3_tag: "1 година • $29.00",
    courses_cta: "Записатися на перший урок — знижка 50%",
    stat1: "Студентів успішно пройшли курс",
    stat2: "Роки успішної роботи",
    stat3: "Гнучкий графік занять",
    stat4: "Авторська методика викладання",
    booking_label: "Почати", booking_title: "Записатися на перший урок",
    booking_sub: "Перший урок зі знижкою <strong>50%</strong>. Оберіть зручний час.",
    step1_title: "Оберіть курс", step1_desc: "Розкажіть про свій рівень та ціль",
    step2_title: "Оберіть дату і час", step2_desc: "Будь-який часовий пояс",
    step3_title: "Підключіться по Zoom", step3_desc: "Встановлення не потрібне",
    booking_question: "📞 Є питання? Телефонуйте або пишіть:",
    booking_policy: "💳 Оплата при бронюванні підтверджує ваше місце. Повне повернення коштів при скасуванні не менш ніж за 24 години.",
    booking_policy_box: "💳 Оплата підтверджує ваш урок. Повне повернення при скасуванні за 24г+.",
    booking_cta_title: "Запланувати урок",
    booking_cta_sub: "Натисніть нижче, щоб обрати час у моєму календарі",
    booking_btn: "Відкрити календар запису",
    booking_note: "* Надійне бронювання через Cal.com",
    testimonials_label: "Відгуки студентів", testimonials_title: "Відгуки",
    review1_text: '"Who is on duty today? Напевно це речення ми запам\'ятали з уроків англійської мови назавжди. У цьому мені допомогло спілкування онлайн з вчителем мови Ксенією. Я займаюсь в зручний для мене час у доброзичливій атмосфері. Спробуйте і переконаєтесь самі."',
    review2_text: '"Відмінний репетитор! Пунктуальна, доброзичлива, вміє дохідливо пояснювати матеріал. Я пройшла 10 занять, побачила значний прогрес, обов\'язково продовжу уроки. Дякую за хорошу роботу!!"',
    faq_label: "Питання та відповіді",
    faq1_q: "Чому перший урок платний, а не безкоштовний?", faq1_a: "Я ціную ваш час. Невелика символічна плата гарантує серйозний настрій студента.",
    faq2_q: "Як часто потрібно займатися?", faq2_a: "Можна займатися щодня або через день, мінімум — один раз на тиждень. 99% успіху — це регулярність. Рекомендую витрачати 2 години самостійної практики на кожну годину занять з викладачем.",
    faq3_q: "Коли з'являться перші результати?", faq3_a: "При щоденній практиці покращення помітні вже через 2–4 тижні. Головне — регулярність.",
    faq4_q: "Якими мовами ви розмовляєте?", faq4_a: "Я вільно розмовляю англійською та російською. Також розмовляю українською на початковому рівні — достатньо, щоб розуміти студентів та зробити їх комфортними.",
    faq5_q: "Яка політика скасування та перенесення занять?", faq5_a: "Будь ласка, попереджайте про скасування за 24 години. Повне повернення коштів при скасуванні не менш ніж за 24 години до заняття.",
    faq6_q: "Які способи оплати ви приймаєте?", faq6_a: "Visa, MasterCard, Discover, American Express, JCB та PayPal.",
    faq7_q: "Яка політика повернення коштів?", faq7_a: "Оплата потрібна при бронюванні для підтвердження вашого уроку. Повне повернення можливе при скасуванні не менш ніж за 24 години до заняття. При скасуванні менш ніж за 24 години або за проведені уроки кошти не повертаються.",
    faq8_q: "Що якщо я запізнююся?", faq8_a: "Урок починається і закінчується за розкладом.",
    footer_desc: "Онлайн уроки англійської по Zoom. Викладання англійською, українською та російською.",
    footer_links: "Швидкі посилання", footer_book: "Записатися",
    footer_connect: "Зв'язатися зі мною", footer_message: "Написати повідомлення",
    form_name: "Ваше ім'я", form_email: "Ваш email", form_msg: "Ваше повідомлення",
    form_send: "Надіслати", form_success: "✅ Повідомлення надіслано! Незабаром відповім."
  }
};

// =============================================
//  LANGUAGE SWITCHER
// =============================================
let currentLang = localStorage.getItem('lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Update html attribute
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'ua' ? 'uk' : lang);

  const t = translations[lang];

  // Update document title
  if (t.page_title) {
    document.title = t.page_title;
  }
  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t.page_desc) {
    metaDesc.setAttribute('content', t.page_desc);
  }

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Update active button state — both desktop and mobile
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

// Apply saved language on load
setLang(currentLang);

// =============================================
//  NAVBAR SCROLL
// =============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// =============================================
//  MOBILE MENU
// =============================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('open');
}

// =============================================
//  SCROLL-REVEAL (fade-in)
// =============================================
const fadeEls = document.querySelectorAll('.fade-in');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => revealObserver.observe(el));

// =============================================
//  ANIMATED COUNTERS
// =============================================
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  if (isNaN(target)) return;
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

const statsSection = document.getElementById('stats');
const statsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    document.querySelectorAll('.stat-number[data-target]').forEach(animateCounter);
    statsObserver.disconnect();
  }
}, { threshold: 0.3 });
if (statsSection) statsObserver.observe(statsSection);

// =============================================
//  FAQ ACCORDION
// =============================================
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// =============================================
//  CONTACT FORM
// =============================================
function handleForm(e) {
  e.preventDefault();
  const name    = document.getElementById('form-name').value.trim();
  const email   = document.getElementById('form-email').value.trim();
  const message = document.getElementById('form-message').value.trim();
  if (!name || !email || !message) return;

  const subject = encodeURIComponent(`Message from ${name} — English Tutor Ksenia`);
  const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');

  const successEl = document.getElementById('formSuccess');
  successEl.style.display = 'block';
  e.target.reset();
  setTimeout(() => { successEl.style.display = 'none'; }, 6000);
}

// =============================================
//  SMOOTH ACTIVE NAV HIGHLIGHT
// =============================================
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks  = document.querySelectorAll('nav a, .mobile-menu a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
}, { passive: true });

