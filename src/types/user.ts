export interface UserInfo {
  userId: number | null;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber?: string | null;
  code?: string | null;
  accountType: AccountType | null;
  profileUrl: string | null;
  freePlan: boolean | null;
  assignedPlan: AssignedPlan | null;
  planExpiry: string | null;
  permissions: Permissions;
}

type AccountType = "Owner" | "Supervisor" | "Agent";

type PlanName = "Professional" | "Basic" | "Viewer";

interface AssignedPlan {
  id: number;
  name: PlanName;
}

interface Permissions {
  AssignUnassignContacts: boolean;
  Autodial: boolean;
  CreateEditContacts: boolean;
  CreateEditUser: boolean;
  DeleteContacts: boolean;
  DeleteUser: boolean;
  Enable2FA: boolean;
  EnableBrowserCalling: boolean;
  ManageBillingSubscription: boolean;
  ManageCallDisposition: boolean;
  ManageCampaign: boolean;
  ManageInboundCall: boolean;
  ManageIntegrations: boolean;
  ManageNotifications: boolean;
  ManageNumbers: boolean;
  ManageOutboundCalls: boolean;
  ManagePrivateRecording: boolean;
  ManageRoles: boolean;
  ManageVoicemail: boolean;
  ManageVoicemailSettings: boolean;
  RecordCalls: boolean;
  SendEmailReports: boolean;
  ViewCallLogs: boolean;
  ViewCalls: boolean;
  ViewContacts: boolean;
  ViewDashboard: boolean;
  ViewUserDetails: boolean;
}
