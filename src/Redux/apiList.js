export const auth = {
  login: { method: "post", url: "/auth/login" },
  register: { method: "post", url: "/auth/register" },
  logout: { method: "get", url: "/auth/logout" },
  forgotPass: { method: "post", url: "/auth/forgot-password" },
  resetPass: { method: "post", url: "/auth/reset-password" },
  verifyEmail: { method: "post", url: "/auth/verify-email" },
  verifyPhone: { method: "post", url: "/auth/verify-phone-no" },
  resendOtp: { method: "post", url: "/auth/resendOtp" },
  referer: { method: "post", url: "/auth/getByReferralCode" },
  state: { method: "get", url: "/state" },
};

export const home = {
  banner: { method: "get", url: "/myBanner" },
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
};

export const service = {
  service: { method: "get", url: "/service" },
};
