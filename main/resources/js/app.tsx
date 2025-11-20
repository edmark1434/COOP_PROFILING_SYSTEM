import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Coop Profiling System';
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const progressColor = prefersDark ? "#717079" : "#4B5563";

createInertiaApp({
    title: (title) => (title ? `${title}` : ""),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: progressColor,
    },
});

// This will set light / dark mode on load...
initializeTheme();
