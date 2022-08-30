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
  { key: "GJ", name: "Gujarat" },
  { key: "AN", name: "Andaman and Nicobar Islands" },
  { key: "AP", name: "Andhra Pradesh" },
  { key: "AR", name: "Arunachal Pradesh" },
  { key: "AS", name: "Assam" },
  { key: "BR", name: "Bihar" },
  { key: "CG", name: "Chandigarh" },
  { key: "CH", name: "Chhattisgarh" },
  { key: "DH", name: "Dadra and Nagar Haveli" },
  { key: "DD", name: "Daman and Diu" },
  { key: "DL", name: "Delhi" },
  { key: "GA", name: "Goa" },
  { key: "HR", name: "Haryana" },
  { key: "HP", name: "Himachal Pradesh" },
  { key: "JK", name: "Jammu and Kashmir" },
  { key: "JH", name: "Jharkhand" },
  { key: "KA", name: "Karnataka" },
  { key: "KL", name: "Kerala" },
  { key: "LD", name: "Lakshadweep" },
  { key: "MP", name: "Madhya Pradesh" },
  { key: "MH", name: "Maharashtra" },
  { key: "MN", name: "Manipur" },
  { key: "ML", name: "Meghalaya" },
  { key: "MZ", name: "Mizoram" },
  { key: "NL", name: "Nagaland" },
  { key: "OR", name: "Odisha" },
  { key: "PY", name: "Puducherry" },
  { key: "PB", name: "Punjab" },
  { key: "RJ", name: "Rajasthan" },
  { key: "SK", name: "Sikkim" },
  { key: "TN", name: "Tamil Nadu" },
  { key: "TS", name: "Telangana" },
  { key: "TR", name: "Tripura" },
  { key: "UK", name: "Uttar Pradesh" },
  { key: "UP", name: "Uttarakhand" },
  { key: "WB", name: "West Bengal" },
];

export const stateLsit = [
  { id: 1, stateName: "Andhra Pradesh Telangana" },
  { id: 2, stateName: "Assam" },
  { id: 3, stateName: "Bihar Jharkhand" },
  { id: 4, stateName: "Chennai" },
  { id: 5, stateName: "Delhi NCR" },
  { id: 6, stateName: "Gujarat" },
  { id: 7, stateName: "Haryana" },
  { id: 8, stateName: "Himachal Pradesh" },
  { id: 9, stateName: "Jammu Kashmir" },
  { id: 10, stateName: "Karnataka" },
  { id: 11, stateName: "Kerala" },
  { id: 12, stateName: "Kolkata" },
  { id: 13, stateName: "Madhya Pradesh Chhattisgarh" },
  { id: 14, stateName: "Maharashtra Goa" },
  { id: 15, stateName: "Mumbai" },
  { id: 16, stateName: "North East" },
  { id: 17, stateName: "Orissa" },
  { id: 18, stateName: "Punjab" },
  { id: 19, stateName: "Rajasthan" },
  { id: 20, stateName: "Tamil Nadu" },
  { id: 21, stateName: "UP East" },
  { id: 22, stateName: "UP West" },
  { id: 23, stateName: "West Bengal" },
];

export const mplanDthOperatorList = [
  { id: "Airtel Digital TV", operator: "Airteldth" },
  { id: "Tata Sky", operator: "TataSky" },
  { id: "Videocon", operator: "Videocon" },
  { id: "Sun Direct", operator: "Sundirect" },
  { id: "Dish TV", operator: "Dishtv" },
];

export const mplanMobileOperatorList = [
  { id: "Airtel", operator: "Airtel" },
  { id: "Reliance Jio", operator: "Jio" },
  { id: "Vodafone", operator: "Vodafone" },
  { id: "Idea", operator: "Idea" },
  { id: "BSNL - Special Tariff", operator: "BSNL" },
  { id: "Vi", operator: "Vi" },
];

export const mplanElectricityList = [
  { id: "Paschim Gujarat Vij Company Limited", operator: "PGVCL" },
  { id: "Dakshin Gujarat Vij Company Limited", operator: "DGVCL" },
  { id: "Uttar Gujarat Vij Company Limited", operator: "UGVCL" },
  { id: "Madhya Gujarat Vij Company Limited", operator: "MGVCL" },
  { id: "Torrent Power Ltd- Surat", operator: "TORRENTSURAT" },
  { id: "	Torrent Power- Ahmedabad", operator: "TORRENTAHME" },
];

