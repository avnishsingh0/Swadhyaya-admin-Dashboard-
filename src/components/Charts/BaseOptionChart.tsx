// Third party
import { useTheme } from "@mui/material/styles";

export const BaseOptionChart = () => {
  const theme = useTheme();

  const LABEL_TOTAL = {
    show: true,
    label: "Total",
    color: "#8895a0",
    fontWeight: "500",
  };

  const LABEL_VALUE = {
    offsetY: 8,
    color: "#212b36",
    fontSize: "20px",
    fontWeight: "bold",
  };

  return {
    colors: ["#ff2f30", "#ffc006", "#00b8d9", "#ff5530"],
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: { enabled: true },
      foreColor: theme.palette.text.disabled,
      fontFamily: theme.typography.fontFamily,
    },
    states: {
      hover: {
        filter: {
          type: "lighten",
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: "darken",
          value: 0.88,
        },
      },
    },
    fill: {
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 3,
      curve: "smooth",
      lineCap: "round",
    },
    grid: {
      strokeDashArray: 3,
      borderColor: theme.palette.divider,
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    markers: {
      size: 0,
      strokeColors: theme.palette.background.paper,
    },
    tooltip: {
      x: {
        show: false,
      },
    },
    legend: {
      show: true,
      fontSize: "14px",
      position: "bottom",
      horizontalAlign: "center",
      markers: { radius: 2 },
      fontWeight: 400,
      itemMargin: { horizontal: 8 },
      labels: { colors: theme.palette.text.primary },
    },
    plotOptions: {
      bar: {
        columnWidth: "28%",
        borderRadius: 4,
      },
      pie: {
        donut: {
          labels: {
            show: true,
            value: LABEL_VALUE,
            total: LABEL_TOTAL,
          },
        },
      },
      radialBar: {
        track: {
          strokeWidth: "100%",
          background: theme.palette.grey[500],
        },
        dataLabels: {
          value: LABEL_VALUE,
          total: LABEL_TOTAL,
        },
      },
      radar: {
        polygons: {
          fill: { colors: ["transparent"] },
          strokeColors: theme.palette.divider,
          connectorColors: theme.palette.divider,
        },
      },
      polarArea: {
        rings: {
          strokeColor: theme.palette.divider,
        },
        spokes: {
          connectorColors: theme.palette.divider,
        },
      },
    },
    responsive: [
      {
        // sm
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: { bar: { columnWidth: "40%" } },
        },
      },
      {
        // md
        breakpoint: theme.breakpoints.values.md,
        options: {
          plotOptions: { bar: { columnWidth: "32%" } },
        },
      },
    ],
  };
};
