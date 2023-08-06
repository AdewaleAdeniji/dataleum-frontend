import axios from "axios";
import configs from "../config";

export const SendOTP = async (number) => {
  var config = {
    method: "get",
    url: `${configs.API_BASE_URL}check/${number}`,
    headers: {},
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const GetPhoneNumber = async (number) => {
  var config = {
    method: "get",
    url: `${configs.API_BASE_URL}number/${number}`,
    headers: {},
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const AddNumberAPI = async (number, key, username) => {
  var config = {
    method: "get",
    url: `${configs.API_BASE_URL}add/${number}/${username}/${key}`,
    headers: {},
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};

export const GetListedNumbers = async (key) => {
  var config = {
    method: "get",
    url: `${configs.API_BASE_URL}numbers/${key}`,
    headers: {},
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const GetTransactions = async () => {
  var config = {
    method: "get",
    url: `${configs.API_BASE_URL}transactions`,
    headers: {},
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const GetAllLogs = async (key) => {
  var config = {
    method: "get",
    url: `${configs.API_BASE_URL}${key}/logs`,
    headers: {},
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const GetNumberLogs = async (key) => {
  var config = {
    method: "get",
    url: `${configs.API_BASE_URL}${key}/logs/number`,
    headers: {},
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const GetDataLogs = async (key) => {
  var config = {
    method: "get",
    url: `${configs.API_BASE_URL}${key}/logs/data`,
    headers: {},
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const GetAdminLogs = async (key) => {
  var config = {
    method: "get",
    url: `${configs.API_BASE_URL}${key}/logs/manage`,
    headers: {},
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const DisableNumber = async (key, number) => {
  var config = {
    method: "get",
    url: `${configs.API_BASE_URL}remove/${number}/${key}`,
    headers: {},
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const UpdatePhoneNumber = async (number, key, allowedTimes) => {
  var config = {
    method: "put",
    url: `${configs.API_BASE_URL}update/${number}/${key}`,
    headers: {},
    data: {
      allowedTimes,
      status: true,
    },
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const ReactivateNumber = async (key, number) => {
  var config = {
    method: "get",
    url: `${configs.API_BASE_URL}activate/${number}/${key}`,
    headers: {},
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const GetData = async (number, dataNumber, otp, network) => {
  var config = {
    method: "get",
    url: `${configs.API_BASE_URL}buy/${number}/${dataNumber}/${otp}/${network}`,
    headers: {},
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
