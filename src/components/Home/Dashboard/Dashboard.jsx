import { Chart } from 'primereact/chart';
import { useState, useEffect } from "react"; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrivePatientsPerDay, fetchDrivesPerYear, fetchPatientsPerYear } from '../../../store/features/home/dashboardSlice';

import styles from "./Dashboard.module.scss";

const api_data = (variable, documentStyle) => {
    var data_formatted = [];
    for (var temp of variable) {
        temp = {
            labels: temp["key"],
        datasets: [
                    {
                        label: temp["name"],
                        barPercentage: 0.5,
                        barThickness: 20,
                        maxBarThickness: 50,
                        minBarLength: 20,
                        backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                        borderColor: documentStyle.getPropertyValue('--blue-500'),
                        data: temp["value"]
                    }
                ]
            }
        data_formatted.push(temp)
    }
    return data_formatted
}

const documentStyle = getComputedStyle(document.documentElement);
const textColor = documentStyle.getPropertyValue('--text-color');
const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

const options = {
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                fontColor: textColor
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: textColorSecondary,
                font: {
                    weight: 500
                }
            },
            grid: {
                display: false,
                drawBorder: false
            }
        },
        y: {
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        }
    }
};

const Dashboard = () => {

    const orgDrivePerYr = useSelector(state => state.dashboard.orgDrivePerYr);
    const orgPatientPerYr = useSelector(state => state.dashboard.orgPatientPerYr);
    const orgDrivePatientPerDay = useSelector(state => state.dashboard.orgDrivePatientPerDay);

    const [chartData, setChartData] = useState([]);
    const [chartOptions, setChartOptions] = useState(options);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDrivesPerYear({
            "org_id": 1
          }));
        dispatch(fetchPatientsPerYear({
            "org_id": 1
          }));
        dispatch(fetchDrivePatientsPerDay({
            "drive_id": 1
          }));
    }, []);

    useEffect(() => {
        let data = [
            orgDrivePerYr,
            orgPatientPerYr,
            orgDrivePatientPerDay
        ];

        let formatted_data = api_data(data, documentStyle);
        setChartData(formatted_data);

    }, [orgDrivePerYr, orgPatientPerYr, orgDrivePatientPerDay]);

    return (
        <div className={styles.chartContainer}>
            {chartData.map((item, idx) => (<div className={styles.card} key={idx}>
                <Chart type="bar"  data={item} options={chartOptions} />
            </div>))}
        </div>
    );
}

export default Dashboard;