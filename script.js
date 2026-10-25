/* ========================================================
   English Tutor Ksenia — Scripts & Full Translations
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

// --- 2. Complete Multi-language Translations (EN / RU / UA) ---
const translations = {
  "en": {
    "page_title": "English Tutor Ksenia — 1-on-1 English Lessons on Zoom",
    "page_desc": "Personal English lessons with Ksenia, a tutor with 6+ years of experience and 700+ students. 45-min trial lesson for $10.",
    "nav_skip": "Skip to content",
    "nav_lessons": "Lessons",
    "nav_reviews": "Reviews",
    "nav_faq": "FAQ",
    "nav_book": "Book a trial",
    "hero_badge": "Online English Lessons via Zoom",
    "hero_h1": "You studied English for years.<br>Now start speaking it.",
    "hero_sub": "Personal lessons with Ksenia, a tutor with 6+ years of experience and 700+ students. Practice in English from the first minute, with explanations in Russian whenever you need them.",
    "hero_cta": "Book a $10 trial lesson",
    "hero_note": "45 minutes · level check and personal plan · full refund if you cancel 24 hours ahead",
    "hero_social": "\"After 10 lessons I saw real progress.\" <span style=\"color: #555B6B\">Olga</span>",
    "zoom_title": "Lesson with Ksenia",
    "zoom_tutor_badge": "<span style=\"width: 8px; height: 8px; border-radius: 9999px; background: #3DD68C\"></span>Ksenia · English tutor",
    "problem_h2": "You know the rules. The words just won't come.",
    "problem_p": "Most of my students learned English at school. They can read, they know the grammar, but when it's time to speak in a meeting, an interview or while travelling, the words freeze. The solution is simple: one to one practice with someone who catches your mistakes gently and teaches you the phrases native speakers actually use.",
    "benefits_h2": "What changes when you study with me",
    "b1_title": "You do the talking",
    "b1_desc": "Lessons are built around speaking, with real idioms and everyday topics. You practice talking, not reading grammar tables.",
    "b2_title": "Nothing stays confusing",
    "b2_desc": "Grammar is explained in Russian when English alone would slow you down, so you never leave a lesson puzzled.",
    "b3_title": "A plan built on your goal",
    "b3_desc": "A job interview, meetings at work, IELTS or TOEFL, or films without subtitles: every exercise connects to what you actually need.",
    "b4_title": "Lessons that fit your week",
    "b4_desc": "Book any free slot in your own time zone, and move it with 24 hours notice whenever life gets busy.",
    "b5_title": "Culture, not only grammar",
    "b5_desc": "Learn how Americans really say things, and the etiquette behind small talk, emails and workplace conversations.",
    "tagline": "<span>You already know more English than you think.</span> <span style=\"color: rgba(255,255,255,0.4)\">Let's move it from your notebook into your conversations.</span>",
    "about_h2": "Hi, I'm Ksenia",
    "about_p1": "I have taught English online for more than six years and worked with over 700 students, from beginners to professionals preparing for interviews. I speak English and Russian fluently and understand Ukrainian, so you can always ask a question in the language you think in.",
    "about_p2": "Every lesson starts from one question: what do you need English for?",
    "video_title": "Meet me in 2 minutes",
    "lessons_h2": "Choose your lesson",
    "lessons_sub": "Every lesson is one to one on Zoom. Start with the trial and we choose the best path together. Materials, personal notes and homework are included.",
    "card_trial_badge": "Start here",
    "card_trial_title": "Trial lesson",
    "card_trial_desc": "Level check, your goals, and a personal study plan.",
    "card_trial_price": "<span>$10</span><span style=\"font-size: 16px; font-weight: 500; color: #555B6B\">45 min</span>",
    "card_conv_title": "Conversation practice",
    "card_conv_desc": "Fluency, idioms and confidence in real conversations.",
    "card_conv_price": "<span>$29</span><span style=\"font-size: 16px; font-weight: 500; color: #555B6B\">60 min</span>",
    "card_conv_btn": "Book this lesson",
    "card_comp_title": "Complete English",
    "card_comp_desc": "Speaking, grammar, listening, reading and writing for work or study.",
    "card_comp_price": "<span>$29</span><span style=\"font-size: 16px; font-weight: 500; color: #555B6B\">60 min</span>",
    "card_comp_btn": "Book this lesson",
    "pkg_title": "Save with a package",
    "pkg_desc": "Use them for any mix of Conversation practice and Complete English. Lessons never expire.",
    "pkg_5_title": "5 lessons · valid 2 months",
    "pkg_5_note": "$27 a lesson · save $10",
    "pkg_10_title": "10 lessons · valid 4 months",
    "pkg_10_note": "$26 a lesson · save $30",
    "how_h2": "From booking to speaking in three steps",
    "s1_title": "Book your trial",
    "s1_desc": "Pick a time in your own time zone and pay $10 securely.",
    "s2_title": "Meet on Zoom",
    "s2_desc": "It opens in your browser, no download needed. We check your level and start talking.",
    "s3_title": "Get your plan",
    "s3_desc": "You leave with a study plan and a recommended course, and book again only if you want to.",
    "booking_note": "* Secure booking via Cal.com",
    "reviews_h2": "What students say",
    "stat_students_label": "students taught",
    "stat_years_label": "years teaching online",
    "stat_langs_label": "lesson languages, Ukrainian understood",
    "r1_quote": "\"A great tutor. Punctual, friendly, and she explains things clearly. After 10 lessons I saw real progress, and I'm definitely continuing.\"",
    "r1_author": "<span style=\"width: 40px; height: 40px; border-radius: 9999px; background: #EEF1FC; color: #2446D8; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px\">O</span><span style=\"font-weight: 600\">Olga</span>",
    "r2_quote": "\"We all remember 'Who is on duty today?' from school. But how do you actually talk to native speakers, or understand all the idioms in American films? Lessons with Ksenia helped me with exactly that.\"",
    "r2_author": "<span style=\"width: 40px; height: 40px; border-radius: 9999px; background: #EEF1FC; color: #2446D8; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px\">M</span><span style=\"font-weight: 600\">Marina</span>",
    "faq_h2": "Questions before your first lesson",
    "faq_q1": "Why is the trial lesson paid? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a1": "It costs $10 so we both arrive ready to work. You still get a full 45 minute lesson, an honest check of your level, and a personal study plan.",
    "faq_q2": "Can I get my money back? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a2": "Yes, for any lesson you have paid for but not taken yet. Completed lessons are not refundable.",
    "faq_q3": "Can I cancel or reschedule? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a3": "Yes. Give at least 24 hours notice and you get a full refund or a new time, whichever you prefer.",
    "faq_q4": "How do I pay? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a4": "When you book, by Visa, Mastercard, Discover, American Express, JCB or Diners Club through Stripe. You can also pay via PayPal if you prefer.",
    "faq_q5": "Can I buy several lessons at once? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a5": "Yes. 5 lessons cost $135 ($27 each) and are valid for 2 months. 10 lessons cost $260 ($26 each) and are valid for 4 months.",
    "faq_q6": "What level do I need? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a6": "Any. Every lesson is matched to your level, from complete beginner to advanced.",
    "faq_q7": "Do I need to speak English to start? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a7": "No. I can explain everything in Russian, and I understand Ukrainian. You will never feel lost.",
    "faq_q8": "How often should I have lessons? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a8": "At least once a week; two or three times is better. Plan about two hours of homework between lessons.",
    "faq_q9": "When will I notice progress? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a9": "Students who practise every day usually feel a difference within two to three weeks. After 10 lessons, most speak noticeably more freely.",
    "faq_q10": "Do you prepare students for exams? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a10": "Yes, IELTS and TOEFL. Tell me your exam date in the trial lesson and we'll build a preparation plan.",
    "faq_q11": "What do I need for a lesson? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a11": "A computer or phone, headphones and a quiet room. Zoom opens in your browser, no download needed.",
    "faq_q12": "What if I'm running late? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a12": "The lesson still ends at its scheduled time, so try to join a couple of minutes early.",
    "cta_h2": "Your first English conversation can be this week",
    "cta_p": "Start with one 45 minute lesson for $10. Reschedule or cancel free up to 24 hours ahead.",
    "cta_tg": "Questions first? <a href=\"https://t.me/englishtutorksenia\" style=\"color: #FFFFFF; font-weight: 600; text-decoration: underline\">Message me on Telegram</a>",
    "footer_desc": "One to one English lessons on Zoom, in English, Russian and Ukrainian.",
    "footer_privacy": "Privacy policy",
    "footer_terms": "Terms",
    "footer_copy": "© 2021–2026 English Tutor Ksenia",
    "pkg_btn": "Buy package"
  },
  "ru": {
    "page_title": "Репетитор английского языка Ксения — Уроки онлайн в Zoom",
    "page_desc": "Индивидуальные уроки английского с Ксенией — опыт 6+ лет, 700+ учеников. Пробный урок 45 минут за $10.",
    "nav_skip": "Перейти к контенту",
    "nav_lessons": "Уроки",
    "nav_reviews": "Отзывы",
    "nav_faq": "FAQ",
    "nav_book": "Записаться",
    "hero_badge": "Онлайн-уроки английского по Zoom",
    "hero_h1": "Учите английский годами?<br>Пора начать говорить.",
    "hero_sub": "Персональные уроки с Ксенией — репетитором с опытом более 6 лет и 700+ учеников. Практика на английском с первой минуты с пояснениями на русском, когда это нужно.",
    "hero_cta": "Записаться на пробный урок за $10",
    "hero_note": "45 минут · определение уровня и личный план · полный возврат при отмене за 24 часа",
    "hero_social": "«После 10 уроков я увидела реальный прогресс.» <span style=\"color: #555B6B\">Ольга</span>",
    "zoom_title": "Урок с Ксенией",
    "zoom_tutor_badge": "<span style=\"width: 8px; height: 8px; border-radius: 9999px; background: #3DD68C\"></span>Ксения · Репетитор английского",
    "problem_h2": "Вы знаете правила. Но слова словно застревают, когда нужно говорить.",
    "problem_p": "Большинство моих учеников учили английский в школе. Они умеют читать, знают грамматику, но когда приходит время говорить на встрече, собеседовании или в поездке — слова пропадают. Решение простое: живая практика один на один с преподавателем, который бережно подскажет ошибки и научит фразам, которые реально используют носители.",
    "benefits_h2": "Что меняется, когда вы занимаетесь со мной",
    "b1_title": "Говорите вы",
    "b1_desc": "Уроки построены вокруг живой речи, современных идиом и повседневных тем. Вы говорите, а не читаете таблицы с правилами.",
    "b2_title": "Всё становится понятно",
    "b2_desc": "Грамматика объясняется на русском, если на английском это займет слишком много времени. Никаких непонятных пробелов.",
    "b3_title": "План под вашу цель",
    "b3_desc": "Собеседование, рабочие встречи, сдача IELTS или TOEFL, фильмы без субтитров: каждое задание работает на вашу задачу.",
    "b4_title": "Удобный график",
    "b4_desc": "Бронируйте любое свободное окно в вашем часовом поясе и переносите уроки за 24 часа при необходимости.",
    "b5_title": "Культура, а не только грамматика",
    "b5_desc": "Вы узнаете, как на самом деле говорят американцы, правила small talk, деловой этикет и тонкости живого общения.",
    "tagline": "<span>Вы уже знаете английский лучше, чем вам кажется.</span> <span style=\"color: rgba(255,255,255,0.4)\">Давайте перенесем его из тетрадей в живую речь.</span>",
    "about_h2": "Привет, я Ксения",
    "about_p1": "Я преподаю английский онлайн уже более шести лет и провела занятия более чем для 700 учеников — от начинающих до специалистов, готовящихся к собеседованиям. Я свободно говорю на английском и русском и понимаю украинский, поэтому вы всегда можете задать вопрос на родном языке.",
    "about_p2": "Каждый урок начинается с одного вопроса: для чего английский нужен именно вам?",
    "video_title": "Познакомьтесь со мной за 2 минуты",
    "lessons_h2": "Выберите формат урока",
    "lessons_sub": "Каждый урок проходит 1-на-1 в Zoom. Начните с пробного, и мы вместе подберем лучший путь. Все материалы, конспекты и задания включены.",
    "card_trial_badge": "Начните отсюда",
    "card_trial_title": "Пробный урок",
    "card_trial_desc": "Определение уровня, целей и составление индивидуального плана обучения.",
    "card_trial_price": "<span>$10</span><span style=\"font-size: 16px; font-weight: 500; color: #555B6B\">45 мин</span>",
    "card_conv_title": "Разговорная практика",
    "card_conv_desc": "Беглость речи, идиомы и уверенность в диалоге на темы, которые интересны именно вам.",
    "card_conv_price": "<span>$29</span><span style=\"font-size: 16px; font-weight: 500; color: #555B6B\">60 мин</span>",
    "card_conv_btn": "Выбрать этот урок",
    "card_comp_title": "Комплексный курс",
    "card_comp_desc": "Сбалансированное развитие разговорной речи, грамматики, аудирования и письма для работы или учёбы.",
    "card_comp_price": "<span>$29</span><span style=\"font-size: 16px; font-weight: 500; color: #555B6B\">60 мин</span>",
    "card_comp_btn": "Выбрать этот урок",
    "pkg_title": "Выгодные пакеты",
    "pkg_desc": "Используйте пакет для любых уроков разговорной практики или комплексного курса. Уроки не сгорают.",
    "pkg_5_title": "5 уроков · действуют 2 месяца",
    "pkg_5_note": "$27 за урок · скидка $10",
    "pkg_10_title": "10 уроков · действуют 4 месяца",
    "pkg_10_note": "$26 за урок · скидка $30",
    "how_h2": "От бронирования до первого разговора — 3 шага",
    "s1_title": "Запишитесь на урок",
    "s1_desc": "Выберите удобное время в вашем часовом поясе и безопасно оплатите $10.",
    "s2_title": "Встречаемся в Zoom",
    "s2_desc": "Урок открывается прямо в браузере. Мы определим уровень и сразу начнем говорить.",
    "s3_title": "Получите ваш план",
    "s3_desc": "Вы уйдете с персональным планом занятий и решите, хотите ли продолжить обучение.",
    "booking_note": "* Безопасное бронирование через Cal.com",
    "reviews_h2": "Что говорят ученики",
    "stat_students_label": "учеников обучено",
    "stat_years_label": "лет преподавания онлайн",
    "stat_langs_label": "языки занятий (украинский понимает)",
    "r1_quote": "«Отличный репетитор! Пунктуальная, доброжелательная, умеет доходчиво объяснять материал. Я прошла 10 занятий, увидела значительный прогресс, обязательно продолжу уроки.»",
    "r1_author": "<span style=\"width: 40px; height: 40px; border-radius: 9999px; background: #EEF1FC; color: #2446D8; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px\">О</span><span style=\"font-weight: 600\">Ольга</span>",
    "r2_quote": "«Все мы помним школьное \"Who is on duty today?\". Но как на самом деле общаться с иностранцами или понимать идиомы в фильмах? Уроки с Ксенией помогли именно в этом!»",
    "r2_author": "<span style=\"width: 40px; height: 40px; border-radius: 9999px; background: #EEF1FC; color: #2446D8; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px\">М</span><span style=\"font-weight: 600\">Марина</span>",
    "faq_h2": "Частые вопросы перед первым уроком",
    "faq_q1": "Почему пробный урок платный? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a1": "Он стоит $10, чтобы мы оба были настроены на продуктивную работу. Вы получаете полноценный 45-минутный урок, честную оценку уровня и персональный план обучения.",
    "faq_q2": "Могу ли я вернуть деньги? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a2": "Да, за любые оплаченные, но еще не проведенные уроки. Проведенные уроки возврату не подлежат.",
    "faq_q3": "Можно ли отменить или перенести урок? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a3": "Да. Предупредите минимум за 24 часа, и вы получите полный возврат или перенос на новое время по вашему выбору.",
    "faq_q4": "Как оплатить занятие? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a4": "При бронировании через безопасную систему Stripe картами Visa, Mastercard, Discover, Amex, JCB. Также возможна оплата через PayPal.",
    "faq_q5": "Можно ли купить пакет уроков со скидкой? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a5": "Да. Пакет из 5 уроков стоит $135 ($27 за урок, действует 2 месяца). Пакет из 10 уроков — $260 ($26 за урок, действует 4 месяца).",
    "faq_q6": "С каким уровнем английского можно начинать? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a6": "С любым. Каждый урок индивидуально адаптируется под ваш уровень — от нулевого до продвинутого (Advanced).",
    "faq_q7": "Нужно ли уметь говорить по-английски к первому уроку? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a7": "Нет. Я могу подробно объяснить всё на русском языке, а также понимаю украинский. Вы будете чувствовать себя уверенно.",
    "faq_q8": "Как часто нужно заниматься? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a8": "Как минимум раз в неделю; оптимально — 2–3 раза. Также закладывайте около двух часов на самостоятельную практику между уроками.",
    "faq_q9": "Когда будет виден прогресс? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a9": "При регулярных занятиях разница чувствуется уже через 2–3 недели. После 10 уроков большинство студентов говорят заметно свободнее.",
    "faq_q10": "Готовите ли вы к международным экзаменам? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a10": "Да, к IELTS и TOEFL. Назовите дату вашего экзамена на пробном уроке, и мы составим целенаправленный график подготовки.",
    "faq_q11": "Что нужно для онлайн-урока? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a11": "Компьютер или телефон, наушники и тихое место. Zoom открывается прямо в браузере, скачивать ничего не обязательно.",
    "faq_q12": "Что если я опоздаю на урок? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a12": "Урок заканчивается в запланированное время, поэтому рекомендую подключаться на пару минут раньше.",
    "cta_h2": "Ваш первый урок английского может быть уже на этой неделе",
    "cta_p": "Начните с 45-минутного пробного урока за $10. Перенос или отмена бесплатны за 24 часа.",
    "cta_tg": "Есть вопросы? <a href=\"https://t.me/englishtutorksenia\" style=\"color: #FFFFFF; font-weight: 600; text-decoration: underline\">Напишите мне в Telegram</a>",
    "footer_desc": "Индивидуальные уроки английского по Zoom на английском, русском и украинском языках.",
    "footer_privacy": "Политика конфиденциальности",
    "footer_terms": "Условия",
    "footer_copy": "© 2021–2026 English Tutor Ksenia",
    "pkg_btn": "Купить пакет"
  },
  "ua": {
    "page_title": "Репетитор англійської мови Ксенія — Онлайн уроки в Zoom",
    "page_desc": "Індивідуальні уроки англійської з Ксенією — досвід 6+ років, 700+ учнів. Пробний урок 45 хвилин за $10.",
    "nav_skip": "Перейти до вмісту",
    "nav_lessons": "Уроки",
    "nav_reviews": "Відгуки",
    "nav_faq": "FAQ",
    "nav_book": "Записатись",
    "hero_badge": "Онлайн-уроки англійської по Zoom",
    "hero_h1": "Вчите англійську роками?<br>Час почати говорити.",
    "hero_sub": "Персональні уроки з Ксенією — репетитором з досвідом понад 6 років та 700+ учнів. Практика англійською з першої хвилини з поясненнями, коли це потрібно.",
    "hero_cta": "Записатися на пробний урок за $10",
    "hero_note": "45 хвилин · визначення рівня та особистий план · повне повернення при скасуванні за 24 години",
    "hero_social": "«Після 10 уроків я побачила реальний прогрес.» <span style=\"color: #555B6B\">Ольга</span>",
    "zoom_title": "Урок з Ксенією",
    "zoom_tutor_badge": "<span style=\"width: 8px; height: 8px; border-radius: 9999px; background: #3DD68C\"></span>Ксенія · Репетитор англійської",
    "problem_h2": "Ви знаєте правила. Але слова наче застряють, коли треба говорити.",
    "problem_p": "Більшість моїх учнів вчили англійську в школі. Вони вміють читати, знають граматику, але коли настає час говорити на зустрічі, співбесіді чи в подорожі — слова зникають. Рішення просте: жива практика один на один з викладачем, який дбайливо виправить помилки і навчить фраз, якими насправді користуються носії.",
    "benefits_h2": "Що змінюється, коли ви займаєтесь зі мною",
    "b1_title": "Говорите ви",
    "b1_desc": "Уроки побудовані навколо розмовної практики, сучасних ідіом та щоденних тем. Ви говорите, а не читаєте таблиці правил.",
    "b2_title": "Усе стає зрозуміло",
    "b2_desc": "Граматика пояснюється просто та доступно, якщо англійською це складно. Жодних незрозумілих тем.",
    "b3_title": "План під вашу мету",
    "b3_desc": "Співбесіда, робочі дзвінки, складання IELTS/TOEFL або фільми без субтитрів: кожне завдання спрямоване на вашу мету.",
    "b4_title": "Зручний розклад",
    "b4_desc": "Бронюйте будь-яке вільне вікно у вашому часовому поясі та переносьте уроки за 24 години.",
    "b5_title": "Культура, а не лише граматика",
    "b5_desc": "Дізнайтеся, як насправді спілкуються американці, правила small talk та тонкощі живого спілкування.",
    "tagline": "<span>Ви вже знаєте англійську краще, ніж вам здається.</span> <span style=\"color: rgba(255,255,255,0.4)\">Давайте перенесемо її із зошитів у живе спілкування.</span>",
    "about_h2": "Привіт, я Ксенія",
    "about_p1": "Я викладаю англійську онлайн уже понад шість років і провела заняття для більш ніж 700 учнів — від початківців до спеціалістів, які готуються до співбесід. Я вільно розмовляю англійською та російською і розумію українську, тож ви завжди можете поставити запитання рідною мовою.",
    "about_p2": "Кожен урок починається з одного питання: для чого англійська потрібна саме вам?",
    "video_title": "Познайомтеся зі мною за 2 хвилини",
    "lessons_h2": "Оберіть формат уроку",
    "lessons_sub": "Кожен урок проходить 1-на-1 в Zoom. Почніть із пробного, і ми разом оберемо найкращий шлях. Усі матеріали, конспекти та завдання включені.",
    "card_trial_badge": "Почніть звідси",
    "card_trial_title": "Пробний урок",
    "card_trial_desc": "Визначення рівня, цілей та складання індивідуального плану навчання.",
    "card_trial_price": "<span>$10</span><span style=\"font-size: 16px; font-weight: 500; color: #555B6B\">45 хв</span>",
    "card_conv_title": "Розмовна практика",
    "card_conv_desc": "Вільне мовлення, ідіоми та впевненість у спілкуванні на теми, які цікаві саме вам.",
    "card_conv_price": "<span>$29</span><span style=\"font-size: 16px; font-weight: 500; color: #555B6B\">60 хв</span>",
    "card_conv_btn": "Обрати цей урок",
    "card_comp_title": "Комплексний курс",
    "card_comp_desc": "Збалансований розвиток розмовної мови, граматики, аудіювання та письма для роботи чи навчання.",
    "card_comp_price": "<span>$29</span><span style=\"font-size: 16px; font-weight: 500; color: #555B6B\">60 хв</span>",
    "card_comp_btn": "Обрати цей урок",
    "pkg_title": "Вигідні пакети",
    "pkg_desc": "Використовуйте пакет для будь-яких уроків розмовної практики або комплексного курсу. Уроки не згорають.",
    "pkg_5_title": "5 уроків · дійсні 2 місяці",
    "pkg_5_note": "$27 за урок · знижка $10",
    "pkg_10_title": "10 уроків · дійсні 4 місяці",
    "pkg_10_note": "$26 за урок · знижка $30",
    "how_h2": "Від бронювання до першого уроку — 3 кроки",
    "s1_title": "Запишіться на урок",
    "s1_desc": "Оберіть зручний час у вашому часовому поясі та безпечно сплатіть $10.",
    "s2_title": "Зустріч у Zoom",
    "s2_desc": "Урок відкривається прямо в браузері. Ми визначимо рівень і одразу почнемо говорити.",
    "s3_title": "Отримайте ваш план",
    "s3_desc": "Ви отримаєте індивідуальний план навчання і вирішите, чи хочете продовжувати.",
    "booking_note": "* Безпечне бронювання через Cal.com",
    "reviews_h2": "Що кажуть учні",
    "stat_students_label": "учнів навчено",
    "stat_years_label": "років викладання онлайн",
    "stat_langs_label": "мови уроків (українську розуміє)",
    "r1_quote": "«Відмінний репетитор! Пунктуальна, доброзичлива, вміє дохідливо пояснювати матеріал. Я пройшла 10 занять, побачила значний прогрес, обов'язково продовжу уроки. Дякую за хорошу роботу!!»",
    "r1_author": "<span style=\"width: 40px; height: 40px; border-radius: 9999px; background: #EEF1FC; color: #2446D8; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px\">О</span><span style=\"font-weight: 600\">Ольга</span>",
    "r2_quote": "«Усі ми пам'ятаємо шкільне \"Who is on duty today?\". Але як насправді спілкуватися з іноземцями або розуміти ідіоми в американських фільмах? Уроки з Ксенією допомогли саме в цьому!»",
    "r2_author": "<span style=\"width: 40px; height: 40px; border-radius: 9999px; background: #EEF1FC; color: #2446D8; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px\">М</span><span style=\"font-weight: 600\">Марина</span>",
    "faq_h2": "Часті запитання перед першим уроком",
    "faq_q1": "Чому пробний урок платний? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a1": "Він коштує $10, щоб ми обидва були налаштовані на продуктивну роботу. Ви отримуєте повноцінний 45-хвилинний урок, чесну оцінку рівня та індивідуальний план навчання.",
    "faq_q2": "Чи можу я повернути гроші? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a2": "Так, за будь-які оплачені, але ще не проведені уроки. Проведені уроки поверненню не підлягають.",
    "faq_q3": "Чи можна скасувати або перенести урок? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a3": "Так. Попередьте щонайменше за 24 години, і ви отримаєте повне повернення або перенесення на новий час за вашим вибором.",
    "faq_q4": "Як оплатити заняття? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a4": "Під час бронювання через безпечну систему Stripe картками Visa, Mastercard, Discover, Amex, JCB. Також можлива оплата через PayPal.",
    "faq_q5": "Чи можна купити пакет уроків зі знижкою? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a5": "Так. Пакет із 5 уроків коштує $135 ($27 за урок, діє 2 місяці). Пакет із 10 уроків — $260 ($26 за урок, діє 4 місяці).",
    "faq_q6": "З якого рівня англійської можна починати? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a6": "З будь-якого. Кожен урок індивідуально адаптується під ваш рівень — від початкового до просунутого (Advanced).",
    "faq_q7": "Чи потрібно вміти говорити англійською до першого уроку? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a7": "Ні. Я можу все пояснити просто і доступно, вільно розмовляю російською та розумію українську. Ви почуватиметеся впевнено.",
    "faq_q8": "Як часто потрібно займатися? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a8": "Щонайменше раз на тиждень; оптимально — 2–3 рази. Також закладайте близько двох годин на самостійну практику між уроками.",
    "faq_q9": "Коли буде помітно прогрес? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a9": "При регулярних заняттях різниця відчувається вже через 2–3 тижні. Після 10 уроків більшість студентів говорять помітно вільніше.",
    "faq_q10": "Чи готуєте ви до міжнародних іспитів? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a10": "Так, до IELTS та TOEFL. Назвіть дату вашого іспиту на пробному уроці, і ми складемо цілеспрямований графік підготовки.",
    "faq_q11": "Що потрібно для онлайн-уроку? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a11": "Комп'ютер або телефон, навушники та тихе місце. Zoom відкривається прямо в браузері, завантажувати нічого не потрібно.",
    "faq_q12": "Що як я запізнюся на урок? <span class=\"plus\" style=\"font-size: 20px; color: #2446D8; font-weight: 400\">+</span>",
    "faq_a12": "Урок закінчується у запланований час, тому рекомендую підключатися на пару хвилин раніше.",
    "cta_h2": "Ваш перший урок англійської може відбутися вже цього тижня",
    "cta_p": "Почніть із 45-хвилинного пробного уроку за $10. Перенесення або скасування безкоштовні за 24 години.",
    "cta_tg": "Маєте запитання? <a href=\"https://t.me/englishtutorksenia\" style=\"color: #FFFFFF; font-weight: 600; text-decoration: underline\">Напишіть мені в Telegram</a>",
    "footer_desc": "Індивідуальні уроки англійської по Zoom англійською, російською та українською мовами.",
    "footer_privacy": "Політика конфіденційності",
    "footer_terms": "Умови",
    "footer_copy": "© 2021–2026 English Tutor Ksenia",
    "pkg_btn": "Купити пакет"
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
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update document title and meta description
  if (t.page_title) document.title = t.page_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t.page_desc) metaDesc.setAttribute("content", t.page_desc);
}

// Initial language detection from URL param (?lang=ru) or localStorage
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
