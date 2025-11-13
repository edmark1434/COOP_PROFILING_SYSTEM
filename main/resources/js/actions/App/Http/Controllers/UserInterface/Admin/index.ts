import AdminOverviewController from './AdminOverviewController'
import AdminMembersController from './AdminMembersController'
import AdminLoanController from './AdminLoanController'
const Admin = {
    AdminOverviewController: Object.assign(AdminOverviewController, AdminOverviewController),
AdminMembersController: Object.assign(AdminMembersController, AdminMembersController),
AdminLoanController: Object.assign(AdminLoanController, AdminLoanController),
}

export default Admin