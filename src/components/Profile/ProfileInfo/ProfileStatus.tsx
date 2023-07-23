import * as React from 'react';
import {ChangeEvent, KeyboardEvent} from 'react';

type ProfileStatusType = {
  status: string
  updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivatedEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }


  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') return this.deactivatedEditMode()
  }

  componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }


  }

  render() {
    return (
      <>
        <div>
          {!this.state.editMode
            ? <span onDoubleClick={this.activateEditMode}>{this.props.status ?  this.props.status : '......'} </span>
            :
            <input type="text"
                   onChange={this.onStatusChange}
                   onBlur={this.deactivatedEditMode}
                   autoFocus={true}
                   onKeyPress={this.onKeyPressHandler}
                   value={this.state.status}/>}
        </div>
      </>)
  }
}


export default ProfileStatus;