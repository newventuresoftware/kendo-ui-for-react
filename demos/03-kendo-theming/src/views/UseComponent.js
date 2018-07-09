import React from 'react';
import { Button } from '@progress/kendo-react-buttons';

export default function UseComponent() {
    return (
        <Button
            primary={true}
            look="default"
            disabled={false}>
            MyButton
        </Button>
    );
}