import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  useToast,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

import moment from "moment";

const LogsList = ({ fetchFunction, title }) => {
  const toast = useToast();
  const [logs, setLogs] = React.useState([]);
  const { key } = useParams();
  React.useEffect(() => {
    fetchLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchFunction]);

  const fetchLogs = async () => {
    const list = await fetchFunction(key);
    if (list.success) {
      setLogs(list.logs || []);
    } else {
      toast({
        status: "error",
        title: list.message,
        isClosable: true,
      });
    }
  };
  console.log(logs.reverse());

  return (
    <>
      <Button onClick={fetchLogs}>Reload</Button>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>{title}</TableCaption>
          <Thead>
            <Tr>
              <Th>Log By</Th>
              <Th>Log Number</Th>
              <Th>Log Type</Th>
              <Th>Log Description</Th>
              <Th>LOg Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {logs.reverse().map((log) => {
              return (
                <Tr>
                  <Td>{log?.username}</Td>
                  <Td>{log?.number}</Td>
                  <Td>{log?.type}</Td>
                  <Td width={"20%"}>{log?.content.substring(0, 100)}</Td>
                  <Td>{moment(log?.createdAt).format("HH:mm - DD/MM/YYYY")}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default LogsList;
