import { connect } from 'react-redux';
import { createJob, clearErrors } from '../../actions/job_actions';
import JobPostForm from './job_post_form';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors),
    processJobForm: job => dispatch(createJob(job))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobPostForm);