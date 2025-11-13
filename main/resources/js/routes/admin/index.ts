import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::overview
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
export const overview = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overview.url(options),
    method: 'get',
})

overview.definition = {
    methods: ["get","head"],
    url: '/admin/overview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::overview
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
overview.url = (options?: RouteQueryOptions) => {
    return overview.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::overview
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
overview.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overview.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::overview
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
overview.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: overview.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::overview
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
    const overviewForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: overview.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::overview
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
        overviewForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: overview.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::overview
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
        overviewForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: overview.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    overview.form = overviewForm
/**
 * @see routes/web.php:19
 * @route '/admin/members'
 */
export const members = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: members.url(options),
    method: 'get',
})

members.definition = {
    methods: ["get","head"],
    url: '/admin/members',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:19
 * @route '/admin/members'
 */
members.url = (options?: RouteQueryOptions) => {
    return members.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:19
 * @route '/admin/members'
 */
members.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: members.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:19
 * @route '/admin/members'
 */
members.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: members.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:19
 * @route '/admin/members'
 */
    const membersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: members.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:19
 * @route '/admin/members'
 */
        membersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: members.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:19
 * @route '/admin/members'
 */
        membersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: members.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    members.form = membersForm
/**
 * @see routes/web.php:22
 * @route '/admin/accounts'
 */
export const accounts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: accounts.url(options),
    method: 'get',
})

accounts.definition = {
    methods: ["get","head"],
    url: '/admin/accounts',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:22
 * @route '/admin/accounts'
 */
accounts.url = (options?: RouteQueryOptions) => {
    return accounts.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:22
 * @route '/admin/accounts'
 */
accounts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: accounts.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:22
 * @route '/admin/accounts'
 */
accounts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: accounts.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:22
 * @route '/admin/accounts'
 */
    const accountsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: accounts.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:22
 * @route '/admin/accounts'
 */
        accountsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: accounts.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:22
 * @route '/admin/accounts'
 */
        accountsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: accounts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    accounts.form = accountsForm
/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminLoanController::loans
 * @see app/Http/Controllers/UserInterface/Admin/AdminLoanController.php:15
 * @route '/admin/loans'
 */
export const loans = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loans.url(options),
    method: 'get',
})

loans.definition = {
    methods: ["get","head"],
    url: '/admin/loans',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminLoanController::loans
 * @see app/Http/Controllers/UserInterface/Admin/AdminLoanController.php:15
 * @route '/admin/loans'
 */
loans.url = (options?: RouteQueryOptions) => {
    return loans.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminLoanController::loans
 * @see app/Http/Controllers/UserInterface/Admin/AdminLoanController.php:15
 * @route '/admin/loans'
 */
loans.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loans.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminLoanController::loans
 * @see app/Http/Controllers/UserInterface/Admin/AdminLoanController.php:15
 * @route '/admin/loans'
 */
loans.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: loans.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminLoanController::loans
 * @see app/Http/Controllers/UserInterface/Admin/AdminLoanController.php:15
 * @route '/admin/loans'
 */
    const loansForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: loans.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminLoanController::loans
 * @see app/Http/Controllers/UserInterface/Admin/AdminLoanController.php:15
 * @route '/admin/loans'
 */
        loansForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: loans.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminLoanController::loans
 * @see app/Http/Controllers/UserInterface/Admin/AdminLoanController.php:15
 * @route '/admin/loans'
 */
        loansForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: loans.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    loans.form = loansForm
/**
 * @see routes/web.php:27
 * @route '/admin/transactions'
 */
export const transactions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactions.url(options),
    method: 'get',
})

transactions.definition = {
    methods: ["get","head"],
    url: '/admin/transactions',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:27
 * @route '/admin/transactions'
 */
transactions.url = (options?: RouteQueryOptions) => {
    return transactions.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:27
 * @route '/admin/transactions'
 */
transactions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactions.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:27
 * @route '/admin/transactions'
 */
transactions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: transactions.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:27
 * @route '/admin/transactions'
 */
    const transactionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: transactions.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:27
 * @route '/admin/transactions'
 */
        transactionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: transactions.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:27
 * @route '/admin/transactions'
 */
        transactionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: transactions.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    transactions.form = transactionsForm
/**
 * @see routes/web.php:30
 * @route '/admin/staff'
 */
export const staff = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: staff.url(options),
    method: 'get',
})

