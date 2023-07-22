import * as React from 'react';

type ProfileStatusType = {
  status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: true ,
    status: this.props.status
  }

  render() {
    return (
      <>
        <div>
          {!this.state.editMode
            ? <span>{this.props.status} </span>
            : this.state.editMode && <input type="text" value={this.props.status}/>}
        </div>
      </>)
  }
}


export default ProfileStatus;