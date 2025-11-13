import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\InstallmentController::index
* @see app/Http/Controllers/InstallmentController.php:10
* @route '/installments'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/installments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InstallmentController::index
* @see app/Http/Controllers/InstallmentController.php:10
* @route '/installments'
*/
index.url = (options?: RouteQueryOptions) => {




    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstallmentController::index
* @see app/Http/Controllers/InstallmentController.php:10
* @route '/installments'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallmentController::index
* @see app/Http/Controllers/InstallmentController.php:10
* @route '/installments'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\InstallmentController::index
* @see app/Http/Controllers/InstallmentController.php:10
* @route '/installments'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallmentController::index
* @see app/Http/Controllers/InstallmentController.php:10
* @route '/installments'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallmentController::index
* @see app/Http/Controllers/InstallmentController.php:10
* @route '/installments'
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
* @see \App\Http\Controllers\InstallmentController::create
* @see app/Http/Controllers/InstallmentController.php:16
* @route '/installments/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/installments/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InstallmentController::create
* @see app/Http/Controllers/InstallmentController.php:16
* @route '/installments/create'
*/
create.url = (options?: RouteQueryOptions) => {




    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstallmentController::create
* @see app/Http/Controllers/InstallmentController.php:16
* @route '/installments/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallmentController::create
* @see app/Http/Controllers/InstallmentController.php:16
* @route '/installments/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\InstallmentController::create
* @see app/Http/Controllers/InstallmentController.php:16
* @route '/installments/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallmentController::create
* @see app/Http/Controllers/InstallmentController.php:16
* @route '/installments/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallmentController::create
* @see app/Http/Controllers/InstallmentController.php:16
* @route '/installments/create'
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
* @see \App\Http\Controllers\InstallmentController::store
* @see app/Http/Controllers/InstallmentController.php:21
* @route '/installments'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/installments',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\InstallmentController::store
* @see app/Http/Controllers/InstallmentController.php:21
* @route '/installments'
*/
store.url = (options?: RouteQueryOptions) => {




    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstallmentController::store
* @see app/Http/Controllers/InstallmentController.php:21
* @route '/installments'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\InstallmentController::store
* @see app/Http/Controllers/InstallmentController.php:21
* @route '/installments'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\InstallmentController::store
* @see app/Http/Controllers/InstallmentController.php:21
* @route '/installments'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\InstallmentController::show
* @see app/Http/Controllers/InstallmentController.php:39
* @route '/installments/{installment}'
*/
export const show = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/installments/{installment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InstallmentController::show
* @see app/Http/Controllers/InstallmentController.php:39
* @route '/installments/{installment}'
*/
show.url = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { installment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { installment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            installment: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        installment: typeof args.installment === 'object'
        ? args.installment.id
        : args.installment,
    }

    return show.definition.url
            .replace('{installment}', parsedArgs.installment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstallmentController::show
* @see app/Http/Controllers/InstallmentController.php:39
* @route '/installments/{installment}'
*/
show.get = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallmentController::show
* @see app/Http/Controllers/InstallmentController.php:39
* @route '/installments/{installment}'
*/
show.head = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\InstallmentController::show
* @see app/Http/Controllers/InstallmentController.php:39
* @route '/installments/{installment}'
*/
const showForm = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallmentController::show
* @see app/Http/Controllers/InstallmentController.php:39
* @route '/installments/{installment}'
*/
showForm.get = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallmentController::show
* @see app/Http/Controllers/InstallmentController.php:39
* @route '/installments/{installment}'
*/
showForm.head = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\InstallmentController::edit
* @see app/Http/Controllers/InstallmentController.php:44
* @route '/installments/{installment}/edit'
*/
export const edit = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/installments/{installment}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InstallmentController::edit
* @see app/Http/Controllers/InstallmentController.php:44
* @route '/installments/{installment}/edit'
*/
edit.url = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { installment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { installment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            installment: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        installment: typeof args.installment === 'object'
        ? args.installment.id
        : args.installment,
    }

    return edit.definition.url
            .replace('{installment}', parsedArgs.installment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstallmentController::edit
* @see app/Http/Controllers/InstallmentController.php:44
* @route '/installments/{installment}/edit'
*/
edit.get = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallmentController::edit
* @see app/Http/Controllers/InstallmentController.php:44
* @route '/installments/{installment}/edit'
*/
edit.head = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\InstallmentController::edit
* @see app/Http/Controllers/InstallmentController.php:44
* @route '/installments/{installment}/edit'
*/
const editForm = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallmentController::edit
* @see app/Http/Controllers/InstallmentController.php:44
* @route '/installments/{installment}/edit'
*/
editForm.get = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InstallmentController::edit
* @see app/Http/Controllers/InstallmentController.php:44
* @route '/installments/{installment}/edit'
*/
editForm.head = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\InstallmentController::update
* @see app/Http/Controllers/InstallmentController.php:49
* @route '/installments/{installment}'
*/
export const update = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/installments/{installment}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\InstallmentController::update
* @see app/Http/Controllers/InstallmentController.php:49
* @route '/installments/{installment}'
*/
update.url = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { installment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { installment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            installment: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        installment: typeof args.installment === 'object'
        ? args.installment.id
        : args.installment,
    }

    return update.definition.url
            .replace('{installment}', parsedArgs.installment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstallmentController::update
* @see app/Http/Controllers/InstallmentController.php:49
* @route '/installments/{installment}'
*/
update.put = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\InstallmentController::update
* @see app/Http/Controllers/InstallmentController.php:49
* @route '/installments/{installment}'
*/
update.patch = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\InstallmentController::update
* @see app/Http/Controllers/InstallmentController.php:49
* @route '/installments/{installment}'
*/
const updateForm = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\InstallmentController::update
* @see app/Http/Controllers/InstallmentController.php:49
* @route '/installments/{installment}'
*/
updateForm.put = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\InstallmentController::update
* @see app/Http/Controllers/InstallmentController.php:49
* @route '/installments/{installment}'
*/
updateForm.patch = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\InstallmentController::destroy
* @see app/Http/Controllers/InstallmentController.php:67
* @route '/installments/{installment}'
*/
export const destroy = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/installments/{installment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\InstallmentController::destroy
* @see app/Http/Controllers/InstallmentController.php:67
* @route '/installments/{installment}'
*/
destroy.url = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { installment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { installment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            installment: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        installment: typeof args.installment === 'object'
        ? args.installment.id
        : args.installment,
    }

    return destroy.definition.url
            .replace('{installment}', parsedArgs.installment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstallmentController::destroy
* @see app/Http/Controllers/InstallmentController.php:67
* @route '/installments/{installment}'
*/
destroy.delete = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\InstallmentController::destroy
* @see app/Http/Controllers/InstallmentController.php:67
* @route '/installments/{installment}'
*/
const destroyForm = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\InstallmentController::destroy
* @see app/Http/Controllers/InstallmentController.php:67
* @route '/installments/{installment}'
*/
destroyForm.delete = (args: { installment: number | { id: number } } | [installment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm



const installments = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default installments