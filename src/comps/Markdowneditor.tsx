import React, { useState } from 'react'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

interface MarkdowneditorProps {
  onSave: (content: string) => void;
}


const Markdowneditor: React.FC<MarkdowneditorProps> = ({ onSave }) => {
  const [conntent, setContent] = useState('');

  const handleditorChange = (value: string) => {
    setContent(value)
  }

  const handleSave = () => {
    onSave(conntent)
  }

  return (
    <div>
      <SimpleMDE 
      value={conntent}
      onChange={handleditorChange}
      options={{
        renderingConfig: {
          codeSyntaxHighlighting: true,
        },
        toolbar: [
          'bold',
          'italic',
          'heading',
          '|',
          'link',
          'image',
          '|',
          'unordered-list',
          'ordered-list',
          'preview',
          'guide',
        ],
      }}
      />  
      <button onClick={handleSave}>Save Entry</button>    
    </div>
  )
}

export default Markdowneditor