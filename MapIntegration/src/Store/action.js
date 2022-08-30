import {GET_LOGIN_DATA} from './actiontype';

export const gettingData = (email, password) => {
  return async dispatch => {
    try {
      const response = await fetch(
        'https://apidev.moxieuniverse.com/api/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        },
      );
      const data = await response.json();

      // console.log('Response', data);
      // console.log('Response', data.status);
      //dispatch(fetchedData(data));

      if (data.status) {
       //const fetchedCordinatesData = gettingMapCordinates(data.data.accessToken)
       dispatch(fetchedData(data.data.accessToken));
       
      }
    } catch (e) {
      console.error('error : ', e);
    }
  };
};

const fetchedData = data => {
  return {
    type: GET_LOGIN_DATA,
    payload: data,
  };
};