export const mplanGasProvider = [
  { id: "ADGL", operator: "Adani Gas" },
  { id: "AVGL", operator: "Avantika Gas" },
  { id: "CUGL", operator: "Centerl UP Gas" },
  { id: "CHGL", operator: "Charoter Gas" },
  { id: "GJGL", operator: "Gujarat Gas" },
  { id: "HCGL", operator: "Haryana City Gas" },
  { id: "IOGL", operator: "Indian Oil Gas" },
  { id: "IPGL", operator: "Indraprashtha Gas" },
  { id: "MHGL", operator: "Mahanagar GAs" },
  { id: "MNGL", operator: "Maharastra Natural Gas" },
  { id: "SBGL", operator: "Sabarmati Gas UP" },
  { id: "SIGL", operator: "Siti Gas UP" },
  { id: "TNGL", operator: "Tripura Natural Gas" },
  { id: "UCPG", operator: "Unique Central Piped Gas" },
  { id: "VDGL", operator: "Vadodara Gas" },
];

export const mplanInsuranceProvider = [
  {
    id: "Life Insurance Corporation of India",
    mplanId: "LICOF",
    oeprator: "Life Insurance Corporation of India",
  },
  {
    id: "Aditya Birla Sun Life Insurance",
    mplanId: "ABSL",
    oeprator: "Aditya Birla Sun Life Insurance",
  },
  { id: "Aviva Life", mplanId: "AVLI", oeprator: "Aviva Life" },
  {
    id: "Bajaj Allianz Life Insurance Company Limited",
    mplanId: "BALI",
    oeprator: "Bajaj Allianz Life Insurance",
  },
  {
    id: "Bharti AXA Life Insurance",
    mplanId: "AXLI",
    oeprator: "Bharti AXA Life Insurance",
  },
  {
    id: "Canara HSBC OBC Life Insurance",
    mplanId: "CHOL",
    oeprator: "Canara HSBC OBC Life Insurance",
  },
  {
    id: "Edelweiss Tokio Life Insurance",
    mplanId: "ETLI",
    oeprator: "Edelweiss Tokio Life Insurance",
  },
  {
    id: "Exide Life Insurance",
    mplanId: "EXLI",
    oeprator: "Exide Life Insurance",
  },
  {
    id: "Future Generali India Life Insurance Company Limited",
    mplanId: "FGIL",
    oeprator: "Future Generali India Life Insurance Company Limited",
  },
  {
    id: "	HDFC Life Insurance Co. Ltd.",
    mplanId: "HDFC",
    oeprator: "HDFC Life Insurance",
  },
  {
    id: "ICICI Prudential Life Insurance",
    mplanId: "ICIC",
    oeprator: "ICICI Prudential Life Insurance",
  },
  {
    id: "IDBI Federal Life Insurance",
    mplanId: "IDBI",
    oeprator: "IDBI Federal Life Insurance",
  },
  {
    id: "IndiaFirst Life Insurance",
    mplanId: "IFLI",
    oeprator: "IndiaFirst Life Insurance",
  },
  { id: "Max Life Insurance", mplanId: "MAXL", oeprator: "Max Life Insurance" },
  {
    id: "PNB MetLife Insurance",
    mplanId: "PNBM",
    oeprator: "PNB MetLife Insurance",
  },
  {
    id: "Pramerica Life Insurance Limited",
    mplanId: "PRLI",
    oeprator: "Pramerica Life Insurance",
  },
  {
    id: "Reliance Nippon Life Insurance",
    mplanId: "RNLI",
    oeprator: "Reliance Nippon Life Insurance",
  },
  { id: "SBI Life Insurance", mplanId: "SBIL", oeprator: "SBI Life Insurance" },
  {
    id: "	Shriram Life Insurance Co Ltd",
    mplanId: "SLIC",
    oeprator: "Shriram Life Insurance Co Ltd",
  },
  {
    id: "Star Union Dai Ichi Life Insurance",
    mplanId: "SUDI",
    oeprator: "Star Union Dai Ichi Life Insurance",
  },
  {
    id: "TATA AIA Life Insurance",
    mplanId: "TALI",
    oeprator: "Tata AIA Life Insurance",
  },
];

