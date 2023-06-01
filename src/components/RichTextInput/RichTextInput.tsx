import React, { useRef } from 'react'
import "./RichTextInput.css"
import JoditEditor from 'jodit-react'
import { RichTextInputProps } from '../../Types'

function RichTextInput({ content, setContent }: RichTextInputProps) {
    const ref = useRef(null)
    return (
        <div className='rti-wrapper'>
            <JoditEditor ref={ref} value={content} onBlur={(newValue) => setContent(newValue)} />
        </div>
    )
}

export default RichTextInput