import { Item } from "classes/Item";
import { ITEMTYPE, RARITY } from "shared/types/enums";

interface IItemBase {
  [ID: number]: Item;
}

export const itemBase: IItemBase = {
  // WEAPONS
  1: new Item({
    id: 1,
    name: "Деревянный меч",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.WEAPON,
  }),
  2: new Item({
    id: 2,
    name: "Деревянная булава",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.WEAPON,
  }),
  3: new Item({
    id: 3,
    name: "Crystalys",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.WEAPON,
  }),
  4: new Item({
    id: 4,
    name: "Javelin",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.WEAPON,
  }),
  5: new Item({
    id: 5,
    name: "Даэдрический клинок",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.WEAPON,
  }),
  6: new Item({
    id: 6,
    name: "Даэдрический молот",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.WEAPON,
  }),
  7: new Item({
    id: 7,
    name: "Серебряная Длань",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.WEAPON,
  }),
  8: new Item({
    id: 8,
    name: "Меч Шаламейн",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.WEAPON,
  }),
  // SHIELDS
  9: new Item({
    id: 9,
    name: "Деревянный щит",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.SHIELD,
  }),
  10: new Item({
    id: 10,
    name: "Poorman's shield",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.SHIELD,
  }),
  11: new Item({
    id: 11,
    name: "Щит антимагии",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.SHIELD,
  }),
  12: new Item({
    id: 12,
    name: "Щит Анха",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.SHIELD,
  }),
  13: new Item({
    id: 13,
    name: "Блок рукой",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.SHIELD,
  }),
  14: new Item({
    id: 14,
    name: "Vanguard",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.SHIELD,
  }),
  15: new Item({
    id: 15,
    name: "Обсидиановый щит",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.SHIELD,
  }),
  16: new Item({
    id: 16,
    name: "Страж истины",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.SHIELD,
  }),
  // ARMORS
  17: new Item({
    id: 17,
    name: "Деревянный нагрудник",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.ARMOR,
  }),
  18: new Item({
    id: 18,
    name: "Орочий нагрудник",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.ARMOR,
  }),
  19: new Item({
    id: 19,
    name: "Реактор Кадуцей",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.ARMOR,
  }),
  20: new Item({
    id: 20,
    name: "КОМПЛЕКТ СИЛОВОЙ БОЕВОЙ БРОНИ МОДЕЛЬ 2",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.ARMOR,
  }),
  21: new Item({
    id: 21,
    name: "Природная ловкость (+ уклонение)",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.ARMOR,
  }),
  22: new Item({
    id: 22,
    name: "Хитиновый покров",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.ARMOR,
  }),
  23: new Item({
    id: 23,
    name: "Солнечная броня",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.ARMOR,
  }),
  24: new Item({
    id: 24,
    name: "Доспехи Бога",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.ARMOR,
  }),
  // HELMETS
  25: new Item({
    id: 25,
    name: "Деревянный шлем",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.HELMET,
  }),
  26: new Item({
    id: 26,
    name: "Золотой шлем",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.HELMET,
  }),
  27: new Item({
    id: 27,
    name: "Маска Конарик",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.HELMET,
  }),
  28: new Item({
    id: 28,
    name: "Шлем господства",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.HELMET,
  }),
  29: new Item({
    id: 29,
    name: "Укрепление черепа",
    rarity: RARITY.COMMON,
    itemType: ITEMTYPE.HELMET,
  }),
  30: new Item({
    id: 30,
    name: "Каска шахтёра",
    rarity: RARITY.RARE,
    itemType: ITEMTYPE.HELMET,
  }),
  31: new Item({
    id: 31,
    name: "Маска Мирака",
    rarity: RARITY.EPIC,
    itemType: ITEMTYPE.HELMET,
  }),
  32: new Item({
    id: 32,
    name: "Демонические рога",
    rarity: RARITY.LEGENDARY,
    itemType: ITEMTYPE.HELMET,
  }),
} as const;
