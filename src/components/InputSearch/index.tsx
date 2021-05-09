import React from 'react';
import { Input } from 'semantic-ui-react';

interface ISearch {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputSearch({handleChange}: ISearch) {
    return <Input placeholder='Pesquisar...' onChange={handleChange} />
}
