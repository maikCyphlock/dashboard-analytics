"use client";

import { Badge, BarList, Card, Text } from "@tremor/react";
import { useEffect } from "react";

const datahero = [
  { name: "/home", value: 456 },
  { name: "/imprint", value: 351 },
  { name: "/cancellation", value: 51 },
];

export const BarListHero = ({ data }: { data: any }) => {
  useEffect(() => {}, []);
  const result = data.reduce(
    (acc: any, item: any) => {
      // Update url count
      const urlIndex = acc.url.findIndex((obj: any) => obj.name === item.url);
      if (urlIndex !== -1) {
        acc.url[urlIndex].value++;
      } else {
        acc.url.push({ name: item.url, value: 1 });
      }

      // Update city count
      const cityIndex = acc.city.findIndex(
        (obj: any) =>
          decodeURIComponent(obj.name) === decodeURIComponent(item.city)
      );
      if (cityIndex !== -1) {
        acc.city[cityIndex].value++;
      } else {
        acc.city.push({ name: decodeURIComponent(item.city), value: 1 });
      }

      return acc;
    },
    { url: [], city: [] }
  );
  console.log(result.url);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        <Card decorationColor="green">
          <Text>Cities</Text>
          <BarList color="green" data={result.city} />
        </Card>
        <Card decorationColor="indigo">
          <Text>URLS</Text>
          <BarList data={result.url} />
        </Card>
      </div>
    </>
  );
};
