import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import PageLayout from "../../components/layouts/PageLayout";
import NumbersList from "../../components/NumbersList";
import AddNumber from "../../components/AddNumber";
import { useState } from "react";
import UpdateNumber from "../../components/UpdateNumber";
import TransactionsList from "../../components/TransactionsList";
import LogsList from "../../components/Logs";
import { GetAdminLogs, GetAllLogs, GetDataLogs } from "../../services/api";

const AdminPage = () => {
const [tabIndex, setTabIndex] = useState(0)

const handleTabsChange = (index) => {
    setTabIndex(index)
  }
  return (
    <PageLayout>
      <Box width={"90%"} mt="20" ml="5">
        <Tabs onChange={handleTabsChange}>
          <TabList>
            <Tab>All Numbers </Tab>
            <Tab>Add a number</Tab>
            <Tab>Update Number</Tab>
            <Tab>Transactions</Tab>
            <Tab>Logs</Tab>
            <Tab>Data Logs</Tab>
            <Tab>Admin Logs</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <NumbersList tab={tabIndex}/>
            </TabPanel>
            <TabPanel>
              <AddNumber />
            </TabPanel>
            <TabPanel>
             <UpdateNumber />
            </TabPanel>
            <TabPanel>
             <TransactionsList />
            </TabPanel>
            <TabPanel>
             <LogsList fetchFunction={GetAllLogs} title="All Logs"/>
            </TabPanel>
            <TabPanel>
             <LogsList fetchFunction={GetDataLogs} title="Data Logs"/>
            </TabPanel>
            <TabPanel>
             <LogsList fetchFunction={GetAdminLogs} title="Admin Logs"/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </PageLayout>
  );
};

export default AdminPage;
