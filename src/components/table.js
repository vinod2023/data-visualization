import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ErrorText from './errorText';

function TableData(props) {

    useEffect(() => {
        console.log(props.data);
    }, [props.data])
    return (
        <div>
            {
                props.data.length !== 0 ?
                    <Table size="medium" className="tableData">
                        <TableHead className="thead">
                            <TableRow>
                                <TableCell scope="col" component="th" align="center">
                                    SalesOrderID
                            </TableCell>
                                <TableCell scope="col" component="th" align="center">
                                    OrderDate
                            </TableCell>
                                <TableCell scope="col" component="th" align="center">
                                    ShipDate
                            </TableCell>
                                <TableCell scope="col" component="th" align="center">
                                    AccountNumber
                            </TableCell>
                                <TableCell scope="col" component="th" align="center">
                                    ProductID
                            </TableCell>
                                <TableCell scope="col" component="th" align="center">
                                    Name
                            </TableCell>
                                <TableCell scope="col" component="th" align="center">
                                    Product_SUBCategory
                            </TableCell>
                                <TableCell scope="col" component="th" align="center">
                                    ListPrice
                            </TableCell>
                                <TableCell scope="col" component="th" align="center">
                                    UnitPrice
                            </TableCell>
                                <TableCell scope="col" component="th" align="center">
                                    OrderQty
                            </TableCell>
                                <TableCell scope="col" component="th" align="center">
                                    StandardCost
                            </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.data.map(d => {
                                    return (
                                        <TableRow className="tableRow">
                                            <TableCell scope="col" align="center">
                                                {d.SalesOrderID}
                                            </TableCell>
                                            <TableCell scope="col" align="center">
                                                {d.OrderDate}
                                            </TableCell>
                                            <TableCell scope="col" align="center">
                                                {d.ShipDate}
                                            </TableCell>
                                            <TableCell scope="col" align="center">
                                                {d.AccountNumber}
                                            </TableCell>
                                            <TableCell scope="col" align="center">
                                                {d.ProductID}
                                            </TableCell>
                                            <TableCell scope="col" align="center">
                                                {d.Name}
                                            </TableCell>
                                            <TableCell scope="col" align="center">
                                                {d.Product_SUBCategory}
                                            </TableCell>
                                            <TableCell scope="col" align="center">
                                                {d.ListPrice}
                                            </TableCell>
                                            <TableCell scope="col" align="center">
                                                {d.UnitPrice}
                                            </TableCell>
                                            <TableCell scope="col" align="center">
                                                {d.OrderQty}
                                            </TableCell>
                                            <TableCell scope="col" align="center">
                                                {d.StandardCost}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                    :
                    <ErrorText/>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    };
};

export default connect(mapStateToProps, null)(TableData)
