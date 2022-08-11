export interface SpellFullDescription {
  id: number;
  title: string;
  customTypeOfSpellName: string;
  school: string;
  level: number;
  componentsNames: string[][];
  characterClassesNames: string[][];
  castingTime: string;
  range: string;
  target: string;
  duration: string;
  savingThrow: string;
  spellResistance: boolean;
  shortDescription: string;
  fullDescription: string;
  icon: string;
}
