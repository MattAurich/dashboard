import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pageActions from '../../actions/pageActions';
import PageForm from './PageForm';

class CreatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {
        id: '',
        details: '',
        sections: [],
      },
    };
    this.savePage = this.savePage.bind(this);
    this.updatePageSections = this.updatePageSections.bind(this);
    this.updatePageState = this.updatePageState.bind(this);
  }

  updatePageSections(event) {
    const { page } = this.state;
    const sectionId = event.target.value;
    const section = this.props.checkBoxSections
      .filter(sectionInstance => sectionInstance.id === sectionId)[0];
    section.checked = event.target.checked;

    if (section.checked) {
      page.sections.push(section);
    } else {
      const index = page.sections.findIndex(p => p.id === sectionId);
      page.sections.splice(index, 1);
    }
    this.setState({ page });
  }

  updatePageState(event) {
    const field = event.target.name;
    const { page } = this.state;
    page[field] = event.target.value;

    return this.setState({ page });
  }

  savePage(event) {
    event.preventDefault();
    this.props.actions.createPage(this.state.page);
  }

  render() {
    return (
      <div>
        <h1>new page</h1>
        <PageForm
          page={this.state.page}
          sections={this.props.checkBoxSections}
          onSave={this.savePage}
          onChange={this.updatePageState}
          onSectionChange={this.updatePageSections}
          location={this.props.location}
        />
      </div>
    );
  }
}


function sectionsForCheckBoxes(sections) {
  return sections.map((section) => {
    const sectionInstance = section;
    sectionInstance.checked = false;
    return sectionInstance;
  });
}


CreatePage.propTypes = {
  checkBoxSections: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  let checkBoxSections = [];
  if (state.sections.length > 0) {
    checkBoxSections = sectionsForCheckBoxes(Object.assign(
      [],
      state.sections,
    ));
  }

  return {
    checkBoxSections,
    location: state.location,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pageActions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
