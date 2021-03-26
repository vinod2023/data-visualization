import React from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import ErrorText from './errorText';

function BarChat(props) {

    const data = {
        labels: Object.keys(props.products),
        datasets: [
            {
                label: 'Sales Data of products quantity',
                borderWidth: 1,
                borderColor: 'pink',
                backgroundColor: 'pink',
                data: Object.values(props.products)
            }
        ]
    };

    return (
        <>
            {Object.keys(props.products).length !== 0 ?
                <div className="lineChat">
                    <Bar
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

export default connect(mapStateToProps, null)(BarChat)
