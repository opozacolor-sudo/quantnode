export type LegalSection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalDoc = {
  kicker: string;
  title: string;
  updated: string;
  intro: string[];
  tocLabel: string;
  sections: LegalSection[];
};
