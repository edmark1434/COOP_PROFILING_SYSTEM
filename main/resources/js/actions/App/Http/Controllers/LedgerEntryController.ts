import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\LedgerEntryController::index
 * @see app/Http/Controllers/LedgerEntryController.php:10
 * @route '/ledger-entries'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/ledger-entries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LedgerEntryController::index
 * @see app/Http/Controllers/LedgerEntryController.php:10
 * @route '/ledger-entries'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LedgerEntryController::index
 * @see app/Http/Controllers/LedgerEntryController.php:10
 * @route '/ledger-entries'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LedgerEntryController::index
 * @see app/Http/Controllers/LedgerEntryController.php:10
 * @route '/ledger-entries'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LedgerEntryController::index
 * @see app/Http/Controllers/LedgerEntryController.php:10
 * @route '/ledger-entries'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LedgerEntryController::index
 * @see app/Http/Controllers/LedgerEntryController.php:10
 * @route '/ledger-entries'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LedgerEntryController::index
 * @see app/Http/Controllers/LedgerEntryController.php:10
 * @route '/ledger-entries'
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
* @see \App\Http\Controllers\LedgerEntryController::create
 * @see app/Http/Controllers/LedgerEntryController.php:16
 * @route '/ledger-entries/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/ledger-entries/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LedgerEntryController::create
 * @see app/Http/Controllers/LedgerEntryController.php:16
 * @route '/ledger-entries/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LedgerEntryController::create
 * @see app/Http/Controllers/LedgerEntryController.php:16
 * @route '/ledger-entries/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LedgerEntryController::create
 * @see app/Http/Controllers/LedgerEntryController.php:16
 * @route '/ledger-entries/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LedgerEntryController::create
 * @see app/Http/Controllers/LedgerEntryController.php:16
 * @route '/ledger-entries/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LedgerEntryController::create
 * @see app/Http/Controllers/LedgerEntryController.php:16
 * @route '/ledger-entries/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LedgerEntryController::create
 * @see app/Http/Controllers/LedgerEntryController.php:16
 * @route '/ledger-entries/create'
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
* @see \App\Http\Controllers\LedgerEntryController::store
 * @see app/Http/Controllers/LedgerEntryController.php:21
 * @route '/ledger-entries'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/ledger-entries',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LedgerEntryController::store
 * @see app/Http/Controllers/LedgerEntryController.php:21
 * @route '/ledger-entries'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LedgerEntryController::store
 * @see app/Http/Controllers/LedgerEntryController.php:21
 * @route '/ledger-entries'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LedgerEntryController::store
 * @see app/Http/Controllers/LedgerEntryController.php:21
 * @route '/ledger-entries'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LedgerEntryController::store
 * @see app/Http/Controllers/LedgerEntryController.php:21
 * @route '/ledger-entries'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\LedgerEntryController::show
 * @see app/Http/Controllers/LedgerEntryController.php:38
 * @route '/ledger-entries/{ledger_entry}'
 */
export const show = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/ledger-entries/{ledger_entry}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LedgerEntryController::show
 * @see app/Http/Controllers/LedgerEntryController.php:38
 * @route '/ledger-entries/{ledger_entry}'
 */
