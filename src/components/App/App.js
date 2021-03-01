import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css'

const App = () => {
        const items = [

            {
                value: 'Create new React app',
                isDone: true
            },
            {
                value: 'write all props',
                isDone: false
            },
            {
                value: 'get the job done',
                isDone: true
            }

        ];
return (
    <div className={styles.wrap}>
        <h1 className={styles.title}>My tasks</h1>
        <InputItem />
        <ItemList items={items}/>
        <Footer count={3}/>
    </div>);
}
export default App;
