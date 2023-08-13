export interface PropertyNode {
  id: string;
  propertyName: string;
  publishedAt: string;
  slug: string;
  description: {
    text: string;
  };
  features: {
    text: string;
  };
  amenities: {
    text: string;
  };
  images: {
    id: string;
    url: string;
    height: number;
    width: number;
  }[];
  bathrooms: number;
  bedrooms: number;
}

export interface Property {
  node: {
    id: string;
    propertyName: string;
    publishedAt: string;
    slug: string;
    description: {
      text: string;
    };
    features: {
      text: string;
    };
    amenities: {
      text: string;
    };
    images: {
      id: string;
      url: string;
      height: number;
      width: number;
    }[];
    bathrooms: number;
    bedrooms: number;
  };
}
