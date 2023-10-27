import { PieChart } from 'react-native-svg-charts'
import { styles } from "./styles";
import * as constants from "../../constants";


export default function PieChartComponent({ data }) {

    const pieData = data.map((item, index) => ({ key: index,
                                                 value: item,
                                                 svg: { fill: constants.colours[index] },
                                                 arc: { cornerRadius: 12 } }));

    return (

        <PieChart style={styles.chart}
                  data={pieData}
                  padAngle={0.08}
                //   padAngle={0.05}
                  innerRadius={60}
                  outerRadius={150}
                  sort={(first, second) => second.key - first.key} />

    );

}