import { ITEMTYPE, RARITY } from "shared/types/enums";
import { ILuckBooster } from "./../LuckBooster/index";
import { LuckBooster } from "classes/Booster/LuckBooster";
import { itemBase } from "db/itemsBase";
import { Item } from "classes/Item";
import { inventory } from "db/inventory";
import { utils } from "shared/lib";

export type IUniformBooster = ILuckBooster;

export class UniformBooster extends LuckBooster {
  protected uniformPool: ITEMTYPE[] = [];

  constructor(settings: IUniformBooster) {
    if (
      Object.values(settings.itemsDrop).reduce(
        (acc, current) => acc + current,
        0
      ) < 4
    )
      throw new Error("Должно быть минимум 4 предмета");
    super(settings);
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
        let current = random;
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
          `UniformBooster add ${upgradedItem?.rarity} ${upgradedItem?.id}`
        );

        Object.hasOwn(inventory, `${upgradedItem.id}`)
          ? inventory[upgradedItem.id]++
          : (inventory[upgradedItem.id] = 1);
        this.uniformPool.push(upgradedItem.itemType);
      }
    }
  }
}
