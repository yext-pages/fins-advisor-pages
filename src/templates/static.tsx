import {
  Template,
  GetPath,
  TemplateProps,
  TemplateRenderProps,
  HeadConfig,
  GetHeadConfig,
  TemplateConfig,
} from "@yext/pages";
import { getRuntime } from "@yext/pages/util";

export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "homepage",
};

export const getPath: GetPath<TemplateProps> = () => {
  return 'index.html';
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
    return {
      title: "Static Page Example",
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      tags: [
        {
          type: "meta",
          attributes: {
            name: "description",
            content: "Static page example meta description.",
          },
        }
      ],
    };
  };

  const Static: Template<TemplateRenderProps> = ({
    relativePrefixToRoot,
    path,
    document,
  }) => {
  
    // This is the site object from the Knowledge Graph. It contains all the data 
    // for the site entity, and can be accessed in any template, including static templates. 
    const { _site } = document;

  
  return (
    <>
    <a href="/fins_professional1" target = "_blank" rel="noreferrer">
      <h1 className="font-extrabold hover:underline hover:text-blue-800">Click here to view a sample advisor page</h1>
      </a>
    </>
  );
};

export default Static;
