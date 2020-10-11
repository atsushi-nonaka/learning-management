import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { 
    TableCell,
    TableRow
} 
from '@material-ui/core'

export const LearningData = (props) => (
    <TableRow hover={true} onClick={props.handleClick}>
        <TableCell className="date">
            <Link className="link__to__edit" to={`/edit/${props.data.id}`}>
                {moment(props.data.date).format('ll')}
            </Link>
        </TableCell>
        <TableCell className="language">
            <Link className="link__to__edit" to={`/edit/${props.data.id}`}>
                {props.data.language}
            </Link>
        </TableCell>
        <TableCell className="note">
            <Link className="link__to__edit" to={`/edit/${props.data.id}`}>
                {props.data.note}
            </Link>
        </TableCell>
    </TableRow>
)