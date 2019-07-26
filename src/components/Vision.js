import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles(theme => ({
 root: {
   width: '100%',
   marginTop: theme.spacing(3),
   overflowX: 'auto',
 },
 table: {
   minWidth: 650,
 },
}));
function createData(name, mes1, mes2, mes3) {
 return { name, mes1, mes2, mes3 };
}
const rows = [
 createData( 'Roubo',42, 20, 15),
 createData( 'Furto', 52, 21, 37),
 createData( 'Estupro', 25, 55, 24),
];
export default function Vision() {
 const classes = useStyles();
 return (
   <Paper className={classes.root}>
     <Table className={classes.table}>
       <TableHead>
         <TableRow>
           <TableCell></TableCell>
           <TableCell align="right">Maio</TableCell>
           <TableCell align="right">Junho</TableCell>
           <TableCell align="right">Julho</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map(row => (
           <TableRow key={row.name}>
             <TableCell component="th" scope="row">
               {row.name}
             </TableCell>
             <TableCell align="right">{row.mes1}</TableCell>
             <TableCell align="right">{row.mes2}</TableCell>
             <TableCell align="right">{row.mes3}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </Paper>
 );
}