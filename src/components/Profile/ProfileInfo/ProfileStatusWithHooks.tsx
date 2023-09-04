import * as React from 'react';
import {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
  status: string
  updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

  const [editMode, setEditMode] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(props.status)

  useEffect(() => setStatus(props.status), [props.status])

  const activateEditMode = () => setEditMode(true)

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') return deactivateEditMode()
  }

  return (
    <>
      <div>
        {!editMode
          ? <span onDoubleClick={activateEditMode}>{props.status ? props.status : '......'} </span>
          :
          <input type="text"
                 onChange={onStatusChange}
                 onBlur={deactivateEditMode}
                 autoFocus={true}
                 onKeyPress={onKeyPressHandler}
                 value={status}
          />}
      </div>
    </>)
}


