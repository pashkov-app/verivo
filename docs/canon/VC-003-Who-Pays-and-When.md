---
title: "Who Pays and When"
title_ua: "Хто платить і коли"
purpose: "Fix the unit of Verivo's economics, the honest monetization hypotheses, the attacks they survived, and the cheapest tests that will decide between them."
reading_time: "9 minutes"
status: "Draft"
---

## UA

### Питання цього документа

Хто платить Verivo, у який момент і за що. Документ свідомо не дає остаточної відповіді: він фіксує юніт економіки, ролі, гіпотези, атаки, які вони пережили, та план найдешевших перевірок, після яких рішення буде ухвалене й записане в журналі рішень.

### Юніт: автомобіль, не власник

Рішення засновника від 19.08.2026: **юнітом економіки Verivo є автомобіль (VIN), а не власник.**

Це пряме продовження канону: історія належить конкретному автомобілю і живе довше за власника. Наслідки для економіки:

- **LTV рахується на автомобіль** через усе його життя в продукті — крізь власників і угоди: власник₁ накопичує, авто переходить, власник₂ продовжує ту саму історію.
- **CAC — це вартість «посадити» одне авто у Verivo**, а не вартість залучення користувача.
- **Головна метрика продукту — continuity rate:** частка історій, що переживають зміну власника. Якщо історія вмирає разом із власником, Verivo — звичайний застосунок з юнітом-людиною, і його економіка повторює долю попередньої фінмоделі («Пробіг», юніт = користувач: не вийшла в операційний плюс за 36 місяців; 92% доходу третього року давав B2B-потік, де юнітом уже було авто).

Робоча юніт-модель: `verivo-unit-economics.xlsx` (припущення, потоки доходу на 1 авто, ціна безперервності). На калібрувальних цифрах ≈ третина LTV авто існує лише за умови continuity — це грошовий вираз головної метрики.

### Ролі

- **Творець цінності** — власник автомобіля. Він (разом із сервісами) наповнює історію протягом років володіння.
- **Споживач цінності** — наступна людина: покупець уживаного авто. Саме він у момент угоди споживає довіру, яку створила безперервна історія.
- **Платник** — відкрите питання цього документа. Гіпотези нижче відрізняються насамперед відповіддю на нього.

Монетизація живе в точці зустрічі творця і споживача — у моменті передачі автомобіля.

### Момент цінності

Цінність історії розподілена нерівномірно. Роки володіння — це накопичення; момент продажу — це концентрація: автомобіль із доведеною безперервною історією має продаватися дорожче і швидше [гіпотеза, ≈, не перевірено]. Із цього випливає головна напруга монетизації: платіж, розтягнутий у часі (підписка), не збігається з моментом, де цінність концентрується (угода). Це економічне віддзеркалення «пастки щоденника» з відкритих питань VC-001.

### Дві умови, без яких не працює жодна модель

**Умова 1 — доказова сила.** Історія, заповнена лише продавцем, не має ваги для покупця: продавець має очевидний стимул показувати хороше й приховувати погане, тож самозаповнена історія читається як «цифрова сервісна книжка, яку власник написав сам». Висновок: записи мусять мати видиме походження, і частина з них має створюватися не власником — насамперед сервісами (СТО), що підтверджують виконані роботи.

**Умова 2 — живе джерело (скріншот-атака, засновник, 19.08.2026).** Ніщо не заважає продавцю зробити скріншоти історії, показати її з власного смартфона або надіслати покупцю; покупець може навіть прогнати скріншоти через AI й отримати охайні документи. Тому **статичний артефакт — звіт, PDF, скріншот — не монетизується: його копія рівноцінна оригіналу.** Єдине, чого копія не має за визначенням, — незалежності джерела: цінність живе лише в **резолвабельному живому джерелі** — посиланні/QR, що веде на канонічну історію цього VIN на серверах Verivo, зі статусами верифікації, які подає Verivo, а не пікселі продавця. Це різниця між ксерокопією диплома і дзвінком в університет.

Емпіричний орієнтир: покупці вже платять за незалежні джерела в моменті угоди — CarFax ≈$45, carVertical ≈€30 за звіт [перевірити актуальні ціни]. Платять не за інформацію, а за незалежність. У світі, де AI генерує будь-який правдоподібний документ за хвилину, цінність резолвабельних живих джерел лише зростає — це аргумент на користь Verivo на роки вперед.

Разом умови 1 і 2 означають: **без шару верифікації монетизації в моменті угоди не існує взагалі — ні з продавця, ні з покупця.** Verified-шар — не одна з моделей, а фундамент усіх.

### Гіпотези монетизації

