// All portfolio projects — bilingual (ua / en)
// Technologies are language-agnostic; descriptions are in ua/en objects.

const EXISTING_PROJECTS = [
  {
    id: 'ai-news-content-bot',
    category: 'automation',
    icon: 'Bot',
    technologies: ['n8n', 'GPT-4 Turbo', 'Google Drive API', 'News API', 'RSS Parsers'],
    images: [],
    links: [],
    ua: {
      title: 'AI-контент-бот на основі новин і Google Drive',
      shortDesc: 'Автоматична генерація 3-4 постів на тиждень із актуальних новин та матеріалів',
      fullDesc: `Розроблена система, яка щотижня створює 3–4 AI-пости на основі актуальних новин та матеріалів з Google Drive.

**Збір даних:**
• Автоматичний збір актуальних новин з BBC, Reuters, NatGeo
• Завантаження фото та відео з Google Drive
• Аналіз трендових тем та подій

**Генерація контенту:**
• ШІ аналізує зібрані матеріали та підбирає найцікавіші теми
• Автоматична генерація постів різних форматів
• Вибір оптимального візуального контенту

**Формати публікацій:**
• Історії для Instagram/Facebook
• Опитування для залучення аудиторії
• Інфографіка з ключовими даними
• Стандартні пости з описом

**Управління:**
• "Обрати" — вибір найкращого варіанту
• "Змінити" — редагування згенерованого контенту
• "Запланувати" — вибір часу публікації

**Результат:**
Повна автоматизація створення контенту. Економія 10–15 годин на тиждень. Повна сумісність з Instagram, LinkedIn, Facebook.`,
    },
    en: {
      title: 'AI Content Bot Based on News & Google Drive',
      shortDesc: 'Automatic generation of 3-4 posts weekly from trending news and materials',
      fullDesc: `A system that automatically creates 3–4 AI posts weekly based on trending news and Google Drive materials.

**Data Collection:**
• Automatic collection of trending news from BBC, Reuters, NatGeo
• Loading photos and videos from Google Drive
• Analysis of trending topics and events

**Content Generation:**
• AI analyzes collected materials and selects the most interesting topics
• Automatic generation of posts in various formats
• Selection of optimal visual content

**Publication Formats:**
• Stories for Instagram/Facebook
• Polls for audience engagement
• Infographics with key data
• Standard posts with descriptions

**Management:**
• "Select" — choose the best option
• "Change" — edit generated content
• "Schedule" — select publication time

**Result:**
Complete automation of content creation. Saves 10–15 hours per week. Full compatibility with Instagram, LinkedIn, Facebook.`,
    },
  },

  {
    id: 'rrp-price-parser',
    category: 'automation',
    icon: 'TrendingUp',
    technologies: ['Puppeteer', 'Node.js', 'ExcelJS', 'React', 'n8n'],
    images: [],
    links: [],
    ua: {
      title: 'Парсер і перевірка РРЦ цін з Excel',
      shortDesc: 'Автоматизований парсинг та контроль цін на маркетплейсах',
      fullDesc: `Автоматизований парсер для моніторингу цін та виявлення порушень РРЦ (рекомендованої роздрібної ціни).

**Як це працює:**

**Завантаження даних:**
• Користувач завантажує Excel-файл з товарами та РРЦ
• Система автоматично зчитує всі позиції

**Автоматичний парсинг:**
• Puppeteer відкриває вказаний сайт
• Автоматичний пошук кожного товару
• Збір актуальних цін та інформації
• Робота з динамічним завантаженням сторінок

**Аналіз та порівняння:**
• Порівняння поточних цін з РРЦ
• Виявлення порушень (ціна нижче/вище РРЦ)
• Розрахунок відсоткових відхилень

**Візуалізація результатів:**
• Показ результатів на екрані в реальному часі
• Кольорове виділення порушень
• Статистика по загальній кількості товарів

**Експорт звіту:**
• Автоматичне формування Excel-звіту
• Детальна інформація по кожному товару
• Готовий до відправки керівництву

**Застосування:**
Ідеально для моніторингу конкурентів, контролю цін на маркетплейсах (Rozetka, Prom.ua та ін.), виявлення порушень дилерами.`,
    },
    en: {
      title: 'RRP Price Parser & Checker from Excel',
      shortDesc: 'Automated parsing and price control for RRP violations on marketplaces',
      fullDesc: `An automated parser for price monitoring and RRP (recommended retail price) violation detection.

**How it works:**

**Data Upload:**
• User uploads Excel file with products and RRP
• System automatically reads all items

**Automatic Parsing:**
• Puppeteer opens the specified website
• Automatic search for each product
• Collection of current prices and info
• Works with dynamic page loading

**Analysis & Comparison:**
• Compares current prices with RRP
• Identifies violations (price below/above RRP)
• Calculates percentage deviations

**Results Visualization:**
• Real-time display on screen
• Color highlighting of violations
• Statistics on total product count

**Report Export:**
• Automatic Excel report generation
• Detailed information per product
• Ready to send to management

**Use Cases:**
Perfect for competitor monitoring, price control on marketplaces (Rozetka, Prom.ua), and dealer violation detection.`,
    },
  },

  {
    id: 'ai-social-agent',
    category: 'ai',
    icon: 'MessageCircle',
    technologies: ['n8n', 'Grok (xAI)', 'Supabase', 'Redis', 'ManyChat', 'Instagram API', 'Telegram Bot API', 'Google Sheets API'],
    images: [
      '/images/ШІ БОТ.jpg',
      '/images/ШІ БОТ1.jpg',
      '/images/ШІ БОТ2.jpg',
    ],
    links: [
      { title: 'Tory store', url: 'https://tory.ae/' },
      { title: 'DLYTEBE store', url: 'https://dlyatebeperfume.com.ua/' },
    ],
    ua: {
      title: 'ШІ-агент у Instagram, Facebook, TikTok, Telegram',
      shortDesc: 'Розумний агент для автоматизації продажів 24/7',
      fullDesc: `ШІ-агент прямо в Instagram, Facebook, TikTok та Telegram, який доповнює або навіть замінює менеджера.

**Отримання повідомлення:**
• Клієнт пише в Instagram/Facebook/TikTok
• Повідомлення автоматично падає в таблицю Supabase

**Обробка повідомлень:**
• Кожні 50 секунд бот забирає всі нові повідомлення
• Об'єднує повідомлення по користувачу
• Автоматично визначає мову клієнта

**ШІ-аналіз через Grok (xAI):**
• Grok пам'ятає всю історію переписки (Redis)
• Векторний пошук товарів у базі Supabase
• Відповідає строго за заданими правилами
• Підбір найбільш відповідних товарів

**Формування відповіді:**
• Створення красивої відповіді з карточками товарів
• Формування в потрібному форматі
• Підтримка мультимедіа через ManyChat

**Оформлення замовлення:**
• Замовлення миттєво прилітає менеджеру в Telegram
• Паралельно записується в Google-таблицю

**Можливості бота:**
✅ Приймає та обробляє повідомлення
✅ Консультує по товарах
✅ Показує фото та характеристики
✅ Оформлює замовлення
✅ Робить допродаж
✅ Передає дані в CRM або Google Sheets
✅ Кличе менеджера, якщо не справляється

**Результат:**
Робота 24/7 без вихідних. Миттєві відповіді клієнтам. Збільшення конверсії на 40–60%.`,
    },
    en: {
      title: 'AI Agent for Instagram, Facebook, TikTok, Telegram',
      shortDesc: 'Smart AI agent for 24/7 sales automation across social platforms',
      fullDesc: `An AI agent directly in Instagram, Facebook, TikTok, and Telegram that complements or even replaces a sales manager.

**Receiving Messages:**
• Client writes in Instagram/Facebook/TikTok
• Message automatically falls into Supabase table

**Message Processing:**
• Every 50 seconds bot picks up all new messages
• Combines messages per user
• Automatically detects client language

**AI Analysis via Grok (xAI):**
• Grok remembers full conversation history (Redis)
• Vector product search in Supabase
• Responds strictly by set rules
• Selects most relevant products

**Response Formation:**
• Creates beautiful response with product cards
• Formats for the specific platform
• Multimedia support via ManyChat

**Order Processing:**
• Order instantly arrives to manager in Telegram
• Also recorded in Google Sheet with full details

**Bot Capabilities:**
✅ Receives and processes messages
✅ Consults on products
✅ Shows photos and specifications
✅ Places orders
✅ Does upselling
✅ Transfers data to CRM or Google Sheets
✅ Calls manager if it can't handle

**Result:**
24/7 operation without weekends. Instant client responses. 40–60% conversion increase.`,
    },
  },

  {
    id: 'call-analysis-platform',
    category: 'fullstack',
    icon: 'Sparkles',
    technologies: ['React', 'Node.js', 'n8n', 'PostgreSQL', 'Whisper AI', 'AssemblyAI', 'Gemini 2.0', 'GPT-4'],
    images: [
      '/images/Анализ звонков платформа1.jpg',
      '/images/Анализ звонков платформа2.png',
      '/images/Анализ Звонков платформа3.png',
    ],
    links: [],
    ua: {
      title: 'Full-stack платформа аналізу дзвінків з ШІ',
      shortDesc: 'AI-платформа для аналізу якості дзвінків менеджерів з веб-інтерфейсом',
      fullDesc: `Повноцінна AI-платформа аналізу дзвінків з веб-інтерфейсом для менеджерів і керівників.

**Транскрибація аудіо:**
• Автоматичне перетворення аудіо в текст
• Whisper, AssemblyAI, Gemini — підтримка різних мов
• Збереження транскриптів у PostgreSQL

**Класифікація дзвінків:**
• Технічний дзвінок vs презентація товару
• Визначення типу звернення та категоризація

**Виявлення тригерних зон:**
• Які товари найчастіше пропонує менеджер
• Дотримання скрипту продажів
• Робота із запереченнями клієнтів

**Метрики якості:**
• Автоматичний підрахунок KPI
• Підтверджена точність ШІ-оцінювання — 85%

**Інтерфейс менеджера:**
• Перегляд транскриптів і висновків ШІ
• Чат з ШІ по конкретному дзвінку (контекст вже завантажений)
• Рекомендації щодо покращення

**Інтерфейс керівника:**
• Фільтри по команді / типах дзвінків
• Експорт зведених звітів за період
• Виявлення слабких місць команди

**Результат:**
100% дзвінків автоматично аналізуються. Менеджери отримують точні підказки. Керівники бачать зрозумілу аналітику.`,
    },
    en: {
      title: 'Full-stack AI Call Analysis Platform',
      shortDesc: 'AI platform for analyzing manager call quality with a full web interface',
      fullDesc: `A complete AI call analysis platform with web interface for managers and executives.

**Audio Transcription:**
• Automatic audio-to-text conversion
• Whisper, AssemblyAI, Gemini — multi-language support
• Transcripts stored in PostgreSQL

**Call Classification:**
• Technical call vs product presentation
• Request type detection and categorization

**Trigger Zone Detection:**
• Which products manager offers most
• Sales script adherence
• Client objection handling quality

**Quality Metrics:**
• Automatic KPI calculation
• Confirmed AI evaluation accuracy — 85%

**Manager Interface:**
• View transcripts and AI conclusions
• Chat with AI about a specific call (context preloaded)
• Improvement recommendations

**Executive Interface:**
• Filters by team / call types
• Export summary reports for any period
• Team weakness identification

**Result:**
100% of calls automatically analyzed. Managers get accurate hints. Executives see clear analytics.`,
    },
  },

  {
    id: 'hotel-call-analysis',
    category: 'ai',
    icon: 'Phone',
    technologies: ['Gemini 2.0 Flash', 'n8n', 'PostgreSQL', 'Google Sheets API', 'Telegram Bot API'],
    images: [],
    links: [],
    ua: {
      title: 'Аналіз дзвінків для готелів та ресторанів',
      shortDesc: 'Автоматичний контроль якості телефонних розмов за 15–30 секунд',
      fullDesc: `Система автоматичного аналізу дзвінків для готелів та ресторанів з миттєвим виявленням порушень.

**Отримання дзвінка:**
• Людина дзвонить у готель або ресторан
• Розмова автоматично записується

**Транскрибація:**
• Gemini прослуховує запис і перетворює на точний текст
• Система визначає, в який саме готель/ресторан дзвонили
• Перевіряє, чи це новий клієнт — якщо ні, завантажує всю історію

**Аналіз по стандартах:**

**Обов'язкові пункти:**
✅ Чи представився менеджер
✅ Чи зібрав всі необхідні дані
✅ Чи був ввічливим з клієнтом
✅ Чи дотримувався скрипту

**Заборонені дії:**
❌ Брехня або неправдива інформація
❌ Хамство або грубість
❌ Невиконання обіцянок з минулого дзвінка

**Миттєве сповіщення (15–30 секунд):**
• Якщо все відмінно — тиша
• Якщо були порушення — керівник отримує картку в Google-таблицю: опис порушення, ім'я менеджера, посилання на запис, точний час дзвінка

**ШІ-бот на базі даних:**
• Окремий ШІ-бот відповідає на питання про помилки
• Надає рекомендації менеджерам

**Результат:**
Повна автоматизація контролю якості. 24/7 без жодного кліка.`,
    },
    en: {
      title: 'Call Analysis for Hotels and Restaurants',
      shortDesc: 'Automatic phone conversation quality control with instant violation detection',
      fullDesc: `Automatic call analysis system for hotels and restaurants with instant violation detection (15–30 seconds).

**Receiving a Call:**
• Person calls the hotel or restaurant
• Conversation is automatically recorded

**Transcription & Context:**
• Gemini listens and converts to accurate text
• System determines which hotel/restaurant was called
• Checks if client is new; if not, loads full history

**Standards Analysis:**

**Required Points:**
✅ Did manager introduce themselves
✅ Did collect all necessary data
✅ Was polite with client
✅ Followed script

**Prohibited Actions:**
❌ Lying or false information
❌ Rudeness or hostility
❌ Not fulfilling promises from previous call

**Instant Notification (15–30 seconds):**
• If everything is fine — silence
• If violations found — manager receives a card in Google Sheet: violation description, manager name, recording link, exact call time

**AI Bot Based on Data:**
• Separate AI bot answers questions about errors
• Provides recommendations to managers

**Result:**
Complete quality control automation. 24/7 without any clicks.`,
    },
  },

  {
    id: 'doc-autofill',
    category: 'automation',
    icon: 'FileText',
    technologies: ['GPT-4 Vision', 'Telegram Bot API', 'Google Docs API', 'Google Drive API', 'n8n', 'PDF Generation'],
    images: [
      '/images/документі.png',
      '/images/документ1.png',
    ],
    links: [],
    ua: {
      title: 'Автозаповнювач документів',
      shortDesc: 'Автоматизація заповнення документів через Telegram — економія 90% часу',
      fullDesc: `Система автоматичного заповнення документів у режимі покрокового збору інформації.

**Відправка даних:**
• Користувач надсилає фото документа в Telegram
• АБО вводить дані вручну текстом

**Розпізнавання:**
• ШІ зчитує текст з фото (OCR)
• Розпізнає поля документа та витягує необхідну інформацію
• Валідація форматів (дати, номери тощо)

**Автозаповнення:**
• Підставляє дані у потрібні поля шаблону
• Форматує згідно з вимогами

**Формування документа:**
• Генерує готовий документ (PDF, DOCX)
• Зберігає форматування
• Додає необхідні підписи/печатки

**Повернення результату:**
• Файл повертається в Telegram
• Паралельно зберігає копію в Google Drive
• Організована структура папок

**Підтримувані формати:**
• PDF, DOCX, Excel
• Фото документів (JPG, PNG)
• Текстовий ввід

**Результат:**
Економія 90% часу на заповнення документів. Нуль помилок.`,
    },
    en: {
      title: 'Document Auto-filler',
      shortDesc: 'Document filling automation via Telegram — 90% time savings',
      fullDesc: `Smart system for automatic document filling in step-by-step data collection mode.

**Data Sending:**
• User sends document photo in Telegram
• OR enters data manually as text

**Recognition:**
• AI reads text from photo (OCR)
• Recognizes document fields and extracts info
• Validates formats (dates, numbers, etc.)

**Auto-filling:**
• Inserts data into template fields
• Formats according to requirements

**Document Formation:**
• Generates ready document (PDF, DOCX)
• Preserves formatting
• Adds necessary signatures/stamps

**Result Return:**
• File returned in Telegram
• Simultaneously saves copy to Google Drive
• Organized folder structure

**Supported Formats:**
• PDF, DOCX, Excel
• Document photos (JPG, PNG)
• Text input

**Result:**
90% time saved on document filling. Zero errors.`,
    },
  },

  {
    id: 'news-autopost',
    category: 'automation',
    icon: 'Calendar',
    technologies: ['n8n', 'RSS Parsers', 'Puppeteer', 'Social Media APIs', 'PostgreSQL', 'GPT-4'],
    images: ['/images/ИИ новости.png'],
    links: [
      { title: 'Telegram news channel', url: 'https://t.me/V3vj2KRLbT5iMDU6' },
    ],
    ua: {
      title: 'Збір новин та автопостінг',
      shortDesc: 'Автоматична агрегація новин та публікація у соцмережах',
      fullDesc: `Комплексна система для автоматичного збору новин та їх публікації в соціальних мережах.

**Збір новин:**
• RSS-фіди провідних видань
• Парсинг новинних сайтів та API
• Фільтр по темах, ключових словах, виключення дублікатів

**Обробка:**
• Аналіз тональності новин
• Категоризація контенту
• Переклад при необхідності

**Система автопостінгу:**
• Автоматичне складання розкладу на тиждень/місяць
• Врахування оптимального часу публікації

**Адаптація контенту:**
• Instagram: квадратні зображення + хештеги
• Facebook: довші тексти + посилання
• LinkedIn: професійний стиль
• Twitter/X: короткі форми

**Публікація:**
• Instagram, Facebook, LinkedIn, Twitter/X
• Автоматичне додавання хештегів
• Прикріплення медіа-файлів

**Аналітика:**
• Відстеження охоплення та залученості
• Звіти по ефективності публікацій

**Результат:**
Повна автоматизація контент-маркетингу. Економія 20+ годин на тиждень.`,
    },
    en: {
      title: 'News Collection and Auto-posting',
      shortDesc: 'Automatic news aggregation and social media publishing',
      fullDesc: `A comprehensive system for automatic news collection and social media publishing.

**News Collection:**
• RSS feeds from leading publications
• News site parsing and APIs
• Filter by topics, keywords, duplicate exclusion

**Processing:**
• News sentiment analysis
• Content categorization
• Translation when needed

**Auto-posting System:**
• Automatic schedule creation for week/month
• Considers optimal publication time

**Content Adaptation:**
• Instagram: square images + hashtags
• Facebook: longer texts + links
• LinkedIn: professional style
• Twitter/X: short forms

**Publishing:**
• Instagram, Facebook, LinkedIn, Twitter/X
• Automatic hashtag addition
• Media file attachment

**Analytics:**
• Reach and engagement tracking
• Publication effectiveness reports

**Result:**
Complete content marketing automation. 20+ hours saved per week.`,
    },
  },
];

