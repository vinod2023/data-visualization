import React from 'react';
import {Box} from '@material-ui/core';
import Form from './form';
import {Route, Switch} from 'react-router-dom';
import TableData from './table';
import LineChat from './lineChat';
import BarChat from './barChat';
import DoughnutChat from './doughnutChat';

function MainPage() {
    return (
        <Box>
            <Switch>
                <Route path="/" component={Form} exact />
                <Route path="/table" component={TableData} />
                <Route path="/linechat" component={LineChat} />
                <Route path="/barchat" component={BarChat} />
                <Route path="/doughnut" component={DoughnutChat} />
            </Switch>
        </Box>
    )
}

export default MainPage
