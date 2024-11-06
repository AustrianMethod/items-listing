import './App.css';
import { Listing } from './components/Listing';
import items from './data/etsy.json';
import { Item } from './types/interfaces';

function App() {
  const typedItems: Item[] = items.map((item) => ({
    listing_id: item.listing_id,
    url: item.url,
    MainImage: item.MainImage,
    title: item.title,
    currency_code: item.currency_code,
    price: item.price,
    quantity: item.quantity,
  }));

  return (
    <>
      <Listing items={typedItems}/>
    </>
 )
}

export default App
