import React from 'react';
import KegList from './KegList';
import NewKeg from './NewKeg';
import UpdateKeg from './UpdateKeg';
import KegDetails from './KegDetails';

class KegControl extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      currentPage: 'index',
      currentKeg: null,
    };
    // this.handleClick =this.handleClick.bind(this);
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
      currentPage: 'index',
    });
  }

  handleViewingDetails = (id) => {
    const kegToView = this.state.masterKegList.filter(kegs => kegs.id === id)[0];
    this.setState({
      currentPage: 'details',
      currentKeg: kegToView
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
    const newMasterKegList = this.state.masterKegList.map(kegs => {
      if (updatedKeg.id === kegs.id) {
        return updatedKeg;
      } else {
        return kegs;
      }
    });
    this.setState({
      masterKegList: newMasterKegList,
      currentPage: 'details', 
      currentKeg: updatedKeg
    });
  }
  handleDeleteKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(kegs => kegs.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      currentPage: 'index',
      currentKeg: null
    });
  }
  handleServePint = () => {
    this.setState((prevState, { pintsRemaining }) => ({
        pintsRemaining: prevState.pintsRemaining -1
      }));
  };
  render(){
    let pageToDisplay = null;
    if (this.state.currentPage === 'index')  {
      pageToDisplay = <KegList
        kegList = {this.state.masterKegList}
        onLinkClick = {this.handleClick}
        onKegClick = {this.handleViewingDetails} />
    } else if (this.state.currentPage === 'create') {
      pageToDisplay = <NewKeg
        onLinkClick = {this.handleClick}
        onAddingKeg = {this.handleAddingNewKeg} />
    } else if (this.state.currentPage === 'details') {
      pageToDisplay = <KegDetails
        keg = {this.state.currentKeg}
        onLinkClick = {this.handleClick}
        onDeleteClick = {this.handleDeleteKeg}
        onUpdateClick = {this.handleUpdateClick}
        onServePint = {this.handleServePint} />
    } else if (this.state.currentPage === 'update')  {
      pageToDisplay = <UpdateKeg
        keg = {this.state.currentKeg}
        onLinkClick = {this.handleClick}
        onUpdateKeg = {this.handleUpdateKeg}/>
    }
    return (
      <React.Fragment>
        {pageToDisplay}
      </React.Fragment>
    );
  }
}

export default KegControl;