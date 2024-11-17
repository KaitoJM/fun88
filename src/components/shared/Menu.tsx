import { navigation_data } from "@/data/navigation.data";
import Link from "next/link";

export default function Menu() {
  const navigationItems = navigation_data;

  return (
    <div className="bg-white">
      <ul className="flex items-center">
        {navigation_data.map((item, indx) => {
          return (
            <li className="flex-1" key={`menu-item-${indx}`}>
              <Link href="/" className="flex flex-col gap-2 items-center p-2">
                <div>
                  <img src={item.icon} alt="" className="w-6" />
                </div>
                <span className="text-sm uppercase">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
