import merge from "lodash/merge";
import ReactApexChart from "react-apexcharts";

// @mui
import { useTheme, styled } from "@mui/material/styles";
import { Card, CardHeader } from "@mui/material";
import { BaseOptionChart } from "../chart";
import { fNumber } from "../../utils/formatNumber";
import { ApexOptions } from "apexcharts";

// utils
const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled("div")(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  "& .apexcharts-canvas svg": { height: CHART_HEIGHT },
  "& .apexcharts-canvas svg,.apexcharts-canvas foreignObject": {
    overflow: "visible",
  },
  "& .apexcharts-legend": {
    height: LEGEND_HEIGHT,
    alignContent: "center",
    position: "relative !important",
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------

const CHART_DATA = [12244, 53345, 44313, 78343];

export const AppCurrentDownload = () => {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.primary.light,
      theme.palette.primary.light,
      theme.palette.primary.main,
      theme.palette.primary.dark,
    ],
    labels: ["Mac", "Window", "iOS", "Android"],
    stroke: { colors: [theme.palette.background.paper] },
    legend: { 
     
      horizontalAlign: "center",
      floating: true,
      },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName: string | number) => fNumber(seriesName),
        title: {
          formatter: (seriesName: any) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "90%",
          labels: {
            value: {
              formatter: (val: string | number) => fNumber(val),
            },
            total: {
              formatter: (w: { globals: { seriesTotals: any[] } }) => {
                const sum = w.globals.seriesTotals.reduce(
                  (a: any, b: any) => a + b,
                  0
                );
                return fNumber(sum);
              },
            },
          },
        },
      },
    },
  })as ApexOptions;;

  return (
    <Card>
      <CardHeader title="Current Download" />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart
          type="donut"
          series={CHART_DATA}
          options={chartOptions}
          height={280}
        />
      </ChartWrapperStyle>
    </Card>
  );
};
