import { RARITY, ITEMTYPE } from "shared/types/enums";

interface IItem {
  id: number;
  name: string;
  rarity: RARITY;
  itemType: ITEMTYPE;
}

export class Item {
  public readonly id: number;
  public readonly name: string;
  public readonly rarity: RARITY;
  public readonly itemType: ITEMTYPE;
  private static readonly instanceArray: number[] = [];

  constructor(settings: IItem) {
    if (settings.id < 0) throw new Error("id must be a positive number");
    if (Item.instanceArray.includes(settings.id))
      throw new Error("id must be unique");

    this.id = settings.id;
    this.name = settings.name;
    this.rarity = settings.rarity;
    this.itemType = settings.itemType;

    Item.instanceArray.push(settings.id);
  }

  public static get instance(): number[] | [] {
    return [...Item.instanceArray];
  }
}
