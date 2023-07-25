import { HexColor } from "@yext/studio";
import * as React from "react";
import { AnalyticsProvider, AnalyticsScopeProvider } from "@yext/pages/components";
import { TemplateProps } from "@yext/pages";

export interface PageLayoutProps {
  children?: React.ReactNode;
  backgroundColor?: HexColor;
  templateData: TemplateProps;
}

export const initialProps = {
  backgroundColor: "#FFFFFF",
};

const PageLayout = ({ children, backgroundColor, templateData }: PageLayoutProps) => {
  return (
    <AnalyticsProvider templateData={templateData} requireOptIn={false} enableDebugging={true}>
    <div className="min-h-screen" style={{ backgroundColor }}>
      <main>{children}</main>
    </div>
    </AnalyticsProvider>
  );
};

export default PageLayout;
