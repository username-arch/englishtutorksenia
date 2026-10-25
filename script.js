/* ========================================================
   English Tutor Ksenia — Scripts & Translations
   ======================================================== */

// --- 1. Cal.com Inline Booking Embed ---
(function (C, A, L) {
  let p = function (a, ar) { a.q.push(ar); };
  let d = C.document;
  C.Cal = C.Cal || function () {
    let cal = C.Cal;
    let ar = arguments;
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q || [];
      d.head.appendChild(d.createElement("script")).src = A;
      cal.loaded = true;
    }
    if (ar[0] === L) {
      const api = function () { p(api, arguments); };
      const namespace = ar[1];
      api.q = api.q || [];
      if (typeof namespace === "string") {
        cal.ns[namespace] = cal.ns[namespace] || api;
        p(cal.ns[namespace], ar);
        p(cal, ["initNamespace", namespace]);
      } else p(cal, ar);
      return;
    }
    p(cal, ar);
  };
})(window, "https://app.cal.com/embed/embed.js", "init");

if (document.getElementById("cal-inline-booking")) {
  Cal("init", "booking", { origin: "https://app.cal.com" });
  Cal.ns.booking("inline", {
    elementOrSelector: "#cal-inline-booking",
    calLink: "englishtutorksenia/45-min-lesson",
    layout: "month_view"
  });
  Cal.ns.booking("ui", {
    theme: "light",
    styles: {
      branding: {
        brandColor: "#2446D8"
      }
    },
    hideEventTypeDetails: false,
    layout: "month_view"
  });
}

