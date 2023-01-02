import { utils } from "shared/lib";
import { inventory } from "db/inventory";
import { Item } from "classes/Item";
import { RARITY } from "shared/types/enums";
import { itemBase } from "db/itemsBase";

type RarityType = {
  [key in RARITY]?: number;
};

export interface IBoosterSettings {
  rarity: RARITY;
  id: number;
  itemsDrop: RarityType;
}

export class Booster {
  protected static instances: number[] = [];
  protected readonly id: number;
  protected rarity: RARITY;
  protected isUnpacked = false;
  protected itemsDrop: RarityType;

  constructor(settings: IBoosterSettings) {
    if (Booster.instances.includes(settings.id))
      throw new Error("Такой бустерпак уже существует");
    Booster.instances.push(settings.id);

    this.id = settings.id;
    this.rarity = settings.rarity;
    this.itemsDrop = settings.itemsDrop;
  }

  public unpack(): void {
    if (this.isUnpacked) {
      console.log(`Booster ${this.id} уже открыт`);
    }
    this.isUnpacked = true;
    for (const [key, value] of Object.entries(this.itemsDrop)) {
      const f = Object.values(itemBase).filter(
        (item: Item) => `${item.rarity}` === key
      );

      for (const random of utils.getRandomElements<Item>(f, value)) {
        console.log(`Booster add ${random?.rarity} ${random?.id}`);
        Object.hasOwn(inventory, `${random.id}`)
          ? inventory[random.id]++
          : (inventory[random.id] = 1);
      }
    }
  }
}
