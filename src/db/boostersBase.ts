import { CollectionBooster } from "./../classes/Booster/CollectionBooster/index";
import { UniformBooster } from "./../classes/Booster/UniformBooster/index";
import { LuckBooster } from "classes/Booster/LuckBooster";
import { Booster } from "classes/Booster/Booster";
import { RARITY } from "shared/types/enums";

export type BoosterAny =
  | Booster
  | LuckBooster
  | UniformBooster
  | CollectionBooster;

interface IBoosterBase {
  [ID: number]: BoosterAny;
}

export const boosterBase: IBoosterBase = {
  1: new Booster({
    id: 1,
    rarity: RARITY.COMMON,
    itemsDrop: {
      [RARITY.COMMON]: 2,
      [RARITY.LEGENDARY]: 1,
    },
  }),
  2: new Booster({
    id: 2,
    rarity: RARITY.COMMON,
    itemsDrop: {
      [RARITY.COMMON]: 1,
      [RARITY.EPIC]: 1,
    },
  }),
  3: new LuckBooster({
    id: 3,
    rarity: RARITY.COMMON,
    itemsDrop: {
      [RARITY.COMMON]: 5,
      [RARITY.RARE]: 1,
    },
    chance: 0.9,
  }),
  4: new LuckBooster({
    id: 4,
    rarity: RARITY.COMMON,
    itemsDrop: {
      [RARITY.EPIC]: 2,
    },
    chance: 0.2,
  }),
  5: new UniformBooster({
    id: 5,
    rarity: RARITY.COMMON,
    itemsDrop: {
      [RARITY.COMMON]: 5,
      [RARITY.RARE]: 1,
    },
    chance: 0.1,
  }),
  6: new UniformBooster({
    id: 6,
    rarity: RARITY.COMMON,
    itemsDrop: {
      [RARITY.LEGENDARY]: 4,
    },
    chance: 0.1,
  }),
  7: new CollectionBooster({
    id: 7,
    rarity: RARITY.COMMON,
    itemsDrop: {
      [RARITY.LEGENDARY]: 50,
    },
    chance: 0.1,
  }),
  8: new CollectionBooster({
    id: 8,
    rarity: RARITY.COMMON,
    itemsDrop: {
      [RARITY.RARE]: 4,
    },
    chance: 0.1,
  }),
} as const;
