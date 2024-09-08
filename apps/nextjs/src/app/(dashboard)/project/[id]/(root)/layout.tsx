import React, { cache } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Search } from "lucide-react";

import { db } from "@amaxa/db/client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@amaxa/ui/breadcrumb";
import { Input } from "@amaxa/ui/input";
import { SidebarTrigger } from "@amaxa/ui/sidebar";

import ComingSoon from "~/components/ComingSoon";
import { AppSidebar } from "~/components/navbar/app-sidebar";
import { TeamSwitcher } from "~/components/navbar/switcher";
import { UserMenu } from "~/components/UserMenu";
import { checkAuth } from "~/lib/auth";
import GetLastBreadCrumb from "./_components/LastItem";

const getProjectInfo = cache(async (id: string) => {
  const data = await db.query.Projects.findFirst({
    where: (Project, { eq }) => eq(Project.id, id),
    columns: {
      name: true,
      id: true,
    },
  });
  return data;
});

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const data = await getProjectInfo(id);
  const auth = await checkAuth();

  if (!data) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen w-full flex-col ">
      <AppSidebar
        id={data.id}
        user={{
          name: auth.user.name!,
          email: auth.user.email!,
          avatar: auth.user.image!,
        }}
        teamSwitcher={<TeamSwitcher />}
      />
      <div className="flex flex-col sm:gap-4 sm:py-4 ">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <SidebarTrigger />
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/project/`}>Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/project/${data.id}`}>{data.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  <GetLastBreadCrumb id={data.id} />
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <ComingSoon>
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                disabled
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
              />
            </div>
          </ComingSoon>
          <UserMenu />
        </header>
        {children}
      </div>
    </div>
  );
}
