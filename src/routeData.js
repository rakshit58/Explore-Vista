// routeData.js (store the routes in a separate file for better organization)
import Home from "./routes/Home";
import Service from "./routes/Service";
import About from "./routes/About";
import Contacts from "./routes/Contacts";
import Udaipur from "./routes/Udaipur";
import Rajasthan from "./routes/Rajasthan";
import Goa from "./routes/Goa";
import Thailand from "./routes/Thailand";
import Kashmir from "./routes/Kashmir";
import Kerala from "./routes/Kerala";
import Europe from "./routes/Europe";
import Maldives from "./routes/Maldives";
import Dubai from "./routes/Dubai";
import Vietnam from "./routes/Vietnam";
import Malaysia from "./routes/Malaysia";


export const routeData = [
  { path: "/", element: <Home /> },
  { path: "/service", element: <Service /> },
  { path: "/about", element: <About /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/udaipur", element: <Udaipur />},
  { path: "/rajasthan", element: <Rajasthan/>},
  { path: "/goa", element: <Goa /> },
  { path: "/thailand", element: <Thailand /> },
  { path: "/kashmir", element: <Kashmir/> },
  { path: "/kerala", element: <Kerala/> },
  { path: "/europe", element: <Europe /> },
  { path: "/maldives", element: <Maldives/> },
  { path: "/dubai", element: <Dubai/> },
  { path: "/vietnam", element: <Vietnam/> },
  { path: "/malaysia", element: <Malaysia/> },
  
];
