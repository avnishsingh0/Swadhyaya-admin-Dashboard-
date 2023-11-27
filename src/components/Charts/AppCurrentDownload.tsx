// Third party
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { styled } from "@mui/material/styles";

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

interface AppCurrentDownloadProps {
  data: number[];
  options: ApexOptions;
}
export const AppCurrentDownload = ({
  data,
  options,
}: AppCurrentDownloadProps) => {
  return (
    <ChartWrapperStyle dir="ltr">
      <ReactApexChart
        type="donut"
        series={data}
        options={options}
        height={280}
      />
    </ChartWrapperStyle>
  );
};
