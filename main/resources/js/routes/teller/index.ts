import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
 * @see routes/web.php:63
 * @route '/teller/overview'
 */
export const overview = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overview.url(options),
    method: 'get',
})

overview.definition = {
    methods: ["get","head"],
    url: '/teller/overview',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:63
 * @route '/teller/overview'
 */
overview.url = (options?: RouteQueryOptions) => {
    return overview.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:63
 * @route '/teller/overview'
 */
overview.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overview.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:63
 * @route '/teller/overview'
 */
overview.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: overview.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:63
 * @route '/teller/overview'
 */
    const overviewForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: overview.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:63
 * @route '/teller/overview'
 */
        overviewForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: overview.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:63
 * @route '/teller/overview'
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
 * @see routes/web.php:66
 * @route '/teller/member-lookup'
 */
export const memberLookup = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: memberLookup.url(options),
    method: 'get',
})

memberLookup.definition = {
    methods: ["get","head"],
    url: '/teller/member-lookup',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:66
 * @route '/teller/member-lookup'
 */
memberLookup.url = (options?: RouteQueryOptions) => {
    return memberLookup.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:66
 * @route '/teller/member-lookup'
 */
memberLookup.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: memberLookup.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:66
 * @route '/teller/member-lookup'
 */
memberLookup.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: memberLookup.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:66
 * @route '/teller/member-lookup'
 */
    const memberLookupForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: memberLookup.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:66
 * @route '/teller/member-lookup'
 */
        memberLookupForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: memberLookup.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:66
 * @route '/teller/member-lookup'
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
 * @see routes/web.php:69
 * @route '/teller/transactions'
 */
export const transactions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactions.url(options),
    method: 'get',
})

transactions.definition = {
    methods: ["get","head"],
    url: '/teller/transactions',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:69
 * @route '/teller/transactions'
 */
transactions.url = (options?: RouteQueryOptions) => {
    return transactions.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:69
 * @route '/teller/transactions'
 */
transactions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactions.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:69
 * @route '/teller/transactions'
 */
transactions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: transactions.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:69
 * @route '/teller/transactions'
 */
    const transactionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: transactions.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:69
 * @route '/teller/transactions'
 */
        transactionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: transactions.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:69
 * @route '/teller/transactions'
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
const teller = {
    overview: Object.assign(overview, overview),
memberLookup: Object.assign(memberLookup, memberLookup),
transactions: Object.assign(transactions, transactions),
}

export default teller