import { RARITY } from "shared/types/enums";
import { IBoosterSettings } from "./../Booster/index";
import { Booster } from "classes/Booster/Booster";
import { itemBase } from "db/itemsBase";
import { Item } from "classes/Item";
import { inventory } from "db/inventory";
import { utils } from "shared/lib";

export interface ILuckBooster extends IBoosterSettings {
  chance: number;
}

export class LuckBooster extends Booster {
  protected chance: number;

  constructor(settings: ILuckBooster) {
    super(settings);
    if (settings.chance < 0 || settings.chance > 1)
      throw new Error("Шанс в пределах от 0 до 1");
    this.chance = settings.chance;
  }

  protected upgradeItem(item: Item): Item {
    let currentRarity = item.rarity;
    let chanceModifier = 1;
    while (currentRarity < RARITY.LEGENDARY) {
      if (Math.random() < this.chance * chanceModifier) {
        currentRarity++;
        chanceModifier /= 10;
      } else break;
    }

    if (currentRarity === item.rarity) return item;
    return utils.getRandomElement<Item>(
      Object.values(itemBase).filter(
        (i: Item) => i.rarity === currentRarity && i.itemType === item.itemType
      )
    );
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
        const upgradedItem = this.upgradeItem(random);
        console.log(
          `LuckBooster add ${upgradedItem?.rarity} ${upgradedItem?.id}`
        );
        Object.hasOwn(inventory, `${upgradedItem.id}`)
          ? inventory[upgradedItem.id]++
          : (inventory[upgradedItem.id] = 1);
      }
    }
  }
}
