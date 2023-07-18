import cx from "classnames";
import * as React from "react";
import { useState } from "react";
import Card from "./Card";
import GridContainer from "./GridContainer";
import Img, { Image } from "./Img";

type Props = {
  //Insert Props Here
  className?: string;
  title: string;
  items?: Item[];
  isRoot?: boolean;
};

type Item = {
  id: string;
  name: string;
  slug: string;
  image?: Image;
  c_addressRegionDisplayName?: string;
  dm_directoryChildrenCount?: number;
  dm_directoryParents?: number[];
  subtitle?: string;
};

const selectName = (item: Item, isRoot?: boolean) => {
  const name = isRoot ? item.c_addressRegionDisplayName : item.name;
  const count = item.dm_directoryChildrenCount
    ? `(${item.dm_directoryChildrenCount})`
    : "";
  return `${name} ${count}`;
};

const GridSection = ({ className, title, items, isRoot }: Props) => {
  const [showAll, setShowAll] = useState(false);

  if (!items?.length || items.length === 0) return null;
  return (
    <div className={cx(className)}>
      <div>
        <div className="text-xl font-medium mb-2">{title}</div>
        <GridContainer>
          {items
            ?.filter((item, i) => {
              if (showAll) {
                return true;
              } else {
                return i < 12;
              }
            })
            .map((item) => (
              <Card key={item.id} href={item.slug}>
                <div className="flex gap-2">
                  {item.image && (
                    <div className="flex-none">
                      <Img
                        width={40}
                        image={item.image}
                        layout="fixed"
                        className="rounded-md drop-shadow-md"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-medium">
                      {selectName(item, isRoot)}
                    </div>
                    {item.subtitle && item.subtitle.length > 0 && (
                      <div className="text-gray-700 text-sm">
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
        </GridContainer>

        {!showAll && items.length > 12 && (
          <div className="flex items-center justify-center p-4">
            <button
              className="px-4 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-300 border border-gray-200"
              onClick={() => setShowAll(true)}
            >
              Show All {items.length.toLocaleString()} {title}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridSection;