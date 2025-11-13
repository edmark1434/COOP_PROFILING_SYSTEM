import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see routes/web.php:75
* @route '/member/overview'
*/
export const overview = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overview.url(options),
    method: 'get',
})

overview.definition = {
    methods: ["get","head"],
    url: '/member/overview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:75
* @route '/member/overview'
*/
overview.url = (options?: RouteQueryOptions) => {




    return overview.definition.url + queryParams(options)
}

/**
* @see routes/web.php:75
* @route '/member/overview'
*/
overview.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overview.url(options),
    method: 'get',
})

/**
* @see routes/web.php:75
* @route '/member/overview'
*/
overview.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: overview.url(options),
    method: 'head',
})

/**
* @see routes/web.php:75
* @route '/member/overview'
*/
const overviewForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: overview.url(options),
    method: 'get',
})

/**
* @see routes/web.php:75
* @route '/member/overview'
*/
overviewForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: overview.url(options),
    method: 'get',
})

/**
* @see routes/web.php:75
* @route '/member/overview'
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
* @see routes/web.php:78
* @route '/member/my-transactions'
*/
export const myTransactions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myTransactions.url(options),
    method: 'get',
})

myTransactions.definition = {
    methods: ["get","head"],
    url: '/member/my-transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:78
* @route '/member/my-transactions'
*/
myTransactions.url = (options?: RouteQueryOptions) => {




    return myTransactions.definition.url + queryParams(options)
}

/**
* @see routes/web.php:78
* @route '/member/my-transactions'
*/
myTransactions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myTransactions.url(options),
    method: 'get',
})

/**
* @see routes/web.php:78
* @route '/member/my-transactions'
*/
myTransactions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: myTransactions.url(options),
    method: 'head',
})

/**
* @see routes/web.php:78
* @route '/member/my-transactions'
*/
const myTransactionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myTransactions.url(options),
    method: 'get',
})

/**
* @see routes/web.php:78
* @route '/member/my-transactions'
*/
myTransactionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myTransactions.url(options),
    method: 'get',
})

/**
* @see routes/web.php:78
* @route '/member/my-transactions'
*/
myTransactionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myTransactions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

myTransactions.form = myTransactionsForm

/**
* @see routes/web.php:81
* @route '/member/my-loans'
*/
export const myLoans = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myLoans.url(options),
    method: 'get',
})

myLoans.definition = {
    methods: ["get","head"],
    url: '/member/my-loans',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:81
* @route '/member/my-loans'
*/
myLoans.url = (options?: RouteQueryOptions) => {




    return myLoans.definition.url + queryParams(options)
}

/**
* @see routes/web.php:81
* @route '/member/my-loans'
*/
myLoans.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myLoans.url(options),
    method: 'get',
})

/**
* @see routes/web.php:81
* @route '/member/my-loans'
*/
myLoans.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: myLoans.url(options),
    method: 'head',
})

/**
* @see routes/web.php:81
* @route '/member/my-loans'
*/
const myLoansForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myLoans.url(options),
    method: 'get',
})

/**
* @see routes/web.php:81
* @route '/member/my-loans'
*/
myLoansForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myLoans.url(options),
    method: 'get',
})

/**
* @see routes/web.php:81
* @route '/member/my-loans'
*/
myLoansForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myLoans.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

myLoans.form = myLoansForm

/**
* @see routes/web.php:84
* @route '/member/notifications'
*/
export const notifications = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(options),
    method: 'get',
})

notifications.definition = {
    methods: ["get","head"],
    url: '/member/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:84
* @route '/member/notifications'
*/
notifications.url = (options?: RouteQueryOptions) => {




    return notifications.definition.url + queryParams(options)
}

/**
* @see routes/web.php:84
* @route '/member/notifications'
*/
notifications.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(options),
    method: 'get',
})

/**
* @see routes/web.php:84
* @route '/member/notifications'
*/
notifications.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notifications.url(options),
    method: 'head',
})

/**
* @see routes/web.php:84
* @route '/member/notifications'
*/
const notificationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notifications.url(options),
    method: 'get',
})

/**
* @see routes/web.php:84
* @route '/member/notifications'
*/
notificationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notifications.url(options),
    method: 'get',
})

/**
* @see routes/web.php:84
* @route '/member/notifications'
*/
notificationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notifications.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

notifications.form = notificationsForm



const member = {
    overview: Object.assign(overview, overview),
    myTransactions: Object.assign(myTransactions, myTransactions),
    myLoans: Object.assign(myLoans, myLoans),
    notifications: Object.assign(notifications, notifications),
}

export default member