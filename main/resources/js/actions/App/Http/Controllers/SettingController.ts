import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SettingController::index
 * @see app/Http/Controllers/SettingController.php:10
 * @route '/settings'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SettingController::index
 * @see app/Http/Controllers/SettingController.php:10
 * @route '/settings'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingController::index
 * @see app/Http/Controllers/SettingController.php:10
 * @route '/settings'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SettingController::index
 * @see app/Http/Controllers/SettingController.php:10
 * @route '/settings'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SettingController::index
 * @see app/Http/Controllers/SettingController.php:10
 * @route '/settings'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SettingController::index
 * @see app/Http/Controllers/SettingController.php:10
 * @route '/settings'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SettingController::index
 * @see app/Http/Controllers/SettingController.php:10
 * @route '/settings'
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
* @see \App\Http\Controllers\SettingController::create
 * @see app/Http/Controllers/SettingController.php:0
 * @route '/settings/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SettingController::create
 * @see app/Http/Controllers/SettingController.php:0
 * @route '/settings/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingController::create
 * @see app/Http/Controllers/SettingController.php:0
 * @route '/settings/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SettingController::create
 * @see app/Http/Controllers/SettingController.php:0
 * @route '/settings/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SettingController::create
 * @see app/Http/Controllers/SettingController.php:0
 * @route '/settings/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SettingController::create
 * @see app/Http/Controllers/SettingController.php:0
 * @route '/settings/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SettingController::create
 * @see app/Http/Controllers/SettingController.php:0
 * @route '/settings/create'
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
* @see \App\Http\Controllers\SettingController::store
 * @see app/Http/Controllers/SettingController.php:16
 * @route '/settings'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/settings',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingController::store
 * @see app/Http/Controllers/SettingController.php:16
 * @route '/settings'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingController::store
 * @see app/Http/Controllers/SettingController.php:16
 * @route '/settings'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SettingController::store
 * @see app/Http/Controllers/SettingController.php:16
 * @route '/settings'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SettingController::store
 * @see app/Http/Controllers/SettingController.php:16
 * @route '/settings'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\SettingController::show
 * @see app/Http/Controllers/SettingController.php:33
 * @route '/settings/{setting}'
 */
export const show = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/settings/{setting}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SettingController::show
 * @see app/Http/Controllers/SettingController.php:33
 * @route '/settings/{setting}'
 */
show.url = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { setting: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { setting: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    setting: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        setting: typeof args.setting === 'object'
                ? args.setting.id
                : args.setting,
                }

    return show.definition.url
            .replace('{setting}', parsedArgs.setting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingController::show
 * @see app/Http/Controllers/SettingController.php:33
 * @route '/settings/{setting}'
 */
show.get = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SettingController::show
 * @see app/Http/Controllers/SettingController.php:33
 * @route '/settings/{setting}'
 */
show.head = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SettingController::show
 * @see app/Http/Controllers/SettingController.php:33
 * @route '/settings/{setting}'
 */
    const showForm = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SettingController::show
 * @see app/Http/Controllers/SettingController.php:33
 * @route '/settings/{setting}'
 */
        showForm.get = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SettingController::show
 * @see app/Http/Controllers/SettingController.php:33
 * @route '/settings/{setting}'
 */
        showForm.head = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\SettingController::edit
 * @see app/Http/Controllers/SettingController.php:0
 * @route '/settings/{setting}/edit'
 */
export const edit = (args: { setting: string | number } | [setting: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/settings/{setting}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SettingController::edit
 * @see app/Http/Controllers/SettingController.php:0
 * @route '/settings/{setting}/edit'
 */
edit.url = (args: { setting: string | number } | [setting: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { setting: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    setting: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        setting: args.setting,
                }

    return edit.definition.url
            .replace('{setting}', parsedArgs.setting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingController::edit
 * @see app/Http/Controllers/SettingController.php:0
 * @route '/settings/{setting}/edit'
 */
edit.get = (args: { setting: string | number } | [setting: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SettingController::edit
 * @see app/Http/Controllers/SettingController.php:0
 * @route '/settings/{setting}/edit'
 */
edit.head = (args: { setting: string | number } | [setting: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SettingController::edit
 * @see app/Http/Controllers/SettingController.php:0
 * @route '/settings/{setting}/edit'
 */
    const editForm = (args: { setting: string | number } | [setting: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SettingController::edit
 * @see app/Http/Controllers/SettingController.php:0
 * @route '/settings/{setting}/edit'
 */
        editForm.get = (args: { setting: string | number } | [setting: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SettingController::edit
 * @see app/Http/Controllers/SettingController.php:0
 * @route '/settings/{setting}/edit'
 */
        editForm.head = (args: { setting: string | number } | [setting: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\SettingController::update
 * @see app/Http/Controllers/SettingController.php:38
 * @route '/settings/{setting}'
 */
export const update = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/settings/{setting}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\SettingController::update
 * @see app/Http/Controllers/SettingController.php:38
 * @route '/settings/{setting}'
 */
update.url = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { setting: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { setting: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    setting: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        setting: typeof args.setting === 'object'
                ? args.setting.id
                : args.setting,
                }

    return update.definition.url
            .replace('{setting}', parsedArgs.setting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingController::update
 * @see app/Http/Controllers/SettingController.php:38
 * @route '/settings/{setting}'
 */
update.put = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\SettingController::update
 * @see app/Http/Controllers/SettingController.php:38
 * @route '/settings/{setting}'
 */
update.patch = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\SettingController::update
 * @see app/Http/Controllers/SettingController.php:38
 * @route '/settings/{setting}'
 */
    const updateForm = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SettingController::update
 * @see app/Http/Controllers/SettingController.php:38
 * @route '/settings/{setting}'
 */
        updateForm.put = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\SettingController::update
 * @see app/Http/Controllers/SettingController.php:38
 * @route '/settings/{setting}'
 */
        updateForm.patch = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\SettingController::destroy
 * @see app/Http/Controllers/SettingController.php:55
 * @route '/settings/{setting}'
 */
export const destroy = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/settings/{setting}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\SettingController::destroy
 * @see app/Http/Controllers/SettingController.php:55
 * @route '/settings/{setting}'
 */
destroy.url = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { setting: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { setting: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    setting: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        setting: typeof args.setting === 'object'
                ? args.setting.id
                : args.setting,
                }

    return destroy.definition.url
            .replace('{setting}', parsedArgs.setting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingController::destroy
 * @see app/Http/Controllers/SettingController.php:55
 * @route '/settings/{setting}'
 */
destroy.delete = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\SettingController::destroy
 * @see app/Http/Controllers/SettingController.php:55
 * @route '/settings/{setting}'
 */
    const destroyForm = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SettingController::destroy
 * @see app/Http/Controllers/SettingController.php:55
 * @route '/settings/{setting}'
 */
        destroyForm.delete = (args: { setting: number | { id: number } } | [setting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const SettingController = { index, create, store, show, edit, update, destroy }

export default SettingController