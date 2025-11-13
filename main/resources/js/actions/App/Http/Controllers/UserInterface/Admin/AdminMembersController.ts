import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminMembersController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminMembersController.php:11
 * @route '/admin/members'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/members',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminMembersController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminMembersController.php:11
 * @route '/admin/members'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminMembersController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminMembersController.php:11
 * @route '/admin/members'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminMembersController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminMembersController.php:11
 * @route '/admin/members'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminMembersController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminMembersController.php:11
 * @route '/admin/members'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminMembersController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminMembersController.php:11
 * @route '/admin/members'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminMembersController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminMembersController.php:11
 * @route '/admin/members'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const AdminMembersController = { index }

export default AdminMembersController