// --- 2. Multi-language System (EN / RU / UA) ---
const translations = {
  en: {
    page_title: "English Tutor Ksenia — 1-on-1 English Lessons on Zoom",
    page_desc: "Personal English lessons with Ksenia, a tutor with 6+ years of experience and 700+ students. 45-min trial lesson for $10.",
    nav_lessons: "Lessons",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    nav_book: "Book a trial",
    hero_badge: "One to one English lessons on Zoom",
    hero_h1: "You studied English for years.<br>Now start speaking it.",
    hero_sub: "Personal lessons with Ksenia, a tutor with 6+ years of experience and 700+ students. Practice in English from the first minute, with explanations in Russian whenever you need them.",
    hero_cta: "Book a $10 trial lesson",
    hero_note: "45 minutes · level check and personal plan · full refund if you cancel 24 hours ahead",
    hero_social: '"After 10 lessons I saw real progress." <span style="color: #555B6B">Olga</span>',
    hero_tutor: "Ksenia · English tutor",
    problem_h2: "You know the rules. The words just won't come.",
    problem_p: "Most of my students learned English at school or with apps: they understand what they read, but feel anxious before team meetings, job interviews or trips abroad. The solution isn't another textbook. It is talking, one to one, with someone who gently catches your mistakes and shows you how native speakers actually say it.",
    benefits_h2: "What changes when you study with me",
    b1_title: "You do the talking",
    b1_desc: "Lessons are built around speaking, with real idioms and everyday rhythm. Not repeating exercises out loud.",
    b2_title: "Nothing stays confusing",
    b2_desc: "Grammar is explained in Russian when English alone would slow you down, so you never leave a lesson puzzled.",
    b3_title: "A plan built on your goal",
    b3_desc: "A job interview, meetings at work, IELTS or TOEFL, or films without subtitles: every exercise connects to what you actually need.",
    b4_title: "Lessons that fit your week",
    b4_desc: "Book any free slot in your own time zone, and move it with 24 hours notice whenever life gets busy.",
    b5_title: "Culture, not only grammar",
    b5_desc: "Learn how Americans really say things, and the etiquette behind small talk, emails and workplace conversations.",
    tagline_1: "You already know more English than you think.",
    tagline_2: "Let's move it from your notebook into your conversations.",
    about_h2: "Hi, I'm Ksenia",
    about_p1: "I have taught English online for more than six years and worked with over 700 students, from beginners to professionals preparing for interviews. I speak English and Russian fluently and understand Ukrainian, so you can always ask a question in the language you think in.",
    about_p2: "Every lesson starts from one question: what do you need English for?",
    video_title: "Meet me in 2 minutes",
    lessons_h2: "Choose your lesson",
    lessons_sub: "Every lesson is 1-on-1 on Zoom. Materials, personal notes and homework are included.",
    card_trial_badge: "FIRST LESSON",
    card_trial_title: "Trial lesson",
    card_trial_desc: "Level check, your goals, and a personal study plan. We test how we work together.",
    card_conv_title: "Conversation practice",
    card_conv_desc: "Fluency, idioms and confidence in real conversations. We talk about topics you actually care about.",
    card_comp_title: "Complete English",
    card_comp_desc: "Speaking, grammar, listening, reading and writing in balance. Structured progress step by step.",
    card_trial_btn: "Book a $10 trial lesson",
    card_lesson_btn: "Book this lesson",
    pkg_title: "Save with a package",
    pkg_desc: "Use them for any mix of Conversation practice and Complete English.",
    pkg_5_title: "5 lessons · valid 2 months",
    pkg_5_note: "$27 a lesson · save $10",
    pkg_10_title: "10 lessons · valid 4 months",
    pkg_10_note: "$26 a lesson · save $30",
    how_h2: "From booking to speaking in three steps",
    s1_title: "Book your trial",
    s1_desc: "Pick a time in your own time zone and pay $10 securely.",
    s2_title: "Meet on Zoom",
    s2_desc: "It opens in your browser, no download needed. We check your level and start talking.",
    s3_title: "Get your plan",
    s3_desc: "You leave with a study plan and a recommended course, and decide whether to continue.",
    reviews_h2: "What students say",
    stat_students: "students taught",
    stat_years: "years teaching online",
    stat_langs: "lesson languages, Ukrainian understood",
    r1_text: '"A great tutor. Punctual, friendly, and she explains things clearly. After 10 lessons I saw real progress, and I'm definitely continuing."',
    r2_text: '"We all remember 'Who is on duty today?' from school. But how do you actually talk to native speakers, or understand all the idioms in American films? Lessons with Ksenia helped me with exactly that."',
    faq_h2: "Questions before your first lesson",
    cta_h2: "Your first English conversation can be this week",
    cta_p: "Start with one 45 minute trial lesson for $10. If it isn't for you, get a full refund for any lesson you haven't taken.",
    cta_btn: "Book a $10 trial lesson",
    cta_tg: 'Questions first? <a href="https://t.me/englishtutorksenia" style="color: #FFFFFF; font-weight: 600; text-decoration: underline">Message me on Telegram</a>',
    footer_desc: "One to one English lessons on Zoom, in English, Russian and Ukrainian.",
    footer_copy: "© 2021–2026 English Tutor Ksenia"
  },
  ru: {
    page_title: "Репетитор английского языка Ксения — Уроки онлайн в Zoom",
    page_desc: "Индивидуальные уроки английского с Ксенией — опыт 6+ лет, 700+ учеников. Пробный урок 45 минут за $10.",
    nav_lessons: "Уроки",
    nav_reviews: "Отзывы",
    nav_faq: "FAQ",
    nav_book: "Записаться",
    hero_badge: "Индивидуальные уроки английского по Zoom",
    hero_h1: "Учите английский годами?<br>Пора начать говорить.",
    hero_sub: "Персональные уроки с Ксенией — репетитором с опытом более 6 лет и 700+ учеников. Практика на английском с первой минуты с пояснениями на русском, когда это нужно.",
    hero_cta: "Записаться на пробный урок за $10",
    hero_note: "45 минут · определение уровня и личный план · полный возврат при отмене за 24 часа",
    hero_social: '«После 10 уроков я увидела реальный прогресс.» <span style="color: #555B6B">Ольга</span>',
    hero_tutor: "Ксения · Репетитор английского",
    problem_h2: "Вы знаете правила. Но слова словно застревают, когда нужно говорить.",
    problem_p: "Большинство моих учеников учили английский в школе или в приложениях: они понимают текст, но испытывают тревогу перед рабочими встречами, собеседованиями или поездками. Решение — не очередной учебник, а живая практика один на один с преподавателем, который бережно подскажет ошибки и научит говорить так, как говорят носители.",
    benefits_h2: "Что меняется, когда вы занимаетесь со мной",
    b1_title: "Говорите вы",
    b1_desc: "Уроки построены вокруг живой речи, современных идиом и естественного темпа, а не заучивания упражнений.",
    b2_title: "Всё становится понятно",
    b2_desc: "Грамматика объясняется на русском, если на английском это займет слишком много времени. Никаких непонятных пробелов.",
    b3_title: "План под вашу цель",
    b3_desc: "Собеседование, рабочие встречи, сдача IELTS/TOEFL или кино без субтитров: каждый урок работает на конкретную задачу.",
    b4_title: "Удобный график",
    b4_desc: "Бронируйте любое свободное окно в вашем часовом поясе и переносите уроки за 24 часа при необходимости.",
    b5_title: "Культура, а не только грамматика",
    b5_desc: "Вы узнаете, как на самом деле говорят американцы, правила small talk, деловой этикет и тонкости живого общения.",
    tagline_1: "Вы уже знаете английский лучше, чем вам кажется.",
    tagline_2: "Давайте перенесем его из тетрадей в живую речь.",
    about_h2: "Привет, я Ксения",
    about_p1: "Я преподаю английский онлайн уже более шести лет и провела занятия более чем для 700 учеников — от начинающих до специалистов, готовящихся к собеседованиям. Я свободно говорю на английском и русском и понимаю украинский, поэтому вы всегда можете задать вопрос на родном языке.",
    about_p2: "Каждый урок начинается с одного вопроса: для чего английский нужен именно вам?",
    video_title: "Познакомьтесь со мной за 2 минуты",
    lessons_h2: "Выберите формат урока",
    lessons_sub: "Каждый урок проходит 1-на-1 в Zoom. Все материалы, конспекты и домашние задания включены.",
    card_trial_badge: "ПЕРВЫЙ УРОК",
    card_trial_title: "Пробный урок",
    card_trial_desc: "Определение уровня, целей и составление индивидуального плана обучения.",
    card_conv_title: "Разговорная практика",
    card_conv_desc: "Беглость речи, идиомы и уверенность в диалоге на темы, которые интересны именно вам.",
    card_comp_title: "Комплексный курс",
    card_comp_desc: "Сбалансированное развитие разговорной речи, грамматики, аудирования и письма.",
    card_trial_btn: "Записаться на пробный урок за $10",
    card_lesson_btn: "Выбрать этот курс",
    pkg_title: "Выгодные пакеты",
    pkg_desc: "Используйте пакет для любых уроков разговорной практики или комплексного курса.",
    pkg_5_title: "5 уроков · действуют 2 месяца",
    pkg_5_note: "$27 за урок · скидка $10",
    pkg_10_title: "10 уроков · действуют 4 месяца",
    pkg_10_note: "$26 за урок · скидка $30",
    how_h2: "От бронирования до первого разговора — 3 шага",
    s1_title: "Запишитесь на урок",
    s1_desc: "Выберите удобное время в вашем часовом поясе и безопасно оплатите $10.",
    s2_title: "Встречаемся в Zoom",
    s2_desc: "Урок открывается прямо в браузере. Мы определим уровень и сразу начнем говорить.",
    s3_title: "Получите ваш план",
    s3_desc: "Вы уйдете с персональным планом занятий и решите, хотите ли продолжить обучение.",
    reviews_h2: "Что говорят ученики",
    stat_students: "учеников обучено",
    stat_years: "лет преподавания онлайн",
    stat_langs: "языки занятий (украинский понимает)",
    r1_text: '«Отличный репетитор! Пунктуальная, доброжелательная, умеет доходчиво объяснять материал. Я прошла 10 занятий, увидела значительный прогресс, обязательно продолжу уроки.»',
    r2_text: '«Все мы помним школьное "Who is on duty today?". Но как на самом деле общаться с иностранцами или понимать идиомы в фильмах? Уроки с Ксенией помогли именно в этом!»',
    faq_h2: "Частые вопросы перед первым уроком",
    cta_h2: "Ваш первый урок английского может быть уже на этой неделе",
    cta_p: "Начните с 45-минутного пробного урока за $10. Если не понравится — полный возврат денег за неиспользованные уроки.",
    cta_btn: "Записаться на пробный урок за $10",
    cta_tg: 'Есть вопросы? <a href="https://t.me/englishtutorksenia" style="color: #FFFFFF; font-weight: 600; text-decoration: underline">Напишите мне в Telegram</a>',
    footer_desc: "Индивидуальные уроки английского по Zoom на английском, русском и украинском языках.",
    footer_copy: "© 2021–2026 English Tutor Ksenia"
  },
  ua: {
    page_title: "Репетитор англійської мови Ксенія — Онлайн уроки в Zoom",
    page_desc: "Індивідуальні уроки англійської з Ксенією — досвід 6+ років, 700+ учнів. Пробний урок 45 хвилин за $10.",
    nav_lessons: "Уроки",
    nav_reviews: "Відгуки",
    nav_faq: "FAQ",
    nav_book: "Записатись",
    hero_badge: "Індивідуальні уроки англійської по Zoom",
    hero_h1: "Вчите англійську роками?<br>Час почати говорити.",
    hero_sub: "Персональні уроки з Ксенією — репетитором з досвідом понад 6 років та 700+ учнів. Практика англійською з першої хвилини з поясненнями, коли це потрібно.",
    hero_cta: "Записатися на пробний урок за $10",
    hero_note: "45 хвилин · визначення рівня та особистий план · повне повернення при скасуванні за 24 години",
    hero_social: '«Після 10 уроків я побачила реальний прогрес.» <span style="color: #555B6B">Ольга</span>',
    hero_tutor: "Ксенія · Репетитор англійської",
    problem_h2: "Ви знаєте правила. Але слова наче застряють, коли треба говорити.",
    problem_p: "Більшість моїх учнів вчили англійську в школі або в додатках: вони розуміють текст, але відчувають тривогу перед робочими зустрічами, співбесідами або поїздками. Рішення — не черговий підручник, а жива практика один на один з викладачем, який дбайливо виправить помилки і навчить говорити так, як говорять носії.",
    benefits_h2: "Що змінюється, коли ви займаєтесь зі мною",
    b1_title: "Говорите ви",
    b1_desc: "Уроки побудовані навколо розмовної практики, сучасних ідіом та природного темпу, а не повторення вправ.",
    b2_title: "Усе стає зрозуміло",
    b2_desc: "Граматика пояснюється просто та доступно, якщо англійською це складно. Жодних незрозумілих тем.",
    b3_title: "План під вашу мету",
    b3_desc: "Співбесіда, робочі дзвінки, складання IELTS/TOEFL або фільми без субтитрів: кожен урок націлений на результат.",
    b4_title: "Зручний розклад",
    b4_desc: "Бронюйте будь-яке вільне вікно у вашому часовому поясі та переносьте уроки за 24 години.",
    b5_title: "Культура, а не лише граматика",
    b5_desc: "Дізнайтеся, як насправді спілкуються американці, правила small talk та тонкощі живого спілкування.",
    tagline_1: "Ви вже знаєте англійську краще, ніж вам здається.",
    tagline_2: "Давайте перенесемо її із зошитів у живе спілкування.",
    about_h2: "Привіт, я Ксенія",
    about_p1: "Я викладаю англійську онлайн уже понад шість років і провела заняття для більш ніж 700 учнів — від початківців до спеціалістів, які готуються до співбесід. Я вільно розмовляю англійською та російською і розумію українську, тож ви завжди можете поставити запитання рідною мовою.",
    about_p2: "Кожен урок починається з одного питання: для чого англійська потрібна саме вам?",
    video_title: "Познайомтеся зі мною за 2 хвилини",
    lessons_h2: "Оберіть формат уроку",
    lessons_sub: "Кожен урок проходить 1-на-1 в Zoom. Усі матеріали, конспекти та домашні завдання включені.",
    card_trial_badge: "ПЕРШИЙ УРОК",
    card_trial_title: "Пробний урок",
    card_trial_desc: "Визначення рівня, цілей та складання індивідуального плану навчання.",
    card_conv_title: "Розмовна практика",
    card_conv_desc: "Вільне мовлення, ідіоми та впевненість у спілкуванні на теми, які цікаві саме вам.",
    card_comp_title: "Комплексний курс",
    card_comp_desc: "Збалансований розвиток розмовної мови, граматики, аудіювання та письма.",
    card_trial_btn: "Записатися на пробний урок за $10",
    card_lesson_btn: "Обрати цей курс",
    pkg_title: "Вигідні пакети",
    pkg_desc: "Використовуйте пакет для будь-яких уроків розмовної практики або комплексного курсу.",
    pkg_5_title: "5 уроків · дійсні 2 місяці",
    pkg_5_note: "$27 за урок · знижка $10",
    pkg_10_title: "10 уроків · дійсні 4 місяці",
    pkg_10_note: "$26 за урок · знижка $30",
    how_h2: "Від бронювання до першого уроку — 3 кроки",
    s1_title: "Запишіться на урок",
    s1_desc: "Оберіть зручний час у вашому часовому поясі та безпечно сплатіть $10.",
    s2_title: "Зустріч у Zoom",
    s2_desc: "Урок відкривається прямо в браузері. Ми визначимо рівень і одразу почнемо говорити.",
    s3_title: "Отримайте ваш план",
    s3_desc: "Ви отримаєте індивідуальний план навчання і вирішите, чи хочете продовжувати.",
    reviews_h2: "Що кажуть учні",
    stat_students: "учнів навчено",
    stat_years: "років викладання онлайн",
    stat_langs: "мови уроків (українську розуміє)",
    r1_text: '«Відмінний репетитор! Пунктуальна, доброзичлива, вміє дохідливо пояснювати матеріал. Я пройшла 10 занять, побачила значний прогрес, обов'язково продовжу уроки. Дякую за хорошу роботу!!»',
    r2_text: '«Усі ми пам'ятаємо шкільне "Who is on duty today?". Але як насправді спілкуватися з іноземцями або розуміти ідіоми в американських фільмах? Уроки з Ксенією допомогли саме в цьому!»',
    faq_h2: "Часті запитання перед першим уроком",
    cta_h2: "Ваш перший урок англійської може відбутися вже цього тижня",
    cta_p: "Почніть із 45-хвилинного пробного уроку за $10. Якщо вам не підійде — повне повернення коштів за непроведені уроки.",
    cta_btn: "Записатися на пробний урок за $10",
    cta_tg: 'Маєте запитання? <a href="https://t.me/englishtutorksenia" style="color: #FFFFFF; font-weight: 600; text-decoration: underline">Напишіть мені в Telegram</a>',
    footer_desc: "Індивідуальні уроки англійської по Zoom англійською, російською та українською мовами.",
    footer_copy: "© 2021–2026 English Tutor Ksenia"
  }
};

let currentLang = "en";

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}

  document.documentElement.lang = lang;
  document.documentElement.setAttribute("data-lang", lang);

  // Update active buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Update text elements with data-i18n
  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update document title and meta description
  if (t.page_title) document.title = t.page_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t.page_desc) metaDesc.setAttribute("content", t.page_desc);
}

// Initial language detection from URL param or localStorage
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get("lang");
  let savedLang = null;
  try {
    savedLang = localStorage.getItem("lang");
  } catch (e) {}

  const initialLang = langParam || savedLang || "en";
  if (initialLang && translations[initialLang]) {
    setLang(initialLang);
  }
});
