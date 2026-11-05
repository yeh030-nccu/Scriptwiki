export const siteName = '劇本分析方法 Wiki';

export const categories = [
  {
    slug: 'character-analysis',
    title: '角色分析',
    shortTitle: '角色',
    description: '從內在變化、敘事功能與行動關係，理解角色如何推動故事。',
  },
  {
    slug: 'story-structure',
    title: '故事結構',
    shortTitle: '結構',
    description: '觀察衝突如何累積、轉折如何改變局勢，以及結局如何回應故事承諾。',
  },
];

export const categoryBySlug = Object.fromEntries(
  categories.map((category) => [category.slug, category]),
);