**H1 — Продукт угоди: платіж за живе джерело в момент «я продаю».**
Історія накопичується безкоштовно. У моменті передачі авто продається не звіт (його вбивають скріншоти — умова 2), а **доступ до живого джерела**: публічний VIN-лінк/QR на канонічну верифіковану історію, який покупець може перевірити незалежно від продавця. Хто саме платить — продавець (за пакет підготовки) чи покупець (за перевірку, як у CarFax) — уточнюється тестом. Ціна [TBD].
Сильне: платіж у моменті концентрації цінності; захищений від копіювання за визначенням.
Ризик: низька частота транзакцій; працює лише за наявності верифікованих записів (залежить від умови 1).

**H2 — Синтез: безкоштовне накопичення + verified-шар через СТО + продукт угоди.**
Власник веде історію безкоштовно; СТО створюють verified-записи (для них це B2B-інструмент — брендоване підтвердження робіт, що залишається з автомобілем); монетизація — продукт угоди (H1), цінний саме завдяки верифікованим записам, плюс плата СТО за запис/місяць. Verified-шар побічно відповідає й на пастку щоденника: історія росте без зусиль власника.
Сильне: єдина гіпотеза, що виконує обидві умови й лікує мотивацію першого року одночасно; обидва потоки в юніт-моделі рахуються «на авто».
Ризик: двобічний ринок із першого дня; «курка і яйце» — СТО потрібне покриття, власникам потрібні СТО.

**H3 — Підписка (історична модель B): freemium + ≈79–99 грн/міс.**
Робоча модель до 18.08.2026. Проти неї стоять п'ять аргументів стрес-тесту (платіж не збігається з моментом цінності; найсумлінніший користувач найменш готовий платити за зберігання власних даних; Verivo не контролює обіцянку вищої ціни; freemium-канібалізація; відсутність доказової сили) плюс попередня фінмодель, що не вийшла в плюс на цьому юніті.
Статус: не знята, але вимагає відповіді на всі аргументи, щоб залишитися.

