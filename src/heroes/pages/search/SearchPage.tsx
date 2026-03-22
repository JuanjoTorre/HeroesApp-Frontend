//Componente de la pagina de busqueda

import { SearchControls } from "./ui/SearchControls";

import { CustomJumboTron } from "@/components/custom/CustomJumboTron";
import { HeroStats } from "@/heroes/components/HeroStats";

export const SearchPage = () => {
	return (
		<>
			<CustomJumboTron
				title="Búsqueda de SuperHéroes"
				description="Descubre, explora y administra superhéroes y villanos"
			/>
			{/* Stats Dashboard */}
			<HeroStats />

			{/* Controls */}
			<SearchControls />
		</>
	);
};
