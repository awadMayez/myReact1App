import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
    <TextField
        id="standard-full-width"
        label=""
        style={{ margin: 8 }}
        placeholder="Add task"
        helperText=""
        fullWidth //delete when not needed full spacing
        margin="normal"
        InputLabelProps={{
            shrink: true,
        }}
    />
                    </div>);
export default InputItem;