export const mplanWaterProvider = [
  { mplanId: "AMCW", operator: "Ahmedabad Municipal Corporation" },
  { mplanId: "BWSS", operator: "Bangalore Water Supply and Sewerage Board" },
  { mplanId: "BMCW", operator: "Bhopal Municipal Corporation - Water" },
  { mplanId: "DDAW", operator: "Delhi Development Authority (DDA) - Water" },
  { mplanId: "DJBW", operator: "Delhi Jal Board" },
  {
    mplanId: "DPHE",
    operator: "Department of Public Health Engineering-Water, Mizoram",
  },
  {
    mplanId: "GWMC",
    operator: "Greater Warangal Municipal Corporation - Water",
  },
  { mplanId: "GMCW", operator: "Gwalior Municipal Corporation - Water" },
  {
    mplanId: "HMWS",
    operator: "Hyderabad Metropolitan Water Supply and Sewerage Board",
  },
  { mplanId: "IMCW", operator: "Indore Municipal Corporation - Water" },
  { mplanId: "JMCW", operator: "Jabalpur Municipal Corporation - Water" },
  { mplanId: "MCJW", operator: "Municipal Corporation Jalandhar" },
  { mplanId: "MCLW", operator: "Municipal Corporation Ludhiana - Water" },
  { mplanId: "MCAW", operator: "Municipal Corporation of Amritsar" },
  { mplanId: "MCGW", operator: "Municipal Corporation of Gurugram" },
  { mplanId: "MCCW", operator: "Mysuru City Corporation" },
  { mplanId: "NDMC", operator: "New Delhi Municipal Council (NDMC) - Water" },
  { mplanId: "PCMC", operator: "Pimpri Chinchwad Municipal Corporation(PCMC)" },
  { mplanId: "PMCW", operator: "Pune Municipal Corporation - Water" },
  { mplanId: "RMCW", operator: "Ranchi Municipal Corporation" },
  { mplanId: "SMCW", operator: "Silvassa Municipal Council" },
  { mplanId: "SGMC", operator: "Surat Municipal Corporation - Water" },
  { mplanId: "UNNW", operator: "Ujjain Nagar Nigam - PHED" },
  { mplanId: "UIBW", operator: "Urban Improvement Trust (UIT) - Bhiwadi" },
  {
    mplanId: "UIBO",
    operator: "Urban Improvement Trust (UIT) - Bhiwadi - Old",
  },
  { mplanId: "UJSW", operator: "Uttarakhand Jal Sansthan" },
  { mplanId: "PHED", operator: "Rajasthan - Water Bill" },
];

