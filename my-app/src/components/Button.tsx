import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({title, handleAction}:{title:any, handleAction:any}) {
    return (
        <Button variant="contained" onClick={handleAction}>{title}</Button>
    );
}