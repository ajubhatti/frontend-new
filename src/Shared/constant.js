import {
  Broadcast,
  CreditCard,
  Droplet,
  HddNetwork,
  Lightbulb,
  Phone,
  Telephone,
  Tv,
} from "react-bootstrap-icons";

export const services = [
  {
    id: 1,
    title: "Mobile",
    subTitle: "Mobile recharge",
    amount: "1,903",
    icon: <Phone size={40} className="img-fluid" />,
  },
  {
    id: 2,
    title: "DTH",
    subTitle: "DTH Recharge",
    amount: "3,500",
    icon: <HddNetwork size={40} className="img-fluid" />,
  },
  {
    id: 3,
    title: "DataCard",
    subTitle: "DataCard Recharge",
    amount: "7,250",
    icon: <CreditCard size={40} className="img-fluid" />,
  },
  {
    id: 4,
    title: "LandLine",
    subTitle: "Landline Bill",
    amount: "2350",
    icon: <Telephone size={40} className="img-fluid" />,
  },
  {
    id: 5,
    title: "Broadband",
    subTitle: "Broadband Bill",
    amount: "1,903",
    icon: <Broadcast size={40} className="img-fluid" />,
  },
  {
    id: 6,
    title: "Electricity",
    subTitle: "Electricity Bill",
    amount: "3,500",
    icon: <Lightbulb size={40} className="img-fluid" />,
  },
  {
    id: 7,
    title: "Gas",
    subTitle: "Gas Bill",
    amount: "7,250",
    icon: <Droplet size={40} className="img-fluid" />,
  },
  {
    id: 8,
    title: "Cable",
    subTitle: "Cable Recharge",
    amount: "2350",
    icon: <Tv size={40} className="img-fluid" />,
  },
];

export const statusColor = [
  { status: "progress", colorName: "primary" },
  { status: "complete", colorName: "success" },
  { status: "pending", colorName: "warning" },
  { status: "cancel", colorName: "danger" },
];

export const columns = [
  {
    name: "index",
    selector: "id",
    sortable: false,
    Cell: (props) => <div>{props.page * 10 + props.index + 1}</div>,
  },
  {
    name: "Order",
    selector: "order",
    sortable: true,
    cell: (d) => (
      <div className="align-middle text-secondary font-weight-normal">
        #{d.order}
      </div>
    ),
  },
  {
    name: "Title",
    selector: "title",
    sortable: true,
    cell: (d) => (
      <div className="align-middle">
        <span>{d.title}</span>
      </div>
    ),
  },
  {
    name: "Amount",
    selector: "amount",
    sortable: true,
    cell: (d) => <div className="align-middle text-primary">${d.amount}</div>,
  },
  {
    name: "Date",
    selector: "date",
    sortable: true,
    cell: (d) => <div className="align-middle text-secondary">{d.date}</div>,
  },
  {
    name: "Status",
    selector: "status",
    sortable: true,
    cell: (d) => (
      <div
        className={`align-middle text-${
          d.status === "completed"
            ? "success"
            : d.status === "pending"
            ? "warning"
            : "danger"
        }`}
      >
        {d.status}
      </div>
    ),
  },
];

