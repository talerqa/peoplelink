import * as React from "react";

export const Contacts = (props: any) => {
  return <div>
    <p>   {props.contactTitle} : {props.contactValue.length > 0 ? props.contactValue : 'none'}</p>
  </div>
}
