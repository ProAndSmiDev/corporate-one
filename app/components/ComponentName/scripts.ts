/**
 * Енамы, которые задают стандартные значения
 */
enum Cards {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

/**
 * Интерфейсы, которые описывают объекты
 */
interface IScripts {
  title: string,
  header?: string,
  cardsType?: Cards,
}

/**
 * Скрипты, которые пишем для компонента
 */
const scripts: IScripts = {
  title: 'hello',
  header: 'world',
  cardsType: Cards.HORIZONTAL,
};

console.log(scripts.title, scripts.header);
