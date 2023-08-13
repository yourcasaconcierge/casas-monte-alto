export interface EntryPreview {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface Entry {
  node: {
    title: string;
    subtitle: string;
    id: string;
    slug: string;
    createdAt: string;
    excerpt: string;
    publishedAt: string;
    content: {
      markdown: string;
    };
    featuredImage: {
      url: string;
    };
  };
}

export interface EntryNode {
  title: string;
  subtitle: string;
  id: string;
  slug: string;
  createdAt: string;
  excerpt: string;
  publishedAt: string;
  content: {
    markdown: string;
  };
  featuredImage: {
    url: string;
  };
}
