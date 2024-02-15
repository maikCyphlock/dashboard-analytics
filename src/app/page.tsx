import { BarListHero } from "@/components/Barlist";
import Flags from "@/components/Flags";
import { redis } from "@/lib/redis";
import {
  Badge,
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
} from "@tremor/react";

export default async function Home() {
  const data = await redis.zrange("visits", 0, -1, {
    withScores: true,
  });
  const listValues = await redis.lrange("pagesview", 0, -1);
  console.log(listValues);
  const outputArray = [];

  for (let i = 0; i < data.length; i += 2) {
    outputArray.push({ flag: data[i], count: data[i + 1] });
  }

  console.log(outputArray);
  return (
    <main className="container p-2 mx-auto  flex flex-col ">
      <h1 className="text-3xl font-bold text-center">Dashboard</h1>
      <TabGroup>
        <TabList className="mt-4">
          <Tab>dolarVe</Tab>
          <Tab>other</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div className="flex flex-col gap-4">
              <Badge color={"yellow"}>
                link:{" "}
                <a
                  href="https://dollar-frontend-api.vercel.app/"
                  target="_blank"
                >
                  https://dollar-frontend-api.vercel.app/
                </a>
              </Badge>
              <Card>
                <Text> Total visits</Text>
                <div className="flex gap-4 ">
                  {outputArray &&
                    outputArray?.map((d: any) => (
                      <div key={d.flag}>
                        <Badge color={"yellow"}>
                          <Flags code={d.flag}></Flags>
                          <span className="ml-2">{d.count}</span>
                        </Badge>
                      </div>
                    ))}
                </div>
              </Card>
              <BarListHero data={listValues} />
            </div>
          </TabPanel>
          <TabPanel>Content 2</TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
