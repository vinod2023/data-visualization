export const dataSet = (products) => {
    return {
        labels: Object.keys(products),
        datasets: [
            {
                label: 'Sales Data of products quantity',
                borderColor: 'cyan',
                pointBorderColor: 'blue',
                pointRadius: 1,
                data: Object.values(products)
            }
        ]
    }

}