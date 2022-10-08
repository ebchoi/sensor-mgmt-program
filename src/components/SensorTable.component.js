import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  tableRowClasses,
} from '@mui/material';

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

export const SensorTable = ({ sensorList }) => {
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

  if (!sensorList) return <div>로딩중입니다.</div>;

  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <StyledTableRow>
            <TableCell>#</TableCell>
            {headCells.map(headCell => (
              <TableCell key={headCell.id}>{headCell.label}</TableCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            return (
              <StyledTableRow key={index} hover={true}>
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
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  border: '1px solid #D5DDE4',
  borderRadius: '4px',
  borderBottom: 0,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    padding: 0,
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  [`&.${tableRowClasses.head}`]: {
    height: 40,
    background: '#EFF2F5',
  },
  [`&.${tableRowClasses.hover}`]: {
    '&:hover': {
      background: '#e2e2e2',
    },
  },
}));
