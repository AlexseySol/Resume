import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Folder, Bot, TrendingUp, MessageCircle, FileText, Calendar, Sparkles, Phone } from 'lucide-react';
import ProjectModal from './ProjectModal';
import * as S from './Projects.styles';

const Projects = () => {
  const { i18n } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = i18n.language === 'ua'
    ? [
        {
          id: 1,
          icon: <Bot size={24} />,
          title: 'AI-контент-бот на основі новин і Google Drive',
          shortDesc: 'Автоматична генерація 3-4 постів на тиждень з актуальних новин та матеріалів',
          fullDesc: `Розроблена система, яка щотижня створює 3–4 AI-пости на основі актуальних новин та матеріалів з Google Drive.

**Як це працює:**

**Збір даних:**
• Автоматичний збір актуальних новин з BBC, Reuters, NatGeo
• Завантаження фото та відео з Google Drive
• Аналіз трендових тем та подій

**Генерація контенту:**
• ШІ аналізує зібрані матеріали
• Підбір найбільш цікавих тем для аудиторії
• Автоматична генерація постів різних форматів
• Вибір оптимального візуального контенту

**Формати публікацій:**
• Історії для Instagram/Facebook
• Опитування для залучення аудиторії
• Інфографіка з ключовими даними
• Стандартні пости з описом

**Управління:**
• Кнопки "Обрати" - вибір найкращого варіанту
• "Змінити" - редагування згенерованого контенту
• "Запланувати" - вибір часу публікації

**Інтеграція:**
Повна сумісність з Instagram, LinkedIn, Facebook.
Можливість адаптації контенту під кожну платформу.

**Результат:**
Повна автоматизація створення контенту. Економія 10-15 годин на тиждень.`,
          technologies: ['n8n', 'GPT-4 Turbo', 'Google Drive API', 'News API', 'RSS Parsers', 'Automation'],
          category: 'automation',
          images: [],
          links: []
        },
        {
          id: 2,
          icon: <TrendingUp size={24} />,
          title: 'Парсер і перевірка РРЦ цін з Excel',
          shortDesc: 'Автоматизований парсинг та контроль цін на маркетплейсах',
          fullDesc: `Розробив автоматизований парсер для моніторингу цін та виявлення порушень РРЦ (рекомендованої роздрібної ціни).

**Як це працює:**

**1. Завантаження даних:**
• Користувач завантажує Excel-файл з товарами та РРЦ
• Система автоматично зчитує всі позиції

**2. Автоматичний парсинг:**
• Puppeteer відкриває вказаний сайт
• Автоматичний пошук кожного товару
• Збір актуальних цін та інформації
• Робота з динамічним завантаженням сторінок

**3. Аналіз та порівняння:**
• Порівняння поточних цін з РРЦ
• Виявлення порушень (ціна нижче/вище РРЦ)
• Розрахунок відсоткових відхилень
• Категоризація рівня порушень

**4. Візуалізація результатів:**
• Показ результатів на екрані в реальному часі
• Кольорове виділення порушень
• Статистика по загальній кількості товарів

**5. Експорт звіту:**
• Автоматичне формування Excel-звіту
• Детальна інформація по кожному товару
• Графіки та статистика
• Готовий до відправки керівництву

**Технічна реалізація:**
• Frontend на React для зручного інтерфейсу
• Backend на Node.js для обробки запитів
• Puppeteer для парсингу сайтів
• ExcelJS для роботи з таблицями
• n8n для оркестрації процесу

**Застосування:**
Ідеально для моніторингу конкурентів, контролю цін на маркетплейсах (Rozetka, Prom.ua та ін.), виявлення порушень дилерами.`,
          technologies: ['Puppeteer', 'Node.js', 'ExcelJS', 'React', 'n8n'],
          category: 'automation',
          images: [],
          links: []
        },
        {
          id: 3,
          icon: <MessageCircle size={24} />,
          title: 'ШІ-агент у Instagram, Facebook, TikTok, Telegram',
          shortDesc: 'Розумний агент для автоматизації продажів 24/7',
          fullDesc: `ШІ-агент прямо в Instagram, Facebook, TikTok та Telegram, який доповнює або навіть заміняє менеджера.

**Як це працює (технічно):**

**1. Отримання повідомлення:**
• Клієнт пише в Instagram/Facebook/TikTok
• Повідомлення автоматично падає в таблицю Supabase

**2. Обробка повідомлень:**
• Кожні 50 секунд бот забирає всі нові повідомлення з Supabase
• Об'єднує повідомлення по користувачу
• Автоматично визначає мову клієнта

**3. ШІ-аналіз через Grok (xAI):**
• Grok пам'ятає всю історію переписки (Redis)
• Векторний пошук товарів у базі Supabase
• Відповідає строго за заданими правилами
• Підбір найбільш відповідних товарів

**4. Формування відповіді:**
• Створення красивої відповіді
• Додавання карточок товарів з фото
• Формування в потрібному форматі

**5. Відправка через ManyChat:**
• Готова відповідь летить клієнту
• Підтримка мультимедіа (фото, відео)
• Інтерактивні кнопки для вибору

**6. Оформлення замовлення:**
• Коли клієнт обрав та підтвердив товар
• Замовлення миттєво прилітає:
  - Менеджеру в Telegram-чат
  - У Google-таблицю з повною деталізацією

**7. Очищення даних:**
• Повідомлення з Supabase видаляються
• Тільки після успішної відправки відповіді
• Гарантія обробки всіх повідомлень

**Можливості бота:**
✅ Приймає та обробляє повідомлення
✅ Консультує по товарах
✅ Показує фото та характеристики
✅ Оформлює замовлення
✅ Робить допродаж
✅ Передає дані в CRM або Google Sheets
✅ Кличе менеджера, якщо не справляється

**Технічний стек:**
• Grok (xAI) для ШІ
• Redis для історії чатів
• Supabase (векторна БД) для товарів
• ManyChat для відправки
• Instagram/Facebook/TikTok API
• Telegram Bot API
• Google Sheets API

**Результат:**
Робота 24/7 без вихідних. Миттєві відповіді клієнтам. Збільшення конверсії на 40-60%.`,
          technologies: ['n8n', 'Grok (xAI)', 'Supabase', 'Redis', 'ManyChat', 'Instagram API', 'Telegram Bot API', 'Google Sheets API'],
          category: 'ai',
          images: [
            '/images/ШІ БОТ.jpg',
            '/images/ШІ БОТ1.jpg',
            '/images/ШІ БОТ2.jpg'
          ],
          links: [
            { title: 'Tory магазин', url: 'https://tory.ae/' },
            { title: 'DLYTEBE магазин', url: 'https://dlyatebeperfume.com.ua/' }
          ]
        },
        {
          id: 4,
          icon: <Sparkles size={24} />,
          title: 'Full-stack платформа аналізу дзвінків з ШІ',
          shortDesc: 'AI-платформа для аналізу якості дзвінків менеджерів',
          fullDesc: `Повноцінна AI-платформа аналізу дзвінків з веб-інтерфейсом для менеджерів і керівників.

**Що зроблено:**

**1. Транскрибація аудіо:**
• Автоматичне перетворення аудіо в текст
• Використання Whisper, AssemblyAI, Gemini
• Збереження транскриптів у PostgreSQL
• Підтримка різних мов

**2. Класифікація дзвінків:**
• Технічний дзвінок vs презентація товару
• Визначення типу звернення
• Категоризація за темами

**3. Виявлення тригерних зон:**
• Які товари найчастіше пропонує менеджер
• Дотримання скрипту продажів
• Робота із запереченнями клієнтів
• Якість презентації

**4. Метрики якості:**
• Автоматичний підрахунок KPI
• Оцінка ефективності менеджера
• Підтверджена точність ШІ-оцінювання — 85%

**Інтерфейс менеджера:**
• Перегляд транскриптів дзвінків
• Висновки ШІ по кожному дзвінку
• Чат з ШІ по конкретному дзвінку (контекст вже завантажений)
• Рекомендації щодо покращення

**Інтерфейс керівника:**
• Фільтри по команді/типам дзвінків
• Експорт зведених звітів за період
• Загальна статистика по команді
• Виявлення слабких місць

**Інтеграція з CRM:**
• Дзвінки автоматично надходять за webhook/API
• Повний цикл обробки без участі людини
• Синхронізація з базою клієнтів

**Збереження історії:**
• Всі транскрипти в PostgreSQL
• Всі аналізи та оцінки ШІ
• Історія діалогів з ШІ
• Можливість повторного аналізу

**Технічний стек:**
• React (UI)
• Node.js + n8n (бекенд)
• PostgreSQL (БД)
• Whisper/AssemblyAI/Gemini (транскрибація та аналіз)
• OpenAI GPT-4 (додатковий аналіз)

**Результат:**
100% дзвінків автоматично аналізуються. Менеджери отримують точні підказки. Керівники бачать зрозумілу аналітику та звіти.`,
          technologies: ['React', 'Node.js', 'n8n', 'PostgreSQL', 'Whisper AI', 'AssemblyAI', 'Gemini 2.0', 'GPT-4'],
          category: 'fullstack',
          images: [
            '/images/Анализ звонков платформа1.jpg',
            '/images/Анализ звонков платформа2.png',
            '/images/Анализ Звонков платформа3.png'
          ],
          links: []
        },
        {
          id: 5,
          icon: <Phone size={24} />,
          title: 'Аналіз дзвінків для готелів та ресторанів',
          shortDesc: 'Автоматичний контроль якості телефонних розмов',
          fullDesc: `Система автоматичного аналізу дзвінків для готелів та ресторанів з миттєвим виявленням порушень.

**Як це працює:**

**1. Отримання дзвінка:**
• Людина дзвонить у готель або ресторан
• Розмова автоматично записується

**2. Автоматична обробка:**
• Як тільки дзвінок завершився
• Система автоматично забирає аудіозапись
• Процес запускається миттєво

**3. Транскрибація:**
• Gemini прослуховує запись
• Перетворює її на точний текст
• Зберігає транскрипцію

**4. ШІ-аналіз контексту:**
• Визначає, в який саме готель/ресторан дзвонили
• Перевіряє, чи це новий клієнт
• Якщо клієнт вже дзвонив - завантажує всю історію
• Визначає мету дзвінка (питання чи бронювання)

**5. Аналіз по стандартам:**
ШІ перевіряє розмову за строгими критеріями:

**Обов'язкові пункти:**
✅ Чи представився менеджер
✅ Чи зібрав всі необхідні дані
✅ Чи був ввічливим з клієнтом
✅ Чи дотримувався скрипту

**Заборонені дії:**
❌ Брехня або неправдива інформація
❌ Хамство або грубість
❌ Невиконання обіцянок з минулого дзвінка

**6. Фільтрація та збереження:**
• Дані фільтруються за типом порушення
• Серйозні помилки записуються в Google Sheets
• Паралельно зберігаються в БД
• Формується база знань для ШІ-бота

**7. Миттєве сповіщення (15-30 секунд):**

**Якщо все відмінно:**
• Нічого не відбувається
• Тиша - це добре

**Якщо були порушення:**
• Миттєво прилітає карточка в Google-таблицю
• Керівник отримує:
  - Опис порушення
  - Ім'я менеджера
  - Посилання на запис
  - Точний час дзвінка

**8. ШІ-бот на базі даних:**
• Створений окремий ШІ-бот
• Працює на базі всіх зібраних даних
• Може відповідати на питання про помилки
• Надає рекомендації менеджерам

**Технічний стек:**
• Gemini 2.0 Flash (транскрибація та аналіз)
• n8n (автоматизація процесу)
• PostgreSQL (збереження даних)
• Google Sheets API (звіти)
• Telegram Bot API (сповіщення)

**Результат:**
Повна автоматизація контролю якості. 24/7 без жодного кліка. Менеджер бачить тільки проблемні дзвінки - хороші просто зникають у тиші.`,
          technologies: ['Gemini 2.0 Flash', 'n8n', 'PostgreSQL', 'Google Sheets API', 'Telegram Bot API'],
          category: 'ai',
          images: [],
          links: []
        },
        {
          id: 6,
          icon: <FileText size={24} />,
          title: 'Автозаповнювач документів',
          shortDesc: 'Автоматизація заповнення документів через Telegram',
          fullDesc: `Розумна система автоматичного заповнення документів у режимі покрокового збору інформації.

**Для чого створена:**
Замінити ручне заповнення документів та прискорити роботу з даними в 10 разів.

**Як працює система:**

**1. Відправка даних:**
• Користувач надсилає фото документа в Telegram
• АБО вводить дані вручну текстом
• Бот приймає інформацію

**2. Розпізнавання:**
• ШІ зчитує текст з фото (OCR)
• Розпізнає поля документа
• Витягує необхідну інформацію

**3. Перевірка даних:**
• Система перевіряє коректність
• Валідація форматів (дати, номери, тощо)
• Запит недостатніх даних у користувача

**4. Автозаповнення:**
• Підставляє дані у потрібні поля шаблону
• Використовує попередньо створений шаблон
• Форматує згідно з вимогами

**5. Формування документа:**
• Генерує готовий документ (PDF, DOCX)
• Зберігає форматування
• Додає необхідні підписи/печатки

**6. Повернення результату:**
• Файл повертається в Telegram
• Користувач отримує готовий документ
• Можливість редагування при потребі

**7. Збереження копії:**
• Паралельно зберігає копію в Google Drive
• Організована структура папок
• Легкий доступ до історії

**Підтримувані формати:**
• PDF, DOCX, Excel
• Фото документів (JPG, PNG)
• Текстовий ввід

**Технічний стек:**
• GPT-4 Vision (розпізнавання тексту)
• Telegram Bot API
• Google Docs API
• Google Drive API
• n8n (автоматизація)
• PDF/DOCX генератори

**Результат:**
Економія 90% часу на заповнення документів. Повна автоматизація рутинних операцій. Нуль помилок.`,
          technologies: ['GPT-4 Vision', 'Telegram Bot API', 'Google Docs API', 'Google Drive API', 'n8n', 'PDF Generation'],
          category: 'automation',
          images: [
            '/images/документі.png',
            '/images/документ1.png'
          ],
          links: [
            { title: 'Відео-демонстрація', url: 'https://drive.google.com/drive/my-drive' }
          ]
        },
        {
          id: 7,
          icon: <Calendar size={24} />,
          title: 'Збір новин та автопостінг',
          shortDesc: 'Автоматична агрегація новин та публікація у соцмережах',
          fullDesc: `Комплексна система для автоматичного збору новин та їх публікації в соціальних мережах.

**Збір новин:**

**Джерела:**
• RSS-фіди провідних видань
• Парсинг новинних сайтів
• API новинних агентств
• Тематичні блоги та канали

**Фільтрація:**
• Відбір за ключовими словами
• Фільтр по темах та категоріях
• Виключення дублікатів
• Визначення актуальності

**Обробка:**
• Аналіз тональності новин
• Визначення найважливіших
• Категоризація контенту
• Переклад при необхідності

**Система автопостінгу:**

**Планування:**
• Автоматичне складання розкладу на тиждень/місяць
• Врахування оптимального часу публікації
• Рівномірний розподіл контенту

**Адаптація:**
• Підготовка контенту під кожну платформу
• Instagram: квадратні зображення + хештеги
• Facebook: довші тексти + посилання
• LinkedIn: професійний стиль
• Twitter/X: короткі форми

**Публікація:**
• Автоматична публікація в Instagram
• Facebook сторінки та групи
• LinkedIn профіль та компанії
• Twitter/X акаунти

**Додаткові функції:**
• Автоматичне додавання хештегів
• Згадки релевантних акаунтів
• Прикріплення медіа-файлів
• Геолокація (де потрібно)

**Аналітика:**
• Відстеження охоплення
• Метрики залученості (лайки, коментарі, репости)
• Звіти по ефективності публікацій
• Рекомендації щодо покращення

**Технічна реалізація:**
• n8n для оркестрації всіх процесів
• RSS Parsers для збору новин
• Puppeteer для парсингу сайтів
• Social Media APIs для публікації
• PostgreSQL для збереження аналітики
• GPT-4 для адаптації контенту

**Результат:**
Повна автоматизація контент-маркетингу. Економія 20+ годин на тиждень. Постійна присутність у соцмережах.`,
          technologies: ['n8n', 'RSS Parsers', 'Puppeteer', 'Social Media APIs', 'PostgreSQL', 'GPT-4', 'Analytics'],
          category: 'automation',
          images: [
            '/images/ИИ новости.png'
          ],
          links: [
            { title: 'Telegram канал з новинами', url: 'https://t.me/V3vj2KRLbT5iMDU6' }
          ]
        }
      ]
    : [
        {
          id: 1,
          icon: <Bot size={24} />,
          title: 'AI Content Bot Based on News & Google Drive',
          shortDesc: 'Automatic generation of 3-4 posts weekly from news and materials',
          fullDesc: `Developed a system that creates 3-4 AI posts weekly based on trending news and Google Drive materials.

**How it works:**

**Data Collection:**
• Automatic collection of trending news from BBC, Reuters, NatGeo
• Loading photos and videos from Google Drive
• Analysis of trending topics and events

**Content Generation:**
• AI analyzes collected materials
• Selection of most interesting topics for audience
• Automatic generation of posts in various formats
• Selection of optimal visual content

**Publication Formats:**
• Stories for Instagram/Facebook
• Polls for audience engagement
• Infographics with key data
• Standard posts with descriptions

**Management:**
• "Select" buttons - choose the best option
• "Change" - edit generated content
• "Schedule" - select publication time

**Integration:**
Full compatibility with Instagram, LinkedIn, Facebook.
Ability to adapt content for each platform.

**Result:**
Complete automation of content creation. Saves 10-15 hours per week.`,
          technologies: ['n8n', 'GPT-4 Turbo', 'Google Drive API', 'News API', 'RSS Parsers', 'Automation'],
          category: 'automation',
          images: [],
          links: []
        },
        {
          id: 2,
          icon: <TrendingUp size={24} />,
          title: 'RRP Price Parser & Checker from Excel',
          shortDesc: 'Automated parsing and price control on marketplaces',
          fullDesc: `Developed an automated parser for price monitoring and RRP (recommended retail price) violations detection.

**How it works:**

**1. Data Upload:**
• User uploads Excel file with products and RRP
• System automatically reads all items

**2. Automatic Parsing:**
• Puppeteer opens specified website
• Automatic search for each product
• Collection of current prices and information
• Works with dynamic page loading

**3. Analysis and Comparison:**
• Comparing current prices with RRP
• Identifying violations (price below/above RRP)
• Calculating percentage deviations
• Categorization of violation levels

**4. Results Visualization:**
• Display results on screen in real-time
• Color highlighting of violations
• Statistics on total product count

**5. Report Export:**
• Automatic Excel report generation
• Detailed information for each product
• Charts and statistics
• Ready to send to management

**Technical Implementation:**
• Frontend on React for convenient interface
• Backend on Node.js for request processing
• Puppeteer for website parsing
• ExcelJS for table operations
• n8n for process orchestration

**Application:**
Perfect for competitor monitoring, price control on marketplaces (Rozetka, Prom.ua, etc.), dealer violation detection.`,
          technologies: ['Puppeteer', 'Node.js', 'ExcelJS', 'React', 'n8n'],
          category: 'automation',
          images: [],
          links: []
        },
        {
          id: 3,
          icon: <MessageCircle size={24} />,
          title: 'AI Agent for Instagram, Facebook, TikTok, Telegram',
          shortDesc: 'Smart agent for 24/7 sales automation',
          fullDesc: `AI agent directly in Instagram, Facebook, TikTok, and Telegram that complements or even replaces a manager.

**How it works (technically):**

**1. Receiving Message:**
• Client writes in Instagram/Facebook/TikTok
• Message automatically falls into Supabase table

**2. Message Processing:**
• Every 50 seconds bot takes all new messages from Supabase
• Combines messages by user
• Automatically determines client language

**3. AI Analysis via Grok (xAI):**
• Grok remembers entire conversation history (Redis)
• Vector search for products in Supabase
• Responds strictly according to rules
• Selection of most relevant products

**4. Response Formation:**
• Creating beautiful response
• Adding product cards with photos
• Formatting in required format

**5. Sending via ManyChat:**
• Ready response goes to client
• Multimedia support (photos, videos)
• Interactive buttons for selection

**6. Order Processing:**
• When client selected and confirmed
• Order instantly arrives:
  - To manager in Telegram chat
  - To Google Sheet with full details

**7. Data Cleanup:**
• Messages from Supabase deleted
• Only after successful response sending
• Guarantee of processing all messages

**Bot Capabilities:**
✅ Receives and processes messages
✅ Consults on products
✅ Shows photos and specifications
✅ Places orders
✅ Does upselling
✅ Transfers data to CRM or Google Sheets
✅ Calls manager if can't handle

**Tech Stack:**
• Grok (xAI) for AI
• Redis for chat history
• Supabase (vector DB) for products
• ManyChat for sending
• Instagram/Facebook/TikTok API
• Telegram Bot API
• Google Sheets API

**Result:**
24/7 operation without weekends. Instant client responses. 40-60% conversion increase.`,
          technologies: ['n8n', 'Grok (xAI)', 'Supabase', 'Redis', 'ManyChat', 'Instagram API', 'Telegram Bot API', 'Google Sheets API'],
          category: 'ai',
          images: [
            '/images/ШІ БОТ.jpg',
            '/images/ШІ БОТ1.jpg',
            '/images/ШІ БОТ2.jpg'
          ],
          links: [
            { title: 'Tory store', url: 'https://tory.ae/' },
            { title: 'DLYTEBE store', url: 'https://dlyatebeperfume.com.ua/' }
          ]
        },
        {
          id: 4,
          icon: <Sparkles size={24} />,
          title: 'Full-stack AI Call Analysis Platform',
          shortDesc: 'AI platform for analyzing manager call quality',
          fullDesc: `Complete AI call analysis platform with web interface for managers and executives.

**What's done:**

**1. Audio Transcription:**
• Automatic audio to text conversion
• Using Whisper, AssemblyAI, Gemini
• Saving transcripts to PostgreSQL
• Multi-language support

**2. Call Classification:**
• Technical call vs product presentation
• Determining request type
• Categorization by topics

**3. Trigger Zone Detection:**
• Which products manager offers most
• Sales script adherence
• Client objection handling
• Presentation quality

**4. Quality Metrics:**
• Automatic KPI calculation
• Manager effectiveness assessment
• Confirmed AI evaluation accuracy — 85%

**Manager Interface:**
• View call transcripts
• AI conclusions for each call
• Chat with AI about specific call (context preloaded)
• Improvement recommendations

**Executive Interface:**
• Filters by team/call types
• Export summary reports for period
• Overall team statistics
• Weakness identification

**CRM Integration:**
• Calls automatically arrive via webhook/API
• Full processing cycle without human involvement
• Synchronization with client database

**History Storage:**
• All transcripts in PostgreSQL
• All AI analyses and assessments
• AI dialogue history
• Re-analysis capability

**Tech Stack:**
• React (UI)
• Node.js + n8n (backend)
• PostgreSQL (DB)
• Whisper/AssemblyAI/Gemini (transcription and analysis)
• OpenAI GPT-4 (additional analysis)

**Result:**
100% of calls automatically analyzed. Managers get accurate hints. Executives see clear analytics and reports.`,
          technologies: ['React', 'Node.js', 'n8n', 'PostgreSQL', 'Whisper AI', 'AssemblyAI', 'Gemini 2.0', 'GPT-4'],
          category: 'fullstack',
          images: [
            '/images/Анализ звонков платформа1.jpg',
            '/images/Анализ звонков платформа2.png',
            '/images/Анализ Звонков платформа3.png'
          ],
          links: []
        },
        {
          id: 5,
          icon: <Phone size={24} />,
          title: 'Call Analysis for Hotels and Restaurants',
          shortDesc: 'Automatic quality control of phone conversations',
          fullDesc: `Automatic call analysis system for hotels and restaurants with instant violation detection.

**How it works:**

**1. Receiving Call:**
• Person calls hotel or restaurant
• Conversation automatically recorded

**2. Automatic Processing:**
• As soon as call ends
• System automatically takes audio recording
• Process starts instantly

**3. Transcription:**
• Gemini listens to recording
• Converts it to accurate text
• Saves transcription

**4. AI Context Analysis:**
• Determines which hotel/restaurant was called
• Checks if this is new client
• If client called before - loads entire history
• Determines call purpose (question or booking)

**5. Standards Analysis:**
AI checks conversation by strict criteria:

**Required Points:**
✅ Did manager introduce themselves
✅ Did collect all necessary data
✅ Was polite with client
✅ Followed script

**Prohibited Actions:**
❌ Lying or false information
❌ Rudeness or hostility
❌ Not fulfilling promises from previous call

**6. Filtering and Storage:**
• Data filtered by violation type
• Serious errors recorded in Google Sheets
• Parallel storage in DB
• Knowledge base formation for AI bot

**7. Instant Notification (15-30 seconds):**

**If everything is excellent:**
• Nothing happens
• Silence is good

**If there were violations:**
• Card instantly arrives in Google Sheet
• Manager receives:
  - Violation description
  - Manager name
  - Recording link
  - Exact call time

**8. AI Bot Based on Data:**
• Separate AI bot created
• Works on all collected data
• Can answer questions about errors
• Provides recommendations to managers

**Tech Stack:**
• Gemini 2.0 Flash (transcription and analysis)
• n8n (process automation)
• PostgreSQL (data storage)
• Google Sheets API (reports)
• Telegram Bot API (notifications)

**Result:**
Complete quality control automation. 24/7 without any clicks. Manager sees only problematic calls - good ones just disappear in silence.`,
          technologies: ['Gemini 2.0 Flash', 'n8n', 'PostgreSQL', 'Google Sheets API', 'Telegram Bot API'],
          category: 'ai',
          images: [],
          links: []
        },
        {
          id: 6,
          icon: <FileText size={24} />,
          title: 'Document Auto-filler',
          shortDesc: 'Document filling automation via Telegram',
          fullDesc: `Smart system for automatic document filling in step-by-step data collection mode.

**Created for:**
Replace manual document filling and speed up data work by 10x.

**How the system works:**

**1. Data Sending:**
• User sends document photo in Telegram
• OR enters data manually as text
• Bot accepts information

**2. Recognition:**
• AI reads text from photo (OCR)
• Recognizes document fields
• Extracts necessary information

**3. Data Verification:**
• System checks correctness
• Format validation (dates, numbers, etc.)
• Request missing data from user

**4. Auto-filling:**
• Inserts data into template fields
• Uses pre-created template
• Formats according to requirements

**5. Document Formation:**
• Generates ready document (PDF, DOCX)
• Preserves formatting
• Adds necessary signatures/stamps

**6. Result Return:**
• File returned to Telegram
• User receives ready document
• Editing option if needed

**7. Copy Storage:**
• Parallel copy storage in Google Drive
• Organized folder structure
• Easy access to history

**Supported Formats:**
• PDF, DOCX, Excel
• Document photos (JPG, PNG)
• Text input

**Tech Stack:**
• GPT-4 Vision (text recognition)
• Telegram Bot API
• Google Docs API
• Google Drive API
• n8n (automation)
• PDF/DOCX generators

**Result:**
90% time saved on document filling. Complete routine operation automation. Zero errors.`,
          technologies: ['GPT-4 Vision', 'Telegram Bot API', 'Google Docs API', 'Google Drive API', 'n8n', 'PDF Generation'],
          category: 'automation',
          images: [
            '/images/документі.png',
            '/images/документ1.png'
          ],
          links: [
            { title: 'Video Demo', url: 'https://drive.google.com/drive/my-drive' }
          ]
        },
        {
          id: 7,
          icon: <Calendar size={24} />,
          title: 'News Collection and Auto-posting',
          shortDesc: 'Automatic news aggregation and social media publishing',
          fullDesc: `Comprehensive system for automatic news collection and social media publishing.

**News Collection:**

**Sources:**
• RSS feeds from leading publications
• News site parsing
• News agency APIs
• Thematic blogs and channels

**Filtering:**
• Selection by keywords
• Filter by topics and categories
• Duplicate exclusion
• Relevance determination

**Processing:**
• News sentiment analysis
• Identifying most important
• Content categorization
• Translation if needed

**Auto-posting System:**

**Planning:**
• Automatic schedule creation for week/month
• Consideration of optimal publication time
• Even content distribution

**Adaptation:**
• Content preparation for each platform
• Instagram: square images + hashtags
• Facebook: longer texts + links
• LinkedIn: professional style
• Twitter/X: short forms

**Publishing:**
• Automatic publication to Instagram
• Facebook pages and groups
• LinkedIn profile and companies
• Twitter/X accounts

**Additional Features:**
• Automatic hashtag addition
• Relevant account mentions
• Media file attachment
• Geolocation (where needed)

**Analytics:**
• Reach tracking
• Engagement metrics (likes, comments, reposts)
• Publication effectiveness reports
• Improvement recommendations

**Technical Implementation:**
• n8n for all process orchestration
• RSS Parsers for news collection
• Puppeteer for site parsing
• Social Media APIs for publishing
• PostgreSQL for analytics storage
• GPT-4 for content adaptation

**Result:**
Complete content marketing automation. 20+ hours saved per week. Constant social media presence.`,
          technologies: ['n8n', 'RSS Parsers', 'Puppeteer', 'Social Media APIs', 'PostgreSQL', 'GPT-4', 'Analytics'],
          category: 'automation',
          images: [
            '/images/ИИ новости.png'
          ],
          links: [
            { title: 'Telegram news channel', url: 'https://t.me/V3vj2KRLbT5iMDU6' }
          ]
        }
      ];

  return (
    <>
      <S.ProjectsSection>
        <S.ContentWrapper>
          <S.TitleArea data-aos="fade-down" data-aos-duration="800">
            <S.IconWrapper>
              <Folder size={28} />
            </S.IconWrapper>
            <S.Title>
              {i18n.language === 'ua' ? 'Мої проекти' : 'My Projects'}
            </S.Title>
            <S.Subtitle>
              {i18n.language === 'ua'
                ? 'Реальні проекти з автоматизації та впровадження ШІ'
                : 'Real projects in automation and AI implementation'
              }
            </S.Subtitle>
          </S.TitleArea>

          <S.ProjectsGrid>
            {projects.map((project, index) => (
              <S.ProjectCard
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
                onClick={() => setSelectedProject(project)}
                $category={project.category}
              >
                <S.ProjectIcon>{project.icon}</S.ProjectIcon>
                <S.ProjectTitle>{project.title}</S.ProjectTitle>
                <S.ProjectShortDesc>{project.shortDesc}</S.ProjectShortDesc>
                <S.ReadMore>
                  {i18n.language === 'ua' ? 'Детальніше →' : 'Read more →'}
                </S.ReadMore>
              </S.ProjectCard>
            ))}
          </S.ProjectsGrid>
        </S.ContentWrapper>
      </S.ProjectsSection>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
