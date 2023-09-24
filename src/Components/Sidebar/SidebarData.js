import { FaHome, FaInfoCircle, FaEnvelope,FaUserAlt} from 'react-icons/fa';
import { BsGrid1X2} from 'react-icons/bs';

export const SidebarData=[
    {
        title: "Home",
        path: "/",
        icon: <FaHome />,
      },
      {
        title: "Contact",
        path: "/contact",
        icon: <FaEnvelope  />,
      },
      {
        title: "Users",
        path: "/grid",
        icon: <FaUserAlt />
        
      },
      {
        title: "Report",
        path: "/report",
        icon: <BsGrid1X2  />

      },
      {
        title: "Information",
        path: "/user",
        icon: <FaInfoCircle />
      },
]