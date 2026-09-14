import { useState } from "react";
import {
  DemoBar,
  Header,
  Section,
  Faq,
  ZayavkaForm,
  Footer,
  btnPrimary,
  btnGhost,
} from "./ui.jsx";

const Logo = () => (
  <span className="flex items-center gap-2.5">
    <svg viewBox="0 0 64 64" className="size-8" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#2e231b" />
      <ellipse
        cx="32"
        cy="32"
        rx="14"
        ry="20"
        transform="rotate(30 32 32)"
        fill="#e0a45e"
      />
      <path
        d="M26 20c8 6 4 18 12 24"
        fill="none"
        stroke="#2e231b"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
    <span className="font-display text-xl font-bold tracking-tight">
      Сорок зёрен
    </span>
  </span>
);

const LINKS = {
  items: [
    { href: "#menyu", label: "Меню" },
    { href: "#zerno", label: "Зерно домой" },
    { href: "#kontakty", label: "Как найти" },
  ],
};

const MENYU = {
  Кофе: [
    ["Эспрессо", "Эфиопия или Бразилия на выбор", "30 мл", "160 ₽"],
    ["Капучино", "Двойной эспрессо, молоко 3,2%", "300 мл", "260 ₽"],
    ["Флэт уайт", "Больше кофе, меньше молока", "200 мл", "270 ₽"],
    ["Раф с корицей", "Сливки, ванильный сахар, корица", "350 мл", "330 ₽"],
    ["Фильтр-кофе", "Меняем зерно каждую неделю", "250 мл", "220 ₽"],
    ["Колд брю", "Холодная экстракция 18 часов", "300 мл", "290 ₽"],
  ],
  "Не кофе": [
    ["Какао на овсяном", "Бельгийский какао-порошок", "300 мл", "280 ₽"],
    ["Чай в чайнике", "Ассам, сенча или травяной сбор", "600 мл", "300 ₽"],
    ["Матча-латте", "Японская матча, молоко на выбор", "300 мл", "340 ₽"],
    ["Лимонад облепиха-имбирь", "Делаем сами, без сиропов", "400 мл", "290 ₽"],
  ],
  Завтраки: [
    ["Сырники", "Со сметаной и ягодным соусом", "220 г", "390 ₽"],
    ["Овсянка на кокосовом", "Банан, орехи, мёд", "280 г", "320 ₽"],
    ["Скрэмбл с тостом", "Три яйца, зелёный лук, чиабатта", "250 г", "420 ₽"],
    ["Круассан с лососем", "Слабосолёный лосось, крем-сыр", "190 г", "520 ₽"],
  ],
  Десерты: [
    ["Баскский чизкейк", "Печём каждое утро", "140 г", "340 ₽"],
    ["Морковный торт", "Крем-сыр, грецкий орех", "150 г", "320 ₽"],
    ["Синнабон", "Корица, сливочный крем", "120 г", "240 ₽"],
  ],
};

const ZERNO = [
  {
    name: "Эфиопия Иргачеффе",
    notes: "Бергамот, жасмин, персик",
    roast: "Светлая",
    best: "Фильтр, аэропресс",
    price: "890 ₽",
  },
  {
    name: "Колумбия Уила",
    notes: "Карамель, красное яблоко",
    roast: "Средняя",
    best: "Турка, гейзер",
    price: "790 ₽",
  },
  {
    name: "Бразилия Можиана",
    notes: "Шоколад, орех, мало кислотности",
    roast: "Средне-тёмная",
    best: "Эспрессо, с молоком",
    price: "690 ₽",
  },
];

function HeroArt() {
  return (
    <svg
      viewBox="0 0 420 420"
      className="h-auto w-full"
      role="img"
      aria-labelledby="cup-t"
    >
      <title id="cup-t">Чашка кофе и зёрна</title>
      <circle cx="210" cy="210" r="190" fill="#2e231b" />
      <circle
        cx="210"
        cy="210"
        r="150"
        fill="none"
        stroke="#3a2d23"
        strokeWidth="2"
      />
      <g
        fill="none"
        stroke="#c2b2a3"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.6"
      >
        <path d="M170 120c-14-18 14-30 0-50" />
        <path d="M210 110c-14-18 14-30 0-50" />
        <path d="M250 120c-14-18 14-30 0-50" />
      </g>
      <ellipse cx="210" cy="320" rx="130" ry="26" fill="#17110d" />
      <path
        d="M110 170h200v70c0 55-45 90-100 90s-100-35-100-90z"
        fill="#f3e9df"
      />
      <path
        d="M310 190h14a30 30 0 0 1 0 60h-22"
        fill="none"
        stroke="#f3e9df"
        strokeWidth="16"
      />
      <ellipse cx="210" cy="172" rx="100" ry="18" fill="#6b4226" />
      <ellipse cx="200" cy="170" rx="34" ry="7" fill="#c68a4e" opacity="0.7" />
      {[
        [80, 300, 20],
        [340, 110, -30],
        [350, 300, 60],
        [70, 130, -10],
      ].map(([x, y, r]) => (
        <g key={`${x}${y}`} transform={`translate(${x} ${y}) rotate(${r})`}>
          <ellipse rx="14" ry="20" fill="#e0a45e" />
          <path
            d="M-4 -14c7 6 2 20 8 28"
            fill="none"
            stroke="#2e231b"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      ))}
    </svg>
  );
}

