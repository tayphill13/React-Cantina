import React from 'react';
import KegList from './KegList';
import AddKeg from './NewKeg';
import UpdateKeg from './UpdateKeg';
import Keg from './Keg';

class KegControl extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      currentPage: 'list',
      currentKegId: null
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (pageName) => {
    this.setState({
      currentPage: pageName
    });
  }
  
  handleAddingNewKeg = (newKeg) =>  {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      currentPage: 'list',
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
      masterKegList: newMasterKegList,
      currentPage: 'list', 
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
    if (this.state.currentPage === 'list')  {
      currentlyVisibleState = <KegList
                                  kegList = {this.state.masterKegList}
                                  onClick = {this.handleClick}
                                  onKegClick = {this.handleViewingDetails} />
    } else if (this.state.currentPage === 'create') {
      currentlyVisibleState = <AddKeg
                                  kegList = {this.state.masterKegList}
                                  onClick = {this.handleClick}
                                  onAddingKeg = {this.handleAddingNewKeg} />
    } else if (this.state.currentPage === 'details') {
      currentlyVisibleState = <Keg
                                  keg = {this.state.currentKeg}
                                  onClick = {this.handleClick}
                                  onDeleteClick = {this.handleDeleteKeg}
                                  onEditClick = {this.handleUpdateClick} />
    } else if (this.state.currentPage === 'updateKeg')  {
      currentlyVisibleState = <UpdateKeg
                                  keg = {this.state.currentKeg}
                                  onClick = {this.handleClick}
                                  onUpdateKeg = {this.handleUpdateKeg}
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