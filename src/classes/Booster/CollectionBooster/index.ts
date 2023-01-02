import { getRandomElement } from "./../../../shared/lib/utils/index";
import {
  UniformBooster,
  IUniformBooster,
} from "classes/Booster/UniformBooster";
import { Item } from "classes/Item";
import { inventory } from "db/inventory";
import { itemBase } from "db/itemsBase";
import { utils } from "shared/lib";

export type ICollectionBooster = IUniformBooster;

export class CollectionBooster extends UniformBooster {
  constructor(settings: ICollectionBooster) {
    super(settings);
  }

  private getCollectionItem(item: Item): Item {
    if (!Object.keys(inventory).includes(`${item.id}`)) return item;
    if (Math.random() < 1 / (inventory[`${item.id}`] + 1)) {
      return item;
    } else {
      // Нужен ли здесь фильтр редкости?
      return this.getCollectionItem(
        getRandomElement<Item>(
          Object.values(itemBase).filter(
            (i: Item) => i.itemType === item.itemType
          )
        )
      );
    }
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
        let current = this.getCollectionItem(random);
        if (
          this.uniformPool.includes(random.itemType) &&
          this.uniformPool.length < 4
        ) {
          current = utils.getRandomElement<Item>(
            Object.values(itemBase).filter((item: Item) => {
              return (
                !this.uniformPool.includes(item.itemType) &&
                item.rarity >= current.rarity
              );
            })
          );
        }
        const upgradedItem = this.upgradeItem(current);
        console.log(
          `CollectionBooster add ${upgradedItem?.rarity} ${upgradedItem?.id}`
        );

        Object.hasOwn(inventory, `${upgradedItem.id}`)
          ? inventory[upgradedItem.id]++
          : (inventory[upgradedItem.id] = 1);
        this.uniformPool.push(upgradedItem.itemType);
      }
    }
  }
}
