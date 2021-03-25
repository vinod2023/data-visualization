import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { dataSet } from './dataSet';
import ErrorText from './errorText';

function LineChat(props) {

    const data = {
        labels: Object.keys(props.products),
        datasets: [
            {
                label: 'Sales Data of products quantity',
                borderColor: 'cyan',
                pointBorderColor: 'blue',
                pointRadius: 1,
                data: Object.values(props.products)
            }
        ]
    };

    return (
        <>
            {Object.keys(props.products).length !== 0 ?
                <div className="lineChat">
                    <Line data={data} />
                </div>
                :
                <ErrorText />
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    };
};

export default connect(mapStateToProps, null)(LineChat)
