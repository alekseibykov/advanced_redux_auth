import axios from 'axios';
import history from '../history';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        history.push('/feature');
      })
      .catch(() => {

      })

  };
};
