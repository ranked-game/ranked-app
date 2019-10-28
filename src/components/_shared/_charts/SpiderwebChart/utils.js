import { isEmpty } from 'lodash';

const lineColors = ['#fead0f', '#179bdb'];

export const createSeries = (data) => {
    // returning mock if no data was provided
    if (isEmpty(data))
        return [
            {
                name: '',
                data: Array(6).fill(0),
                color: '#179bdb',
                pointPlacement: 'on',
                fillOpacity: 0.25,
            },
        ];

    return Object.entries(data).map((item, index) => ({
        name: item[0],
        data: item[1],
        color: lineColors[index],
        pointPlacement: 'on',
        fillOpacity: 0.25,
    }));
};
