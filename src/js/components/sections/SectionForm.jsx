import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import ChangeLocation from '../common/ChangeLocation';
import RichEditor from '../common/RichEditor';

const SectionForm = props => (
  <div>
    <ChangeLocation
      location={props.location}
    />
    <form>
      <div>{props.section.id}</div>

      <TextInput
        name="name"
        label="Name"
        value={props.section.name}
        onChange={props.onChange}
      />

      <TextInput
        name="template"
        label="Template"
        value={props.section.template}
        onChange={props.onChange}
      />

      <RichEditor
        section={props.section}
        update={props.onChange}
      />

      <input
        type="submit"
        className="btn btn-primary"
        onClick={props.onSave}
      />
    </form>
  </div>
);

SectionForm.propTypes = {
  section: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    template: PropTypes.string.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default SectionForm;
