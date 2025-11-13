import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\LoanPurposeController::index
 * @see app/Http/Controllers/LoanPurposeController.php:10
 * @route '/loan-purposes'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/loan-purposes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoanPurposeController::index
 * @see app/Http/Controllers/LoanPurposeController.php:10
 * @route '/loan-purposes'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoanPurposeController::index
 * @see app/Http/Controllers/LoanPurposeController.php:10
 * @route '/loan-purposes'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LoanPurposeController::index
 * @see app/Http/Controllers/LoanPurposeController.php:10
 * @route '/loan-purposes'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LoanPurposeController::index
 * @see app/Http/Controllers/LoanPurposeController.php:10
 * @route '/loan-purposes'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LoanPurposeController::index
 * @see app/Http/Controllers/LoanPurposeController.php:10
 * @route '/loan-purposes'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LoanPurposeController::index
 * @see app/Http/Controllers/LoanPurposeController.php:10
 * @route '/loan-purposes'
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
* @see \App\Http\Controllers\LoanPurposeController::create
 * @see app/Http/Controllers/LoanPurposeController.php:16
 * @route '/loan-purposes/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/loan-purposes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoanPurposeController::create
 * @see app/Http/Controllers/LoanPurposeController.php:16
 * @route '/loan-purposes/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoanPurposeController::create
 * @see app/Http/Controllers/LoanPurposeController.php:16
 * @route '/loan-purposes/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LoanPurposeController::create
 * @see app/Http/Controllers/LoanPurposeController.php:16
 * @route '/loan-purposes/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LoanPurposeController::create
 * @see app/Http/Controllers/LoanPurposeController.php:16
 * @route '/loan-purposes/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LoanPurposeController::create
 * @see app/Http/Controllers/LoanPurposeController.php:16
 * @route '/loan-purposes/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LoanPurposeController::create
 * @see app/Http/Controllers/LoanPurposeController.php:16
 * @route '/loan-purposes/create'
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
* @see \App\Http\Controllers\LoanPurposeController::store
 * @see app/Http/Controllers/LoanPurposeController.php:21
 * @route '/loan-purposes'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/loan-purposes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LoanPurposeController::store
 * @see app/Http/Controllers/LoanPurposeController.php:21
 * @route '/loan-purposes'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoanPurposeController::store
 * @see app/Http/Controllers/LoanPurposeController.php:21
 * @route '/loan-purposes'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LoanPurposeController::store
 * @see app/Http/Controllers/LoanPurposeController.php:21
 * @route '/loan-purposes'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LoanPurposeController::store
 * @see app/Http/Controllers/LoanPurposeController.php:21
 * @route '/loan-purposes'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\LoanPurposeController::show
 * @see app/Http/Controllers/LoanPurposeController.php:35
 * @route '/loan-purposes/{loan_purpose}'
 */
export const show = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/loan-purposes/{loan_purpose}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoanPurposeController::show
 * @see app/Http/Controllers/LoanPurposeController.php:35
 * @route '/loan-purposes/{loan_purpose}'
 */
