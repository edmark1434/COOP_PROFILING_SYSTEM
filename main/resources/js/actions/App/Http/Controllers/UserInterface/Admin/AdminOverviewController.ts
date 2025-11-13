import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/dashboard'
 */
const index750aeb224105761400ee952169bd178c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index750aeb224105761400ee952169bd178c.url(options),
    method: 'get',
})

index750aeb224105761400ee952169bd178c.definition = {
    methods: ["get","head"],
    url: '/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/dashboard'
 */
index750aeb224105761400ee952169bd178c.url = (options?: RouteQueryOptions) => {
    return index750aeb224105761400ee952169bd178c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/dashboard'
 */
index750aeb224105761400ee952169bd178c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index750aeb224105761400ee952169bd178c.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/dashboard'
 */
index750aeb224105761400ee952169bd178c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index750aeb224105761400ee952169bd178c.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/dashboard'
 */
    const index750aeb224105761400ee952169bd178cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index750aeb224105761400ee952169bd178c.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/dashboard'
 */
        index750aeb224105761400ee952169bd178cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index750aeb224105761400ee952169bd178c.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/dashboard'
 */
        index750aeb224105761400ee952169bd178cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index750aeb224105761400ee952169bd178c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index750aeb224105761400ee952169bd178c.form = index750aeb224105761400ee952169bd178cForm
    /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
const index1ab6d5d327b3d921bc79f01f1636a929 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1ab6d5d327b3d921bc79f01f1636a929.url(options),
    method: 'get',
})

index1ab6d5d327b3d921bc79f01f1636a929.definition = {
    methods: ["get","head"],
    url: '/admin/overview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
index1ab6d5d327b3d921bc79f01f1636a929.url = (options?: RouteQueryOptions) => {
    return index1ab6d5d327b3d921bc79f01f1636a929.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
index1ab6d5d327b3d921bc79f01f1636a929.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1ab6d5d327b3d921bc79f01f1636a929.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
index1ab6d5d327b3d921bc79f01f1636a929.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index1ab6d5d327b3d921bc79f01f1636a929.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
    const index1ab6d5d327b3d921bc79f01f1636a929Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index1ab6d5d327b3d921bc79f01f1636a929.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
        index1ab6d5d327b3d921bc79f01f1636a929Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index1ab6d5d327b3d921bc79f01f1636a929.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserInterface\Admin\AdminOverviewController::index
 * @see app/Http/Controllers/UserInterface/Admin/AdminOverviewController.php:14
 * @route '/admin/overview'
 */
        index1ab6d5d327b3d921bc79f01f1636a929Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index1ab6d5d327b3d921bc79f01f1636a929.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index1ab6d5d327b3d921bc79f01f1636a929.form = index1ab6d5d327b3d921bc79f01f1636a929Form

export const index = {
    '/admin/dashboard': index750aeb224105761400ee952169bd178c,
    '/admin/overview': index1ab6d5d327b3d921bc79f01f1636a929,
}

const AdminOverviewController = { index }

export default AdminOverviewController