export interface EntryPreview {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface Entry {
  node: {
    englishTitle: string;
    englishSubtitle: string;
    englishExcerpt: string;
    englishContent: {
      markdown: string;
    };
    spanishTitle: string;
    spanishSubtitle: string;
    spanishExcerpt: string;
    spanishContent: {
      markdown: string;
    };
    featuredImage: {
      url: string;
    };
    slug: string;
    createdAt: string;
    publishedAt: string;
  };
}

export interface EntryNode {
  englishTitle: string;
  englishSubtitle: string;
  englishExcerpt: string;
  englishContent: {
    markdown: string;
  };
  spanishTitle: string;
  spanishSubtitle: string;
  spanishExcerpt: string;
  spanishContent: {
    markdown: string;
  };
  featuredImage: {
    url: string;
  };
  slug: string;
  createdAt: string;
  publishedAt: string;
}
