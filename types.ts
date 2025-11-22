export enum TeaCategory {
  PureTea = 'Pure Tea',
  TeaLatte = 'Tea Latte',
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceMedium: number;
  priceLarge: number;
  category: TeaCategory;
  imageKey: string; // used to generate unique placeholder urls
}

export interface StoryItem {
  title: string;
  content: string;
}