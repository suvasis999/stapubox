import api from './api'; 

export const sendOtpApi = (mobile) => {
  return api.post('/trial/sendOtp', {
    mobile,
  });
};

export const verifyOtpApi = (mobile, otp) => {
  return api.post('/trial/verifyOtp', {
    mobile,
    otp,
  });
};