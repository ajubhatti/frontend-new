export const auth = {
  login: { method: "post", url: "/auth/login" },
  register: { method: "post", url: "/auth/register" },
  logout: { method: "get", url: "/auth/logout" },
  forgotPass: { method: "post", url: "/auth/forgot-password" },
  forgotTransactionPin: { method: "post", url: "/auth/forgot-transaction-pin" },
  resetPass: { method: "post", url: "/auth/reset-password" },
  resetTransactionPin: { method: "post", url: "/auth/reset-transaction-pin" },
  verifyEmail: { method: "post", url: "/auth/verify-email" },
  verifyPhone: { method: "post", url: "/auth/verify-phone-no" },
  verifyPhoneOtp: { method: "post", url: "/auth/verify-phone-no-otp" },
  resendOtp: { method: "post", url: "/auth/resendOtp" },

  referer: { method: "post", url: "/auth/getByReferralCode" },
  state: { method: "get", url: "/state" },
  getUserById: { method: "post", url: "/auth/getUserById" },

  changePassword: { method: "post", url: "/auth/changePassword" },
  changeTransactionPin: { method: "post", url: "/auth/changeTransactionPin" },
  userWalletList: { method: "post", url: "/wallet" },
  userWalletData: { method: "post", url: "/walletData" },
  userTransactionList: { method: "post", url: "/transaction" },
  updateUser: { method: "post", url: "/update" },
  transactions: { method: "post", url: "/transaction/getByUserId" },
};

export const home = {
  banner: { method: "get", url: "/banner" },
  ticker: { method: "get", url: "/ticker" },
};

export const extra = {
  contact: { method: "post", url: "/contactUs" },
  refer: { method: "post", url: "/referral/code" },
  support: { method: "get", url: "/support" },
};

export const profile = {
  adminBankList: { method: "get", url: "/bankAccount" },
  walletRequest: { method: "post", url: "/walletTransaction" },
  walletTransaction: { method: "post", url: "/walletTransaction/getByUserId" },
  walletTransactionByUserId: {
    method: "post",
    url: "/walletTransaction/getByUserId",
  },
};

export const service = {
  service: { method: "get", url: "/service" },
  getMplan: { method: "post", url: "/mplan/getMplan" },
};

export const company = {
  company: { method: "get", url: "/company" },
};
export const operator = {
  operator: { method: "post", url: "/operator" },
};

export const recharge = {
  rechargeOrBill: { method: "post", url: "/rechargeOrBill" },
  listById: { method: "post", url: "/rechargeOrBill/getRecharges" },
  createComplain: { method: "post", url: "/rechargeComplaint/create" },
};

export const wallet = {
  type: { method: "get", url: "/paymentMode" },
  addByPaymentGateway: {
    method: "post",
    url: "/walletTransaction/addByPaymentGateway",
  },
};
