import * as React from "react";
import s from './Contacts.module.scss'

type Props = {
  contactTitle: string
  contactValue: string | null | undefined
}

export const Contacts = (props: Props) => {

  return <div className={s.contactsBlock}>
    <span className={s.titleContacts}>{props.contactTitle}: </span>
    <a target={props.contactValue ? '_blank' : ''} href={props.contactValue ? props.contactValue : '#'}
       className={s.valueContacts}
       rel="noreferrer">  {props.contactValue !== null && typeof props.contactValue !== "undefined" && props.contactValue.length > 0 ? props.contactValue : 'none'}</a>
  </div>
}

