import React from 'react'
import { connect } from 'react-redux'
import { LearningData } from './LearningData'
import { history } from '../routers/AppRouter'
import selectorData from '../selector/data'
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Paper
} 
from '@material-ui/core'

class LearningList extends React.Component {  
    state = {
        page: 0, 
        rowsPerPage: 5
    }

    handleChangePage = (e, page) => {
        this.setState(() => ({ page }))
    }
    
    handleChangeRowsPerPage = (e) => {
        this.setState(() => ({ rowsPerPage: +e.target.value }))
        this.setState(() => ({ page: 0 }))
    }

    getLearningList = (dataList) => {
        const { page, rowsPerPage } = this.state
        return dataList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((data) => {
                                        return <LearningData key={data.id} data={data} />  
                                    }) 
    }
    
    render(){
        const { page, rowsPerPage } = this.state
        return(
            <Paper>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><span className="table__column__title">学習日</span></TableCell>
                                <TableCell><span className="table__column__title">プログラミング言語</span></TableCell>
                                <TableCell><span className="table__column__title">メモ</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.getLearningList(this.props.dataList)}
                        </TableBody>

                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20, 30, 50]}
                    component="div"
                    count={this.props.dataList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    labelRowsPerPage="１度表示するデータ数"
                />
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    dataList: selectorData(state.data, state.filters)
})

export default connect(mapStateToProps)(LearningList)
