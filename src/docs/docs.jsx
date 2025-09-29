// src/docs/docs.jsx
"use client";

import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/Components/app-sidebar";

export default function DocsPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-black text-white pt-[84px]">
        <AppSidebar />

        <main className="flex-1 overflow-y-auto p-8 md:p-12">
          <article className="prose prose-invert max-w-none">
            <h1 className="scroll-m-20 text-4xl font-bold">Documentation</h1>
            <p className="mt-4">
              Welcome to ReconRabbit’s developer documentation. Use the
              navigation on the left to browse topics.
            </p>

            <h2 className="mt-10 text-2xl font-semibold">Overview</h2>
            <p>
              ReconRabbit provides a unified toolkit for managing your digital
              life. Our docs cover everything from first-time setup to advanced
              integrations.
            </p>

            <h2 className="mt-10 text-2xl font-semibold">Quick start</h2>
            <ol className="ml-6 list-decimal">
              <li>Install the ReconRabbit package.</li>
              <li>Create and configure your first workspace.</li>
              <li>Connect email, calendar, and password vault.</li>
            </ol>

            <h2 className="mt-10 text-2xl font-semibold">Need help?</h2>
            <p>
              If you get stuck, open an issue on GitHub or reach out to&nbsp;
              <a
                href="mailto:support@reconrabbit.com"
                className="text-primary underline"
              >
                support@reconrabbit.com
              </a>
            </p>
          </article>
        </main>
      </div>
    </SidebarProvider>
  );
}
