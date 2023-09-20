import * as React from 'react';
import {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import s from './ProfileStatus.module.css'

type ProfileStatusType = {
  status: string
  updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusType) => {

  const [editMode, setEditMode] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(props.status)
  const [error, setError] = useState<string>('')

  useEffect(() => setStatus(props.status), [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    if (status.length < 20) {
      props.updateStatus(status)
      setError('')

    } else {
      setError('This string is limited to 20 characters.')
      setTimeout(() => {
        setError('')
      }, 2000)
    }
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') return deactivateEditMode()
  }

  return (<div className={s.profileStatus}>
    {!editMode
      ? <span className={s.status} onDoubleClick={activateEditMode}>{props.status ? props.status : '......'} </span>
      : <div>
        <input
          className={s.inputChangeStatus}
          type="text"
          onChange={onStatusChange}
          onBlur={deactivateEditMode}
          autoFocus={true}
          onKeyPress={onKeyPressHandler}
          value={status}
        />
      </div>}
    <p className={s.error}>{error}</p>
  </div>)
}

