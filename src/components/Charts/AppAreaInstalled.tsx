import { useState } from "react";

// Third party
import merge from "lodash/merge";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { Box, TextField } from "@mui/material";

// Interal imports
import { BaseOptionChart } from "./BaseOptionChart";
import "./Chart.scss";

interface ChartDataItem {
  year: number;
  data: { name: string; data: number[] }[];
}

interface AppAreaInstalledProps {
  chartData: ChartDataItem[];
  defaultSeries: number;
}

export const AppAreaInstalled = ({
  chartData,
  defaultSeries,
}: AppAreaInstalledProps) => {
  const [seriesData, setSeriesData] = useState(defaultSeries);

  const handleChangeSeriesData = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSeriesData(Number(event.target.value));
  };

  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "bottom" as const,
    },
  } as ApexOptions);

  return (
    <div>
      <div className="card-header-container">
        <div className="card-top-header">
          <span className="header">Area Installed</span>
          <span className="sub-header">(+43%) than last year</span>
        </div>
        <TextField
          select
          fullWidth
          value={seriesData}
          SelectProps={{ native: true }}
          onChange={handleChangeSeriesData}
          className="text-field"
          sx={{
            "& fieldset": { border: "0 !important" },
            "& select": {
              pl: 1,
              py: 0.5,
              pr: "24px !important",
              typography: "subtitle2",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: 0.75,
              bgcolor: "background.neutral",
            },
            "& .MuiNativeSelect-icon": {
              top: 4,
              right: 0,
              width: 20,
              height: 20,
            },
          }}
        >
          {chartData.map((option) => (
            <option key={option.year} value={option.year}>
              {option.year}
            </option>
          ))}
        </TextField>
      </div>

      {chartData.map((item) => (
        <Box key={item.year} sx={{ mt: 3 }} >
          {item.year === seriesData && (
            <ReactApexChart
              type="line"
              series={item.data}
              options={chartOptions}
              height={364}
            />
          )}
        </Box>
      ))}
    </div>
  );
};
