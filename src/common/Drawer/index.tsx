import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import QuickAddClient from "../../DashboardComponents/QuickAddClient";
import QuickEditCompany from "../../DashboardComponents/QuickEditCompany";

type DrawerProp = {
  isOpen: boolean;
  onClose: () => void;
};

export function DrawerScreen({ isOpen, onClose }: DrawerProp) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody padding={5}>
            <Tabs>
              <TabList>
                <Tab>Add Client</Tab>
                <Tab>Add Company</Tab>
              </TabList>

              <TabPanels>
                <TabPanel padding={1} marginTop={5}>
                  <QuickAddClient />
                </TabPanel>
                <TabPanel padding={1} marginTop={5}>
                  <QuickEditCompany />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
