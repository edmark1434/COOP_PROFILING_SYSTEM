import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AuditLogController::index
 * @see app/Http/Controllers/AuditLogController.php:13
 * @route '/audit-logs'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/audit-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditLogController::index
 * @see app/Http/Controllers/AuditLogController.php:13
 * @route '/audit-logs'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditLogController::index
 * @see app/Http/Controllers/AuditLogController.php:13
 * @route '/audit-logs'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditLogController::index
 * @see app/Http/Controllers/AuditLogController.php:13
 * @route '/audit-logs'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditLogController::index
 * @see app/Http/Controllers/AuditLogController.php:13
 * @route '/audit-logs'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditLogController::index
 * @see app/Http/Controllers/AuditLogController.php:13
 * @route '/audit-logs'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditLogController::index
 * @see app/Http/Controllers/AuditLogController.php:13
 * @route '/audit-logs'
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
* @see \App\Http\Controllers\AuditLogController::create
 * @see app/Http/Controllers/AuditLogController.php:21
 * @route '/audit-logs/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/audit-logs/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditLogController::create
 * @see app/Http/Controllers/AuditLogController.php:21
 * @route '/audit-logs/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditLogController::create
 * @see app/Http/Controllers/AuditLogController.php:21
 * @route '/audit-logs/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditLogController::create
 * @see app/Http/Controllers/AuditLogController.php:21
 * @route '/audit-logs/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditLogController::create
 * @see app/Http/Controllers/AuditLogController.php:21
 * @route '/audit-logs/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditLogController::create
 * @see app/Http/Controllers/AuditLogController.php:21
 * @route '/audit-logs/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditLogController::create
 * @see app/Http/Controllers/AuditLogController.php:21
 * @route '/audit-logs/create'
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
* @see \App\Http\Controllers\AuditLogController::store
 * @see app/Http/Controllers/AuditLogController.php:29
 * @route '/audit-logs'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/audit-logs',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditLogController::store
 * @see app/Http/Controllers/AuditLogController.php:29
 * @route '/audit-logs'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditLogController::store
 * @see app/Http/Controllers/AuditLogController.php:29
 * @route '/audit-logs'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditLogController::store
 * @see app/Http/Controllers/AuditLogController.php:29
 * @route '/audit-logs'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditLogController::store
 * @see app/Http/Controllers/AuditLogController.php:29
 * @route '/audit-logs'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AuditLogController::show
 * @see app/Http/Controllers/AuditLogController.php:48
 * @route '/audit-logs/{audit_log}'
 */
export const show = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/audit-logs/{audit_log}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditLogController::show
 * @see app/Http/Controllers/AuditLogController.php:48
 * @route '/audit-logs/{audit_log}'
 */
show.url = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_log: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    audit_log: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_log: args.audit_log,
                }

    return show.definition.url
            .replace('{audit_log}', parsedArgs.audit_log.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditLogController::show
 * @see app/Http/Controllers/AuditLogController.php:48
 * @route '/audit-logs/{audit_log}'
 */
show.get = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditLogController::show
 * @see app/Http/Controllers/AuditLogController.php:48
 * @route '/audit-logs/{audit_log}'
 */
show.head = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditLogController::show
 * @see app/Http/Controllers/AuditLogController.php:48
 * @route '/audit-logs/{audit_log}'
 */
    const showForm = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditLogController::show
 * @see app/Http/Controllers/AuditLogController.php:48
 * @route '/audit-logs/{audit_log}'
 */
        showForm.get = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditLogController::show
 * @see app/Http/Controllers/AuditLogController.php:48
 * @route '/audit-logs/{audit_log}'
 */
        showForm.head = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AuditLogController::edit
 * @see app/Http/Controllers/AuditLogController.php:56
 * @route '/audit-logs/{audit_log}/edit'
 */
export const edit = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/audit-logs/{audit_log}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditLogController::edit
 * @see app/Http/Controllers/AuditLogController.php:56
 * @route '/audit-logs/{audit_log}/edit'
 */
edit.url = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_log: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    audit_log: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_log: args.audit_log,
                }

    return edit.definition.url
            .replace('{audit_log}', parsedArgs.audit_log.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditLogController::edit
 * @see app/Http/Controllers/AuditLogController.php:56
 * @route '/audit-logs/{audit_log}/edit'
 */
edit.get = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditLogController::edit
 * @see app/Http/Controllers/AuditLogController.php:56
 * @route '/audit-logs/{audit_log}/edit'
 */
edit.head = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditLogController::edit
 * @see app/Http/Controllers/AuditLogController.php:56
 * @route '/audit-logs/{audit_log}/edit'
 */
    const editForm = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditLogController::edit
 * @see app/Http/Controllers/AuditLogController.php:56
 * @route '/audit-logs/{audit_log}/edit'
 */
        editForm.get = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditLogController::edit
 * @see app/Http/Controllers/AuditLogController.php:56
 * @route '/audit-logs/{audit_log}/edit'
 */
        editForm.head = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AuditLogController::update
 * @see app/Http/Controllers/AuditLogController.php:64
 * @route '/audit-logs/{audit_log}'
 */
export const update = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/audit-logs/{audit_log}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AuditLogController::update
 * @see app/Http/Controllers/AuditLogController.php:64
 * @route '/audit-logs/{audit_log}'
 */
update.url = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_log: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    audit_log: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_log: args.audit_log,
                }

    return update.definition.url
            .replace('{audit_log}', parsedArgs.audit_log.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditLogController::update
 * @see app/Http/Controllers/AuditLogController.php:64
 * @route '/audit-logs/{audit_log}'
 */
update.put = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\AuditLogController::update
 * @see app/Http/Controllers/AuditLogController.php:64
 * @route '/audit-logs/{audit_log}'
 */
update.patch = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AuditLogController::update
 * @see app/Http/Controllers/AuditLogController.php:64
 * @route '/audit-logs/{audit_log}'
 */
    const updateForm = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditLogController::update
 * @see app/Http/Controllers/AuditLogController.php:64
 * @route '/audit-logs/{audit_log}'
 */
        updateForm.put = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\AuditLogController::update
 * @see app/Http/Controllers/AuditLogController.php:64
 * @route '/audit-logs/{audit_log}'
 */
        updateForm.patch = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AuditLogController::destroy
 * @see app/Http/Controllers/AuditLogController.php:83
 * @route '/audit-logs/{audit_log}'
 */
export const destroy = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/audit-logs/{audit_log}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AuditLogController::destroy
 * @see app/Http/Controllers/AuditLogController.php:83
 * @route '/audit-logs/{audit_log}'
 */
destroy.url = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { audit_log: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    audit_log: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        audit_log: args.audit_log,
                }

    return destroy.definition.url
            .replace('{audit_log}', parsedArgs.audit_log.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditLogController::destroy
 * @see app/Http/Controllers/AuditLogController.php:83
 * @route '/audit-logs/{audit_log}'
 */
destroy.delete = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AuditLogController::destroy
 * @see app/Http/Controllers/AuditLogController.php:83
 * @route '/audit-logs/{audit_log}'
 */
    const destroyForm = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditLogController::destroy
 * @see app/Http/Controllers/AuditLogController.php:83
 * @route '/audit-logs/{audit_log}'
 */
        destroyForm.delete = (args: { audit_log: string | number } | [audit_log: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const auditLogs = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default auditLogs