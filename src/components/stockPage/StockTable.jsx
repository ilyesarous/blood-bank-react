import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActions } from "./store/AddSlice";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F6F6F6",
  },
}));

const columns = [
  {
    id: "code",
    label: "Code",
    align: "center",
  },
  {
    id: "blood",
    label: "Blood",
    align: "center",
  },
  {
    id: "codedonateur",
    label: "Code Donation",
    align: "center",
  },
  {
    id: "dateperime",
    label: "Date Perime",
    align: "center",
  },
  {
    id: "quantite",
    label: "Qantity",
    align: "center",
  },{
    id: "quantiteTotal",
    label: "Qantity Total",
    align: "center",
  },{
    id: "version",
    label: "Version",
    align: "center",
  },
];

const StockTable = () => {
  const [stocks, setStocks] = useState([]);
  const count = useSelector(state => state.addStock.count)
  const blood = useSelector(state => state.addStock.blood)
  // const code = useSelector(state => state.addStock.code)
  const dispatch = useDispatch()

  const getDataHandler = useCallback(async () => {
    try {
      console.log("blood", blood);
      const stock = await fetch(`http://localhost:9005/blood-bank/stock?blood=${blood}`);
      if (!stock.ok) throw new Error("something went wrong!");
      const data = await stock.json();
      setStocks(data);
    } catch (error) {
      console.log(console.error);
    }
  }, [count]);

  useEffect(() => {
    getDataHandler();
  }, [getDataHandler]);

  const getCodeHandler = code => {
    dispatch(addActions.setCode(code))
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <TableContainer sx={{ maxHeight: 450 }}>
        <Table size="small" stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    border: ".5px solid #EEEEEE",
                    borderCollapse: "collapse",
                    maxWidth: "100px"
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((row) => {
              return (
                <StyledTableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.code}
                  onClick={() => getCodeHandler(row.code)}
                  sx={{ ":focus": { backgroundColor: "#EEEEEE" } }}
                >
                  {columns.map((column) => {
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        sx={{
                          border: ".5px solid #EEEEEE",
                          borderCollapse: "collapse",
                          height: "50px",
                        }}
                      >
                        {row[column.id]}
                      </TableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StockTable;
