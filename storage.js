export function initializeUserSession() {
  if (!sessionStorage.getItem("users")) {
    sessionStorage.setItem(
      "users",
      JSON.stringify([
        {
          username: "User123",
          email: "user@example.com",
          gender: "Машки",
          year: "1999",
        },
        {
          username: "User456",
          email: "user2@example.com",
          gender: "Женски",
          year: "1996",
        },
        {
          username: "User789",
          email: "user3@example.com",
          gender: "Машки",
          year: "2002",
        },
      ])
    );
  }
}

export const informationCardsInfo = [
  {
    id: 1,
    title: "Лоши навики при “Live streaming”",
    content:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард",
    date: "Објавено на 28/05/23",
    image: "images/Rectangle 540.png",
    category: "mostWatched",
  },
  {
    id: 2,
    title: "Праќање на звучни пораки",
    content:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард",
    date: "Објавено на 28/05/23",
    image: "images/Rectangle 540.png",
    category: "mostWatched",
  },
  {
    id: 3,
    title: "Безбедност при користење на апликации",
    content:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард",
    date: "Објавено на 28/05/23",
    image: "images/Rectangle 540.png",
    category: "relevantNews",
  },
  {
    id: 4,
    title: "Различни уреди, различни проблеми",
    content:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард",
    date: "Објавено на 28/05/23",
    image: "images/Rectangle 540.png",
    category: "relevantNews",
  },
  {
    id: 5,
    title: "Што се случува во позадина додека сурфаш",
    content:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард",
    date: "Објавено на 28/05/23",
    image: "images/Rectangle 540.png",
    category: "relevantNews",
  },
  {
    id: 6,
    title: "Што e важно во додека снимаш некој друг",
    content:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард",
    date: "Објавено на 28/05/23",
    image: "images/Rectangle 540.png",
    category: "relevantNews",
  },
  {
    id: 7,
    title: "Безбедност онлајн и офлајн",
    content:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард",
    date: "Објавено на 28/05/23",
    image: "images/Rectangle 540.png",
    category: "newestNews",
  },
  {
    id: 8,
    title: "Кој може да ја следи твојата активност на интернет?",
    content:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард",
    date: "Објавено на 28/05/23",
    image: "images/Rectangle 540.png",
    category: "mostWatched",
  },
  {
    id: 9,
    title: "Како да (не) го користиш Инстаграм",
    content:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард",
    date: "Објавено на 28/05/23",
    image: "images/Rectangle 540.png",
    category: "mostWatched",
  },
  {
    id: 10,
    title: "Споделување на содржини",
    content:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард",
    date: "Објавено на 28/05/23",
    image: "images/Rectangle 540.png",
    category: "newestNews",
  },
  {
    id: 11,
    title: "Хакерски напади",
    content:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард",
    date: "Објавено на 28/05/23",
    image: "images/Rectangle 540.png",
    category: "newestNews",
  },
  {
    id: 12,
    title: "Ризици при работење преку интернет",
    content:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард",
    date: "Објавено на 28/05/23",
    image: "images/Rectangle 540.png",
    category: "newestNews",
  },
];
