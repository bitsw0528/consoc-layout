import { isPremiumUser, usePageData } from "@keybr/pages-shared";
import { AdBanner } from "@keybr/thirdparties";
import { PortalContainer, Toaster } from "@keybr/widget";
import { type ReactNode } from "react";
import { NavMenu } from "./NavMenu.tsx";
import * as styles from "./Template.module.less";

export function Template({
  path,
  children,
}: {
  readonly path: string;
  readonly children: ReactNode;
}) {
  const { publicUser } = usePageData();
  return isPremiumUser(publicUser) ? (
    <div className={styles.bodyAlt}>
      <main className={styles.mainAlt}>
        {children}
        <PortalContainer />
        <Toaster />
      </main>
      <nav className={styles.navAlt}>
        <NavMenu currentPath={path} />
      </nav>
      <EnvName />
    </div>
  ) : (
    <div className={styles.body}>
      <main className={styles.main}>
        {children}
        <PortalContainer />
        <Toaster />
      </main>
      <nav className={styles.nav}>
        <NavMenu currentPath={path} />
      </nav>
      <div className={styles.topbar}>
        <AdBanner name="BANNER_970X90_1" />
      </div>
      <div className={styles.sidebar}>
        <AdBanner name="BANNER_160X600_1" />
      </div>
      <EnvName />
    </div>
  );
}

function EnvName() {
  return null;
}
