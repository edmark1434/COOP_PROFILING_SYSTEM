import AdminOverviewController from './AdminOverviewController'
import AdminMembersController from './AdminMembersController'
const Admin = {
    AdminOverviewController: Object.assign(AdminOverviewController, AdminOverviewController),
AdminMembersController: Object.assign(AdminMembersController, AdminMembersController),
}

export default Admin