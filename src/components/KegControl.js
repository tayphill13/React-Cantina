import React from 'react';
import NewKegForm from './KegForm';
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
  
  handleAddingNewKegToList = (newKeg) =>  {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      currentPage: 'list'
    });
  }
  
  handleClick = () => {
    if (this.state.currentPage === 'list') {
      this.setState({currentPage: 'newKegForm', currentKegId: null });
    } else {
      this.setState({currentPage: 'list', currentKegId: null});
    }
  }
  handleUpdateClick = (key) => {
    this.setState({ currentPage: 'updateKegForm', currentKegId: key });
  }

  handleUpdateKeg = (updateKeg) =>  {
    const newMasterKegList = this.state.masterKegList.map((kegs) => {
      if (kegs.id === updateKeg.id) {
        return updateKeg;
      } else {
        return kegs;
      }
    });
    this.setState({currentPage: "list", masterKegList: newMasterKegList });
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