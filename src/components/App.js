import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlashcardList from "./FlashcardList";
import "./App.css";
import Header from "./Header";
import List from "./List";
// import Main from "./Main";

function App() {
  const [flashcardsQA] = useState(QA_FLASHCARDS);
  const [flashcardsANGBS] = useState(ANGBS_FLASHCARDS);
  const [flashcardsERP] = useState(ERP_FLASHCARDS);
  const [flashcardsQAGPT] = useState(QAGPT_FLASHCARDS);

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <div className="container">
          <Routes>
            {/* <Route path="/" element={<Main flashcardsList={flashcardsArr} />} /> */}
            <Route path="/" element={<List />} />
            <Route
              path="/qa"
              element={<FlashcardList flashcards={flashcardsQA} />}
            />

            <Route
              path="/angbasics"
              element={<FlashcardList flashcards={flashcardsANGBS} />}
            />

            <Route
              path="/erp"
              element={<FlashcardList flashcards={flashcardsERP} />}
            />

            <Route
              path="/qagpt"
              element={<FlashcardList flashcards={flashcardsQAGPT} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

// const flashcardsList = ["quality assurance", "Ang Basics"];
const QA_FLASHCARDS = [
  {
    id: 1,
    question: "1.Jak prawidłowo opisać błąd?",
    answer:
      "Po koleji podajemy: tytuł, Priorytet, środowisko(testowe,produkcyjne)/wersja/zespół(kto nad tym pracował)/urządzenie(wersja), Opis, kroki jak wywołać(reprodukcji)(opis co należy zrobić aby wywołać błąd), Obecny rezultat - wytłumaczenie co dla nas jest błędem, Oczekiwany rezultat - opis jak aplikacja powinna się zachowywać, Załącznik(screeny, logi konsoli, filmik)",
  },
  {
    id: 2,
    question: "2.Dlaczego testujemy?",
    answer:
      "Testujemy oprogramowanie, aby sprawdzić, czy jest ono zgodne z założeniami biznesowymi, czy spełnia wymagania użytkownika oraz czy nie zawiera błędów.",
  },
  {
    id: 3,
    question: "Czym jest Sprint i ile z reguły trwa?",
    answer:
      "pirnt w zależności od firmy może trwać 2-3 tygodnie, ale nie dłużej niż miesiąc. Działając w Srcumie, pracujemy w sprintach, które nadają naszej pracy ramy czasowe. Jeden sprint się kończy i od razu zaczyna się drugi.",
  },
  {
    id: 4,
    question: "4.Różnica między retestem a regresją?",
    answer:
      "RETEST – to sprawdzenie, czy dana funkcjonalność, w której wykryłeś(-as) błąd, została poprawiona. Powtarzamy ten przypadek testowy, podczas którego wykryliśmy błąd. TESTY REGRESJI – jedne z najważniejszych testów. Sprawdzamy, czy poprawienie jednej funkcjonalności nie popsuło innej. Takie testy to nie powtórzenie przypadku testowego, a przetestowanie ponownie całego procesu.",
  },
  {
    id: 5,
    question: "5.Co zrobisz gdy programista mówi, że u niego wszystko działa?",
    answer:
      "Sprawdźmy, czy oboje macie tę samą wersję aplikacji testowej, jaka była data testów, a jaka data update’ów, pokaż live programiście, gdzie znalazłeś(-as) błąd i jakie kroki wykonałeś(-aś) do momentu znalezienia błędu.",
  },
  {
    id: 6,
    question: "Jak przetestujesz słuchawki bezprzewodowe?",
    answer: "???",
  },
  {
    id: 7,
    question: "7.Jakie typy testów wyróżniamy i opisz je?",
    answer:
      "-funkcjonalne (co oprogramowanie robi), polega na dokonaniu oceny funkcji, które powinien realizować dany moduł lub system. -niefunkcjonalne (jak oprogramowanie to robi) Testowanie niefunkcjonalne pozwala sprawdzić to, „jak dobrze” zachowuje się dany system. -strukturalne[biała skrzynka] (jak robi to co robi)-testowanie z uwzględnieniem wewnętrznej struktury -retesty(ponowne testowanie) -regresji-ponowne wykonanie przeprowadzonych wcześniej testów. Dzięki czemu możliwe jest sprawdzenie, czy nie pojawiły się nowe defekty w wyniku dodania kolejnych funkcjonalności czy zmian",
  },
  {
    id: 8,
    question: "8.Co otrzymamy dzięki zautomatyzowaniu wszystkich testów?",
    answer:
      "Testy automatyczne pozwalają na oszczędzenie czasu. Wykonują się szybciej niż w przypadku ich ręcznego przechodzenia przez testera manualnego. Warto automatyzować testy, które są powtarzalne i należy często je wykonywać, np. testy regresji i smoke testy. Warto również automatyzować testy, które są trudne i pracochłonne przy manualnym wykonaniu, np. testy z wieloma zbiorami danych.",
  },
  {
    id: 9,
    question: "9.Jakie znasz poziomy testów i opisz je?",
    answer:
      "-różne testy mogą mieć różną szczegółowość -wyższa warstwa, tym mniejsza szczegółowość testów 4.Testy akceptacyjne. 3.Testy systemowe 2.Testy integracyjne (wewnętrzne, zewnętrzne) 1.Testy modułowe (jednostkowe/unit)",
  },
  {
    id: 10,
    question: "10.Co to jest przypadek testowy?",
    answer:
      "Jest pojedynczym testem, który sprawdza jedno zachowanie systemu lub funkcję. Składa się z opisu, warunków wejściowych, krótkiego opisu działania, oczekiwanych wyników, wykonania testu i raportowania.",
  },
  {
    id: 11,
    question: "11.Jak przebiega cykl życia błędu?",
    answer:
      "1.Nowy błąd. 2.Przydzielony[Odroczony,odrzucony,powielony(powtórka)]-> błąd zostaje przydzielony osobie, która będzie się nim zajmować. 3.Otwarty -> [Analiza]. 4.Development. 5.Code review. 6.Przekazanie do retestów. 7.Retesty->[Ponowne otwarcie]. 8.Gotowe",
  },
  {
    id: 12,
    question:
      "12.Czym różni się testowanie funkcjonalne od testowania niefunkcjonalnego?",
    answer:
      "-funkcjonalne[Co system robi - wymagania biznesowe] (co oprogramowanie robi), polega na dokonaniu oceny funkcji, które powinien realizować dany moduł lub system. -niefunkcjonalne[jak działa system - wymagania wydajnościowe] (jak oprogramowanie to robi) Testowanie niefunkcjonalne pozwala sprawdzić to, „jak dobrze” zachowuje się dany system.",
  },
  {
    id: 13,
    question: "13.Jakie są rodzaje testowanie niefunkcjonalnego?",
    answer:
      "Testowanie niefunkcjonalne[testy jakościowe] rodzaje: -użyteczność (usability), -*bezpieczeństwo (security), -niezawodność (reliability), -*wydajność (performance), -utrzymywalność (maintainability), -przenaszalność (portability), -kompatybilność (compatibility)",
  },
  {
    id: 14,
    question: "14.W jaki sposób zgłębiałeś wiedzę z zakresu testowania?",
    answer: "Kursy Udemy, Tutoriale YT, Dokumentacja ISTQB",
  },
  {
    id: 15,
    question: "15.Jak przebiega cykl życia oprogramowania?",
    answer:
      "-Analiza wstępna, -Analiza szczegółowa, spis wymagań, -Projektowanie oprogramowania, -Wytwarzanie oprogramowania (kodowanie), -Integracje i testy, -Wdrożenie na produkcję, -Utrzymanie systemów, -Dalszy rozwój systemu, -Wyłączenie systemów",
  },
  {
    id: 16,
    question: "16.Wymień trzy dowolne z siedmiu zasad testowania i je opisz?",
    answer:
      "1.Testowanie ujawnia usterki, ale nie może dowieść ich braku. 2.Testowanie gruntowne jest niemożliwe->przetestowanie wszystkiego jest możliwe tylko w najprostszych przypadkach. 3.Wczesne testowanie oszczędza czas i pieniądze. 4.Kumulowanie się defektów. 5.Paradoks pestycydów->Niezmienianie testów może powodować nie wykrywanie nowych defektów. 6.Testowanie zależy od kontekstu. 7.Przekonanie o braku błędów jest błędem",
  },
  {
    id: 17,
    question: "17.Co to jest piramida testów?",
    answer:
      "-różne testy mogą mieć różną szczegółowość -wyższa warstwa, tym mniejsza szczegółowość testów, 4.Testy akceptacyjne. 3.Testy systemowe 2.Testy integracyjne (wewnętrzne, zewnętrzne) 1.Testy modułowe (jednostkowe)",
  },
  {
    id: 18,
    question: "18.Jakie znasz narzędzie do raportowania błędów?",
    answer: "Jira",
  },
  {
    id: 19,
    question: "19.Wymień wszystkie role w Scrumie?",
    answer:
      "Product owner -> Product ownerzy w Scrumie na podstawie poznanych wymagań klienta i firmy tworzą backlog produktu i zarządzają nim. Scrum master -> Scrum Master jest rolą, która spaja całość, i dba o prawidłowe realizowanie ram postępowania Scrum. Członkowie sespołu developerskiego -> Zespół deweloperski obejmuje ludzi, którzy wykonują pracę.",
  },
  {
    id: 20,
    question: "20.Czym jest backlog?",
    answer:
      "Backlog produktu to uporządkowana pod względem priorytetów, wynikająca z harmonogramu oraz wymagań lista prac dla zespołu programistycznego.",
  },
  {
    id: 21,
    question: "21.Co to są smoke testy?",
    answer:
      "-Smoke test -> Sprawdzamy najważniejszą fukncjonalność, jeżeli nie działą, nie sprawdzamy dalej",
  },
  {
    id: 22,
    question: "22.Czym są sanity testy?",
    answer:
      "Test kondycji wykonywany jest po wprowadzeniu poprawek i aktualizacji oprogramowania. Dzięki nim możliwe jest upewnienie się, że wcześniejsze błędy zostały naprawione i nie pojawiają się żadne dalsze problemy spowodowane wprowadzonymi zmianami.",
  },
  {
    id: 23,
    question: "23.Czym jest testowanie eksploracyjne?",
    answer:
      "Testowanie eksploracyjne to praktyczne podejście, w którym testerzy są zaangażowani w minimalne planowanie i maksymalne wykonanie testów.",
  },
  {
    id: 24,
    question: "24.Co powinno zawierać dobrze stworzone zgłoszenie z błędem?",
    answer:
      "-tytuł, -Priorytet, -środowisko(testowe,produkcyjne)/wersja/zespół(kto nad tym pracował)/urządzenie(wersja), -Opis, -kroki jak wywołać(opis co należy zrobić aby wywołać błąd), -Obecny rezultat - wytłumaczenie co dla nas jest błędem, -Oczekiwany rezultat - opis jak aplikacja powinna się zachowywać, -Załącznik(screeny, logi konsoli, filmik)",
  },
  {
    id: 25,
    question:
      "25.Co zrobisz gdy nie wiesz do końca czy uchwycone przez ciebie zdarzenie to błąd?",
    answer: "??",
  },
  {
    id: 26,
    question: "26.Jaka jest różnica między walidacją a weryfikację?",
    answer:
      "Weryfikacja sprawdza czy produkt jest zaprojektowany właściwie i odbywa się już od samego początku procesu rozwoju oprogramowania. Walidacja określa czy system posiada funkcje określone w wymaganiach a w szczególności czy spełniają one wymagania klienta.",
  },
  {
    id: 27,
    question: "27.Kiedy należy zakończyć testowanie oprogramowania?",
    answer:
      " -wystarczające pokrycie wymagań - wykonaliśmy poprawnie 95% testów pokrywających wszystkie wymagania, -zagęszczenie defektów - występuje nie więcej niż 5 defektów przypisanych do każdego z rozdziału wymagań, -koszt - testy trwają już 2 miesiące i nie możemy sobie pzwolić na dalsze testy, -ramy czasowe - testy są przewidziane na 3 miesiące i ani dnia dłużej, -ryzyko sprowadzone jest do akcpetowalnego poziomu - znamy błędy występujące w oprogramowaniu i je akceptujemy",
  },
  {
    id: 28,
    question: "28.Czym jest plan testów i co powinien zawierać?",
    answer:
      "Obejmuje: -identyfikowanie wymagań, -czynników ryzyka, -przypadków testowych, -środowisk do przetestowania, -celów biznesowych, -celów jakościowych, -harmonogramów testowania",
  },
  {
    id: 29,
    question: "29.Jakie są kategorię defektów?",
    answer:
      "Krytyczny -> Awaria systemu i/lub brak możliwości uruchomienia pewnych części aplikacji. Aplikacja wyłącza się w czasie uruchomienia ważnego procesu biznesowego. Poważny -> Produkt niezgodny z wymaganiami lub tylko zaimplementowany jedynie w części. Średni -> Pomniejsze i czasami akceptowalne problemy. Utrudnia pracę, ale jej nie blokuje. Trywialny -> Przykłady: Literówki, niepoprawne kolory na ekranie.",
  },
  {
    id: 30,
    question:
      "30.Wymień błąd któremu można podczepić priorytet niski a wpływ duży?",
    answer: "??",
  },
  {
    id: 31,
    question:
      "31.Wymień błąd któremu można podczepić priorytet wysoki a wpływ niski?",
    answer: "??",
  },
  {
    id: 32,
    question: "32.Czym jest testowanie użyteczności?",
    answer:
      "Testowanie użyteczności to próby oceny produktu wykonywane przez przyszłych użytkowników lub testerów, którzy ich reprezentują.",
  },
  {
    id: 33,
    question: "33.Który rodzaj testów jest najmniej kosztowny?",
    answer: "",
  },
  {
    id: 34,
    question: "34.Jakie narzędzia testerskie znasz bądź z jakich korzystałeś?",
    answer: "TestLink Jira Postman BrowserStack BrowserDevTools BrovsePlugins",
  },
  {
    id: 35,
    question: "35.Czym zajmuje się tester oprogramowania?",
    answer:
      "Rolą testera oprogramowania jest zweryfikowanie, czy stworzony program odpowiada wymaganiom postawionym przez osobę zamawiającą go.",
  },
  {
    id: 36,
    question: "36.Jakie są główne cele testów?",
    answer:
      "-dokonywanie oceny produktów pracy, takich jak: wymagania, historyjki użytkownika, projekt i kod; -sprawdzanie, czy zostały spełnione wszystkie wyspecyfikowane wymagania; -sprawdzanie, czy przedmiot testów jest kompletny i działa zgodnie z oczekiwaniami użytkowników i innych interesariuszy; -budowanie zaufania do poziomu jakości przedmiotu testów; -zapobieganie defektom; -wykrywanie defektów i awarii; -przestrzeganie wymagań wynikających z umów, przepisów prawa i norm/standardów i/lub -obniżanie poziomu ryzyka związanego z jakością oprogramowania (np. ryzyka wystąpienia niewykrytych wcześniej awarii podczas eksploatacji); -dostarczanie interesariuszom informacji niezbędnych do podejmowania świadomych decyzji",
  },
  {
    id: 37,
    question: "37.Jakie są korzyści z testowania automatycznego?",
    answer:
      "Testy automatyczne pozwalają na oszczędzenie czasu. Wykonują się szybciej niż w przypadku ich ręcznego przechodzenia przez testera manualnego. warto automatyzować testy, które są powtarzalne i należy często je wykonywać, np. testy regresji i smoke testy. Warto również automatyzować testy, które są trudne i  pracochłonne przy manualnym wykonaniu, np. testy z wieloma zbiorami danych.",
  },
  {
    id: 38,
    question: "38.Co to jest testowanie Ad hoc?",
    answer:
      "Testy przeprowadzane są bez tworzenia formalnego planu testu czy pisania przypadków testowych. Testy typu ad hoc pomagają planować zakres i czas trwania innych rodzajów testów, pomagają także testerom nauczyć się aplikacji przed rozpoczęciem zaplanowanych, innych rodzajów testów.",
  },
  {
    id: 39,
    question: "39.Co to jest testowanie białoskrzynkowe?",
    answer:
      "testy białoskrzynkowe, czyli strukturalne; -> Badają poprawność zaimpementowanego przez programistę kodu.",
  },
  {
    id: 40,
    question: "40.Co to jest testowanie czarnoskrzynkowe?",
    answer:
      "testy czarnoskrzynkowe, czyli funkcjonalne; -> Skupiają się na tym co dany komponent powinien robić. Istnieją różne techniki testowania czarnej skrzynki: -Partycjonowanie równoważności; -Analiza wartości brzegowych; -Wykresy przyczynowo-skutkowe.",
  },
  {
    id: 41,
    question: "41.Jak przeprowadzić testy kiedy nie ma dokumentacji?",
    answer:
      "Testowanie eksploracyjne — nieformalna technika projektowania testów, w której tester projektuje testy podczas ich wykonywania oraz wykorzystuje informacje zdobyte podczas testowania do projektowania nowych i lepszych testów.",
  },
  {
    id: 42,
    question: "42.Czym według Ciebie jest aplikacja internetowa?",
    answer:
      "to aplikacja uruchamiana w przeglądarce, która przez dostarczony interfejs ma dostarczać użytkownikowi jakąś konkretną usługę.",
  },
  {
    id: 43,
    question: "43.Czym jest autoryzacja a czym uwierzytelnienie?",
    answer:
      "Uwierzytelnianie (autentykacja) polega na sprawdzeniu tożsamości użytkownika. Autoryzacja (upoważnenie) na przyznaniu uprawnień do konkretnego zasobu.",
  },
  {
    id: 44,
    question:
      "44.Czym się różni walidacja po stronie klienta a walidacja po stronie serwera?",
    answer:
      "Np. Walidacja formularza przez JS po stronie klienta i AJAX po stronie serwera",
  },
  {
    id: 45,
    question: "45.Jakie znasz grupy kodów zwracane przez serwer?",
    answer:
      "Kody odpowiedzi 1XXX -> Informational 2XXX -> Success 3XXX -> Redirection(przekierowania) 4XXX -> Client Error 5XXX -> Server Error",
  },
  {
    id: 46,
    question: "46.Co to jest serwer proxy?",
    answer:
      "Serwer pośredniczący – oprogramowanie lub serwer z odpowiednim oprogramowaniem, które dokonuje pewnych operacji w imieniu użytkownika. Często utożsamiany z pośrednikiem HTTP.",
  },
  {
    id: 47,
    question:
      "47.SQL -> Stwórz zapytanie SQL, które wybierze wszystkie kolumny z tabeli o nazwie sklep?",
    answer: "??",
  },
  {
    id: 48,
    question:
      "SQL -> Stwórz zapytanie SQL, które zwróci tylko kolumnę produkty z tabeli o nazwie sklep bez duplikatów? ",
    answer: "??",
  },
  {
    id: 49,
    question:
      "49.SQL -> Stwórz zapytanie, które zwróci wszystkie tabele w oparciu o połączenie relacji bazując na poniższej grafice?",
    answer: "??",
  },
  {
    id: 50,
    question: "50.Co to jest testowanie dynamiczne?",
    answer:
      "testowanie modułu lub systemu na poziomie specyfikacji lub implementacji bez wykonywania tego oprogramowania, np. przeglądy lub analiza statyczna kodu. Czyli głównym założeniem jest testowanie bez uruchomienia aplikacji.",
  },
  {
    id: 51,
    question: "51.Co to jest testowanie GUI?",
    answer:
      "Testowanie GUI(UI) – proces testowania produktu, który sprawdza czy interfejs graficzny jest napisany zgodnie ze specyfikacją.",
  },
  {
    id: 52,
    question:
      "52.Co to jest testowanie gruntowne i czy powinno się jest stosować?",
    answer:
      "Podejście do testów, w którym zestaw testowy obejmuje wszystkie kombinacje wartości wejściowych i warunków wstępnych. Niemożliwe jest przetestowanie WSZYSTKIEGO – wszystkich kombinacji danych wejściowych i warunków wstępnych w oprogramowaniu.",
  },
  {
    id: 53,
    question: "53.Co to jest paradoks pestycydów?",
    answer:
      "odnosi się do sytuacji, w której ten sam zestaw testów powtarzany wielokrotnie na oprogramowaniu przestaje wykrywać błędy.",
  },
  {
    id: 54,
    question: "54.Co to jest test pozytywny?",
    answer:
      "test (w rozumieniu testerskim) zakończył się wynikiem „nie przeszedł”, czyli wykrył problem.",
  },
  {
    id: 55,
    question: "55.Czym jest test negatywny?",
    answer:
      "Testowanie, którego celem jest pokazanie, że oprogramowanie nie działa. Testowanie negatywne jest bardziej związane z postawą testerów, niż ze specyficznym podejściem czy techniką projektowania testów, np. testowanie z błędnymi wartościami wejściowymi lub wyjątkami.",
  },
  {
    id: 56,
    question:
      "56.Czy wiesz czym jest testowanie wydajności i znasz jakieś narzędzia do tego?",
    answer:
      "Należą do grupy testów niefunkcjonalnych, które – ogólnie rzecz biorąc – określają, JAK działa system. -Load Testing – Jak system radzi sobie w warunkach spodziewanego obciążenia (tj. obciążenie nie przekracza punktu krytycznego)? Pomaga to w identyfikacji wąskich gardeł, które zakłócają pracę aplikacji. -Stress Testing – Czy system jest zdolny do działania przy ekstremalnym obciążeniu? -Spike Testing – Jak aplikacja reaguje na nagłe, duże skoki obciążenia? -Endurance Testing – Czy oprogramowanie jest w stanie wytrzymać wzmożony ruch przez długi okres czasu? -Volume Testing – Jak na symulowane obciążenie reaguje system, który przechowuje i przetwarza dużą liczbę danych? -Scalability Testing – W jakim stopniu aplikacja jest skalowalna w wyniku zwiększonego ruchu?",
  },
  {
    id: 57,
    question: "57.Czym są testy alfa?",
    answer:
      "testowanie alfa: Symulowane lub rzeczywiste testy produkcyjne przeprowadzane przez potencjalnych użytkowników lub niezależny zespól testowy, przeprowadzane u producenta, ale bez udziału wytwórców oprogramowania.",
  },
  {
    id: 58,
    question: "58.Czym jest scenariusz testowy?",
    answer:
      "Opisuje serię przypadków testowych, które składają się na pełne sprawdzenie danej funkcjonalności. Scenariusz może opisywać rożne sekwencje działań i różne dane wejściowe, aby uwzględnić różne warunki, w których system może działać.",
  },
  {
    id: 59,
    question:
      "59.Co oznaczają kryteria wejścia / wyjścia w testowaniu oprogramowania?",
    answer:
      "Kryteria wejścia określają warunki wstępne, które muszą zostać spełnione przed rozpoczęciem danej czynności Kryteria wyjścia określają warunki, które muszą zostać spełnione, aby można było uznać wykonywanie danej czynności za zakończone.",
  },
  {
    id: 60,
    question: "60.Czym jest API?",
    answer:
      "Interfejs służy do łączenia aplikacji, dzięki temu może wykonać funkcję która jest zbudowana wokół udostępnionych danych. Wysyłanie zapytanie do API -> Api pobiera dane z bazy -> Api zwaraca zasowy -> zasoby są mapowane na FrontEndzie",
  },
  {
    id: 61,
    question: "61.Co to jest REST?",
    answer:
      "Representation State Transfer Metoda projektowania API żeby zachowywała się w ustalony sposób 1.Oddzielenie klienta i serweru 2.Brak stanu 3.Cashowalność[Cashable] -> unikanie zbyt wielu requestow, wrzucenie danych w pamięć aby nie pobierać wiele razy 4.Spójny interfejs  Są przeznaczone do wykonywania żądań i otrzymywania odpowiedzi za pomocą protokołu HTTP. Rest narzuca infrastrukturę",
  },
  {
    id: 62,
    question: "62.Jaka według Ciebie jest rola testera w zespole?",
    answer:
      "dbanie o utrzymanie jakości powstającego produktu i samego procesu jego powstawania",
  },
  {
    id: 63,
    question: "63.Czym są metodyki zwinne?",
    answer:
      "Metodyki zwinne skupiają się na elastycznym podejściu i iteracyjnej realizacji projektu, zakładając, że nie wszystko można przewidzieć i zaplanować, a ważniejsze jest reagowanie na zmiany niż trzymanie się z góry ustalonego planu.",
  },
  {
    id: 64,
    question: "64.Czym jest konsola przeglądarkowa i co można w niej znaleźć?",
    answer: "DevTools Browsers",
  },
  {
    id: 65,
    question: "65.Co można zobaczyć w zakładce Network w przeglądarce?",
    answer:
      "-status odpowiedzi na zapytanie -typ i rozmiar przesyłanego pliku -czas odpowiedzi i dostarczenia zasobu -jakie zasoby otrzymujemy od serwera -metodę przesyłania pakietów (np: http/1, http/2)",
  },
  {
    id: 66,
    question: "66.Proszę omówić testy systemowe?",
    answer:
      "Testowanie systemowe skupia się na ogólnym zachowaniu i możliwościach całego systemu lub produktu. Często obejmuje również kompleksowe testowanie funkcjonalne wszystkich zadań, jakie system ten może wykonywać, oraz testowanie niefunkcjonalne charakterystyk jakościowych.",
  },
  {
    id: 67,
    question:
      "67.Jakie defekty jesteśmy w stanie wykryć za pomocą testów integracyjnych?",
    answer:
      "błędy w interfejsach oraz interakcjach między poszczególnymi modułami bądź systemami.",
  },
  {
    id: 68,
    question: "68.Jak wygląda proces testowy w środowisku scrumowym?",
    answer:
      "Rolą testera w Scrumie jest więc nie tylko testowanie, lecz także dbanie o utrzymanie jakości powstającego produktu i samego procesu jego powstawania – na przykład poprzez doskonalenie Backlogu produktu",
  },
  {
    id: 69,
    question: "69.Jakie znasz podejścia szacowania testów?",
    answer:
      "Istnieją dwa podejścia do szacowania pracochłonności testów: -podejście oparte na metrykach: szacowanie pracochłonności testów bazując na pomiarach minionych lub podobnych projektów lub bazujące na typowych wartościach -podejście oparte na ekspertach: szacowanie zadań przez ich przyszłych wykonawców lub przez ekspertów",
  },
  {
    id: 70,
    question: "70.Co to jest testowanie oprogramowania?",
    answer:
      "proces weryfikacji zgodności działania aplikacji z wymaganiami funkcjonalnymi.",
  },
  {
    id: 71,
    question: "71.Jakie są głównie zadania testera?",
    answer:
      "rozwijanie infrastruktury testowej poprzez tworzenie, przeprowadzanie i utrzymywanie testów manualnych dla konkretnego oprogramowania. Testerzy manualni dokumentują przypadki testowe, analizują je, tworzą dokumentację techniczną i raportują błędy.",
  },
  {
    id: 72,
    question: "72.Proszę przetestować mechanizm rejestracji w systemie Github?",
    answer: "??",
  },
  {
    id: 73,
    question:
      "73.Jakie atrybuty jesteś w stanie przetestować za pomocą testów niefunkcjonalnych?",
    answer:
      "wydajność, skalowalność, bezpieczeństwo, pielęgnowalność czy kompatybilność.",
  },
  {
    id: 74,
    question: "74.Czym jest ładunek w zapytaniu?",
    answer: "Ładunek to rzeczywiste informacje przesyłane za pomocą protokołu.",
  },
  {
    id: 75,
    question: "75.Czym jest CRUD?",
    answer:
      "CRUD create, read, update, delete GET -> Pobiera konkretne zasoby POST -> Pozwala np. dodać posta, wysłać wiadomość PUT -> służy do aktualizacji zasobów DELETE ",
  },
  {
    id: 76,
    question: "76.Czym się różni metoda POST od PUT?",
    answer:
      "POST -> Pozwala np. dodać posta, wysłać wiadomość PUT -> służy do aktualizacji zasobów",
  },
  {
    id: 77,
    question: "77.Co zawarłbyś w raporcie z testów?",
    answer:
      "Raport o postępie testów -> status, stopień realizacji planów, ewentualne utrudnienia, plany na kolejne testy, jakość testowanego systemu Sumaryczny raport testów -> podsumowanie - przebieg testów, ewentualne odstepstwa od założonego wcześniej planu, końcowy status, zmierzona jakość systemu, pojawiające sie problemy, miary i ryzyka.",
  },
  {
    id: 78,
    question: "78.Co to jest awaria?",
    answer:
      "Odchyłka modułu lub systemu od oczekiwanego zachowania lub rezultatu działania.",
  },
  {
    id: 79,
    question: "79.Gdzie w przeglądarce można odczytać błąd 500?",
    answer: "Zakładka network",
  },
  {
    id: 80,
    question: "80.Co to jest formalne testowanie?",
    answer:
      "testowanie formalne: testowanie w oparciu o przypadki testowe, testowanie w oparciu o listę kontrolną; (lista rzeczy do zapamiętania wraz z możliwością odhaczenia, czy pewna rzecz się wydarzyła, czy też nie)",
  },
  {
    id: 81,
    question: "81.Co może zawierać raport z testów",
    answer:
      "-id,tytuł,autor -cel -Nazwa i wersja systemu -> określenie obiektu testów -Kilka zdań ogólnego podsumowania -Odstępstwa od założonego planu i ich przyczyny -Wyniki testów i metryki -> planowane/wyknoane, zaliczone/niezaliczone/zablokowane, liczba defektów z priorytetami, dystrybucja defektów(gdzie i ile), lista otwartych defektów. -Podsumowanie aktywności-> czas wykonania, daty startu i końca, koszty,zasoby -Ocena kryteriów wejścia i wyjścia -Wnioski na przyszłość",
  },
];
const ANGBS_FLASHCARDS = [
  {
    id: 1,
    question: "(1)1.co robiłeś wczoraj o 8 wieczorem?",
    answer: "-What were you doing at 8 last night?",
  },
  {
    id: 2,
    question: "(1)2.Mogę otworzyć okno?",
    answer: "-Shall I open the window?",
  },
  {
    id: 3,
    question: "(1)3.Już widziałem ten film.",
    answer: "-I have already seen this film.",
  },
  {
    id: 4,
    question: "(1)4.Co zamierzasz robić dzis wieczorem?",
    answer: "-What are you going to do tonight?",
  },
  {
    id: 5,
    question: "(1)5.Jechałem szybko kiedy zatrzymała mnie policja.",
    answer: "-I was driving fast when the police stopped me.",
  },
  {
    id: 6,
    question: "(1)6.Z kim pojechałeś na wakacje?",
    answer: "-Who did you go on holiday with?",
  },
  {
    id: 7,
    question: "(1)7.Jadę pod namiot w lipcu.",
    answer: "-I'm going camping in July.",
  },
  {
    id: 8,
    question: "(1)8.Czy skończyłeś już pracę domową?",
    answer: "-Have you finished your homework yet?",
  },
  {
    id: 9,
    question: "(1)9.Pośpiesz się spóźnisz się.",
    answer: "-Hurry up! You're going to be late!",
  },
  {
    id: 10,
    question: "(1)10.Pomogę ci z twoim bagażem.",
    answer: "-I'll help you with your luggage.",
  },
  {
    id: 11,
    question: "(2)1.Nie musisz odkurzać dywanu.",
    answer: "-You don't have to vacuum the carpet.",
  },
  {
    id: 12,
    question: "(2)2.Gdybym miał duzo pieniędzy, kupiłbym nowy samochód.",
    answer: "-If I had a lot of money, I would buy a new car.",
  },
  {
    id: 13,
    question: "(2)3.Nie wolno ci się spóźnić do pracy.",
    answer: "-You mustn't be late for work.",
  },
  {
    id: 14,
    question: "(2)4.Jeśli teraz nie wyjdziemy, spóźnimy się na autobus.",
    answer: "-If we don't leave now, we will miss the bus.",
  },
  {
    id: 15,
    question: "(2)5.Na twoim miejscu przeprowadziłbym się do Madrytu.",
    answer: "-If I were you, I would move to Madrid.",
  },
  {
    id: 16,
    question: "(2)6.Myślę o kupieniu nowego domu.",
    answer: "-I'm thinking of buying a new house.",
  },
  {
    id: 17,
    question: "(2)7.Czy ona była w Nowym Jorku?",
    answer: "-Has she been to New York?",
  },
  {
    id: 18,
    question: "(2)8.On wyjął portfel ze swojej kieszeni.",
    answer: "-He took a wallet out of his pocket.",
  },
  {
    id: 19,
    question: "(2)9.On pojechał do Paryża. Wróci w poniedziałek.",
    answer: "-He's gone to Paris. He will be back on Monday.",
  },
  {
    id: 20,
    question: "(2)10.Pomógłbym ci, gdybym miał czas.",
    answer: "-I will help you if I have time.",
  },
  {
    id: 21,
    question: "(3)1.Jak długo jesteś żonaty?",
    answer: "-How long have you been married?",
  },
  {
    id: 22,
    question: "(3)2.Powiedziała, że do mnie zadzwoni.",
    answer: "-She said that she would phone me.",
  },
  {
    id: 23,
    question: "(3)3.Jej ubrania zostały zaprojektowane przez Channel.",
    answer: "-Her clothes were designed by Channel.",
  },
  {
    id: 24,
    question: "(3)4.Nie jem wystarczająco dużo warzyw.",
    answer: "-I don't eat enough vegetables.",
  },
  {
    id: 25,
    question: "(3)5.Tom wyszedł zanim przyszła Jane.",
    answer: "-Tom had left when Jane arrived.",
  },
  {
    id: 26,
    question: "(3)6.Oni mieszkają tu od 5 lat.",
    answer: "-They have lived here for 5 years.",
  },
  {
    id: 27,
    question:
      "(3)7.Nie poznałem mojej byłej dziewczyny, ponieważ dużo schudła.",
    answer:
      "-I didn't recognize my ex-girlfriend because she had lost a lot of weight.",
  },
  {
    id: 28,
    question: "(3)8.Ten obraz został namalowany przez Picassa.",
    answer: "-This picture was painted by Picasso.",
  },
  {
    id: 29,
    question: "(3)9.Powinieneś przestać paclić.",
    answer: "-You should stop smoking.",
  },
  {
    id: 30,
    question: "(3)10.On zna swoją dziewczynę od czerwca.",
    answer: "-He has known his girlfriend since June.",
  },
  {
    id: 31,
    question: "(4)1.Padał śnieg, kiedy wysiadłem z autobusu.",
    answer: "-It was snowing when I got off the bus.",
  },
  {
    id: 32,
    question:
      "(4)2.Wyjechaliśmy na weekend i zatrzymaliśmy się w 5 gwiazdkowym hotelu.",
    answer: "-We went away for the weekend and stayed in a five-star hotel.",
  },
  {
    id: 33,
    question: "(4)3.Zawsze odwiedzamy naszą ciocię w Swięta Bożego Narodzenia.",
    answer: "-We always visit our aunt at Christmas.",
  },
  {
    id: 34,
    question: "(4)4.Spytal mnie, czy mógłbym pożyczyć mu pieniądze.",
    answer: "-He asked me if I could lend him some money.",
  },
  {
    id: 35,
    question: "(4)5.Ona była wyczerpana po długiej podróży.",
    answer: "-She was exhausted after the long journey.",
  },
  {
    id: 36,
    question: "(4)6.Nie znoszę wykonywać prac domowych.",
    answer: "- I hate doing housework.",
  },
  {
    id: 37,
    question: "(4)7.Nie powinnaś tego robić.",
    answer: "-You shouldn't have done that.",
  },
  {
    id: 38,
    question: "(4)8.On jest przystojny jak jego szwagier.",
    answer: "-He is as handsome as his brother-in-law.",
  },
  {
    id: 39,
    question: "(4)9.Najlepiej dostać się tam promem.",
    answer: "-The best way to get there is by ferry.",
  },
  {
    id: 40,
    question: "(4)10.Spytali mnie, czy potrafię gotować.",
    answer: "-They asked me if I could cook.",
  },
  {
    id: 41,
    question: "(5)1.Jechałem szybko kiedy zatrzymała mnie policja.",
    answer: "-I was driving fast when the police stopped me.",
  },
  {
    id: 42,
    question: "(5)2.Nie znoszę wykonywać prac domowych.",
    answer: "- I hate doing housework.",
  },
  {
    id: 43,
    question: "(5)3.On wyjął portfel ze swojej kieszeni.",
    answer: "-He took a wallet out of his pocket.",
  },
  {
    id: 44,
    question: "(5)4.Ona była wyczerpana po długiej podróży.",
    answer: "-She was exhausted after the long journey.",
  },
  {
    id: 45,
    question: "(5)5.On jest tak przystojny jak jego szwagier.",
    answer: "-He is as handsome as his brother-in-law.",
  },
  {
    id: 46,
    question: "(5)6.gdybym miał tak dużo pieniędzy, kupiłbym nowy samochód.",
    answer: "-If I had a lot of money, I would buy a new car.",
  },
  {
    id: 47,
    question: "(5)7.Na twoim miejscu przeprowadziłbym się do Madrytu.",
    answer: "-If I were you, I would move to Madrid.",
  },
  {
    id: 48,
    question: "(5)8.Co robiłeś wczoraj o 8 wieczorem?",
    answer: "-What were you doing at 8 last night?",
  },
  {
    id: 49,
    question: "(5)9.Jadę pod namiot w lipcu.",
    answer: "-I'm going camping in July.",
  },
  {
    id: 50,
    question: "(5)10.Pośpiesz się! Spóźnisz się!",
    answer: "-Hurry up! You're going to be late!",
  },
  {
    id: 51,
    question: "(6)1.Wolałbym zostać w domu.",
    answer: "-I'd rather stay at home.",
  },
  {
    id: 52,
    question: "(6)2.Gdybym znał odpowiedź, to bym jej nie pytał.",
    answer: "-If I had known the answer, I wouldn't have asked her.",
  },
  {
    id: 53,
    question: "(6)3.Ale znakomity występ!",
    answer: "-What a brilliant performance!",
  },
  {
    id: 54,
    question: "(6)4.Nie miałbym nic przeciwko zamieszkaniu w Hiszpanii.",
    answer: "-I wouldn't mind living in Spain",
  },
  {
    id: 55,
    question:
      "(6)5.Kiedy dostarłem na lotnisko zdałem sobie sprawę, że zostawiłem mój paszport w domu.",
    answer:
      "-When I got to the airport, I realized I had left my passport at home.",
  },
  {
    id: 56,
    question:
      "(6)6.Nie miałem wystarczająco dużo czasu, żeby spakować moją walizkę.",
    answer: "- I didn't have enough time to pack my suitcase.",
  },
  {
    id: 57,
    question:
      "(6)7.Zanim przyjechałem na stację kolejową, pociąg juz odjechał.",
    answer:
      "-By the time I got to the railway station, the train had already left.",
  },
  {
    id: 58,
    question: "(6)8.Zima to najlepszy czas, żeby pojechać na narty.",
    answer: "--Winter is the best time to go skiing.",
  },
  {
    id: 59,
    question: "(6)9.Telefony komórkowe nie są dozwolone w teatrze.",
    answer: "-Mobile phones are not allowed at the theatre.",
  },
  {
    id: 60,
    question: "(6)10.Czekam na ciebie już pól godziny",
    answer: "-I have been waiting for you for half an hour now.",
  },
  {
    id: 61,
    question: "(7)1.W końcu mam swój własny komputer.",
    answer: "-I have got my own computer at last.",
  },
  {
    id: 62,
    question:
      "(7)2.Becky była jedyną osobą w klasie, która znała prawidłową odpowiedź.",
    answer:
      "-Becky was the only person in the class who knew the correct answer.",
  },
  {
    id: 63,
    question: "(7)3.Chciałbym zwrócić te buty.",
    answer: "-I'd like to return these shoes.",
  },
  {
    id: 64,
    question: "(7)4.Lubimy podróżować samolotem.",
    answer: "-We like travelling by plane.",
  },
  {
    id: 65,
    question: "(7)5.Czy warto zwiedzić muzeum Brytyjskie?",
    answer: "-Is the British Museum worth visiting?",
  },
  {
    id: 66,
    question:
      "(7)6.Jakie jest najbardziej niebezpieczne miejsce, w którym byłeś?",
    answer: "-What's the most dangerous place you have ever been to?",
  },
  {
    id: 67,
    question: "(7)7.Chciałbym kupić mieszkanie w Holandii.",
    answer: "-I'd like to buy a flat in the Netherlands.",
  },
  {
    id: 68,
    question: "(7)8.Doceniliśmy ich gościnność, gdy zaprosili nas na kolację.",
    answer: "-We appreciated their hospitality when they invited us to dinner.",
  },
  {
    id: 69,
    question: "(7)9.Nasz plan nie ma sensu.",
    answer: "-Our plan doesn't make sense.",
  },
  {
    id: 70,
    question: "(7)10.Zatrzymamy się w pensjonacie czy hotelu?",
    answer: "-Shall we stay at a guest house or at a hotel?",
  },
];

const ERP_FLASHCARDS = [
  {
    id: 1,
    question: "1.ERP",
    answer:
      "System ERP (z ang. Enterprise Resources Planning) to oprogramowanie do kompleksowego zarządzania przedsiębiorstwem. Kryjące się w skrócie ERP „planowanie zasobów” obejmuje kontrolę i zarządzanie najważniejszymi zasobami i procesami w niemal każdym obszarze biznesowym firmy: sprzedaż, finanse, księgowość, magazyn, kadry, zaopatrzenie, produkcja itd.",
  },
  {
    id: 2,
    question: "2.System ERP - jego główne obszary biznesowe",
    answer: "[-Finanse i raportowaniem] [-Sprzedaż] [-Produkcja] [-HR i Admin]",
  },
  {
    id: 3,
    question: "3.Finanse i raportowanie",
    answer:
      "[Business Inteligence] [Księgowość i podatki] [E-sprawozdania] [Integracja z bankami]",
  },
  {
    id: 4,
    question: "4.Sprzedaż",
    answer:
      "[Sprzedaż internetowa] [Magazyn] [POS i obsługa klienta] [Sprzedaż tradycyjna] [Wysyłka]",
  },
  {
    id: 5,
    question: "5.Produkcja",
    answer:
      "[Asset Tracking] [MES] [Kontrola jakości] [Planowanie APS] [Program zarządzania produkcją]",
  },
  {
    id: 6,
    question: "6.HR i Admin",
    answer:
      "[Czas pracy RCP] [Obieg spraw i dokumentów] [Płace i składki] [HRM] [Wielofirmowość]",
  },
];

const QAGPT_FLASHCARDS = [
  {
    id: 1,
    question: "1.Jak prawidłowo opisać błąd?",
    answer:
      "1.Tytuł błędu, 2.Opis blędu, 3.Kroki reprodukcyjne, 4.Oczekiwane zachowanie, 5.Aktualne zachowanie, 6.Środowisko/testowane konfiguracje, 7.Załączniki, 8.Priorytet i ważność, 9.Inne Informacje ",
  },
  {
    id: 2,
    question: "2.Dlaczego testujemy?",
    answer:
      "Testujemy oprogramowanie, aby sprawdzić, czy jest ono zgodne z założeniami biznesowymi, czy spełnia wymagania użytkownika oraz czy nie zawiera błędów.",
  },
  {
    id: 3,
    question: "Czym jest Sprint i ile z reguły trwa?",
    answer:
      "pirnt w zależności od firmy może trwać 2-3 tygodnie, ale nie dłużej niż miesiąc. Działając w Srcumie, pracujemy w sprintach, które nadają naszej pracy ramy czasowe. Jeden sprint się kończy i od razu zaczyna się drugi.",
  },
  {
    id: 4,
    question: "4.Różnica między retestem a regresją?",
    answer:
      "RETEST – to sprawdzenie, czy dana funkcjonalność, w której wykryłeś(-as) błąd, została poprawiona. Powtarzamy ten przypadek testowy, podczas którego wykryliśmy błąd. TESTY REGRESJI – jedne z najważniejszych testów. Sprawdzamy, czy poprawienie jednej funkcjonalności nie popsuło innej. Takie testy to nie powtórzenie przypadku testowego, a przetestowanie ponownie całego procesu.",
  },
  {
    id: 5,
    question: "5.Co zrobisz gdy programista mówi, że u niego wszystko działa?",
    answer:
      "Sprawdźmy, czy oboje macie tę samą wersję aplikacji testowej, jaka była data testów, a jaka data update’ów, pokaż live programiście, gdzie znalazłeś(-as) błąd i jakie kroki wykonałeś(-aś) do momentu znalezienia błędu.",
  },
  {
    id: 6,
    question: "Jak przetestujesz słuchawki bezprzewodowe?",
    answer: "???",
  },
  {
    id: 7,
    question: "7.Jakie typy testów wyróżniamy i opisz je?",
    answer:
      "-funkcjonalne (co oprogramowanie robi), polega na dokonaniu oceny funkcji, które powinien realizować dany moduł lub system. -niefunkcjonalne (jak oprogramowanie to robi) Testowanie niefunkcjonalne pozwala sprawdzić to, „jak dobrze” zachowuje się dany system. -strukturalne[biała skrzynka] (jak robi to co robi)-testowanie z uwzględnieniem wewnętrznej struktury -retesty(ponowne testowanie) -regresji-ponowne wykonanie przeprowadzonych wcześniej testów. Dzięki czemu możliwe jest sprawdzenie, czy nie pojawiły się nowe defekty w wyniku dodania kolejnych funkcjonalności czy zmian",
  },
  {
    id: 8,
    question: "8.Co otrzymamy dzięki zautomatyzowaniu wszystkich testów?",
    answer:
      "Testy automatyczne pozwalają na oszczędzenie czasu. Wykonują się szybciej niż w przypadku ich ręcznego przechodzenia przez testera manualnego. Warto automatyzować testy, które są powtarzalne i należy często je wykonywać, np. testy regresji i smoke testy. Warto również automatyzować testy, które są trudne i pracochłonne przy manualnym wykonaniu, np. testy z wieloma zbiorami danych.",
  },
  {
    id: 9,
    question: "9.Jakie znasz poziomy testów i opisz je?",
    answer:
      "-różne testy mogą mieć różną szczegółowość -wyższa warstwa, tym mniejsza szczegółowość testów 4.Testy akceptacyjne. 3.Testy systemowe 2.Testy integracyjne (wewnętrzne, zewnętrzne) 1.Testy modułowe (jednostkowe/unit)",
  },
  {
    id: 10,
    question: "10.Co to jest przypadek testowy?",
    answer:
      "Jest pojedynczym testem, który sprawdza jedno zachowanie systemu lub funkcję. Składa się z opisu, warunków wejściowych, krótkiego opisu działania, oczekiwanych wyników, wykonania testu i raportowania.",
  },
  {
    id: 11,
    question: "11.Jak przebiega cykl życia błędu?",
    answer:
      "1.Nowy błąd. 2.Przydzielony[Odroczony,odrzucony,powielony(powtórka)]-> błąd zostaje przydzielony osobie, która będzie się nim zajmować. 3.Otwarty -> [Analiza]. 4.Development. 5.Code review. 6.Przekazanie do retestów. 7.Retesty->[Ponowne otwarcie]. 8.Gotowe",
  },
  {
    id: 12,
    question:
      "12.Czym różni się testowanie funkcjonalne od testowania niefunkcjonalnego?",
    answer:
      "-funkcjonalne[Co system robi - wymagania biznesowe] (co oprogramowanie robi), polega na dokonaniu oceny funkcji, które powinien realizować dany moduł lub system. -niefunkcjonalne[jak działa system - wymagania wydajnościowe] (jak oprogramowanie to robi) Testowanie niefunkcjonalne pozwala sprawdzić to, „jak dobrze” zachowuje się dany system.",
  },
  {
    id: 13,
    question: "13.Jakie są rodzaje testowanie niefunkcjonalnego?",
    answer:
      "Testowanie niefunkcjonalne[testy jakościowe] rodzaje: -użyteczność (usability), -*bezpieczeństwo (security), -niezawodność (reliability), -*wydajność (performance), -utrzymywalność (maintainability), -przenaszalność (portability), -kompatybilność (compatibility)",
  },
  {
    id: 14,
    question: "14.W jaki sposób zgłębiałeś wiedzę z zakresu testowania?",
    answer: "Kursy Udemy, Tutoriale YT, Dokumentacja ISTQB",
  },
  {
    id: 15,
    question: "15.Jak przebiega cykl życia oprogramowania?",
    answer:
      "-Analiza wstępna, -Analiza szczegółowa, spis wymagań, -Projektowanie oprogramowania, -Wytwarzanie oprogramowania (kodowanie), -Integracje i testy, -Wdrożenie na produkcję, -Utrzymanie systemów, -Dalszy rozwój systemu, -Wyłączenie systemów",
  },
  {
    id: 16,
    question: "16.Wymień trzy dowolne z siedmiu zasad testowania i je opisz?",
    answer:
      "1.Testowanie ujawnia usterki, ale nie może dowieść ich braku. 2.Testowanie gruntowne jest niemożliwe->przetestowanie wszystkiego jest możliwe tylko w najprostszych przypadkach. 3.Wczesne testowanie oszczędza czas i pieniądze. 4.Kumulowanie się defektów. 5.Paradoks pestycydów->Niezmienianie testów może powodować nie wykrywanie nowych defektów. 6.Testowanie zależy od kontekstu. 7.Przekonanie o braku błędów jest błędem",
  },
  {
    id: 17,
    question: "17.Co to jest piramida testów?",
    answer:
      "-różne testy mogą mieć różną szczegółowość -wyższa warstwa, tym mniejsza szczegółowość testów, 4.Testy akceptacyjne. 3.Testy systemowe 2.Testy integracyjne (wewnętrzne, zewnętrzne) 1.Testy modułowe (jednostkowe)",
  },
  {
    id: 18,
    question: "18.Jakie znasz narzędzie do raportowania błędów?",
    answer: "Jira",
  },
  {
    id: 19,
    question: "19.Wymień wszystkie role w Scrumie?",
    answer:
      "Product owner -> Product ownerzy w Scrumie na podstawie poznanych wymagań klienta i firmy tworzą backlog produktu i zarządzają nim. Scrum master -> Scrum Master jest rolą, która spaja całość, i dba o prawidłowe realizowanie ram postępowania Scrum. Członkowie sespołu developerskiego -> Zespół deweloperski obejmuje ludzi, którzy wykonują pracę.",
  },
  {
    id: 20,
    question: "20.Czym jest backlog?",
    answer:
      "Backlog produktu to uporządkowana pod względem priorytetów, wynikająca z harmonogramu oraz wymagań lista prac dla zespołu programistycznego.",
  },
  {
    id: 21,
    question: "21.Co to są smoke testy?",
    answer:
      "-Smoke test -> Sprawdzamy najważniejszą fukncjonalność, jeżeli nie działą, nie sprawdzamy dalej",
  },
  {
    id: 22,
    question: "22.Czym są sanity testy?",
    answer:
      "Test kondycji wykonywany jest po wprowadzeniu poprawek i aktualizacji oprogramowania. Dzięki nim możliwe jest upewnienie się, że wcześniejsze błędy zostały naprawione i nie pojawiają się żadne dalsze problemy spowodowane wprowadzonymi zmianami.",
  },
  {
    id: 23,
    question: "23.Czym jest testowanie eksploracyjne?",
    answer:
      "Testowanie eksploracyjne to praktyczne podejście, w którym testerzy są zaangażowani w minimalne planowanie i maksymalne wykonanie testów.",
  },
  {
    id: 24,
    question: "24.Co powinno zawierać dobrze stworzone zgłoszenie z błędem?",
    answer:
      "-tytuł, -Priorytet, -środowisko(testowe,produkcyjne)/wersja/zespół(kto nad tym pracował)/urządzenie(wersja), -Opis, -kroki jak wywołać(opis co należy zrobić aby wywołać błąd), -Obecny rezultat - wytłumaczenie co dla nas jest błędem, -Oczekiwany rezultat - opis jak aplikacja powinna się zachowywać, -Załącznik(screeny, logi konsoli, filmik)",
  },
  {
    id: 25,
    question:
      "25.Co zrobisz gdy nie wiesz do końca czy uchwycone przez ciebie zdarzenie to błąd?",
    answer: "??",
  },
  {
    id: 26,
    question: "26.Jaka jest różnica między walidacją a weryfikację?",
    answer:
      "Weryfikacja sprawdza czy produkt jest zaprojektowany właściwie i odbywa się już od samego początku procesu rozwoju oprogramowania. Walidacja określa czy system posiada funkcje określone w wymaganiach a w szczególności czy spełniają one wymagania klienta.",
  },
  {
    id: 27,
    question: "27.Kiedy należy zakończyć testowanie oprogramowania?",
    answer:
      " -wystarczające pokrycie wymagań - wykonaliśmy poprawnie 95% testów pokrywających wszystkie wymagania, -zagęszczenie defektów - występuje nie więcej niż 5 defektów przypisanych do każdego z rozdziału wymagań, -koszt - testy trwają już 2 miesiące i nie możemy sobie pzwolić na dalsze testy, -ramy czasowe - testy są przewidziane na 3 miesiące i ani dnia dłużej, -ryzyko sprowadzone jest do akcpetowalnego poziomu - znamy błędy występujące w oprogramowaniu i je akceptujemy",
  },
  {
    id: 28,
    question: "28.Czym jest plan testów i co powinien zawierać?",
    answer:
      "Obejmuje: -identyfikowanie wymagań, -czynników ryzyka, -przypadków testowych, -środowisk do przetestowania, -celów biznesowych, -celów jakościowych, -harmonogramów testowania",
  },
  {
    id: 29,
    question: "29.Jakie są kategorię defektów?",
    answer:
      "Krytyczny -> Awaria systemu i/lub brak możliwości uruchomienia pewnych części aplikacji. Aplikacja wyłącza się w czasie uruchomienia ważnego procesu biznesowego. Poważny -> Produkt niezgodny z wymaganiami lub tylko zaimplementowany jedynie w części. Średni -> Pomniejsze i czasami akceptowalne problemy. Utrudnia pracę, ale jej nie blokuje. Trywialny -> Przykłady: Literówki, niepoprawne kolory na ekranie.",
  },
  {
    id: 30,
    question:
      "30.Wymień błąd któremu można podczepić priorytet niski a wpływ duży?",
    answer: "??",
  },
  {
    id: 31,
    question:
      "31.Wymień błąd któremu można podczepić priorytet wysoki a wpływ niski?",
    answer: "??",
  },
  {
    id: 32,
    question: "32.Czym jest testowanie użyteczności?",
    answer:
      "Testowanie użyteczności to próby oceny produktu wykonywane przez przyszłych użytkowników lub testerów, którzy ich reprezentują.",
  },
  {
    id: 33,
    question: "33.Który rodzaj testów jest najmniej kosztowny?",
    answer: "",
  },
  {
    id: 34,
    question: "34.Jakie narzędzia testerskie znasz bądź z jakich korzystałeś?",
    answer: "TestLink Jira Postman BrowserStack BrowserDevTools BrovsePlugins",
  },
  {
    id: 35,
    question: "35.Czym zajmuje się tester oprogramowania?",
    answer:
      "Rolą testera oprogramowania jest zweryfikowanie, czy stworzony program odpowiada wymaganiom postawionym przez osobę zamawiającą go.",
  },
  {
    id: 36,
    question: "36.Jakie są główne cele testów?",
    answer:
      "-dokonywanie oceny produktów pracy, takich jak: wymagania, historyjki użytkownika, projekt i kod; -sprawdzanie, czy zostały spełnione wszystkie wyspecyfikowane wymagania; -sprawdzanie, czy przedmiot testów jest kompletny i działa zgodnie z oczekiwaniami użytkowników i innych interesariuszy; -budowanie zaufania do poziomu jakości przedmiotu testów; -zapobieganie defektom; -wykrywanie defektów i awarii; -przestrzeganie wymagań wynikających z umów, przepisów prawa i norm/standardów i/lub -obniżanie poziomu ryzyka związanego z jakością oprogramowania (np. ryzyka wystąpienia niewykrytych wcześniej awarii podczas eksploatacji); -dostarczanie interesariuszom informacji niezbędnych do podejmowania świadomych decyzji",
  },
  {
    id: 37,
    question: "37.Jakie są korzyści z testowania automatycznego?",
    answer:
      "Testy automatyczne pozwalają na oszczędzenie czasu. Wykonują się szybciej niż w przypadku ich ręcznego przechodzenia przez testera manualnego. warto automatyzować testy, które są powtarzalne i należy często je wykonywać, np. testy regresji i smoke testy. Warto również automatyzować testy, które są trudne i  pracochłonne przy manualnym wykonaniu, np. testy z wieloma zbiorami danych.",
  },
  {
    id: 38,
    question: "38.Co to jest testowanie Ad hoc?",
    answer:
      "Testy przeprowadzane są bez tworzenia formalnego planu testu czy pisania przypadków testowych. Testy typu ad hoc pomagają planować zakres i czas trwania innych rodzajów testów, pomagają także testerom nauczyć się aplikacji przed rozpoczęciem zaplanowanych, innych rodzajów testów.",
  },
  {
    id: 39,
    question: "39.Co to jest testowanie białoskrzynkowe?",
    answer:
      "testy białoskrzynkowe, czyli strukturalne; -> Badają poprawność zaimpementowanego przez programistę kodu.",
  },
  {
    id: 40,
    question: "40.Co to jest testowanie czarnoskrzynkowe?",
    answer:
      "testy czarnoskrzynkowe, czyli funkcjonalne; -> Skupiają się na tym co dany komponent powinien robić. Istnieją różne techniki testowania czarnej skrzynki: -Partycjonowanie równoważności; -Analiza wartości brzegowych; -Wykresy przyczynowo-skutkowe.",
  },
  {
    id: 41,
    question: "41.Jak przeprowadzić testy kiedy nie ma dokumentacji?",
    answer:
      "Testowanie eksploracyjne — nieformalna technika projektowania testów, w której tester projektuje testy podczas ich wykonywania oraz wykorzystuje informacje zdobyte podczas testowania do projektowania nowych i lepszych testów.",
  },
  {
    id: 42,
    question: "42.Czym według Ciebie jest aplikacja internetowa?",
    answer:
      "to aplikacja uruchamiana w przeglądarce, która przez dostarczony interfejs ma dostarczać użytkownikowi jakąś konkretną usługę.",
  },
  {
    id: 43,
    question: "43.Czym jest autoryzacja a czym uwierzytelnienie?",
    answer:
      "Uwierzytelnianie (autentykacja) polega na sprawdzeniu tożsamości użytkownika. Autoryzacja (upoważnenie) na przyznaniu uprawnień do konkretnego zasobu.",
  },
  {
    id: 44,
    question:
      "44.Czym się różni walidacja po stronie klienta a walidacja po stronie serwera?",
    answer:
      "Np. Walidacja formularza przez JS po stronie klienta i AJAX po stronie serwera",
  },
  {
    id: 45,
    question: "45.Jakie znasz grupy kodów zwracane przez serwer?",
    answer:
      "Kody odpowiedzi 1XXX -> Informational 2XXX -> Success 3XXX -> Redirection(przekierowania) 4XXX -> Client Error 5XXX -> Server Error",
  },
  {
    id: 46,
    question: "46.Co to jest serwer proxy?",
    answer:
      "Serwer pośredniczący – oprogramowanie lub serwer z odpowiednim oprogramowaniem, które dokonuje pewnych operacji w imieniu użytkownika. Często utożsamiany z pośrednikiem HTTP.",
  },
  {
    id: 47,
    question:
      "47.SQL -> Stwórz zapytanie SQL, które wybierze wszystkie kolumny z tabeli o nazwie sklep?",
    answer: "??",
  },
  {
    id: 48,
    question:
      "SQL -> Stwórz zapytanie SQL, które zwróci tylko kolumnę produkty z tabeli o nazwie sklep bez duplikatów? ",
    answer: "??",
  },
  {
    id: 49,
    question:
      "49.SQL -> Stwórz zapytanie, które zwróci wszystkie tabele w oparciu o połączenie relacji bazując na poniższej grafice?",
    answer: "??",
  },
  {
    id: 50,
    question: "50.Co to jest testowanie dynamiczne?",
    answer:
      "testowanie modułu lub systemu na poziomie specyfikacji lub implementacji bez wykonywania tego oprogramowania, np. przeglądy lub analiza statyczna kodu. Czyli głównym założeniem jest testowanie bez uruchomienia aplikacji.",
  },
  {
    id: 51,
    question: "51.Co to jest testowanie GUI?",
    answer:
      "Testowanie GUI(UI) – proces testowania produktu, który sprawdza czy interfejs graficzny jest napisany zgodnie ze specyfikacją.",
  },
  {
    id: 52,
    question:
      "52.Co to jest testowanie gruntowne i czy powinno się jest stosować?",
    answer:
      "Podejście do testów, w którym zestaw testowy obejmuje wszystkie kombinacje wartości wejściowych i warunków wstępnych. Niemożliwe jest przetestowanie WSZYSTKIEGO – wszystkich kombinacji danych wejściowych i warunków wstępnych w oprogramowaniu.",
  },
  {
    id: 53,
    question: "53.Co to jest paradoks pestycydów?",
    answer:
      "odnosi się do sytuacji, w której ten sam zestaw testów powtarzany wielokrotnie na oprogramowaniu przestaje wykrywać błędy.",
  },
  {
    id: 54,
    question: "54.Co to jest test pozytywny?",
    answer:
      "test (w rozumieniu testerskim) zakończył się wynikiem „nie przeszedł”, czyli wykrył problem.",
  },
  {
    id: 55,
    question: "55.Czym jest test negatywny?",
    answer:
      "Testowanie, którego celem jest pokazanie, że oprogramowanie nie działa. Testowanie negatywne jest bardziej związane z postawą testerów, niż ze specyficznym podejściem czy techniką projektowania testów, np. testowanie z błędnymi wartościami wejściowymi lub wyjątkami.",
  },
  {
    id: 56,
    question:
      "56.Czy wiesz czym jest testowanie wydajności i znasz jakieś narzędzia do tego?",
    answer:
      "Należą do grupy testów niefunkcjonalnych, które – ogólnie rzecz biorąc – określają, JAK działa system. -Load Testing – Jak system radzi sobie w warunkach spodziewanego obciążenia (tj. obciążenie nie przekracza punktu krytycznego)? Pomaga to w identyfikacji wąskich gardeł, które zakłócają pracę aplikacji. -Stress Testing – Czy system jest zdolny do działania przy ekstremalnym obciążeniu? -Spike Testing – Jak aplikacja reaguje na nagłe, duże skoki obciążenia? -Endurance Testing – Czy oprogramowanie jest w stanie wytrzymać wzmożony ruch przez długi okres czasu? -Volume Testing – Jak na symulowane obciążenie reaguje system, który przechowuje i przetwarza dużą liczbę danych? -Scalability Testing – W jakim stopniu aplikacja jest skalowalna w wyniku zwiększonego ruchu?",
  },
  {
    id: 57,
    question: "57.Czym są testy alfa?",
    answer:
      "testowanie alfa: Symulowane lub rzeczywiste testy produkcyjne przeprowadzane przez potencjalnych użytkowników lub niezależny zespól testowy, przeprowadzane u producenta, ale bez udziału wytwórców oprogramowania.",
  },
  {
    id: 58,
    question: "58.Czym jest scenariusz testowy?",
    answer:
      "Opisuje serię przypadków testowych, które składają się na pełne sprawdzenie danej funkcjonalności. Scenariusz może opisywać rożne sekwencje działań i różne dane wejściowe, aby uwzględnić różne warunki, w których system może działać.",
  },
  {
    id: 59,
    question:
      "59.Co oznaczają kryteria wejścia / wyjścia w testowaniu oprogramowania?",
    answer:
      "Kryteria wejścia określają warunki wstępne, które muszą zostać spełnione przed rozpoczęciem danej czynności Kryteria wyjścia określają warunki, które muszą zostać spełnione, aby można było uznać wykonywanie danej czynności za zakończone.",
  },
  {
    id: 60,
    question: "60.Czym jest API?",
    answer:
      "Interfejs służy do łączenia aplikacji, dzięki temu może wykonać funkcję która jest zbudowana wokół udostępnionych danych. Wysyłanie zapytanie do API -> Api pobiera dane z bazy -> Api zwaraca zasowy -> zasoby są mapowane na FrontEndzie",
  },
  {
    id: 61,
    question: "61.Co to jest REST?",
    answer:
      "Representation State Transfer Metoda projektowania API żeby zachowywała się w ustalony sposób 1.Oddzielenie klienta i serweru 2.Brak stanu 3.Cashowalność[Cashable] -> unikanie zbyt wielu requestow, wrzucenie danych w pamięć aby nie pobierać wiele razy 4.Spójny interfejs  Są przeznaczone do wykonywania żądań i otrzymywania odpowiedzi za pomocą protokołu HTTP. Rest narzuca infrastrukturę",
  },
  {
    id: 62,
    question: "62.Jaka według Ciebie jest rola testera w zespole?",
    answer:
      "dbanie o utrzymanie jakości powstającego produktu i samego procesu jego powstawania",
  },
  {
    id: 63,
    question: "63.Czym są metodyki zwinne?",
    answer:
      "Metodyki zwinne skupiają się na elastycznym podejściu i iteracyjnej realizacji projektu, zakładając, że nie wszystko można przewidzieć i zaplanować, a ważniejsze jest reagowanie na zmiany niż trzymanie się z góry ustalonego planu.",
  },
  {
    id: 64,
    question: "64.Czym jest konsola przeglądarkowa i co można w niej znaleźć?",
    answer: "DevTools Browsers",
  },
  {
    id: 65,
    question: "65.Co można zobaczyć w zakładce Network w przeglądarce?",
    answer:
      "-status odpowiedzi na zapytanie -typ i rozmiar przesyłanego pliku -czas odpowiedzi i dostarczenia zasobu -jakie zasoby otrzymujemy od serwera -metodę przesyłania pakietów (np: http/1, http/2)",
  },
  {
    id: 66,
    question: "66.Proszę omówić testy systemowe?",
    answer:
      "Testowanie systemowe skupia się na ogólnym zachowaniu i możliwościach całego systemu lub produktu. Często obejmuje również kompleksowe testowanie funkcjonalne wszystkich zadań, jakie system ten może wykonywać, oraz testowanie niefunkcjonalne charakterystyk jakościowych.",
  },
  {
    id: 67,
    question:
      "67.Jakie defekty jesteśmy w stanie wykryć za pomocą testów integracyjnych?",
    answer:
      "błędy w interfejsach oraz interakcjach między poszczególnymi modułami bądź systemami.",
  },
  {
    id: 68,
    question: "68.Jak wygląda proces testowy w środowisku scrumowym?",
    answer:
      "Rolą testera w Scrumie jest więc nie tylko testowanie, lecz także dbanie o utrzymanie jakości powstającego produktu i samego procesu jego powstawania – na przykład poprzez doskonalenie Backlogu produktu",
  },
  {
    id: 69,
    question: "69.Jakie znasz podejścia szacowania testów?",
    answer:
      "Istnieją dwa podejścia do szacowania pracochłonności testów: -podejście oparte na metrykach: szacowanie pracochłonności testów bazując na pomiarach minionych lub podobnych projektów lub bazujące na typowych wartościach -podejście oparte na ekspertach: szacowanie zadań przez ich przyszłych wykonawców lub przez ekspertów",
  },
  {
    id: 70,
    question: "70.Co to jest testowanie oprogramowania?",
    answer:
      "proces weryfikacji zgodności działania aplikacji z wymaganiami funkcjonalnymi.",
  },
  {
    id: 71,
    question: "71.Jakie są głównie zadania testera?",
    answer:
      "rozwijanie infrastruktury testowej poprzez tworzenie, przeprowadzanie i utrzymywanie testów manualnych dla konkretnego oprogramowania. Testerzy manualni dokumentują przypadki testowe, analizują je, tworzą dokumentację techniczną i raportują błędy.",
  },
  {
    id: 72,
    question: "72.Proszę przetestować mechanizm rejestracji w systemie Github?",
    answer: "??",
  },
  {
    id: 73,
    question:
      "73.Jakie atrybuty jesteś w stanie przetestować za pomocą testów niefunkcjonalnych?",
    answer:
      "wydajność, skalowalność, bezpieczeństwo, pielęgnowalność czy kompatybilność.",
  },
  {
    id: 74,
    question: "74.Czym jest ładunek w zapytaniu?",
    answer: "Ładunek to rzeczywiste informacje przesyłane za pomocą protokołu.",
  },
  {
    id: 75,
    question: "75.Czym jest CRUD?",
    answer:
      "CRUD create, read, update, delete GET -> Pobiera konkretne zasoby POST -> Pozwala np. dodać posta, wysłać wiadomość PUT -> służy do aktualizacji zasobów DELETE ",
  },
  {
    id: 76,
    question: "76.Czym się różni metoda POST od PUT?",
    answer:
      "POST -> Pozwala np. dodać posta, wysłać wiadomość PUT -> służy do aktualizacji zasobów",
  },
  {
    id: 77,
    question: "77.Co zawarłbyś w raporcie z testów?",
    answer:
      "Raport o postępie testów -> status, stopień realizacji planów, ewentualne utrudnienia, plany na kolejne testy, jakość testowanego systemu Sumaryczny raport testów -> podsumowanie - przebieg testów, ewentualne odstepstwa od założonego wcześniej planu, końcowy status, zmierzona jakość systemu, pojawiające sie problemy, miary i ryzyka.",
  },
  {
    id: 78,
    question: "78.Co to jest awaria?",
    answer:
      "Odchyłka modułu lub systemu od oczekiwanego zachowania lub rezultatu działania.",
  },
  {
    id: 79,
    question: "79.Gdzie w przeglądarce można odczytać błąd 500?",
    answer: "Zakładka network",
  },
  {
    id: 80,
    question: "80.Co to jest formalne testowanie?",
    answer:
      "testowanie formalne: testowanie w oparciu o przypadki testowe, testowanie w oparciu o listę kontrolną; (lista rzeczy do zapamiętania wraz z możliwością odhaczenia, czy pewna rzecz się wydarzyła, czy też nie)",
  },
  {
    id: 81,
    question: "81.Co może zawierać raport z testów",
    answer:
      "-id,tytuł,autor -cel -Nazwa i wersja systemu -> określenie obiektu testów -Kilka zdań ogólnego podsumowania -Odstępstwa od założonego planu i ich przyczyny -Wyniki testów i metryki -> planowane/wyknoane, zaliczone/niezaliczone/zablokowane, liczba defektów z priorytetami, dystrybucja defektów(gdzie i ile), lista otwartych defektów. -Podsumowanie aktywności-> czas wykonania, daty startu i końca, koszty,zasoby -Ocena kryteriów wejścia i wyjścia -Wnioski na przyszłość",
  },
];

export default App;
