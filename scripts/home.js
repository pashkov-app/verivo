const WAITLIST_ENDPOINT = "[TBD-FORMSPREE-ENDPOINT]";

const tr = {
  uk: {
    navCta:"Ранній доступ",
    manifestoNav:"Маніфест",
    eyebrow:"Життєпис автомобіля",
    heroTitle:"Кожен автомобіль має свою історію.",
    heroCopy:"Verivo зберігає сервіс, подорожі, документи й моменти, з яких складається життя авто.",
    heroCta:"Приєднатися до раннього доступу",
    learn:"Дізнатися більше ↓",
    photoTitle:"Перша подорож у Карпати",
    photoMeta:"12 серпня 2024 · 1 284 км · Україна",
    storyKicker:"Не трекер. Не журнал. Історія.",
    storyTitle:"Те, що сьогодні здається дрібницею, завтра стає пам’яттю.",
    storyLead:"Перше ТО. Перша далека подорож. Нові шини. Фото біля моря. Через роки саме ці речі складаються у повну біографію автомобіля.",
    m1:"Перша велика подорож",
    m2:"Планове ТО · 30 000 км",
    m3:"Новий комплект шин",
    m4:"Історію передано новому власнику",
    amberKicker:"Збережено в часі",
    amberTitle:"Як бурштин зберігає минуле, Verivo зберігає життя автомобіля.",
    amberLead:"Факти, документи, витрати, маршрути й спогади залишаються разом — не розсипаються між чеками, нотатками, галереєю та різними сервісами.",
    statsKicker:"Життя в цифрах",
    statsTitle:"Не просто статистика. Біографія.",
    statsLead:"Скільки кілометрів пройдено. Скільки пального випито. Скільки разів автомобіль був у «лікаря». І скільки місць ви побачили разом.",
    s1:"км пройдено",s2:"л пального",s3:"сервісних подій",s4:"країн",s5:"фотографій",s6:"років історії",
    manifesto:"Кожен автомобіль має життя. Ми допомагаємо його зберегти.",
    manifestoLead:"Від першого дня з вами — до дня, коли історія продовжиться з наступним власником.",
    earlyKicker:"Ранній доступ",
    earlyTitle:"Почніть історію свого авто разом із Verivo.",
    earlyLead:"Залиште email — ми запросимо вас, коли відкриємо Verivo для перших користувачів.",
    earlyBtn:"Хочу ранній доступ",
    note:"Без спаму. Лише запуск і важливі оновлення.",
    footer:"Every car has a story worth preserving.",
    done:"Дякуємо. Ви у списку раннього доступу ✓",
    error:"Не вдалося надіслати. Спробуйте ще раз."
  },
  en: {
    navCta:"Early access",
    manifestoNav:"Manifesto",
    eyebrow:"The living history of your car",
    heroTitle:"Every car has a story.",
    heroCopy:"Verivo preserves the service, journeys, documents and moments that make up the life of a car.",
    heroCta:"Join early access",
    learn:"Discover more ↓",
    photoTitle:"First trip to the Carpathians",
    photoMeta:"12 August 2024 · 1,284 km · Ukraine",
    storyKicker:"Not a tracker. Not a logbook. A story.",
    storyTitle:"What feels small today becomes a memory tomorrow.",
    storyLead:"The first service. The first long journey. New tyres. A photo by the sea. Years later, these moments become the complete biography of a car.",
    m1:"The first great journey",
    m2:"Scheduled service · 30,000 km",
    m3:"A new set of tyres",
    m4:"History passed to the next owner",
    amberKicker:"Preserved in time",
    amberTitle:"As amber preserves the past, Verivo preserves the life of a car.",
    amberLead:"Facts, documents, expenses, routes and memories stay together instead of disappearing across receipts, notes, galleries and separate services.",
    statsKicker:"A life in numbers",
    statsTitle:"Not just statistics. A biography.",
    statsLead:"How far it travelled. How much fuel it drank. How often it visited the “doctor”. And how many places you discovered together.",
    s1:"km travelled",s2:"litres of fuel",s3:"service events",s4:"countries",s5:"photos",s6:"years of history",
    manifesto:"Every car has a life. We help preserve it.",
    manifestoLead:"From its first day with you to the day its story continues with the next owner.",
    earlyKicker:"Early access",
    earlyTitle:"Start your car’s story with Verivo.",
    earlyLead:"Leave your email and we’ll invite you when Verivo opens to its first users.",
    earlyBtn:"Join early access",
    note:"No spam. Only launch news and meaningful updates.",
    footer:"Every car has a story worth preserving.",
    done:"Thank you. You’re on the early access list ✓",
    error:"Something went wrong. Please try again."
  }
};

let lang="uk";
const ua=document.getElementById("ua");
const en=document.getElementById("en");

function readSavedLanguage() {
  try {
    const saved=localStorage.getItem("verivo-language");
    return saved==="uk" || saved==="en" ? saved : null;
  } catch {
    return null;
  }
}

function saveLanguage(next) {
  try {
    localStorage.setItem("verivo-language",next);
  } catch {
    // Language preference is optional when storage is unavailable.
  }
}

function setLang(next,{persist=true}={}) {
  lang=next==="en" ? "en" : "uk";
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-t]").forEach(el => {
    const key=el.dataset.t;
    if(tr[lang][key]) el.textContent=tr[lang][key];
  });
  ua.classList.toggle("active",lang==="uk");
  en.classList.toggle("active",lang==="en");
  ua.setAttribute("aria-pressed",String(lang==="uk"));
  en.setAttribute("aria-pressed",String(lang==="en"));
  if(persist) saveLanguage(lang);
}
ua.addEventListener("click",()=>setLang("uk"));
en.addEventListener("click",()=>setLang("en"));

const initialLanguage=readSavedLanguage()
  || (navigator.language.toLowerCase().startsWith("uk") ? "uk" : "en");
setLang(initialLanguage,{persist:false});

const form=document.getElementById("form");
const emailInput=document.getElementById("emailInput");
const submitButton=form.querySelector('button[type="submit"]');
const formNote=document.getElementById("formNote");

form.addEventListener("submit",async e=>{
  e.preventDefault();
  if(!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  const email=emailInput.value.trim();
  if(WAITLIST_ENDPOINT.includes("[TBD")) {
    formNote.dataset.t="error";
    formNote.textContent=tr[lang].error;
    return;
  }

  submitButton.disabled=true;
  emailInput.disabled=true;
  form.setAttribute("aria-busy","true");

  try {
    const response=await fetch(WAITLIST_ENDPOINT,{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email})
    });
    if(!response.ok) throw new Error("Waitlist request failed");
    formNote.dataset.t="done";
    formNote.textContent=tr[lang].done;
    form.reset();
  } catch {
    formNote.dataset.t="error";
    formNote.textContent=tr[lang].error;
  } finally {
    submitButton.disabled=false;
    emailInput.disabled=false;
    form.removeAttribute("aria-busy");
  }
});

const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
