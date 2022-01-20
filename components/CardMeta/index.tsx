import { FC } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TCardMeta } from "../../store/entities.ts";


const CardMeta: FC<TCardMeta> = ({ product }) => {
  return (
    <div key={uuidv4()}>
      {product && (
        <>
          <p>{`Колличество: ${product.count}`}</p>
          <p>{`Стоимость (шт.): ${product.price} руб.`}</p>
        </>
      )}
    </div>
  );
};

export default CardMeta;
