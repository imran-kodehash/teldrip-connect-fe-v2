import type { UserInfo } from "@/types/user";
import { create } from "zustand";

interface AuthStore extends UserInfo {
  setAuthUser: (user: Partial<UserInfo>) => void;
  clearAuthUser: () => void;
}

const initialPermissions = {
  AssignUnassignContacts: false,
  Autodial: false,
  CreateEditContacts: false,
  CreateEditUser: false,
  DeleteContacts: false,
  DeleteUser: false,
  Enable2FA: false,
  EnableBrowserCalling: false,
  ManageBillingSubscription: false,
  ManageCallDisposition: false,
  ManageCampaign: false,
  ManageInboundCall: false,
  ManageIntegrations: false,
  ManageNotifications: false,
  ManageNumbers: false,
  ManageOutboundCalls: false,
  ManagePrivateRecording: false,
  ManageRoles: false,
  ManageVoicemail: false,
  ManageVoicemailSettings: false,
  RecordCalls: false,
  SendEmailReports: false,
  ViewCallLogs: false,
  ViewCalls: false,
  ViewContacts: false,
  ViewDashboard: false,
  ViewUserDetails: false,
};

export const useAuthStore = create<AuthStore>((set) => ({
  userId: null,
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: null,
  code: null,
  accountType: null,
  profileUrl: null,
  freePlan: null,
  assignedPlan: null,
  planExpiry: null,
  permissions: initialPermissions,

  // Actions
  setAuthUser: (user) => set((state) => ({ ...state, ...user })),
  clearAuthUser: () =>
    set(() => ({
      userId: null,
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: null,
      code: null,
      accountType: null,
      profileUrl: null,
      freePlan: null,
      assignedPlan: null,
      planExpiry: null,
      permissions: initialPermissions,
    })),
}));