// Projects from Word doc portfolio files
const NEW_PROJECTS = [
  {
    id: 'ai-call-analysis-binotel',
    category: 'ai',
    icon: 'BarChart2',
    technologies: ['n8n', 'Binotel API', 'Gemini Flash Lite', 'OpenRouter', 'Grok 4.1 Fast', 'Supabase', 'Bitrix24', 'Dashboard API'],
    images: ['/images/projects/ai-call-analysis-binotel-1.png', '/images/projects/ai-call-analysis-binotel-2.png', '/images/projects/ai-call-analysis-binotel-3.png'],
    links: [],
    ua: {
      title: 'AI-аналіз дзвінків Binotel Dashboard',
      shortDesc: 'Автоматичний аналіз якості дзвінків менеджерів із збереженням у CRM та дашбордом KPI.',
      fullDesc: `**Короткий опис**
Ця автоматизація аналізує телефонні дзвінки LikeBus, які приходять через Binotel, і перетворює кожну розмову на структурований звіт для керівника, CRM і dashboard.

Коли дзвінок завершується, Binotel передає подію в n8n. Система перевіряє, чи розмова була реальною і достатньою за тривалістю, отримує аудіозапис, робить транскрибацію, очищує текст, аналізує діалог за допомогою AI, визначає тему звернення, тип ліда, якість роботи менеджера, статус вирішення питання та можливі проблеми. Після цього результат зберігається в базу, оновлює CRM-статус ліда та стає доступним у dashboard.

**Використаний стек та інтеграції:**
• n8n — Головний центр автоматизації: приймає webhook, керує перевірками, запускає транскрибацію, AI-аналіз, запис у базу, оновлення CRM і API для dashboard.
• Binotel API — Джерело телефонних подій і аудіозаписів. Саме через Binotel приходить інформація про завершені дзвінки: ID дзвінка, номер клієнта, менеджер, статус, тривалість і посилання на запис.
• Gemini 3.1 Flash Lite Preview — Використовується для транскрибації аудіозапису дзвінка в текст.
• OpenRouter — Провайдер для підключення AI-моделей у n8n.
• x-ai/grok-4.1-fast — Використовується для AI-аналізу транскрипту, класифікації дзвінка, оцінки менеджера, формування висновків і структурованого результату.
• Supabase — База даних, де зберігаються результати аналізу: клієнт, менеджер, тема дзвінка, тип ліда, оцінка менеджера, проблема, статус вирішення, прапорці ризику, транскрипт, посилання на запис і CRM-дані.
• Bitrix24 CRM — CRM-система, у якій автоматизація знаходить лід за номером телефону та оновлює його статус: якісний лід, неякісний лід, підрядник або не визначено.
• Call History — Перед аналізом система підтягує попередні дзвінки цього клієнта, щоб побачити повторні звернення, невирішені питання та обіцянки передзвонити.
• Think Tool — AI спочатку аналізує контекст, історію, тему, проблему, статус вирішення і поведінку менеджера, а вже потім формує фінальний результат.
• Dashboard API — Окремий API-шар віддає дані для dashboard: загальні KPI, динаміку, теми звернень, менеджерів, список дзвінків, фільтри та детальну картку конкретного дзвінка.

**Послідовність роботи флоу:**

**1. Отримання події з Binotel**
Після завершення дзвінка Binotel відправляє webhook у n8n з даними: ID дзвінка, номер клієнта, менеджер, тип дзвінка, тривалість, статус, CRM-посилання та інші параметри.

**2. Перевірка якості дзвінка**
Автоматизація перевіряє, чи дзвінок має успішний статус і чи тривав більше мінімального порогу. Дуже короткі або неуспішні дзвінки не відправляються на AI-аналіз.

**3. Отримання аудіозапису**
Якщо дзвінок підходить для аналізу, система робить коротку паузу, після чого через Binotel API отримує аудіозапис розмови.

**4. Транскрибація аудіо**
Аудіозапис передається в Gemini, який перетворює розмову на текст.

**5. Очищення транскрипту**
Текст приводиться до читабельного формату: прибираються мовні дефекти, зайві повтори, нерозбірливі фрагменти позначаються окремо, а назва компанії нормалізується до правильного написання.

**6. Визначення ролей у діалозі**
Система визначає, хто говорить: клієнт чи менеджер. Для вхідного дзвінка перша репліка вважається клієнтом, для вихідного — менеджером.

**7. Підтягування історії клієнта**
Перед оцінкою AI отримує попередні дзвінки цього клієнта. Це допомагає побачити повторні звернення, невирішені питання та обіцянки передзвонити.

**8. AI-аналіз дзвінка**
AI визначає тип дзвінка, імʼя клієнта, тип ліда, тему звернення, головне питання, наявність проблеми, статус вирішення, емоційний стан клієнта, повторність звернення, якість менеджера і ризикові прапорці.

**9. Класифікація теми звернення**
Система відносить дзвінок до однієї з категорій: вартість квитка, перенесення рейсу, повернення коштів, затримка рейсу, проблема з оплатою, передача посилки, зміна місця, затримка пасажира, номер автобуса, номер платформи, проблема з квитком або інше.

**10. Оцінка менеджера**
Менеджер оцінюється за привітанням, використанням імені, перебиваннями, ввічливістю, наявністю рішення, завершенням розмови та коректним зверненням. Підсумкова оцінка формується за шкалою від 1 до 5.

**11. Оновлення CRM**
Після аналізу система шукає лід у CRM за номером телефону та оновлює його статус відповідно до результату: якісний, неякісний, підрядник або не визначено.

**12. Збереження результату в Supabase**
У базу записуються всі дані аналізу: клієнт, менеджер, дата, тривалість, тема, статус вирішення, оцінка менеджера, проблема, прапорці, транскрипт, аудіозапис і CRM-посилання.

**13. API для dashboard**
Окремий API приймає запити від dashboard і повертає агреговані дані, список дзвінків або деталізацію конкретної розмови.

**14. Dashboard-аналітика**
Dashboard показує KPI, динаміку дзвінків, середню оцінку менеджерів, частку вирішених і невирішених звернень, повторні звернення, популярні теми, розподіл по лідах, проблемах, емоціях, статусах і ризикових прапорцях.

**15. Список і деталізація дзвінків**
Користувач може фільтрувати дзвінки за датою, менеджером, темою, типом дзвінка, статусом, оцінкою, емоцією, типом ліда, проблемними або повторними зверненнями. Також можна відкрити конкретний дзвінок і побачити повну картку з аналізом.

**Що показує dashboard:**
• Загальна кількість дзвінків за обраний період.
• Частка вирішених і невирішених звернень.
• Середня оцінка якості роботи менеджерів.
• Середня тривалість розмови та частка повторних звернень.
• Розподіл тем звернень, типів дзвінків і емоційного стану клієнтів.
• Список дзвінків з фільтрами, пошуком і деталізацією кожної розмови.

**Що дає автоматизація:**
Автоматизація дозволяє керівнику не слухати кожен дзвінок вручну. Система сама приймає дзвінок з Binotel, отримує запис, робить транскрипт, аналізує розмову, оновлює CRM і показує результат у dashboard. Команда бачить якість сервісу, слабкі місця менеджерів, повторні проблеми клієнтів, популярні теми звернень і динаміку роботи контакт-центру.`,
    },
    en: {
      title: 'AI Call Analysis Dashboard (Binotel)',
      shortDesc: 'Automatic quality analysis of manager calls with CRM sync and live KPI dashboard.',
      fullDesc: `**Short description**
This automation analyzes LikeBus phone calls that come through Binotel and turns each conversation into a structured report for management, CRM and dashboard.

When a call ends, Binotel sends an event to n8n. The system checks whether the conversation was real and long enough, retrieves the audio recording, transcribes it, cleans the text, analyzes the dialogue with AI, identifies the request topic, lead type, manager quality, resolution status and possible issues. After that, the result is saved to the database, updates the CRM lead status and becomes available in the dashboard.

**Stack and integrations:**
• n8n — The main automation center: receives the webhook, manages checks, launches transcription, AI analysis, database saving, CRM updates and the dashboard API.
• Binotel API — The source of phone events and audio recordings. Binotel sends information about completed calls: call ID, client number, manager, status, duration and recording link.
• Gemini 3.1 Flash Lite Preview — Used to transcribe the call audio recording into text.
• OpenRouter — The provider for connecting AI models inside n8n.
• x-ai/grok-4.1-fast — Used for AI transcript analysis, call classification, manager evaluation, summary generation and structured output.
• Supabase — The database where analysis results are stored: client, manager, call topic, lead type, manager score, issue, resolution status, risk flags, transcript, recording link and CRM data.
• Bitrix24 CRM — The CRM system where the automation finds a lead by phone number and updates its status: qualified lead, unqualified lead, contractor or undefined.
• Call History — Before the analysis, the system retrieves previous calls of the same client to identify repeat contacts, unresolved issues and promised callbacks.
• Think Tool — AI first analyzes the context, history, topic, issue, resolution status and manager behavior, and only then forms the final result.
• Dashboard API — A separate API layer provides dashboard data: overall KPIs, dynamics, request topics, managers, call list, filters and detailed card of a specific call.

**Flow sequence:**

**1. Receiving the event from Binotel**
After the call is completed, Binotel sends a webhook to n8n with data: call ID, client phone number, manager, call type, duration, status, CRM link and other parameters.

**2. Call quality check**
The automation checks whether the call has a successful status and whether it lasted longer than the minimum threshold. Very short or unsuccessful calls are not sent to AI analysis.

**3. Retrieving the audio recording**
If the call is suitable for analysis, the system waits briefly and then retrieves the audio recording through the Binotel API.

**4. Audio transcription**
The audio recording is sent to Gemini, which turns the conversation into text.

**5. Transcript cleaning**
The text is converted into a readable format: speech defects and unnecessary repetitions are removed, unclear fragments are marked separately, and the company name is normalized to the correct spelling.

**6. Speaker role detection**
The system identifies who is speaking: client or manager. For an incoming call, the first phrase is treated as the client; for an outgoing call, the first phrase is treated as the manager.

**7. Retrieving client history**
Before scoring, AI receives previous calls of the same client. This helps detect repeat contacts, unresolved issues and promised callbacks.

**8. AI call analysis**
AI identifies the call type, client name, lead type, request topic, main question, issue detection, resolution status, client emotional state, repeat contact, manager quality and risk flags.

**9. Request topic classification**
The system assigns the call to one of the categories: ticket price, route rescheduling, refund, bus delay, payment issue, parcel transfer, seat change, passenger delay, bus number, platform number, ticket issue or other.

**10. Manager evaluation**
The manager is evaluated by greeting, name usage, interruptions, politeness, solution offered, call closing and correct addressing. The final score is formed on a scale from 1 to 5.

**11. CRM update**
After the analysis, the system searches for the lead in CRM by phone number and updates its status according to the result: qualified, unqualified, contractor or undefined.

**12. Saving the result to Supabase**
All analysis data is saved to the database: client, manager, date, duration, topic, resolution status, manager score, issue, flags, transcript, audio recording and CRM link.

**13. Dashboard API**
A separate API accepts requests from the dashboard and returns aggregated data, the call list or details of a specific conversation.

**14. Dashboard analytics**
The dashboard shows KPIs, call dynamics, average manager score, share of resolved and unresolved requests, repeat contacts, popular topics, distribution by leads, issues, emotions, statuses and risk flags.

**15. Call list and call details**
The user can filter calls by date, manager, topic, call type, status, score, emotion, lead type, problem-only or repeat-only calls. A specific call can also be opened to view the full analysis card.

**What the dashboard shows:**
• Total number of calls for the selected period.
• Share of resolved and unresolved requests.
• Average manager service quality score.
• Average call duration and share of repeat contacts.
• Distribution of request topics, call types and client emotional states.
• Call list with filters, search and detailed view of each conversation.

**What the automation gives:**
The automation allows management to avoid listening to every call manually. The system receives the call from Binotel, retrieves the recording, creates the transcript, analyzes the conversation, updates CRM and shows the result in the dashboard. The team can see service quality, weak points of managers, repeated client problems, popular request topics and contact-center performance dynamics.`,
    },
  },

  {
    id: 'ai-interview-audit-dashboard',
    category: 'ai',
    icon: 'Users',
    technologies: ['n8n', 'ClickUp', 'PeopleForce', 'Supabase', 'OpenRouter', 'Grok 4.1 Fast', 'minimax-m2.5', 'Think Tool', 'Gmail'],
    images: ['/images/projects/ai-interview-audit-dashboard-1.png', '/images/projects/ai-interview-audit-dashboard-2.png', '/images/projects/ai-interview-audit-dashboard-3.png', '/images/projects/ai-interview-audit-dashboard-4.png', '/images/projects/ai-interview-audit-dashboard-5.png', '/images/projects/ai-interview-audit-dashboard-6.png'],
    links: [],
    ua: {
      title: 'AI-аудит співбесід Dashboard',
      shortDesc: 'Автоматичний аналіз якості проведення співбесід рекрутерами з дашбордом порівняння.',
      fullDesc: `**1. Короткий опис автоматизації**
Ця автоматизація допомагає HR-команді автоматично оцінювати якість рекрутингових інтервʼю. Вона не просто зберігає записи розмов, а перетворює транскрипти на структурований аудит роботи рекрутера.

Система бере інтервʼю з ClickUp, підтягує контекст вакансії з PeopleForce, аналізує розмову за допомогою AI, зберігає результати у Supabase і показує їх у клікабельному dashboard.

Що аналізується: структура інтервʼю, презентація вакансії, soft skills, hard skills check, red flags, скрипт і критичне мислення рекрутера.

Головна ідея: оцінити, чи рекрутер мислить і адаптується до відповідей кандидата, чи просто проходить скрипт.

Для кого: HRD, керівники recruitment-команди, team leads, quality control, навчання рекрутерів.

**2. Стек, моделі та інтеграції:**
• n8n — Головний orchestration-шар: запускає флоу, маршрутизує дані, викликає інші workflow та AI-агентів. Єдина логіка автоматизації без ручного перенесення даних.
• ClickUp — Джерело документів з інтервʼю, транскриптів, назв зустрічей, дат і учасників. Інтервʼю автоматично потрапляють в аналіз із робочого простору.
• PeopleForce — Підтягує актуальні дані вакансії: title, description, requirements, responsibilities, format, priority. AI оцінює інтервʼю під конкретну вакансію, а не за загальним шаблоном.
• Supabase — Зберігає проаналізовані інтервʼю, оцінки, JSON-блоки, transcript, compliance, red flags, missed items. Dashboard швидко отримує структуровані дані для аналітики.
• OpenRouter — Провайдер AI-моделей для аналізу інтервʼю та AI-запитів у dashboard. Можна змінювати або комбінувати моделі без перебудови всієї системи.
• x-ai/grok-4.1-fast — Модель у workflow для швидкого AI-аналізу, відповідей і роботи з dashboard-запитами. Швидка обробка запитів і агрегованих HR-даних.
• minimax/minimax-m2.5 — Додаткова модель, яка використовується в частині AI-аналізу. Резерв або окремий шар для генерації висновків.
• Think Tool — Внутрішній reasoning-шар: AI перевіряє докази, цитати, логіку оцінок і розрахунки. Оцінка стає доказовою, а не просто "думкою AI".
• Gmail — Надсилання сформованого HTML-звіту на email. Результати можна швидко передати команді або керівнику.
• Webhook/API для Dashboard — Окремі actions: overview, managers_list, manager_detail, vacancies_list, interview_detail, interview_full, block_breakdown, missed_items, ai_query. Frontend отримує потрібні дані по кліку, фільтру або AI-запиту.

**3. Послідовність роботи флоу:**

Крок 01: ClickUp workflow отримує документи з інтервʼю та проходить пагінацію по робочому простору. Команда не збирає інтервʼю вручну.

Крок 02: З документа витягується транскрипт, назва зустрічі, дата, учасники та контекст. AI отримує повний матеріал для аналізу.

Крок 03: PeopleForce workflow знаходить вакансію за ID/назвою та повертає опис, вимоги й обовʼязки. Перевірка будується навколо реальної вакансії.

Крок 04: AI Agent читає повний transcript, викликає PeopleForce і Think Tool перед оцінюванням. Система не виставляє бали без контексту й доказів.

Крок 05: AI оцінює інтервʼю по блоках: структура, презентація, soft skills, кваліфікація, red flags, script compliance. HR бачить не одну загальну цифру, а повну карту якості.

Крок 06: Система рахує total score, percent, grade, штрафи, сильні сторони, проблеми та top-3 рекомендації. Рекрутер отримує конкретні точки розвитку.

Крок 07: Результати зберігаються у Supabase у вигляді структурованих JSON-блоків і числових метрик. Дані готові для фільтрів, графіків і drill-down.

Крок 08: Dashboard API віддає дані на фронтенд за action: overview, recruiter details, vacancies, block breakdown, missed items, AI query. Користувач клікає по dashboard і бачить потрібну деталізацію.

Крок 09: За потреби формується email-звіт із підсумками інтервʼю. Результати легко передавати керівнику або команді.

**4. Логіка оцінювання**
Оцінюється саме робота рекрутера. Ключове питання системи: рекрутер мислив, уточнював і адаптувався до кандидата чи просто йшов по шаблону?

• Блок 1 — Структура: привітання, представлення, ціль дзвінка, small talk, пояснення наступних кроків.
• Блок 2 — Презентація: EVP, продукт/проєкт, зрозумілі обовʼязки, персоналізація під кандидата, зарплата.
• Блок 3 — Soft Skills: активне слухання, баланс розмови, уточнюючі питання, тон комунікації.
• Блок 4 — Кваліфікація: перевірка вимог вакансії, hard skills, англійська, мотивація, логістика, формат роботи.
• Блок 5 — Red Flags: штрафи за arrogance, дискримінаційні питання, ігнорування питань кандидата.
• Блок 6 — Script Compliance: що рекрутер виконав або пропустив у порівнянні зі стандартом інтервʼю.

**5. Dashboard як інтерактивний інструмент**
Dashboard не є статичною картинкою. Усі основні елементи працюють як точки входу в деталізацію: картки, рекрутери, вакансії, блоки оцінки, періоди, графіки, приклади AI-питань і кнопки аналізу.

• Картка рекрутера відкриває його персональну статистику, слабкі та сильні блоки.
• Картка вакансії показує всі інтервʼю по конкретній позиції, рекрутерів і діапазон оцінок.
• Блок оцінки відкриває деталізацію: середній бал, raw/max, sample size і missed items.
• Фільтри періоду, рекрутера та вакансії змінюють усі графіки й метрики на dashboard.
• AI Analysis дозволяє поставити питання по вибраному періоду, менеджеру і блоку, наприклад: "які слабкі місця команди?"

Dashboard overview: основні KPI — кількість інтервʼю, середня оцінка, compliance скрипту, слабкий блок, фільтри періоду та кнопка звіту.

Charts and trends: середні оцінки по блоках, radar profile якості та динаміка оцінок за датами.

Block details: картки по кожному блоку — відсоток, raw/max score, sample size та прогрес-бари.

AI Analysis: користувач вибирає період, рекрутера, блок і задає питання до AI по накопичених інтервʼю.

Vacancies view: клікабельні картки вакансій з кількістю інтервʼю, рекрутерами, найкращими та найгіршими оцінками.

Recruiter detail: персональний профіль рекрутера — кількість інтервʼю, середній бал, найкраща/найгірша оцінка та breakdown по блоках.`,
    },
    en: {
      title: 'AI Interview Audit Dashboard',
      shortDesc: 'Automated quality audit of recruiter interviews with scoring, reports, and comparison dashboard.',
      fullDesc: `**1. Automation overview**
This automation helps the HR team automatically evaluate the quality of recruiter interviews. It turns interview transcripts into a structured audit of the recruiterʼs performance, instead of leaving the interview as a raw recording or document.

The system collects interview data from ClickUp, enriches it with vacancy context from PeopleForce, analyzes the conversation with AI, stores the result in Supabase, and makes it available through a clickable dashboard.

What is analyzed: interview structure, vacancy presentation, soft skills, hard skills check, red flags, script compliance and recruiter critical thinking.

Core idea: understand whether the recruiter thinks and adapts, or simply follows a script.

Who uses it: HRD, recruitment managers, team leads, quality control and recruiter training teams.

**2. Stack, models and integrations:**
• n8n — Main automation orchestration layer. It runs the workflow, routes data, calls tools and AI agents. Centralized automation logic without manual data movement.
• ClickUp — Source of interview documents, transcripts, meeting names, dates and attendees. Interview materials are pulled directly from the working space.
• PeopleForce — Source of vacancy title, description, requirements, responsibilities, work format and priority. AI evaluates the interview against the actual vacancy, not a generic checklist.
• Supabase — Stores analyzed interviews, scores, JSON blocks, transcript, compliance, red flags and missed items. Dashboard receives clean structured data for analytics.
• OpenRouter — AI model provider for interview analysis and dashboard AI queries. Models can be changed or combined without rebuilding the system.
• x-ai/grok-4.1-fast — Model used in the workflow for fast AI analysis and dashboard responses. Fast processing of HR analytics queries.
• minimax/minimax-m2.5 — Additional model used in part of the AI analysis flow. Extra layer for conclusions or alternative analysis steps.
• Think Tool — Reasoning layer where AI verifies evidence, quotes, score logic and calculations. The report becomes evidence-based, not just an AI opinion.
• Gmail — Sends the generated HTML report by email. Results can be shared quickly with the team or management.
• Dashboard Webhook API — Supports overview, managers list, manager detail, vacancies list, interview detail, full interview, breakdown, missed items and AI query actions. The frontend receives the right data after every click, filter or AI question.

**3. Flow sequence:**

Step 01: The ClickUp workflow retrieves interview documents and paginates through the workspace. The team does not collect interviews manually.

Step 02: The system extracts the transcript, meeting name, date, attendees and context. AI receives the full material for analysis.

Step 03: The PeopleForce workflow finds the vacancy and returns description, requirements and responsibilities. Scoring is built around the real vacancy.

Step 04: The AI Agent reads the full transcript and calls PeopleForce and Think Tool before scoring. Scores are not generated without context and evidence.

Step 05: AI evaluates the interview across structure, presentation, soft skills, qualification, red flags and script compliance. HR sees a full quality map, not only one final number.

Step 06: The system calculates total score, percentage, grade, penalties, strengths, weaknesses and top recommendations. The recruiter receives clear development points.

Step 07: Results are stored in Supabase as structured JSON blocks and numeric metrics. Data is ready for filters, charts and drill-down.

Step 08: Dashboard API returns data to the frontend through actions such as overview, recruiter details, vacancies, block breakdown, missed items and AI query. Users click through the dashboard and get the needed detail.

Step 09: If needed, an email report is generated and sent to the HR team. Results can be shared with managers or discussed in team reviews.

**4. Dashboard functionality**
The dashboard is fully interactive. Its cards, tabs, filters, recruiter profiles, vacancy cards, block details, charts and AI prompt examples are clickable or filter-driven. This turns the dashboard into a real working interface, not just a visual report.

• Dashboard tab shows high-level KPIs: interviews, average score, script compliance and the weakest block.
• Recruiters tab opens individual recruiter analytics with personal block breakdowns.
• Vacancies tab groups interviews by vacancy and shows best/worst performance indicators.
• AI Analysis tab lets the user ask questions over selected data, period, recruiter and block.
• Reports and filters allow the team to focus on a specific period, recruiter, vacancy or quality block.

**5. Business value**
Quality control: recruitment quality becomes measurable and comparable across recruiters, vacancies and periods.
Training: managers see exactly what each recruiter should improve, with examples and recommendations.
Speed: manual interview review is replaced by automated scoring, summaries and dashboard analytics.
Consistency: all interviews are evaluated by the same criteria and with the same scoring logic.
Visibility: HR leadership can see trends, weak areas and compliance without opening every transcript.
Evidence: scores are based on transcript evidence, not general impressions.

**6. Final result**
The automation creates an end-to-end HR analytics loop: interview data is collected, enriched, analyzed, scored, stored and visualized. The dashboard allows the team to drill into recruiters, vacancies, blocks and AI-generated insights. As a result, interview quality becomes visible, measurable and easier to improve.`,
    },
  },

  {
    id: 'ai-news-bot-telegram-email',
    category: 'automation',
    icon: 'Rss',
    technologies: ['n8n', 'RSS Feed', 'Telegram Bot API', 'Supabase', 'OpenRouter', 'Grok Code Fast', 'Perplexity Sonar', 'Think Tool', 'Gmail'],
    images: [],
    links: [],
    ua: {
      title: 'AI-бот новин (Telegram + Email)',
      shortDesc: 'Автоматичний моніторинг RSS, AI-резюме українською, публікація в Telegram та HTML-розсилка.',
      fullDesc: `**Короткий опис**
Ця автоматизація створює внутрішній AI-дайджест у Telegram: система автоматично отримує новини зі стрічки, перевіряє, чи новина ще не публікувалась, коротко переказує її українською мовою, красиво форматує для Telegram і розсилає підписникам.

Користувач отримує коротку новину в Telegram і може натиснути кнопку "Детально", щоб отримати розгорнуте пояснення прямо в чаті, або кнопку "На пошту", щоб отримати великий HTML-розбір на email. Окремо є ручний режим: адміністратор може сам написати пост або надіслати пост із картинкою, а система розішле його всім підписникам.

**Використаний стек та інтеграції:**
• n8n — Головний центр автоматизації: отримує новини, перевіряє дублікати, запускає AI-обробку, форматує повідомлення, керує кнопками, розсилкою, реєстрацією та email-розборами.
• RSS Feed — Джерело новин. Система регулярно перевіряє RSS-стрічку протягом робочого дня та забирає нові матеріали для обробки.
• Custom webhook / server input — Додатковий вхід для новин через серверний webhook. Це дозволяє надсилати новину в систему не тільки через RSS, а й через зовнішній сервер або кастомне джерело.
• Telegram Bot API — Основний канал взаємодії з користувачами: реєстрація, отримання новин, кнопки "Детально" і "На пошту", ручна розсилка текстів та постів із зображеннями.
• n8n Data Tables — Зберігають список підписників, Telegram ID, email, імʼя, посаду, статус активності, а також історію вже опублікованих новин, щоб не дублювати одну й ту саму новину повторно.
• Supabase — Використовується як додаткове сховище для списків користувачів або підписників у частині ручної розсилки.
• OpenRouter — Провайдер для підключення AI-моделей, які класифікують новину, створюють короткий Telegram-пост і готують детальні пояснення.
• x-ai/grok-code-fast-1 — Використовується для обробки новин, класифікації, створення короткого українського тексту та підготовки Telegram-формату.
• x-ai/grok-4-fast — Використовується для діалогових сценаріїв, реєстрації користувачів, детальних пояснень і email-розборів.
• Perplexity Sonar — Використовується як research-інструмент для детальніших відповідей, коли користувач просить пояснити новину глибше або підготувати email-розбір.
• Think Tool — AI спочатку аналізує зміст новини, категорію, важливість, технічні терміни та потрібний формат відповіді, а вже потім формує текст.
• HTML validator для Telegram — Окремий кодовий блок перевіряє HTML-розмітку, закриває теги, прибирає небезпечні символи, обрізає текст під ліміт Telegram і зберігає повідомлення читабельним.
• Gmail / HTML email — Для кнопки "На пошту" система формує повноцінний HTML-лист із детальним поясненням новини, контекстом, термінами та практичним значенням для читача.

**Послідовність роботи флоу:**

**1. Отримання новин**
Система регулярно перевіряє RSS-стрічку та отримує нові матеріали: заголовок, опис, посилання, дату, автора, унікальний ID і контент.

**2. Перевірка на дублікати**
Перед публікацією система перевіряє, чи ця новина вже є в базі. Якщо новина вже публікувалась, вона не відправляється повторно.

**3. Збереження новини**
Якщо новина нова, система зберігає її ID, автора, заголовок, контент, посилання і дату публікації в таблицю історії новин.

**4. Визначення категорії**
AI аналізує зміст і визначає тип матеріалу: AI-новина, оновлення продукту, AI-застосунок, промпт, інструмент або інший корисний формат.

**5. Створення короткого Telegram-посту**
AI перетворює англомовну або технічну новину на короткий український пост для Telegram. Текст має бути простим, читабельним, без вигаданих фактів, із назвою продукту, ключовими деталями та посиланням на джерело.

**6. Telegram HTML-форматування**
Система готує пост у Telegram HTML: виділяє ключові слова жирним, додає посилання, прибирає markdown, перевіряє допустимі теги та контролює довжину повідомлення.

**7. Перевірка зображення**
Якщо в новині є зображення, система завантажує його та відправляє Telegram-пост як фото з підписом. Якщо зображення немає — надсилає звичайне текстове повідомлення.

**8. Розсилка підписникам**
Система бере список активних підписників і відправляє новину кожному користувачу в Telegram. До кожного повідомлення додаються кнопки "Детально" і "На пошту".

**9. Кнопка "Детально"**
Коли користувач натискає "Детально", система прибирає старі кнопки, бере текст новини, запускає AI-аналіз і повертає розширене пояснення прямо в Telegram.

**10. Кнопка "На пошту"**
Коли користувач натискає "На пошту", система готує повний HTML-розбір для email: пояснює тему, терміни, контекст, користь, обмеження і практичне значення новини.

**11. Реєстрація користувача**
Новий користувач запускає бота, після чого система проводить його через коротку реєстрацію: імʼя, посада та email. Після збору даних користувач додається в базу підписників.

**12. Пояснення правил користування**
Після реєстрації бот пояснює, що новини приходитимуть у Telegram, а під кожною новиною будуть кнопки для детального пояснення і email-розбору.

**13. Ручна розсилка**
Адміністратор може сам написати новину або надіслати пост із картинкою. Система бере текст або фото, знаходить підписників і розсилає повідомлення з тими ж кнопками "Детально" та "На пошту".

**14. Підтримка зображень у ручному режимі**
Якщо адміністратор надсилає фото, система отримує файл із Telegram і розсилає його як фото-повідомлення з підписом. Якщо фото немає — надсилає текст.

**15. Захист від помилок форматування**
Перед відправкою текст проходить перевірку: система чистить HTML, закриває теги, прибирає небезпечні елементи і не дає Telegram-повідомленню зламатися через неправильну розмітку.

**Що дає автоматизація:**
Автоматизація перетворює потік AI-новин на зрозумілу внутрішню медіасистему. Команда отримує не просто посилання на новини, а короткі українські пояснення, можливість швидко отримати глибший розбір у Telegram або на email, а адміністратор може додавати власні пости вручну. Це економить час, покращує обізнаність команди про AI-ринок і робить навчання через новини регулярним та зручним.`,
    },
    en: {
      title: 'AI News Bot (Telegram + Email)',
      shortDesc: 'Automated RSS monitoring, AI summaries in Ukrainian, Telegram publishing, and HTML email dispatch.',
      fullDesc: `**Short description**
This automation creates an internal AI digest in Telegram: the system automatically receives news from a feed, checks whether the news has already been published, briefly summarizes it in Ukrainian, formats it beautifully for Telegram, and sends it to subscribers.

The user receives a short news post in Telegram and can press "Details" to get an expanded explanation directly in the chat, or "Send to email" to receive a large HTML breakdown by email. There is also a manual mode: an administrator can write a post or send a post with an image, and the system will deliver it to all subscribers.

**Stack and integrations:**
• n8n — The main automation center: receives news, checks duplicates, launches AI processing, formats messages, manages buttons, broadcasting, registration, and email breakdowns.
• RSS Feed — The news source. The system regularly checks the RSS feed during the working day and retrieves new materials for processing.
• Custom webhook / server input — An additional entry point for news through a server webhook. This allows news to be sent into the system not only through RSS, but also through an external server or custom source.
• Telegram Bot API — The main interaction channel with users: registration, receiving news, "Details" and "Send to email" buttons, manual text broadcasting, and image posts.
• n8n Data Tables — Store the subscriber list, Telegram ID, email, name, position, active status, and the history of already published news so the same news is not duplicated.
• Supabase — Used as an additional storage layer for user or subscriber lists in the manual broadcasting part.
• OpenRouter — The provider for connecting AI models that classify news, create short Telegram posts, and prepare detailed explanations.
• x-ai/grok-code-fast-1 — Used for news processing, classification, creating short Ukrainian text, and preparing Telegram formatting.
• x-ai/grok-4-fast — Used for dialogue scenarios, user registration, detailed explanations, and email breakdowns.
• Perplexity Sonar — Used as a research tool for deeper answers when the user asks to explain a news item in more detail or prepare an email breakdown.
• Think Tool — AI first analyzes the news content, category, importance, technical terms, and required response format, and only then generates the text.
• HTML validator for Telegram — A separate code block checks HTML markup, closes tags, removes unsafe symbols, trims the text for Telegram limits, and keeps the message readable.
• Gmail / HTML email — For the "Send to email" button, the system creates a complete HTML email with a detailed explanation of the news, context, terms, and practical value for the reader.

**Flow sequence:**

**1. Receiving news**
The system regularly checks the RSS feed and receives new materials: title, description, link, date, author, unique ID, and content.

**2. Duplicate check**
Before publishing, the system checks whether this news item already exists in the database. If the news has already been published, it is not sent again.

**3. Saving the news item**
If the news is new, the system saves its ID, author, title, content, link, and publication date into the news history table.

**4. Category detection**
AI analyzes the content and detects the material type: AI news, product update, AI application, prompt, tool, or another useful format.

**5. Creating a short Telegram post**
AI turns the English or technical news into a short Ukrainian Telegram post. The text must be simple, readable, fact-based, include the product name, key details, and a source link.

**6. Telegram HTML formatting**
The system prepares the post in Telegram HTML: highlights key words in bold, adds links, removes markdown, checks allowed tags, and controls the message length.

**7. Image check**
If the news contains an image, the system downloads it and sends the Telegram post as a photo with a caption. If there is no image, it sends a regular text message.

**8. Sending to subscribers**
The system takes the list of active subscribers and sends the news to each user in Telegram. Each message includes the "Details" and "Send to email" buttons.

**9. "Details" button**
When the user presses "Details", the system removes the old buttons, takes the news text, launches AI analysis, and returns an expanded explanation directly in Telegram.

**10. "Send to email" button**
When the user presses "Send to email", the system prepares a full HTML email breakdown: it explains the topic, terms, context, usefulness, limitations, and practical meaning of the news.

**11. User registration**
A new user starts the bot, and the system guides them through a short registration: name, position, and email. After the data is collected, the user is added to the subscriber database.

**12. Usage explanation**
After registration, the bot explains that news will arrive in Telegram, and each news item will have buttons for a detailed explanation and email breakdown.

**13. Manual broadcasting**
An administrator can write a news post manually or send a post with an image. The system takes the text or photo, finds the subscribers, and sends the message with the same "Details" and "Send to email" buttons.

**14. Image support in manual mode**
If the administrator sends a photo, the system retrieves the file from Telegram and sends it as a photo message with a caption. If there is no photo, it sends text.

**15. Protection from formatting errors**
Before sending, the text is validated: the system cleans HTML, closes tags, removes unsafe elements, and prevents the Telegram message from breaking because of incorrect markup.

**What the automation gives:**
The automation turns the flow of AI news into a clear internal media system. The team receives not just links to news, but short Ukrainian explanations, the ability to quickly get a deeper breakdown in Telegram or by email, and the administrator can add their own posts manually. This saves time, improves the team's awareness of the AI market, and makes learning through news regular and convenient.`,
    },
  },

  {
    id: 'ai-sales-call-audit-youtube',
    category: 'ai',
    icon: 'Youtube',
    technologies: ['n8n', 'YouTube API', 'YouTube Captions SRT', 'Supabase', 'OpenRouter', 'Gemini Flash Lite', 'Gemini Pro Preview', 'Google Docs', 'Google Sheets', 'Telegram'],
    images: [],
    links: [],
    ua: {
      title: 'AI-аудит дзвінків продажів з YouTube',
      shortDesc: 'Автоматичний аналіз відео з YouTube: транскрипція SRT, поетапна оцінка продажів, звіт у Google Docs.',
      fullDesc: `**Короткий опис**
Ця автоматизація знаходить нові записи продажних дзвінків у YouTube, забирає доступні субтитри, перетворює SRT у чистий текст розмови та запускає AI-аналіз якості роботи менеджера.

Головна цінність не в самому transcript, а в готовому управлінському розборі: система показує, де менеджер добре веде клієнта, де втрачає продаж, які етапи пропущені та які фрази можна використати в наступному дзвінку.

**Яку проблему вирішує:**
Керівнику продажів не потрібно вручну переглядати або перечитувати кожен запис. Усі дзвінки оцінюються за єдиною логікою, тому результати можна порівнювати між менеджерами та відео. Менеджер отримує не загальну критику, а конкретні приклади: що сказав добре, де була помилка, чому це вплинуло на продаж і як сказати краще. Команда бачить не тільки факт розмови, а якість кожного етапу продажного діалогу.

**Використаний стек та інтеграції:**
• n8n — Керує всією логікою: отримує відео, перевіряє дублікати, забирає субтитри, очищає текст, запускає AI-аналіз, створює документи та відправляє результати.
• YouTube API — Дістає плейлисти, відео, назви, дати публікації, посилання та доступні доріжки субтитрів.
• YouTube Captions / SRT — Основне джерело transcript. Система працює з уже доступними субтитрами відео, завантажує їх у форматі SRT та перетворює у чистий текст.
• Supabase — Зберігає реєстр уже оброблених відео та метадані: video_id, плейлист, менеджер/персона, назва відео, посилання і дата публікації. Це не дає обробляти одне відео повторно.
• OpenRouter — Підключає AI-моделі до n8n та дає можливість окремо запускати аналіз кожного блоку дзвінка.
• Gemini 3.1 Flash Lite Preview — Основна модель для детального аналізу окремих блоків дзвінка: оцінка, цитати, помилки та рекомендації.
• Gemini 3.1 Pro Preview — Модель для фінального висновку: загальна картина, де "зламався" продаж, головна причина втрати та топ-рекомендації.
• Google Docs — Створює окремий документ із transcript і окремий фінальний документ із повним AI-розбором дзвінка.
• Google Sheets — Записує структуровані оцінки по критеріях, блоках і загальний скоринг для подальшої звітності.
• Telegram — Повідомляє команду, якщо субтитри недоступні або порожні, а також надсилає результат після завершення аналізу.
• JavaScript Code nodes — Очищують SRT, прибирають повтори, формують метадані, рахують оцінки, валідовують текст документа та готують фінальні поля.

**Послідовність роботи флоу:**
1. Запуск сценарію в n8n.
2. Отримання з Supabase списку відео, які вже були оброблені.
3. Збір усіх плейлистів з YouTube-акаунта.
4. Фільтрація службових або порожніх плейлистів, які не потрібно аналізувати.
5. Отримання всіх відео з потрібних плейлистів.
6. Формування картки відео: менеджер/персона, playlistId, videoId, назва, дата публікації та YouTube-посилання.
7. Порівняння videoId з Supabase та відбір тільки нових відео.
8. Послідовна обробка кожного нового відео через цикл.
9. Отримання списку доступних субтитрів для конкретного відео.
10. Вибір найкращої доріжки субтитрів: ручні субтитри мають пріоритет над автоматичними, мови обираються у пріоритеті uk, ru, en.
11. Якщо субтитрів немає, команда отримує Telegram-повідомлення, а відео пропускається до наступної перевірки.
12. Завантаження субтитрів у форматі SRT.
13. Перевірка, що SRT не порожній. Якщо текст не прийшов, система повідомляє команду та фіксує ситуацію.
14. Парсинг SRT: читання таймкодів, обʼєднання дрібних сегментів, очищення повторів, зайвих символів і технічного шуму.
15. Формування чистого transcript, підрахунок кількості слів, збереження мови, ознаки автосубтитрів і статусу обробки.
16. Запис метаданих відео в Supabase, щоб наступного разу воно не оброблялося повторно.
17. Передача підготовленого transcript у AI-частину автоматизації.
18. Розбір назви відео: дата, менеджер, ніша або статус, а також приведення часу до київського часового поясу.
19. Створення Google Docs-документа з повною транскрибацією.
20. Паралельний запуск AI-аналізаторів по 12 блоках продажного дзвінка.
21. Збір усіх блокових результатів в один масив.
22. Валідація тексту та формування структури фінального документа.
23. Фінальний AI-висновок: загальна оцінка, ймовірність покупки, причина втрати, топ-3 покращення і головний фокус менеджеру.
24. Створення фінального Google Docs-звіту з повним аналізом.
25. Надсилання Telegram-повідомлення з менеджером, датою, назвою відео, YouTube-посиланням і результатом аналізу.
26. Запис детальних оцінок у Google Sheets.
27. Пауза між відео та перехід до наступного нового запису.

**Логіка AI-оцінки:**
AI-аналіз розділений на окремі спеціалізовані блоки. Кожен блок повертає структурований результат: оцінки по пунктах, суму балів, ключову помилку, цитати, пояснення впливу на продаж і приклад кращої фрази.

• Загальні стандарти подачі менеджера — оцінює тон, впевненість, контакт із клієнтом, повагу, підготовку по ніші та загальну подачу.
• Блок 1. Вступлення — перевіряє, чи менеджер зняв напругу, пояснив формат зустрічі та підготував клієнта до можливого рішення в кінці.
• Блок 2. Про проєкт — оцінює, чи менеджер зрозумів нішу, продукт, поточну ситуацію, джерела клієнтів, реальний запит і глибинну біль.
• Блок 3. Точка Б: ціль і кейс — перевіряє, чи була конкретна ціль у грошах і строках, чи зрозумілий мотив і чи релевантний кейс підсилює віру клієнта.
• Блок 4. Топ-3 проблеми — дивиться, чи менеджер виділив справжні причини проблем, а не тільки поверхневі симптоми.
• Блок 5. Декомпозиція: гроші та кейс — оцінює, чи менеджер показав шлях до результату через цифри, дії та приклад схожого клієнта.
• Блок 6. Інструменти — перевіряє, чи інструменти привʼязані до реальних проблем клієнта, а не подані як загальний список.
• Блок 7. Покроковий план — оцінює, чи клієнт побачив зрозумілу послідовність дій після дзвінка.
• Блок 8. З нами і без нас — показує, чи менеджер пояснив різницю між самостійним рухом і роботою з командою.
• Блок 9. Перехід до презентації — перевіряє, чи перехід до рішення був логічним і не виглядав різким продажем.
• Блок 10. Презентація програми — оцінює, чи рішення повʼязане з болями клієнта, структуроване і адаптоване під його ситуацію.
• Блок 11. Закриття та заперечення — перевіряє, чи менеджер озвучив умови, зробив спробу закриття, розкрив справжнє заперечення і зафіксував рішення.

**Що отримує команда на виході:**
• Google Docs із повною транскрибацією дзвінка.
• Google Docs із детальним AI-аналізом по всіх блоках.
• Загальна оцінка дзвінка та відсоток якості.
• Оцінки по кожному блоку та кожному критерію.
• Цитати з розмови як докази сильних і слабких моментів.
• Ключова помилка по блоку, пояснення, чому це помилка, і як вона впливає на продаж.
• Готовий приклад фрази, яку менеджер може використати в наступному дзвінку.
• Фінальний висновок: сильний, середній або слабкий дзвінок, ймовірність покупки, де зламався продаж і що виправити.
• Рядок у Google Sheets для подальшої аналітики.
• Telegram-повідомлення з посиланням на відео і результат аналізу.

**Бізнес-цінність:**
Швидка перевірка якості дзвінків без ручного перегляду кожного відео. Єдина система оцінювання для всієї команди продажів. Навчання менеджерів на реальних дзвінках, а не на загальних порадах. Можливість бачити, які етапи продажу найчастіше просідають. База структурованих оцінок, яку можна використовувати для динаміки, звітів і coaching-процесу. Менеджер отримує конкретну інструкцію: що змінити і яку фразу сказати наступного разу.`,
    },
    en: {
      title: 'AI Sales Call Audit from YouTube',
      shortDesc: 'Automatic YouTube sales video analysis: SRT transcription, stage-by-stage scoring, Google Docs report.',
      fullDesc: `**Short description**
This automation finds new sales call recordings on YouTube, retrieves available captions, converts SRT into a clean conversation transcript and launches an AI quality audit of the manager's work.

The main value is not the transcript itself, but the ready-to-use management review: the system shows where the manager led the client well, where the sale was lost, which stages were missed and which phrases can be used in the next call.

**Problem it solves:**
The sales lead does not need to manually watch or reread every recording. All calls are evaluated with the same logic, so results can be compared across managers and videos. The manager receives not general criticism, but specific examples: what was done well, where the mistake happened, why it affected the sale and how to say it better. The team sees not only that a conversation happened, but the quality of every stage of the sales dialogue.

**Stack and integrations:**
• n8n — Controls the whole logic: receives videos, checks duplicates, retrieves captions, cleans the text, launches AI analysis, creates documents and sends results.
• YouTube API — Retrieves playlists, videos, titles, publication dates, links and available caption tracks.
• YouTube Captions / SRT — The main transcript source. The system works with already available video captions, downloads them as SRT and converts them into clean text.
• Supabase — Stores the registry of already processed videos and metadata: video_id, playlist, manager/person, video title, link and publication date. This prevents the same video from being processed again.
• OpenRouter — Connects AI models to n8n and allows separate analysis runs for each call block.
• Gemini 3.1 Flash Lite Preview — The main model for detailed analysis of individual call blocks: scoring, quotes, mistakes and recommendations.
• Gemini 3.1 Pro Preview — The model for the final conclusion: overall picture, where the sale "broke", the main reason for the loss and top recommendations.
• Google Docs — Creates a separate document with the transcript and a separate final document with the full AI call review.
• Google Sheets — Records structured scores by criteria, blocks and overall scoring for further reporting.
• Telegram — Notifies the team when captions are unavailable or empty, and also sends the result after the analysis is completed.
• JavaScript Code nodes — Clean SRT, remove repetitions, prepare metadata, calculate scores, validate document text and prepare final fields.

**Flow sequence:**
1. The scenario is launched in n8n.
2. The system retrieves from Supabase the list of videos that have already been processed.
3. All playlists are collected from the YouTube account.
4. Service or empty playlists that should not be analyzed are filtered out.
5. All videos are retrieved from the relevant playlists.
6. A video card is prepared: manager/person, playlistId, videoId, title, publication date and YouTube link.
7. The videoId is compared with Supabase and only new videos are selected.
8. Each new video is processed one by one through a loop.
9. The list of available captions is retrieved for the specific video.
10. The best caption track is selected: manual captions have priority over automatic captions, and languages are selected in the priority order uk, ru, en.
11. If there are no captions, the team receives a Telegram notification and the video is skipped until the next check.
12. Captions are downloaded in SRT format.
13. The system checks that the SRT is not empty. If the text was not received, the team is notified and the situation is recorded.
14. SRT is parsed: timecodes are read, small segments are merged, repetitions, extra symbols and technical noise are cleaned.
15. A clean transcript is formed, word count is calculated, language, autogenerated-caption flag and processing status are saved.
16. Video metadata is written to Supabase so the video is not processed again next time.
17. The prepared transcript is passed to the AI part of the automation.
18. The video title is parsed: date, manager, niche or status, and the time is converted to Kyiv time zone.
19. A Google Docs document is created with the full transcript.
20. AI analyzers are launched in parallel across 12 sales call blocks.
21. All block results are merged into one array.
22. The text is validated and the final document structure is prepared.
23. The final AI conclusion is generated: overall score, purchase probability, reason for the loss, top 3 improvements and the main focus for the manager.
24. The final Google Docs report with the full analysis is created.
25. A Telegram message is sent with the manager, date, video title, YouTube link and analysis result.
26. Detailed scores are written to Google Sheets.
27. The automation waits between videos and moves to the next new recording.

**AI evaluation logic:**
AI analysis is split into separate specialized blocks. Each block returns a structured result: criterion scores, total points, key mistake, quotes, explanation of the sales impact and an example of a better phrase.

• General standards of the manager's delivery — evaluates tone, confidence, client contact, respect, niche preparation and overall delivery.
• Block 1. Opening — checks whether the manager reduced tension, explained the meeting format and prepared the client for a possible solution at the end.
• Block 2. Client project — evaluates whether the manager understood the niche, product, current situation, client sources, real request and deeper pain.
• Block 3. Point B: goal and case — checks whether there was a concrete goal in money and timing, whether the motive was clear and whether a relevant case strengthened the client's belief.
• Block 4. Top 3 problems — checks whether the manager identified the real causes of the problems, not only surface-level symptoms.
• Block 5. Decomposition: money and case — evaluates whether the manager showed the path to the result through numbers, actions and an example of a similar client.
• Block 6. Tools — checks whether the tools are tied to the client's real problems, not presented as a generic list.
• Block 7. Step-by-step plan — evaluates whether the client saw a clear sequence of actions after the call.
• Block 8. With us and without us — shows whether the manager explained the difference between moving alone and working with the team.
• Block 9. Transition to presentation — checks whether the transition to the solution was logical and did not feel like a sudden sale.
• Block 10. Program presentation — evaluates whether the solution was linked to the client's pains, structured and adapted to the client's situation.
• Block 11. Closing and objections — checks whether the manager stated the terms, tried to close, uncovered the real objection and fixed the decision.

**What the team receives:**
• Google Docs with the full call transcript.
• Google Docs with detailed AI analysis across all blocks.
• Overall call score and quality percentage.
• Scores for every block and every criterion.
• Quotes from the conversation as evidence of strong and weak moments.
• The key mistake in each block, explanation of why it is a mistake and how it affects the sale.
• A ready-to-use example phrase that the manager can use in the next call.
• Final conclusion: strong, average or weak call, purchase probability, where the sale broke and what to fix.
• A row in Google Sheets for further analytics.
• Telegram message with a link to the video and the analysis result.

**Business value:**
Fast quality control of calls without manually watching every video. One evaluation system for the whole sales team. Manager training based on real calls, not generic advice. Ability to see which sales stages most often become weak points. A structured scoring database that can be used for dynamics, reports and the coaching process. The manager receives a concrete instruction: what to change and what phrase to say next time.`,
    },
  },

  {
    id: 'creobot-ai-factory',
    category: 'ai',
    icon: 'Wand2',
    technologies: ['n8n', 'Telegram Bot API', 'Google Drive', 'xAI Grok 4.1 Reasoning', 'Gemini Image Preview', 'Supabase Vector Store', 'OpenAI Embeddings', 'HeyGen API'],
    images: ['/images/projects/creobot-ai-factory-1.png', '/images/projects/creobot-ai-factory-2.png'],
    links: [],
    ua: {
      title: 'CreoBot — AI-фабрика креативів',
      shortDesc: 'Telegram-бот для генерації рекламних зображень з AI-агентом та векторною базою знань бренду.',
      fullDesc: `**Призначення**
CreoBot автоматизує процес створення рекламних креативів для маркетингової / performance-команди. Замість ручного обміну повідомленнями, файлів і технічних запитів користувач працює з простим Telegram-ботом: надсилає ідею або фото, обирає формат, отримує результат і може одразу внести правки.

• Для користувача — це виглядає як зручний бот із кнопками та зрозумілими підказками.
• Для команди — це єдиний контрольований процес створення, збереження і повторної генерації креативів.
• Для бізнесу — це швидше тестування гіпотез, менше ручної роботи й прозорий доступ до інструменту.

**Основна ідея флоу:**
Користувач реєструється → адміністратор підтверджує доступ → користувач створює креатив через Telegram → AI-агент готує промпт → модуль генерації створює зображення → результат повертається в Telegram і зберігається для подальших правок.

**Стек, моделі та інтеграції:**
• n8n — Оркестрація всієї автоматизації: маршрутизація, умови, сесії, запуск AI-агентів та окремих workflow.
• Telegram Bot API — Головний інтерфейс: повідомлення, кнопки, callback-запити, відправка фото та службових статусів.
• n8n Data Tables — Зберігання користувачів, статусів доступу, етапів реєстрації, активних сесій та історії файлів.
• Google Drive — Зберігання вхідних фото-референсів і згенерованих креативів.
• xAI Grok: grok-4-1-fast-reasoning — Модель для логіки AI-агента: інтерпретація запиту, підготовка відповіді, збір промпту та керування кнопками.
• Gemini image endpoint: gemini-3-pro-image-preview — Модель / endpoint для генерації або редагування зображень у модулі NanoBanana.
• NanoBanana workflow tool — Окремий модуль генерації, який приймає prompt, fileId та size і повертає готове зображення.
• Supabase Vector Store — База знань для покращення якості промптів: стилі, фони, правила генерації, контекст для креативів.
• OpenAI Embeddings — Перетворення знань у векторний формат для пошуку релевантного контексту в Supabase.
• Postgres Chat Memory / Buffer Memory — Пам'ять діалогу та контексту, щоб бот не втрачав стан користувача.
• HeyGen API — Блок для динамічних креативів: аватари, голоси, шаблони та перевірка статусу відео.

**Що важливо:**
• Користувачу не потрібно знати, які API або моделі працюють всередині — весь процес схований за простими кнопками Telegram.
• Доступ до інструменту контрольований: користувач не може працювати з ботом без підтвердження адміністратора.
• AI не просто генерує картинку: перед генерацією він формує промпт, бере контекст із бази знань і враховує фото-референс, розмір, стиль та фон.

**Послідовність роботи флоу:**

Крок 1. Запуск у Telegram — Користувач надсилає /start, текст, фото або натискає кнопку. Бот приймає і повідомлення, і callback-запити.

Крок 2. Реєстрація — Якщо користувача немає в базі, бот просить ім'я та email, після чого створює заявку на доступ.

Крок 3. Модерація доступу — Адміністратор отримує заявку та може підтвердити, відхилити, вимкнути або видалити користувача через кнопки.

Крок 4. Перевірка доступу — Основний бот перевіряє статус користувача. Без активного статусу користувач бачить повідомлення про очікування або відсутність доступу.

Крок 5. Вибір сценарію — Користувач обирає формат роботи: статичний креатив, динамічний креатив, SMM або PPC-сценарій.

Крок 6. Збір матеріалів — Бот приймає текстове ТЗ, фото-референс, опис, бренд, стиль, фон і потрібний розмір.

Крок 7. Збереження сесії — Стан діалогу, завантажені файли, активний fileId і параметри генерації зберігаються, щоб користувач міг продовжити роботу.

Крок 8. AI-підготовка — AI-агент використовує базу знань, Think-крок і модель Grok для формування якісного промпту.

Крок 9. Генерація — NanoBanana-модуль передає промпт і референс до Gemini image endpoint та отримує готове зображення.

Крок 10. Видача результату — Готовий файл відправляється в Telegram і зберігається в Google Drive / історії сесії.

Крок 11. Правки — Користувач може змінити фон, стиль, розмір, внести правки текстом або повністю перегенерувати креатив.

**Підтримувані сценарії:**
• SMM — Вільна генерація креативу за текстовим описом і/або фото-референсом.
• PPC — Більш структурований сценарій з тезою, стилем, фоном, брендом, форматом і підтвердженням перед генерацією.
• Static creative — Створення рекламного зображення для соціальних мереж, банерів, сторіс або performance-тестів.
• Dynamic creative — У флоу присутній окремий блок для динамічних креативів через HeyGen: аватари, голоси, шаблони, статус відео.
• Edits / regenerate — Після результату користувач може не починати з нуля, а продовжити з поточного креативу.

**Підтримувані формати зображень:**
У флоу передбачено вибір популярних рекламних форматів: 1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9. Це дозволяє одразу готувати креативи під соцмережі, сторіс, reels, банери та широкі рекламні формати.

**Результат для бізнесу:**
• Швидкість — Креатив можна створити та переробити в одному інтерфейсі без довгого ручного ланцюжка.
• Контроль доступу — Інструмент доступний тільки підтвердженим користувачам.
• Єдина база процесу — Сесії, файли та статуси не губляться між повідомленнями.
• Гнучкість — Можна працювати з фото, текстом, стилем, фоном, брендом і різними розмірами.
• Масштабування — Нові сценарії, стилі, правила та інтеграції можна додавати поверх існуючої логіки.

**Презентаційний висновок:**
CreoBot — це не просто генератор картинок, а контрольований AI-процес для маркетингової команди: від доступу користувача до готового рекламного матеріалу, його збереження та подальших правок.`,
    },
    en: {
      title: 'CreoBot — AI Creative Factory',
      shortDesc: 'Telegram bot for ad creative generation with AI agent, brand knowledge base, and admin approval flow.',
      fullDesc: `**Purpose**
CreoBot automates the creation of advertising creatives for a marketing and performance team. Instead of manually passing briefs, files, references and revisions between people, the user works inside a simple Telegram bot: they send an idea or a reference image, select the required format, receive the generated creative and can immediately request edits.

• For the user — the process looks like a simple bot with buttons, prompts and clear next steps.
• For the team — it creates a single controlled workflow for creative generation, storage and regeneration.
• For the business — it speeds up creative testing, reduces manual operations and keeps access under control.

**Core flow idea:**
User registers → admin approves access → user creates a creative in Telegram → AI agent prepares the prompt → generation module creates the asset → the result is sent back to Telegram and saved for further edits.

**Stack, models and integrations:**
• n8n — Main automation orchestration: routing, conditions, sessions, AI agent calls and separate workflow execution.
• Telegram Bot API — Main user interface: messages, buttons, callbacks, photo delivery and status updates.
• n8n Data Tables — Stores users, access statuses, registration steps, active sessions and file history.
• Google Drive — Stores uploaded reference images and generated creatives.
• xAI Grok: grok-4-1-fast-reasoning — Reasoning model for the AI agent: understanding requests, preparing responses, building prompts and managing button logic.
• Gemini image endpoint: gemini-3-pro-image-preview — Image generation / editing endpoint used by the NanoBanana generation module.
• NanoBanana workflow tool — Dedicated generation module that receives prompt, fileId and size, then returns the final image.
• Supabase Vector Store — Knowledge base for better prompts: styles, backgrounds, generation rules and creative context.
• OpenAI Embeddings — Transforms knowledge into vectors so the agent can retrieve relevant context from Supabase.
• Postgres Chat Memory / Buffer Memory — Stores conversation context so the bot does not lose the user state.
• HeyGen API — Dynamic creative layer: avatars, voices, templates and video status checks.

**Presentation-level explanation:**
• The user does not need to know which APIs or models are running in the background — the whole process is hidden behind a Telegram interface.
• Access is controlled: users cannot work with the tool until an administrator approves them.
• The AI does not only generate an image; it prepares the prompt, retrieves relevant context, considers the reference image, size, style and background.

**End-to-end flow sequence:**

Step 1. Telegram entry — The user sends /start, text, photo or presses a button. The bot accepts both messages and callback actions.

Step 2. Registration — If the user is not in the database, the bot asks for name and email and creates an access request.

Step 3. Access moderation — The administrator receives the request and can approve, reject, disable or delete the user using inline buttons.

Step 4. Access check — The main bot checks the user status. Without active access, the user sees a pending or no-access message.

Step 5. Scenario selection — The user selects a mode: static creative, dynamic creative, SMM or PPC scenario.

Step 6. Material collection — The bot collects the brief, reference image, description, brand, style, background and required size.

Step 7. Session saving — The dialogue state, uploaded files, active fileId and generation parameters are saved for continuity.

Step 8. AI preparation — The AI agent uses the knowledge base, Think step and Grok model to prepare a high-quality prompt.

Step 9. Generation — The NanoBanana module sends the prompt and reference to the Gemini image endpoint and receives the final image.

Step 10. Result delivery — The generated asset is sent to Telegram and saved to Google Drive / session history.

Step 11. Edits — The user can change background, style, size, request text edits or fully regenerate the creative.

**Supported scenarios:**
• SMM — Free-form creative generation based on a text brief and/or reference image.
• PPC — More structured scenario with thesis, style, background, brand, format and confirmation before generation.
• Static creative — Advertising image for social media, banners, stories or performance testing.
• Dynamic creative — The workflow includes a separate HeyGen layer for dynamic creatives: avatars, voices, templates and video status.
• Edits / regenerate — After the result, the user can continue from the current creative instead of starting from scratch.

**Business value:**
• Speed — A creative can be generated and revised inside one interface without a long manual chain.
• Controlled access — The tool is available only to approved users.
• Single process base — Sessions, files and statuses do not get lost between messages.
• Flexibility — The team can work with photos, text, style, background, brand and different aspect ratios.
• Scalability — New scenarios, styles, rules and integrations can be added on top of the existing workflow.

**Presentation conclusion:**
CreoBot is not just an image generator. It is a controlled AI-powered creative workflow for the marketing team: from user access to generated advertising material, file storage and further revisions.`,
    },
  },

  {
    id: 'guest-feedback-hotel-dashboard',
    category: 'automation',
    icon: 'Star',
    technologies: ['n8n', 'Servio', 'Tally Forms', 'Gmail', 'Google Sheets', 'Dashboard API', 'Gemini Flash Lite'],
    images: [],
    links: [],
    ua: {
      title: 'Дашборд відгуків гостей готелю',
      shortDesc: 'Автоматичний збір відгуків після виїзду гостей, аналіз по готелях та AI-пошук у дашборді.',
      fullDesc: `**Короткий опис**
Ця автоматизація допомагає готельній мережі автоматично збирати дані про гостей після виселення, підтягувати їх у таблиці, обʼєднувати з відповідями з форми відгуку та показувати результат у dashboard.

Система отримує список гостей, які сьогодні виїхали з готелю, з Servio, очищає дані, розділяє їх по готелях і записує в Google Sheets. Коли гість заповнює форму відгуку, відповідь приходить через Gmail, автоматично парситься, визначається потрібний готель, і дані додаються або оновлюються в тій самій таблиці. Після цього dashboard може показувати звіти, фільтри, порівняння готелів і AI-пошук по текстових відгуках.

Джерела даних: Servio для гостей після check-out, Tally Forms для відповідей гостей, Gmail для отримання форм. Єдина база: Google Sheets зберігає гостей, контакти, оцінки, NPS і текстові відгуки. Аналітика: Dashboard показує звіти, порівняння готелів, фільтри та AI-пошук по коментарях.

**Використаний стек та інтеграції:**
• n8n — Головна логіка автоматизації: отримує дані з різних джерел, очищає їх, маршрутизує по готелях, оновлює таблиці та віддає дані для dashboard.
• Servio — Джерело даних про гостей. Система отримує гостей зі статусом виселення, перевіряє дату виїзду та забирає ПІБ, номер кімнати, період проживання, джерело бронювання, телефон, кількість візитів і примітки.
• Tally Forms — Джерело відповідей гостей після проживання. Гість заповнює форму, а система далі обробляє відповіді автоматично через email-повідомлення.
• Gmail — Канал отримання нових відповідей з Tally. Автоматизація перевіряє непрочитані листи від Tally, витягує HTML, тему листа, дату і дані форми.
• Google Sheets — Основна база для збереження даних по гостях і відгуках: check-out, контактні дані, дати проживання, номер кімнати, джерело бронювання, оцінки, NPS, текстові відгуки та відповіді з форм.
• Dashboard API — Окремий API-шар для dashboard. Він приймає параметри: готель, період, тип дати, категорію номера, канал бронювання, повторність гостя та тип дії — звіт, фільтри, порівняння або AI-запит.
• Gemini 3.1 Flash Lite Preview — Використовується для AI-пошуку по текстових відгуках. Користувач може поставити питання, а система знаходить релевантні відгуки та формує короткий висновок.

**Послідовність роботи флоу:**

**1. Отримання гостей після виїзду**
Система звертається до Servio і отримує гостей зі статусом check-out за поточний день.

**2. Фільтрація гостей**
Автоматизація залишає тільки тих гостей, у яких дата виїзду збігається з сьогоднішньою датою.

**3. Очищення приміток**
Система прибирає технічні OTA-примітки та залишає тільки корисні публічні або приватні коментарі, які можуть бути важливими для відділу турботи.

**4. Підготовка даних гостя**
Для кожного гостя формується структура: унікальний ID, готель, ПІБ, номер кімнати, період проживання, кількість візитів, джерело бронювання, телефон і примітки.

**5. Розділення по готелях**
Система визначає, до якого готелю належить гість, і направляє запис у відповідний лист таблиці.

**6. Запис у Google Sheets**
Дані гостя записуються або оновлюються в Google Sheets. Це створює основу для подальшого збору відгуків.

**7. Отримання відповіді з Tally**
Коли гість заповнює форму, Tally надсилає email. Gmail-trigger ловить цей лист і передає його в n8n.

**8. Парсинг форми**
Система витягує з HTML-листа всі пари "питання — відповідь", дату заповнення, готель і контактні дані гостя.

**9. Визначення готелю**
Автоматизація читає тему листа, визначає назву готелю і приводить її до єдиного формату, щоб запис потрапив у правильний лист.

**10. Оновлення рядка гостя**
Система знаходить гостя за контактом і оновлює його рядок у Google Sheets: додає загальні враження, оцінки сервісу, чистоти, комфорту, харчування, SPA, NPS і текстові побажання.

**11. Dashboard-запит**
Frontend dashboard звертається до n8n через webhook і передає параметри: готель, період, тип дати, фільтри та потрібну дію.

**12. Формування звіту**
Для одного готелю система читає відповідний лист Google Sheets, фільтрує записи по датах, категоріях номерів, каналах бронювання та повторності гостей.

**13. Порівняння готелів**
Для порівняння система проходить по кількох готелях, збирає показники по кожному і повертає dashboard узагальнену картину по мережі.

**14. AI-пошук по відгуках**
Користувач може поставити питання по відгуках, наприклад: "Що гостям не подобається у сніданках?" або "Які проблеми найчастіше згадують?". Система відбирає текстові відгуки за період, передає їх у Gemini і повертає знайдені відгуки та короткий висновок.

**15. Фільтри для dashboard**
Система окремо віддає доступні категорії номерів і канали бронювання, щоб dashboard міг будувати зручні фільтри для користувача.

**Що дає автоматизація:**
Автоматизація прибирає ручне перенесення даних між Servio, Tally, Gmail, Google Sheets і dashboard. Команда бачить, хто з гостей виїхав, хто залишив відгук, які оцінки поставив, які проблеми повторюються, як відрізняються готелі між собою і що саме пишуть гості у відкритих коментарях. Це дає прозору систему контролю якості сервісу по всій мережі.`,
    },
    en: {
      title: 'Guest Feedback Hotel Dashboard',
      shortDesc: 'Automated guest feedback collection after checkout with hotel comparison and AI-powered search.',
      fullDesc: `**Short description**
This automation helps a hotel chain automatically collect guest data after check-out, add it to spreadsheets, combine it with form responses, and display the result in a dashboard.

The system receives the list of guests who checked out today from Servio, cleans the data, separates it by hotel, and writes it to Google Sheets. When a guest fills out the feedback form, the response comes through Gmail, is automatically parsed, the correct hotel is detected, and the data is added or updated in the same spreadsheet. After that, the dashboard can show reports, filters, hotel comparison, and AI search across text reviews.

Data sources: Servio for guests after check-out, Tally Forms for guest responses, Gmail for receiving forms. Single database: Google Sheets stores guests, contacts, scores, NPS and text reviews. Analytics: the dashboard shows reports, hotel comparison, filters and AI search across comments.

**Stack and integrations:**
• n8n — The main automation logic: receives data from different sources, cleans it, routes it by hotel, updates spreadsheets, and provides data for the dashboard.
• Servio — The source of guest data. The system receives guests with check-out status, checks the departure date, and extracts full name, room number, stay period, booking source, phone number, visit count, and notes.
• Tally Forms — The source of guest responses after their stay. The guest fills out the form, and the system processes the responses automatically through email notifications.
• Gmail — The channel for receiving new Tally responses. The automation checks unread emails from Tally and extracts HTML, email subject, date, and form data.
• Google Sheets — The main database for storing guest and review data: check-out guests, contact data, stay dates, room number, booking source, scores, NPS, text reviews, and form answers.
• Dashboard API — A separate API layer for the dashboard. It receives parameters: hotel, period, date type, room category, booking channel, repeat guest status, and action type — report, filters, comparison, or AI query.
• Gemini 3.1 Flash Lite Preview — Used for AI search across text reviews. The user can ask a question, and the system finds relevant reviews and generates a short summary.

**Flow sequence:**

**1. Getting checked-out guests**
The system contacts Servio and receives guests with check-out status for the current day.

**2. Guest filtering**
The automation keeps only those guests whose departure date matches today's date.

**3. Notes cleaning**
The system removes technical OTA notes and keeps only useful public or private comments that may be important for the care team.

**4. Guest data preparation**
For each guest, the system creates a structure: unique ID, hotel, full name, room number, stay period, visit count, booking source, phone number, and notes.

**5. Hotel routing**
The system detects which hotel the guest belongs to and sends the record to the corresponding spreadsheet tab.

**6. Saving to Google Sheets**
The guest data is written or updated in Google Sheets. This creates the base for future feedback collection.

**7. Receiving a Tally response**
When the guest fills out the form, Tally sends an email. The Gmail trigger catches this email and sends it to n8n.

**8. Form parsing**
The system extracts all "question — answer" pairs, submission date, hotel, and guest contact details from the HTML email.

**9. Hotel detection**
The automation reads the email subject, detects the hotel name, and normalizes it into a single format so the record goes to the correct sheet.

**10. Updating the guest row**
The system finds the guest by contact and updates the row in Google Sheets: overall impression, service, cleanliness, comfort, food, SPA, NPS, and text comments.

**11. Dashboard request**
The frontend dashboard calls n8n through a webhook and sends parameters: hotel, period, date type, filters, and required action.

**12. Report generation**
For one hotel, the system reads the corresponding Google Sheets tab and filters records by dates, room categories, booking channels, and repeat guest status.

**13. Hotel comparison**
For comparison, the system goes through several hotels, collects metrics for each one, and returns a network-level overview to the dashboard.

**14. AI search across reviews**
The user can ask a question about reviews, for example: "What do guests dislike about breakfasts?" or "Which problems are mentioned most often?". The system filters text reviews for the selected period, sends them to Gemini, and returns the found reviews with a short summary.

**15. Dashboard filters**
The system separately returns available room categories and booking channels so the dashboard can build convenient filters for the user.

**What the automation gives:**
The automation removes manual data transfer between Servio, Tally, Gmail, Google Sheets, and the dashboard. The team can see which guests checked out, who left feedback, what scores they gave, which problems repeat, how hotels differ from each other, and what exactly guests write in open comments. This creates a transparent quality control system across the whole hotel chain.`,
    },
  },

  {
    id: 'hotel-inventory-telegram-bot',
    category: 'automation',
    icon: 'Package',
    technologies: ['n8n', 'Telegram Bot API', 'Google Sheets', 'Supabase', 'MongoDB Chat Memory', 'Gemini Vision', 'OpenRouter', 'Grok 4.20', 'Think Tool'],
    images: [],
    links: [],
    ua: {
      title: 'Telegram-бот обліку товарів готелю',
      shortDesc: 'Розумний Telegram-бот для управління складом готелю з розпізнаванням накладних та статистикою.',
      fullDesc: `**Короткий опис**
Ця автоматизація перетворює Telegram-бота на зручний онлайн-склад для готелю.

Користувач може через бот додавати товари на склад, надсилати накладні фото або документом, переглядати актуальні залишки, списувати товари та отримувати статистику по руху товарів. Система працює з Google Sheets як основною таблицею залишків, Supabase як журналом операцій, MongoDB/Postgres-памʼяттю як контекстом діалогу та AI-модулями для розпізнавання товарів і роботи з текстовими запитами.

**Використаний стек та інтеграції:**
• n8n — Керує всією логікою: приймає повідомлення з Telegram, визначає сценарій, запускає AI-обробку, оновлює залишки та записує історію операцій.
• Telegram Bot API — Основний інтерфейс для співробітників: меню, додавання товару, перегляд бази, статистика та списання.
• Google Sheets — Основна таблиця залишків складу: ID товару, назва товару та поточна кількість. Після додавання або списання залишок оновлюється.
• Supabase — Журнал складських операцій: що додано або списано, кількість до/після, користувач, джерело та тип дії.
• MongoDB / Postgres Chat Memory — Памʼять багатокрокового діалогу, щоб бот розумів контекст і не втрачав етап користувача.
• n8n Data Tables — Зберігають активну сесію: поточний стан, сценарій, товари, історію кроків і тимчасові дані для підтвердження.
• Document extraction — Обробка документів і тексту з накладних для подальшого розпізнавання позицій.
• Gemini Vision / Google Gemini — Розпізнавання накладних, фото та зображень, які користувач надсилає в Telegram.
• OpenRouter AI Agents — AI-модулі аналізують назви товарів, кількість, одиниці виміру, нечіткі запити та статистичні питання.
• x-ai/grok-4.20-beta / x-ai/grok-4.1-fast — Моделі для обробки складських запитів, статистики, інтерпретації тексту та допомоги в діалозі.
• Think Tool — Додатковий етап аналізу перед відповіддю: система спочатку оцінює контекст, а потім формує дію або відповідь.

**Послідовність роботи флоу:**

**1. Запуск бота**
Користувач відкриває Telegram-бота і бачить головне меню: додати товар, переглянути базу, отримати статистику або списати товар.

**2. Управління сесією**
Система визначає, чи користувач натиснув кнопку, написав текст, надіслав фото або завантажив документ. Після цього встановлюється правильний стан діалогу.

**3. Додавання товару**
Користувач вводить товар вручну або надсилає накладну фото, PDF, Word-документом чи текстом. Дані передаються на AI-аналіз.

**4. Розпізнавання накладної**
AI визначає всі товари, кількість і одиниці виміру. Якщо в накладній кілька позицій, кожна обробляється окремо.

**5. Пошук у базі**
Для кожного товару система перевіряє Google Sheets. Пошук працює по точній назві, схожих словах, синонімах і мовних варіаціях, щоб не створювати дублікати.

**6. Уточнення схожих товарів**
Якщо знайдено схожі позиції, система не створює новий товар автоматично. Користувач обирає правильний варіант або підтверджує створення нового товару.

**7. Підтвердження додавання**
Перед записом бот показує розпізнані товари, кількість до додавання і майбутній залишок. Користувач підтверджує або скасовує дію.

**8. Оновлення залишків**
Після підтвердження Google Sheets оновлюється: існуючому товару додається кількість, а для нового товару створюється окремий запис.

**9. Логування додавання**
Кожне додавання записується в Supabase: товар, ID, дія, зміна кількості, залишок до/після, користувач і джерело.

**10. Списання товару**
Користувач обирає сценарій списання, пише назву товару, система знаходить позицію в базі, показує залишок і запитує кількість для списання.

**11. Перевірка кількості**
Якщо введено некоректну кількість або користувач хоче списати більше, ніж є на складі, бот повертає помилку і просить ввести коректне значення.

**12. Підтвердження списання**
Бот показує товар, кількість списання, поточний залишок і залишок після операції. Користувач натискає "Так" або "Ні".

**13. Оновлення після списання**
Після підтвердження система оновлює Google Sheets і записує списання в Supabase як окрему операцію.

**14. Перегляд бази**
Користувач може переглянути актуальну складську базу прямо в Telegram у вигляді списку товарів із залишками.

**15. Статистика та аналітика**
Користувач пише запит у вільній формі, наприклад: "кава за місяць", "скільки списали тапочки", "топ списань за тиждень". AI допомагає зрозуміти запит і знайти потрібні дані.

**16. Відповідь по статистиці**
Система формує короткий звіт: скільки додали, скільки списали, які були останні операції та який загальний рух по товару.

**Що дає автоматизація:**
Автоматизація прибирає ручне ведення складу в чатах і таблицях. Співробітник може швидко додати товар з накладної, списати позицію, перевірити залишок або отримати статистику без відкриття таблиць. Керівник отримує прозорий журнал усіх дій: хто, коли і що додав або списав.

**Ключова цінність для команди:**
• Менше ручного введення та менше помилок у складських залишках.
• Швидке додавання товарів навіть із фото або документа.
• Контроль списань через підтвердження та перевірку залишку.
• Повна історія операцій для керівника.
• Можливість отримувати статистику звичайним текстовим запитом у Telegram.`,
    },
    en: {
      title: 'Hotel Inventory Telegram Bot',
      shortDesc: 'Smart Telegram bot for hotel inventory management with invoice recognition and stock statistics.',
      fullDesc: `**Short description**
This automation turns a Telegram bot into a convenient online inventory system for a hotel.

A user can add items to the warehouse through the bot, send invoices as photos or documents, view current stock balances, write off items, and receive statistics on inventory movement. The system uses Google Sheets as the main stock table, Supabase as the operation log, MongoDB/Postgres memory as conversation context, and AI modules for product recognition and text request processing.

**Stack and integrations:**
• n8n — Manages the entire logic: receives Telegram messages, identifies the scenario, launches AI processing, updates stock balances, and records operation history.
• Telegram Bot API — The main interface for employees: menu, item adding, database view, statistics, and item write-off.
• Google Sheets — The main stock balance table: product ID, product name, and current quantity. After adding or writing off items, the balance is updated.
• Supabase — Warehouse operation log: what was added or written off, quantity before/after, user, source, and action type.
• MongoDB / Postgres Chat Memory — Memory for multi-step dialogue so the bot understands the context and does not lose the user's current stage.
• n8n Data Tables — Store the active session: current state, scenario, products, step history, and temporary data for confirmation.
• Document extraction — Processes documents and invoice text for further item recognition.
• Gemini Vision / Google Gemini — Recognizes invoices, photos, and images sent by the user in Telegram.
• OpenRouter AI Agents — AI modules analyze product names, quantities, measurement units, fuzzy requests, and statistics questions.
• x-ai/grok-4.20-beta / x-ai/grok-4.1-fast — Models for processing inventory requests, statistics, text interpretation, and dialogue support.
• Think Tool — Additional analysis step before answering: the system first evaluates the context, then forms an action or response.

**Flow sequence:**

**1. Bot launch**
The user opens the Telegram bot and sees the main menu: add an item, view the database, get statistics, or write off an item.

**2. Session management**
The system determines whether the user pressed a button, wrote text, sent a photo, or uploaded a document. Then the correct conversation state is set.

**3. Adding an item**
The user types the item manually or sends an invoice as a photo, PDF, Word document, or text. The data is sent to AI analysis.

**4. Invoice recognition**
AI detects all products, quantities, and measurement units. If the invoice contains several positions, each one is processed separately.

**5. Database search**
For each product, the system checks Google Sheets. Search works by exact name, similar words, synonyms, and language variations to avoid duplicates.

**6. Similar product clarification**
If similar positions are found, the system does not create a new item automatically. The user chooses the correct option or confirms creating a new item.

**7. Add confirmation**
Before saving, the bot shows recognized items, the quantity to add, and the future balance. The user confirms or cancels the action.

**8. Balance update**
After confirmation, Google Sheets is updated: quantity is added to an existing item, and a new row is created for a new item.

**9. Add operation logging**
Each addition is recorded in Supabase: item, ID, action, quantity change, balance before/after, user, and source.

**10. Item write-off**
The user selects the write-off scenario, types the product name, the system finds the position in the database, shows the balance, and asks for the quantity to write off.

**11. Quantity validation**
If the entered quantity is incorrect or the user wants to write off more than available, the bot returns an error and asks for a valid value.

**12. Write-off confirmation**
The bot shows the item, write-off quantity, current balance, and balance after the operation. The user presses "Yes" or "No".

**13. Update after write-off**
After confirmation, the system updates Google Sheets and records the write-off in Supabase as a separate operation.

**14. Database view**
The user can view the current inventory database directly in Telegram as a list of products with balances.

**15. Statistics and analytics**
The user writes a free-form request, for example: "coffee for the month", "how many slippers were written off", "top write-offs for the week". AI helps understand the request and find the needed data.

**16. Statistics response**
The system creates a short report: how much was added, how much was written off, what the latest operations were, and the overall movement for the product.

**What the automation gives:**
The automation removes manual warehouse management from chats and spreadsheets. An employee can quickly add an item from an invoice, write off a position, check the balance, or get statistics without opening spreadsheets. Management receives a transparent log of all actions: who added or wrote off what, and when.

**Key value for the team:**
• Less manual input and fewer mistakes in stock balances.
• Fast item adding even from a photo or document.
• Write-off control through confirmation and balance validation.
• Full operation history for management.
• Ability to get statistics through a normal text request in Telegram.`,
    },
  },

  {
    id: 'rag-knowledge-base-qa',
    category: 'ai',
    icon: 'Brain',
    technologies: ['n8n', 'Google Drive', 'Google Docs', 'Google Sheets', 'OpenRouter', 'Grok 4.20', 'Gemini Flash Lite', 'OpenAI Embeddings', 'Supabase Vector Store'],
    images: [],
    links: [],
    ua: {
      title: 'RAG База знань Q&A',
      shortDesc: 'Автоматична побудова векторної бази знань з Google Drive та AI-семантичний пошук по документах.',
      fullDesc: `**Короткий опис**
Ця автоматизація створює RAG-систему для роботи з внутрішніми документами компанії. Її задача — не просто зберегти файли, а перетворити їх на пошукову базу знань, по якій можна ставити питання і отримувати відповіді на основі реального змісту документів.

Система забирає документи з Google Drive, витягує з них текст, очищає його, ділить на логічні фрагменти, створює embeddings і записує все у Supabase Vector Store. Після цього питання користувача можна порівнювати з векторною базою, знаходити релевантні частини документів і формувати відповідь на їх основі.

Головний акцент автоматизації — RAG-підхід: відповідь будується не з загальної памʼяті AI, а з конкретних фрагментів політик, процедур, FAQ або анкет, які були попередньо оброблені й додані в базу знань.

**Логіка RAG-системи:**
• Документи — файли з Google Drive: політики, процедури, FAQ, Word, PDF, Excel і текстові документи.
• Підготовка тексту — конвертація, експорт, очищення та приведення різних форматів до єдиного текстового вигляду.
• Семантичні фрагменти — AI розбиває текст на логічні chunk-и: питання-відповідь, правило, процедура, визначення, форма або історія змін.
• Векторизація — кожен chunk перетворюється в embedding, тобто числове представлення змісту.
• Пошук і відповідь — питання користувача шукає найближчі за змістом фрагменти, а AI формує відповідь на основі знайденого контексту.

**Використаний стек та інтеграції:**
• n8n — Керує всією автоматизацією: отримує документи, запускає конвертацію, очищення, chunking, embeddings і запис у векторну базу.
• Google Drive — Джерело документів. Система проходить по папках і підпапках, знаходить файли та готує їх до індексації.
• Google Docs / Google Sheets conversion — Документи та таблиці тимчасово конвертуються у зручний формат, щоб витягнути текст або CSV без ручної роботи.
• PDF / DOCX / XLSX / TXT extraction — Система розпізнає тип файлу і використовує окрему логіку для текстових файлів, PDF, Word-документів і Excel-таблиць.
• OpenRouter — Шар підключення AI-моделей для семантичного розбиття документів.
• Grok 4.20 — Модель для семантичного chunking політик, процедур і великих документів.
• Gemini 3.1 Flash Lite Preview — Модель для FAQ-сценарію, де важливо розділити документ на точні пари "питання + відповідь" без зміни змісту.
• OpenAI Embeddings — Створює embeddings для кожного фрагмента. У потоці використовується модель text-embedding-3-large з розмірністю 1536.
• Supabase Vector Store — Векторна база знань, де зберігаються chunk-и, metadata та embeddings для подальшого пошуку.
• match_policies search function — Функція пошуку, яка дозволяє знаходити найбільш релевантні частини документів для відповіді на питання.

**Послідовність роботи флоу:**
1. Отримання документів — Автоматизація відкриває потрібну папку в Google Drive, проходить по підпапках і збирає файли для обробки.
2. Визначення типу файлу — Система перевіряє mime type і направляє файл у відповідну гілку: текст, PDF, Word або Excel.
3. Конвертація у текстовий формат — Word-документи конвертуються в Google Docs, Excel-файли — в Google Sheets, після чого експортуються як plain text або CSV.
4. Очищення тексту — Текст очищується від зайвих пробілів, переносів, табуляцій, службових символів і технічного шуму.
5. AI semantic chunking — AI аналізує структуру документа і ділить його на змістовні фрагменти. Для FAQ діє правило: одне питання і відповідь — один chunk. Для політик: один chunk — одна логічна тема, правило, процедура або визначення.
6. Збереження оригінального змісту — Автоматизація не переказує і не скорочує зміст документів. Chunk-и зберігають реальний текст, щоб відповідь у майбутньому спиралася на джерело.
7. Додавання metadata — До кожного фрагмента додаються назва документа, код документа, розділ, тип документа, компанія, ключові слова і короткий контекст.
8. Створення embeddings — Кожен chunk перетворюється на вектор, що дозволяє шукати інформацію за змістом, а не тільки за точним збігом слів.
9. Запис у Supabase Vector Store — Підготовлені фрагменти разом із metadata та embeddings записуються у векторну базу знань.
10. Обробка питання користувача — Коли користувач ставить питання, система шукає найбільш близькі за змістом фрагменти в базі знань.
11. Формування відповіді — AI отримує знайдені фрагменти як контекст і формує відповідь, привʼязану до реальних документів.
12. Підтримка актуальності — Коли в папці зʼявляються нові або оновлені документи, їх можна повторно пропустити через той самий процес індексації.

**Що саме робить RAG-підхід:**
Без RAG — AI може відповідати загально і ризикує вигадати деталі. З RAG — система спочатку знаходить потрібні фрагменти документів, а вже потім формує відповідь. Результат — користувач отримує відповідь, яка спирається на внутрішні політики, процедури, FAQ або анкети, а не на загальні припущення.

**Які дані зберігаються з кожним фрагментом:**
• назва документа
• код документа
• номер або назва розділу
• тип документа
• компанія або джерело
• ключові слова
• контекстний опис
• текст фрагмента
• embedding для пошуку

**Що дає автоматизація:**
Замість ручного пошуку по папках користувач може просто поставити питання. Відповідь будується на реальних документах, тому система краще підходить для внутрішніх правил, політик і процедур. Документи різних форматів приводяться до єдиної логіки обробки. FAQ і політики можна використовувати як живу базу знань для співробітників, менеджерів або внутрішніх ботів. Зменшується навантаження на людей, які постійно відповідають на типові питання по документах.

**Підсумок:**
Ця автоматизація перетворює набір розрізнених документів на RAG-базу знань. Вона індексує документи, розкладає їх на зрозумілі фрагменти, зберігає у векторному сховищі та створює основу для точних відповідей на питання користувачів.`,
    },
    en: {
      title: 'RAG Knowledge Base Q&A',
      shortDesc: 'Automatic vector knowledge base from Google Drive files with AI semantic search and Q&A.',
      fullDesc: `**Short description**
This automation creates a RAG system for working with internal company documents. Its task is not just to store files, but to turn them into a searchable knowledge base where users can ask questions and receive answers based on the real content of documents.

The system takes documents from Google Drive, extracts text from them, cleans it, splits it into logical fragments, creates embeddings and writes everything into Supabase Vector Store. After that, a user question can be compared with the vector database, relevant document parts can be found, and an answer can be formed based on them.

The main focus of the automation is the RAG approach: the answer is built not from the AI model's general memory, but from specific fragments of policies, procedures, FAQ or questionnaires that were previously processed and added to the knowledge base.

**RAG system logic:**
• Documents — files from Google Drive: policies, procedures, FAQ, Word, PDF, Excel and text documents.
• Text preparation — conversion, export, cleaning and bringing different formats into one text-based structure.
• Semantic fragments — AI splits the text into logical chunks: question-answer, rule, procedure, definition, form or revision history.
• Vectorization — each chunk is converted into an embedding, meaning a numeric representation of its content.
• Search and answer — the user question searches for semantically closest fragments, and AI forms an answer based on the retrieved context.

**Stack and integrations:**
• n8n — Controls the whole automation: collects documents, runs conversion, cleaning, chunking, embeddings and writing into the vector database.
• Google Drive — The document source. The system goes through folders and subfolders, finds files and prepares them for indexing.
• Google Docs / Google Sheets conversion — Documents and spreadsheets are temporarily converted into a convenient format to extract text or CSV without manual work.
• PDF / DOCX / XLSX / TXT extraction — The system detects the file type and uses separate logic for text files, PDF, Word documents and Excel spreadsheets.
• OpenRouter — The connection layer for AI models used for semantic document splitting.
• Grok 4.20 — The model used for semantic chunking of policies, procedures and large documents.
• Gemini 3.1 Flash Lite Preview — The model used in the FAQ scenario, where it is important to split the document into exact "question + answer" pairs without changing the content.
• OpenAI Embeddings — Creates embeddings for each fragment. The flow uses the text-embedding-3-large model with 1536 dimensions.
• Supabase Vector Store — The vector knowledge base where chunks, metadata and embeddings are stored for later search.
• match_policies search function — The search function that allows the system to find the most relevant document parts for answering questions.

**Flow sequence:**
1. Getting documents — The automation opens the required Google Drive folder, goes through subfolders and collects files for processing.
2. Detecting file type — The system checks the mime type and routes the file into the correct branch: text, PDF, Word or Excel.
3. Converting into text format — Word documents are converted into Google Docs, Excel files into Google Sheets, and then exported as plain text or CSV.
4. Cleaning text — The text is cleaned from extra spaces, line breaks, tabs, service symbols and technical noise.
5. AI semantic chunking — AI analyzes the document structure and splits it into meaningful fragments. For FAQ, the rule is: one question and answer equals one chunk. For policies: one chunk equals one logical topic, rule, procedure or definition.
6. Preserving original content — The automation does not retell or shorten document content. Chunks keep the real text so the future answer can rely on the source.
7. Adding metadata — Each fragment receives document title, document code, section, document type, company, keywords and short context.
8. Creating embeddings — Each chunk is converted into a vector, allowing the system to search information by meaning, not only by exact word match.
9. Writing to Supabase Vector Store — Prepared fragments together with metadata and embeddings are written into the vector knowledge base.
10. Processing the user question — When a user asks a question, the system searches for the semantically closest fragments in the knowledge base.
11. Forming the answer — AI receives the retrieved fragments as context and forms an answer connected to the real documents.
12. Keeping the base up to date — When new or updated documents appear in the folder, they can be passed through the same indexing process again.

**What the RAG approach does:**
Without RAG — AI may answer too generally and can risk inventing details. With RAG — the system first finds the needed document fragments and only then forms the answer. Result — the user receives an answer based on internal policies, procedures, FAQ or questionnaires, not on general assumptions.

**What data is stored with each fragment:**
• document title
• document code
• section number or title
• document type
• company or source
• keywords
• context description
• fragment text
• embedding for search

**What the automation gives:**
Instead of manually searching through folders, the user can simply ask a question. The answer is built on real documents, so the system is better suited for internal rules, policies and procedures. Documents of different formats are brought into one processing logic. FAQ and policies can be used as a living knowledge base for employees, managers or internal bots. It reduces the workload on people who constantly answer repeated questions about documents.

**Summary:**
This automation turns a set of scattered documents into a RAG knowledge base. It indexes documents, breaks them into understandable fragments, stores them in vector storage and creates the foundation for accurate answers to user questions.`,
    },
  },

  {
    id: 'sms-search-control',
    category: 'automation',
    icon: 'Smartphone',
    technologies: ['n8n', 'SMS Webhook', 'JavaScript Parser', 'Supabase', 'Telegram Bot API', 'Google Sheets', 'n8n Data Tables', 'XLSX Export'],
    images: [],
    links: [],
    ua: {
      title: 'SMS-пошук та контроль видачі',
      shortDesc: 'Система обліку фінансових SMS з Telegram-ботом для пошуку, видачі та XLSX-звітності. Без AI.',
      fullDesc: `**1. Короткий опис**
Автоматизація приймає вхідні SMS, розпізнає їхній зміст, зберігає дані в базу та дає користувачам Telegram-бот для швидкого пошуку потрібного повідомлення. Система працює з фінансовими SMS, сервісними повідомленнями та кодами підтвердження. Користувач проходить реєстрацію, отримує доступ після підтвердження адміністратора, обирає банк, валюту та суму, а бот знаходить відповідне SMS і фіксує факт видачі.

**2. Для чого це потрібно**
Основна задача — прибрати ручний пошук SMS і зробити процес контрольованим. Кожне повідомлення зберігається, кожна видача фіксується, а адміністратор може отримати звіт за потрібний період. Це особливо корисно, коли SMS використовуються для платежів, фінансових підтверджень або сервісних кодів, і важливо знати, хто саме отримав повідомлення.

**3. Стек та інтеграції:**
• n8n — Керує всією логікою: приймає SMS, запускає парсинг, маршрутизує користувачів у Telegram, зберігає сесії, запускає пошук і формує звіти.
• SMS provider webhook — Передає вхідні SMS у n8n через POST-запит: подія, номер отримувача, відправник і текст повідомлення.
• JavaScript parser — Розбирає текст SMS: суму, валюту, код, дату, час, останні цифри картки, сервіс і відправника.
• Supabase — Зберігає фінансові SMS, коди підтвердження, статус видачі, ПІБ користувача та Telegram username.
• Telegram Bot API — Є основним інтерфейсом для користувача: реєстрація, вибір банку, вибір валюти, введення суми, отримання SMS і повторний пошук.
• Google Sheets — Використовується для списку користувачів, статусів доступу, перевірки адміністратора та списку валют.
• n8n Data Tables — Зберігають тимчасовий стан користувача: вибраний банк, валюту, суму та поточний етап діалогу.
• XLSX export — Формує Excel-звіт за період і надсилає його адміністратору в Telegram.
• AI models — AI-моделі не використовуються. Логіка побудована на правилах, парсингу, базі даних і Telegram-інтерфейсі.

**4. Загальна архітектура**
Є два повʼязані контури: перший приймає SMS і зберігає їх у базу, другий дає користувачу Telegram-інтерфейс для пошуку та видачі цих SMS. Адміністратор керує доступом і може формувати звітність.

Flow map: Incoming SMS → Parsing → Supabase storage → Telegram search → SMS issuing → Status update → Report export

**5. Послідовність роботи флоу:**

Крок 1. Прийом SMS — Webhook отримує подію SMS із технічними полями: тип події, номер отримувача, відправник і текст.

Крок 2. Форматування вхідних даних — n8n перетворює сирий payload у зрозумілу структуру: event, phone, sender і text.

Крок 3. Перевірка потрібного номера — Система перевіряє, чи повідомлення прийшло на налаштований номер. Непотрібні SMS не проходять далі.

Крок 4. Розділення за типом — AUTH-повідомлення йдуть у сценарій кодів підтвердження. Інші повідомлення йдуть у сценарій фінансових або сервісних SMS.

Крок 5. Парсинг фінансових SMS — Система визначає відправника, суму, валюту, дату, час, останні цифри картки та код, якщо він є.

Крок 6. Окрема логіка для Wise та ZEN — Якщо SMS від Wise або ZEN не містить суми, система зберігає його як повідомлення без суми з USD та значенням 0.

Крок 7. Парсинг AUTH-кодів — Система шукає код довжиною 4-8 цифр і намагається визначити сервіс: Google, Telegram, Wise, Binance, PayPal, Apple, OpenAI та інші.

Крок 8. Збереження в Supabase — Фінансові SMS записуються як транзакції зі статусом "не видано". AUTH-коди зберігаються в окрему таблицю.

Крок 9. Реєстрація користувача — Користувач запускає Telegram-бот, вводить прізвище та імʼя, після чого заявка надходить адміністратору.

Крок 10. Підтвердження доступу — Адміністратор підтверджує або відхиляє заявку в Telegram. Статус користувача оновлюється в Google Sheets.

Крок 11. Пошук SMS користувачем — Після підтвердження користувач обирає банк, валюту та вводить суму. Для SMS без суми використовується USD і 0.

Крок 12. Видача знайденого SMS — Якщо повідомлення знайдено, бот надсилає його користувачу. Якщо в тексті є код, він показується окремо для зручності.

Крок 13. Фіксація видачі — Після відправки SMS система оновлює запис у Supabase: ставить статус "видано", додає ПІБ і Telegram username користувача.

Крок 14. Звіт адміністратора — Адміністратор вводить діапазон дат, система збирає записи з Supabase, формує XLSX і надсилає файл у Telegram.

**6. Основні користувацькі сценарії:**
• Новий користувач запускає бота, проходить реєстрацію та очікує підтвердження.
• Підтверджений користувач шукає SMS за банком, валютою та сумою.
• Користувач шукає SMS без суми, обираючи USD і вводячи 0.
• Адміністратор підтверджує або відхиляє доступ користувачів.
• Адміністратор формує XLSX-звіт за вибраний період.

**7. Які дані зберігаються:**
• Оригінальний текст SMS.
• Відправник повідомлення.
• Тип повідомлення: транзакція або код підтвердження.
• Сума, валюта та ціла сума для пошуку.
• Код підтвердження, якщо він є в повідомленні.
• Дата, час і додаткові дані, якщо вони знайдені в SMS.
• Статус видачі: видано або не видано.
• ПІБ і Telegram username користувача, який отримав SMS.

**8. Контроль доступу та прозорість**
Доступ до бота не відкритий для всіх. Новий користувач потрапляє в список очікування, а адміністратор приймає рішення через кнопки в Telegram. Завдяки цьому SMS не просто передаються користувачам, а видаються під контролем із фіксацією відповідального користувача.

**9. Результат для бізнесу**
Команда отримує єдину систему для прийому, зберігання, пошуку та контрольованої видачі SMS. Це скорочує час на пошук повідомлень, зменшує ризик плутанини, дозволяє бачити історію видач і дає адміністраторам прозору звітність.`,
    },
    en: {
      title: 'SMS Search & Control',
      shortDesc: 'Financial SMS accounting with a Telegram bot for search, issuance, and XLSX reporting. No AI.',
      fullDesc: `**1. Short description**
The automation receives incoming SMS messages, recognizes their content, stores the data in a database, and gives users a Telegram bot for quickly finding the needed message. The system works with financial SMS messages, service messages and verification codes. A user registers, receives access after administrator approval, selects a bank, currency and amount, and the bot finds the matching SMS and records the issuing event.

**2. Why it is needed**
The main task is to remove manual SMS searching and make the process controlled. Each message is stored, each issuing action is recorded, and an administrator can receive a report for the selected period. This is especially useful when SMS messages are used for payments, financial confirmations or service codes, and it is important to know exactly who received the message.

**3. Stack and integrations:**
• n8n — Manages the full logic: receives SMS, starts parsing, routes users in Telegram, stores sessions, launches search and generates reports.
• SMS provider webhook — Sends incoming SMS messages to n8n via a POST request: event, recipient number, sender and message text.
• JavaScript parser — Parses the SMS text: amount, currency, code, date, time, last card digits, service and sender.
• Supabase — Stores financial SMS messages, verification codes, issuing status, user full name and Telegram username.
• Telegram Bot API — The main user interface: registration, bank selection, currency selection, amount entry, receiving SMS and restarting the search.
• Google Sheets — Used for the user list, access statuses, administrator check and currency list.
• n8n Data Tables — Store the temporary user state: selected bank, selected currency, amount and current dialogue step.
• XLSX export — Generates an Excel report for the selected period and sends it to the administrator in Telegram.
• AI models — AI models are not used. The logic is based on rules, parsing, database operations and the Telegram interface.

**4. General architecture**
There are two connected layers: the first receives SMS messages and stores them in the database, the second provides a Telegram interface for searching and issuing these SMS messages. The administrator manages access and can generate reports.

Flow map: Incoming SMS → Parsing → Supabase storage → Telegram search → SMS issuing → Status update → Report export

**5. Flow sequence:**

Step 1. SMS receiving — The webhook receives an SMS event with technical fields: event type, recipient number, sender and text.

Step 2. Incoming data formatting — n8n converts the raw payload into a clean structure: event, phone, sender and text.

Step 3. Required number check — The system checks whether the message arrived to the configured number. Irrelevant SMS messages do not continue further.

Step 4. Type separation — AUTH messages go to the verification code scenario. Other messages go to the financial or service SMS scenario.

Step 5. Financial SMS parsing — The system detects sender, amount, currency, date, time, last card digits and code if one exists.

Step 6. Separate logic for Wise and ZEN — If an SMS from Wise or ZEN does not contain an amount, the system stores it as a no-amount message with USD and value 0.

Step 7. AUTH code parsing — The system searches for a 4-8 digit code and tries to identify the service: Google, Telegram, Wise, Binance, PayPal, Apple, OpenAI and others.

Step 8. Saving to Supabase — Financial SMS messages are saved as transactions with the status "not issued". AUTH codes are saved to a separate table.

Step 9. User registration — The user starts the Telegram bot, enters surname and name, and the request is sent to the administrator.

Step 10. Access approval — The administrator approves or declines the request in Telegram. The user status is updated in Google Sheets.

Step 11. SMS search by user — After approval, the user selects a bank, currency and enters the amount. For SMS without an amount, USD and 0 are used.

Step 12. Sending the found SMS — If the message is found, the bot sends it to the user. If the text contains a code, it is displayed separately for convenience.

Step 13. Issuing record update — After sending the SMS, the system updates the record in Supabase: sets status to "issued", adds user full name and Telegram username.

Step 14. Administrator report — The administrator enters a date range, the system collects records from Supabase, creates an XLSX file and sends it in Telegram.

**6. Main user scenarios:**
• A new user starts the bot, registers and waits for approval.
• An approved user searches for an SMS by bank, currency and amount.
• A user searches for an SMS without an amount by selecting USD and entering 0.
• An administrator approves or declines user access.
• An administrator generates an XLSX report for the selected period.

**7. What data is stored:**
• Original SMS text.
• Message sender.
• Message type: transaction or verification code.
• Amount, currency and integer amount for search.
• Verification code if it exists in the message.
• Date, time and additional data if found in the SMS.
• Issuing status: issued or not issued.
• Full name and Telegram username of the user who received the SMS.

**8. Access control and transparency**
Bot access is not open to everyone. A new user enters the waiting list, and an administrator makes the decision through Telegram buttons. Because of this, SMS messages are not simply forwarded to users; they are issued under control with the responsible user recorded.

**9. Business result**
The team receives a single system for receiving, storing, searching and controlled issuing of SMS messages. This reduces the time spent searching messages, lowers the risk of confusion, makes issuing history visible and gives administrators transparent reporting.`,
    },
  },
];

export function getAllProjects() {
  return [...EXISTING_PROJECTS, ...NEW_PROJECTS];
}

export default getAllProjects;
