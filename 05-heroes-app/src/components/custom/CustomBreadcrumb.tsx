import { Fragment } from "react";
import { Link, useLocation } from "react-router";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export const CustomBreadcrumb = () => {
  const { pathname } = useLocation();
  const cumbs = pathname.split("/").filter((item) => item !== "");

  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        {/* 1. El Home siempre fijo */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* 2. Si hay rutas, ponemos un separador inicial */}
        {cumbs.length > 0 && <BreadcrumbSeparator />}

        {/* 3. Mapeamos solo las sub-rutas */}
        {cumbs.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/${item}`}>{item}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {/* 4. Separador solo si no es el último hijo */}
            {index < cumbs.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
