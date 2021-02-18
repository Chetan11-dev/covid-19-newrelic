import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        // minWidth: 650,
    },
});

function createData(scale, perc,) {
    return { scale: scale, perc: perc };
}
const rows = [
    createData('Bottom 25', '9.2%',),
    createData('25-50', '20.1%',),
    createData('50-75', '37.3%',),
    createData('Top 25', '61.5%',),
];

export default function BasicTable() {
    const classes = useStyles();

    return (
<div style={{width:'400px' ,margin:'auto'}}>        
<div className="spacer"></div>
<p> For many occupations, working from home is simply not feasible, including those who are on the front lines of the response and those who are on the lower end of the economic scale.</p>

<p><b> Percent of workers with the ability to work from home by income percentile</b></p>
<TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Income percentile</TableCell>
                        <TableCell align="right">Percent</TableCell>
                        {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.scale}>
                            <TableCell component="th" scope="row">
                                {row.scale}
                            </TableCell>
                            <TableCell align="right">{row.perc}</TableCell>
                            {/* <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer></div>
    );
}