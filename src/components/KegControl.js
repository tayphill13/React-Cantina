import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class KegControl extends React.Component  {

  constructor(props)  {
    super(props);
    this.state = {
      currentPage: "list",
      masterKegList: [],
      currentKegId: null
    };
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.currentPage === 'newKegForm')  {
      currentlyVisibleState = <NewKegForm
                                  onNewKegCreation={this.handleAddingNewKegToList}
                                  onClick = {this.handleClick}
                                  update = {false} />
    } else if (this.state.currentPage === 'list') {
      currentlyVisibleState = <KegList
                                  kegList = {this.state.masterKegList}
                                  onClick = {this.handleClick}
                                  onUpdateClick = {this.handleUpdateClick} />
    } else if (this.state.currentPage === 'updateKegForm')  {
      currentlyVisibleState = <NewKegForm
                                  onUpdateKeg = {this.handleUpdateKeg}
                                  onClick = {this.handleClick}
                                  update = {true}
                                  kegId = {this.state.currentKegId} />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default KegControl;