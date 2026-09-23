"use client";

import { useEffect } from "react";

const HASH_ALIASES: Record<string, string> = {
  despre: "a-propos",
  preturi: "prix",
};

export function HashAlias() {
  useEffect(() => {
    const current = window.location.hash.replace(/^#/, "");
    const next = HASH_ALIASES[current];
    if (!next) return;
    const target = document.getElementById(next);
    history.replaceState(null, "", `#${next}`);
    target?.scrollIntoView();
  }, []);

  return null;
}
