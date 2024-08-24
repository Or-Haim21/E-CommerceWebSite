import React from 'react';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    TableContainer,
    Link,
    Typography
} from '@mui/material';

const TableComp = ({ headers, data, columnsTypes }) => {

    const renderCellContent = (type, content) => {
        switch (type) {
            case 'string':
                return <Typography variant="body2">{content}</Typography>;
            case 'number':
                return <Typography variant="body2">{content}</Typography>;
            case 'link':
                return <Link href={content.href} underline="hover">{content.text}</Link>;
            case 'component':
                return content; 
            default:
                return <Typography variant="body2">{content}</Typography>;
        }
    };

    return (
        <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
            <Table aria-label="modern styled table">
                <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableRow>
                        {headers.map((header, index) => (
                            <TableCell key={index} sx={{ fontWeight: 'bold', color: '#333' }}>
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow 
                            key={rowIndex} 
                            sx={{
                                '&:nth-of-type(even)': { backgroundColor: '#f9f9f9' },
                                '&:hover': { backgroundColor: '#ebf5fb' },
                                cursor: 'pointer',
                            }}
                        >
                            {row.map((cell, cellIndex) => (
                                <TableCell key={cellIndex} sx={{ padding: '10px 15px' }}>
                                    {renderCellContent(columnsTypes[cellIndex], cell)}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComp;
