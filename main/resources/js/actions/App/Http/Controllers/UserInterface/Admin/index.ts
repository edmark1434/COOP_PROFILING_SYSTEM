import AdminOverviewController from './AdminOverviewController'
import AdminLoanController from './AdminLoanController'
const Admin = {
    AdminOverviewController: Object.assign(AdminOverviewController, AdminOverviewController),
AdminLoanController: Object.assign(AdminLoanController, AdminLoanController),
}

export default Admin