function Menyu() {
  const tabs = Object.keys(MENYU);
  const [active, setActive] = useState(tabs[0]);

  const onKey = (e) => {
    const i = tabs.indexOf(active);
    if (e.key === "ArrowRight") setActive(tabs[(i + 1) % tabs.length]);
    if (e.key === "ArrowLeft")
      setActive(tabs[(i - 1 + tabs.length) % tabs.length]);
  };

  return (
    <>
      <div
        role="tablist"
        aria-label="Разделы меню"
        onKeyDown={onKey}
        className="mb-8 flex gap-2 overflow-x-auto pb-2"
      >
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            id={`tab-${t}`}
            aria-selected={active === t}
            aria-controls="panel-menyu"
            tabIndex={active === t ? 0 : -1}
            onClick={() => setActive(t)}
            className={`min-h-11 shrink-0 rounded-full border px-5 text-[15px] font-semibold transition ${active === t ? "border-accent bg-accent text-on-accent" : "border-line-strong text-ink hover:border-ink"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <ul
        id="panel-menyu"
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="grid gap-x-12 md:grid-cols-2"
      >
        {MENYU[active].map(([name, desc, vol, price]) => (
          <li
            key={name}
            className="flex items-baseline gap-4 border-b border-line py-5"
          >
            <div className="min-w-0 flex-1">
              <p className="text-lg font-semibold">{name}</p>
              <p className="mt-1 text-[15px] text-muted">
                {desc} · {vol}
              </p>
            </div>
            <p className="font-display text-xl font-semibold whitespace-nowrap text-accent-text">
              {price}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

function MapArt() {
  return (
    <svg
      viewBox="0 0 400 280"
      className="h-auto w-full"
      role="img"
      aria-labelledby="map-t"
    >
      <title id="map-t">Схема: кофейня в двух минутах от выхода метро</title>
      <rect width="400" height="280" fill="#211812" />
      <g stroke="#3a2d23" strokeWidth="18">
        <path d="M0 90H400" />
        <path d="M0 210H400" />
        <path d="M120 0V280" />
        <path d="M290 0V280" />
      </g>
      <rect
        x="150"
        y="115"
        width="110"
        height="70"
        rx="8"
        fill="#2e5a3a"
        opacity="0.6"
      />
      <text
        x="205"
        y="155"
        textAnchor="middle"
        fontFamily="Manrope Variable, sans-serif"
        fontSize="13"
        fill="#c2b2a3"
      >
        парк
      </text>
      <path d="M60 60l0 0" />
      <circle cx="62" cy="62" r="16" fill="#e0a45e" />
      <text
        x="62"
        y="67"
        textAnchor="middle"
        fontFamily="Manrope Variable, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill="#1a120c"
      >
        М
      </text>
      <path
        d="M78 70 C150 70 150 90 300 90 L 320 180"
        fill="none"
        stroke="#e0a45e"
        strokeWidth="3"
        strokeDasharray="6 7"
      />
      <circle cx="322" cy="190" r="12" fill="#f3e9df" />
      <text
        x="322"
        y="232"
        textAnchor="middle"
        fontFamily="Manrope Variable, sans-serif"
        fontSize="13"
        fontWeight="700"
        fill="#f3e9df"
      >
        Сорок зёрен
      </text>
    </svg>
  );
}

export default function App() {
  return (
    <>
      <DemoBar />
      <Header
        brand={<Logo />}
        links={LINKS}
        cta={{ href: "#predzakaz", label: "Заказать с собой" }}
      />

      <main>
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(50% 60% at 85% 30%, rgba(224,164,94,.14), transparent 70%)",
            }}
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-20">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-accent-text">
                Кофейня · 2 минуты от метро
              </p>
              <h1 className="font-display text-[clamp(2.4rem,1.3rem+4.2vw,4.4rem)] font-bold leading-[1.04] tracking-[-0.02em]">
                Кофе своей обжарки и завтраки до 16:00
              </h1>
              <p className="mt-6 max-w-[50ch] text-[18px] leading-relaxed text-muted">
                Обжариваем зерно сами каждую неделю, поэтому капучино не горчит.
                Закажите заранее — заберёте без очереди.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#predzakaz" className={btnPrimary}>
                  Заказать с собой
                </a>
                <a href="#menyu" className={btnGhost}>
                  Смотреть меню
                </a>
              </div>
              <p className="mt-4 text-sm text-muted">
                Открыто сегодня до 22:00
              </p>
            </div>
            <div className="mx-auto w-full max-w-[400px]">
              <HeroArt />
            </div>
          </div>
        </section>

        <div className="border-y border-line bg-surface">
          <ul className="mx-auto grid max-w-6xl gap-x-8 gap-y-3 px-5 py-6 text-[15px] sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Обжарка раз в неделю",
              "Альтернативное молоко без доплаты",
              "Розетки у каждого стола",
              "Можно с собакой",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="size-2 shrink-0 rounded-full bg-accent"
                />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <Section
          id="menyu"
          eyebrow="Меню"
          title="Цены без сюрпризов"
          lead="Овсяное, миндальное и кокосовое молоко — без доплаты. Сироп — плюс 40 ₽."
        >
          <Menyu />
        </Section>

        <Section
          id="zerno"
          tone="bg-surface border-y border-line"
          eyebrow="Зерно домой"
          title="Та же обжарка, что в чашке, — пачкой 250 г"
          lead="Смелем под вашу турку, гейзер или кофемашину прямо при вас."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {ZERNO.map((z) => (
              <article
                key={z.name}
                className="flex flex-col rounded-[var(--radius-card)] border border-line bg-soft p-7"
              >
                <h3 className="font-display text-2xl font-bold">{z.name}</h3>
                <p className="mt-2 text-accent-text">{z.notes}</p>
                <dl className="mt-6 flex-1 space-y-3 border-t border-line pt-5 text-[15px]">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Обжарка</dt>
                    <dd>{z.roast}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Лучше всего</dt>
                    <dd className="text-right">{z.best}</dd>
                  </div>
                </dl>
                <p className="mt-6 font-display text-3xl font-bold">
                  {z.price}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="predzakaz">
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-text">
                С собой
              </p>
              <h2 className="font-display text-[clamp(1.9rem,1.2rem+2.6vw,3rem)] font-bold leading-[1.1]">
                Закажите заранее и заберите без очереди
              </h2>
              <ol className="mt-8 space-y-5">
                {[
                  "Напишите, что приготовить и во сколько зайдёте",
                  "Бариста подтвердит заказ сообщением",
                  "Заберите на отдельной стойке у входа, оплата на месте",
                ].map((t, i) => (
                  <li key={t} className="flex gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent font-bold text-on-accent">
                      {i + 1}
                    </span>
                    <span className="pt-1.5 text-[17px]">{t}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-[var(--radius-card)] border border-line bg-surface p-[clamp(20px,4vw,40px)]">
              <ZayavkaForm
                button="Отправить заказ"
                note="Подтвердим за 5 минут в часы работы"
                fields={[
                  {
                    name: "imya",
                    label: "Имя",
                    required: true,
                    autoComplete: "given-name",
                    placeholder: "Напишем на стакане",
                  },
                  {
                    name: "telefon",
                    label: "Телефон",
                    type: "tel",
                    required: true,
                    autoComplete: "tel",
                    placeholder: "+7 900 000-00-00",
                  },
                  {
                    name: "zakaz",
                    label: "Что приготовить",
                    type: "textarea",
                    placeholder: "Например: капучино на овсяном и сырники",
                  },
                  {
                    name: "vremya",
                    label: "Во сколько заберёте",
                    type: "select",
                    options: ["Через 15 минут", "Через 30 минут", "Через час"],
                    placeholder: "Выберите время",
                  },
                ]}
              />
            </div>
          </div>
        </Section>

        <Section
          id="kontakty"
          tone="bg-surface border-t border-line"
          eyebrow="Как найти"
          title="Выход из метро — и сразу направо, вдоль парка"
        >
          <div className="grid items-start gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <table className="w-full text-left text-[17px]">
                <caption className="sr-only">Часы работы</caption>
                <tbody>
                  {[
                    ["Понедельник – пятница", "7:30 – 22:00"],
                    ["Суббота, воскресенье", "9:00 – 22:00"],
                    ["Завтраки", "до 16:00 ежедневно"],
                  ].map(([d, h]) => (
                    <tr key={d} className="border-b border-line">
                      <th
                        scope="row"
                        className="py-4 pr-4 font-normal text-muted"
                      >
                        {d}
                      </th>
                      <td className="py-4 text-right font-semibold whitespace-nowrap">
                        {h}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-6 text-muted">
                Москва, адрес в демо не указан · +7 900 000-00-00
              </p>
              <div className="mt-10">
                <Faq
                  items={[
                    {
                      q: "Можно поработать с ноутбуком?",
                      a: "Да, у каждого стола есть розетка, Wi-Fi без пароля. В выходные с 11 до 15 бывает шумно.",
                    },
                    {
                      q: "Есть что-то без глютена?",
                      a: "Овсянка на кокосовом и баскский чизкейк. Уточните у бариста — подскажем по составу.",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-[var(--radius-card)] border border-line">
              <MapArt />
            </div>
          </div>
        </Section>
      </main>

      <Footer
        brand={<Logo />}
        about="Кофейня своей обжарки. Завтраки до 16:00, зерно домой и заказ с собой без очереди."
        contacts={[
          "+7 900 000-00-00 (демо)",
          "Пн–Пт 7:30–22:00, Сб–Вс 9:00–22:00",
          "Москва, 2 минуты от метро",
        ]}
      />
    </>
  );
}
