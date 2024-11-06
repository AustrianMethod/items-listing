import { ListingProps } from "../types/interfaces"


export function Listing({items}: ListingProps) {

    const formattedPrice = (currency: string | undefined, price: string | undefined) => {
      if (currency === 'USD') return `$${price}`;
      if (currency === 'EUR') return `€${price}`;
      return `${price} ${currency}`;
    }

    const getRemainder = ( quantity: number | undefined ) => {
      if (quantity !== undefined && quantity <= 10) return 'level-low';
      if (quantity !== undefined && quantity <= 20) return 'level-medium';
      if (quantity !== undefined && quantity > 20) return 'level-high';
    }
    
    return (
        <div className="item-list">
          {items.map( (item) => (
            <div className="item" key={item.listing_id}>
              <div className="item-image">
                <a href={item.url}>
                  <img src={item.MainImage?.url_570xN}/>
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">
                  {
                    item.title !== undefined && item.title.length > 50 
                      ? `${item.title.slice(0 ,50)}...` 
                      : item.title
                  }  
                </p>
                <p className="item-price">
                    {formattedPrice(item.currency_code ,item.price)}
                </p>
                <p className={`item-quantity ${getRemainder(item.quantity)}`}>
                    {item.quantity + ' left'}
                </p>
              </div>
            </div>
          ))}
        </div>  
    )
  }
  