import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import CheckBox from '../common/CheckBox';

class PageForm extends React.Component {
  constructor(props) {
    super(props);

    this.makeCheckBoxes = this.makeCheckBoxes.bind(this);
  }

  makeCheckBoxes() {
    return this.props.sections.map(section => (
      <CheckBox
        item={section}
        handleChange={this.props.onSectionChange}
        key={section.id}
      />
    ));
  }

  render() {
    const boxes = this.makeCheckBoxes();
    return (
      <div>
        <form>
          <div>{this.props.page.id}</div>

          {boxes}

          <TextInput
            name="details"
            label="Details"
            value={this.props.page.details}
            onChange={this.props.onChange}
          />

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.props.onSave}
          />
        </form>
      </div>
    );
  }
}

PageForm.propTypes = {
  page: PropTypes.shape({
    id: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSectionChange: PropTypes.func.isRequired,
};

export default PageForm;
