import { BoosterAny, boosterBase } from "./db/boostersBase";
import { inventory } from "./db/inventory";

Object.values(boosterBase).forEach((item: BoosterAny) => item.unpack());
console.log(inventory);
