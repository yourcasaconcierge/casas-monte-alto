export interface PropertyNode {
  id: string;
  propertyName: string;
  publishedAt: string;
  slug: string;
  englishDescription: {
    markdown: string;
  };
  spanishDescription: {
    markdown: string;
  };
  englishFeatures: {
    text: string;
  };
  spanishFeatures: {
    text: string;
  };
  englishAmenities: {
    text: string;
  };
  spanishAmenities: {
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
  postingLink: string;
  featuresAndAmenitiesLink: string;
}

export interface Property {
  node: {
    id: string;
    propertyName: string;
    publishedAt: string;
    slug: string;
    englishDescription: {
      markdown: string;
    };
    spanishDescription: {
      markdown: string;
    };
    englishFeatures: {
      text: string;
    };
    spanishFeatures: {
      text: string;
    };
    englishAmenities: {
      text: string;
    };
    spanishAmenities: {
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
    postingLink: string;
    featuresAndAmenitiesLink: string;
  };
}