show.url = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { loan_purpose: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    loan_purpose: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        loan_purpose: args.loan_purpose,
                }

    return show.definition.url
            .replace('{loan_purpose}', parsedArgs.loan_purpose.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoanPurposeController::show
 * @see app/Http/Controllers/LoanPurposeController.php:35
 * @route '/loan-purposes/{loan_purpose}'
 */
show.get = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LoanPurposeController::show
 * @see app/Http/Controllers/LoanPurposeController.php:35
 * @route '/loan-purposes/{loan_purpose}'
 */
show.head = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LoanPurposeController::show
 * @see app/Http/Controllers/LoanPurposeController.php:35
 * @route '/loan-purposes/{loan_purpose}'
 */
    const showForm = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LoanPurposeController::show
 * @see app/Http/Controllers/LoanPurposeController.php:35
 * @route '/loan-purposes/{loan_purpose}'
 */
        showForm.get = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LoanPurposeController::show
 * @see app/Http/Controllers/LoanPurposeController.php:35
 * @route '/loan-purposes/{loan_purpose}'
 */
        showForm.head = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\LoanPurposeController::edit
 * @see app/Http/Controllers/LoanPurposeController.php:40
 * @route '/loan-purposes/{loan_purpose}/edit'
 */
export const edit = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/loan-purposes/{loan_purpose}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoanPurposeController::edit
 * @see app/Http/Controllers/LoanPurposeController.php:40
 * @route '/loan-purposes/{loan_purpose}/edit'
 */
edit.url = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { loan_purpose: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    loan_purpose: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        loan_purpose: args.loan_purpose,
                }

    return edit.definition.url
            .replace('{loan_purpose}', parsedArgs.loan_purpose.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoanPurposeController::edit
 * @see app/Http/Controllers/LoanPurposeController.php:40
 * @route '/loan-purposes/{loan_purpose}/edit'
 */
edit.get = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LoanPurposeController::edit
 * @see app/Http/Controllers/LoanPurposeController.php:40
 * @route '/loan-purposes/{loan_purpose}/edit'
 */
edit.head = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LoanPurposeController::edit
 * @see app/Http/Controllers/LoanPurposeController.php:40
 * @route '/loan-purposes/{loan_purpose}/edit'
 */
    const editForm = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LoanPurposeController::edit
 * @see app/Http/Controllers/LoanPurposeController.php:40
 * @route '/loan-purposes/{loan_purpose}/edit'
 */
        editForm.get = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LoanPurposeController::edit
 * @see app/Http/Controllers/LoanPurposeController.php:40
 * @route '/loan-purposes/{loan_purpose}/edit'
 */
        editForm.head = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\LoanPurposeController::update
 * @see app/Http/Controllers/LoanPurposeController.php:45
 * @route '/loan-purposes/{loan_purpose}'
 */
export const update = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/loan-purposes/{loan_purpose}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\LoanPurposeController::update
 * @see app/Http/Controllers/LoanPurposeController.php:45
 * @route '/loan-purposes/{loan_purpose}'
 */
update.url = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { loan_purpose: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    loan_purpose: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        loan_purpose: args.loan_purpose,
                }

    return update.definition.url
            .replace('{loan_purpose}', parsedArgs.loan_purpose.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoanPurposeController::update
 * @see app/Http/Controllers/LoanPurposeController.php:45
 * @route '/loan-purposes/{loan_purpose}'
 */
update.put = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\LoanPurposeController::update
 * @see app/Http/Controllers/LoanPurposeController.php:45
 * @route '/loan-purposes/{loan_purpose}'
 */
update.patch = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\LoanPurposeController::update
 * @see app/Http/Controllers/LoanPurposeController.php:45
 * @route '/loan-purposes/{loan_purpose}'
 */
    const updateForm = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LoanPurposeController::update
 * @see app/Http/Controllers/LoanPurposeController.php:45
 * @route '/loan-purposes/{loan_purpose}'
 */
        updateForm.put = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\LoanPurposeController::update
 * @see app/Http/Controllers/LoanPurposeController.php:45
 * @route '/loan-purposes/{loan_purpose}'
 */
        updateForm.patch = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\LoanPurposeController::destroy
 * @see app/Http/Controllers/LoanPurposeController.php:59
 * @route '/loan-purposes/{loan_purpose}'
 */
export const destroy = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/loan-purposes/{loan_purpose}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LoanPurposeController::destroy
 * @see app/Http/Controllers/LoanPurposeController.php:59
 * @route '/loan-purposes/{loan_purpose}'
 */
destroy.url = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { loan_purpose: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    loan_purpose: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        loan_purpose: args.loan_purpose,
                }

    return destroy.definition.url
            .replace('{loan_purpose}', parsedArgs.loan_purpose.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoanPurposeController::destroy
 * @see app/Http/Controllers/LoanPurposeController.php:59
 * @route '/loan-purposes/{loan_purpose}'
 */
destroy.delete = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\LoanPurposeController::destroy
 * @see app/Http/Controllers/LoanPurposeController.php:59
 * @route '/loan-purposes/{loan_purpose}'
 */
    const destroyForm = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LoanPurposeController::destroy
 * @see app/Http/Controllers/LoanPurposeController.php:59
 * @route '/loan-purposes/{loan_purpose}'
 */
        destroyForm.delete = (args: { loan_purpose: string | number } | [loan_purpose: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const LoanPurposeController = { index, create, store, show, edit, update, destroy }

export default LoanPurposeController