import { HexColor } from "@yext/studio";
import Cta from "./Cta";

export interface MapDescriptionProps {
    children?:React.ReactNode;
    description?: string;
    phone?: string;
    email?: string;
    textColor?: HexColor;
  }
  const MapDescription = ({
    description,
    phone,
    email,
    textColor,
  }: MapDescriptionProps) => {
    return (
        <div className="rounded-lg max-height-full">
              <p className="whitespace-pre-line mr-2" style={{ color: textColor }}>{description}</p>
            <div className="flex mb-2 mt-5">
              <p className="w-1/2 mr-2" style={{ color: textColor }}>{phone}</p>
              <p className="w-1/2 mr-2" style={{ color: textColor }}>{email}</p>
            </div>
            <div className="cta-container mt-10">
        <Cta
        buttonText="Request a Meeting"
        url="#"
        style="text-blue-900 border-slate-100 bg-white hover:bg-slate-100 rounded-md"
        />
          </div>
        </div>
      );
    };

export default MapDescription;
