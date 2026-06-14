import { useState } from "react";

import { Heart } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";

export const HomePage = () => {
	const [activeTab, setActiveTab] = useState<
		"all" | "favorites" | "heroes" | "villains"
	>("all");
	return (
		<>
			<>
				{/* Header */}
				<CustomJumbotron
					title="Universo de SuperHéroes"
					description="Descubre, Explora y Administra SuperHéroes y Villanos"
				/>

				{/* Stats Dashboard */}
				<HeroStats />

				{/* Tabs */}
				<Tabs value={activeTab} className="mb-8">
					<TabsList className="grid w-full grid-cols-4">
						<TabsTrigger
							value="all"
							onClick={() => setActiveTab("all")}
						>
							All Characters (16)
						</TabsTrigger>
						<TabsTrigger
							value="favorites"
							onClick={() =>
								setActiveTab("favorites")
							}
							className="flex items-center gap-2"
						>
							<Heart className="h-4 w-4" />
							Favorites (3)
						</TabsTrigger>
						<TabsTrigger
							value="heroes"
							onClick={() => setActiveTab("heroes")}
						>
							Heroes (12)
						</TabsTrigger>
						<TabsTrigger
							value="villains"
							onClick={() =>
								setActiveTab("villains")
							}
						>
							Villains (2)
						</TabsTrigger>
					</TabsList>
					<TabsContent value="all">
						<h1>Todos los personajes</h1>
						{/* Mostrar todos los personajes */}
						<HeroGrid />
					</TabsContent>
					<TabsContent value="favorites">
						<h1>Todos los favoritos</h1>
						{/* Mostrar todos los favoritos */}
						<HeroGrid />
					</TabsContent>
					<TabsContent value="heroes">
						<h1>Todos los heroes</h1>
						{/* Mostrar todos los heroes */}
						<HeroGrid />
					</TabsContent>
					<TabsContent value="villains">
						<h1>Todos los villanos</h1>
						{/* Mostrar todos los villanos */}
						<HeroGrid />
					</TabsContent>
				</Tabs>

				{/* Character Grid */}
				{/* <HeroGrid /> */}

				{/* Pagination */}
				<CustomPagination totalPages={8} />
			</>
		</>
	);
};
