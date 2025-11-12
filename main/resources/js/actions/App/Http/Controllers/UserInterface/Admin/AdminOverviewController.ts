import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/overview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
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
const AdminOverviewController = { index }

export default AdminOverviewController