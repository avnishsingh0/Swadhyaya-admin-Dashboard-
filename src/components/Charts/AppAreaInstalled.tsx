import { useState } from "react";

// Third party
import merge from "lodash/merge";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { Box, TextField } from "@mui/material";

// Interal imports
import { BaseOptionChart } from "./BaseOptionChart";
import "./Chart.scss";

const CHART_DATA = [
  {
    year: 2019,
    data: [
      { name: "Asia", data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
      { name: "America", data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
    ],
  },
  {
    year: 2020,
    data: [
      { name: "Asia", data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
      { name: "America", data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
    ],
  },
];

export const AppAreaInstalled = () => {
  const [seriesData, setSeriesData] = useState(2019);

  const handleChangeSeriesData = (event: { target: { value: any } }) => {
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
          {CHART_DATA.map((option) => (
            <option key={option.year} value={option.year}>
              {option.year}
            </option>
          ))}
        </TextField>
      </div>

      {CHART_DATA.map((item) => (
        <Box key={item.year} sx={{ mt: 3 }} dir="ltr">
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
