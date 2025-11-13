import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\BiometricDataController::index
* @see app/Http/Controllers/BiometricDataController.php:13
* @route '/biometric-data'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/biometric-data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BiometricDataController::index
* @see app/Http/Controllers/BiometricDataController.php:13
* @route '/biometric-data'
*/
index.url = (options?: RouteQueryOptions) => {




    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BiometricDataController::index
* @see app/Http/Controllers/BiometricDataController.php:13
* @route '/biometric-data'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BiometricDataController::index
* @see app/Http/Controllers/BiometricDataController.php:13
* @route '/biometric-data'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BiometricDataController::index
* @see app/Http/Controllers/BiometricDataController.php:13
* @route '/biometric-data'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BiometricDataController::index
* @see app/Http/Controllers/BiometricDataController.php:13
* @route '/biometric-data'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BiometricDataController::index
* @see app/Http/Controllers/BiometricDataController.php:13
* @route '/biometric-data'
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

/**
* @see \App\Http\Controllers\BiometricDataController::create
* @see app/Http/Controllers/BiometricDataController.php:22
* @route '/biometric-data/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/biometric-data/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BiometricDataController::create
* @see app/Http/Controllers/BiometricDataController.php:22
* @route '/biometric-data/create'
*/
create.url = (options?: RouteQueryOptions) => {




    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BiometricDataController::create
* @see app/Http/Controllers/BiometricDataController.php:22
* @route '/biometric-data/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BiometricDataController::create
* @see app/Http/Controllers/BiometricDataController.php:22
* @route '/biometric-data/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BiometricDataController::create
* @see app/Http/Controllers/BiometricDataController.php:22
* @route '/biometric-data/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BiometricDataController::create
* @see app/Http/Controllers/BiometricDataController.php:22
* @route '/biometric-data/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BiometricDataController::create
* @see app/Http/Controllers/BiometricDataController.php:22
* @route '/biometric-data/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\BiometricDataController::store
* @see app/Http/Controllers/BiometricDataController.php:30
* @route '/biometric-data'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/biometric-data',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BiometricDataController::store
* @see app/Http/Controllers/BiometricDataController.php:30
* @route '/biometric-data'
*/
store.url = (options?: RouteQueryOptions) => {




    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BiometricDataController::store
* @see app/Http/Controllers/BiometricDataController.php:30
* @route '/biometric-data'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BiometricDataController::store
* @see app/Http/Controllers/BiometricDataController.php:30
* @route '/biometric-data'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BiometricDataController::store
* @see app/Http/Controllers/BiometricDataController.php:30
* @route '/biometric-data'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\BiometricDataController::show
* @see app/Http/Controllers/BiometricDataController.php:48
* @route '/biometric-data/{biometric_datum}'
*/
export const show = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/biometric-data/{biometric_datum}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BiometricDataController::show
* @see app/Http/Controllers/BiometricDataController.php:48
* @route '/biometric-data/{biometric_datum}'
*/
show.url = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { biometric_datum: args }
    }


    if (Array.isArray(args)) {
        args = {
            biometric_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        biometric_datum: args.biometric_datum,
    }

    return show.definition.url
            .replace('{biometric_datum}', parsedArgs.biometric_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BiometricDataController::show
* @see app/Http/Controllers/BiometricDataController.php:48
* @route '/biometric-data/{biometric_datum}'
*/
show.get = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BiometricDataController::show
* @see app/Http/Controllers/BiometricDataController.php:48
* @route '/biometric-data/{biometric_datum}'
*/
show.head = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BiometricDataController::show
* @see app/Http/Controllers/BiometricDataController.php:48
* @route '/biometric-data/{biometric_datum}'
*/
const showForm = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BiometricDataController::show
* @see app/Http/Controllers/BiometricDataController.php:48
* @route '/biometric-data/{biometric_datum}'
*/
showForm.get = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BiometricDataController::show
* @see app/Http/Controllers/BiometricDataController.php:48
* @route '/biometric-data/{biometric_datum}'
*/
showForm.head = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\BiometricDataController::edit
* @see app/Http/Controllers/BiometricDataController.php:56
* @route '/biometric-data/{biometric_datum}/edit'
*/
export const edit = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/biometric-data/{biometric_datum}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BiometricDataController::edit
* @see app/Http/Controllers/BiometricDataController.php:56
* @route '/biometric-data/{biometric_datum}/edit'
*/
edit.url = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { biometric_datum: args }
    }


    if (Array.isArray(args)) {
        args = {
            biometric_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        biometric_datum: args.biometric_datum,
    }

    return edit.definition.url
            .replace('{biometric_datum}', parsedArgs.biometric_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BiometricDataController::edit
* @see app/Http/Controllers/BiometricDataController.php:56
* @route '/biometric-data/{biometric_datum}/edit'
*/
edit.get = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BiometricDataController::edit
* @see app/Http/Controllers/BiometricDataController.php:56
* @route '/biometric-data/{biometric_datum}/edit'
*/
edit.head = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BiometricDataController::edit
* @see app/Http/Controllers/BiometricDataController.php:56
* @route '/biometric-data/{biometric_datum}/edit'
*/
const editForm = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BiometricDataController::edit
* @see app/Http/Controllers/BiometricDataController.php:56
* @route '/biometric-data/{biometric_datum}/edit'
*/
editForm.get = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BiometricDataController::edit
* @see app/Http/Controllers/BiometricDataController.php:56
* @route '/biometric-data/{biometric_datum}/edit'
*/
editForm.head = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\BiometricDataController::update
* @see app/Http/Controllers/BiometricDataController.php:64
* @route '/biometric-data/{biometric_datum}'
*/
export const update = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/biometric-data/{biometric_datum}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\BiometricDataController::update
* @see app/Http/Controllers/BiometricDataController.php:64
* @route '/biometric-data/{biometric_datum}'
*/
update.url = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { biometric_datum: args }
    }


    if (Array.isArray(args)) {
        args = {
            biometric_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        biometric_datum: args.biometric_datum,
    }

    return update.definition.url
            .replace('{biometric_datum}', parsedArgs.biometric_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BiometricDataController::update
* @see app/Http/Controllers/BiometricDataController.php:64
* @route '/biometric-data/{biometric_datum}'
*/
update.put = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\BiometricDataController::update
* @see app/Http/Controllers/BiometricDataController.php:64
* @route '/biometric-data/{biometric_datum}'
*/
update.patch = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\BiometricDataController::update
* @see app/Http/Controllers/BiometricDataController.php:64
* @route '/biometric-data/{biometric_datum}'
*/
const updateForm = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BiometricDataController::update
* @see app/Http/Controllers/BiometricDataController.php:64
* @route '/biometric-data/{biometric_datum}'
*/
updateForm.put = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BiometricDataController::update
* @see app/Http/Controllers/BiometricDataController.php:64
* @route '/biometric-data/{biometric_datum}'
*/
updateForm.patch = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\BiometricDataController::destroy
* @see app/Http/Controllers/BiometricDataController.php:82
* @route '/biometric-data/{biometric_datum}'
*/
export const destroy = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/biometric-data/{biometric_datum}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BiometricDataController::destroy
* @see app/Http/Controllers/BiometricDataController.php:82
* @route '/biometric-data/{biometric_datum}'
*/
destroy.url = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { biometric_datum: args }
    }


    if (Array.isArray(args)) {
        args = {
            biometric_datum: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        biometric_datum: args.biometric_datum,
    }

    return destroy.definition.url
            .replace('{biometric_datum}', parsedArgs.biometric_datum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BiometricDataController::destroy
* @see app/Http/Controllers/BiometricDataController.php:82
* @route '/biometric-data/{biometric_datum}'
*/
destroy.delete = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BiometricDataController::destroy
* @see app/Http/Controllers/BiometricDataController.php:82
* @route '/biometric-data/{biometric_datum}'
*/
const destroyForm = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BiometricDataController::destroy
* @see app/Http/Controllers/BiometricDataController.php:82
* @route '/biometric-data/{biometric_datum}'
*/
destroyForm.delete = (args: { biometric_datum: string | number } | [biometric_datum: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm



const biometricData = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default biometricData