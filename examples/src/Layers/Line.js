import * as React from 'react';
import Muze, { Canvas, Layer, DataModel } from '@chartshq/react-muze/components';

const { DataModel } = Muze;

const createDataModel = async (dataUrl, schemaUrl) => {
    const data = await fetch(dataUrl).then((d) => d.json());
    const schema = await fetch(schemaUrl).then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
};

class Line extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsDm: null,
        };
    }

    componentDidMount() {
        createDataModel(
            'https://raw.githubusercontent.com/chartshq/datamodel-app-template/master/public/data/cars.json',
            'https://raw.githubusercontent.com/chartshq/datamodel-app-template/master/public/data/cars-schema.json'
        )
            .then(dm => this.setState({ carsDm: dm }));
    }

    render() {
        const { carsDm } = this.state;

        return (
            <div>
                {carsDm && (
                    <Muze data={carsDm}>
                        <Canvas rows={['Acceleration']} columns={['Year']} color="Origin">
                            <Layer mark="line" />
                        </Canvas>
                    </Muze>
                )}
            </div>
        )
    }
}

export default Line;