staff.definition = {
    methods: ["get","head"],
    url: '/admin/staff',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:30
 * @route '/admin/staff'
 */
staff.url = (options?: RouteQueryOptions) => {
    return staff.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:30
 * @route '/admin/staff'
 */
staff.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: staff.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:30
 * @route '/admin/staff'
 */
staff.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: staff.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:30
 * @route '/admin/staff'
 */
    const staffForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: staff.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:30
 * @route '/admin/staff'
 */
        staffForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: staff.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:30
 * @route '/admin/staff'
 */
        staffForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: staff.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    staff.form = staffForm
/**
 * @see routes/web.php:33
 * @route '/admin/staff/id'
 */
export const staffProfile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: staffProfile.url(options),
    method: 'get',
})

staffProfile.definition = {
    methods: ["get","head"],
    url: '/admin/staff/id',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:33
 * @route '/admin/staff/id'
 */
staffProfile.url = (options?: RouteQueryOptions) => {
    return staffProfile.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:33
 * @route '/admin/staff/id'
 */
staffProfile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: staffProfile.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:33
 * @route '/admin/staff/id'
 */
staffProfile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: staffProfile.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:33
 * @route '/admin/staff/id'
 */
    const staffProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: staffProfile.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:33
 * @route '/admin/staff/id'
 */
        staffProfileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: staffProfile.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:33
 * @route '/admin/staff/id'
 */
        staffProfileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: staffProfile.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    staffProfile.form = staffProfileForm
/**
 * @see routes/web.php:36
 * @route '/admin/member-profile'
 */
export const memberProfile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: memberProfile.url(options),
    method: 'get',
})

memberProfile.definition = {
    methods: ["get","head"],
    url: '/admin/member-profile',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:36
 * @route '/admin/member-profile'
 */
memberProfile.url = (options?: RouteQueryOptions) => {
    return memberProfile.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:36
 * @route '/admin/member-profile'
 */
memberProfile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: memberProfile.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:36
 * @route '/admin/member-profile'
 */
memberProfile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: memberProfile.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:36
 * @route '/admin/member-profile'
 */
    const memberProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: memberProfile.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:36
 * @route '/admin/member-profile'
 */
        memberProfileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: memberProfile.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:36
 * @route '/admin/member-profile'
 */
        memberProfileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: memberProfile.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    memberProfile.form = memberProfileForm
/**
 * @see routes/web.php:39
 * @route '/admin/loans/id'
 */
export const loanView = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loanView.url(options),
    method: 'get',
})

loanView.definition = {
    methods: ["get","head"],
    url: '/admin/loans/id',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:39
 * @route '/admin/loans/id'
 */
loanView.url = (options?: RouteQueryOptions) => {
    return loanView.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:39
 * @route '/admin/loans/id'
 */
loanView.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loanView.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:39
 * @route '/admin/loans/id'
 */
loanView.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: loanView.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:39
 * @route '/admin/loans/id'
 */
    const loanViewForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: loanView.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:39
 * @route '/admin/loans/id'
 */
        loanViewForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: loanView.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:39
 * @route '/admin/loans/id'
 */
        loanViewForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: loanView.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    loanView.form = loanViewForm
const admin = {
    overview: Object.assign(overview, overview),
members: Object.assign(members, members),
accounts: Object.assign(accounts, accounts),
loans: Object.assign(loans, loans),
transactions: Object.assign(transactions, transactions),
staff: Object.assign(staff, staff),
staffProfile: Object.assign(staffProfile, staffProfile),
memberProfile: Object.assign(memberProfile, memberProfile),
loanView: Object.assign(loanView, loanView),
}

export default admin