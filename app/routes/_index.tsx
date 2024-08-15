import type { MetaFunction } from "@remix-run/node";
import Mycard from "./card.mycard";
import Navbar from "./Template/Nav";

export const meta: MetaFunction = () => {
  return [
    { title: "Patipat" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Navbar />
      <div className="font-sans p-12 bg-teal-700 rounded-xl">
      {/* <Mycard /> */}
      <h1 className="text-3xl">My Profile</h1>
      <img src="\image\profileme.jpg" alt="" style={{ width: "25%;"}} />
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>Patipat Chanseetid</li>
        <li>Class : Information Technology</li>
        <li>Email : <a href="mailto:patipat.cha@rmutto.ac.th">Contact me</a></li>
          </ul>
          <a href="mySculptureList">mySculptureList</a>
          </div>
    </div>
  );
}
