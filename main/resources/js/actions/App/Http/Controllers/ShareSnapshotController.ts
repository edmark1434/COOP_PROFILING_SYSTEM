import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ShareSnapshotController::index
* @see app/Http/Controllers/ShareSnapshotController.php:10
* @route '/share-snapshots'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/share-snapshots',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShareSnapshotController::index
* @see app/Http/Controllers/ShareSnapshotController.php:10
* @route '/share-snapshots'
*/
index.url = (options?: RouteQueryOptions) => {




    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShareSnapshotController::index
* @see app/Http/Controllers/ShareSnapshotController.php:10
* @route '/share-snapshots'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::index
* @see app/Http/Controllers/ShareSnapshotController.php:10
* @route '/share-snapshots'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::index
* @see app/Http/Controllers/ShareSnapshotController.php:10
* @route '/share-snapshots'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::index
* @see app/Http/Controllers/ShareSnapshotController.php:10
* @route '/share-snapshots'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::index
* @see app/Http/Controllers/ShareSnapshotController.php:10
* @route '/share-snapshots'
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
* @see \App\Http\Controllers\ShareSnapshotController::create
* @see app/Http/Controllers/ShareSnapshotController.php:0
* @route '/share-snapshots/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/share-snapshots/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShareSnapshotController::create
* @see app/Http/Controllers/ShareSnapshotController.php:0
* @route '/share-snapshots/create'
*/
create.url = (options?: RouteQueryOptions) => {




    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShareSnapshotController::create
* @see app/Http/Controllers/ShareSnapshotController.php:0
* @route '/share-snapshots/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::create
* @see app/Http/Controllers/ShareSnapshotController.php:0
* @route '/share-snapshots/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::create
* @see app/Http/Controllers/ShareSnapshotController.php:0
* @route '/share-snapshots/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::create
* @see app/Http/Controllers/ShareSnapshotController.php:0
* @route '/share-snapshots/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::create
* @see app/Http/Controllers/ShareSnapshotController.php:0
* @route '/share-snapshots/create'
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
* @see \App\Http\Controllers\ShareSnapshotController::store
* @see app/Http/Controllers/ShareSnapshotController.php:16
* @route '/share-snapshots'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/share-snapshots',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ShareSnapshotController::store
* @see app/Http/Controllers/ShareSnapshotController.php:16
* @route '/share-snapshots'
*/
store.url = (options?: RouteQueryOptions) => {




    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShareSnapshotController::store
* @see app/Http/Controllers/ShareSnapshotController.php:16
* @route '/share-snapshots'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::store
* @see app/Http/Controllers/ShareSnapshotController.php:16
* @route '/share-snapshots'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::store
* @see app/Http/Controllers/ShareSnapshotController.php:16
* @route '/share-snapshots'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ShareSnapshotController::show
* @see app/Http/Controllers/ShareSnapshotController.php:31
* @route '/share-snapshots/{share_snapshot}'
*/
export const show = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/share-snapshots/{share_snapshot}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShareSnapshotController::show
* @see app/Http/Controllers/ShareSnapshotController.php:31
* @route '/share-snapshots/{share_snapshot}'
*/
show.url = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { share_snapshot: args }
    }


    if (Array.isArray(args)) {
        args = {
            share_snapshot: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        share_snapshot: args.share_snapshot,
    }

    return show.definition.url
            .replace('{share_snapshot}', parsedArgs.share_snapshot.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShareSnapshotController::show
* @see app/Http/Controllers/ShareSnapshotController.php:31
* @route '/share-snapshots/{share_snapshot}'
*/
show.get = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::show
* @see app/Http/Controllers/ShareSnapshotController.php:31
* @route '/share-snapshots/{share_snapshot}'
*/
show.head = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::show
* @see app/Http/Controllers/ShareSnapshotController.php:31
* @route '/share-snapshots/{share_snapshot}'
*/
const showForm = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::show
* @see app/Http/Controllers/ShareSnapshotController.php:31
* @route '/share-snapshots/{share_snapshot}'
*/
showForm.get = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::show
* @see app/Http/Controllers/ShareSnapshotController.php:31
* @route '/share-snapshots/{share_snapshot}'
*/
showForm.head = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ShareSnapshotController::edit
* @see app/Http/Controllers/ShareSnapshotController.php:0
* @route '/share-snapshots/{share_snapshot}/edit'
*/
export const edit = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/share-snapshots/{share_snapshot}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShareSnapshotController::edit
* @see app/Http/Controllers/ShareSnapshotController.php:0
* @route '/share-snapshots/{share_snapshot}/edit'
*/
edit.url = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { share_snapshot: args }
    }


    if (Array.isArray(args)) {
        args = {
            share_snapshot: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        share_snapshot: args.share_snapshot,
    }

    return edit.definition.url
            .replace('{share_snapshot}', parsedArgs.share_snapshot.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShareSnapshotController::edit
* @see app/Http/Controllers/ShareSnapshotController.php:0
* @route '/share-snapshots/{share_snapshot}/edit'
*/
edit.get = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::edit
* @see app/Http/Controllers/ShareSnapshotController.php:0
* @route '/share-snapshots/{share_snapshot}/edit'
*/
edit.head = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::edit
* @see app/Http/Controllers/ShareSnapshotController.php:0
* @route '/share-snapshots/{share_snapshot}/edit'
*/
const editForm = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::edit
* @see app/Http/Controllers/ShareSnapshotController.php:0
* @route '/share-snapshots/{share_snapshot}/edit'
*/
editForm.get = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::edit
* @see app/Http/Controllers/ShareSnapshotController.php:0
* @route '/share-snapshots/{share_snapshot}/edit'
*/
editForm.head = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ShareSnapshotController::update
* @see app/Http/Controllers/ShareSnapshotController.php:36
* @route '/share-snapshots/{share_snapshot}'
*/
export const update = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/share-snapshots/{share_snapshot}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ShareSnapshotController::update
* @see app/Http/Controllers/ShareSnapshotController.php:36
* @route '/share-snapshots/{share_snapshot}'
*/
update.url = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { share_snapshot: args }
    }


    if (Array.isArray(args)) {
        args = {
            share_snapshot: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        share_snapshot: args.share_snapshot,
    }

    return update.definition.url
            .replace('{share_snapshot}', parsedArgs.share_snapshot.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShareSnapshotController::update
* @see app/Http/Controllers/ShareSnapshotController.php:36
* @route '/share-snapshots/{share_snapshot}'
*/
update.put = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::update
* @see app/Http/Controllers/ShareSnapshotController.php:36
* @route '/share-snapshots/{share_snapshot}'
*/
update.patch = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::update
* @see app/Http/Controllers/ShareSnapshotController.php:36
* @route '/share-snapshots/{share_snapshot}'
*/
const updateForm = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::update
* @see app/Http/Controllers/ShareSnapshotController.php:36
* @route '/share-snapshots/{share_snapshot}'
*/
updateForm.put = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::update
* @see app/Http/Controllers/ShareSnapshotController.php:36
* @route '/share-snapshots/{share_snapshot}'
*/
updateForm.patch = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ShareSnapshotController::destroy
* @see app/Http/Controllers/ShareSnapshotController.php:51
* @route '/share-snapshots/{share_snapshot}'
*/
export const destroy = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/share-snapshots/{share_snapshot}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ShareSnapshotController::destroy
* @see app/Http/Controllers/ShareSnapshotController.php:51
* @route '/share-snapshots/{share_snapshot}'
*/
destroy.url = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { share_snapshot: args }
    }


    if (Array.isArray(args)) {
        args = {
            share_snapshot: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        share_snapshot: args.share_snapshot,
    }

    return destroy.definition.url
            .replace('{share_snapshot}', parsedArgs.share_snapshot.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShareSnapshotController::destroy
* @see app/Http/Controllers/ShareSnapshotController.php:51
* @route '/share-snapshots/{share_snapshot}'
*/
destroy.delete = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::destroy
* @see app/Http/Controllers/ShareSnapshotController.php:51
* @route '/share-snapshots/{share_snapshot}'
*/
const destroyForm = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ShareSnapshotController::destroy
* @see app/Http/Controllers/ShareSnapshotController.php:51
* @route '/share-snapshots/{share_snapshot}'
*/
destroyForm.delete = (args: { share_snapshot: string | number } | [share_snapshot: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const ShareSnapshotController = { index, create, store, show, edit, update, destroy }

export default ShareSnapshotController