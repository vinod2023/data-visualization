
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

function DragAndDrop(props) {

    const [leftPanelData, setLeftPanelData] = useState([]);
    const [rightPanelData, setRightPanelData] = useState([]);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        if (props.data.length > 0) {
            setLeftPanelData(Object.keys(props.data[0]))
        }
        else {
            setLeftPanelData([])
        }
    }, [])

    const handleDragEnd = (e, item, index) => {
        setLeftPanelData(leftPanelData.filter((i, ind) => { return ind !== index }));
        setRightPanelData([...rightPanelData, item]);
        getTableData(item);
    }

    const getTableData = (item) => {
        if (tableData.length !== 0) {
            props.data.forEach((i, index) => {
                setTableData(prevTableData => [...prevTableData, prevTableData[index][item] = i[item]])
            })
        }
        else {
            props.data.forEach((i, index) => {
                setTableData(prevTableData => [...prevTableData, { [item]: i[item] }])
            })
        }

    }

    const dragEndRight = (e, item, index) => {
        setRightPanelData(rightPanelData.filter((i, ind) => {
            return ind !== index
        }))
        setLeftPanelData([...leftPanelData, item])
        removeTableData(item)
    }

    const removeTableData = (item) => {
        if (tableData.length > 0) {
            if (tableData.length === 1) {
                tableData.forEach(i => {
                    delete i[[item]];
                })
            }
        }
    }

    return (
        <div className="dragAndDrop">
            <div className="leftPanel">
                {leftPanelData.map((item, index) => {
                    return (<div draggable
                        onDragEnd={(e) => handleDragEnd(e, item, index)} className="item">
                        {item}
                    </div>)
                })}
            </div>
            <div className="rightPanel">
                {rightPanelData.length > 0 ?
                    <Table>
                        <TableHead>
                            <TableRow>
                                {
                                    rightPanelData.map((item, index) => {
                                        return (
                                            <TableCell key={index}>
                                                <div key={index} draggable onDragEnd={(e) => dragEndRight(e, item, index)}>
                                                    {item}
                                                </div>
                                            </TableCell>
                                        )
                                    })
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                tableData.map((item, index) => {
                                    return (
                                        <TableRow key={index}>
                                            {
                                                rightPanelData.map(i => {
                                                    return (
                                                        <TableCell key={i}>
                                                            {item[i]}
                                                        </TableCell>
                                                    )
                                                })
                                            }
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table> :
                    <div>
                        Drag items here to display content
                    </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    };
};

export default connect(mapStateToProps, null)(DragAndDrop);
