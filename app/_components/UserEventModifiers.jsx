

import { useMemo } from "react";

const useEventModifiers = (events) => {
  // This hook generates the event modifiers and tooltips for each event date
  const eventModifiers = useMemo(() => {
    return events.reduce((modifiers, event) => {
      const dateString = event.date.toISOString().split("T")[0]; // Convert to YYYY-MM-DD format
      modifiers[dateString] = { tooltip: event.title }; // Store event title for tooltip
      return modifiers;
    }, {});
  }, [events]);

  return eventModifiers;
};

export default useEventModifiers;
