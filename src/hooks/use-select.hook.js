import { useState } from 'react'


export function useSelect(initValue) {
    const [value, setValue] = useState(initValue.value || '')

    const handleChange = e => {
        setValue(e.target.value)
    }

    return [
        value,
        handleChange,
        setValue
    ]
}