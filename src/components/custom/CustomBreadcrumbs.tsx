import { SlashIcon } from "lucide-react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Link } from "react-router";

interface Breadcrumb {
	label: string;
	to: string;
}

interface Props {
	currentPage: string;
	breadcrumbs?: Breadcrumb[];
}

export const CustomBreadcrumbs = ({ currentPage, breadcrumbs = [] }: Props) => {
	return (
		<Breadcrumb className="my-5">
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink
						render={<Link to="/" />}
						//  asChild
					>
						Inicio
					</BreadcrumbLink>
				</BreadcrumbItem>

				{breadcrumbs.map((crumb) => (
					<div className="flex items-center">
						<BreadcrumbItem>
							<BreadcrumbSeparator>
								<SlashIcon />
							</BreadcrumbSeparator>
							<BreadcrumbLink
								render={<Link to={crumb.to} />}
								// asChild
							>
								{crumb.label}
							</BreadcrumbLink>
						</BreadcrumbItem>
					</div>
				))}

				<BreadcrumbSeparator>
					<SlashIcon />
				</BreadcrumbSeparator>

				<BreadcrumbItem>
					<BreadcrumbLink className="text-black">
						{currentPage}
					</BreadcrumbLink>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
};