Відхилені на цьому етапі (зафіксовані для пам'яті): Sale Pack як статичний звіт (убитий скріншот-атакою); transaction layer як первинна модель (ризик перетворення на lead-gen оболонку); data layer (не стартова модель; неправильне використання даних руйнує довіру — межі визначити окремим рішенням).

### Що втримує власника в перший рік

Щоб у моменті угоди було що продавати, історія має накопичитися. Механіки утримання першого року (незалежні від вибору моделі):

- Фото чека або рахунку → автоматично структурована подія. Дисципліна не потрібна: «скинув — забув».
- Миттєва відповідь на «що вже було з машиною?»: коли міняли колодки, які шини, що робили після тієї помилки.
- Verified-записи від СТО, що з'являються в історії без роботи власника.
- «Рік мого авто» — емоційний артефакт із поїздок, подій і фото, а не таблиця витрат.
- Доказова цінність уже сьогодні: страховий випадок, гарантійна суперечка, оцінка, trade-in.

### План перевірок

Тести тепер відповідають не лише «яка модель», а «чи існує юніт-економіка взагалі»: вони калібрують найчутливіші важелі юніт-моделі — ціну verified-запису та attach rate продукту угоди.

1. **Тест продукту угоди (≤1 тиждень, ≈0 грн).** Знайти 10–20 людей, які прямо зараз продають власне авто. Для кількох — вручну зібрати mockup живого VIN-паспорта з їхніх матеріалів. Питання не «чи подобається», а «купите зараз за X?» — окремо продавцю (пакет) і, де можливо, покупцю (перевірка). Символічний депозит як сигнал.
2. **Verified-шар через СТО (паралельно).** Теплий канал до незалежних СТО у Великій Британії: показати 5–10 СТО mockup брендованого verified-запису, що залишається з автомобілем клієнта. Перевіряється конкретне: чи готові видавати такі записи наступним клієнтам і чи готові платити [TBD] за запис або місяць.
3. **Transaction add-on (за наявності живого продажу).** У реальній угоді вручну запропонувати одну суміжну послугу (інспекція, гарантія) — перевірити, чи створює історія момент купівлі суміжного.

**Критерій рішення:** первинна модель обирається після сигналів із тестів 1–2 і фіксується окремим записом у `decisions/`. До того часу жодна модель не є зобов'язанням.

### Відкриті питання

- Вибір первинної моделі — свідомо відкритий до результатів тестів 1–2.
- У продукті угоди: платить продавець, покупець чи обидва — уточнює тест 1.
- Ціна продукту угоди і ціна verified-запису: [TBD], тести 1–2.
- Continuity rate: як продукт передає історію новому власнику і яка частка передач відбувається — головна продуктова метрика, механізм [TBD].
- Межі використання агрегованих даних, які не руйнують довіру до Verivo.

### Майбутні покращення

- [TBD]

### Примітки автора

Ролі та момент монетизації сформульовані в робочих сесіях 18.08.2026 (аудит VC-001). Атака на підписку, альтернативні моделі й план найдешевших перевірок — результат стрес-тесту в кімнаті роздумів (GPT) 18.08.2026, відібраний і синтезований поза нею. Рішення про юніт (автомобіль) і скріншот-атака — засновник, 19.08.2026. Рішення не обирати модель до тестів ухвалене засновником 18.08.2026.

Цифри в документі — гіпотези з позначками ≈ і [TBD]; ринкові дані не вигадувалися. Документ може бути поданий як практика П2 Модуля 2 курсу «Design for Monetization».

### Історія змін

| Дата | Версія | Зміна |
| --- | --- | --- |
| 2026-08-18 | 0.1 | Перший драфт: ролі, момент цінності, умова доказової сили, три гіпотези, план перевірок. |
| 2026-08-19 | 0.2 | Юніт = автомобіль (VIN); скріншот-атака та умова живого джерела; Sale Pack-як-звіт відхилено, H1 переформульовано як продукт живого джерела; посилання на юніт-модель. |

## EN

### The question of this document

Who pays Verivo, at what moment, and for what. This document deliberately gives no final answer: it fixes the unit of the economics, the roles, the hypotheses, the attacks they have survived, and the plan of cheapest tests, after which the decision will be made and recorded in the decision log.

### The unit: the car, not the owner

Founder's decision of 2026-08-19: **the unit of Verivo's economics is the car (VIN), not the owner.**

This follows the Canon directly: a history belongs to one specific car and lives longer than any owner. The consequences for the economics:

- **LTV is computed per car**, across its whole life in the product — through owners and deals: owner₁ accumulates, the car changes hands, owner₂ continues the same history.
- **CAC is the cost of bringing one car into Verivo**, not the cost of acquiring a user.
- **The product's primary metric is the continuity rate:** the share of histories that survive a change of owner. If the history dies with the owner, Verivo is an ordinary app with a person-unit — and its economics repeat the fate of the previous financial model ("Probih", unit = user: never reached operating profit within 36 months, while 92% of year-three revenue came from the B2B stream whose unit was already the car).

The working unit model lives in `verivo-unit-economics.xlsx` (assumptions, per-car revenue streams, the price of continuity). On calibration numbers, ≈ one third of a car's LTV exists only if continuity holds — the monetary expression of the primary metric.

### The roles

- **Creator of value** — the car's owner, who (together with services) builds the history over years of ownership.
- **Consumer of value** — the next person: the buyer of the used car. At the moment of the deal, the buyer consumes the trust that a continuous history has created.
- **The payer** — the open question of this document. The hypotheses below differ primarily in how they answer it.

Monetization lives where creator and consumer meet: at the moment the car changes hands.

### The moment of value

The value of a history is distributed unevenly. Years of ownership are accumulation; the moment of sale is concentration: a car with a proven continuous history should sell for more, and faster [hypothesis, ≈, untested]. This produces the central tension of monetization: a payment stretched over time (a subscription) does not coincide with the moment where value concentrates (the deal). It is the economic mirror of the "diary trap" recorded in VC-001's Open Questions.

### Two conditions without which no model works

**Condition 1 — evidential weight.** A history filled in only by the seller carries no weight for the buyer: the seller has an obvious incentive to show the good and hide the bad, so a self-authored history reads as "a digital service book the owner wrote himself". The conclusion: records must have visible provenance, and some of them must be created by someone other than the owner — above all by services (garages) confirming completed work.

**Condition 2 — the live source (the screenshot attack; founder, 2026-08-19).** Nothing stops a seller from screenshotting the history, showing it on his own phone, or sending it to the buyer — who can even run the screenshots through AI and get tidy documents back. Therefore **a static artifact — a report, a PDF, a screenshot — cannot be monetized: its copy is equivalent to the original.** The one thing a copy lacks by definition is independence of source: the value lives only in a **resolvable live source** — a link/QR that resolves to the canonical history of that VIN on Verivo's servers, with verification statuses served by Verivo rather than by the seller's pixels. It is the difference between a photocopy of a diploma and a call to the university.

An empirical anchor: buyers already pay for independent sources at the moment of the deal — CarFax ≈$45, carVertical ≈€30 per report [verify current prices]. They pay not for information but for independence. In a world where AI generates any plausible document in a minute, the value of resolvable live sources only grows — an argument in Verivo's favor for years ahead.

Together, conditions 1 and 2 mean: **without a verification layer, no deal-moment monetization exists at all — from either side.** The verified layer is not one of the models; it is the foundation of all of them.

### The monetization hypotheses

**H1 — The deal product: payment for the live source at the moment of "I am selling".**
The history accumulates for free. What is sold at the handover is not a report (screenshots kill it — condition 2) but **access to the live source**: a public VIN link/QR to the canonical verified history, which the buyer can check independently of the seller. Who exactly pays — the seller (for the preparation pack) or the buyer (for the check, CarFax-style) — is refined by testing. Price [TBD].
Strength: the payment sits at the moment of concentrated value and is copy-proof by construction.
Risk: low transaction frequency; works only where verified records exist (depends on condition 1).

**H2 — The synthesis: free accumulation + a verified layer through garages + the deal product.**
The owner keeps the history for free; garages create verified records (for them, a B2B tool — a branded confirmation of work that stays with the car); monetization is the deal product (H1), valuable precisely because its records are verified, plus garage payments per record or per month. As a side effect, the verified layer also answers the diary trap: the history grows without effort from the owner.
Strength: the only hypothesis that satisfies both conditions and treats first-year motivation at once; both streams price per car, matching the unit model.
Risk: a two-sided market from day one; chicken-and-egg — garages need coverage, owners need garages.

**H3 — Subscription (the historical model B): freemium + ≈₴79–99/month.**
The working model until 2026-08-18. Against it stand the five stress-test arguments (payment misaligned with the moment of value; the most diligent user least willing to pay for storing their own data; no control over the higher-price promise; freemium cannibalization; no evidential weight) plus the previous financial model, which never reached profit on this unit.
Status: not withdrawn, but it must answer every argument to stay.

Set aside at this stage (recorded for memory): the Sale Pack as a static report (killed by the screenshot attack); a transaction layer as the primary model (risk of degrading into a lead-gen shell); a data layer (not a starting model; misuse of data would destroy trust in Verivo — its boundaries need a separate decision).

### What keeps the owner in year one

For there to be something to sell at the moment of the deal, the history must first accumulate. First-year retention mechanics (independent of the model chosen):

- A photo of a receipt or invoice → an automatically structured event. No discipline required: capture and forget.
- An instant answer to "what has already happened to this car?": when the pads were changed, which tyres, what was done after that error.
- Verified records from garages that appear in the history without the owner's work.
- "My car's year" — an emotional artifact of journeys, events, and photos, not a spreadsheet of costs.
- Evidential value today: an insurance case, a warranty dispute, an appraisal, a trade-in.

### The test plan

The tests now answer not only "which model" but "does the unit economics exist at all": they calibrate the unit model's most sensitive levers — the price of a verified record and the attach rate of the deal product.

1. **Deal-product test (≤1 week, ≈zero cost).** Find 10–20 people currently selling their own cars. For several of them, hand-build a mockup live VIN passport from their materials. The question is not "do you like it" but "would you buy right now for X?" — asked separately of the seller (the pack) and, where possible, of the buyer (the check). A symbolic deposit as the signal.
2. **Verified layer through garages (in parallel).** The warm channel to independent UK garages: show 5–10 garages a mockup of a branded verified record that stays with the customer's car. What is tested is concrete: will they issue such records to their next customers, and will they pay [TBD] per record or per month.
3. **Transaction add-on (when a live sale is available).** In a real deal, manually offer one adjacent service (inspection, warranty) — testing whether the history creates the moment in which an adjacent purchase happens.

**Decision criterion:** the primary model is chosen after signals from tests 1–2 and recorded as a separate entry in `decisions/`. Until then, no model is a commitment.

### Open Questions

- The choice of the primary model — deliberately open until tests 1–2 report.
- Within the deal product: does the seller pay, the buyer, or both — refined by test 1.
- The deal-product price and the verified-record price: [TBD], tests 1–2.
- The continuity rate: how the product hands a history to the next owner, and what share of handovers succeed — the primary product metric; mechanism [TBD].
- The boundaries of aggregated-data use that do not erode trust in Verivo.

### Future Improvements

- [TBD]

### Author Notes

The roles and the monetization moment were formulated in working sessions on 2026-08-18 (the VC-001 audit). The attack on the subscription, the alternative models, and the cheapest-test plan came out of a stress test in the thinking room (GPT) on 2026-08-18, then filtered and synthesized outside it. The unit decision (the car) and the screenshot attack are the founder's, 2026-08-19. The decision not to choose a model before the tests was made by the founder on 2026-08-18.

Numbers in this document are hypotheses marked ≈ and [TBD]; no market data was invented. This document may be submitted as Practice P2 of Module 2 of the "Design for Monetization" course.

### Revision History

| Date | Version | Change |
| --- | --- | --- |
| 2026-08-18 | 0.1 | First draft: roles, the moment of value, the evidential-weight precondition, three hypotheses, the test plan. |
| 2026-08-19 | 0.2 | Unit = the car (VIN); the screenshot attack and the live-source condition; Sale-Pack-as-report rejected, H1 reframed as the live-source deal product; unit-model reference. |
