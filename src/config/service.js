import api from './api'; 

export const sendOtpApi = (mobile) => {
  return api.post('/trial/sendOtp', {
    mobile,
  });
};

export const verifyOtpApi = (mobile, otp) => {
  return api.post(`/trial/verifyOtp?mobile=${mobile}&otp=${otp}`);
};

export const resendOtpApi = (mobile) => {
   
  return api.post('/trial/resendOtp', {
    mobile,
  });
};

export const getSportsApi = () => {
  return api.get('/sports/');
};

export const submitData = async (playerData) => {
  try {
    const payload = {
      player_data: playerData,
    };

    const response = await api.post('/trial/player', payload);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPlayerDataApi = async (jwtToken) => {
  return await api.get('/trial/player', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwtToken}`,
      'X-Api-Token': 'trial_77998137_839ee58d95d0e8f1b2764a66f46638ae',
    },
  });
};