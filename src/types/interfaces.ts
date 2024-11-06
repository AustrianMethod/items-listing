export interface ListingProps {
    items: Item[];
}

export interface Item {
    listing_id: number;
    url: string | undefined;
    MainImage?: {
        url_570xN: string | undefined;
      }
    title: string | undefined;
    currency_code: string | undefined;
    price: string | undefined;
    quantity: number | undefined;
}