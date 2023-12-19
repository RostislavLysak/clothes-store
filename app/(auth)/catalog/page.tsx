import linking from "@/routes/linking";
import { redirect } from "next/navigation";

const Catalog = async () => {
  redirect(linking.hoodie.index);
};

export default Catalog;
