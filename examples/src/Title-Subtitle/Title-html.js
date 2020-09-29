import * as React from 'react';
import Muze, { Canvas, DataModel, Layer } from '@chartshq/react-muze/components';
import { Headers, html, POSITION, ALIGNMENT } from '@chartshq/react-muze/configurations';

const DATA_SRC = 'https://raw.githubusercontent.com/chartshq/datamodel-app-template/master/public/data/cars.json';
const SCHEMA_SRC =
  'https://raw.githubusercontent.com/chartshq/datamodel-app-template/master/public/data/cars-schema.json';

async function createDataModel() {
  const data = await fetch(DATA_SRC).then((d) => d.json());
  const schema = await fetch(SCHEMA_SRC).then((d) => d.json());
  const DataModelClass = await DataModel.onReady();
  const formattedData = await DataModelClass.loadData(data, schema);
  return new DataModelClass(formattedData);
}

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carsDm: null,
    };
  }

  componentDidMount() {
    createDataModel().then((carsDm) => this.setState({ carsDm }));
  }

  render() {
    const title = Headers.config()
      .html(html`<i>I am</i> title`)
      .position(POSITION.TOP)
      .align(ALIGNMENT.RIGHT)
      .create();

    const { carsDm } = this.state;

    return (
      <div>
        {carsDm && (
          <Muze data={carsDm}>
            <Canvas
              title={title}
              subtitle="Hello world"
              rows={['Acceleration']}
              columns={['Origin']}
              color="Origin"
            />
          </Muze>
        )}
      </div>
    );
  }
}

export default Title;
