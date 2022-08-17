import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function SearchForm() {
  const [value3, setValue3] = useState('');
    return (
        <>
          <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Search" />
          </span>
          <Button label="Search" onClick={() => setState(true)} />
        </>
    )
}