export interface Groceries {
  id?: number;
  name: string;
  price: number;
  inventory: number;
}

export interface Orders {
  id?: number;
  user_id?: number;
  created_at: string;
}

export interface OrderItems {
  id: number;
  order_id: number;
  grocery_id: number;
  quantity: number;
}

export interface Inventory {
  inventory: number;
}
