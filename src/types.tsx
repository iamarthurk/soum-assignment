export interface Product {
  id: number;
  metadata: ProductMetadata;
}

export interface ProductMetadata {
  category: string;
  brand: string;
  model: string;
  variant: string;
  [key: string]: string;
}

export interface ProductTreeNode {
  id: string;
  value: string;
  type: string;
}
