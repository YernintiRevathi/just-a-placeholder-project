// src/components/LanguageToggle.tsx

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  // --- THE FIX IS HERE ---
  // If i18n is not ready or the language is not yet set, we can return null or a loading state.
  // This prevents the error from happening on the initial render.
  if (!i18n.language) {
    return null; // Or return a simple loading button: <Button variant="ghost" size="sm">...</Button>
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Globe className="h-4 w-4 mr-1" />
          {/* This code is now safe because we checked for i18n.language above */}
          {i18n.language.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => i18n.changeLanguage("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => i18n.changeLanguage("hi")}>
          हिन्दी (Hindi)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// // src/components/LanguageToggle.tsx

// import { useTranslation } from "react-i18next";
// import { Button } from "@/components/ui/button";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// import { Globe } from "lucide-react";

// export function LanguageToggle() {
//   const { i18n } = useTranslation();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" size="sm">
//           <Globe className="h-4 w-4 mr-1" />
//           {i18n.language.toUpperCase()}
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => i18n.changeLanguage("en")}>
//           English
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => i18n.changeLanguage("hi")}>
//           हिन्दी (Hindi)
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }