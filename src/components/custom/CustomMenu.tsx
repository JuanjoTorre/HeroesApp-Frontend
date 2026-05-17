import { Link, useLocation } from "react-router";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export const CustomMenu = () => {
	const { pathname } = useLocation();

	const isActive = (path: string) => {
		return pathname === path;
	};

	return (
		<NavigationMenu>
			<NavigationMenuList>
				{/* Home */}
				<NavigationMenuItem>
					<NavigationMenuLink
						// asChild
						render={<Link to="/" />}
						className={cn(
							isActive("/") && "bg-slate-200",
							"p-2 rounded-md",
						)}
					>
						Inicio
					</NavigationMenuLink>
				</NavigationMenuItem>

				{/* Search */}
				<NavigationMenuItem>
					<NavigationMenuLink
						render={<Link to="/search" />}
						// asChild
						className={cn(
							isActive("/search") && "bg-slate-200",
							"p-2 rounded-md",
						)}
					>
						Buscar superhéroes
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};
