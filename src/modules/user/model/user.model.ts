export interface OrderItem {
  groceryId: number;
  quantity: number;
}

export interface BookGroceriesRequest {
  userId: number;
  items: OrderItem[];
}
