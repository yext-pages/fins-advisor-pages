import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import CenteredContainer from "../components/CenteredContainer";
import GridContainer from "../components/GridContainer";
import HStack from "../components/HorizontalStack";
import HeaderSimple from "../components/HeaderSimple";
import Headline from "../components/Headline";
import Item from "../components/Item";
import ItemsGrid from "../components/ItemsGrid";
import PageLayout from "../components/PageLayout";
import Paragraph from "../components/Paragraph";
import ProductImage from "../components/HeroImage";
import ProductTable from "../components/ProductTable";
import Title from "../components/Title";
import VerticalStack from "../components/VerticalStack";
import "../index.css";
import HorizontalStack from "../components/HorizontalStack";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";
import { LocationMap } from "@yext/pages/components";
import { GoogleMaps } from "@yext/components-tsx-maps";
export const config: TemplateConfig = {
  stream: {
    $id: "professionals",
    localization: { locales: ["en"], primary: false },
    filter: { entityTypes: ["financialProfessional"] },
    fields: ["name", "description", "headshot", "slug", "photoGallery", "fins_jobTitle", "logo", "fins_relatedServices.name", "emails", "address", "mainPhone", "geocodedCoordinate", "fins_relatedServices.description", "fins_relatedServices.fins_servicesImage"],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export default function Professional({ document }: TemplateProps) {
  const mappinSVG = (
    <svg
      width="56"
      height="58"
      viewBox="0 0 56 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.0951 1C33.1149 1 37.6595 3.03469 40.9491 6.32432C44.2388 9.61396 46.2734 14.1586 46.2734 19.1784C46.2734 25.9554 40.1704 38.558 28.0941 57C16.019 38.5565 9.91669 25.955 9.91669 19.1784C9.91669 14.1586 11.9514 9.61396 15.241 6.32432C18.5307 3.03469 23.0752 1 28.0951 1Z"
        fill="#0F70F0"
        stroke="black"
        strokeOpacity="0.5"
      />
      <path
        d="M28.095 27.2577C32.5571 27.2577 36.1743 23.6405 36.1743 19.1784C36.1743 14.7163 32.5571 11.0991 28.095 11.0991C23.633 11.0991 20.0157 14.7163 20.0157 19.1784C20.0157 23.6405 23.633 27.2577 28.095 27.2577Z"
        fill="white"
      />
    </svg>
  );


  return (
    <PageLayout backgroundColor="#FFFFFF">
      <CenteredContainer>
        <HeaderSimple
        logo={document.logo.image.url}
        backgroundColor="#fff"
        />
          <HorizontalStack
            spacing="1"
            topMargin="0"
            bottomMargin="0"
            leftMargin="0"
            rightMargin="0"
            alignment="center" 
            verticalOnMobile="false"
            backgroundColor="#1C2E5E"
            backgroundImage={document.photoGallery[0]?.image.url}          
            >
            <HeroImage
              src={`${document.headshot.url}`}
              alt={`${document.headshot.alternateText}`}
              leftPadding="20"
            />
        <ContactInfo
        name={document.name}
        title={document.fins_jobTitle}
        addressLine1={document.address.line1}
        addressLine2={`${document.address.city}, ${document.address.region} ${document.address.postalCode}`}
        email={document.emails[0]}
        phone={document.mainPhone}
        textColor="#fff"
        >       
        </ContactInfo>
          </HorizontalStack>
        <VerticalStack
          alignment="left"
          rightMargin="0"
          leftMargin="0"
          bottomMargin="0"
          topMargin="0"
          spacing="0"
          backgroundColor="#F9FAFB"
        >
          <Title
            value={`About ${document.name}`}
            textSize="4xl"
            fontWeight="medium"
            topMargin="4"
            bottomMargin="4"
          />
          <Paragraph
            value={`${document.description}`}
            textSize="base"
            fontWeight="normal"
          />
        </VerticalStack>
        {/* <ItemsGrid 
        title="Services Offered"
        columns={3}>
          <Item
            name={document.fins_relatedServices[0]?.name}
            image={document.fins_relatedServices[0]?.fins_servicesImage.url}
            description={document.fins_relatedServices[0]?.description}
          />
          <Item
            name={document.fins_relatedServices[1]?.name}
            image={document.fins_relatedServices[0]?.fins_servicesImage.url}
            description={document.fins_relatedServices[1]?.description}
          />
          <Item
            name={document.fins_relatedServices[2]?.name}
            image={document.fins_relatedServices[0]?.fins_servicesImage.url}
            description={document.fins_relatedServices[2]?.description}
          />
        </ItemsGrid> */}
        <Title
            value={`Let's Talk`}
            textSize="4xl"
            fontWeight="medium"
            topMargin="0"
            bottomMargin="4"
          />
        <GridContainer
        backgroundColor="#F9FAFB"
        >
          <HorizontalStack
            spacing="1"
            topMargin="4"
            bottomMargin="10"
            leftMargin="2"
            rightMargin="2"
            alignment="center" 
            verticalOnMobile="false"          
            >
            <Paragraph
              value={`${document.description}`}
              fontWeight="light"
              textSize="base"
            />
            <Paragraph
              value={`${document.emails[0]}`}
              fontWeight="light"
              textSize="base"
            />
          </HorizontalStack>
          <LocationMap
              className="h-[300px] mt-16"
              clientKey="gme-yextinc"
              coordinate={document.geocodedCoordinate}
              provider={GoogleMaps}
            >
              {    <svg
      width="56"
      height="58"
      viewBox="0 0 56 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.0951 1C33.1149 1 37.6595 3.03469 40.9491 6.32432C44.2388 9.61396 46.2734 14.1586 46.2734 19.1784C46.2734 25.9554 40.1704 38.558 28.0941 57C16.019 38.5565 9.91669 25.955 9.91669 19.1784C9.91669 14.1586 11.9514 9.61396 15.241 6.32432C18.5307 3.03469 23.0752 1 28.0951 1Z"
        fill="#0F70F0"
        stroke="black"
        strokeOpacity="0.5"
      />
      <path
        d="M28.095 27.2577C32.5571 27.2577 36.1743 23.6405 36.1743 19.1784C36.1743 14.7163 32.5571 11.0991 28.095 11.0991C23.633 11.0991 20.0157 14.7163 20.0157 19.1784C20.0157 23.6405 23.633 27.2577 28.095 27.2577Z"
        fill="white"
      />
    </svg>}
            </LocationMap>
        </GridContainer>
      <Footer
        logo={document.logo.image.url}
      />
      </CenteredContainer>
    </PageLayout>
  )
}