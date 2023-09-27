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
  import {
    GetTransactions, ReverseTransaction,
  } from "../services/api";
  import moment from "moment";
  
  const TransactionsList = ({ tab }) => {
    const toast = useToast();
    const [transactions, setTransactions] = React.useState([]);
    const { key } = useParams();
    React.useEffect(() => {
      fetchNumbers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tab]);

    const fetchNumbers = async () => {
      const list = await GetTransactions(key);
      if (list.success) {
        setTransactions(list.transactions || []);
      } else {
        toast({
          status: "error",
          title: list.message,
          isClosable: true,
        });
      }
    };
    const reverseTransaction = async (transactionID) => {
      const list = await ReverseTransaction(transactionID);
      if (list.success) {
        toast({
          status: "success",
          title: "Transaction reversed",
          isClosable: true
        })
      } else {
        toast({
          status: "error",
          title: list.message,
          isClosable: true,
        });
      }
    }
    console.log(transactions.reverse());

    return (
      <TableContainer>
        <Table variant="simple">
          <TableCaption>List of all Numbers</TableCaption>
          <Thead>
            <Tr>
              <Th>Number</Th>
              <Th>Username</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
              <Th>Date</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.reverse().map((num) => {
              return (
                <Tr>
                  <Td>{num?.number}</Td>
                  <Td>{num?.username}</Td>
                  <Td>{num?.dataAmount}</Td>
                  <Td>{num?.status}</Td>
                  <Td>{moment(num?.createdAt).format("HH:mm - DD/MM/YYYY")}</Td>
                  <Td><Button onClick={()=> reverseTransaction(num?.transactionID)}>Reverse Transaction</Button></Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    );
  };
  
  export default TransactionsList;
  