export const data = [
  {
    id: 1,
    order: 123,
    title: "Mobile recharge",
    amount: 123,
    date: "2-3-2022",
    status: "completed",
  },
  {
    id: 2,
    order: 123,
    title: "DTH Recharge",
    amount: 123,
    date: "2-3-2022",
    status: "pending",
  },
  {
    id: 3,
    order: 123,
    title: "DataCard Recharge",
    amount: 123,
    date: "2-3-2022",
    status: "	Rejected",
  },
  {
    id: 4,
    order: 123,
    title: "Landline Bill",
    amount: 123,
    date: "2-3-2022",
    status: "completed",
  },
  {
    id: 5,
    order: 123,
    title: "Broadband Bill",
    amount: 123,
    date: "2-3-2022",
    status: "completed",
  },
  {
    id: 6,
    order: 123,
    title: "Electricity Bill",
    amount: 123,
    date: "2-3-2022",
    status: "	Rejected",
  },
  {
    id: 7,
    order: 123,
    title: "Gas Bill",
    amount: 123,
    date: "2-3-2022",
    status: "completed",
  },
  {
    id: 8,
    order: 123,
    title: "Cable Recharge",
    amount: 123,
    date: "2-3-2022",
    status: "pending",
  },
  {
    id: 9,
    order: 123,
    title: "Mobile recharge",
    amount: 123,
    date: "2-3-2022",
    status: "completed",
  },
  {
    id: 10,
    order: 123,
    title: "DTH Recharge",
    amount: 123,
    date: "2-3-2022",
    status: "pending",
  },
  {
    id: 11,
    order: 123,
    title: "DataCard Recharge",
    amount: 123,
    date: "2-3-2022",
    status: "	Rejected",
  },
  {
    id: 12,
    order: 123,
    title: "Landline Bill",
    amount: 123,
    date: "2-3-2022",
    status: "completed",
  },
  {
    id: 13,
    order: 123,
    title: "Broadband Bill",
    amount: 123,
    date: "2-3-2022",
    status: "completed",
  },
  {
    id: 14,
    order: 123,
    title: "Electricity Bill",
    amount: 123,
    date: "2-3-2022",
    status: "	Rejected",
  },
  {
    id: 15,
    order: 123,
    title: "Gas Bill",
    amount: 123,
    date: "2-3-2022",
    status: "completed",
  },
  {
    id: 16,
    order: 123,
    title: "Cable Recharge",
    amount: 123,
    date: "2-3-2022",
    status: "pending",
  },
];

export const TransactionActivity = [
  {
    id: 1,
    title: "Mobile Recharge",
    description: "Vi recharge",
    amount: "499",
    time: "30 min",
    status: "progress",
  },
  {
    id: 2,
    title: "DTH Recharge",
    description: "Sun recharge",
    amount: "720",
    time: "40 min",
    status: "complete",
  },
  {
    id: 3,
    title: "DataCard Recharge",
    description: "Artel recharge",
    amount: "7500",
    time: "42 min",
    status: "pending",
  },
  {
    id: 4,
    title: "Landline Bill",
    description: "Artel recharge",
    amount: "270",
    time: "1 hr",
    status: "cancel",
  },
];

export const stateData = [
  {
    key: "GJ",
    name: "Gujarat",
  },
  {
    key: "AN",
    name: "Andaman and Nicobar Islands",
  },
  {
    key: "AP",
    name: "Andhra Pradesh",
  },
  {
    key: "AR",
    name: "Arunachal Pradesh",
  },
  {
    key: "AS",
    name: "Assam",
  },
  {
    key: "BR",
    name: "Bihar",
  },
  {
    key: "CG",
    name: "Chandigarh",
  },
  {
    key: "CH",
    name: "Chhattisgarh",
  },
  {
    key: "DH",
    name: "Dadra and Nagar Haveli",
  },
  {
    key: "DD",
    name: "Daman and Diu",
  },
  {
    key: "DL",
    name: "Delhi",
  },
  {
    key: "GA",
    name: "Goa",
  },
  {
    key: "HR",
    name: "Haryana",
  },
  {
    key: "HP",
    name: "Himachal Pradesh",
  },
  {
    key: "JK",
    name: "Jammu and Kashmir",
  },
  {
    key: "JH",
    name: "Jharkhand",
  },
  {
    key: "KA",
    name: "Karnataka",
  },
  {
    key: "KL",
    name: "Kerala",
  },
  {
    key: "LD",
    name: "Lakshadweep",
  },
  {
    key: "MP",
    name: "Madhya Pradesh",
  },
  {
    key: "MH",
    name: "Maharashtra",
  },
  {
    key: "MN",
    name: "Manipur",
  },
  {
    key: "ML",
    name: "Meghalaya",
  },
  {
    key: "MZ",
    name: "Mizoram",
  },
  {
    key: "NL",
    name: "Nagaland",
  },
  {
    key: "OR",
    name: "Odisha",
  },
  {
    key: "PY",
    name: "Puducherry",
  },
  {
    key: "PB",
    name: "Punjab",
  },
  {
    key: "RJ",
    name: "Rajasthan",
  },
  {
    key: "SK",
    name: "Sikkim",
  },
  {
    key: "TN",
    name: "Tamil Nadu",
  },
  {
    key: "TS",
    name: "Telangana",
  },
  {
    key: "TR",
    name: "Tripura",
  },
  {
    key: "UK",
    name: "Uttar Pradesh",
  },
  {
    key: "UP",
    name: "Uttarakhand",
  },
  {
    key: "WB",
    name: "West Bengal",
  },
];
