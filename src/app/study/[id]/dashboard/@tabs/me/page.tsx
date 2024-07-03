"use client";

import CalendarCard from "@/components/domains/dashboard/CalendarCard";
import ChecklistCard from "@/components/domains/dashboard/ChecklistCard";
import { useState } from "react";

export default function MeTab() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="flex flex-col gap-3 pt-6 py-10 px-4">
      <CalendarCard date={date} setDate={setDate} />
      <ChecklistCard date={date} />
    </section>
  );
}
