import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
 * @see routes/web.php:41
 * @route '/member/profile'
 */
export const memberProfile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: memberProfile.url(options),
    method: 'get',
})

memberProfile.definition = {
    methods: ["get","head"],
    url: '/member/profile',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:41
 * @route '/member/profile'
 */
memberProfile.url = (options?: RouteQueryOptions) => {
    return memberProfile.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:41
 * @route '/member/profile'
 */
memberProfile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: memberProfile.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:41
 * @route '/member/profile'
 */
memberProfile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: memberProfile.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:41
 * @route '/member/profile'
 */
    const memberProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: memberProfile.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:41
 * @route '/member/profile'
 */
        memberProfileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: memberProfile.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:41
 * @route '/member/profile'
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
const member = {
    memberProfile: Object.assign(memberProfile, memberProfile),
}

export default member