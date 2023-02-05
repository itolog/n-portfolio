import { NuxtLinkProps } from "#app/components/nuxt-link";

export interface NavLinks extends NuxtLinkProps {
    label: string;
}

export const navLinks: NavLinks[] = [
  {
    to: "/",
    label: "Home"
  },
  {
    to: "/contacts",
    label: "Contacts"
  }
];