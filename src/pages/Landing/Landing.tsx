import React, { useState } from 'react'
import "./Landing.css"
import Button from '../../components/Button/Button'
import RichTextInput from '../../components/RichTextInput/RichTextInput';
import Input from '../../components/Input/Input';
import { validateHTML } from '../../Utils';

function Landing() {
    const [showEditor, setShowEditor] = useState(false)
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')

    const handleToggle = () => {
        setShowEditor((prevState) => !prevState)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validateHTML(content)) {
            // Call API here
            console.log({
                title,
                content
            })
        } else alert(`Content cannot be empty`)
    }

    return (
        <div className='landing'>
            <Button buttonText='Create Post' onClick={handleToggle} disabled={showEditor} />
            {/* Conditionally rendering editor on click of button */}
            {showEditor && <form className='form-container' onSubmit={handleSubmit}>
                <Input type='text' placeholder='Title' required value={title} setValue={setTitle} />
                <RichTextInput content={content} setContent={setContent} />
                <div className='btn-container'>
                    <Button buttonText='Cancel' onClick={handleToggle} />
                    <Button buttonText='Submit' type='submit' primary />
                </div>
            </form>}
        </div>
    )
}

export default Landing