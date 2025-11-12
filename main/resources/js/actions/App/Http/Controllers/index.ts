import Auth from './Auth'
import UserInterface from './UserInterface'
import Settings from './Settings'
import UserController from './UserController'
import MemberController from './MemberController'
import AccountController from './AccountController'
import LoanController from './LoanController'
import InstallmentController from './InstallmentController'
import TransactionController from './TransactionController'
import AuditLogController from './AuditLogController'
import NotificationController from './NotificationController'
import LedgerEntryController from './LedgerEntryController'
import ShareSnapshotController from './ShareSnapshotController'
import LoanPurposeController from './LoanPurposeController'
import BiometricDataController from './BiometricDataController'
import SettingController from './SettingController'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
UserInterface: Object.assign(UserInterface, UserInterface),
Settings: Object.assign(Settings, Settings),
UserController: Object.assign(UserController, UserController),
MemberController: Object.assign(MemberController, MemberController),
AccountController: Object.assign(AccountController, AccountController),
LoanController: Object.assign(LoanController, LoanController),
InstallmentController: Object.assign(InstallmentController, InstallmentController),
TransactionController: Object.assign(TransactionController, TransactionController),
AuditLogController: Object.assign(AuditLogController, AuditLogController),
NotificationController: Object.assign(NotificationController, NotificationController),
LedgerEntryController: Object.assign(LedgerEntryController, LedgerEntryController),
ShareSnapshotController: Object.assign(ShareSnapshotController, ShareSnapshotController),
LoanPurposeController: Object.assign(LoanPurposeController, LoanPurposeController),
BiometricDataController: Object.assign(BiometricDataController, BiometricDataController),
SettingController: Object.assign(SettingController, SettingController),
}

export default Controllers