//Componente donde se definiran las rutas de la aplicacion

import { createBrowserRouter } from "react-router";
import { lazy } from "react";

import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { SearchPage } from "@/heroes/pages/search/SearchPage";

// De esta manera gestionamos el la carga perezosa de 'AdminPage'
//Tenemos que exportar por defecto la 'AdminPage'
// import { AdminPage } from "@/admin/pages/AdminPage";
const AdminPage = lazy(() => import("@/admin/pages/AdminPage"));

export const appRouter = createBrowserRouter([
	// Se define un layout y las paginas que tengan dicho layout como childrens
	{
		path: "/",
		element: <HeroesLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "heroes/1",
				element: <HeroPage />,
			},
			{
				path: "search",
				element: <SearchPage />,
			},
		],
	},
	{
		path: "/admin",
		element: <AdminLayout />,
		children: [
			{
				index: true,
				element: <AdminPage />,
			},
		],
	},
]);
