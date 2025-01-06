import { ReactNode } from "react";

export interface ChildObject {
  label: string;
  url: string;
}

export interface ListSectionProps {
  title: string | ReactNode;
  children: Array<string | ReactNode | ChildObject | null>;
  clickable?: boolean;
}