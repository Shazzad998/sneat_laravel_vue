import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/assets/auth/vendor/fonts/boxicons.css",
                "resources/assets/auth/css/demo.css",
                "resources/assets/auth/vendor/css/core.css",
                "resources/assets/auth/vendor/css/theme-default.css",
                "resources/assets/auth/vendor/libs/perfect-scrollbar/perfect-scrollbar.css",
                "resources/assets/auth/vendor/libs/apex-charts/apex-charts.css",
                "resources/assets/auth/vendor/js/helpers.js",
                "resources/assets/auth/js/config.js",
                "resources/assets/auth/vendor/libs/jquery/jquery.js",
                "resources/assets/auth/vendor/libs/popper/popper.js",
                "resources/assets/auth/vendor/js/bootstrap.js",
                "resources/assets/auth/vendor/libs/perfect-scrollbar/perfect-scrollbar.js",
                "resources/assets/auth/vendor/js/menu.js",
                "resources/assets/auth/vendor/libs/apex-charts/apexcharts.js",
                "resources/assets/auth/js/main.js",
                "resources/assets/auth/js/dashboards-analytics.js",
            ],
            refresh: true,
        }),
    ],
});
