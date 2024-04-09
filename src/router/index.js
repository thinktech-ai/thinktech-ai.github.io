// create vue router
import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Resources from "@/views/Resources.vue";
import SqlLineage from "@/views/products/bigdata/SqlLineage.vue";
import Price from "@/views/Price.vue";


// Define your routes
const routes = [
    {path: '/', component: Home, alias: '/home'},
    {path: '/about', component: About},
    {path: '/contact', component: Contact},
    {path: '/resources', component: Resources},
    {path: '/price', component: Price},
    // products
    {path: '/bigdata/sql-lineage', component: SqlLineage}
];

// Create a new router instance
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Export the router instance
export default router;