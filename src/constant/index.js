import Dashboard from "../assets/dashboard.svg";
import Wallet from "../assets/Wallet.svg";
import Employee from "../assets/user-plus.svg";
import Payroll from "../assets/Group 2.svg";
import Compliance from "../assets/check.svg";
import Loan from "../assets/Frame.svg";
import Book from "../assets/book.svg";
import Call from "../assets/call.svg";
import Setting from "../assets/settings.svg";

export const sidebarLinks = [
  {
    imgURL: Dashboard,
    route: "/dashboard",
    label: "Dashboard",
  },
  {
    imgURL: Wallet,
    route: "/wallet",
    label: "Wallet",
  },
  {
    imgURL: Employee,
    route: "/employee",
    label: "Employee Management",
  },
  {
    imgURL: Payroll,
    route: "/payroll",
    label: "Payroll",
  },
  {
    imgURL: Compliance,
    route: "/compliances",
    label: "Compliance",
  },
  {
    imgURL: Loan,
    route: "/loan",
    label: "Quick Loan",
  },
  {
    imgURL: Book,
    route: "/book-keeping",
    label: "Book Keeping",
  },
];

export const sidebarLinkstwo = [
  {
    imgURL: Call,
    route: "/support",
    label: "Support",
  },
  {
    imgURL: Setting,
    route: "/setting",
    label: "Setting",
  },
];
