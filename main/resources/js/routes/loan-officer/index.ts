import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
 * @see routes/web.php:46
 * @route '/loan-officer/overview'
 */
export const overview = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overview.url(options),
    method: 'get',
})

overview.definition = {
    methods: ["get","head"],
    url: '/loan-officer/overview',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:46
 * @route '/loan-officer/overview'
 */
overview.url = (options?: RouteQueryOptions) => {
    return overview.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:46
 * @route '/loan-officer/overview'
 */
overview.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overview.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:46
 * @route '/loan-officer/overview'
 */
overview.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: overview.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:46
 * @route '/loan-officer/overview'
 */
    const overviewForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: overview.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:46
 * @route '/loan-officer/overview'
 */
        overviewForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: overview.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:46
 * @route '/loan-officer/overview'
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
 * @see routes/web.php:49
 * @route '/loan-officer/active-loans'
 */
export const activeLoans = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activeLoans.url(options),
    method: 'get',
})

activeLoans.definition = {
    methods: ["get","head"],
    url: '/loan-officer/active-loans',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:49
 * @route '/loan-officer/active-loans'
 */
activeLoans.url = (options?: RouteQueryOptions) => {
    return activeLoans.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:49
 * @route '/loan-officer/active-loans'
 */
activeLoans.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activeLoans.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:49
 * @route '/loan-officer/active-loans'
 */
activeLoans.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activeLoans.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:49
 * @route '/loan-officer/active-loans'
 */
    const activeLoansForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: activeLoans.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:49
 * @route '/loan-officer/active-loans'
 */
        activeLoansForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: activeLoans.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:49
 * @route '/loan-officer/active-loans'
 */
        activeLoansForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: activeLoans.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    activeLoans.form = activeLoansForm
/**
 * @see routes/web.php:52
 * @route '/loan-officer/loan-applications'
 */
export const loanApplications = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loanApplications.url(options),
    method: 'get',
})

loanApplications.definition = {
    methods: ["get","head"],
    url: '/loan-officer/loan-applications',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:52
 * @route '/loan-officer/loan-applications'
 */
loanApplications.url = (options?: RouteQueryOptions) => {
    return loanApplications.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:52
 * @route '/loan-officer/loan-applications'
 */
loanApplications.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loanApplications.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:52
 * @route '/loan-officer/loan-applications'
 */
loanApplications.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: loanApplications.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:52
 * @route '/loan-officer/loan-applications'
 */
    const loanApplicationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: loanApplications.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:52
 * @route '/loan-officer/loan-applications'
 */
        loanApplicationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: loanApplications.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:52
 * @route '/loan-officer/loan-applications'
 */
        loanApplicationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: loanApplications.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    loanApplications.form = loanApplicationsForm
/**
 * @see routes/web.php:55
 * @route '/loan-officer/member-lookup'
 */
export const memberLookup = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: memberLookup.url(options),
    method: 'get',
})

memberLookup.definition = {
    methods: ["get","head"],
    url: '/loan-officer/member-lookup',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:55
 * @route '/loan-officer/member-lookup'
 */
memberLookup.url = (options?: RouteQueryOptions) => {
    return memberLookup.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:55
 * @route '/loan-officer/member-lookup'
 */
memberLookup.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: memberLookup.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:55
 * @route '/loan-officer/member-lookup'
 */
memberLookup.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: memberLookup.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:55
 * @route '/loan-officer/member-lookup'
 */
    const memberLookupForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: memberLookup.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:55
 * @route '/loan-officer/member-lookup'
 */
        memberLookupForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: memberLookup.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:55
 * @route '/loan-officer/member-lookup'
 */
        memberLookupForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: memberLookup.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    memberLookup.form = memberLookupForm
/**
 * @see routes/web.php:58
 * @route '/loan-officer/loans/id'
 */
export const loanView = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loanView.url(options),
    method: 'get',
})

loanView.definition = {
    methods: ["get","head"],
    url: '/loan-officer/loans/id',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:58
 * @route '/loan-officer/loans/id'
 */
loanView.url = (options?: RouteQueryOptions) => {
    return loanView.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:58
 * @route '/loan-officer/loans/id'
 */
loanView.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loanView.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:58
 * @route '/loan-officer/loans/id'
 */
loanView.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: loanView.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:58
 * @route '/loan-officer/loans/id'
 */
    const loanViewForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: loanView.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:58
 * @route '/loan-officer/loans/id'
 */
        loanViewForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: loanView.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:58
 * @route '/loan-officer/loans/id'
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
const loanOfficer = {
    overview: Object.assign(overview, overview),
activeLoans: Object.assign(activeLoans, activeLoans),
loanApplications: Object.assign(loanApplications, loanApplications),
memberLookup: Object.assign(memberLookup, memberLookup),
loanView: Object.assign(loanView, loanView),
}

export default loanOfficer