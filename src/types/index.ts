export interface Media {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  media: Media[];
  available: boolean;
}
