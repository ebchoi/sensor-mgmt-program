import React, { useState, Fragment } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  tableRowClasses,
  TablePagination,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

export const SensorTable = ({ sensorList }) => {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const isSelected = name => selected.indexOf(name) !== -1;

  /**
   * mui table용 바디셀 초기화 함수
   * @param {*} thingName
   * @param {*} batLvl
   * @param {*} connAt
   * @param {*} disconnAt
   * @param {*} disconnReason
   * @param {*} connCardNum
   * @param {*} connGW
   * @param {*} rawSentCnt
   * @param {*} remainData
   * @param {*} rssi
   * @param {*} fwVer
   * @param {*} hwVer
   * @returns
   */
  const createData = (
    thingName,
    batLvl,
    connAt,
    disconnAt,
    disconnReason,
    connCardNum,
    connGW,
    rawSentCnt,
    remainData,
    rssi,
    fwVer,
    hwVer
  ) => {
    return {
      thingName,
      batLvl,
      connAt,
      disconnAt,
      disconnReason,
      connCardNum,
      connGW,
      rawSentCnt,
      remainData,
      rssi,
      fwVer,
      hwVer,
    };
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  };

  /**
   * 정렬을 위한 비교 함수
   * @param {*} a
   * @param {*} b
   * @param {*} orderBy
   * @returns
   */
  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  /**
   * 정렬을 위한 비교 함수
   * @param {*} order
   * @param {*} orderBy
   * @returns
   */
  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  /**
   * 정렬 기능이 추가된 헤더 생성 함수
   * @param {*} props
   * @returns
   */
  const EnhancedTableHead = props => {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = property => event => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <StyledTableRow>
          <StyledTableCell>#</StyledTableCell>
          {headCells.map(headCell => (
            <StyledTableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </StyledTableCell>
          ))}
        </StyledTableRow>
      </TableHead>
    );
  };

  /**
   * 페이지 선택 함수
   * @param {*} event
   * @param {*} newPage
   */
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  /**
   * 페이지 당 노출될 열 갯수 선택 함수
   * @param {*} event
   */
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  /**
   * 정렬 선택 함수
   * @param {*} event
   * @param {*} name
   */
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  /**
   * mui table용 바디셀 데이터
   */
  const rows = sensorList.map(({ thingName, shadow }) =>
    createData(
      thingName,
      shadow.batLvl,
      shadow.connAt,
      shadow.disconnAt,
      shadow.disconnReason,
      shadow.connCardNum,
      shadow.connGW,
      shadow.rawSentCnt,
      shadow.remainData,
      shadow.rssi,
      shadow.fwVer,
      shadow.hwVer
    )
  );

  /**
   * mui table용 헤드셀 데이터
   */
  const headCells = [
    {
      id: 'thingName',
      label: 'Sensor ID',
    },
    {
      id: 'batLvl',
      label: 'Bat.(%)',
    },
    {
      id: 'connAt',
      label: 'Connected at',
    },
    {
      id: 'disconnAt',
      label: 'Disconnected at',
    },
    {
      id: 'disconnReason',
      label: 'Reason',
    },
    {
      id: 'connCardNum',
      label: 'Card No.',
    },
    {
      id: 'connGW',
      label: 'Gateway',
    },
    {
      id: 'rawSentCnt',
      label: 'Raw sent',
    },
    {
      id: 'remainData',
      label: 'Remain',
    },
    {
      id: 'rssi',
      label: 'RSSI',
    },
    {
      id: 'fwVer',
      label: 'F/W ver.',
    },
    {
      id: 'hwVer',
      label: 'H/W ver.',
    },
  ];

  if (!sensorList) return <div>로딩중입니다.</div>;

  return (
    <Fragment>
      <StyledTableContainer>
        <Table>
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover key={row.name}>
                    <StyledTableCell>{index}</StyledTableCell>
                    <StyledTableCell>{row.thingName}</StyledTableCell>
                    <StyledTableCell>{row.batLvl}</StyledTableCell>
                    <StyledTableCell>{row.connAt}</StyledTableCell>
                    <StyledTableCell>{row.disconnAt}</StyledTableCell>
                    <StyledTableCell>{row.disconnReason}</StyledTableCell>
                    <StyledTableCell>{row.connCardNum}</StyledTableCell>
                    <StyledTableCell>{row.connGW}</StyledTableCell>
                    <StyledTableCell>{row.rawSentCnt}</StyledTableCell>
                    <StyledTableCell>{row.remainData}</StyledTableCell>
                    <StyledTableCell>{row.rssi}</StyledTableCell>
                    <StyledTableCell>{row.fwVer}</StyledTableCell>
                    <StyledTableCell>{row.hwVer}</StyledTableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Fragment>
  );
};

const StyledTableContainer = styled(TableContainer)(() => ({
  border: '1px solid #D5DDE4',
  borderRadius: '4px',
  borderBottom: 0,
}));

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    padding: 12,
    textAlign: 'center',
    borderRight: '1px solid #D5DDE4',
    '&:last-child': {
      borderRight: '0px',
    },
  },
  [`&.${tableCellClasses.body}`]: {
    height: 35,
    padding: 0,
    textAlign: 'center',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  [`&.${tableRowClasses.head}`]: {
    height: 40,
    background: '#EFF2F5',
  },
}));
