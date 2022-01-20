export type TCase = {
  id: number;
  url: string;
  title: string;
  description: string;
  price: number;
};

export type TState = {
    loading: boolean;
    data: Array<TCase> | null;
    error: any;
    cart: any[];
};

export type TCardMeta = {
  product: TCase & {
    count: number;
  }
}
