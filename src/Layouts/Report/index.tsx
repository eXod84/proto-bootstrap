import { type PropsWithChildren, type ReactNode, type FC } from "react";
import "./styles.css";

type Props = PropsWithChildren<{
  header: ReactNode;
  sidebar: ReactNode;
  footer: ReactNode;
}>;

const ReportLayout: FC<Props> = ({ header, sidebar, footer, children }) => {
  return (
    <>
      <div className="srf-layout__skip-to-content" />
      <div className="srf-layout__notification" />
      <div className="srf-layout__header">{header}</div>
      <div className="srf-layout__sidebar">{sidebar}</div>
      <div className="srf-layout-main-content-wrapper">
        <main className="srf-layout__body">
          <div id="report-content">{children}</div>
        </main>
        <div className="srf-layout__footer">{footer}</div>
      </div>
    </>
  );
};

export { ReportLayout };
