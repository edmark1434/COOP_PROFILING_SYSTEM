import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
 * @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
 * @route '/email/verify'
 */
export const Fortifynotice = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Fortifynotice.url(options),
    method: 'get',
})

Fortifynotice.definition = {
    methods: ["get","head"],
    url: '/email/verify',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
 * @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
 * @route '/email/verify'
 */
Fortifynotice.url = (options?: RouteQueryOptions) => {
    return Fortifynotice.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
 * @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
 * @route '/email/verify'
 */
Fortifynotice.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Fortifynotice.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
 * @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
 * @route '/email/verify'
 */
Fortifynotice.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Fortifynotice.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
 * @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
 * @route '/email/verify'
 */
    const FortifynoticeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Fortifynotice.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
 * @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
 * @route '/email/verify'
 */
        FortifynoticeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Fortifynotice.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
 * @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
 * @route '/email/verify'
 */
        FortifynoticeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Fortifynotice.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Fortifynotice.form = FortifynoticeForm
/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route '/verify-email'
 */
export const Appnotice = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Appnotice.url(options),
    method: 'get',
})

Appnotice.definition = {
    methods: ["get","head"],
    url: '/verify-email',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route '/verify-email'
 */
Appnotice.url = (options?: RouteQueryOptions) => {
    return Appnotice.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route '/verify-email'
 */
Appnotice.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Appnotice.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route '/verify-email'
 */
Appnotice.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Appnotice.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route '/verify-email'
 */
    const AppnoticeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Appnotice.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route '/verify-email'
 */
        AppnoticeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Appnotice.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route '/verify-email'
 */
        AppnoticeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Appnotice.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Appnotice.form = AppnoticeForm
/**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
 * @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
 * @route '/email/verify/{id}/{hash}'
 */
export const Fortifyverify = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Fortifyverify.url(args, options),
    method: 'get',
})

Fortifyverify.definition = {
    methods: ["get","head"],
    url: '/email/verify/{id}/{hash}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
 * @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
 * @route '/email/verify/{id}/{hash}'
 */
Fortifyverify.url = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    hash: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                hash: args.hash,
                }

    return Fortifyverify.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{hash}', parsedArgs.hash.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
 * @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
 * @route '/email/verify/{id}/{hash}'
 */
Fortifyverify.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Fortifyverify.url(args, options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
 * @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
 * @route '/email/verify/{id}/{hash}'
 */
Fortifyverify.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Fortifyverify.url(args, options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
 * @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
 * @route '/email/verify/{id}/{hash}'
 */
    const FortifyverifyForm = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Fortifyverify.url(args, options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
 * @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
 * @route '/email/verify/{id}/{hash}'
 */
        FortifyverifyForm.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Fortifyverify.url(args, options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
 * @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
 * @route '/email/verify/{id}/{hash}'
 */
        FortifyverifyForm.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Fortifyverify.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Fortifyverify.form = FortifyverifyForm
/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:14
 * @route '/verify-email/{id}/{hash}'
 */
export const Appverify = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Appverify.url(args, options),
    method: 'get',
})

Appverify.definition = {
    methods: ["get","head"],
    url: '/verify-email/{id}/{hash}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:14
 * @route '/verify-email/{id}/{hash}'
 */
Appverify.url = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    hash: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                hash: args.hash,
                }

    return Appverify.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{hash}', parsedArgs.hash.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:14
 * @route '/verify-email/{id}/{hash}'
 */
Appverify.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Appverify.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:14
 * @route '/verify-email/{id}/{hash}'
 */
Appverify.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Appverify.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:14
 * @route '/verify-email/{id}/{hash}'
 */
    const AppverifyForm = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Appverify.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:14
 * @route '/verify-email/{id}/{hash}'
 */
        AppverifyForm.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Appverify.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:14
 * @route '/verify-email/{id}/{hash}'
 */
        AppverifyForm.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Appverify.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Appverify.form = AppverifyForm
/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::send
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route '/email/verification-notification'
 */
export const send = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

send.definition = {
    methods: ["post"],
    url: '/email/verification-notification',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::send
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route '/email/verification-notification'
 */
send.url = (options?: RouteQueryOptions) => {
    return send.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::send
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route '/email/verification-notification'
 */
send.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::send
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route '/email/verification-notification'
 */
    const sendForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: send.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::send
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route '/email/verification-notification'
 */
        sendForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: send.url(options),
            method: 'post',
        })
    
    send.form = sendForm
const verification = {
    notice: Object.assign(Fortifynotice, Appnotice),
verify: Object.assign(Fortifyverify, Appverify),
send: Object.assign(send, send),
}

export default verification