export const mplanElectricityProvider = [
  {
    mplanId: "APSPDCL",
    oeprator: "Southern Power Distribution Company of A.P Ltd.",
    state: "Andhra Pradesh",
  },
  {
    mplanId: "APEPDCL",
    oeprator: "Eastern Power Distribution Company of Andhra Pradesh Ltd",
    state: "Andhra Pradesh",
  },
  {
    mplanId: "APCPDCL",
    oeprator: "Central Power Distribution Company of Andhra Pradesh Ltd",
    state: "Andhra Pradesh",
  },
  {
    mplanId: "ARPDOP",
    oeprator: "Department of Power",
    state: "Arunachal Pradesh",
  },
  {
    mplanId: "NRAPDR",
    oeprator: "Assam Power Distribution Company Ltd (NON-RAPDR)",
    state: "Asham",
  },
  {
    mplanId: "RAPDR",
    oeprator: "Assam Power Distribution Company Ltd (RAPDR)",
    state: "Asham",
  },
  {
    mplanId: "NBPDCL",
    oeprator: "North Bihar Power Distribution",
    state: "Bihar",
  },
  {
    mplanId: "SBPDCL",
    oeprator: "South Bihar Power Distribution",
    state: "Bihar",
  },
  { mplanId: "CEDC", oeprator: "Department Chandigarh", state: "Chandigarh" },
  {
    mplanId: "CSPDCL",
    oeprator: "Chhattisgarh State Power Distribution Company Ltd. (CSPDCL)",
    state: "Chhattisgarh",
  },
  {
    mplanId: "DNHPDCL",
    oeprator: "DNH Power Distribution Company Limited",
    state: "Dadra And nagar haveli",
  },

  {
    mplanId: "DNDE",
    oeprator: "Daman and Diu Electricity",
    state: "Daman & diu",
  },

  { mplanId: "GOAELC", oeprator: "Goa Electricity", state: "Goa" },

  {
    mplanId: "PGVCL",
    oeprator: "Paschim Gujarat Vij Company Ltd",
    state: "Gujarat",
  },
  {
    mplanId: "DGVCL",
    oeprator: "Dakshin Gujarat Vij Company Ltd",
    state: "Gujarat",
  },
  {
    mplanId: "UGVCL",
    oeprator: "UttarGujarat Vij Company Ltd",
    state: "Gujarat",
  },
  {
    mplanId: "MGVCL",
    oeprator: "Madhya Gujarat Vij Company Ltd",
    state: "Gujarat",
  },
  {
    mplanId: "TORRENTSURAT",
    oeprator: "Torrent Power Surat",
    state: "Gujarat",
  },
  {
    mplanId: "TORRENTAHME",
    oeprator: "Torrent Power Ahemdabad",
    state: "Gujarat",
  },
  { mplanId: "GPCL", oeprator: "Gift Power Company Limited", state: "Gujarat" },

  {
    mplanId: "UHBVN",
    oeprator: "Uttar Haryana Bijli Vitran Nigam",
    state: "Haryana",
  },
  {
    mplanId: "DHBVN",
    oeprator: "Dakshin Haryana Bijli Vitran Nigam",
    state: "Haryana",
  },

  {
    mplanId: "HPSEBL",
    oeprator: "Himachal Pradesh State Electricity Board Ltd",
    state: "Himachal Pradesh",
  },

  {
    mplanId: "JKPDD",
    oeprator: "Jammu & Kashmir power Development department",
    state: "Jammu and Kashmir",
  },

  {
    mplanId: "BESCOM",
    oeprator: "Bangalore Electricity Supply Company Ltd. (BESCOM)",
    state: "Karnataka",
  },
  {
    mplanId: "CESCOM",
    oeprator:
      "Chamundeshwari Electricity Supply Corporation Ltd. (Cesc,Mysore)",
    state: "Karnataka",
  },
  {
    mplanId: "GESCOM",
    oeprator: "Gulbarga Electricity Supply Company Ltd. (GESCOM)",
    state: "Karnataka",
  },
  {
    mplanId: "HESCOM",
    oeprator: "Hubli Electricity Supply Company Ltd. (HESCOM)",
    state: "Karnataka",
  },
  {
    mplanId: "MESCOMR",
    oeprator: "Mangalore Electricity Supply Co. Ltd (MESCOM) - RAPDR",
    state: "Karnataka",
  },
  {
    mplanId: "MESCOMNR",
    oeprator: "Mangalore Electricity Supply Co. Ltd (Non) - RAPDR",
    state: "Karnataka",
  },

  { mplanId: "KSEB> Kerala State Electricity Board Ltd.", state: "Kerala" },
  { mplanId: "KDHPCPL", oeprator: "kannan devan hills power", state: "Kerala" },

  {
    mplanId: "LED",
    oeprator: "Lakshadweep Electricity Department",
    state: "Lakshadweep",
  },

  {
    mplanId: "MPPKVVCL",
    oeprator: "Madhya Pradesh Paschim Kshetra Vidyut Vitaran Company Ltd",
    state: "Madhya Pradesh",
  },
  {
    mplanId: "MPPKVVCLPUU",
    oeprator: "MP Poorv Kshetra Vidyut Vitaran - Jabalpur",
    state: "Madhya Pradesh",
  },
  {
    mplanId: "MPPKVVCLPUR",
    oeprator: "MP Poorv Kshetra Vidyut Vitaran - Rular",
    state: "Madhya Pradesh",
  },
  {
    mplanId: "MPPKVVCLMU >MP Madhaya Kshetra Vidyut Vitaran -Urban",
    state: "Madhya Pradesh",
  },
  {
    mplanId: "MPPKVVCLMR >MP Madhaya Kshetra Vidyut Vitaran- Rular",
    state: "Madhya Pradesh",
  },
  {
    mplanId: "MPPKVVCL",
    oeprator: "MP Madhya Kshetra Vidyut Vitran - Bhopal",
    state: "Madhya Pradesh",
  },

  {
    mplanId: "MSEDCL",
    oeprator: "Maharashtra State Electricity Distribution",
    state: "Maharashtra",
  },
  { mplanId: "TATAMU >Tata Power Mumbai", state: "Maharashtra" },
  { mplanId: "RELIANCE", oeprator: "Reliance Energy", state: "Maharashtra" },
  {
    mplanId: "TORRENTSHIL",
    oeprator: "Torrent Power SHIL",
    state: "Maharashtra",
  },
  {
    mplanId: "TORRENTBHIVA",
    oeprator: "Torrent Power Bhivandi",
    state: "Maharashtra",
  },
  { mplanId: "BESTMUMBAI", oeprator: "BEST Mumbai", state: "Maharashtra" },
  { mplanId: "AEML", oeprator: "Adani power", state: "Maharashtra" },

  {
    mplanId: "MSPDCLPR",
    oeprator: "Manipur State Power Distribution Company Limited (Prepaid)",
    state: "Manipur",
  },

  {
    mplanId: "MPDCL",
    oeprator: "Meghalaya Power Dist Corp Ltd",
    state: "Meghalaya",
  },

  {
    mplanId: "MPED",
    oeprator: "Power & Electricity Department - Mizoram",
    state: "Mizoram",
  },

  {
    mplanId: "NDOP",
    oeprator: "Department of Power, Nagaland",
    state: "Nagaland",
  },

  { mplanId: "BSESR", oeprator: "BSES Rajdhani - Delhi", state: "New Delhi" },
  { mplanId: "BSESY", oeprator: "BSES Yamuna - Delhi", state: "New Delhi" },
  { mplanId: "TATA", oeprator: "Tata Power Delhi", state: "New Delhi" },
  {
    mplanId: "NDMC",
    oeprator: "New Delhi Municipal Council (NDMC) - Electricity",
    state: "New Delhi",
  },

  { mplanId: "NESCO", oeprator: "NESCO Odisha", state: "Odisha" },
  { mplanId: "SOUTHCO", oeprator: "SOUTHCO Odisha", state: "Odisha" },
  {
    mplanId: "TPCODL",
    oeprator: "TP central odisha distribution limited",
    state: "Odisha",
  },
  {
    mplanId: "WESCO",
    oeprator: "Western Electricity supply co. Of orissa ltd.",
    state: "Odisha",
  },

  {
    mplanId: "PGPED",
    oeprator: "Government of Puducherry Electricity Department",
    state: "Puducherry",
  },

  {
    mplanId: "PSPCL",
    oeprator: "Punjab State Power Corporation Limted",
    state: "Punjab",
  },

  {
    mplanId: "BSEL",
    oeprator: "Bharatpur Electricity Services Ltd",
    state: "Rajasthan",
  },
  {
    mplanId: "BKSEL",
    oeprator: "Bikaner Electricity Supply Limited",
    state: "Rajasthan",
  },
  {
    mplanId: "KEDL",
    oeprator: "Kota Electricity Distribution Ltd",
    state: "Rajasthan",
  },
  {
    mplanId: "JVVNL",
    oeprator: "Jaipur Vidyut Vitran Nigam Ltd",
    state: "Rajasthan",
  },
  {
    mplanId: "AVVNL",
    oeprator: "Ajmer Vidyut Vitran Nigam Ltd",
    state: "Rajasthan",
  },
  {
    mplanId: "JDVVNL",
    oeprator: "Jodhpur Vidyut Vitran Nigam Ltd",
    state: "Rajasthan",
  },
  {
    mplanId: "TPADL",
    oeprator: "TP Ajmer Distribution Ltd",
    state: "Rajasthan",
  },

  { mplanId: "SPR", oeprator: "Sikkim Power Rural", state: "Sikkim" },
  { mplanId: "SPU", oeprator: "Sikkim Power Urban", state: "Sikkim" },

  {
    mplanId: "TNEB",
    oeprator: "Tamil Nadu Electricity Board",
    state: "Tamil Nadu",
  },

  {
    mplanId: "TSSPDCL",
    oeprator: "Telangana southern power",
    state: "Telangana",
  },
  {
    mplanId: "TSNPDCL",
    oeprator: "Telangana northern power",
    state: "Telangana",
  },

  {
    mplanId: "TSECL",
    oeprator: "Tripura state Electricity corporation",
    state: "Tripura",
  },

  {
    mplanId: "UPPCL",
    oeprator: "Uttar Pradesh Power Corporation Limited",
    state: "Uttar Pradesh",
  },
  {
    mplanId: "UPPCLR",
    oeprator: "Uttar Pradesh Power Corporation Limited",
    state: "Uttar Pradesh",
  },
  {
    mplanId: "TORRENTAGRA",
    oeprator: "Torrent Power Agra",
    state: "Uttar Pradesh",
  },
  {
    mplanId: "KESCO",
    oeprator: "Kanpur Electricity Supply Company",
    state: "Uttar Pradesh",
  },
  { mplanId: "NOIDA", oeprator: "Noida Power", state: "Uttar Pradesh" },

  {
    mplanId: "UPCL",
    oeprator: "Uttarakhand Power Corporation Limited",
    state: "Uttarakhand",
  },

  {
    mplanId: "IPCL",
    oeprator: "India Power Corporation Limited (IPCL)",
    state: "West Bengal",
  },
  {
    mplanId: "WBSEEDCL",
    oeprator: "West Bengal State Electricity Distribution Company Limited",
    state: "West Bengal",
  },
  {
    mplanId: "CESC",
    oeprator: "Calcutta Electric Supply Corporation (CESC)",
    state: "West Bengal",
  },
  {
    mplanId: "TORRENTDAHEJ",
    oeprator: "Torrent Power Dahej",
    state: "West Bengal",
  },
];
