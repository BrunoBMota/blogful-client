import React, {useState} from 'react'
import './NotefulForm.css'

export default function NotefulForm(props) {
  const { className, kind, ...otherProps } = props;
  const [folderName, setFolderName] = useState('');
  const [noteName, setNoteName] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [folderId, setFolderId] = useState(0);

  let options = [];

  if(kind === "note"){
    options = props.folders.map((folder, index) => (<option key={index} value={folder.id}>{folder.name}</option>));
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    if(folderName){
      //todo add code for post method
      console.log('foo');
      return props.history.push('/');
    }
    if(noteName && noteContent){
      //todo add code for post method
      console.log('bar');
      return props.history.push(`folder/${folderId}`);
    }
  }


  return (
    kind === 'folder' ?
    <form
      className={['Noteful-form', className].join(' ')}
      action='#'
      onSubmit={e => handleSubmit(e)}
    >
      <h3>Add a folder:</h3>
      <label>
        Folder name:
        <input type="text" name="folder_name" onChange={e => setFolderName(e.target.value)} required/>
      </label>
      <input type="submit" value="Add Folder"/>
    </form>
    : 
    <form
      className={['Noteful-form', className].join(' ')}
      action='#'
      onSubmit={e => handleSubmit(e)}
    >
      <h3>Add a Note:</h3>
      <label>
        Note name:
        <input type="text" name="note_name" onChange={e => setNoteName(e.target.value)} required/>
      </label>
      <label>
        Description:
        <input type="text" name="note_desc" onChange={e => setNoteContent(e.target.value)} required/>
      </label>
      <label>
        Select Folder:
        <select name="folderName" onChange={e => setFolderId(e.target.value)}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add Note"/>
    </form>
  )
}