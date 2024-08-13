import { cn } from "@/lib/utils";

export type MainPageGenericProps<T = unknown> = {
  children: React.ReactNode;
  className?: string;
} & T;

export function MainPage({ className, children }: MainPageGenericProps) {
  return <section className={cn(["h-screen", className])}>{children}</section>;
}

export function MainPageHeader({ className, children }: MainPageGenericProps) {
  return (
    <header
      className={cn([
        "px-6 py-3 border-b border-border flex items-center justify-between",
        className,
      ])}
    >
      {children}
    </header>
  );
}

export function MainPageHeaderTitle({
  className,
  children,
}: MainPageGenericProps) {
  return (
    <span
      className={cn(["text-sm text-muted-foreground uppercase", className])}
    >
      {children}
    </span>
  );
}

export function MainPageHeaderNav({
  className,
  children,
}: MainPageGenericProps) {
  return <nav className={cn(["", className])}>{children}</nav>;
}

export function MainPageMain({ className, children }: MainPageGenericProps) {
  return <main className={cn(["p-6", className])}>{children}</main>;
}
