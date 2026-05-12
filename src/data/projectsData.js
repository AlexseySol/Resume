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
    images: [],
    links: [],
    ua: {
      title: 'AI-аналіз дзвінків Binotel Dashboard',
      shortDesc: 'Автоматичний аналіз якості дзвінків менеджерів із збереженням у CRM та дашбордом KPI.',
      fullDesc: `Система автоматичного аналізу телефонних розмов на основі вебхука Binotel з повним циклом обробки: від отримання аудіо до оновлення CRM та формування звітів.

**Як це працює:**

**1. Отримання дзвінка:**
• Binotel надсилає вебхук після завершення розмови
• Система перевіряє тривалість — короткі дзвінки відфільтровуються
• Завантажується аудіозапис розмови

**2. Транскрибація та очищення:**
• Gemini 3.1 Flash Lite Preview перетворює аудіо на текст
• Автоматичне очищення тексту від артефактів
• Ідентифікація спікерів (менеджер / клієнт)

**3. Завантаження контексту клієнта:**
• Система шукає клієнта в базі Supabase
• Завантажується вся попередня історія взаємодій
• Контекст передається в AI-аналіз

**4. AI-аналіз розмови:**
• Визначення теми дзвінка
• Класифікація типу ліда
• Оцінка якості роботи менеджера
• Перевірка вирішення питання клієнта
• Використовується x-ai/grok-4.1-fast через OpenRouter

**5. Збереження та інтеграція:**
• Результати зберігаються в Supabase
• Bitrix24 CRM оновлюється автоматично
• Dashboard API отримує дані для звітів та KPI

**Що аналізується:**
✅ Тема та мета дзвінка
✅ Тип ліда (холодний / теплий / гарячий)
✅ Якість роботи менеджера (оцінка)
✅ Чи вирішено питання клієнта
✅ Дотримання скрипту продажів

**Результат:**
100% дзвінків аналізуються автоматично. Керівник бачить KPI кожного менеджера в реальному часі. Повна синхронізація з CRM без ручного введення.`,
    },
    en: {
      title: 'AI Call Analysis Dashboard (Binotel)',
      shortDesc: 'Automatic quality analysis of manager calls with CRM sync and live KPI dashboard.',
      fullDesc: `Automated phone call analysis system triggered by Binotel webhook — covers the full pipeline from audio retrieval to CRM update and KPI reporting.

**How it works:**

**1. Call reception:**
• Binotel sends a webhook after each call ends
• System checks call duration — short calls are filtered out
• Audio recording is downloaded for processing

**2. Transcription & cleanup:**
• Gemini 3.1 Flash Lite Preview converts audio to text
• Automatic text cleanup to remove noise and artifacts
• Speaker identification (manager vs. client)

**3. Loading client context:**
• System looks up the client in Supabase
• Full interaction history is retrieved
• Context is passed into the AI analysis step

**4. AI conversation analysis:**
• Call topic detection
• Lead type classification
• Manager quality scoring
• Issue resolution verification
• Powered by x-ai/grok-4.1-fast via OpenRouter

**5. Storage & integrations:**
• Results saved to Supabase
• Bitrix24 CRM is updated automatically
• Dashboard API receives data for reports and KPIs

**What is analyzed:**
✅ Call topic and purpose
✅ Lead type (cold / warm / hot)
✅ Manager quality score
✅ Whether the client's issue was resolved
✅ Sales script compliance

**Result:**
100% of calls analyzed automatically. Team leaders see each manager's KPIs in real time. Full CRM sync without manual data entry.`,
    },
  },

  {
    id: 'ai-interview-audit-dashboard',
    category: 'ai',
    icon: 'Users',
    technologies: ['n8n', 'ClickUp', 'PeopleForce', 'Supabase', 'OpenRouter', 'Grok 4.1 Fast', 'minimax-m2.5', 'Think Tool', 'Gmail'],
    images: [],
    links: [],
    ua: {
      title: 'AI-аудит співбесід Dashboard',
      shortDesc: 'Автоматичний аналіз якості проведення співбесід рекрутерами з дашбордом порівняння.',
      fullDesc: `Система аудиту співбесід на основі документів ClickUp з багатоблочним AI-аналізом, збереженням оцінок у Supabase та відправкою HTML-звітів через Gmail.

**Джерела даних:**

**Документи та контекст:**
• Записи співбесід завантажуються з ClickUp
• Контекст вакансії отримується з PeopleForce
• Повна інформація про вимоги до кандидата

**AI-аналіз за 6 блоками:**
• Структура проведення співбесіди
• Презентація компанії та вакансії
• Оцінка soft skills кандидата
• Перевірка hard skills (відповідність вакансії)
• Виявлення red flags у кандидата або рекрутера
• Відповідність скрипту проведення

**Технологія аналізу:**
• x-ai/grok-4.1-fast та minimax/minimax-m2.5 через OpenRouter
• Think Tool для глибокого структурованого аналізу
• Оцінки по кожному блоку зберігаються в Supabase

**Звітність:**
• Gmail надсилає HTML-звіти з детальними оцінками
• Дашборд показує порівняння менеджерів
• Фільтри за рекрутером, вакансією, датою
• AI-запити для пошуку по архіву співбесід

**Що перевіряється:**
✅ Дотримання структури та часу
✅ Якість питань щодо hard skills
✅ Оцінка soft skills кандидата
✅ Виявлення тривожних сигналів
✅ Відповідність стандартам компанії
❌ Пропуск обов'язкових блоків
❌ Неперевірені критичні компетенції

**Результат:**
Кожна співбесіда отримує об'єктивну оцінку без суб'єктивності. Керівник бачить слабкі місця кожного рекрутера та може оперативно скоригувати процес наймання.`,
    },
    en: {
      title: 'AI Interview Audit Dashboard',
      shortDesc: 'Automated quality audit of recruiter interviews with scoring, reports, and comparison dashboard.',
      fullDesc: `Interview audit system based on ClickUp documents with multi-block AI analysis, score storage in Supabase, and HTML report delivery via Gmail.

**Data sources:**

**Documents & context:**
• Interview records are pulled from ClickUp
• Vacancy context is fetched from PeopleForce
• Full candidate requirement details included

**AI analysis across 6 blocks:**
• Interview structure and flow
• Company and vacancy presentation
• Candidate soft skills assessment
• Hard skills verification (job fit)
• Red flag detection (candidate or recruiter)
• Script and standard compliance

**Analysis technology:**
• x-ai/grok-4.1-fast and minimax/minimax-m2.5 via OpenRouter
• Think Tool for deep structured reasoning
• Block scores saved to Supabase for tracking

**Reporting:**
• Gmail sends HTML reports with detailed breakdowns
• Dashboard shows manager comparison charts
• Filters by recruiter, vacancy, and date
• AI search queries over the interview archive

**What is checked:**
✅ Structure and time adherence
✅ Quality of hard skills questions
✅ Soft skills evaluation of candidates
✅ Red flag detection
✅ Compliance with company standards
❌ Skipping mandatory blocks
❌ Unchecked critical competencies

**Result:**
Every interview receives an objective score free of bias. Leadership sees each recruiter's weak spots and can adjust the hiring process in real time.`,
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
      fullDesc: `Автоматизована система моніторингу новин з RSS-фідів, дедуплікацією, AI-підготовкою та мультиканальним розповсюдженням через Telegram і Gmail.

**Як це працює:**

**1. Збір новин:**
• Регулярний моніторинг RSS-фідів
• Кастомний вебхук для ручного додавання джерел
• Перевірка дублікатів через n8n Data Tables та Supabase

**2. AI-обробка:**
• x-ai/grok-code-fast-1 / grok-4-fast через OpenRouter
• Perplexity Sonar для пошуку додаткового контексту
• Think Tool для структурованого резюмування
• Резюме пишеться виключно українською мовою

**3. Публікація в Telegram:**
• Форматування поста під Telegram Bot API
• Кнопка "Детально" — розширене пояснення прямо в чаті
• Кнопка "На пошту" — надсилає HTML email з повним розбором

**4. Email-розсилка:**
• Красивий HTML-лист через Gmail
• Повний аналіз новини з посиланнями та контекстом

**5. Ручний режим адміна:**
• Адміністратор може запустити ручний broadcast
• Вибір конкретної новини для розсилки

**Можливості системи:**
✅ Автоматичний моніторинг 24/7
✅ Дедуплікація новин
✅ AI-резюме українською
✅ Інтерактивні кнопки в Telegram
✅ HTML email за запитом підписника
✅ Ручний broadcast адміна

**Результат:**
Повністю автономна новинна система. Підписники отримують якісні стислі новини та можуть одним кліком отримати детальний розбір на пошту.`,
    },
    en: {
      title: 'AI News Bot (Telegram + Email)',
      shortDesc: 'Automated RSS monitoring, AI summaries in Ukrainian, Telegram publishing, and HTML email dispatch.',
      fullDesc: `Automated news monitoring system that collects RSS feeds, deduplicates stories, prepares AI summaries, and distributes them via Telegram and Gmail.

**How it works:**

**1. News collection:**
• Regular monitoring of configured RSS feeds
• Custom webhook for manual source additions
• Duplicate checking via n8n Data Tables and Supabase

**2. AI processing:**
• x-ai/grok-code-fast-1 / grok-4-fast via OpenRouter
• Perplexity Sonar for additional context enrichment
• Think Tool for structured summarization
• All summaries written in Ukrainian

**3. Telegram publishing:**
• Post formatted for Telegram Bot API
• "Детально" button — detailed explanation in-chat
• "На пошту" button — triggers a full HTML email breakdown

**4. Email delivery:**
• Rich HTML email sent via Gmail
• Full article analysis with links and context

**5. Admin manual broadcast:**
• Admin can trigger a manual broadcast at any time
• Select a specific story to push

**System capabilities:**
✅ 24/7 autonomous monitoring
✅ Deduplication of repeated stories
✅ AI summaries in Ukrainian
✅ Interactive Telegram buttons
✅ HTML email on subscriber request
✅ Admin manual broadcast

**Result:**
A fully autonomous news pipeline. Subscribers receive concise quality summaries and can get a detailed breakdown delivered to their inbox with a single tap.`,
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
      fullDesc: `Система автоматичного пошуку нових відео на YouTube-каналах, завантаження субтитрів SRT та глибокого AI-аналізу якості продажів по кожному етапу розмови.

**Як це працює:**

**1. Пошук нових відео:**
• YouTube API сканує вказані канали
• Supabase перевіряє, чи відео вже було оброблено
• Нові відео ставляться в чергу на аналіз

**2. Отримання транскрипту:**
• Завантаження субтитрів у форматі SRT
• Парсинг та очищення тексту від тайм-кодів
• Підготовка чистого транскрипту для аналізу

**3. AI-аналіз по блоках:**
• Gemini 3.1 Flash Lite / Pro Preview через OpenRouter
• Аналіз по кожному етапу продажу:
- Відкриття розмови та встановлення контакту
- Виявлення потреб клієнта
- Презентація рішення
- Робота із запереченнями
- Закриття угоди

**4. Формування звітів:**
• Google Docs: повний транскрипт + детальний звіт по кожному блоку
• Google Sheets: бальна оцінка по кожному етапу + загальний скор
• Telegram: сповіщення про завершення аналізу з посиланнями

**Що оцінюється:**
✅ Відкриття та вітання
✅ Виявлення потреб (SPIN / BANT)
✅ Якість презентації рішення
✅ Техніки роботи із запереченнями
✅ Закриття та наступний крок
❌ Пропуск ключових етапів
❌ Тиск без виявлення потреб

**Результат:**
Кожне навчальне відео автоматично перетворюється на структурований звіт. Менеджери з продажів отримують детальний розбір із оцінками прямо в Google Workspace.`,
    },
    en: {
      title: 'AI Sales Call Audit from YouTube',
      shortDesc: 'Automatic YouTube sales video analysis: SRT transcription, stage-by-stage scoring, Google Docs report.',
      fullDesc: `System that automatically finds new YouTube videos, downloads SRT captions, and performs deep AI analysis of sales quality across each conversation stage.

**How it works:**

**1. Finding new videos:**
• YouTube API scans specified channels for new uploads
• Supabase checks whether the video has already been processed
• New videos are queued for analysis

**2. Transcript retrieval:**
• SRT captions downloaded from YouTube
• Text parsed and cleaned of timestamps
• Clean transcript prepared for AI analysis

**3. AI block-by-block analysis:**
• Gemini 3.1 Flash Lite / Pro Preview via OpenRouter
• Analysis per each sales stage:
- Opening and rapport building
- Needs discovery
- Solution presentation
- Objection handling
- Deal closing

**4. Report generation:**
• Google Docs: full transcript + detailed block-level report
• Google Sheets: numeric scores per stage + overall rating
• Telegram: completion notification with direct links

**What is scored:**
✅ Opening and greeting quality
✅ Needs discovery (SPIN / BANT)
✅ Solution presentation quality
✅ Objection handling techniques
✅ Closing and next step
❌ Skipping key stages
❌ Pressure tactics without needs discovery

**Result:**
Every training video is automatically turned into a structured report. Sales managers receive a detailed scored breakdown delivered directly to Google Workspace.`,
    },
  },

  {
    id: 'creobot-ai-factory',
    category: 'ai',
    icon: 'Wand2',
    technologies: ['n8n', 'Telegram Bot API', 'Google Drive', 'xAI Grok 4.1 Reasoning', 'Gemini Image Preview', 'Supabase Vector Store', 'OpenAI Embeddings', 'HeyGen API'],
    images: [],
    links: [],
    ua: {
      title: 'CreoBot — AI-фабрика креативів',
      shortDesc: 'Telegram-бот для генерації рекламних зображень з AI-агентом та векторною базою знань бренду.',
      fullDesc: `Повноцінна AI-фабрика контенту в Telegram: реєстрація, адмін-апрув, завантаження референсів та генерація зображень з контекстом із векторної бази знань.

**Як це працює:**

**1. Реєстрація та доступ:**
• Користувач надсилає /start
• Автоматична реєстрація в системі
• Адміністратор отримує запит на підтвердження
• Після апруву — повний доступ до функцій

**2. Прийом завдання:**
• Користувач описує ідею текстом
• АБО надсилає фото-референс
• Вибір формату генерації (стиль, пропорції тощо)

**3. AI-агент з базою знань:**
• xAI Grok grok-4-1-fast-reasoning будує промпт
• Supabase Vector Store містить базу знань бренду
• OpenAI Embeddings для семантичного пошуку по базі
• Промпт збагачується контекстом із векторного сховища

**4. Генерація зображення:**
• Gemini gemini-3-pro-image-preview генерує результат
• Зображення зберігається в Google Drive
• HeyGen API для відео-генерації (опціонально)

**5. Результат та редагування:**
• Готове зображення повертається в Telegram
• Кнопки редагування: змінити стиль, промпт, формат
• Можливість зберегти або перегенерувати

**Можливості системи:**
✅ Реєстрація з адмін-апрувом
✅ Прийом ідей та фото-референсів
✅ AI-промптинг з урахуванням бренд-гайду
✅ Генерація зображень через Gemini
✅ Зберігання в Google Drive
✅ Інтерактивне редагування результату

**Результат:**
Команда отримує потужний AI-інструмент генерації контенту прямо в Telegram, що враховує фірмовий стиль та базу знань компанії.`,
    },
    en: {
      title: 'CreoBot — AI Creative Factory',
      shortDesc: 'Telegram bot for ad creative generation with AI agent, brand knowledge base, and admin approval flow.',
      fullDesc: `A full-featured AI content factory inside Telegram: registration, admin approval, reference uploads, and image generation enriched with a vector knowledge base.

**How it works:**

**1. Registration & access:**
• User sends /start command
• Automatic registration in the system
• Admin receives an approval request
• Full feature access granted after approval

**2. Task input:**
• User describes an idea in text
• OR sends a photo reference
• Selects generation format (style, aspect ratio, etc.)

**3. AI agent with knowledge base:**
• xAI Grok grok-4-1-fast-reasoning builds the prompt
• Supabase Vector Store holds the brand knowledge base
• OpenAI Embeddings for semantic search over the KB
• Prompt is enriched with vector store context

**4. Image generation:**
• Gemini gemini-3-pro-image-preview generates the result
• Image is saved to Google Drive
• HeyGen API for video generation (optional)

**5. Result & editing:**
• Generated image returned to Telegram
• Edit buttons: change style, prompt, or format
• Option to save or regenerate

**System capabilities:**
✅ Registration with admin approval flow
✅ Accepts text ideas and photo references
✅ AI prompting aligned with brand guidelines
✅ Gemini image generation
✅ Automatic storage in Google Drive
✅ Interactive result editing

**Result:**
The team gets a powerful AI content generation tool directly in Telegram that respects brand identity and leverages the company knowledge base.`,
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
      fullDesc: `Система збору та аналізу відгуків гостей готелів: автоматичне отримання списку виписаних гостей, обробка відповідей з форм та відображення на дашборді.

**Як це працює:**

**1. Отримання списку гостей:**
• Servio надає список гостей, що виписалися сьогодні
• Дані очищаються та нормалізуються
• Гості розбиваються по готелях

**2. Запис у Google Sheets:**
• Дані записуються у відповідний аркуш Google Sheets
• Кожен готель має окремий розділ
• Рядки підготовлені до оновлення після отримання відгуку

**3. Отримання відгуку:**
• Гість заповнює Tally Forms
• Gmail-тригер спрацьовує при надходженні відповіді
• Парсинг відповіді та визначення готелю

**4. Оновлення даних:**
• Відповідний рядок у Google Sheets оновлюється
• Оцінки та коментарі прив'язуються до гостя
• Dashboard API отримує оновлені дані

**Дашборд:**
• Звіти по кожному готелю
• Порівняння показників між об'єктами
• Динаміка задоволеності за часом
• AI-пошук по відгуках через Gemini Flash Lite
• Фільтри за датою, готелем, категорією оцінки

**Що відстежується:**
✅ Задоволеність сервісом
✅ Оцінка чистоти та комфорту
✅ Робота персоналу
✅ Загальний NPS готелю
✅ Порівняння між готелями

**Результат:**
Керівництво мережі готелів отримує об'єктивний зворотний зв'язок від кожного гостя з можливістю AI-запитів по відгуках.`,
    },
    en: {
      title: 'Guest Feedback Hotel Dashboard',
      shortDesc: 'Automated guest feedback collection after checkout with hotel comparison and AI-powered search.',
      fullDesc: `Hotel guest feedback system: automatic checkout guest list from Servio, Tally Forms response parsing, and dashboard reporting with AI search.

**How it works:**

**1. Guest list retrieval:**
• Servio provides today's checked-out guest list
• Data is cleaned and normalized
• Guests are split by hotel property

**2. Writing to Google Sheets:**
• Data written to the corresponding Google Sheets tab
• Each hotel has a dedicated section
• Rows prepared to be updated when feedback arrives

**3. Feedback collection:**
• Guest fills in a Tally Form
• Gmail trigger fires upon receiving a response
• Response parsed and matched to the correct hotel

**4. Data update:**
• Corresponding row in Google Sheets is updated
• Scores and comments linked to the guest record
• Dashboard API receives updated data

**Dashboard features:**
• Reports per hotel property
• Cross-property performance comparison
• Satisfaction trends over time
• AI search over feedback via Gemini Flash Lite
• Filters by date, hotel, and rating category

**What is tracked:**
✅ Service satisfaction
✅ Cleanliness and comfort ratings
✅ Staff performance
✅ Overall hotel NPS
✅ Cross-property benchmarking

**Result:**
Hotel chain management gets objective feedback from every guest with deep analysis and AI-powered cross-property search.`,
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
      fullDesc: `Повноцінна система обліку товарів готелю в Telegram: прийом накладних (фото/PDF/Word), розпізнавання через Gemini Vision, нечіткий пошук по складу та автоматичне оновлення залишків.

**Як це працює:**

**1. Telegram-меню:**
• Зручне меню: Додати / Переглянути / Списати
• Реєстрація користувачів з різними ролями
• MongoDB/Postgres Chat Memory для контексту розмови

**2. Прийом документів:**
• Користувач надсилає фото накладної
• АБО PDF / Word-файл
• Система визначає тип документа автоматично

**3. Розпізнавання Gemini Vision:**
• Gemini Vision зчитує товари, кількість та ціни
• Підтримка рукописних та друкованих накладних
• Структуровані дані передаються далі

**4. Нечіткий пошук по складу:**
• Fuzzy matching назв товарів у Google Sheets
• Автоматичне зіставлення навіть при орфографічних помилках
• Крок підтвердження перед оновленням

**5. Оновлення залишків:**
• Google Sheets оновлюється після підтвердження
• Повна історія операцій логується в Supabase
• Підтримка операцій списання

**AI-асистент:**
• xAI grok-4.20 для відповідей на запити
• Think Tool для складних питань
• Відповіді на питання про залишки, статистику, постачальників

**Статистика та звіти:**
✅ Поточні залишки по кожній позиції
✅ Динаміка витрат за період
✅ Найбільш вживані товари
✅ Повна історія надходжень та списань
✅ Порівняння по постачальниках

**Результат:**
Склад готелю ведеться повністю через Telegram. Персонал не потребує навчання — достатньо надіслати фото накладної.`,
    },
    en: {
      title: 'Hotel Inventory Telegram Bot',
      shortDesc: 'Smart Telegram bot for hotel inventory management with invoice recognition and stock statistics.',
      fullDesc: `Full-featured hotel inventory system inside Telegram: invoice intake (photo/PDF/Word), Gemini Vision recognition, fuzzy product search, and automatic stock updates.

**How it works:**

**1. Telegram menu:**
• Convenient menu: Add / View / Write-off
• User registration with role-based access
• MongoDB/Postgres Chat Memory for conversation context

**2. Document intake:**
• User sends a photo of an invoice
• OR uploads a PDF / Word document
• System automatically detects the document type

**3. Gemini Vision recognition:**
• Gemini Vision reads products, quantities, and prices
• Supports both handwritten and printed invoices
• Structured data passed to the next step

**4. Fuzzy product search:**
• Fuzzy matching of product names against Google Sheets
• Automatic matching even with spelling variations
• Confirmation step before any update is applied

**5. Stock update:**
• Google Sheets updated after user confirmation
• Full operation history logged to Supabase
• Write-off operations supported

**AI assistant:**
• xAI grok-4.20 for answering inventory queries
• Think Tool for complex multi-step reasoning
• Answers about stock levels, stats, and suppliers

**Statistics & reports:**
✅ Current stock levels per item
✅ Spending dynamics over time
✅ Most frequently used products
✅ Full intake and write-off history
✅ Supplier comparison

**Result:**
Hotel inventory is managed entirely through Telegram. Staff need no special training — just send a photo of the invoice.`,
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
      fullDesc: `RAG-система (Retrieval-Augmented Generation) для автоматичного перетворення документів із Google Drive на векторну базу знань з семантичним пошуком та Q&A.

**Як це працює:**

**1. Сканування Google Drive:**
• Автоматичний обхід вказаної папки
• Визначення типу кожного файлу
• Підтримка: PDF, DOCX, XLSX, TXT, Google Docs, Google Sheets

**2. Конвертація документів:**
• Word → Google Docs (для збереження форматування)
• Excel → Google Sheets
• Витяг тексту з усіх форматів

**3. AI-семантичне чанкування:**
• Gemini 3.1 Flash Lite аналізує структуру документа
• FAQ: кожна пара Питання+Відповідь — окремий чанк
• Політики: одне правило / пункт — один чанк
• Кожен чанк отримує метадані (джерело, розділ, тип)

**4. Створення ембедингів:**
• OpenAI text-embedding-3-large для векторизації
• Кожен чанк перетворюється на вектор
• Зберігання у Supabase Vector Store

**5. Q&A функція:**
• Пошуковий запит векторизується
• Supabase знаходить найрелевантніші чанки
• Grok 4.20 / Gemini формулює відповідь на основі знайденого контексту

**Підтримувані формати:**
✅ PDF документи
✅ DOCX / Word файли
✅ XLSX / Excel таблиці
✅ TXT текстові файли
✅ Google Docs / Sheets
❌ Зображення без тексту (не підтримується)

**Результат:**
Будь-яка папка Google Drive перетворюється на розумну базу знань. AI відповідає на питання точно та з посиланням на джерело.`,
    },
    en: {
      title: 'RAG Knowledge Base Q&A',
      shortDesc: 'Automatic vector knowledge base from Google Drive files with AI semantic search and Q&A.',
      fullDesc: `RAG (Retrieval-Augmented Generation) system that automatically converts Google Drive documents into a searchable vector knowledge base for precise Q&A.

**How it works:**

**1. Google Drive scan:**
• Automatic traversal of the specified folder
• File type detection for each document
• Supported: PDF, DOCX, XLSX, TXT, Google Docs, Google Sheets

**2. Document conversion:**
• Word → Google Docs (to preserve formatting)
• Excel → Google Sheets
• Text extraction from all supported formats

**3. AI semantic chunking:**
• Gemini 3.1 Flash Lite analyzes document structure
• FAQ: each Q+A pair becomes a single chunk
• Policies: one rule / clause per chunk
• Each chunk receives metadata (source, section, type)

**4. Embedding creation:**
• OpenAI text-embedding-3-large for vectorization
• Each chunk converted to a dense vector
• Stored in Supabase Vector Store

**5. Q&A function:**
• User query is vectorized
• Supabase finds the most relevant chunks
• Grok 4.20 / Gemini formulates an answer grounded in retrieved context

**Supported formats:**
✅ PDF documents
✅ DOCX / Word files
✅ XLSX / Excel spreadsheets
✅ TXT plain text files
✅ Google Docs / Sheets
❌ Image-only files (not supported)

**Result:**
Any Google Drive folder becomes a smart knowledge base. AI answers questions accurately with source references, grounded entirely in your own documents.`,
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
      fullDesc: `Система обробки вхідних SMS без AI-моделей: парсинг фінансових повідомлень, збереження в базу, Telegram-бот для пошуку та видачі SMS з детальною звітністю.

**Як це працює:**

**1. Прийом SMS:**
• SMS-провайдер надсилає вебхук при кожному новому повідомленні
• JavaScript-парсер форматує та нормалізує дані
• Перевірка номера отримувача для маршрутизації

**2. Класифікація повідомлень:**
• Розподіл на AUTH (авторизаційні) та фінансові SMS
• Фінансові SMS піддаються детальному парсингу

**3. Парсинг фінансових SMS:**
• Витяг суми та валюти
• Останні 4 цифри картки
• Дата та час транзакції
• Тип операції (надходження / списання)

**4. Збереження в Supabase:**
• Структуровані дані зберігаються в базу
• Статус SMS: нові / видані / використані
• Повна історія всіх операцій

**5. Telegram-бот (реєстрація та доступ):**
• Нові користувачі проходять реєстрацію
• Адмін підтверджує або відхиляє доступ
• Ролева модель доступу

**6. Пошук та видача SMS:**
• Вибір банку, валюти, суми
• Система знаходить відповідне SMS в базі
• SMS видається та позначається як використане
• Захист від повторної видачі

**7. Звітність:**
• Google Sheets для оперативних звітів
• Автоматичний XLSX-експорт
• Фільтри за банком, валютою, датою, статусом

**Можливості без AI:**
✅ Повністю детерміністична логіка
✅ Надійний JavaScript-парсер
✅ Захист від дублювання
✅ Адмін-апрув нових користувачів
✅ XLSX-звіти за будь-який період
✅ Позначення SMS як використаних

**Результат:**
Надійна система обліку SMS-транзакцій без AI. Всі операції детерміновані, прозорі та аудируємі.`,
    },
    en: {
      title: 'SMS Search & Control',
      shortDesc: 'Financial SMS accounting with a Telegram bot for search, issuance, and XLSX reporting. No AI.',
      fullDesc: `Full-featured incoming SMS processing system with no AI models: financial message parsing, database storage, Telegram bot for search and issuance, and detailed XLSX reporting.

**How it works:**

**1. SMS intake:**
• SMS provider sends a webhook for each new message
• JavaScript parser formats and normalizes the data
• Recipient number checked for routing

**2. Message classification:**
• Split into AUTH (authentication) and financial SMS
• Financial SMS undergo detailed parsing

**3. Financial SMS parsing:**
• Amount and currency extraction
• Last 4 digits of the card
• Transaction date and time
• Operation type (incoming / outgoing)

**4. Storage in Supabase:**
• Structured data saved to the database
• SMS status: new / issued / used
• Full history of all operations

**5. Telegram bot (registration & access):**
• New users go through a registration flow
• Admin approves or rejects access requests
• Role-based access model

**6. SMS search & issuance:**
• User selects bank, currency, and amount
• System finds the matching SMS in the database
• SMS is issued and marked as used
• Protection against duplicate issuance

**7. Reporting:**
• Google Sheets for operational reports
• Automatic XLSX export on demand
• Filters by bank, currency, date, and status

**Capabilities without AI:**
✅ Fully deterministic logic
✅ Reliable JavaScript parser
✅ Duplicate protection
✅ Admin approval for new users
✅ XLSX reports for any period
✅ SMS marked as used after issuance

**Result:**
A reliable SMS transaction accounting system with zero AI dependency. All operations are deterministic, transparent, and fully auditable.`,
    },
  },
];

export function getAllProjects() {
  return [...EXISTING_PROJECTS, ...NEW_PROJECTS];
}

export default getAllProjects;
