// Conponente Layout de las paginas de admin
import { Outlet } from "react-router";

export const AdminLayout = () => {
	return (
		<div className="bg-blue-500">
			{/* El outlet hace referencia a los childrens definidos en appRouter.tsx */}
			<Outlet />
		</div>
	);
};