show.url = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ledger_entry: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    ledger_entry: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        ledger_entry: args.ledger_entry,
                }

    return show.definition.url
            .replace('{ledger_entry}', parsedArgs.ledger_entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LedgerEntryController::show
 * @see app/Http/Controllers/LedgerEntryController.php:38
 * @route '/ledger-entries/{ledger_entry}'
 */
show.get = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LedgerEntryController::show
 * @see app/Http/Controllers/LedgerEntryController.php:38
 * @route '/ledger-entries/{ledger_entry}'
 */
show.head = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LedgerEntryController::show
 * @see app/Http/Controllers/LedgerEntryController.php:38
 * @route '/ledger-entries/{ledger_entry}'
 */
    const showForm = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LedgerEntryController::show
 * @see app/Http/Controllers/LedgerEntryController.php:38
 * @route '/ledger-entries/{ledger_entry}'
 */
        showForm.get = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LedgerEntryController::show
 * @see app/Http/Controllers/LedgerEntryController.php:38
 * @route '/ledger-entries/{ledger_entry}'
 */
        showForm.head = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\LedgerEntryController::edit
 * @see app/Http/Controllers/LedgerEntryController.php:43
 * @route '/ledger-entries/{ledger_entry}/edit'
 */
export const edit = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/ledger-entries/{ledger_entry}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LedgerEntryController::edit
 * @see app/Http/Controllers/LedgerEntryController.php:43
 * @route '/ledger-entries/{ledger_entry}/edit'
 */
edit.url = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ledger_entry: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    ledger_entry: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        ledger_entry: args.ledger_entry,
                }

    return edit.definition.url
            .replace('{ledger_entry}', parsedArgs.ledger_entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LedgerEntryController::edit
 * @see app/Http/Controllers/LedgerEntryController.php:43
 * @route '/ledger-entries/{ledger_entry}/edit'
 */
edit.get = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LedgerEntryController::edit
 * @see app/Http/Controllers/LedgerEntryController.php:43
 * @route '/ledger-entries/{ledger_entry}/edit'
 */
edit.head = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LedgerEntryController::edit
 * @see app/Http/Controllers/LedgerEntryController.php:43
 * @route '/ledger-entries/{ledger_entry}/edit'
 */
    const editForm = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LedgerEntryController::edit
 * @see app/Http/Controllers/LedgerEntryController.php:43
 * @route '/ledger-entries/{ledger_entry}/edit'
 */
        editForm.get = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LedgerEntryController::edit
 * @see app/Http/Controllers/LedgerEntryController.php:43
 * @route '/ledger-entries/{ledger_entry}/edit'
 */
        editForm.head = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\LedgerEntryController::update
 * @see app/Http/Controllers/LedgerEntryController.php:48
 * @route '/ledger-entries/{ledger_entry}'
 */
export const update = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/ledger-entries/{ledger_entry}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\LedgerEntryController::update
 * @see app/Http/Controllers/LedgerEntryController.php:48
 * @route '/ledger-entries/{ledger_entry}'
 */
update.url = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ledger_entry: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    ledger_entry: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        ledger_entry: args.ledger_entry,
                }

    return update.definition.url
            .replace('{ledger_entry}', parsedArgs.ledger_entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LedgerEntryController::update
 * @see app/Http/Controllers/LedgerEntryController.php:48
 * @route '/ledger-entries/{ledger_entry}'
 */
update.put = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\LedgerEntryController::update
 * @see app/Http/Controllers/LedgerEntryController.php:48
 * @route '/ledger-entries/{ledger_entry}'
 */
update.patch = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\LedgerEntryController::update
 * @see app/Http/Controllers/LedgerEntryController.php:48
 * @route '/ledger-entries/{ledger_entry}'
 */
    const updateForm = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LedgerEntryController::update
 * @see app/Http/Controllers/LedgerEntryController.php:48
 * @route '/ledger-entries/{ledger_entry}'
 */
        updateForm.put = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\LedgerEntryController::update
 * @see app/Http/Controllers/LedgerEntryController.php:48
 * @route '/ledger-entries/{ledger_entry}'
 */
        updateForm.patch = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\LedgerEntryController::destroy
 * @see app/Http/Controllers/LedgerEntryController.php:65
 * @route '/ledger-entries/{ledger_entry}'
 */
export const destroy = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/ledger-entries/{ledger_entry}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LedgerEntryController::destroy
 * @see app/Http/Controllers/LedgerEntryController.php:65
 * @route '/ledger-entries/{ledger_entry}'
 */
destroy.url = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ledger_entry: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    ledger_entry: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        ledger_entry: args.ledger_entry,
                }

    return destroy.definition.url
            .replace('{ledger_entry}', parsedArgs.ledger_entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LedgerEntryController::destroy
 * @see app/Http/Controllers/LedgerEntryController.php:65
 * @route '/ledger-entries/{ledger_entry}'
 */
destroy.delete = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\LedgerEntryController::destroy
 * @see app/Http/Controllers/LedgerEntryController.php:65
 * @route '/ledger-entries/{ledger_entry}'
 */
    const destroyForm = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LedgerEntryController::destroy
 * @see app/Http/Controllers/LedgerEntryController.php:65
 * @route '/ledger-entries/{ledger_entry}'
 */
        destroyForm.delete = (args: { ledger_entry: string | number } | [ledger_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const LedgerEntryController = { index, create, store, show, edit, update, destroy }

export default LedgerEntryController