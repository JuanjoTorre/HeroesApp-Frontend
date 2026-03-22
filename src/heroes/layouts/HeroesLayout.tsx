// Conponente Layout de las paginas de heroes
import { Outlet } from "react-router";

export const HeroesLayout = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
			<div className="max-w-7xl mx-auto p-6">
				{/* El outlet hace referencia a los childrens definidos en appRouter.tsx */}
				<Outlet />
			</div>
		</div>
	);
};
