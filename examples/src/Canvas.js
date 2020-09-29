import * as React from 'react';
import Muze, { Canvas, DataModel } from '@chartshq/react-muze/components';

const createDataModel = async (dataUrl, schemaUrl) => {
    const data = await fetch(dataUrl).then((d) => d.json());
    const schema = await fetch(schemaUrl).then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
};

class CanvasExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dm: null,
        };
    }

    componentDidMount() {
        createDataModel(
            'https://raw.githubusercontent.com/chartshq/datamodel-app-template/master/public/data/cars.json',
            'https://raw.githubusercontent.com/chartshq/datamodel-app-template/master/public/data/cars-schema.json'
        )
            .then(dm => this.setState({ dm }));
    }

    render() {
        const { dm } = this.state;
        return (
            <div>
                {dm && (
                    <Muze data={dm}>
                        <Canvas rows={['Acceleration']} columns={['Year']} />
                        <Canvas rows={['Acceleration']} columns={['Cylinders']} color="Origin" />
                    </Muze>
                )}
            </div>
        )
    }
}

export default CanvasExample;