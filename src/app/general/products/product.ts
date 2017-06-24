export interface Product {
  id?: number;
  name?: string;
  price?: number;
  vat?: number;
  image_list?: string[];
  supplier_id?: number;
  brand_id?: number;
  category_id?: number;
  supplier_name?: string;
  brand_name?: string;
  category_name?: string;
  createdAt?: any;
  updatedAt: any;
}
