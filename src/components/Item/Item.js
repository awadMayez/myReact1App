import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from "@material-ui/core/Checkbox";



const Item = ({ value, isDone}) => (<span className={
    classnames({
        [styles.item]: true,
        [styles.done]: isDone
    })
}>

    {value}
    <Checkbox
        defaultChecked
        indeterminate
        inputProps={{ 'aria-label': 'indeterminate checkbox' }}
    />
</span>);
export default Item;