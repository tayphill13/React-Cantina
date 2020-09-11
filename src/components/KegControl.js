import React from 'react';
import KegList from './KegList';
import AddKeg from './AddKeg';
import UpdateKeg from './UpdateKeg';
import Keg from './Keg';

class KegControl extends React.Component  {
  constructor(props)  {
    super(props);
    this.state = {
      masterKegList: [],
      currentPage: "list",
      currentKegId: null
    };
  }
  handleClick = (pageName) => {
    this.setState({
      currentPage: pageName
    });
  }
  
  handleAddingNewKegToList = (newKeg) =>  {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      currentPage: 'list'
    });
  }

  handleViewingDetails = (id) => {
    const kegToView = this.state.masterKegList.filter(kegs => kegs.id === id)[0];
    this.setState({
      currentPage: 'details',
      currentProduct: kegToView
    });
  }

  
  handleUpdateClick = (id) => {
    const kegToUpdate = this.state.masterKegList.filter(kegs => kegs.id === id)[0];
    this.setState({ 
      currentPage: 'update',
      currentKeg: kegToUpdate 
    });
  }

  handleUpdateKeg = (updatedKeg) =>  {
    const newMasterKegList = this.state.masterKegList.map((kegs) => {
      if (kegs.id === updatedKeg.id) {
        return updatedKeg;
      } else {
        return kegs;
      }
    });
    this.setState({
      currentPage: 'list', 
      masterKegList: newMasterKegList,
      currentKeg: null 
    });
  }
  handleDeleteKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(products => products.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      currentPage: 'list',
      currentKeg: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.currentPage === 'newKegForm')  {
      currentlyVisibleState = <KegForm
                                  onNewKegCreation={this.handleAddingNewKegToList}
                                  onClick = {this.handleClick}
                                  update = {false} />
    } else if (this.state.currentPage === 'list') {
      currentlyVisibleState = <KegList
                                  kegList = {this.state.masterKegList}
                                  onClick = {this.handleClick}
                                  onUpdateClick = {this.handleUpdateClick} />
    } else if (this.state.currentPage === 'updateKegForm')  {
      currentlyVisibleState = <KegForm
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