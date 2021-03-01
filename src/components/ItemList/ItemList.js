import React from 'react';
import Item from '../Item/Item'
import styles from "../Item/Item.module.css";
const ItemList = ({ items }) => (<ul>
    {items.map(item => <li key={item.value} className={styles.item}>
        <Item value={item.value} isDone={item.isDone}/>
    </li>)}
</ul>);
export default ItemList;
