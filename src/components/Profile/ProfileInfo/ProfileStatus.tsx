import * as React from 'react';

type ProfileStatusType = {
  status: string
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
  }

  render() {
    return (
      <>
        <div>
          {!this.state.editMode
            ? <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status} </span>
            :
            <input type="text"
                   onBlur={this.deactivatedEditMode.bind(this)}
                   autoFocus={true}
                   value={this.props.status}/>}
        </div>
      </>)
  }
}


export default ProfileStatus;