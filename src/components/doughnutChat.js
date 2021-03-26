import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import ErrorText from './errorText';

function DoughnutChat(props) {

    const data = {
        labels: Object.keys(props.products),
        datasets: [
            {
                data: Object.values(props.products),
                backgroundColor: [
                    'red',
                    'blue',
                    'black',
                    'pink',
                    'green',
                    'cyan',
                    'orange',
                    'violet'
                ]
            }
        ]
    };

    return (
        <>
            {Object.keys(props.products).length !== 0 ?
                <div className="lineChat">
                    <h3>Sales Data of products quantity</h3>
                    <Doughnut
                        data={data}
                    />
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

export default connect(mapStateToProps, null)(DoughnutChat)
